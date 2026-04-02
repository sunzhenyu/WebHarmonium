'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

interface PageHeaderProps {
  titleKey: 'faq' | 'tutorial' | 'about' | 'contact' | 'blogPage';
}

export default function PageHeader({ titleKey }: PageHeaderProps) {
  const { t } = useLanguage();
  const pageTranslations = t[titleKey];

  return (
    <div className="text-center mb-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-3">{pageTranslations.title}</h1>
      <p className="text-xl text-gray-600">{pageTranslations.subtitle}</p>
    </div>
  );
}
