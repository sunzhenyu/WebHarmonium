import React from 'react';
import { AudioEngine } from '@/lib/audio/AudioEngine';

interface SimpleKeyboardProps {
  engine: AudioEngine | null;
  pressedKeys: Set<string>;
}

// 简化版键盘：只显示1个八度（12个按键）
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
  'e': 4, 'r': 6, 't': 8, 'y': 9, 'u': 11, 'i': 13, 'o': 15,
  '2': 5, '4': 7, '7': 10, '8': 12, '9': 14,
};

export default function SimpleKeyboard({ engine, pressedKeys }: SimpleKeyboardProps) {
  const handleMouseDown = (keyChar: string) => {
    if (!engine) return;
    const note = keyboardMap[keyChar];
    if (note !== undefined) {
      engine.noteOn(note);
    }
  };

  const handleMouseUp = (keyChar: string) => {
    if (!engine) return;
    const note = keyboardMap[keyChar];
    if (note !== undefined) {
      engine.noteOff(note);
    }
  };

  const handleTouchStart = (e: React.TouchEvent, keyChar: string) => {
    e.preventDefault();
    handleMouseDown(keyChar);
  };

  const handleTouchEnd = (e: React.TouchEvent, keyChar: string) => {
    e.preventDefault();
    handleMouseUp(keyChar);
  };

  const isKeyPressed = (keyChar: string) => {
    return pressedKeys.has(keyChar) || pressedKeys.has(keyChar.toUpperCase());
  };

  return (
    <div className="flex justify-center my-4">
      <div className="relative w-full max-w-2xl">
        {/* 白键 */}
        <div className="flex gap-1">
          {simpleKeys.filter(k => !k.isBlack).map((key) => (
            <button
              key={key.keyChar}
              className={`flex-1 h-32 sm:h-40 rounded-b-lg border-2 border-gray-300 shadow-md transition-all ${
                isKeyPressed(key.keyChar)
                  ? 'bg-gray-300 scale-95'
                  : 'bg-white hover:bg-gray-50 active:bg-gray-200'
              }`}
              onMouseDown={() => handleMouseDown(key.keyChar)}
              onMouseUp={() => handleMouseUp(key.keyChar)}
              onMouseLeave={() => handleMouseUp(key.keyChar)}
              onTouchStart={(e) => handleTouchStart(e, key.keyChar)}
              onTouchEnd={(e) => handleTouchEnd(e, key.keyChar)}
            >
              <div className="flex flex-col items-center justify-end h-full pb-3">
                <span className="text-xs sm:text-sm text-gray-500 font-mono">{key.keyChar}</span>
                <span className="text-sm sm:text-base font-semibold text-gray-700 mt-1">{key.sargam}</span>
                <span className="text-xs text-gray-400 mt-1">{key.note}</span>
              </div>
            </button>
          ))}
        </div>

        {/* 黑键 - 绝对定位在白键上方 */}
        <div className="absolute top-0 left-0 w-full h-20 sm:h-24 pointer-events-none">
          <div className="relative h-full">
            {simpleKeys.filter(k => k.isBlack).map((key, index) => {
              // 计算黑键位置（在相邻白键之间）
              const positions = [10, 24, 52, 66, 80]; // 百分比位置
              return (
                <button
                  key={key.keyChar}
                  className={`absolute h-full w-12 sm:w-16 rounded-b-lg border-2 border-gray-800 shadow-lg transition-all pointer-events-auto ${
                    isKeyPressed(key.keyChar)
                      ? 'bg-gray-600 scale-95'
                      : 'bg-black hover:bg-gray-800 active:bg-gray-700'
                  }`}
                  style={{ left: `${positions[index]}%`, transform: 'translateX(-50%)' }}
                  onMouseDown={() => handleMouseDown(key.keyChar)}
                  onMouseUp={() => handleMouseUp(key.keyChar)}
                  onMouseLeave={() => handleMouseUp(key.keyChar)}
                  onTouchStart={(e) => handleTouchStart(e, key.keyChar)}
                  onTouchEnd={(e) => handleTouchEnd(e, key.keyChar)}
                >
                  <div className="flex flex-col items-center justify-end h-full pb-2">
                    <span className="text-xs text-white font-mono">{key.keyChar}</span>
                    <span className="text-xs text-gray-300 mt-1">{key.sargam}</span>
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
