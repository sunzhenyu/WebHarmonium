import Link from 'next/link';

export default function BhajansPost() {
  return (
    <div className="prose max-w-none">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">How to Play Bhajans on Harmonium: Step-by-Step Guide</h1>

      <p className="text-lg text-gray-700 mb-6">
        Bhajans (devotional songs) are the soul of Indian music. For many, learning harmonium is entirely about playing bhajans during pujas or spiritual gatherings. In this guide, we'll teach you how to play some of the most popular and timeless bhajans using simple keyboard notation.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded">
        <h3 className="font-bold text-gray-900 mb-2">Before We Start: Understanding the Notation</h3>
        <p className="text-gray-700 text-sm mb-2">We use computer keyboard keys to represent notes. This makes it incredibly easy to follow along on Web Harmonium.</p>
        <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
          <li><strong>Lower case letters</strong> (e, r, t) are white keys (natural notes).</li>
          <li><strong>Numbers</strong> (2, 4, 5) are black keys (sharp/flat notes).</li>
          <li>Play the keys in order from left to right.</li>
          <li>A dash (-) means hold the note slightly longer.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-6">1. Om Jai Jagdish Hare (Aarti)</h2>
      <p className="text-gray-700 mb-4">
        This is arguably the most famous Hindu aarti, sung in millions of homes worldwide. It is simple, melodic, and perfect for beginners.
      </p>

      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8">
        <div className="space-y-4">
          <div>
            <p className="font-mono bg-white border border-gray-200 p-2 rounded text-sm mb-1 inline-block">u u u i u y t</p>
            <p className="text-gray-800 font-medium">Om Jai Jagdish Hare</p>
          </div>
          <div>
            <p className="font-mono bg-white border border-gray-200 p-2 rounded text-sm mb-1 inline-block">u u u i u y t</p>
            <p className="text-gray-800 font-medium">Swami Jai Jagdish Hare</p>
          </div>
          <div>
            <p className="font-mono bg-white border border-gray-200 p-2 rounded text-sm mb-1 inline-block">i o i u y t r</p>
            <p className="text-gray-800 font-medium">Bhakt Jano Ke Sankat</p>
          </div>
          <div>
            <p className="font-mono bg-white border border-gray-200 p-2 rounded text-sm mb-1 inline-block">e r t y u i o</p>
            <p className="text-gray-800 font-medium">Das Jano Ke Sankat</p>
          </div>
          <div>
            <p className="font-mono bg-white border border-gray-200 p-2 rounded text-sm mb-1 inline-block">p o i u y t</p>
            <p className="text-gray-800 font-medium">Kshan Mein Door Kare</p>
          </div>
          <div>
            <p className="font-mono bg-white border border-gray-200 p-2 rounded text-sm mb-1 inline-block">u u u i u y t</p>
            <p className="text-gray-800 font-medium">Om Jai Jagdish Hare</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-6">2. Raghupati Raghav Raja Ram</h2>
      <p className="text-gray-700 mb-4">
        A favorite bhajan of Mahatma Gandhi, this song has a rhythmic, marching quality. It's excellent for practicing timing and finger coordination.
      </p>

      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8">
        <div className="space-y-4">
          <div>
            <p className="font-mono bg-white border border-gray-200 p-2 rounded text-sm mb-1 inline-block">u u i u y t r</p>
            <p className="text-gray-800 font-medium">Raghupati Raghav Raja Ram</p>
          </div>
          <div>
            <p className="font-mono bg-white border border-gray-200 p-2 rounded text-sm mb-1 inline-block">u u i u y t</p>
            <p className="text-gray-800 font-medium">Patita Pavan Sita Ram</p>
          </div>
          <div>
            <p className="font-mono bg-white border border-gray-200 p-2 rounded text-sm mb-1 inline-block">i i o p o i u</p>
            <p className="text-gray-800 font-medium">Sita Ram Sita Ram</p>
          </div>
          <div>
            <p className="font-mono bg-white border border-gray-200 p-2 rounded text-sm mb-1 inline-block">u u i u y t</p>
            <p className="text-gray-800 font-medium">Bhaj Pyare Tu Sita Ram</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-6">3. Vaishnav Jan To</h2>
      <p className="text-gray-700 mb-4">
        Another beloved bhajan from Gujarat. The melody is gentle and flows beautifully across the keyboard.
      </p>

      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8">
        <div className="space-y-4">
          <div>
            <p className="font-mono bg-white border border-gray-200 p-2 rounded text-sm mb-1 inline-block">t t r t y u</p>
            <p className="text-gray-800 font-medium">Vaishnav jan to tene kahiye</p>
          </div>
          <div>
            <p className="font-mono bg-white border border-gray-200 p-2 rounded text-sm mb-1 inline-block">u i u y t r</p>
            <p className="text-gray-800 font-medium">Je peed parayi jaane re</p>
          </div>
          <div>
            <p className="font-mono bg-white border border-gray-200 p-2 rounded text-sm mb-1 inline-block">e r t y u i</p>
            <p className="text-gray-800 font-medium">Par dukhe upkaar kare toye</p>
          </div>
          <div>
            <p className="font-mono bg-white border border-gray-200 p-2 rounded text-sm mb-1 inline-block">o i u y t r</p>
            <p className="text-gray-800 font-medium">Man abhimaan na aane re</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Tips for Playing Bhajans</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
          <h3 className="font-bold text-gray-900 mb-2">🎤 Sing Along</h3>
          <p className="text-gray-700 text-sm">Harmonium is an accompaniment instrument. You should always sing while you play. This helps you internalize the melody and keeps your timing natural.</p>
        </div>
        <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
          <h3 className="font-bold text-gray-900 mb-2">🔄 Use Transpose</h3>
          <p className="text-gray-700 text-sm">If a song is too high or low for your voice, use the Transpose feature to shift the pitch until it feels comfortable to sing. Don't strain your voice!</p>
        </div>
        <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
          <h3 className="font-bold text-gray-900 mb-2">🎹 Add Drone Notes</h3>
          <p className="text-gray-700 text-sm">Once you master the melody, try holding down the root note (Sa) with your pinky or thumb while playing the melody with your other fingers for a richer sound.</p>
        </div>
        <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
          <h3 className="font-bold text-gray-900 mb-2">🎚️ Use Reeds & Reverb</h3>
          <p className="text-gray-700 text-sm">For devotional music, increase the Reeds setting to 2 or 3, and turn on Reverb. This creates a lush, hall-like sound perfect for bhajans.</p>
        </div>
      </div>

      <div className="mt-8 p-6 bg-blue-600 text-white rounded-xl text-center">
        <h3 className="text-xl font-bold mb-3">Ready to Play?</h3>
        <p className="mb-5 text-blue-100">Open the Web Harmonium in another tab and try playing these bhajans using your computer keyboard.</p>
        <Link href="/harmonium" target="_blank" className="inline-block px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors">
          Open Harmonium →
        </Link>
      </div>
    </div>
  );
}
