'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const pathname = usePathname();

  // Extract current language from pathname
  const segments = pathname.split('/');
  const currentLang = segments[1] && (segments[1] === 'en' || segments[1] === 'hi') ? segments[1] : 'en';

  const getLocalizedHref = (href: string) => {
    if (href.startsWith('http')) return href; // External link
    return `/${currentLang}${href}`;
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-4xl mx-auto px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.playSection}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={getLocalizedHref('/harmonium')} title="Play Harmonium Online" className="hover:text-white transition-colors">{t.footer.harmonium}</Link></li>
              <li><Link href={getLocalizedHref('/raga')} title="Play Ragas" className="hover:text-white transition-colors">{t.footer.ragaPlayer}</Link></li>
              <li><Link href={getLocalizedHref('/harmonium')} title="Shruti Box Online" className="hover:text-white transition-colors">{t.footer.shrutiBox}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.learnSection}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={getLocalizedHref('/tutorial')} title="Harmonium Tutorial" className="hover:text-white transition-colors">{t.footer.tutorial}</Link></li>
              <li><Link href={getLocalizedHref('/blog')} title="Harmonium Blog" className="hover:text-white transition-colors">{t.footer.blog}</Link></li>
              <li><Link href={getLocalizedHref('/blog/best-ragas-for-beginners')} title="Ragas for Beginners" className="hover:text-white transition-colors">{t.footer.ragasForBeginners}</Link></li>
              <li><Link href={getLocalizedHref('/blog/how-to-practice-sargam')} title="Sargam Practice" className="hover:text-white transition-colors">{t.footer.sargamPractice}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.guidesSection}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={getLocalizedHref('/blog/best-harmonium-for-beginners')} title="Best Harmonium for Beginners" className="hover:text-white transition-colors">{t.footer.buyingGuide}</Link></li>
              <li><Link href={getLocalizedHref('/blog/harmonium-vs-keyboard')} title="Harmonium vs Keyboard" className="hover:text-white transition-colors">{t.footer.harmoniumVsKeyboard}</Link></li>
              <li><Link href={getLocalizedHref('/blog/how-to-play-bhajans-on-harmonium')} title="How to Play Bhajans" className="hover:text-white transition-colors">{t.footer.bhajanNotes}</Link></li>
              <li><Link href={getLocalizedHref('/faq')} title="FAQ" className="hover:text-white transition-colors">{t.footer.faq}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.aboutSection}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={getLocalizedHref('/about')} title="About Web Harmonium" className="hover:text-white transition-colors">{t.footer.about}</Link></li>
              <li><Link href={getLocalizedHref('/contact')} title="Contact" className="hover:text-white transition-colors">{t.footer.contact}</Link></li>
              <li><Link href={getLocalizedHref('/privacy')} title="Privacy Policy" className="hover:text-white transition-colors">{t.footer.privacy}</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-10 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {t.footer.copyright}</p>
          <p>
            <Link href={`https://web-harmonium.net`} title="Web Harmonium" className="hover:text-gray-300 transition-colors">web-harmonium.net</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
