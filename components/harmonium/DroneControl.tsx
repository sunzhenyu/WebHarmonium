'use client';

interface DroneControlProps {
  enabled: boolean;
  volume: number;
  rootNote: string;
  onToggle: (enabled: boolean) => void;
  onVolumeChange: (volume: number) => void;
}

export default function DroneControl({ enabled, volume, rootNote, onToggle, onVolumeChange }: DroneControlProps) {
  return (
    <div className="flex flex-col items-center min-w-[140px] bg-gray-50 border border-gray-200 rounded-lg p-3">
      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Shruti Box</span>
      <button
        onClick={() => onToggle(!enabled)}
        className={`w-full py-2 px-3 rounded-lg text-sm font-semibold transition-colors mb-2 ${
          enabled
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
        }`}
      >
        {enabled ? `● ${rootNote} Drone ON` : `${rootNote} Drone OFF`}
      </button>
      {enabled && (
        <div className="w-full">
          <input
            type="range"
            min={0.1}
            max={1}
            step={0.05}
            value={volume}
            onChange={e => onVolumeChange(parseFloat(e.target.value))}
            className="w-full accent-blue-600"
          />
          <div className="text-xs text-center text-gray-500 mt-1">
            Volume {Math.round(volume * 100)}%
          </div>
        </div>
      )}
      {!enabled && (
        <p className="text-xs text-gray-400 text-center">Sa+Pa continuous drone for raga practice</p>
      )}
    </div>
  );
}
