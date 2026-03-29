import React from 'react';
import { AudioEngine } from '@/lib/audio/AudioEngine';
import { keyboardMap } from '@/lib/audio/keyboardMap';

interface KeyboardProps {
  engine: AudioEngine | null;
  pressedKeys: Set<string>;
}

interface KeyData {
  points: string;
  keyChar: string;
  isBlack: boolean;
  label?: { x: number; y: number; text: string };
}

const keys: KeyData[] = [
  { points: "0,0 14,0 14,50 21,50 21,100 0,100 0,0", keyChar: "`", isBlack: false, label: { x: 7, y: 65, text: "`" } },
  { points: "14,0 28,0 28,50 14,50 14,0", keyChar: "1", isBlack: true },
  { points: "21,50 28,50 28,0 35,0 35,50 42,50 42,100 21,100 21,50", keyChar: "q", isBlack: false, label: { x: 28, y: 65, text: "q" } },
  { points: "35,0 49,0 49,50 35,50 35,0", keyChar: "2", isBlack: true },
  { points: "42,50 49,50 49,0 63,0 63,100 42,100 42,50", keyChar: "w", isBlack: false, label: { x: 49, y: 65, text: "w" } },
  { points: "63,0 77,0 77,50 84,50 84,100 63,100 63,0", keyChar: "e", isBlack: false, label: { x: 70, y: 65, text: "e" } },
  { points: "77,0 91,0 91,50 77,50 77,0", keyChar: "4", isBlack: true },
  { points: "84,50 91,50 91,0 98,0 98,50 105,50 105,100 84,100 84,50", keyChar: "r", isBlack: false, label: { x: 91, y: 65, text: "r" } },
  { points: "98,0 112,0 112,50 98,50 98,0", keyChar: "5", isBlack: true },
  { points: "105,50 112,50 112,0 126,0 126,100 105,100 105,50", keyChar: "t", isBlack: false, label: { x: 112, y: 65, text: "t" } },
  { points: "126,0 140,0 140,50 147,50 147,100 126,100 126,0", keyChar: "y", isBlack: false, label: { x: 133, y: 65, text: "y" } },
  { points: "140,0 154,0 154,50 140,50 140,0", keyChar: "7", isBlack: true },
  { points: "147,50 154,50 154,0 161,0 161,50 168,50 168,100 147,100 147,50", keyChar: "u", isBlack: false, label: { x: 154, y: 65, text: "u" } },
  { points: "161,0 175,0 175,50 161,50 161,0", keyChar: "8", isBlack: true },
  { points: "168,50 175,50 175,0 182,0 182,50 189,50 189,100 168,100 168,50", keyChar: "i", isBlack: false, label: { x: 175, y: 65, text: "i" } },
  { points: "182,0 196,0 196,50 182,50 182,0", keyChar: "9", isBlack: true },
  { points: "189,50 196,50 196,0 210,0 210,100 189,100 189,50", keyChar: "o", isBlack: false, label: { x: 196, y: 65, text: "o" } },
  { points: "210,0 224,0 224,50 231,50 231,100 210,100 210,0", keyChar: "p", isBlack: false, label: { x: 217, y: 65, text: "p" } },
  { points: "224,0 238,0 238,50 224,50 224,0", keyChar: "-", isBlack: true },
  { points: "231,50 238,50 238,0 245,0 245,50 252,50 252,100 231,100 231,50", keyChar: "[", isBlack: false, label: { x: 238, y: 65, text: "[" } },
  { points: "245,0 259,0 259,50 245,50 245,0", keyChar: "=", isBlack: true },
  { points: "252,50 259,50 259,0 273,0 273,100 252,100 252,50", keyChar: "]", isBlack: false, label: { x: 259, y: 65, text: "]" } },
  { points: "273,0 294,0 294,100 273,100 273,0", keyChar: "\\", isBlack: false, label: { x: 280, y: 65, text: "\\" } },
];

export default function Keyboard({ engine, pressedKeys }: KeyboardProps) {
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
    return pressedKeys.has(keyChar) || pressedKeys.has(keyChar.toUpperCase()) || pressedKeys.has(keyChar.toLowerCase());
  };

  // Note names for display
  const noteNames = [
    { x: 70, text: 'C' },
    { x: 91, text: 'D' },
    { x: 112, text: 'E' },
    { x: 133, text: 'F' },
    { x: 154, text: 'G' },
    { x: 175, text: 'A' },
    { x: 196, text: 'B' },
  ];

  // Black key labels
  const blackKeyLabels = [
    { x: 16, text: '1' },
    { x: 37, text: '2' },
    { x: 79, text: '4' },
    { x: 100, text: '5' },
    { x: 142, text: '7' },
    { x: 163, text: '8' },
    { x: 184, text: '9' },
    { x: 226, text: '-' },
    { x: 247, text: '=' },
  ];

  return (
    <div className="flex justify-center my-8">
      <svg width="882" height="330" viewBox="0 0 294 110" className="border border-gray-300 rounded shadow-md">
        {keys.map((key, index) => (
          <g key={index}>
            <polygon
              points={key.points}
              className={`cursor-pointer transition-colors ${
                key.isBlack
                  ? `fill-black stroke-black stroke-1 ${isKeyPressed(key.keyChar) ? 'fill-gray-600' : 'hover:fill-gray-700 active:fill-gray-600'}`
                  : `fill-white stroke-black stroke-1 ${isKeyPressed(key.keyChar) ? 'fill-gray-300' : 'hover:fill-gray-100 active:fill-gray-200'}`
              }`}
              onMouseDown={() => handleMouseDown(key.keyChar)}
              onMouseUp={() => handleMouseUp(key.keyChar)}
              onMouseLeave={() => handleMouseUp(key.keyChar)}
              onTouchStart={(e) => handleTouchStart(e, key.keyChar)}
              onTouchEnd={(e) => handleTouchEnd(e, key.keyChar)}
            />
            {key.label && !key.isBlack && (
              <text
                x={key.label.x}
                y={key.label.y}
                fill="black"
                fontFamily="courier new"
                fontSize="14"
                pointerEvents="none"
              >
                {key.label.text}
              </text>
            )}
          </g>
        ))}

        {/* Black key labels */}
        {blackKeyLabels.map((label, index) => (
          <text
            key={`black-${index}`}
            x={label.x}
            y={30}
            fill="white"
            fontFamily="courier new"
            fontSize="14"
            pointerEvents="none"
          >
            {label.text}
          </text>
        ))}
      </svg>
    </div>
  );
}
