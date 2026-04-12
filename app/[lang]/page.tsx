'use client';

import Link from 'next/link';
import StructuredData from '@/components/seo/StructuredData';
import { blogPosts } from '@/lib/blog';
import dynamic from 'next/dynamic';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { translations } from '@/lib/i18n/translations';

const MobileHarmoniumApp = dynamic(() => import('@/components/harmonium/MobileHarmoniumApp'), {
  ssr: false,
});

const FeedbackWidget = dynamic(() => import('@/components/FeedbackWidget'), {
  ssr: false,
});

const categoryColors: Record<string, string> = {
  'Learning': 'bg-blue-100 text-blue-700',
  'Songs': 'bg-green-100 text-green-700',
  'Buying Guide': 'bg-orange-100 text-orange-700',
  'History': 'bg-purple-100 text-purple-700',
};

const categoryTranslations: Record<string, keyof typeof translations.en.home> = {
  'Learning': 'categoryLearning',
  'Songs': 'categorySongs',
  'Buying Guide': 'categoryBuyingGuide',
  'History': 'categoryHistory',
};

export default function Home() {
  const { t } = useLanguage();
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div>
      <StructuredData
        type="WebApplication"
        data={{
          name: 'Web Harmonium',
          description: 'Free online harmonium simulator. Play harmonium with your computer keyboard, adjust transpose, octave, and volume controls.',
          url: 'https://web-harmonium.net',
          features: [
            'Play harmonium with computer keyboard',
            'Transpose control (-11 to +11 semitones)',
            'Multiple octaves (7 octaves)',
            'Volume control (1-100%)',
            'Reverb effects',
            'Multiple reed simulation',
            'No installation required',
          ],
        }}
      />
      <div className="bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto p-8">

        {/* Hero */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">{t.home.title}</h1>
          <p className="text-xl text-gray-600">{t.home.subtitle}</p>
          <p className="text-base text-gray-500 mt-2">{t.home.description}</p>
        </header>

        {/* Harmonium Player - Direct Access */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">{t.home.startPlayingNow}</h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4 rounded">
            <p className="text-sm text-blue-900 mb-2">
              💡 <strong>{t.ui.quickStart}</strong> {t.ui.quickStartTip} <code className="bg-blue-100 px-1 rounded">e r t y u i o</code> {t.ui.onYourKeyboard}
            </p>
            <p className="text-sm text-blue-900">
              {t.ui.mobileSupport}
            </p>
          </div>
          <MobileHarmoniumApp />
        </div>

        {/* Main feature card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.home.whyTitle}</h2>
          <p className="text-gray-700 mb-4">
            {t.home.whyDesc}
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="p-4 bg-blue-50 rounded">
              <h3 className="font-semibold mb-2">{t.home.keyboardControl}</h3>
              <p className="text-sm text-gray-700">
                {t.home.keyboardDesc}
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded">
              <h3 className="font-semibold mb-2">{t.home.transposePitch}</h3>
              <p className="text-sm text-gray-700">
                {t.home.transposePitchDesc}
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded">
              <h3 className="font-semibold mb-2">{t.home.volumeReverb}</h3>
              <p className="text-sm text-gray-700">
                {t.home.volumeReverbDesc}
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded">
              <h3 className="font-semibold mb-2">{t.home.multipleOctaves}</h3>
              <p className="text-sm text-gray-700">
                {t.home.multipleOctavesDesc}
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/tutorial"
              title="Harmonium Tutorial for Beginners"
              className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t.home.learnHowToPlay}
            </Link>
            <Link
              href="/harmonium"
              title="Full Harmonium Page"
              className="inline-block ml-4 px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              {t.home.fullPageView}
            </Link>
          </div>
        </div>

        {/* How to Use */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.home.howToUse}</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>{t.home.howToStep1}</li>
            <li>{t.home.howToStep2}</li>
            <li>{t.home.howToStep3}</li>
            <li>{t.home.howToStep4}</li>
            <li>{t.home.howToStep5}</li>
          </ol>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-2">{t.home.practiceExercises}</h2>
          <p className="text-gray-600 mb-6">{t.home.exerciseDesc}</p>

          <div className="space-y-4">
            <div className="border border-gray-100 rounded-lg p-5 hover:border-blue-200 transition-colors">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t.home.exercise1Title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{t.home.exercise1Desc}</p>
                  <span className="text-xs text-blue-600 font-medium">{t.home.exercise1Level}</span>
                </div>
              </div>
            </div>

            <div className="border border-gray-100 rounded-lg p-5 hover:border-blue-200 transition-colors">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t.home.exercise2Title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{t.home.exercise2Desc}</p>
                  <span className="text-xs text-blue-600 font-medium">{t.home.exercise2Level}</span>
                </div>
              </div>
            </div>

            <div className="border border-gray-100 rounded-lg p-5 hover:border-blue-200 transition-colors">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t.home.exercise3Title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{t.home.exercise3Desc}</p>
                  <span className="text-xs text-green-600 font-medium">{t.home.exercise3Level}</span>
                </div>
              </div>
            </div>

            <div className="border border-gray-100 rounded-lg p-5 hover:border-blue-200 transition-colors">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t.home.exercise4Title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{t.home.exercise4Desc}</p>
                  <span className="text-xs text-green-600 font-medium">{t.home.exercise4Level}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link href="/tutorial" title="Full Harmonium Tutorial" className="text-blue-600 font-medium hover:underline">
              {t.home.viewFullTutorial}
            </Link>
          </div>
        </div>

        {/* Sargam Practice Section */}
        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg shadow-lg p-8 mb-8 border border-orange-100">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">{t.home.sargamPracticeTitle}</h2>
          <p className="text-lg text-gray-700 mb-4">{t.home.sargamPracticeSubtitle}</p>
          <p className="text-gray-600 mb-6">{t.home.sargamPracticeDesc}</p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-lg p-5 shadow-sm border border-orange-100">
              <h3 className="font-semibold text-gray-900 mb-2">{t.home.sargamExercise1}</h3>
              <p className="text-sm text-gray-600">{t.home.sargamExercise1Desc}</p>
            </div>

            <div className="bg-white rounded-lg p-5 shadow-sm border border-orange-100">
              <h3 className="font-semibold text-gray-900 mb-2">{t.home.sargamExercise2}</h3>
              <p className="text-sm text-gray-600">{t.home.sargamExercise2Desc}</p>
            </div>

            <div className="bg-white rounded-lg p-5 shadow-sm border border-orange-100">
              <h3 className="font-semibold text-gray-900 mb-2">{t.home.sargamExercise3}</h3>
              <p className="text-sm text-gray-600">{t.home.sargamExercise3Desc}</p>
            </div>

            <div className="bg-white rounded-lg p-5 shadow-sm border border-orange-100">
              <h3 className="font-semibold text-gray-900 mb-2">{t.home.sargamExercise4}</h3>
              <p className="text-sm text-gray-600">{t.home.sargamExercise4Desc}</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/blog/how-to-practice-sargam" title="Complete Sargam Practice Guide" className="inline-block px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-md">
              {t.home.learnSargamCTA}
            </Link>
          </div>
        </div>

        {/* Featured Blog Posts */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-2">{t.home.fromTheBlog}</h2>
          <p className="text-gray-600 mb-6">{t.home.blogDesc}</p>

          <div className="space-y-4">
            {featuredPosts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} title={post.title[t.lang]}>
                <article className="border border-gray-100 rounded-lg p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-600'}`}>
                      {t.home[categoryTranslations[post.category] as keyof typeof t.home] || post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime} {t.home.minRead}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 hover:text-blue-600 transition-colors">{post.title[t.lang]}</h3>
                  <p className="text-sm text-gray-600">{post.description[t.lang]}</p>
                  <div className="mt-3 text-blue-600 text-sm font-medium">{t.home.readMore}</div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link href="/blog" title="All Harmonium Blog Posts" className="inline-block px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              {t.home.viewAllArticles}
            </Link>
          </div>
        </div>

        {/* PSEO Links Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-semibold mb-6 text-gray-800 text-center">{t.home.learnMoreTitle}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/instrument/harmonium" title="Harmonium" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-sm">
              {t.home.harmonium}
            </Link>
            <Link href="/instrument/harmonium-instrument" title="Harmonium Instrument" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-sm">
              {t.home.harmoniumInstrument}
            </Link>
            <Link href="/instrument/reed-organ-harmonium" title="Reed Organ Harmonium" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-sm">
              {t.home.reedOrganHarmonium}
            </Link>
            <Link href="/instrument/harmonium-pedal-organ" title="Harmonium Pedal Organ" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-sm">
              {t.home.harmoniumPedalOrgan}
            </Link>
            <Link href="/instrument/harmonium-musical-instrument" title="Harmonium Musical Instrument" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-sm">
              {t.home.harmoniumMusicalInstrument}
            </Link>
            <Link href="/instrument/indian-harmonium" title="Indian Harmonium" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-sm">
              {t.home.indianHarmonium}
            </Link>
            <Link href="/instrument/the-harmonium-in-my-memory" title="The Harmonium In My Memory" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-sm">
              {t.home.theHarmoniumInMyMemory}
            </Link>
          </div>
        </div>

      </div>
      </div>

      {/* Feedback Widget */}
      <FeedbackWidget />
    </div>
  );
}
