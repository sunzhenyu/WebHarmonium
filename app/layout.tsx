import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Web Harmonium - Free Online Harmonium Simulator",
  description: "Play harmonium using your computer keyboard. Free virtual instrument with transpose and octave controls.",
  keywords: ["harmonium", "online instrument", "virtual keyboard", "web audio", "music"],
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.svg',
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
          src="https://www.googletagmanager.com/gtag/js?id=G-6T5X64KP9M"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-6T5X64KP9M');
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
