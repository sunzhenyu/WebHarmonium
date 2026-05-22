'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

interface DroneControlProps {
  enabled: boolean;
  volume: number;
  rootNote: string;
  onToggle: (enabled: boolean) => void;
  onVolumeChange: (volume: number) => void;
}

export default function DroneControl({ enabled, volume, rootNote, onToggle, onVolumeChange }: DroneControlProps) {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col items-center min-w-[140px] bg-zinc-800 border border-zinc-700 rounded-lg p-3">
      <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-2">{t.controls.shrutiBox}</span>
      <button
        onClick={() => onToggle(!enabled)}
        className={`relative w-full py-2 px-3 rounded-lg text-sm font-semibold transition-colors mb-2 ${
          enabled
            ? 'bg-teal-500 text-white hover:bg-teal-600 shadow-[0_0_0_3px_rgba(20,184,166,0.35)] animate-pulse'
            : 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600'
        }`}
      >
        {enabled ? `● ${rootNote} ${t.controls.droneOn}` : `${rootNote} ${t.controls.droneOff}`}
      </button>
      {enabled && (
        <div className="w-full">
          <input
            type="range"
            min={0}
            max={0.6}
            step={0.02}
            value={volume}
            onChange={e => onVolumeChange(parseFloat(e.target.value))}
            className="w-full accent-teal-500"
          />
          <div className="flex justify-between text-[10px] text-zinc-500 mt-0.5">
            <span>{t.controls.droneSoft}</span>
            <span className="text-zinc-300">{Math.round((volume / 0.6) * 100)}%</span>
            <span>{t.controls.droneStrong}</span>
          </div>
        </div>
      )}
      {!enabled && <p className="text-xs text-zinc-500 text-center">{t.controls.droneDesc}</p>}
    </div>
  );
}
