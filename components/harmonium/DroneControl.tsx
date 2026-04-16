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
      <button onClick={() => onToggle(!enabled)}
        className={`w-full py-2 px-3 rounded-lg text-sm font-semibold transition-colors mb-2 ${
          enabled ? 'bg-teal-500 text-white hover:bg-teal-600' : 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600'
        }`}>
        {enabled ? `● ${rootNote} ${t.controls.droneOn}` : `${rootNote} ${t.controls.droneOff}`}
      </button>
      {enabled && (
        <div className="w-full">
          <input type="range" min={0.1} max={1} step={0.05} value={volume}
            onChange={e => onVolumeChange(parseFloat(e.target.value))}
            className="w-full accent-teal-500" />
          <div className="text-xs text-center text-zinc-400 mt-1">{t.controls.volume} {Math.round(volume * 100)}%</div>
        </div>
      )}
      {!enabled && <p className="text-xs text-zinc-500 text-center">{t.controls.droneDesc}</p>}
    </div>
  );
}
