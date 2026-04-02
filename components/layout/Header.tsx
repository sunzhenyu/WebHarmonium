'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const navLinks = [
  { href: '/harmonium', label: 'play', title: 'Play Web Harmonium Online', highlight: true },
  {
    label: 'learn',
    title: 'Learn Harmonium',
    dropdown: [
      { href: '/tutorial', label: 'tutorial', title: 'Harmonium Tutorial for Beginners' },
      { href: '/raga', label: 'ragas', title: 'Indian Ragas Guide' },
    ]
  },
  { href: '/blog', label: 'blog', title: 'Harmonium Blog & Tips', highlight: false },
  {
    label: 'more',
    title: 'More',
    dropdown: [
      { href: '/faq', label: 'faq', title: 'Frequently Asked Questions' },
      { href: '/about', label: 'about', title: 'About Web Harmonium' },
      { href: '/contact', label: 'contact', title: 'Contact Us' },
    ]
  },
];

export default function Header() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const isDropdownActive = (dropdown: any[]) =>
    dropdown.some(item => isActive(item.href));

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" title="Web Harmonium - Play Indian Harmonium Online" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            Web Harmonium
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            {navLinks.map((link, index) => {
              if (link.dropdown) {
                const active = isDropdownActive(link.dropdown);
                return (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`transition-colors font-medium pb-1 ${
                        active
                          ? 'text-blue-600 border-b-2 border-blue-600'
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      {t.nav[link.label as keyof typeof t.nav]}
                    </button>
                    {openDropdown === link.label && (
                      <div className="absolute top-full left-0 pt-1">
                        <div className="bg-white shadow-lg rounded-lg border border-gray-200 py-2 min-w-[160px]">
                          {link.dropdown.map(item => (
                            <Link
                              key={item.href}
                              href={item.href}
                              title={item.title}
                              className={`block px-4 py-2 text-sm transition-colors ${
                                isActive(item.href)
                                  ? 'bg-blue-50 text-blue-600 font-medium'
                                  : 'text-gray-700 hover:bg-gray-50'
                              }`}
                            >
                              {t.nav[item.label as keyof typeof t.nav]}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const active = link.href ? isActive(link.href) : false;
              if (link.highlight) {
                return (
                  <Link
                    key={link.href}
                    href={link.href!}
                    title={link.title}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      active
                        ? 'bg-blue-700 text-white'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {t.nav[link.label as keyof typeof t.nav]}
                  </Link>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href!}
                  title={link.title}
                  className={`transition-colors font-medium pb-1 ${
                    active
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {t.nav[link.label as keyof typeof t.nav]}
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 pb-2 border-t border-gray-100 pt-4 flex flex-col gap-3">
            <div className="px-2 mb-2">
              <LanguageSwitcher />
            </div>
            {navLinks.map((link, index) => {
              if (link.dropdown) {
                return (
                  <div key={index}>
                    <div className="px-2 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      {t.nav[link.label as keyof typeof t.nav]}
                    </div>
                    {link.dropdown.map(item => {
                      const active = isActive(item.href);
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          title={item.title}
                          onClick={() => setMenuOpen(false)}
                          className={`py-2 px-4 rounded transition-colors ${
                            active ? 'text-blue-600 bg-blue-50 font-medium' : 'text-gray-700 hover:text-blue-600'
                          }`}
                        >
                          {t.nav[item.label as keyof typeof t.nav]}
                        </Link>
                      );
                    })}
                  </div>
                );
              }

              const active = link.href ? isActive(link.href) : false;
              return (
                <Link
                  key={link.href || index}
                  href={link.href!}
                  title={link.title}
                  onClick={() => setMenuOpen(false)}
                  className={
                    link.highlight
                      ? `px-4 py-2 rounded-lg text-center font-medium transition-colors ${active ? 'bg-blue-700 text-white' : 'bg-blue-600 text-white'}`
                      : `py-2 px-2 rounded transition-colors ${active ? 'text-blue-600 bg-blue-50 font-medium' : 'text-gray-700 hover:text-blue-600'}`
                  }
                >
                  {t.nav[link.label as keyof typeof t.nav]}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
