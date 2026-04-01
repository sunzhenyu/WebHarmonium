import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import "./globals.css";
import Header from "@/components/layout/Header";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

export const metadata: Metadata = {
  title: "Web Harmonium Online for Daily Practice | Play Harmonium",
  description: "Play harmonium online in your browser with keyboard shortcuts, Sargam labels, octave switching, transpose, and beginner-friendly guides. Perfect for daily practice.",
  keywords: ["harmonium", "online instrument", "virtual keyboard", "web audio", "music"],
  metadataBase: new URL("https://web-harmonium.net"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.svg',
  },
  openGraph: {
    title: "Web Harmonium Online for Daily Practice | Play Harmonium",
    description: "Play harmonium online in your browser with keyboard shortcuts, Sargam labels, octave switching, transpose, and beginner-friendly guides. Perfect for daily practice.",
    url: "https://web-harmonium.net",
    siteName: "Web Harmonium",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Web Harmonium - Free Online Harmonium Simulator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Harmonium Online for Daily Practice | Play Harmonium",
    description: "Play harmonium online in your browser with keyboard shortcuts, Sargam labels, octave switching, transpose, and beginner-friendly guides. Perfect for daily practice.",
    site: "@DanDan344479",
    creator: "@DanDan344479",
    images: ["/twitter-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-REXSJNQ2WE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-REXSJNQ2WE');
          `}
        </Script>
      </head>
      <body>
        <LanguageProvider>
          <Header />
          {children}
          <footer className="bg-gray-900 text-gray-300">
          <div className="max-w-4xl mx-auto px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

              <div>
                <h3 className="text-white font-semibold mb-4">Play</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/harmonium" title="Play Harmonium Online" className="hover:text-white transition-colors">Harmonium</Link></li>
                  <li><Link href="/raga" title="Play Ragas" className="hover:text-white transition-colors">Raga Player</Link></li>
                  <li><Link href="/harmonium" title="Shruti Box Online" className="hover:text-white transition-colors">Shruti Box</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Learn</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/tutorial" title="Harmonium Tutorial" className="hover:text-white transition-colors">Tutorial</Link></li>
                  <li><Link href="/blog" title="Harmonium Blog" className="hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/blog/best-ragas-for-beginners" title="Ragas for Beginners" className="hover:text-white transition-colors">Ragas for Beginners</Link></li>
                  <li><Link href="/blog/how-to-practice-sargam" title="Sargam Practice" className="hover:text-white transition-colors">Sargam Practice</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Guides</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/blog/best-harmonium-for-beginners" title="Best Harmonium for Beginners" className="hover:text-white transition-colors">Buying Guide</Link></li>
                  <li><Link href="/blog/harmonium-vs-keyboard" title="Harmonium vs Keyboard" className="hover:text-white transition-colors">Harmonium vs Keyboard</Link></li>
                  <li><Link href="/blog/how-to-play-bhajans-on-harmonium" title="How to Play Bhajans" className="hover:text-white transition-colors">Bhajan Notes</Link></li>
                  <li><Link href="/faq" title="FAQ" className="hover:text-white transition-colors">FAQ</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">About</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/about" title="About Web Harmonium" className="hover:text-white transition-colors">About</Link></li>
                  <li><Link href="/contact" title="Contact" className="hover:text-white transition-colors">Contact</Link></li>
                  <li><Link href="/privacy" title="Privacy Policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                </ul>
              </div>

            </div>

            <div className="mt-10 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
              <p>© {new Date().getFullYear()} Web Harmonium. Free online harmonium simulator.</p>
              <p>
                <Link href="https://web-harmonium.net" title="Web Harmonium" className="hover:text-gray-300 transition-colors">web-harmonium.net</Link>
              </p>
            </div>
          </div>
        </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}
