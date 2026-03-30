'use client';

import React, { useEffect, useState } from 'react';
import { useAudioEngine } from '@/lib/hooks/useAudioEngine';
import { useKeyboard } from '@/lib/hooks/useKeyboard';
import { useLocalStorage } from '@/lib/hooks/useLocalStorage';
import { STORAGE_KEYS, DEFAULT_VALUES } from '@/lib/utils/constants';
import Keyboard from './Keyboard';
import VolumeControl from './VolumeControl';
import TransposeControl from './TransposeControl';
import OctaveControl from './OctaveControl';
import LoadButton from './LoadButton';
import ReverbControl from './ReverbControl';
import ReedsControl from './ReedsControl';

export default function HarmoniumApp() {
  const [volume, setVolume] = useLocalStorage<number>(STORAGE_KEYS.VOLUME, DEFAULT_VALUES.VOLUME);
  const [transpose, setTranspose] = useLocalStorage<number>(STORAGE_KEYS.TRANSPOSE, DEFAULT_VALUES.TRANSPOSE);
  const [octave, setOctave] = useLocalStorage<number>(STORAGE_KEYS.OCTAVE, DEFAULT_VALUES.OCTAVE);
  const [reeds, setReeds] = useLocalStorage<number>('harmonium.reeds', 1);
  const [reverbEnabled, setReverbEnabled] = useLocalStorage<boolean>('harmonium.reverb', false);
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());

  const { engine, isLoaded, isLoading, loadEngine } = useAudioEngine();

  const handleKeyStateChange = (key: string, isPressed: boolean) => {
    setPressedKeys(prev => {
      const newSet = new Set(prev);
      if (isPressed) {
        newSet.add(key);
      } else {
        newSet.delete(key);
      }
      return newSet;
    });
  };

  const handleTransposeShortcut = (delta: number) => {
    setTranspose((prev: number) => Math.max(-11, Math.min(11, prev + delta)));
  };

  const handleOctaveShortcut = (delta: number) => {
    setOctave((prev: number) => Math.max(0, Math.min(6, prev + delta)));
  };

  useKeyboard(engine, isLoaded, handleKeyStateChange, handleTransposeShortcut, handleOctaveShortcut);

  const handleLoad = () => {
    loadEngine(octave, transpose);
  };

  useEffect(() => {
    if (engine) {
      engine.setVolume(volume);
    }
  }, [engine, volume]);

  useEffect(() => {
    if (engine) {
      engine.setTranspose(transpose);
    }
  }, [engine, transpose]);

  useEffect(() => {
    if (engine) {
      engine.setOctave(octave);
    }
  }, [engine, octave]);

  useEffect(() => {
    if (engine) {
      engine.setReeds(reeds);
    }
  }, [engine, reeds]);

  useEffect(() => {
    if (engine) {
      engine.setReverb(reverbEnabled);
    }
  }, [engine, reverbEnabled]);

  const rootNote = engine?.getTransposeNoteName() || 'D';

  return (
    <div className="py-6 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">Web Harmonium</h1>

        <div className="bg-white rounded-xl shadow-2xl p-6 border border-gray-200">
          <LoadButton isLoading={isLoading} isLoaded={isLoaded} onLoad={handleLoad} />

          {isLoaded && (
            <>
              <Keyboard engine={engine} pressedKeys={pressedKeys} />

              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <VolumeControl volume={volume} onChange={setVolume} />
                <TransposeControl transpose={transpose} rootNote={rootNote} onChange={setTranspose} />
                <OctaveControl octave={octave} onChange={setOctave} />
                <ReedsControl reeds={reeds} onChange={setReeds} />
                <ReverbControl enabled={reverbEnabled} onChange={setReverbEnabled} />
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold mb-2 text-gray-900">Keyboard Controls:</h3>
                <p className="text-sm text-gray-700">
                  Use keys: <code className="bg-gray-200 px-1 rounded text-gray-900">` q w e r t y u i o p [ ] \</code>
                </p>
                <p className="text-sm text-gray-700 mt-1">
                  Black keys: <code className="bg-gray-200 px-1 rounded text-gray-900">1 2 4 5 7 8 9 - =</code>
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  <strong>Shortcuts:</strong> Ctrl+Alt+← → (transpose) | Ctrl+Alt+↑ ↓ (octave)
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
