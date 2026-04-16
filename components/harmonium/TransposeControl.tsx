import React from 'react';
import { TRANSPOSE_RANGE } from '@/lib/utils/constants';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface TransposeControlProps {
  transpose: number;
  rootNote: string;
  onChange: (transpose: number) => void;
}

export default function TransposeControl({ transpose, rootNote, onChange }: TransposeControlProps) {
  const { t } = useLanguage();
  return (
    <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 text-center min-w-[140px]">
      <h3 className="font-semibold mb-3 text-zinc-200">{t.controls.transpose}</h3>
      <div className="flex items-center justify-center gap-3">
        <button onClick={() => onChange(Math.max(TRANSPOSE_RANGE.MIN, transpose - 1))}
          disabled={transpose <= TRANSPOSE_RANGE.MIN}
          className="w-8 h-8 rounded bg-orange-500 hover:bg-orange-600 disabled:opacity-30 font-bold text-white">-</button>
        <div className="text-center min-w-[48px]">
          <div className="text-xl font-bold text-white">{transpose}</div>
          <div className="text-xs text-zinc-400">{rootNote}</div>
        </div>
        <button onClick={() => onChange(Math.min(TRANSPOSE_RANGE.MAX, transpose + 1))}
          disabled={transpose >= TRANSPOSE_RANGE.MAX}
          className="w-8 h-8 rounded bg-orange-500 hover:bg-orange-600 disabled:opacity-30 font-bold text-white">+</button>
      </div>
    </div>
  );
}
