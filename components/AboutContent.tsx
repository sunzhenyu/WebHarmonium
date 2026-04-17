'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function AboutContent() {
  const { t } = useLanguage();

  return (
    <div className="prose max-w-none">
      <p className="text-zinc-300 mb-4">{t.about.intro}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">{t.about.whatIsTitle}</h2>
      <p className="text-zinc-300 mb-4">{t.about.whatIsText}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">{t.about.whyTitle}</h2>
      <p className="text-zinc-300 mb-4">{t.about.whyText}</p>
      <ul className="list-disc list-inside space-y-2 text-zinc-300 mb-4">
        {t.about.whyPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">{t.about.featuresTitle}</h2>
      <ul className="list-disc list-inside space-y-2 text-zinc-300 mb-4">
        {t.about.featuresPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
