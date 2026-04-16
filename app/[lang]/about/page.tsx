import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import AboutContent from '@/components/AboutContent';

export const metadata: Metadata = {
  title: 'About Web Harmonium - Free Online Harmonium Simulator',
  description: 'Learn about Web Harmonium — a free browser-based harmonium simulator. Authentic sound, keyboard controls, and Indian classical music tools for all skill levels.',
  alternates: { canonical: '/about' },
  keywords: ['about harmonium', 'web harmonium', 'online harmonium', 'harmonium simulator', 'web audio'],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <PageHeader titleKey="about" />
          <AboutContent />
        </div>
      </div>
    </div>
  );
}
