import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ragas, getRaga } from '@/lib/ragas';
import StructuredData from '@/components/seo/StructuredData';

export async function generateStaticParams() {
  return ragas.map(r => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const raga = getRaga(slug);
  if (!raga) return {};
  return {
    title: `${raga.name} - Notes, Scale & Harmonium Guide | Web Harmonium`,
    description: `Learn ${raga.name} on harmonium. ${raga.mood}. Includes aroha, avaroha, keyboard notation, pakad, and practice tips.`,
    keywords: raga.keywords,
    openGraph: {
      title: `${raga.name} - Harmonium Guide`,
      description: `Learn ${raga.name} on harmonium. ${raga.mood}.`,
      url: `https://web-harmonium.net/raga/${raga.slug}`,
      type: 'article',
    },
  };
}

const difficultyColor: Record<string, string> = {
  Beginner: 'bg-green-100 text-green-700',
  Intermediate: 'bg-yellow-100 text-yellow-700',
  Advanced: 'bg-red-100 text-red-700',
};

export default async function RagaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const raga = getRaga(slug);
  if (!raga) notFound();

  const otherRagas = ragas.filter(r => r.slug !== slug).slice(0, 4);

  return (
    <div>
      <StructuredData
        type="Article"
        data={{
          headline: `${raga.name} - Notes, Scale & Harmonium Guide`,
          description: `Learn ${raga.name} on harmonium. Includes aroha, avaroha, keyboard notation, pakad, and practice tips.`,
          url: `https://web-harmonium.net/raga/${raga.slug}`,
        }}
      />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8">
        <div className="max-w-3xl mx-auto px-4">
          <div className="mb-6 flex items-center gap-3">
            <Link href="/raga" className="text-blue-600 hover:underline text-sm">← All Ragas</Link>
            <span className="text-gray-300">|</span>
            <Link href="/harmonium" className="text-blue-600 hover:underline text-sm">Open Harmonium →</Link>
          </div>

          <article className="bg-white rounded-xl shadow-lg p-8 mb-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-2">
              <h1 className="text-3xl font-bold text-gray-900">{raga.name}</h1>
              <span className={`text-sm font-semibold px-3 py-1 rounded-full ml-3 whitespace-nowrap ${difficultyColor[raga.difficulty]}`}>
                {raga.difficulty}
              </span>
            </div>
            {raga.altName && <p className="text-blue-600 font-medium mb-4">{raga.altName}</p>}

            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50 rounded-lg p-4 mb-6">
              <div className="text-center">
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Time</div>
                <div className="text-sm font-medium text-gray-800">{raga.time}</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Mood</div>
                <div className="text-sm font-medium text-gray-800">{raga.mood.split(',')[0]}</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Vadi</div>
                <div className="text-sm font-medium text-gray-800">{raga.vadi}</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Samvadi</div>
                <div className="text-sm font-medium text-gray-800">{raga.samvadi}</div>
              </div>
            </div>

            <p className="text-gray-700 mb-8 leading-relaxed">{raga.description}</p>

            {/* Scale */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Scale (Swar)</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Aroha (Ascending ↑)</h3>
                <p className="text-gray-700 font-medium mb-2">{raga.aroha}</p>
                <code className="bg-white px-3 py-1 rounded border border-blue-200 text-sm text-gray-800 block">{raga.arohaKeys}</code>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Avaroha (Descending ↓)</h3>
                <p className="text-gray-700 font-medium mb-2">{raga.avaroha}</p>
                <code className="bg-white px-3 py-1 rounded border border-green-200 text-sm text-gray-800 block">{raga.avarohaKeys}</code>
              </div>
            </div>

            {/* Pakad */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pakad (Characteristic Phrase)</h2>
            <div className="bg-yellow-50 rounded-lg p-4 mb-8 border border-yellow-200">
              <p className="text-gray-700 font-medium mb-2">{raga.pakad}</p>
              <code className="bg-white px-3 py-1 rounded border border-yellow-200 text-sm text-gray-800 block">{raga.pakadKeys}</code>
              <p className="text-xs text-gray-500 mt-2">The pakad is the signature phrase that identifies this raga. Memorize it first.</p>
            </div>

            {/* Practice Tips */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Practice</h2>
            <div className="bg-gray-50 rounded-lg p-5 mb-8 border border-gray-200">
              <p className="text-gray-700 leading-relaxed">{raga.practiceNotes}</p>
            </div>

            {/* Famous Songs */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Famous Compositions</h2>
            <div className="space-y-3 mb-8">
              {raga.famousSongs.map((song, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                  <span className="text-blue-600 font-bold text-lg">♪</span>
                  <div>
                    <div className="font-medium text-gray-900">{song.title}</div>
                    <div className="text-sm text-gray-500">{song.artist}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-blue-600 text-white rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Practice {raga.name} Now</h3>
              <p className="mb-4 text-blue-100">Open the free harmonium and try the scale and pakad</p>
              <Link href="/harmonium" className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Open Harmonium →
              </Link>
            </div>
          </article>

          {/* Other Ragas */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">More Ragas</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {otherRagas.map(r => (
                <Link key={r.slug} href={`/raga/${r.slug}`}>
                  <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="font-semibold text-gray-900 hover:text-blue-600">{r.name}</div>
                    <div className="text-sm text-gray-500 mt-1">{r.time} · {r.difficulty}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
