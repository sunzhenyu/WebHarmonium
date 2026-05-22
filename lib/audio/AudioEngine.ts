import { AudioEngineConfig } from './types';
import { octaveMap } from './keyboardMap';

interface NoteSlot {
  sources: AudioBufferSourceNode[];
  gains: GainNode[];
  state: 'idle' | 'playing' | 'releasing';
  releaseTimer?: ReturnType<typeof setTimeout>;
}

// An individual "voice" — the actual audio nodes started by one noteOn.
// We track these directly so noteOff can release exactly the voice it
// started, regardless of any cached slot or pool state being rebuilt
// underneath us (which used to leak sources on iOS Safari).
interface Voice {
  sources: AudioBufferSourceNode[];
  gains: GainNode[];
  pitchIndex: number;
  releaseTimer?: ReturnType<typeof setTimeout>;
  // Safety: every voice has a hard cap. If no noteOff arrives within
  // this window the voice releases itself, so a missed up event cannot
  // produce an endless drone.
  hardStopTimer?: ReturnType<typeof setTimeout>;
}

export class AudioEngine {
  private context: AudioContext | null = null;
  private audioBuffer: AudioBuffer | null = null;
  private masterGain: GainNode | null = null;
  private reverbNode: ConvolverNode | null = null;
  private reverbGain: GainNode | null = null;
  private dryGain: GainNode | null = null;
  private notes: NoteSlot[] = [];
  private keyMap: number[] = [];
  private baseKeyMap: number[] = [];

  // Map from note number (as passed by the keyboard) to the currently
  // playing Voice. One voice per held key. noteOff(note) always finds
  // and releases the exact voice that noteOn(note) started.
  private voices: Map<number, Voice> = new Map();

  // Shruti Box / Drone state
  private droneSlot: NoteSlot | null = null;
  private droneEnabled: boolean = false;
  // 0.0–0.6 range (UI clamps); 0.3 default is the sweet spot where the
  // drone sits behind the keys, like a real Shruti Box during practice.
  private droneVolume: number = 0.3;

  private config: AudioEngineConfig = {
    sampleURL: '/audio/harmonium-kannan-orig.wav',
    loopStart: 0.5,
    loop: true,
  };

  private middleC = 60;
  private rootKey = 62;
  private currentOctave = 3;
  private transpose = 0;
  private reeds = 1;
  private reverbEnabled = false;

  async init(octave: number = 3, transpose: number = 0): Promise<void> {
    this.currentOctave = octave;
    this.transpose = transpose;

    this.context = new AudioContext();

    this.masterGain = this.context.createGain();
    this.masterGain.gain.value = 0.3;

    this.dryGain = this.context.createGain();
    this.dryGain.gain.value = 1;
    this.reverbGain = this.context.createGain();
    this.reverbGain.gain.value = 0;
    this.reverbNode = this.context.createConvolver();
    this.reverbNode.buffer = this.createReverbImpulse();

    this.masterGain.connect(this.dryGain);
    this.masterGain.connect(this.reverbNode);
    this.reverbNode.connect(this.reverbGain);
    this.dryGain.connect(this.context.destination);
    this.reverbGain.connect(this.context.destination);

    await this.loadAudioBuffer();
    this.initKeyMaps();

    for (let i = 0; i < 128; i++) {
      this.notes[i] = { sources: [], gains: [], state: 'idle' };
    }
  }

  private createReverbImpulse(): AudioBuffer {
    if (!this.context) throw new Error('AudioContext not initialized');
    const sampleRate = this.context.sampleRate;
    const length = sampleRate * 2.5;
    const impulse = this.context.createBuffer(2, length, sampleRate);
    for (let c = 0; c < 2; c++) {
      const channel = impulse.getChannelData(c);
      for (let i = 0; i < length; i++) {
        channel[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, 2);
      }
    }
    return impulse;
  }

  private async loadAudioBuffer(): Promise<void> {
    const response = await fetch(this.config.sampleURL);
    const arrayBuffer = await response.arrayBuffer();
    if (!this.context) throw new Error('AudioContext not initialized');
    this.audioBuffer = await this.context.decodeAudioData(arrayBuffer);
  }

  private initKeyMaps(): void {
    const startKey = (this.middleC - 124) + (this.rootKey - this.middleC);
    for (let i = 0; i < 128; i++) {
      this.baseKeyMap[i] = startKey + i;
      this.keyMap[i] = this.baseKeyMap[i] + this.transpose;
    }
  }

  private buildNoteSlot(i: number): NoteSlot {
    if (!this.context || !this.audioBuffer || !this.masterGain) {
      return { sources: [], gains: [], state: 'idle' };
    }
    const sources: AudioBufferSourceNode[] = [];
    const gains: GainNode[] = [];

    for (let r = 0; r < this.reeds; r++) {
      const src = this.context.createBufferSource();
      const gain = this.context.createGain();
      gain.gain.value = 1;
      src.connect(gain);
      gain.connect(this.masterGain);
      src.buffer = this.audioBuffer;
      src.loop = this.config.loop;
      src.loopStart = this.config.loopStart;

      const reedDetune = r === 0 ? 0 : (r % 2 === 1 ? 5 : -5);
      if (this.keyMap[i] !== 0) {
        src.detune.value = this.keyMap[i] * 100 + reedDetune;
      }
      sources.push(src);
      gains.push(gain);
    }
    return { sources, gains, state: 'idle' };
  }

  private resumeContext(): void {
    if (this.context?.state === 'suspended') {
      this.context.resume();
    }
  }

  noteOn(note: number): void {
    if (!this.context || !this.audioBuffer || !this.masterGain) {
      return;
    }

    // Cancel any pending suspend — we're about to need the context again.
    this.cancelScheduledSuspend();

    const i = note + octaveMap[this.currentOctave];
    if (i < 0 || i >= 128) return;


    // If this note is somehow already playing (rapid re-press, or the
    // previous noteOff never fired), release the old voice first so we
    // can't leak sources.
    const existing = this.voices.get(note);
    if (existing) {
      this.releaseVoice(existing);
    }

    // Reserve the voice slot synchronously with empty arrays so a fast
    // noteOff can find this note and cancel before we actually wire up
    // any audio nodes. We do NOT create sources/gains yet — iOS Safari
    // appears to auto-start any source connected to a destination once
    // the AudioContext resumes, even if start() was never called. By
    // delaying both creation AND connection until after the resume, a
    // noteOff that arrives before resume completes simply marks the
    // voice cancelled and we never build the audio graph at all.
    const voice: Voice = { sources: [], gains: [], pitchIndex: i };
    this.voices.set(note, voice);

    // Hard safety cap: if for any reason noteOff never arrives (a missed
    // pointerup event, an iOS quirk, etc.), the note will still stop on
    // its own after 8 seconds. Long enough for normal sustained notes,
    // short enough that a stuck note is not a session-killing bug.
    voice.hardStopTimer = setTimeout(() => {
      if (this.voices.get(note) === voice) {
        this.voices.delete(note);
      }
      this.releaseVoice(voice);
    }, 8000);

    const buildAndStart = () => {
      // If the user already released this key while AudioContext was
      // still resuming, the voice has been removed from the map — bail
      // out without building any audio nodes.
      if (this.voices.get(note) !== voice) {
        return;
      }
      if (!this.context || !this.audioBuffer || !this.masterGain) return;

      const reedCount = this.reeds;
      for (let r = 0; r < reedCount; r++) {
        const src = this.context.createBufferSource();
        const gain = this.context.createGain();
        gain.gain.value = 1;
        src.connect(gain);
        gain.connect(this.masterGain);
        src.buffer = this.audioBuffer;
        src.loop = this.config.loop;
        src.loopStart = this.config.loopStart;

        const reedDetune = r === 0 ? 0 : (r % 2 === 1 ? 5 : -5);
        if (this.keyMap[i] !== 0) {
          src.detune.value = this.keyMap[i] * 100 + reedDetune;
        }
        voice.sources.push(src);
        voice.gains.push(gain);
      }

      // One more cancellation check just before pressing start, in case
      // noteOff raced us between the check above and the synchronous
      // node-construction loop.
      if (this.voices.get(note) !== voice) {
        for (let r = 0; r < voice.sources.length; r++) {
          try { voice.sources[r].disconnect(); } catch (_) { /* ignore */ }
          try { voice.gains[r].disconnect(); } catch (_) { /* ignore */ }
        }
        return;
      }

      try {
        for (const src of voice.sources) src.start(0);
      } catch (e) {
      }
    };

    if (this.context.state === 'suspended') {
      this.context.resume().then(() => {
        buildAndStart();
      }).catch((e) => {
      });
    } else {
      buildAndStart();
    }
  }

  noteOff(note: number): void {
    const voice = this.voices.get(note);
    if (!voice) return;
    this.voices.delete(note);
    this.releaseVoice(voice);

    // iOS Safari workaround: source.stop() / disconnect() do NOT stop a
    // playing looped AudioBufferSourceNode on iOS. The only reliable way
    // to silence everything is to suspend the AudioContext when no
    // voices are active and the drone is off.
    if (this.voices.size === 0 && this.droneEnabled === false) {
      this.scheduleContextSuspend();
    }
  }

  private suspendTimer?: ReturnType<typeof setTimeout>;

  private scheduleContextSuspend(): void {
    if (this.suspendTimer) clearTimeout(this.suspendTimer);
    // Short delay so rapid noteOn/noteOff sequences don't thrash the
    // context. Long enough that a stuck note actually goes silent.
    this.suspendTimer = setTimeout(() => {
      this.suspendTimer = undefined;
      if (!this.context) { return; }
      if (this.voices.size > 0 || this.droneEnabled) {
        return;
      }
      if (this.context.state !== 'running') {
        return;
      }
      this.context.suspend().then(() => {
      }).catch((e) => {
      });
    }, 80);
  }

  private cancelScheduledSuspend(): void {
    if (this.suspendTimer) {
      clearTimeout(this.suspendTimer);
      this.suspendTimer = undefined;
    }
  }

  private releaseVoice(voice: Voice): void {
    if (!this.context) return;
    if (voice.hardStopTimer) {
      clearTimeout(voice.hardStopTimer);
      voice.hardStopTimer = undefined;
    }
    if (voice.releaseTimer) {
      clearTimeout(voice.releaseTimer);
      voice.releaseTimer = undefined;
    }

    // Cut sound IMMEDIATELY: gain.value to 0 synchronously, then stop()
    // and disconnect() every node. iOS Safari ignores stop()/disconnect()
    // on looped sources — that's why we also schedule a context suspend
    // when no voices remain (see scheduleContextSuspend).
    for (let r = 0; r < voice.sources.length; r++) {
      const src = voice.sources[r];
      const gain = voice.gains[r];
      try { gain.gain.cancelScheduledValues(0); } catch (_) { /* ignore */ }
      try { gain.gain.value = 0; } catch (_) { /* ignore */ }
      try { src.stop(0); } catch (_) { /* ignore */ }
      try { src.disconnect(); } catch (_) { /* ignore */ }
      try { gain.disconnect(); } catch (_) { /* ignore */ }
    }
  }

  allNotesOff(): void {
    for (const voice of this.voices.values()) {
      this.releaseVoice(voice);
    }
    this.voices.clear();
  }

  setVolume(volume: number): void {
    if (this.masterGain) {
      this.masterGain.gain.value = volume / 100;
    }
  }

  setTranspose(transpose: number): void {
    this.transpose = transpose;
    this.initKeyMaps();
    for (let i = 0; i < 128; i++) {
      if (this.notes[i]?.state === 'idle') {
        this.notes[i] = this.buildNoteSlot(i);
      }
    }
    // Restart drone with new pitch if active
    if (this.droneEnabled) {
      this.stopDrone();
      this.startDrone();
    }
  }

  setOctave(octave: number): void {
    this.currentOctave = octave;
  }

  setReeds(reeds: number): void {
    this.reeds = Math.max(1, Math.min(4, reeds));
    for (let i = 0; i < 128; i++) {
      if (this.notes[i]?.state === 'idle') {
        this.notes[i] = this.buildNoteSlot(i);
      }
    }
  }

  setReverb(enabled: boolean): void {
    this.reverbEnabled = enabled;
    if (this.dryGain && this.reverbGain) {
      this.dryGain.gain.value = enabled ? 0.6 : 1;
      this.reverbGain.gain.value = enabled ? 0.4 : 0;
    }
  }

  // --- Shruti Box / Drone ---

  private buildDroneSlot(): NoteSlot {
    if (!this.context || !this.audioBuffer || !this.masterGain) {
      return { sources: [], gains: [], state: 'idle' };
    }
    // Sa is MIDI note 60 (middle C) + transpose, mapped via keyMap at index 64 (middle of range)
    // We use the same detune logic: Sa corresponds to note index for key "e" = MIDI 60
    const saIndex = 64; // index in keyMap that corresponds to Sa (C) at octave 3
    const sources: AudioBufferSourceNode[] = [];
    const gains: GainNode[] = [];

    // Play Sa + Pa (fifth) for a richer drone
    const droneNotes = [saIndex, saIndex + 7]; // Sa and Pa
    for (const noteIdx of droneNotes) {
      const src = this.context.createBufferSource();
      const gain = this.context.createGain();
      // Sa+Pa stack together so we attenuate each one to 0.4× the user's
      // chosen droneVolume — keeps the drone sitting behind the keys
      // rather than competing with them, matching how a real Shruti Box
      // is used as a reference pitch background.
      gain.gain.value = this.droneVolume * 0.4;
      src.connect(gain);
      gain.connect(this.masterGain);
      src.buffer = this.audioBuffer;
      src.loop = true;
      src.loopStart = this.config.loopStart;
      if (this.keyMap[noteIdx] !== 0) {
        src.detune.value = this.keyMap[noteIdx] * 100;
      }
      sources.push(src);
      gains.push(gain);
    }
    return { sources, gains, state: 'idle' };
  }

  private startDrone(): void {
    if (!this.context) return;
    this.cancelScheduledSuspend();
    if (this.context.state === 'suspended') {
      this.context.resume().then(() => this.startDroneNow()).catch(() => { /* ignore */ });
    } else {
      this.startDroneNow();
    }
  }

  private startDroneNow(): void {
    if (!this.context) return;
    // If the user toggled drone off again while we were resuming, abort.
    if (!this.droneEnabled) return;
    if (this.droneSlot) return;
    this.droneSlot = this.buildDroneSlot();
    for (const src of this.droneSlot.sources) {
      try { src.start(0); } catch (_) { /* ignore */ }
    }
    this.droneSlot.state = 'playing';
  }

  private stopDrone(): void {
    if (!this.droneSlot) return;
    for (let r = 0; r < this.droneSlot.sources.length; r++) {
      const src = this.droneSlot.sources[r];
      const gain = this.droneSlot.gains[r];
      try { gain.gain.cancelScheduledValues(0); } catch (_) { /* ignore */ }
      try { gain.gain.value = 0; } catch (_) { /* ignore */ }
      try { src.stop(0); } catch (_) { /* ignore */ }
      try { src.disconnect(); } catch (_) { /* ignore */ }
      try { gain.disconnect(); } catch (_) { /* ignore */ }
    }
    this.droneSlot = null;
  }

  setDrone(enabled: boolean): void {
    this.droneEnabled = enabled;
    if (enabled) {
      this.cancelScheduledSuspend();
      this.startDrone();
    } else {
      this.stopDrone();
      // iOS Safari can't actually stop the looped drone source via
      // stop()/disconnect(). Suspending the context is the only thing
      // that reliably silences it.
      if (this.voices.size === 0) {
        this.scheduleContextSuspend();
      }
    }
  }

  setDroneVolume(volume: number): void {
    this.droneVolume = volume;
    if (this.droneSlot) {
      for (const gain of this.droneSlot.gains) {
        // Match the 0.4× attenuation used in buildDroneSlot.
        gain.gain.value = volume * 0.4;
      }
    }
  }

  getTransposeNoteName(): string {
    const names = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    return names[this.transpose >= 0 ? this.transpose % 12 : this.transpose + 12];
  }

  destroy(): void {
    this.stopDrone();
    for (const voice of this.voices.values()) {
      if (voice.releaseTimer) clearTimeout(voice.releaseTimer);
      for (const src of voice.sources) {
        try { src.stop(0); } catch (_) { /* ignore */ }
      }
    }
    this.voices.clear();
    for (let i = 0; i < this.notes.length; i++) {
      const slot = this.notes[i];
      if (slot?.releaseTimer) clearTimeout(slot.releaseTimer);
      for (const src of slot?.sources ?? []) {
        try { src.stop(0); } catch (_) { /* ignore */ }
      }
    }
    this.context?.close();
  }
}
