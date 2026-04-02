'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface Raga {
  slug: string;
  name: string;
  altName?: string;
  time: string;
  mood: string;
  description: string;
  difficulty: string;
}

interface RagaIndexContentProps {
  ragas: Raga[];
  difficultyColor: Record<string, string>;
}

export default function RagaIndexContent({ ragas, difficultyColor }: RagaIndexContentProps) {
  const { t } = useLanguage();

  return (
    <>
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded">
        <p className="text-gray-700 text-sm">
          <strong>{t.raga.whatIsRaga}</strong> {t.raga.whatIsRagaDesc}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {ragas.map(raga => (
          <Link key={raga.slug} href={`/raga/${raga.slug}`} title={`Learn Raga ${raga.name}`}>
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
              <div className="mt-4 text-blue-600 font-medium text-sm">{t.raga.learnThisRaga}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 bg-blue-600 text-white rounded-xl p-6 text-center">
        <h3 className="text-xl font-bold mb-2">{t.raga.practiceRagasNow}</h3>
        <p className="mb-4 text-blue-100">{t.raga.practiceRagasDesc}</p>
        <Link href="/harmonium" className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
          {t.raga.openHarmonium}
        </Link>
      </div>
    </>
  );
}
