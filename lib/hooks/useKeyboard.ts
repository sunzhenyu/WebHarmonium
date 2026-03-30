import { useEffect } from 'react';
import { keyboardMap } from '../audio/keyboardMap';
import { AudioEngine } from '../audio/AudioEngine';

export function useKeyboard(
  engine: AudioEngine | null,
  enabled: boolean,
  onKeyStateChange?: (key: string, isPressed: boolean) => void,
  onTransposeChange?: (delta: number) => void,
  onOctaveChange?: (delta: number) => void
) {
  useEffect(() => {
    if (!engine || !enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.repeat) return;

      // Keyboard shortcuts: Ctrl+Alt+Arrow keys
      if (event.ctrlKey && event.altKey) {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          onTransposeChange?.(-1);
          return;
        }
        if (event.key === 'ArrowRight') {
          event.preventDefault();
          onTransposeChange?.(1);
          return;
        }
        if (event.key === 'ArrowUp') {
          event.preventDefault();
          onOctaveChange?.(1);
          return;
        }
        if (event.key === 'ArrowDown') {
          event.preventDefault();
          onOctaveChange?.(-1);
          return;
        }
      }

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
