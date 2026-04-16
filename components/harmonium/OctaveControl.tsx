import React from 'react';
import { OCTAVE_RANGE } from '@/lib/utils/constants';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface OctaveControlProps {
  octave: number;
  onChange: (octave: number) => void;
}

export default function OctaveControl({ octave, onChange }: OctaveControlProps) {
  const { t } = useLanguage();
  return (
    <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 text-center min-w-[140px]">
      <h3 className="font-semibold mb-3 text-zinc-200">{t.controls.octave}</h3>
      <div className="flex items-center justify-center gap-3">
        <button onClick={() => onChange(Math.max(OCTAVE_RANGE.MIN, octave - 1))}
          disabled={octave <= OCTAVE_RANGE.MIN}
          className="w-8 h-8 rounded bg-teal-500 hover:bg-teal-600 disabled:opacity-30 font-bold text-white">-</button>
        <span className="w-8 text-center font-bold text-xl text-white">{octave}</span>
        <button onClick={() => onChange(Math.min(OCTAVE_RANGE.MAX, octave + 1))}
          disabled={octave >= OCTAVE_RANGE.MAX}
          className="w-8 h-8 rounded bg-teal-500 hover:bg-teal-600 disabled:opacity-30 font-bold text-white">+</button>
      </div>
    </div>
  );
}
