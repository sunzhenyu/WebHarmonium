import HarmoniumApp from '@/components/harmonium/HarmoniumApp';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Play Harmonium Online - Web Harmonium',
  description: 'Play harmonium online free using your computer keyboard. Realistic sound with transpose, octave, reverb, Shruti Box drone, and multi-reed controls. No download needed.',
  alternates: { canonical: '/harmonium' },
};

export default function HarmoniumPage() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <HarmoniumApp />
      </div>
    </div>
  );
}
