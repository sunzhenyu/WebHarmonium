import React from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface ReedsControlProps {
  reeds: number;
  onChange: (reeds: number) => void;
}

export default function ReedsControl({ reeds, onChange }: ReedsControlProps) {
  const { t } = useLanguage();

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center min-w-[140px]">
      <h3 className="font-semibold mb-3 text-gray-900">{t.controls.reeds}</h3>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => onChange(reeds - 1)}
          disabled={reeds <= 1}
          className="w-8 h-8 rounded bg-purple-600 hover:bg-purple-700 disabled:opacity-40 font-bold text-white"
        >
          -
        </button>
        <span className="w-8 text-center font-semibold text-lg text-gray-900">{reeds}</span>
        <button
          onClick={() => onChange(reeds + 1)}
          disabled={reeds >= 4}
          className="w-8 h-8 rounded bg-purple-600 hover:bg-purple-700 disabled:opacity-40 font-bold text-white"
        >
          +
        </button>
      </div>
      <p className="text-xs text-gray-600 mt-1">{t.controls.stackedReeds}</p>
    </div>
  );
}
