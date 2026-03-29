export const STORAGE_KEYS = {
  VOLUME: 'harmonium.volume',
  TRANSPOSE: 'harmonium.transpose',
  OCTAVE: 'harmonium.octave',
} as const;

export const DEFAULT_VALUES = {
  VOLUME: 30,
  TRANSPOSE: 0,
  OCTAVE: 3,
} as const;

export const TRANSPOSE_RANGE = {
  MIN: -11,
  MAX: 11,
} as const;

export const OCTAVE_RANGE = {
  MIN: 0,
  MAX: 6,
} as const;
