import Link from 'next/link';

export default function SargamPost() {
  return (
    <div className="prose max-w-none">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">How to Practice Sargam on Harmonium: Complete Guide</h1>
      <p>Sargam is the foundation of Indian classical music. Just as Western musicians practice scales (Do, Re, Mi), Indian musicians practice Sargam (Sa, Re, Ga, Ma, Pa, Dha, Ni). Practicing Sargam on the harmonium is essential for developing your ear, your finger dexterity, and your vocal pitch accuracy.</p>

      <h2>1. Understanding the Notes</h2>
      <p>The 7 natural notes of the scale (shuddha swaras) correspond to the white keys on a piano starting from C:</p>
      <ul>
        <li><strong>Sa (Shadja):</strong> The root note (C). This is the foundation of all Indian music.</li>
        <li><strong>Re (Rishabh):</strong> The second note (D).</li>
        <li><strong>Ga (Gandhar):</strong> The third note (E).</li>
        <li><strong>Ma (Madhyam):</strong> The fourth note (F).</li>
        <li><strong>Pa (Pancham):</strong> The fifth note (G). Like Sa, this note is fixed and cannot be sharp or flat.</li>
        <li><strong>Dha (Dhaivat):</strong> The sixth note (A).</li>
        <li><strong>Ni (Nishad):</strong> The seventh note (B).</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded">
        <h3 className="font-bold text-gray-900 mb-2">Finding Sa on Web Harmonium</h3>
        <p className="text-gray-700 text-sm">On your computer keyboard using Web Harmonium, the default C Major scale (Sa Re Ga Ma Pa Dha Ni Sa) maps to the keys: <code>e r t y u i o p</code>.</p>
      </div>

      <h2>2. The Essential Practice: Alankars (Ornaments/Exercises)</h2>
      <p>Alankars are melodic patterns used to practice Sargam. They build finger speed, coordination, and intonation. You must <strong>sing the note names out loud</strong> while playing them.</p>

      <h3>Exercise 1: Aroha (Ascending) & Avaroha (Descending)</h3>
      <p>The most basic scale practice. Play each note once, slowly and clearly.</p>
      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-6">
        <p><strong>Aroha:</strong> Sa - Re - Ga - Ma - Pa - Dha - Ni - Sa (upper octave)</p>
        <p><strong>Avaroha:</strong> Sa (upper) - Ni - Dha - Pa - Ma - Ga - Re - Sa</p>
      </div>

      <h3>Exercise 2: Double Notes (Jod)</h3>
      <p>Play each note twice before moving to the next. This helps solidify the pitch in your mind.</p>
      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-6">
        <p><strong>Aroha:</strong> SaSa - ReRe - GaGa - MaMa - PaPa - DhaDha - NiNi - SaSa</p>
        <p><strong>Avaroha:</strong> SaSa - NiNi - DhaDha - PaPa - MaMa - GaGa - ReRe - SaSa</p>
      </div>

      <h3>Exercise 3: Three-Note Patterns (Khand Meru)</h3>
      <p>This pattern moves forward in steps of three. It builds finger independence.</p>
      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-6">
        <p><strong>Aroha:</strong> SaReGa - ReGaMa - GaMaPa - MaPaDha - PaDhaNi - DhaNiSa</p>
        <p><strong>Avaroha:</strong> SaNiDha - NiDhaPa - DhaPaMa - PaMaGa - MaGaRe - GaReSa</p>
      </div>

      <h3>Exercise 4: Four-Note Patterns</h3>
      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-6">
        <p><strong>Aroha:</strong> SaReGaMa - ReGaMaPa - GaMaPaDha - MaPaDhaNi - PaDhaNiSa</p>
        <p><strong>Avaroha:</strong> SaNiDhaPa - NiDhaPaMa - DhaPaMaGa - PaMaGaRe - MaGaReSa</p>
      </div>

      <h2>3. How to Practice Effectively</h2>
      <ul>
        <li><strong>Always Sing:</strong> Do not just move your fingers. Sing the note names (Sa, Re, Ga...) aloud. Your voice must perfectly match the pitch of the harmonium.</li>
        <li><strong>Use a Drone:</strong> In Indian music, the root notes (usually Sa and Pa) are played continuously as a drone (using a Tanpura or Shruti Box). This provides a reference pitch.</li>
        <li><strong>Start Slow (Vilambit):</strong> Practice very slowly at first. Focus on clarity and perfectly matching the pitch with your voice.</li>
        <li><strong>Increase Speed Gradually:</strong> Only increase your speed (Drut laya) when you can play the pattern flawlessly at a slow speed.</li>
        <li><strong>Practice Daily:</strong> 15 minutes of daily practice is far more effective than a 2-hour session once a week. Consistency builds muscle memory.</li>
      </ul>

      <h2>4. Moving Beyond the Natural Notes (Vikrut Swaras)</h2>
      <p>Once you master the natural notes (shuddha swaras), you must learn the sharp and flat notes (vikrut swaras):</p>
      <ul>
        <li><strong>Flat (Komal) Notes:</strong> Re, Ga, Dha, and Ni can be lowered by a half-step. (e.g., Komal Re is C# if Sa is C).</li>
        <li><strong>Sharp (Tivra) Note:</strong> Ma is the only note that can be raised by a half-step (Tivra Ma is F# if Sa is C).</li>
      </ul>
      <p>Practicing patterns using these different scales (called Thaats) will prepare you to play any Raga or bhajan.</p>

      <h2>Start Practicing Now</h2>
      <p>You can begin practicing these Sargam exercises immediately on <strong>Web Harmonium</strong>. It's completely free, requires no installation, and maps the keys perfectly to your computer keyboard.</p>
      <div className="mt-8">
        <Link href="/harmonium" target="_blank" className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
          Open Web Harmonium →
        </Link>
      </div>
    </div>
  );
}
