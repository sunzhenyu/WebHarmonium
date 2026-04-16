import { notFound } from 'next/navigation';
import { instrumentPages, getInstrumentPage } from '@/lib/pseo/instruments';
import Link from 'next/link';
import StructuredData from '@/components/seo/StructuredData';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return instrumentPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const page = getInstrumentPage(resolvedParams.slug);

  if (!page) {
    return { title: 'Not Found' };
  }

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    openGraph: {
      title: page.title,
      description: page.description,
      type: 'article',
      url: `https://web-harmonium.net/instrument/${page.slug}`,
    },
    alternates: {
      canonical: `https://web-harmonium.net/instrument/${page.slug}`,
    },
  };
}

export default async function InstrumentPSEOPage({ params }: PageProps) {
  const resolvedParams = await params;
  const page = getInstrumentPage(resolvedParams.slug);

  if (!page) {
    notFound();
  }

  const structuredData = {
    '@type': 'Article',
    headline: page.title,
    description: page.description,
    author: {
      '@type': 'Organization',
      name: 'Web Harmonium',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Web Harmonium',
      logo: {
        '@type': 'ImageObject',
        url: 'https://web-harmonium.net/icons/icon-512x512.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://web-harmonium.net/instrument/${page.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-stone-100 py-12">
      <StructuredData type="Article" data={structuredData} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="flex text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" title="Web Harmonium Home" className="hover:text-orange-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2">/</span>
                <span className="text-gray-400 capitalize">{page.slug.replace(/-/g, ' ')}</span>
              </div>
            </li>
          </ol>
        </nav>

        <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-12">
            <header className="mb-10 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {page.title}
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                {page.description}
              </p>
            </header>

            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">What is the {page.slug.replace(/-/g, ' ')}?</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                {page.content}
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">A Brief History of the {page.slug.replace(/-/g, ' ')}</h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                {page.historyContent}
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Key Features</h3>
              <ul className="space-y-3 mb-8">
                {page.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="h-6 w-6 text-orange-500 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img" aria-label="Checkmark icon">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Buying Guide & Recommendations</h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                {page.buyingGuideContent}
              </p>
            </div>

            {/* CTA to play the instrument */}
            <div className="bg-zinc-900 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Play the {page.slug.replace(/-/g, ' ')} Online Now
              </h3>
              <p className="text-zinc-300 mb-6 max-w-xl mx-auto">
                Experience the authentic sound for free. No installation required. Works on desktop and mobile browsers.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Link
                  href="/harmonium"
                  title="Play Virtual Harmonium"
                  className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-sm hover:shadow"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" role="img" aria-label="Play icon">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Start Playing
                </Link>
                <Link
                  href="/tutorial"
                  title="Learn Harmonium Basics"
                  className="inline-flex items-center px-8 py-4 bg-zinc-700 text-white font-bold rounded-lg border border-zinc-600 hover:bg-zinc-600 transition-colors"
                >
                  View Tutorial
                </Link>
              </div>
            </div>

          </div>
        </article>
      </div>
    </div>
  );
}