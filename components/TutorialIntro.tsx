'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function TutorialIntro() {
  const { t } = useLanguage();

  return (
    <div className="bg-zinc-700 border-l-4 border-orange-500 p-4 mb-8">
      <p className="text-zinc-300">
        <strong>{t.tutorial.newToHarmonium}</strong> {t.tutorial.introText}
        <Link href="/harmonium" className="text-orange-600 hover:underline ml-1">
          {t.tutorial.openHarmonium}
        </Link>
      </p>
    </div>
  );
}
