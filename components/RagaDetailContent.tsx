'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface RagaDetailContentProps {
  raga: any;
  otherRagas: any[];
  difficultyColor: Record<string, string>;
}

export default function RagaDetailContent({ raga, otherRagas, difficultyColor }: RagaDetailContentProps) {
  const { t } = useLanguage();

  return (
    <>
      <div className="mb-6 flex items-center gap-3">
        <Link href="/raga" className="text-orange-600 hover:underline text-sm">{t.raga.allRagas}</Link>
        <span className="text-gray-300">|</span>
        <Link href="/harmonium" className="text-orange-600 hover:underline text-sm">{t.raga.openHarmonium}</Link>
      </div>

      <article className="bg-zinc-800 rounded-xl shadow-lg p-8 mb-8">
        <div className="flex items-start justify-between mb-2">
          <h1 className="text-3xl font-bold text-white">{raga.name}</h1>
          <span className={`text-sm font-semibold px-3 py-1 rounded-full ml-3 whitespace-nowrap ${difficultyColor[raga.difficulty]}`}>
            {raga.difficulty}
          </span>
        </div>
        {raga.altName && <p className="text-orange-600 font-medium mb-4">{raga.altName}</p>}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-zinc-700 rounded-lg p-4 mb-6">
          <div className="text-center">
            <div className="text-xs text-zinc-400 uppercase tracking-wide mb-1">{t.raga.time}</div>
            <div className="text-sm font-medium text-white">{raga.time}</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-zinc-400 uppercase tracking-wide mb-1">{t.raga.mood}</div>
            <div className="text-sm font-medium text-white">{raga.mood.split(',')[0]}</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-zinc-400 uppercase tracking-wide mb-1">{t.raga.vadi}</div>
            <div className="text-sm font-medium text-white">{raga.vadi}</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-zinc-400 uppercase tracking-wide mb-1">{t.raga.samvadi}</div>
            <div className="text-sm font-medium text-white">{raga.samvadi}</div>
          </div>
        </div>

        <p className="text-zinc-300 mb-8 leading-relaxed">{raga.description}</p>

        <h2 className="text-2xl font-bold text-white mb-4">Scale (Swar)</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-zinc-700 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-2">{t.raga.aroha}</h3>
            <p className="text-zinc-300 font-medium mb-2">{raga.aroha}</p>
            <code className="bg-white px-3 py-1 rounded border border-amber-200 text-sm text-white block">{raga.arohaKeys}</code>
          </div>
          <div className="bg-zinc-700 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-2">{t.raga.avaroha}</h3>
            <p className="text-zinc-300 font-medium mb-2">{raga.avaroha}</p>
            <code className="bg-white px-3 py-1 rounded border border-green-200 text-sm text-white block">{raga.avarohaKeys}</code>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">{t.raga.pakad}</h2>
        <div className="bg-zinc-700 rounded-lg p-4 mb-8 border border-yellow-200">
          <p className="text-zinc-300 font-medium mb-2">{raga.pakad}</p>
          <code className="bg-white px-3 py-1 rounded border border-yellow-200 text-sm text-white block">{raga.pakadKeys}</code>
          <p className="text-xs text-zinc-400 mt-2">The pakad is the signature phrase that identifies this raga. Memorize it first.</p>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">How to Practice</h2>
        <div className="bg-zinc-700 rounded-lg p-5 mb-8 border border-zinc-600">
          <p className="text-zinc-300 leading-relaxed">{raga.practiceNotes}</p>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Famous Compositions</h2>
        <div className="space-y-3 mb-8">
          {raga.famousSongs.map((song: any, i: number) => (
            <div key={i} className="flex items-center gap-3 bg-zinc-700 rounded-lg p-3">
              <span className="text-orange-500 font-bold text-lg">♪</span>
              <div>
                <div className="font-medium text-white">{song.title}</div>
                <div className="text-sm text-zinc-400">{song.artist}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 text-white rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold mb-2">Practice {raga.name} Now</h3>
          <p className="mb-4 text-zinc-300">Open the free harmonium and try the scale and pakad</p>
          <Link href="/harmonium" className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
            {t.raga.openHarmonium}
          </Link>
        </div>
      </article>

      {otherRagas.length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-white mb-4">{t.raga.moreRagas}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {otherRagas.map(r => (
              <Link key={r.slug} href={`/raga/${r.slug}`} title={`Learn Raga ${r.name}`}>
                <div className="bg-zinc-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-zinc-700">
                  <h4 className="font-semibold text-white mb-1">{r.name}</h4>
                  <p className="text-sm text-zinc-400">{r.time} · {r.mood.split(',')[0]}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
