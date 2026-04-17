'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ContactContent() {
  const { t } = useLanguage();

  return (
    <div className="prose max-w-none text-zinc-300">
      <p className="mb-4">{t.contact.intro}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">{t.contact.getInTouch}</h2>
      <p className="mb-4">{t.contact.forInquiries}</p>
      <p className="mb-4">
        <strong>{t.contact.email}</strong>{' '}
        <a href="mailto:kuyadan136@gmail.com" className="text-orange-600 hover:underline">
          kuyadan136@gmail.com
        </a>
      </p>
    </div>
  );
}
