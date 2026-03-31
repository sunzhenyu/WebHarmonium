import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Web Harmonium - Free Online Harmonium Simulator",
  description: "Play harmonium free in your browser using your keyboard. Transpose, octave, reverb, and Shruti Box controls. No download needed — start playing instantly.",
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
    title: "Web Harmonium - Free Online Harmonium Simulator",
    description: "Play harmonium free in your browser using your keyboard. Transpose, octave, reverb, and Shruti Box controls. No download needed — start playing instantly.",
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
    title: "Web Harmonium - Free Online Harmonium Simulator",
    description: "Play harmonium free in your browser using your keyboard. Transpose, octave, reverb, and Shruti Box controls. No download needed — start playing instantly.",
    site: "@DanDan344479",
    creator: "@DanDan344479",
    images: ["/og-image.svg"],
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
        <Header />
        {children}
      </body>
    </html>
  );
}
