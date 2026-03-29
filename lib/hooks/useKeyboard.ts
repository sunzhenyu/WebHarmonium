import { useEffect } from 'react';
import { keyboardMap } from '../audio/keyboardMap';
import { AudioEngine } from '../audio/AudioEngine';

export function useKeyboard(
  engine: AudioEngine | null,
  enabled: boolean,
  onKeyStateChange?: (key: string, isPressed: boolean) => void
) {
  useEffect(() => {
    if (!engine || !enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.repeat) return;

      const note = keyboardMap[event.key];
      if (note !== undefined) {
        engine.noteOn(note);
        onKeyStateChange?.(event.key, true);
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      const note = keyboardMap[event.key];
      if (note !== undefined) {
        engine.noteOff(note);
        onKeyStateChange?.(event.key, false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [engine, enabled, onKeyStateChange]);
}
