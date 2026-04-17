'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = {
    en: { name: 'English', flag: '🇬🇧' },
    hi: { name: 'हिन्दी', flag: '🇮🇳' },
  };

  const currentLang = languages[language as keyof typeof languages];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800 rounded-lg shadow-sm border border-zinc-600 hover:bg-zinc-700 transition-colors text-sm font-medium text-zinc-300"
        aria-label="Change language"
      >
        <span>{currentLang.flag}</span>
        <span>{currentLang.name}</span>
        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-full mt-1 bg-zinc-800 rounded-lg shadow-lg border border-zinc-600 py-1 min-w-[140px] z-20">
            {Object.entries(languages).map(([code, lang]) => (
              <button
                key={code}
                onClick={() => {
                  setLanguage(code as 'en' | 'hi');
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-zinc-700 transition-colors ${
                  language === code ? 'bg-zinc-700 text-orange-600 font-medium' : 'text-zinc-300'
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
