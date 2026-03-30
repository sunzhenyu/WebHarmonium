import Link from 'next/link';
import type { Metadata } from 'next';
import StructuredData from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'How to Play Harmonium - Complete Tutorial Guide | Web Harmonium',
  description: 'Learn how to play harmonium online with our comprehensive tutorial. Step-by-step guide for beginners, keyboard controls, scales, and popular songs.',
  keywords: ['harmonium tutorial', 'learn harmonium', 'how to play harmonium', 'harmonium lessons', 'harmonium for beginners', 'online harmonium course'],
};

export default function TutorialPage() {
  const howToSteps = [
    {
      '@type': 'HowToStep',
      name: 'Load the Harmonium',
      text: 'Click on Play in the navigation menu and click the Load Module button to initialize the audio engine.',
    },
    {
      '@type': 'HowToStep',
      name: 'Learn the Keyboard Layout',
      text: 'White keys are mapped to ` q w e r t y u i o p [ ] \\ and black keys to 1 2 4 5 7 8 9 - =',
    },
    {
      '@type': 'HowToStep',
      name: 'Practice the C Major Scale',
      text: 'Press keys e-r-t-y-u-i-o-p in order to play the C major scale (Sa Re Ga Ma Pa Dha Ni Sa).',
    },
    {
      '@type': 'HowToStep',
      name: 'Adjust Controls',
      text: 'Use volume, transpose, and octave controls to customize the sound to your preference.',
    },
    {
      '@type': 'HowToStep',
      name: 'Practice Simple Songs',
      text: 'Start with simple songs like Twinkle Twinkle Little Star or Happy Birthday to build muscle memory.',
    },
  ];

  return (
    <div>
      <StructuredData
        type="HowTo"
        data={{
          name: 'How to Play Harmonium Online',
          description: 'Complete step-by-step guide to learning harmonium online for beginners',
          steps: howToSteps,
        }}
      />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">How to Play Harmonium - Complete Tutorial</h1>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-8">
          <p className="text-gray-700">
            <strong>New to harmonium?</strong> This comprehensive guide will teach you everything from basic keyboard controls to playing your first song.
            <Link href="/harmonium" className="text-blue-600 hover:underline ml-1">
              Open the harmonium →
            </Link>
          </p>
        </div>

        {/* Getting Started */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">1. Getting Started</h2>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Understanding the Keyboard Layout</h3>
          <p className="text-gray-700 mb-4">
            The Web Harmonium uses your computer keyboard to simulate a real harmonium. The keys are mapped to create a natural playing experience:
          </p>

          <div className="bg-gray-50 p-4 rounded mb-4">
            <p className="font-semibold mb-2">White Keys (Natural Notes):</p>
            <code className="bg-gray-200 px-2 py-1 rounded text-sm">` q w e r t y u i o p [ ] \</code>
            <p className="text-sm text-gray-600 mt-2">These keys play the natural notes (C, D, E, F, G, A, B)</p>
          </div>

          <div className="bg-gray-50 p-4 rounded mb-4">
            <p className="font-semibold mb-2">Black Keys (Sharp/Flat Notes):</p>
            <code className="bg-gray-200 px-2 py-1 rounded text-sm">1 2 4 5 7 8 9 - =</code>
            <p className="text-sm text-gray-600 mt-2">These keys play the sharp and flat notes (C#, D#, F#, G#, A#)</p>
          </div>

          <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-800">Loading the Harmonium</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
            <li>Click on "Play" in the navigation menu or visit the harmonium page</li>
            <li>Click the "Load Module" button to initialize the audio engine</li>
            <li>Wait for the audio samples to load (this may take a few seconds)</li>
            <li>Once loaded, you're ready to play!</li>
          </ol>
        </section>

        {/* Basic Controls */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">2. Understanding the Controls</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Volume Control</h3>
              <p className="text-gray-700">
                Adjust the overall volume from 1% to 100%. Start with a moderate volume (around 30-50%) and adjust based on your preference.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Transpose Control</h3>
              <p className="text-gray-700 mb-2">
                Transpose shifts all notes up or down by semitones (half steps). Range: -11 to +11 semitones.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Why use transpose?</strong> Different songs are sung in different keys. If a song is too high or too low for your voice, use transpose to shift it to a comfortable range.
              </p>
              <div className="bg-blue-50 p-3 rounded mt-2">
                <p className="text-sm text-gray-700">
                  <strong>Example:</strong> If a song is in C major but you want to play it in D major, set transpose to +2.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Octave Control</h3>
              <p className="text-gray-700">
                Switch between 7 different octaves (0-6). Octave 3 is the middle range. Lower octaves produce deeper sounds, higher octaves produce brighter sounds.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Reeds Control</h3>
              <p className="text-gray-700">
                Adjust the number of stacked reeds (1-4). More reeds create a richer, fuller sound with a chorus effect. Traditional harmoniums often have multiple reeds per note.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Reverb Control</h3>
              <p className="text-gray-700">
                Toggle reverb effect on/off. Reverb adds a sense of space and depth, simulating playing in a room or hall. Great for devotional music and classical performances.
              </p>
            </div>
          </div>
        </section>

        {/* Playing Your First Notes */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">3. Playing Your First Notes</h2>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">The C Major Scale</h3>
          <p className="text-gray-700 mb-4">
            Let's start with the most basic scale in Western music - C Major. This scale has no sharps or flats.
          </p>

          <div className="bg-gray-50 p-4 rounded mb-4">
            <p className="font-semibold mb-2">C Major Scale (Sa Re Ga Ma Pa Dha Ni Sa):</p>
            <div className="space-y-2">
              <p className="text-gray-700">Press these keys in order: <code className="bg-gray-200 px-2 py-1 rounded mx-1">e</code> <code className="bg-gray-200 px-2 py-1 rounded mx-1">r</code> <code className="bg-gray-200 px-2 py-1 rounded mx-1">t</code> <code className="bg-gray-200 px-2 py-1 rounded mx-1">y</code> <code className="bg-gray-200 px-2 py-1 rounded mx-1">u</code> <code className="bg-gray-200 px-2 py-1 rounded mx-1">i</code> <code className="bg-gray-200 px-2 py-1 rounded mx-1">o</code> <code className="bg-gray-200 px-2 py-1 rounded mx-1">p</code></p>
              <p className="text-sm text-gray-600">This plays: C - D - E - F - G - A - B - C (or Sa - Re - Ga - Ma - Pa - Dha - Ni - Sa in Indian notation)</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-800">Practice Exercise 1: Ascending and Descending</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Play the scale going up: e-r-t-y-u-i-o-p</li>
            <li>Play the scale going down: p-o-i-u-y-t-r-e</li>
            <li>Repeat this 5 times slowly, then gradually increase speed</li>
          </ol>
        </section>

        {/* Indian Classical Basics */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">4. Indian Classical Music Basics</h2>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Understanding Sargam (Indian Solfège)</h3>
          <p className="text-gray-700 mb-4">
            In Indian classical music, we use Sargam notation instead of Do-Re-Mi or C-D-E. Here's the correspondence:
          </p>

          <div className="bg-gray-50 p-4 rounded mb-4">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-2 font-semibold">Sargam</th>
                  <th className="py-2 font-semibold">Western</th>
                  <th className="py-2 font-semibold">Keyboard Key</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-200">
                  <td className="py-2">Sa</td>
                  <td className="py-2">C</td>
                  <td className="py-2"><code className="bg-gray-200 px-2 py-1 rounded">e</code></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">Re</td>
                  <td className="py-2">D</td>
                  <td className="py-2"><code className="bg-gray-200 px-2 py-1 rounded">r</code></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">Ga</td>
                  <td className="py-2">E</td>
                  <td className="py-2"><code className="bg-gray-200 px-2 py-1 rounded">t</code></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">Ma</td>
                  <td className="py-2">F</td>
                  <td className="py-2"><code className="bg-gray-200 px-2 py-1 rounded">y</code></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">Pa</td>
                  <td className="py-2">G</td>
                  <td className="py-2"><code className="bg-gray-200 px-2 py-1 rounded">u</code></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">Dha</td>
                  <td className="py-2">A</td>
                  <td className="py-2"><code className="bg-gray-200 px-2 py-1 rounded">i</code></td>
                </tr>
                <tr>
                  <td className="py-2">Ni</td>
                  <td className="py-2">B</td>
                  <td className="py-2"><code className="bg-gray-200 px-2 py-1 rounded">o</code></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-800">Common Ragas for Beginners</h3>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded">
              <h4 className="font-semibold mb-2">Raga Bhupali (Mohanam)</h4>
              <p className="text-gray-700 mb-2">A pentatonic raga (5 notes) - perfect for beginners</p>
              <p className="text-sm text-gray-600">Notes: Sa Re Ga Pa Dha Sa</p>
              <p className="text-sm text-gray-600">Keys: <code className="bg-gray-200 px-1 rounded">e r t u i</code></p>
            </div>

            <div className="bg-blue-50 p-4 rounded">
              <h4 className="font-semibold mb-2">Raga Yaman (Kalyani)</h4>
              <p className="text-gray-700 mb-2">One of the most popular evening ragas</p>
              <p className="text-sm text-gray-600">Notes: Sa Re Ga Ma# Pa Dha Ni Sa</p>
              <p className="text-sm text-gray-600">Keys: <code className="bg-gray-200 px-1 rounded">e r t 5 u i o</code></p>
            </div>

            <div className="bg-blue-50 p-4 rounded">
              <h4 className="font-semibold mb-2">Raga Bhairav</h4>
              <p className="text-gray-700 mb-2">Morning raga with serious, devotional mood</p>
              <p className="text-sm text-gray-600">Notes: Sa Re♭ Ga Ma Pa Dha♭ Ni Sa</p>
              <p className="text-sm text-gray-600">Keys: <code className="bg-gray-200 px-1 rounded">e 2 t y u 8 o</code></p>
            </div>

            <div className="bg-blue-50 p-4 rounded">
              <h4 className="font-semibold mb-2">Raga Kafi</h4>
              <p className="text-gray-700 mb-2">Folk-based raga, used in many bhajans</p>
              <p className="text-sm text-gray-600">Notes: Sa Re Ga♭ Ma Pa Dha Ni♭ Sa</p>
              <p className="text-sm text-gray-600">Keys: <code className="bg-gray-200 px-1 rounded">e r 4 y u i 9</code></p>
            </div>

            <div className="bg-blue-50 p-4 rounded">
              <h4 className="font-semibold mb-2">Raga Durga</h4>
              <p className="text-gray-700 mb-2">Pentatonic evening raga, bright and uplifting</p>
              <p className="text-sm text-gray-600">Notes: Sa Re Ma Pa Dha Sa</p>
              <p className="text-sm text-gray-600">Keys: <code className="bg-gray-200 px-1 rounded">e r y u i</code></p>
            </div>

            <div className="bg-blue-50 p-4 rounded">
              <h4 className="font-semibold mb-2">Raga Bilawal</h4>
              <p className="text-gray-700 mb-2">Morning raga, equivalent to Western C major scale</p>
              <p className="text-sm text-gray-600">Notes: Sa Re Ga Ma Pa Dha Ni Sa</p>
              <p className="text-sm text-gray-600">Keys: <code className="bg-gray-200 px-1 rounded">e r t y u i o</code></p>
            </div>

            <div className="bg-blue-50 p-4 rounded">
              <h4 className="font-semibold mb-2">Raga Desh</h4>
              <p className="text-gray-700 mb-2">Monsoon raga, romantic and playful</p>
              <p className="text-sm text-gray-600">Notes: Sa Re Ma Pa Ni Sa (with Ga and Dha as passing notes)</p>
              <p className="text-sm text-gray-600">Keys: <code className="bg-gray-200 px-1 rounded">e r y u o</code></p>
            </div>

            <div className="bg-blue-50 p-4 rounded">
              <h4 className="font-semibold mb-2">Raga Bageshri</h4>
              <p className="text-gray-700 mb-2">Late night raga, deeply emotional</p>
              <p className="text-sm text-gray-600">Notes: Sa Ga♭ Ma Dha Ni♭ Sa</p>
              <p className="text-sm text-gray-600">Keys: <code className="bg-gray-200 px-1 rounded">e 4 y i 9</code></p>
            </div>
          </div>
        </section>

        {/* Simple Songs */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">5. Simple Songs to Practice</h2>

          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Twinkle Twinkle Little Star</h3>
              <p className="text-gray-700 mb-3">A classic beginner song that everyone knows</p>
              <div className="bg-white p-3 rounded border border-gray-200">
                <p className="font-mono text-sm mb-1">e e u u i i u</p>
                <p className="text-xs text-gray-600 mb-2">Twin-kle twin-kle lit-tle star</p>
                <p className="font-mono text-sm mb-1">y y t t r r e</p>
                <p className="text-xs text-gray-600 mb-2">How I won-der what you are</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Happy Birthday</h3>
              <p className="text-gray-700 mb-3">Perfect for celebrations!</p>
              <div className="bg-white p-3 rounded border border-gray-200">
                <p className="font-mono text-sm mb-1">e e r e y t</p>
                <p className="text-xs text-gray-600 mb-2">Hap-py birth-day to you</p>
                <p className="font-mono text-sm mb-1">e e r e u y</p>
                <p className="text-xs text-gray-600 mb-2">Hap-py birth-day to you</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Om Jai Jagdish Hare (Aarti)</h3>
              <p className="text-gray-700 mb-3">Popular Hindu devotional song</p>
              <div className="bg-white p-3 rounded border border-gray-200">
                <p className="font-mono text-sm mb-1">u u u i u y t</p>
                <p className="text-xs text-gray-600 mb-2">Om Jai Jag-dish Ha-re</p>
                <p className="font-mono text-sm mb-1">u u u i u y t</p>
                <p className="text-xs text-gray-600 mb-2">Swa-mi Jai Jag-dish Ha-re</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Amazing Grace</h3>
              <p className="text-gray-700 mb-3">Beautiful hymn for practicing sustained notes</p>
              <div className="bg-white p-3 rounded border border-gray-200">
                <p className="font-mono text-sm mb-1">e u u t u u y</p>
                <p className="text-xs text-gray-600 mb-2">A-ma-zing grace how sweet the sound</p>
                <p className="font-mono text-sm mb-1">u i u y t</p>
                <p className="text-xs text-gray-600">That saved a wretch like me</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Raghupati Raghav Raja Ram</h3>
              <p className="text-gray-700 mb-3">Famous bhajan by Mahatma Gandhi</p>
              <div className="bg-white p-3 rounded border border-gray-200">
                <p className="font-mono text-sm mb-1">u u i u y t r</p>
                <p className="text-xs text-gray-600 mb-2">Ra-ghu-pa-ti Ra-ghav Ra-ja Ram</p>
                <p className="font-mono text-sm mb-1">u u i u y t</p>
                <p className="text-xs text-gray-600">Pa-ti-ta Pa-van Si-ta Ram</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Vaishnav Jan To</h3>
              <p className="text-gray-700 mb-3">Traditional Gujarati bhajan</p>
              <div className="bg-white p-3 rounded border border-gray-200">
                <p className="font-mono text-sm mb-1">t t r t y u</p>
                <p className="text-xs text-gray-600 mb-2">Vaish-nav jan to te-ne ka-hi-ye</p>
                <p className="font-mono text-sm mb-1">u i u y t r</p>
                <p className="text-xs text-gray-600">Je peed pa-ra-yi ja-ne re</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Tum Hi Ho (Aashiqui 2)</h3>
              <p className="text-gray-700 mb-3">Popular Bollywood romantic song</p>
              <div className="bg-white p-3 rounded border border-gray-200">
                <p className="font-mono text-sm mb-1">u y t r t y u</p>
                <p className="text-xs text-gray-600 mb-2">Tum hi ho tum hi ho</p>
                <p className="font-mono text-sm mb-1">i u y t r e</p>
                <p className="text-xs text-gray-600">Zin-da-gi ab tum hi ho</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Edelweiss (Sound of Music)</h3>
              <p className="text-gray-700 mb-3">Gentle waltz for practicing 3/4 time</p>
              <div className="bg-white p-3 rounded border border-gray-200">
                <p className="font-mono text-sm mb-1">e u u i u y</p>
                <p className="text-xs text-gray-600 mb-2">E-del-weiss, E-del-weiss</p>
                <p className="font-mono text-sm mb-1">t u y u t r</p>
                <p className="text-xs text-gray-600">Ev-ery morn-ing you greet me</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tips and Tricks */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">6. Tips for Better Playing</h2>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎹</span>
              <div>
                <h3 className="font-semibold text-gray-800">Use Keyboard Shortcuts</h3>
                <p className="text-gray-700">Press Ctrl+Alt+← → to change transpose, Ctrl+Alt+↑ ↓ to change octave. This keeps your hands on the keyboard.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">🎵</span>
              <div>
                <h3 className="font-semibold text-gray-800">Start Slow</h3>
                <p className="text-gray-700">Don't rush. Play each note clearly and deliberately. Speed will come with practice.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">👂</span>
              <div>
                <h3 className="font-semibold text-gray-800">Listen Carefully</h3>
                <p className="text-gray-700">Pay attention to the sound of each note. Try to match the pitch when singing along.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">⏱️</span>
              <div>
                <h3 className="font-semibold text-gray-800">Practice Daily</h3>
                <p className="text-gray-700">Even 10-15 minutes of daily practice is better than one long session per week.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">🎹</span>
              <div>
                <h3 className="font-semibold text-gray-800">Use Both Hands</h3>
                <p className="text-gray-700">On a real harmonium, one hand plays melody while the other pumps the bellows. Practice using your right hand for melody.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">🎤</span>
              <div>
                <h3 className="font-semibold text-gray-800">Sing Along</h3>
                <p className="text-gray-700">Harmonium is primarily an accompaniment instrument. Practice singing while playing.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">📱</span>
              <div>
                <h3 className="font-semibold text-gray-800">Record Yourself</h3>
                <p className="text-gray-700">Recording helps you identify areas for improvement that you might not notice while playing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">7. Next Steps</h2>

          <p className="text-gray-700 mb-4">
            Once you're comfortable with the basics, here are some ways to advance your skills:
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>Learn more complex ragas and their characteristic phrases (pakad)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>Practice playing bhajans and devotional songs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>Study rhythm (taal) and practice playing in different time signatures</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>Learn to accompany singers by following their pitch and rhythm</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>Explore different musical styles: classical, semi-classical, folk, and film music</span>
            </li>
          </ul>
        </section>

        {/* CTA */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Playing?</h2>
          <p className="mb-6">Put your knowledge into practice with our free online harmonium</p>
          <Link
            href="/harmonium"
            className="inline-block px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Open Harmonium
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}
