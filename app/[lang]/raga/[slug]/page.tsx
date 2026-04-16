import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ragas, getRaga } from '@/lib/ragas';
import StructuredData from '@/components/seo/StructuredData';
import RagaDetailContent from '@/components/RagaDetailContent';

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
      <div className="min-h-screen bg-zinc-900 py-8">
        <div className="max-w-3xl mx-auto px-4">
          <RagaDetailContent raga={raga} otherRagas={otherRagas} difficultyColor={difficultyColor} />
        </div>
      </div>
    </div>
  );
}
