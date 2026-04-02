import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web Harmonium Online for Daily Practice | Play Harmonium",
  description: "Play harmonium online in your browser with keyboard shortcuts, Sargam labels, octave switching, transpose, and beginner-friendly guides. Perfect for daily practice.",
  keywords: ["harmonium", "online instrument", "virtual keyboard", "web audio", "music"],
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
