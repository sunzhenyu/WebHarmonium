import React from 'react';
import { TRANSPOSE_RANGE } from '@/lib/utils/constants';

interface TransposeControlProps {
  transpose: number;
  rootNote: string;
  onChange: (transpose: number) => void;
}

export default function TransposeControl({ transpose, rootNote, onChange }: TransposeControlProps) {
  const handleIncrement = () => {
    if (transpose < TRANSPOSE_RANGE.MAX) {
      onChange(transpose + 1);
    }
  };

  const handleDecrement = () => {
    if (transpose > TRANSPOSE_RANGE.MIN) {
      onChange(transpose - 1);
    }
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center min-w-[140px]">
      <h3 className="font-semibold mb-3 text-gray-900">Transpose</h3>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={handleDecrement}
          disabled={transpose <= TRANSPOSE_RANGE.MIN}
          className="w-8 h-8 rounded bg-blue-600 hover:bg-blue-700 disabled:opacity-40 font-bold text-white"
        >
          -
        </button>
        <div className="text-center min-w-[48px]">
          <div className="text-xl font-bold text-gray-900">{transpose}</div>
          <div className="text-xs text-gray-600">{rootNote}</div>
        </div>
        <button
          onClick={handleIncrement}
          disabled={transpose >= TRANSPOSE_RANGE.MAX}
          className="w-8 h-8 rounded bg-blue-600 hover:bg-blue-700 disabled:opacity-40 font-bold text-white"
        >
          +
        </button>
      </div>
    </div>
  );
}
