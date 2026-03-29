import HarmoniumApp from '@/components/harmonium/HarmoniumApp';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Play Harmonium Online - Web Harmonium',
  description: 'Play harmonium online with your keyboard. Free virtual harmonium with realistic sound, transpose, and octave controls.',
};

export default function HarmoniumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <HarmoniumApp />
      </div>
    </div>
  );
}
