import React from 'react';
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

  const handleMouseDown = (keyChar: string) => {
    if (!engine) return;
    const note = keyboardMap[keyChar];
    if (note !== undefined) engine.noteOn(note);
  };

  const handleMouseUp = (keyChar: string) => {
    if (!engine) return;
    const note = keyboardMap[keyChar];
    if (note !== undefined) engine.noteOff(note);
  };

  const handleTouchStart = (e: React.TouchEvent, keyChar: string) => {
    e.preventDefault();
    handleMouseDown(keyChar);
  };

  const handleTouchEnd = (e: React.TouchEvent, keyChar: string) => {
    e.preventDefault();
    handleMouseUp(keyChar);
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
              className={`flex-1 h-32 sm:h-40 rounded-b-xl border transition-all shadow-md ${
                isKeyPressed(key.keyChar)
                  ? 'bg-orange-200 border-orange-400 scale-95'
                  : 'bg-stone-100 border-stone-300 hover:bg-stone-200 active:bg-orange-100'
              }`}
              onMouseDown={() => handleMouseDown(key.keyChar)}
              onMouseUp={() => handleMouseUp(key.keyChar)}
              onMouseLeave={() => handleMouseUp(key.keyChar)}
              onTouchStart={(e) => handleTouchStart(e, key.keyChar)}
              onTouchEnd={(e) => handleTouchEnd(e, key.keyChar)}
              aria-label={`${key.sargam} (${key.note})`}
            >
              <div className="flex flex-col items-center justify-end h-full pb-3">
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
                  className={`absolute h-full w-12 sm:w-16 rounded-b-lg border transition-all pointer-events-auto shadow-lg ${
                    isKeyPressed(key.keyChar)
                      ? 'bg-zinc-600 border-zinc-500 scale-95'
                      : 'bg-zinc-800 border-zinc-700 hover:bg-zinc-700 active:bg-zinc-600'
                  }`}
                  style={{ left: `${positions[index]}%`, transform: 'translateX(-50%)' }}
                  onMouseDown={() => handleMouseDown(key.keyChar)}
                  onMouseUp={() => handleMouseUp(key.keyChar)}
                  onMouseLeave={() => handleMouseUp(key.keyChar)}
                  onTouchStart={(e) => handleTouchStart(e, key.keyChar)}
                  onTouchEnd={(e) => handleTouchEnd(e, key.keyChar)}
                >
                  <div className="flex flex-col items-center justify-end h-full pb-2">
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
