import { AudioEngineConfig } from './types';
import { octaveMap } from './keyboardMap';

interface NoteSlot {
  sources: AudioBufferSourceNode[];
  gains: GainNode[];
  state: 'idle' | 'playing' | 'releasing';
  releaseTimer?: ReturnType<typeof setTimeout>;
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
    const i = note + octaveMap[this.currentOctave];
    if (i < 0 || i >= 128) return;

    this.resumeContext();

    const slot = this.notes[i];

    // If releasing, cancel the release and restart cleanly
    if (slot.state === 'releasing') {
      clearTimeout(slot.releaseTimer);
      for (const src of slot.sources) {
        try { src.stop(0); } catch (_) { /* ignore */ }
      }
      this.notes[i] = this.buildNoteSlot(i);
    }

    if (this.notes[i].state === 'idle') {
      for (const src of this.notes[i].sources) {
        src.start(0);
      }
      this.notes[i].state = 'playing';
    }
  }

  noteOff(note: number): void {
    const i = note + octaveMap[this.currentOctave];
    if (i < 0 || i >= 128) return;

    const slot = this.notes[i];
    if (slot.state !== 'playing') return;

    const now = this.context?.currentTime ?? 0;
    const fadeTime = 0.3;

    slot.state = 'releasing';
    for (let r = 0; r < slot.gains.length; r++) {
      slot.gains[r].gain.setValueAtTime(slot.gains[r].gain.value, now);
      slot.gains[r].gain.exponentialRampToValueAtTime(0.001, now + fadeTime);
      try { slot.sources[r].stop(now + fadeTime); } catch (_) { /* ignore */ }
    }

    slot.releaseTimer = setTimeout(() => {
      this.notes[i] = this.buildNoteSlot(i);
    }, (fadeTime + 0.05) * 1000);
  }

  setVolume(volume: number): void {
    if (this.masterGain) {
      this.masterGain.gain.value = volume / 100;
    }
  }

  setTranspose(transpose: number): void {
    this.transpose = transpose;
    this.initKeyMaps();
    // Rebuild idle notes only; playing notes keep their pitch until released
    for (let i = 0; i < 128; i++) {
      if (this.notes[i]?.state === 'idle') {
        this.notes[i] = this.buildNoteSlot(i);
      }
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

  getTransposeNoteName(): string {
    const names = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    return names[this.transpose >= 0 ? this.transpose % 12 : this.transpose + 12];
  }

  destroy(): void {
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
