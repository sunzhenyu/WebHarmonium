'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useAudioEngine } from '@/lib/hooks/useAudioEngine';
import { useKeyboard } from '@/lib/hooks/useKeyboard';
import { useLocalStorage } from '@/lib/hooks/useLocalStorage';
import { STORAGE_KEYS, DEFAULT_VALUES } from '@/lib/utils/constants';
import { trackControlChange, trackPracticeSession } from '@/lib/utils/analytics';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import SimpleKeyboard from './SimpleKeyboard';
import VolumeControl from './VolumeControl';
import TransposeControl from './TransposeControl';
import OctaveControl from './OctaveControl';
import ReverbControl from './ReverbControl';
import ReedsControl from './ReedsControl';
import DroneControl from './DroneControl';

export default function MobileHarmoniumApp() {
  const { t } = useLanguage();
  const [volume, setVolume] = useLocalStorage<number>(STORAGE_KEYS.VOLUME, DEFAULT_VALUES.VOLUME);
  const [transpose, setTranspose] = useLocalStorage<number>(STORAGE_KEYS.TRANSPOSE, DEFAULT_VALUES.TRANSPOSE);
  const [octave, setOctave] = useLocalStorage<number>(STORAGE_KEYS.OCTAVE, DEFAULT_VALUES.OCTAVE);
  const [reeds, setReeds] = useLocalStorage<number>('harmonium.reeds', 1);
  const [reverbEnabled, setReverbEnabled] = useLocalStorage<boolean>('harmonium.reverb', false);
  const [droneEnabled, setDroneEnabled] = useLocalStorage<boolean>('harmonium.drone', false);
  const [droneVolume, setDroneVolume] = useLocalStorage<number>('harmonium.droneVolume', 0.5);
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());
  const startTimeRef = useRef<number>(Date.now());

  const { engine, isLoaded, isLoading, loadEngine } = useAudioEngine();

  const handleKeyStateChange = (key: string, isPressed: boolean) => {
    setPressedKeys(prev => {
      const newSet = new Set(prev);
      if (isPressed) newSet.add(key);
      else newSet.delete(key);
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

  useEffect(() => {
    if (!isLoaded && !isLoading) loadEngine(octave, transpose);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    return () => {
      const duration = Math.floor((Date.now() - startTimeRef.current) / 1000);
      if (duration > 5) trackPracticeSession(duration);
    };
  }, []);

  useEffect(() => { if (engine) { engine.setVolume(volume); trackControlChange('volume', volume); } }, [engine, volume]);
  useEffect(() => { if (engine) { engine.setTranspose(transpose); trackControlChange('transpose', transpose); } }, [engine, transpose]);
  useEffect(() => { if (engine) { engine.setOctave(octave); trackControlChange('octave', octave); } }, [engine, octave]);
  useEffect(() => { if (engine) { engine.setReeds(reeds); trackControlChange('reeds', reeds); } }, [engine, reeds]);
  useEffect(() => { if (engine) { engine.setReverb(reverbEnabled); trackControlChange('reverb', reverbEnabled); } }, [engine, reverbEnabled]);
  useEffect(() => { if (engine) { engine.setDrone(droneEnabled); trackControlChange('drone', droneEnabled); } }, [engine, droneEnabled]);
  useEffect(() => { if (engine) { engine.setDroneVolume(droneVolume); trackControlChange('drone_volume', droneVolume); } }, [engine, droneVolume]);

  const rootNote = engine?.getTransposeNoteName() || 'D';

  return (
    <div className="w-full">
      {isLoading && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          <p className="mt-4 text-zinc-400">{t.ui.loading}</p>
        </div>
      )}

      {isLoaded && (
        <>
          {/* 深色琴键区域 */}
          <div className="bg-zinc-900 rounded-xl p-4 pb-6">
            <SimpleKeyboard engine={engine} pressedKeys={pressedKeys} />
            <div className="mt-3 flex flex-wrap gap-3 justify-center text-xs text-zinc-500">
              <span>{t.ui.whiteKeys} <code className="bg-zinc-800 text-zinc-300 px-1.5 py-0.5 rounded">e r t y u i o</code></span>
              <span>{t.ui.blackKeys} <code className="bg-zinc-800 text-zinc-300 px-1.5 py-0.5 rounded">2 4 7 8 9</code></span>
            </div>
          </div>

          {/* 控制区 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
            <VolumeControl volume={volume} onChange={setVolume} />
            <TransposeControl transpose={transpose} rootNote={rootNote} onChange={setTranspose} />
            <OctaveControl octave={octave} onChange={setOctave} />
            <ReedsControl reeds={reeds} onChange={setReeds} />
            <ReverbControl enabled={reverbEnabled} onChange={setReverbEnabled} />
            <DroneControl
              enabled={droneEnabled}
              volume={droneVolume}
              rootNote={rootNote}
              onToggle={setDroneEnabled}
              onVolumeChange={setDroneVolume}
            />
          </div>
        </>
      )}
    </div>
  );
}
