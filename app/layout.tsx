import type { Metadata } from "next";
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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
