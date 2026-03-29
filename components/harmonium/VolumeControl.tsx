import React from 'react';

interface VolumeControlProps {
  volume: number;
  onChange: (volume: number) => void;
}

export default function VolumeControl({ volume, onChange }: VolumeControlProps) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center min-w-[140px]">
      <h3 className="font-semibold mb-3 text-gray-900">Volume</h3>
      <input
        type="range"
        min="1"
        max="100"
        value={volume}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-blue-600"
      />
      <p className="text-sm text-gray-700 mt-1">{volume}%</p>
    </div>
  );
}
