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
  'Learning': 'bg-orange-100 text-orange-700',
  'Songs': 'bg-teal-100 text-teal-700',
  'Buying Guide': 'bg-amber-100 text-amber-700',
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
    <div className="bg-zinc-900 min-h-screen">
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

      {/* Dark hero section with harmonium */}
      <div className="bg-zinc-900 text-white">
        <div className="max-w-5xl mx-auto px-4 pt-8 pb-10">
          <header className="text-center mb-6">
            <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-white">Web Harmonium</h1>
            <p className="text-lg text-zinc-400">Play Harmonium Online Free &mdash; Virtual Keyboard &amp; Sargam</p>
          </header>

          <div className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 mb-5 text-sm text-zinc-300 flex flex-wrap gap-x-6 gap-y-1 justify-center">
            <span>&#128161; <strong className="text-white">{t.ui.quickStart}</strong> {t.ui.quickStartTip} <code className="bg-zinc-700 text-orange-300 px-1.5 py-0.5 rounded">e r t y u i o</code> {t.ui.onYourKeyboard}</span>
            <span className="text-zinc-400">{t.ui.mobileSupport}</span>
          </div>

          <MobileHarmoniumApp />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">

        {/* Why section */}
        <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
          <h2 className="text-2xl font-bold mb-3 text-stone-900">{t.home.whyTitle}</h2>
          <p className="text-stone-600 mb-6">{t.home.whyDesc}</p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
              <h3 className="font-semibold mb-1 text-stone-900">{t.home.keyboardControl}</h3>
              <p className="text-sm text-stone-600">{t.home.keyboardDesc}</p>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
              <h3 className="font-semibold mb-1 text-stone-900">{t.home.transposePitch}</h3>
              <p className="text-sm text-stone-600">{t.home.transposePitchDesc}</p>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
              <h3 className="font-semibold mb-1 text-stone-900">{t.home.volumeReverb}</h3>
              <p className="text-sm text-stone-600">{t.home.volumeReverbDesc}</p>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
              <h3 className="font-semibold mb-1 text-stone-900">{t.home.multipleOctaves}</h3>
              <p className="text-sm text-stone-600">{t.home.multipleOctavesDesc}</p>
            </div>
          </div>

          <div className="text-center mt-6 flex flex-wrap gap-3 justify-center">
            <Link href="/tutorial" title="Harmonium Tutorial for Beginners" className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
              {t.home.learnHowToPlay}
            </Link>
            <Link href="/harmonium" title="Full Harmonium Page" className="inline-block px-6 py-3 bg-white text-stone-700 font-semibold rounded-lg border border-stone-300 hover:bg-stone-50 transition-colors">
              {t.home.fullPageView}
            </Link>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
          <h2 className="text-2xl font-bold mb-2 text-stone-900">{t.home.practiceExercises}</h2>
          <p className="text-stone-500 mb-6">{t.home.exerciseDesc}</p>

          <div className="space-y-3">
            {[
              { title: t.home.exercise1Title, desc: t.home.exercise1Desc, level: t.home.exercise1Level, color: 'bg-orange-500' },
              { title: t.home.exercise2Title, desc: t.home.exercise2Desc, level: t.home.exercise2Level, color: 'bg-orange-500' },
              { title: t.home.exercise3Title, desc: t.home.exercise3Desc, level: t.home.exercise3Level, color: 'bg-teal-500' },
              { title: t.home.exercise4Title, desc: t.home.exercise4Desc, level: t.home.exercise4Level, color: 'bg-teal-500' },
            ].map((ex, i) => (
              <div key={i} className="border border-stone-100 rounded-lg p-4 hover:border-orange-200 transition-colors">
                <div className="flex items-start gap-3">
                  <span className={`flex-shrink-0 w-8 h-8 ${ex.color} text-white rounded-full flex items-center justify-center text-sm font-bold`}>{i + 1}</span>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">{ex.title}</h3>
                    <p className="text-sm text-stone-500 mb-1">{ex.desc}</p>
                    <span className="text-xs text-orange-600 font-medium">{ex.level}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 text-center">
            <Link href="/tutorial" title="Full Harmonium Tutorial" className="text-orange-600 font-medium hover:underline text-sm">
              {t.home.viewFullTutorial}
            </Link>
          </div>
        </div>

        {/* Sargam Practice */}
        <div className="bg-gradient-to-br from-teal-900 to-zinc-900 text-white rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold mb-2">{t.home.sargamPracticeTitle}</h2>
          <p className="text-teal-300 mb-3 text-sm">{t.home.sargamPracticeSubtitle}</p>
          <p className="text-zinc-300 mb-6 text-sm">{t.home.sargamPracticeDesc}</p>

          <div className="grid md:grid-cols-2 gap-3 mb-6">
            {[
              { title: t.home.sargamExercise1, desc: t.home.sargamExercise1Desc },
              { title: t.home.sargamExercise2, desc: t.home.sargamExercise2Desc },
              { title: t.home.sargamExercise3, desc: t.home.sargamExercise3Desc },
              { title: t.home.sargamExercise4, desc: t.home.sargamExercise4Desc },
            ].map((ex, i) => (
              <div key={i} className="bg-white/10 rounded-lg p-4 border border-white/10">
                <h3 className="font-semibold text-white mb-1">{ex.title}</h3>
                <p className="text-sm text-zinc-300">{ex.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/blog/how-to-practice-sargam" title="Complete Sargam Practice Guide" className="inline-block px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-400 transition-colors">
              {t.home.learnSargamCTA}
            </Link>
          </div>
        </div>

        {/* Harmonium Notes CTA */}
        <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 mb-6 flex flex-col sm:flex-row items-center gap-5">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-stone-900 mb-1">Harmonium Notes &amp; Sargam Guide</h2>
            <p className="text-stone-500 text-sm">Complete reference for all harmonium notes, sargam notation, keyboard mapping, and Thaat scales. Perfect for beginners learning to play.</p>
          </div>
          <Link href="/harmonium-notes" title="Harmonium Notes Guide" className="flex-shrink-0 px-5 py-2.5 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors whitespace-nowrap text-sm">
            View Notes Guide
          </Link>
        </div>

        {/* Featured Blog Posts */}
        <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-6">
          <h2 className="text-2xl font-bold mb-2 text-stone-900">{t.home.fromTheBlog}</h2>
          <p className="text-stone-500 mb-5 text-sm">{t.home.blogDesc}</p>

          <div className="space-y-3">
            {featuredPosts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} title={post.title[t.lang]}>
                <article className="border border-stone-100 rounded-lg p-4 hover:border-orange-200 hover:shadow-sm transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[post.category] ?? 'bg-stone-100 text-stone-600'}`}>
                      {t.home[categoryTranslations[post.category] as keyof typeof t.home] || post.category}
                    </span>
                    <span className="text-xs text-stone-400">{post.readTime} {t.home.minRead}</span>
                  </div>
                  <h3 className="font-bold text-stone-900 mb-1 hover:text-orange-600 transition-colors text-sm">{post.title[t.lang]}</h3>
                  <p className="text-xs text-stone-500">{post.description[t.lang]}</p>
                  <div className="mt-2 text-orange-500 text-xs font-medium">{t.home.readMore}</div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-5 text-center">
            <Link href="/blog" title="All Harmonium Blog Posts" className="inline-block px-5 py-2.5 border border-orange-500 text-orange-600 rounded-lg font-medium hover:bg-orange-50 transition-colors text-sm">
              {t.home.viewAllArticles}
            </Link>
          </div>
        </div>

        {/* PSEO Links */}
        <div className="pt-6 border-t border-stone-200">
          <h2 className="text-base font-semibold mb-4 text-stone-500 text-center">{t.home.learnMoreTitle}</h2>
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/instrument/harmonium" title="Harmonium" className="px-3 py-1.5 bg-white border border-stone-200 rounded-full text-xs text-stone-500 hover:text-orange-600 hover:border-orange-300 transition-colors shadow-sm">{t.home.harmonium}</Link>
            <Link href="/instrument/harmonium-instrument" title="Harmonium Instrument" className="px-3 py-1.5 bg-white border border-stone-200 rounded-full text-xs text-stone-500 hover:text-orange-600 hover:border-orange-300 transition-colors shadow-sm">{t.home.harmoniumInstrument}</Link>
            <Link href="/instrument/reed-organ-harmonium" title="Reed Organ Harmonium" className="px-3 py-1.5 bg-white border border-stone-200 rounded-full text-xs text-stone-500 hover:text-orange-600 hover:border-orange-300 transition-colors shadow-sm">{t.home.reedOrganHarmonium}</Link>
            <Link href="/instrument/harmonium-pedal-organ" title="Harmonium Pedal Organ" className="px-3 py-1.5 bg-white border border-stone-200 rounded-full text-xs text-stone-500 hover:text-orange-600 hover:border-orange-300 transition-colors shadow-sm">{t.home.harmoniumPedalOrgan}</Link>
            <Link href="/instrument/harmonium-musical-instrument" title="Harmonium Musical Instrument" className="px-3 py-1.5 bg-white border border-stone-200 rounded-full text-xs text-stone-500 hover:text-orange-600 hover:border-orange-300 transition-colors shadow-sm">{t.home.harmoniumMusicalInstrument}</Link>
            <Link href="/instrument/indian-harmonium" title="Indian Harmonium" className="px-3 py-1.5 bg-white border border-stone-200 rounded-full text-xs text-stone-500 hover:text-orange-600 hover:border-orange-300 transition-colors shadow-sm">{t.home.indianHarmonium}</Link>
          </div>
        </div>

      </div>

      <FeedbackWidget />
    </div>
  );
}
