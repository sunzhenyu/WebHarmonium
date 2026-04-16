'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Header() {
  const { t, language } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const getLocalizedHref = (href: string) => {
    if (language === 'hi') return `/hi${href}`;
    return href;
  };

  const isActive = (href: string) => {
    const localizedPath = language === 'hi' ? `/hi${href}` : href;
    return pathname === localizedPath || pathname.startsWith(`${localizedPath}/`);
  };

  const navLinkClass = (href: string) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      isActive(href)
        ? 'text-orange-400 bg-zinc-800'
        : 'text-zinc-300 hover:text-white hover:bg-zinc-800'
    }`;

  return (
    <header className="bg-zinc-900 text-white sticky top-0 z-50 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          <Link href={getLocalizedHref('/')} title="Web Harmonium - Play Indian Harmonium Online" className="group">
            <div className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors leading-tight">
              Web Harmonium
            </div>
            <div className="text-xs text-zinc-500 hidden sm:block">Play Harmonium Online Free</div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              href={getLocalizedHref('/harmonium')}
              title="Play Web Harmonium Online"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
            >
              {t.nav.play}
            </Link>
            <Link href={getLocalizedHref('/harmonium-notes')} title="Harmonium Notes & Sargam Guide" className={navLinkClass('/harmonium-notes')}>
              Harmonium Notes
            </Link>
            <Link href={getLocalizedHref('/tutorial')} title="Harmonium Tutorial Guide" className={navLinkClass('/tutorial')}>
              {t.nav.tutorial}
            </Link>
            <Link href={getLocalizedHref('/blog')} title="Harmonium Blog" className={navLinkClass('/blog')}>
              {t.nav.blog}
            </Link>
            <Link href={getLocalizedHref('/faq')} title="FAQ" className={navLinkClass('/faq')}>
              {t.nav.faq}
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-zinc-300 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-3 pb-3 border-t border-zinc-800 pt-3 space-y-1">
            <Link href={getLocalizedHref('/harmonium')} className="block bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold text-center" onClick={() => setMenuOpen(false)}>
              {t.nav.play}
            </Link>
            <Link href={getLocalizedHref('/harmonium-notes')} className="block px-3 py-2 text-zinc-300 hover:text-white rounded-lg text-sm" onClick={() => setMenuOpen(false)}>
              Harmonium Notes
            </Link>
            <Link href={getLocalizedHref('/tutorial')} className="block px-3 py-2 text-zinc-300 hover:text-white rounded-lg text-sm" onClick={() => setMenuOpen(false)}>
              {t.nav.tutorial}
            </Link>
            <Link href={getLocalizedHref('/blog')} className="block px-3 py-2 text-zinc-300 hover:text-white rounded-lg text-sm" onClick={() => setMenuOpen(false)}>
              {t.nav.blog}
            </Link>
            <Link href={getLocalizedHref('/faq')} className="block px-3 py-2 text-zinc-300 hover:text-white rounded-lg text-sm" onClick={() => setMenuOpen(false)}>
              {t.nav.faq}
            </Link>
            <div className="px-3 py-2">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
