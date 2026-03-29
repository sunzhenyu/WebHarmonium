import React from 'react';

interface ReverbControlProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

export default function ReverbControl({ enabled, onChange }: ReverbControlProps) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center min-w-[140px]">
      <h3 className="font-semibold mb-3 text-gray-900">Reverb</h3>
      <label className="flex items-center justify-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={enabled}
          onChange={(e) => onChange(e.target.checked)}
          className="w-4 h-4 cursor-pointer accent-blue-600"
        />
        <span className="text-sm text-gray-700">{enabled ? 'On' : 'Off'}</span>
      </label>
    </div>
  );
}
