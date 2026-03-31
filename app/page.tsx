import Link from 'next/link';
import StructuredData from '@/components/seo/StructuredData';

export default function Home() {
  return (
    <div>
      <StructuredData
        type="WebApplication"
        data={{
          name: 'Web Harmonium',
          description: 'Free online harmonium simulator. Play harmonium with your computer keyboard, adjust transpose, octave, and volume controls.',
          url: 'https://webharmonium.com',
          features: [
            'Play harmonium with computer keyboard',
            'Transpose control (-11 to +11 semitones)',
            'Multiple octaves (7 octaves)',
            'Volume control (1-100%)',
            'Reverb effects',
            'Multiple reed simulation',
            'No installation required',
          ],
        }}
      />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto p-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Web Harmonium</h1>
          <p className="text-xl text-gray-600">Free Online Harmonium Simulator</p>
        </header>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Play Harmonium in Your Browser</h2>
          <p className="text-gray-700 mb-4">
            Experience the authentic sound of a harmonium right in your web browser.
            No installation required - just click and play! Perfect for musicians, students, and devotional music enthusiasts.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="p-4 bg-blue-50 rounded">
              <h3 className="font-semibold mb-2">🎹 Keyboard Control</h3>
              <p className="text-sm text-gray-700">
                Use your computer keyboard to play notes naturally. Easy to learn keyboard layout for beginners.
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded">
              <h3 className="font-semibold mb-2">🎵 Transpose & Pitch</h3>
              <p className="text-sm text-gray-700">
                Adjust pitch from -11 to +11 semitones. Perfect for matching your vocal range or playing in different keys.
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded">
              <h3 className="font-semibold mb-2">🎚️ Volume & Reverb</h3>
              <p className="text-sm text-gray-700">
                Full volume control and reverb effects for authentic harmonium sound. Customize your playing experience.
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded">
              <h3 className="font-semibold mb-2">🎼 Multiple Octaves</h3>
              <p className="text-sm text-gray-700">
                Switch between 7 different octaves. Play everything from deep bass to high treble notes.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/harmonium"
              title="Play Web Harmonium Online"
              className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Playing
            </Link>
            <Link
              href="/tutorial"
              title="Harmonium Tutorial for Beginners"
              className="inline-block ml-4 px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Learn How to Play
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">How to Use</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Click "Start Playing" to open the harmonium interface</li>
            <li>Click "Load Module" to initialize the audio engine</li>
            <li>Use your keyboard keys (` q w e r t y u i o p [ ] \) to play notes</li>
            <li>Adjust volume, transpose, and octave controls as needed</li>
            <li>Click on the virtual keyboard with your mouse or touch screen</li>
          </ol>
        </div>

        {/* PSEO Links Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-semibold mb-6 text-gray-800 text-center">Learn More About Harmoniums</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/instrument/harmonium" title="Harmonium" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-sm">
              Harmonium
            </Link>
            <Link href="/instrument/harmonium-instrument" title="Harmonium Instrument" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-sm">
              Harmonium Instrument
            </Link>
            <Link href="/instrument/reed-organ-harmonium" title="Reed Organ Harmonium" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-sm">
              Reed Organ Harmonium
            </Link>
            <Link href="/instrument/harmonium-pedal-organ" title="Harmonium Pedal Organ" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-sm">
              Harmonium Pedal Organ
            </Link>
            <Link href="/instrument/harmonium-musical-instrument" title="Harmonium Musical Instrument" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-sm">
              Harmonium Musical Instrument
            </Link>
            <Link href="/instrument/indian-harmonium" title="Indian Harmonium" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-sm">
              Indian Harmonium
            </Link>
            <Link href="/instrument/the-harmonium-in-my-memory" title="The Harmonium In My Memory" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-sm">
              The Harmonium in My Memory
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
