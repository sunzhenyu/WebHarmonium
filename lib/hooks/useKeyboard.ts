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

    // Stop all sounds when window loses focus or tab becomes hidden
    // This fixes the bug where keyup never fires if user switches windows
    // while holding a key, causing notes to play indefinitely.
    const handleBlur = () => {
      engine.allNotesOff();
      onKeyStateChange?.('__all__', false);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        engine.allNotesOff();
        onKeyStateChange?.('__all__', false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('blur', handleBlur);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('blur', handleBlur);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [engine, enabled, onKeyStateChange, onTransposeChange, onOctaveChange]);
}
