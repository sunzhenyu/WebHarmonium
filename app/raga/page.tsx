import type { Metadata } from 'next';
import Link from 'next/link';
import { ragas } from '@/lib/ragas';

export const metadata: Metadata = {
  title: 'Raga Guide - Learn Indian Classical Ragas on Harmonium | Web Harmonium',
  description: 'Complete guide to 8 essential ragas for harmonium. Learn Bhupali, Yaman, Bhairav, Kafi and more with keyboard notation, scale patterns, and practice tips.',
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

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded">
          <p className="text-gray-700 text-sm">
            <strong>What is a Raga?</strong> A raga is a melodic framework in Indian classical music — a specific set of notes with rules about how to use them. Each raga has a unique mood, time of day, and characteristic phrases. Click any raga below to learn it in detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {ragas.map(raga => (
            <Link key={raga.slug} href={`/raga/${raga.slug}`}>
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 h-full">
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-xl font-bold text-gray-900">{raga.name}</h2>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ml-2 ${difficultyColor[raga.difficulty]}`}>
                    {raga.difficulty}
                  </span>
                </div>
                {raga.altName && <p className="text-sm text-blue-600 mb-2">{raga.altName}</p>}
                <div className="text-sm text-gray-500 mb-3 space-y-1">
                  <div>⏰ {raga.time}</div>
                  <div>🎭 {raga.mood}</div>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">{raga.description}</p>
                <div className="mt-4 text-blue-600 font-medium text-sm">Learn this raga →</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 bg-blue-600 text-white rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold mb-2">Practice These Ragas Now</h3>
          <p className="mb-4 text-blue-100">Open the free harmonium and start playing</p>
          <Link href="/harmonium" className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Open Harmonium →
          </Link>
        </div>
      </div>
    </div>
  );
}
