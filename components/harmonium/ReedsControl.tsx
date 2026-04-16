import React from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface ReedsControlProps {
  reeds: number;
  onChange: (reeds: number) => void;
}

export default function ReedsControl({ reeds, onChange }: ReedsControlProps) {
  const { t } = useLanguage();
  return (
    <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 text-center min-w-[140px]">
      <h3 className="font-semibold mb-3 text-zinc-200">{t.controls.reeds}</h3>
      <div className="flex items-center justify-center gap-3">
        <button onClick={() => onChange(reeds - 1)} disabled={reeds <= 1}
          className="w-8 h-8 rounded bg-orange-500 hover:bg-orange-600 disabled:opacity-30 font-bold text-white">-</button>
        <span className="w-8 text-center font-bold text-xl text-white">{reeds}</span>
        <button onClick={() => onChange(reeds + 1)} disabled={reeds >= 4}
          className="w-8 h-8 rounded bg-orange-500 hover:bg-orange-600 disabled:opacity-30 font-bold text-white">+</button>
      </div>
      <p className="text-xs text-zinc-500 mt-1">{t.controls.stackedReeds}</p>
    </div>
  );
}
