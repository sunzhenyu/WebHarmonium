'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { translations, Language } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en & { lang: Language };
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage?: Language;
  initialMessages?: any;
}

export function LanguageProvider({ children, initialLanguage = 'en', initialMessages }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(initialLanguage);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setLanguageState(initialLanguage);
  }, [initialLanguage]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('harmonium-language', lang);

    // Extract current language from pathname
    const segments = pathname.split('/');
    const currentLang = segments[1];

    // Build new pathname with new language
    if (currentLang && (currentLang === 'en' || currentLang === 'hi')) {
      segments[1] = lang;
      const newPathname = segments.join('/');
      router.push(newPathname);
    }
  };

  const t = { ...translations[language], lang: language };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
