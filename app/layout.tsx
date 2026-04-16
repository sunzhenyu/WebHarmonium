import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web Harmonium — Play Harmonium Online Free",
  description: "Play harmonium online free in your browser. Virtual harmonium keyboard with Sargam labels, transpose, octave, reverb, and drone. No download needed.",
  keywords: ["web harmonium", "harmonium online", "play harmonium online", "online harmonium", "virtual harmonium", "harmonium keyboard", "sargam practice", "harmonium notes"],
  metadataBase: new URL("https://web-harmonium.net"),
  alternates: {
    canonical: "/",
    languages: {
      'en': '/en',
      'hi': '/hi',
    },
  },
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
  return children;
}
