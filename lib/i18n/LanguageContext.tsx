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
}

export function LanguageProvider({ children, initialLanguage = 'en' }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(initialLanguage);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setLanguageState(initialLanguage);
  }, [initialLanguage]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('harmonium-language', lang);

    // Build new pathname based on language
    if (lang === 'hi') {
      // Switch to Hindi: add /hi prefix if not already there
      if (!pathname.startsWith('/hi')) {
        router.push(`/hi${pathname}`);
      }
    } else {
      // Switch to English: remove /hi prefix if present
      if (pathname.startsWith('/hi')) {
        const newPath = pathname.replace(/^\/hi/, '') || '/';
        router.push(newPath);
      }
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
