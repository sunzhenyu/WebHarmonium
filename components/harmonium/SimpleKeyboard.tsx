import React, { useEffect, useRef } from 'react';
import { AudioEngine } from '@/lib/audio/AudioEngine';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface SimpleKeyboardProps {
  engine: AudioEngine | null;
  pressedKeys: Set<string>;
}

const simpleKeys = [
  { keyChar: 'e', note: 'C', sargam: 'Sa', isBlack: false },
  { keyChar: '2', note: 'C#', sargam: 'Re♭', isBlack: true },
  { keyChar: 'r', note: 'D', sargam: 'Re', isBlack: false },
  { keyChar: '4', note: 'D#', sargam: 'Ga♭', isBlack: true },
  { keyChar: 't', note: 'E', sargam: 'Ga', isBlack: false },
  { keyChar: 'y', note: 'F', sargam: 'Ma', isBlack: false },
  { keyChar: '7', note: 'F#', sargam: 'Ma#', isBlack: true },
  { keyChar: 'u', note: 'G', sargam: 'Pa', isBlack: false },
  { keyChar: '8', note: 'G#', sargam: 'Dha♭', isBlack: true },
  { keyChar: 'i', note: 'A', sargam: 'Dha', isBlack: false },
  { keyChar: '9', note: 'A#', sargam: 'Ni♭', isBlack: true },
  { keyChar: 'o', note: 'B', sargam: 'Ni', isBlack: false },
];

const keyboardMap: Record<string, number> = {
  'e': 60, '2': 61, 'r': 62, '4': 63, 't': 64,
  'y': 65, '7': 66, 'u': 67, '8': 68, 'i': 69, '9': 70, 'o': 71,
};

export default function SimpleKeyboard({ engine, pressedKeys }: SimpleKeyboardProps) {
  const { t } = useLanguage();

  // Track which note each touch identifier is playing, so we can stop
  // the right note when the touch ends/cancels — even if the finger
  // slides off the button before lifting.
  const touchNotesRef = useRef<Map<number, number>>(new Map());
  // Track mouse-pressed note so we can release on global mouseup
  // even if the cursor left the button first.
  const mouseNoteRef = useRef<number | null>(null);

  const playNote = (keyChar: string): number | null => {
    if (!engine) return null;
    const note = keyboardMap[keyChar];
    if (note === undefined) return null;
    engine.noteOn(note);
    return note;
  };

  const stopNote = (note: number) => {
    if (!engine) return;
    engine.noteOff(note);
  };

  // Global listeners as a safety net: if any touch ends/cancels anywhere
  // (e.g. finger slides off the key before lifting), release that note.
  useEffect(() => {
    if (!engine) return;

    const handleTouchEnd = (e: TouchEvent) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i];
        const note = touchNotesRef.current.get(touch.identifier);
        if (note !== undefined) {
          stopNote(note);
          touchNotesRef.current.delete(touch.identifier);
        }
      }
    };

    const handleMouseUp = () => {
      if (mouseNoteRef.current !== null) {
        stopNote(mouseNoteRef.current);
        mouseNoteRef.current = null;
      }
    };

    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchcancel', handleTouchEnd);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchcancel', handleTouchEnd);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [engine]);

  const handleTouchStart = (e: React.TouchEvent, keyChar: string) => {
    e.preventDefault();
    for (let i = 0; i < e.changedTouches.length; i++) {
      const touch = e.changedTouches[i];
      if (touchNotesRef.current.has(touch.identifier)) continue;
      const note = playNote(keyChar);
      if (note !== null) {
        touchNotesRef.current.set(touch.identifier, note);
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent, keyChar: string) => {
    // Skip if this is a synthesized mouse event from a touch — touchstart
    // already handled it. Touch devices fire mousedown ~300ms after touchend.
    if (e.button !== 0) return;
    if (mouseNoteRef.current !== null) {
      stopNote(mouseNoteRef.current);
    }
    const note = playNote(keyChar);
    mouseNoteRef.current = note;
  };

  const isKeyPressed = (keyChar: string) =>
    pressedKeys.has(keyChar) || pressedKeys.has(keyChar.toUpperCase());

  return (
    <div className="flex justify-center my-2">
      <div className="relative w-full max-w-2xl">
        {/* 白键 */}
        <div className="flex gap-1">
          {simpleKeys.filter(k => !k.isBlack).map((key) => (
            <button
              key={key.keyChar}
              className={`flex-1 h-32 sm:h-40 rounded-b-xl border transition-all shadow-md touch-none select-none ${
                isKeyPressed(key.keyChar)
                  ? 'bg-orange-200 border-orange-400 scale-95'
                  : 'bg-stone-100 border-stone-300 hover:bg-stone-200 active:bg-orange-100'
              }`}
              onMouseDown={(e) => handleMouseDown(e, key.keyChar)}
              onTouchStart={(e) => handleTouchStart(e, key.keyChar)}
              onContextMenu={(e) => e.preventDefault()}
              aria-label={`${key.sargam} (${key.note})`}
            >
              <div className="flex flex-col items-center justify-end h-full pb-3 pointer-events-none">
                <span className="text-xs sm:text-sm text-stone-400 font-mono">{key.keyChar}</span>
                <span className="text-sm sm:text-base font-bold text-stone-800 mt-1">{t.sargam[key.note as keyof typeof t.sargam]}</span>
                <span className="text-xs text-stone-400 mt-0.5">{key.note}</span>
              </div>
            </button>
          ))}
        </div>

        {/* 黑键 */}
        <div className="absolute top-0 left-0 w-full h-20 sm:h-24 pointer-events-none">
          <div className="relative h-full">
            {simpleKeys.filter(k => k.isBlack).map((key, index) => {
              const positions = [10, 24, 52, 66, 80];
              return (
                <button
                  key={key.keyChar}
                  className={`absolute h-full w-12 sm:w-16 rounded-b-lg border transition-all pointer-events-auto shadow-lg touch-none select-none ${
                    isKeyPressed(key.keyChar)
                      ? 'bg-zinc-600 border-zinc-500 scale-95'
                      : 'bg-zinc-800 border-zinc-700 hover:bg-zinc-700 active:bg-zinc-600'
                  }`}
                  style={{ left: `${positions[index]}%`, transform: 'translateX(-50%)' }}
                  onMouseDown={(e) => handleMouseDown(e, key.keyChar)}
                  onTouchStart={(e) => handleTouchStart(e, key.keyChar)}
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <div className="flex flex-col items-center justify-end h-full pb-2 pointer-events-none">
                    <span className="text-xs text-zinc-400 font-mono">{key.keyChar}</span>
                    <span className="text-xs text-zinc-300 mt-0.5 font-medium">{t.sargam[key.note as keyof typeof t.sargam]}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
