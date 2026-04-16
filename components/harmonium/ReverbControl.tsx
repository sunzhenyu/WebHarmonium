import React from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface ReverbControlProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

export default function ReverbControl({ enabled, onChange }: ReverbControlProps) {
  const { t } = useLanguage();
  return (
    <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 text-center min-w-[140px]">
      <h3 className="font-semibold mb-3 text-zinc-200">{t.controls.reverb}</h3>
      <button onClick={() => onChange(!enabled)}
        className={`w-full py-1.5 px-3 rounded-lg text-sm font-semibold transition-colors ${
          enabled ? 'bg-teal-500 text-white' : 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600'
        }`}>
        {enabled ? t.controls.on : t.controls.off}
      </button>
    </div>
  );
}
