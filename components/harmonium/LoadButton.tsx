import React from 'react';

interface LoadButtonProps {
  isLoading: boolean;
  isLoaded: boolean;
  onLoad: () => void;
}

export default function LoadButton({ isLoading, isLoaded, onLoad }: LoadButtonProps) {
  if (isLoaded) {
    return (
      <div className="text-center p-4">
        <div className="inline-block px-6 py-3 bg-green-100 text-green-800 rounded-lg border border-green-300">
          ✓ Module Loaded
        </div>
      </div>
    );
  }

  return (
    <div className="text-center p-4">
      <button
        onClick={onLoad}
        disabled={isLoading}
        className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:text-gray-200 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? 'Loading...' : 'Load Module'}
      </button>
      <p className="mt-2 text-sm text-gray-600">
        Click to initialize the audio engine
      </p>
    </div>
  );
}
