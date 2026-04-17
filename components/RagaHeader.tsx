'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function RagaHeader() {
  const { t } = useLanguage();

  return (
    <div className="text-center mb-10">
      <h1 className="text-4xl font-bold text-white mb-3">{t.raga.title}</h1>
      <p className="text-xl text-zinc-300">{t.raga.subtitle}</p>
    </div>
  );
}
