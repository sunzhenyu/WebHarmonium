import React from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface VolumeControlProps {
  volume: number;
  onChange: (volume: number) => void;
}

export default function VolumeControl({ volume, onChange }: VolumeControlProps) {
  const { t } = useLanguage();
  return (
    <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 text-center min-w-[140px]">
      <h3 className="font-semibold mb-3 text-zinc-200">{t.controls.volume}</h3>
      <input type="range" min="1" max="100" value={volume}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-orange-500" />
      <p className="text-sm text-zinc-400 mt-1">{volume}%</p>
    </div>
  );
}
