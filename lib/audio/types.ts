export interface AudioEngineConfig {
  sampleURL: string;
  loopStart: number;
  loop: boolean;
}

export interface NoteState {
  sourceNode: AudioBufferSourceNode | null;
  isPlaying: boolean;
}

export type KeyboardMap = Record<string, number>;
