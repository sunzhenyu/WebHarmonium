import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Web Harmonium - Free Online Harmonium Simulator',
  description: 'Learn about Web Harmonium, a free online harmonium simulator built with modern web technologies. Play authentic harmonium sounds in your browser.',
  keywords: ['about harmonium', 'web harmonium', 'online harmonium', 'harmonium simulator', 'web audio'],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6">About Web Harmonium</h1>

          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              Web Harmonium is a free online harmonium simulator that brings the authentic sound
              of this traditional instrument to your web browser. Built with modern web technologies,
              it provides a realistic playing experience without requiring any downloads or installations.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">What is a Harmonium?</h2>
            <p className="text-gray-700 mb-4">
              The harmonium is a keyboard instrument similar to an organ. It produces sound by blowing air through reeds using bellows operated by hand. Originally developed in Europe in the 19th century, the harmonium became extremely popular in India and is now an essential instrument in Indian classical music, devotional music (bhajans and kirtans), and Bollywood film music.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Why Web Harmonium?</h2>
            <p className="text-gray-700 mb-4">
              Traditional harmoniums can be expensive and require physical space. Web Harmonium makes this beautiful instrument accessible to everyone:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Practice anytime, anywhere - no physical instrument needed</li>
              <li>Perfect for beginners learning harmonium basics</li>
              <li>Great for songwriters and composers to sketch ideas</li>
              <li>Ideal for devotional music practice at home</li>
              <li>Useful for music teachers demonstrating concepts</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Authentic harmonium sound samples recorded from real instruments</li>
              <li>Keyboard and mouse/touch control for flexible playing</li>
              <li>Transpose control (-11 to +11 semitones) to match any vocal range</li>
              <li>Octave shifting (7 octaves) for full range coverage</li>
              <li>Volume control and reverb effects</li>
              <li>Multiple reed simulation for richer sound</li>
              <li>Settings persistence using browser storage - your preferences are saved</li>
              <li>No installation or registration required</li>
              <li>Completely free to use</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Technology</h2>
            <p className="text-gray-700 mb-4">
              This application is built using:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Next.js 14 with App Router</li>
              <li>TypeScript for type safety</li>
              <li>Web Audio API for sound generation</li>
              <li>Tailwind CSS for styling</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Browser Compatibility</h2>
            <p className="text-gray-700 mb-4">
              Web Harmonium works best on modern browsers that support the Web Audio API:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Chrome/Edge (recommended)</li>
              <li>Firefox</li>
              <li>Safari</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
