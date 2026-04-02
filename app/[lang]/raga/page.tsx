import type { Metadata } from 'next';
import { ragas } from '@/lib/ragas';
import PageHeader from '@/components/PageHeader';
import RagaIndexContent from '@/components/RagaIndexContent';

export const metadata: Metadata = {
  title: 'Raga Guide - Learn Indian Classical Ragas on Harmonium | Web Harmonium',
  description: 'Complete guide to 8 essential ragas for harmonium. Learn Bhupali, Yaman, Bhairav, Kafi and more — with keyboard notation, scale patterns, and practice tips.',
  alternates: { canonical: '/raga' },
  keywords: ['raga guide harmonium', 'Indian classical ragas', 'learn ragas', 'harmonium raga notes', 'raga for beginners'],
};

const difficultyColor: Record<string, string> = {
  Beginner: 'bg-green-100 text-green-700',
  Intermediate: 'bg-yellow-100 text-yellow-700',
  Advanced: 'bg-red-100 text-red-700',
};

export default function RagaIndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Raga Guide</h1>
          <p className="text-xl text-gray-600">Learn the essential ragas for harmonium — with keyboard notation and practice tips</p>
        </div>
        <RagaIndexContent ragas={ragas} difficultyColor={difficultyColor} />
      </div>
    </div>
  );
}
