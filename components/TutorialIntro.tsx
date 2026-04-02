'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function TutorialIntro() {
  const { t } = useLanguage();

  return (
    <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-8">
      <p className="text-gray-700">
        <strong>{t.tutorial.newToHarmonium}</strong> {t.tutorial.introText}
        <Link href="/harmonium" className="text-blue-600 hover:underline ml-1">
          {t.tutorial.openHarmonium}
        </Link>
      </p>
    </div>
  );
}
