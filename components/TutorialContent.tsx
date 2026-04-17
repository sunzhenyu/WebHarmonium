'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function TutorialContent() {
  const { t } = useLanguage();

  return (
    <>
      {/* Top Banner */}
      <div className="bg-zinc-700 border-l-4 border-orange-500 p-4 mb-8">
        <p className="text-zinc-300">
          <strong>{t.tutorialPage.newToHarmonium}</strong> {t.tutorialPage.guideDescription}
          <Link href="/harmonium" className="text-orange-600 hover:underline ml-1">
            {t.tutorialPage.openHarmonium}
          </Link>
        </p>
      </div>

      {/* Section 1: Getting Started */}
      <section className="bg-zinc-800 rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-white">{t.tutorialPage.section1Title}</h2>

        <h3 className="text-xl font-semibold mb-3 text-white">{t.tutorialPage.keyboardLayoutTitle}</h3>
        <p className="text-zinc-300 mb-4">
          {t.tutorialPage.keyboardLayoutDesc}
        </p>

        <div className="bg-zinc-700 p-4 rounded mb-4">
          <p className="font-semibold mb-2">{t.tutorialPage.whiteKeysTitle}</p>
          <code className="bg-gray-200 px-2 py-1 rounded text-sm">` q w e r t y u i o p [ ] \</code>
          <p className="text-sm text-zinc-300 mt-2">{t.tutorialPage.whiteKeysDesc}</p>
        </div>

        <div className="bg-zinc-700 p-4 rounded mb-4">
          <p className="font-semibold mb-2">{t.tutorialPage.blackKeysTitle}</p>
          <code className="bg-gray-200 px-2 py-1 rounded text-sm">1 2 4 5 7 8 9 - =</code>
          <p className="text-sm text-zinc-300 mt-2">{t.tutorialPage.blackKeysDesc}</p>
        </div>

        <h3 className="text-xl font-semibold mb-3 mt-6 text-white">{t.tutorialPage.loadingTitle}</h3>
        <ol className="list-decimal list-inside space-y-2 text-zinc-300 mb-4">
          <li>{t.tutorialPage.loadingStep1}</li>
          <li>{t.tutorialPage.loadingStep2}</li>
          <li>{t.tutorialPage.loadingStep3}</li>
          <li>{t.tutorialPage.loadingStep4}</li>
        </ol>
      </section>

      {/* Section 2: Understanding the Controls */}
      <section className="bg-zinc-800 rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-white">{t.tutorialPage.section2Title}</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">{t.tutorialPage.volumeControlTitle}</h3>
            <p className="text-zinc-300">{t.tutorialPage.volumeControlDesc}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">{t.tutorialPage.transposeControlTitle}</h3>
            <p className="text-zinc-300 mb-2">{t.tutorialPage.transposeControlDesc1}</p>
            <p className="text-zinc-300 mb-2">{t.tutorialPage.transposeControlDesc2}</p>
            <div className="bg-zinc-700 p-3 rounded mt-2">
              <p className="text-sm text-zinc-300">
                <strong>{t.tutorialPage.transposeExample.split(':')[0]}:</strong> {t.tutorialPage.transposeExample.split(':')[1]}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">{t.tutorialPage.octaveControlTitle}</h3>
            <p className="text-zinc-300">{t.tutorialPage.octaveControlDesc}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">{t.tutorialPage.reedsControlTitle}</h3>
            <p className="text-zinc-300">{t.tutorialPage.reedsControlDesc}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">{t.tutorialPage.reverbControlTitle}</h3>
            <p className="text-zinc-300">{t.tutorialPage.reverbControlDesc}</p>
          </div>
        </div>
      </section>

      {/* Section 3: Playing Your First Notes */}
      <section className="bg-zinc-800 rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-white">{t.tutorialPage.section3Title}</h2>

        <h3 className="text-xl font-semibold mb-3 text-white">{t.tutorialPage.cMajorScaleTitle}</h3>
        <p className="text-zinc-300 mb-4">{t.tutorialPage.cMajorScaleDesc}</p>

        <div className="bg-zinc-700 p-4 rounded mb-4">
          <p className="font-semibold mb-2">{t.tutorialPage.cMajorScaleLabel}</p>
          <div className="space-y-2">
            <p className="text-zinc-300">{t.tutorialPage.cMajorScaleKeys}</p>
            <p className="text-sm text-zinc-300">{t.tutorialPage.cMajorScaleNotes}</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-3 mt-6 text-white">{t.tutorialPage.practiceExercise1Title}</h3>
        <ol className="list-decimal list-inside space-y-2 text-zinc-300">
          <li>{t.tutorialPage.practiceExercise1Step1}</li>
          <li>{t.tutorialPage.practiceExercise1Step2}</li>
          <li>{t.tutorialPage.practiceExercise1Step3}</li>
        </ol>
      </section>

      {/* Section 4: Indian Classical Music Basics */}
      <section className="bg-zinc-800 rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-white">{t.tutorialPage.section4Title}</h2>

        <h3 className="text-xl font-semibold mb-3 text-white">{t.tutorialPage.sargamTitle}</h3>
        <p className="text-zinc-300 mb-4">{t.tutorialPage.sargamDesc}</p>

        <div className="bg-zinc-700 p-4 rounded mb-4">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="py-2 font-semibold">{t.tutorialPage.tableHeaderSargam}</th>
                <th className="py-2 font-semibold">{t.tutorialPage.tableHeaderWestern}</th>
                <th className="py-2 font-semibold">{t.tutorialPage.tableHeaderKey}</th>
              </tr>
            </thead>
            <tbody className="text-zinc-300">
              <tr className="border-b border-zinc-600">
                <td className="py-2">Sa</td>
                <td className="py-2">C</td>
                <td className="py-2"><code className="bg-gray-200 px-2 py-1 rounded">e</code></td>
              </tr>
              <tr className="border-b border-zinc-600">
                <td className="py-2">Re</td>
                <td className="py-2">D</td>
                <td className="py-2"><code className="bg-gray-200 px-2 py-1 rounded">r</code></td>
              </tr>
              <tr className="border-b border-zinc-600">
                <td className="py-2">Ga</td>
                <td className="py-2">E</td>
                <td className="py-2"><code className="bg-gray-200 px-2 py-1 rounded">t</code></td>
              </tr>
              <tr className="border-b border-zinc-600">
                <td className="py-2">Ma</td>
                <td className="py-2">F</td>
                <td className="py-2"><code className="bg-gray-200 px-2 py-1 rounded">y</code></td>
              </tr>
              <tr className="border-b border-zinc-600">
                <td className="py-2">Pa</td>
                <td className="py-2">G</td>
                <td className="py-2"><code className="bg-gray-200 px-2 py-1 rounded">u</code></td>
              </tr>
              <tr className="border-b border-zinc-600">
                <td className="py-2">Dha</td>
                <td className="py-2">A</td>
                <td className="py-2"><code className="bg-gray-200 px-2 py-1 rounded">i</code></td>
              </tr>
              <tr>
                <td className="py-2">Ni</td>
                <td className="py-2">B</td>
                <td className="py-2"><code className="bg-gray-200 px-2 py-1 rounded">o</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-3 mt-6 text-white">{t.tutorialPage.commonRagasTitle}</h3>
        <div className="space-y-4">
          <div className="bg-zinc-700 p-4 rounded">
            <h4 className="font-semibold mb-2">{t.tutorialPage.ragaBhupaliTitle}</h4>
            <p className="text-zinc-300 mb-2">{t.tutorialPage.ragaBhupaliDesc}</p>
            <p className="text-sm text-zinc-300">{t.tutorialPage.ragaBhupaliNotes}</p>
          </div>

          <div className="bg-zinc-700 p-4 rounded">
            <h4 className="font-semibold mb-2">{t.tutorialPage.ragaYamanTitle}</h4>
            <p className="text-zinc-300 mb-2">{t.tutorialPage.ragaYamanDesc}</p>
            <p className="text-sm text-zinc-300">{t.tutorialPage.ragaYamanNotes}</p>
          </div>

          <div className="bg-zinc-700 p-4 rounded">
            <h4 className="font-semibold mb-2">{t.tutorialPage.ragaBhairavTitle}</h4>
            <p className="text-zinc-300 mb-2">{t.tutorialPage.ragaBhairavDesc}</p>
            <p className="text-sm text-zinc-300">{t.tutorialPage.ragaBhairavNotes}</p>
          </div>

          <div className="bg-zinc-700 p-4 rounded">
            <h4 className="font-semibold mb-2">{t.tutorialPage.ragaKafiTitle}</h4>
            <p className="text-zinc-300 mb-2">{t.tutorialPage.ragaKafiDesc}</p>
            <p className="text-sm text-zinc-300">{t.tutorialPage.ragaKafiNotes}</p>
          </div>

          <div className="bg-zinc-700 p-4 rounded">
            <h4 className="font-semibold mb-2">{t.tutorialPage.ragaDurgaTitle}</h4>
            <p className="text-zinc-300 mb-2">{t.tutorialPage.ragaDurgaDesc}</p>
            <p className="text-sm text-zinc-300">{t.tutorialPage.ragaDurgaNotes}</p>
          </div>

          <div className="bg-zinc-700 p-4 rounded">
            <h4 className="font-semibold mb-2">{t.tutorialPage.ragaBilawalTitle}</h4>
            <p className="text-zinc-300 mb-2">{t.tutorialPage.ragaBilawalDesc}</p>
            <p className="text-sm text-zinc-300">{t.tutorialPage.ragaBilawalNotes}</p>
          </div>
        </div>
      </section>

      {/* Section 6: Tips for Better Playing */}
      <section className="bg-zinc-800 rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-white">{t.tutorialPage.section6Title}</h2>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🎹</span>
            <div>
              <h3 className="font-semibold text-white">{t.tutorialPage.tip1Title}</h3>
              <p className="text-zinc-300">{t.tutorialPage.tip1Desc}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-2xl">🎵</span>
            <div>
              <h3 className="font-semibold text-white">{t.tutorialPage.tip2Title}</h3>
              <p className="text-zinc-300">{t.tutorialPage.tip2Desc}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-2xl">👂</span>
            <div>
              <h3 className="font-semibold text-white">{t.tutorialPage.tip3Title}</h3>
              <p className="text-zinc-300">{t.tutorialPage.tip3Desc}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-2xl">⏱️</span>
            <div>
              <h3 className="font-semibold text-white">{t.tutorialPage.tip4Title}</h3>
              <p className="text-zinc-300">{t.tutorialPage.tip4Desc}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-2xl">🎹</span>
            <div>
              <h3 className="font-semibold text-white">{t.tutorialPage.tip5Title}</h3>
              <p className="text-zinc-300">{t.tutorialPage.tip5Desc}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-2xl">🎤</span>
            <div>
              <h3 className="font-semibold text-white">{t.tutorialPage.tip6Title}</h3>
              <p className="text-zinc-300">{t.tutorialPage.tip6Desc}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-2xl">📱</span>
            <div>
              <h3 className="font-semibold text-white">{t.tutorialPage.tip7Title}</h3>
              <p className="text-zinc-300">{t.tutorialPage.tip7Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Next Steps */}
      <section className="bg-zinc-800 rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-white">{t.tutorialPage.section7Title}</h2>

        <p className="text-zinc-300 mb-4">{t.tutorialPage.nextStepsDesc}</p>

        <ul className="space-y-3 text-zinc-300">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">•</span>
            <span>{t.tutorialPage.nextStep1}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">•</span>
            <span>{t.tutorialPage.nextStep2}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">•</span>
            <span>{t.tutorialPage.nextStep3}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">•</span>
            <span>{t.tutorialPage.nextStep4}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">•</span>
            <span>{t.tutorialPage.nextStep5}</span>
          </li>
        </ul>
      </section>

      {/* CTA */}
      <div className="bg-zinc-900 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">{t.tutorialPage.ctaTitle}</h2>
        <p className="mb-6">{t.tutorialPage.ctaDesc}</p>
        <Link
          href="/harmonium"
          className="inline-block px-8 py-4 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 transition-colors"
        >
          {t.tutorialPage.ctaButton}
        </Link>
      </div>
    </>
  );
}

