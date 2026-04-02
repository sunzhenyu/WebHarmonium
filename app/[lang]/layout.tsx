import { Inter } from 'next/font/google';
import '../globals.css';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Web Harmonium Online for Daily Practice | Play Harmonium",
  description: "Play harmonium online in your browser with keyboard shortcuts, Sargam labels, octave switching, transpose, and beginner-friendly guides. Perfect for daily practice.",
  keywords: ["harmonium", "online instrument", "virtual keyboard", "web audio", "music"],
  metadataBase: new URL("https://web-harmonium.net"),
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.svg',
  },
  openGraph: {
    title: "Web Harmonium Online for Daily Practice | Play Harmonium",
    description: "Play harmonium online in your browser with keyboard shortcuts, Sargam labels, octave switching, transpose, and beginner-friendly guides. Perfect for daily practice.",
    url: "https://web-harmonium.net",
    siteName: "Web Harmonium",
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

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'hi' }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang}>
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
      <body className={inter.className}>
        <LanguageProvider initialLanguage={lang as 'en' | 'hi'}>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
