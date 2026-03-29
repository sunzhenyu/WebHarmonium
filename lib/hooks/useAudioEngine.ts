import { useEffect, useRef, useState } from 'react';
import { AudioEngine } from '../audio/AudioEngine';

export function useAudioEngine() {
  const engineRef = useRef<AudioEngine | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadEngine = async (octave: number, transpose: number) => {
    if (engineRef.current) return;

    setIsLoading(true);
    try {
      const engine = new AudioEngine();
      await engine.init(octave, transpose);
      engineRef.current = engine;
      setIsLoaded(true);
    } catch (error) {
      console.error('Failed to load audio engine:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (engineRef.current) {
        engineRef.current.destroy();
      }
    };
  }, []);

  return {
    engine: engineRef.current,
    isLoaded,
    isLoading,
    loadEngine,
  };
}
