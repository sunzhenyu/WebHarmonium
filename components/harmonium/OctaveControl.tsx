import React from 'react';
import { OCTAVE_RANGE } from '@/lib/utils/constants';

interface OctaveControlProps {
  octave: number;
  onChange: (octave: number) => void;
}

export default function OctaveControl({ octave, onChange }: OctaveControlProps) {
  const handleIncrement = () => {
    if (octave < OCTAVE_RANGE.MAX) {
      onChange(octave + 1);
    }
  };

  const handleDecrement = () => {
    if (octave > OCTAVE_RANGE.MIN) {
      onChange(octave - 1);
    }
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center min-w-[140px]">
      <h3 className="font-semibold mb-3 text-gray-900">Octave</h3>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={handleDecrement}
          disabled={octave <= OCTAVE_RANGE.MIN}
          className="w-8 h-8 rounded bg-green-600 hover:bg-green-700 disabled:opacity-40 font-bold text-white"
        >
          -
        </button>
        <span className="w-8 text-center font-semibold text-lg text-gray-900">{octave}</span>
        <button
          onClick={handleIncrement}
          disabled={octave >= OCTAVE_RANGE.MAX}
          className="w-8 h-8 rounded bg-green-600 hover:bg-green-700 disabled:opacity-40 font-bold text-white"
        >
          +
        </button>
      </div>
    </div>
  );
}
