import { AudioEngineConfig, NoteState } from './types';
import { octaveMap } from './keyboardMap';

export class AudioEngine {
  private context: AudioContext | null = null;
  private audioBuffer: AudioBuffer | null = null;
  private gainNode: GainNode | null = null;
  private reverbNode: ConvolverNode | null = null;
  private reverbGain: GainNode | null = null;
  private dryGain: GainNode | null = null;
  private sourceNodes: (AudioBufferSourceNode | null)[][] = [];
  private sourceNodeState: number[] = [];
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
  private reeds = 1;       // 1-4 stacked reeds
  private reverbEnabled = false;

  async init(octave: number = 3, transpose: number = 0): Promise<void> {
    this.currentOctave = octave;
    this.transpose = transpose;

    // Create audio context
    this.context = new AudioContext();

    // Create gain node
    this.gainNode = this.context.createGain();
    this.gainNode.gain.value = 0.3;

    // Create dry/wet reverb chain
    this.dryGain = this.context.createGain();
    this.dryGain.gain.value = 1;
    this.reverbGain = this.context.createGain();
    this.reverbGain.gain.value = 0;
    this.reverbNode = this.context.createConvolver();
    this.reverbNode.buffer = this.createReverbImpulse();

    this.gainNode.connect(this.dryGain);
    this.gainNode.connect(this.reverbNode);
    this.reverbNode.connect(this.reverbGain);
    this.dryGain.connect(this.context.destination);
    this.reverbGain.connect(this.context.destination);

    // Load audio buffer
    await this.loadAudioBuffer();

    // Initialize key maps
    this.initKeyMaps();

    // Initialize source nodes (per note, per reed)
    for (let i = 0; i < 128; i++) {
      this.sourceNodes[i] = [];
      this.sourceNodeState[i] = 0;
      this.setSourceNode(i);
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

  private setSourceNode(i: number): void {
    if (!this.context || !this.audioBuffer || !this.gainNode) return;

    // Stop existing nodes if playing
    if (this.sourceNodeState[i] === 1) {
      for (const node of this.sourceNodes[i]) {
        try { node?.stop(0); } catch (e) { /* ignore */ }
      }
    }

    this.sourceNodeState[i] = 0;
    this.sourceNodes[i] = [];

    // Create stacked source nodes (one per reed)
    for (let r = 0; r < this.reeds; r++) {
      const sourceNode = this.context.createBufferSource();
      sourceNode.connect(this.gainNode);
      sourceNode.buffer = this.audioBuffer;
      sourceNode.loop = this.config.loop;
      sourceNode.loopStart = this.config.loopStart;

      // Slight detune variation per reed for chorus effect
      const reedDetune = r === 0 ? 0 : (r % 2 === 1 ? 5 : -5);
      if (this.keyMap[i] !== 0) {
        sourceNode.detune.value = this.keyMap[i] * 100 + reedDetune;
      }

      this.sourceNodes[i].push(sourceNode);
    }
  }

  noteOn(note: number): void {
    const i = note + octaveMap[this.currentOctave];

    if (i < this.sourceNodes.length && this.sourceNodeState[i] === 0) {
      for (const node of this.sourceNodes[i]) {
        node?.start(0);
      }
      this.sourceNodeState[i] = 1;
    }
  }

  noteOff(note: number): void {
    const i = note + octaveMap[this.currentOctave];

    if (i < this.sourceNodes.length) {
      this.setSourceNode(i);
    }
  }

  setVolume(volume: number): void {
    if (this.gainNode) {
      this.gainNode.gain.value = volume / 100;
    }
  }

  setTranspose(transpose: number): void {
    this.transpose = transpose;
    this.initKeyMaps();

    // Recreate all source nodes with new detune values
    for (let i = 0; i < 128; i++) {
      this.setSourceNode(i);
    }
  }

  setOctave(octave: number): void {
    this.currentOctave = octave;
  }

  setReeds(reeds: number): void {
    this.reeds = Math.max(1, Math.min(4, reeds));
    for (let i = 0; i < 128; i++) {
      this.setSourceNode(i);
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
    const baseKeyNames = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    return baseKeyNames[this.transpose >= 0 ? this.transpose % 12 : this.transpose + 12];
  }

  destroy(): void {
    // Stop all playing notes
    for (let i = 0; i < this.sourceNodes.length; i++) {
      if (this.sourceNodeState[i] === 1) {
        for (const node of this.sourceNodes[i]) {
          try { node?.stop(0); } catch (e) { /* ignore */ }
        }
      }
    }

    // Close audio context
    if (this.context) {
      this.context.close();
    }
  }
}
