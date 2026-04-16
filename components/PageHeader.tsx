'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

interface PageHeaderProps {
  titleKey: 'faq' | 'tutorial' | 'about' | 'contact' | 'blogPage';
}

export default function PageHeader({ titleKey }: PageHeaderProps) {
  const { t } = useLanguage();
  const pageTranslations = t[titleKey];

  return (
    <div className="bg-zinc-900 text-white -mx-8 -mt-8 mb-10 px-8 py-10 text-center rounded-t-none">
      <h1 className="text-4xl font-bold text-white mb-3">{pageTranslations.title}</h1>
      <p className="text-xl text-zinc-400">{pageTranslations.subtitle}</p>
    </div>
  );
}
