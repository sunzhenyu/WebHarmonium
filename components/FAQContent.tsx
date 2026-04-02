'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function FAQContent() {
  const { t } = useLanguage();

  return (
    <>
      <div className="space-y-6">
        {t.faq.questions.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
            <h2 className="text-xl font-semibold mb-2 text-gray-900">{faq.q}</h2>
            <p className="text-gray-700">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold mb-2">{t.faq.stillHaveQuestions}</h3>
        <p className="text-gray-700">
          {t.faq.contactText} <Link href="/contact" className="text-blue-600 hover:underline">{t.faq.contactLink}</Link> {t.faq.contactSuffix}
        </p>
      </div>
    </>
  );
}
