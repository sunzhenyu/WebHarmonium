'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function FAQContent() {
  const { t } = useLanguage();

  return (
    <>
      <div className="space-y-6">
        {t.faq.questions.map((faq, index) => (
          <div key={index} className="border-b border-zinc-700 pb-6 last:border-0">
            <h2 className="text-xl font-semibold mb-2 text-white">{faq.q}</h2>
            <p className="text-zinc-300">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-zinc-700 rounded-lg border border-zinc-600">
        <h3 className="font-semibold mb-2 text-white">{t.faq.stillHaveQuestions}</h3>
        <p className="text-zinc-300">
          {t.faq.contactText} <Link href="/contact" className="text-orange-400 hover:underline">{t.faq.contactLink}</Link> {t.faq.contactSuffix}
        </p>
      </div>
    </>
  );
}
