import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Harmonium Notes & Sargam Guide — Complete Reference | Web Harmonium',
  description: 'Complete harmonium notes guide with sargam notation (Sa Re Ga Ma Pa Dha Ni), keyboard mapping, all 12 notes, Thaat scales, and practice exercises for beginners.',
  keywords: ['harmonium notes', 'sargam notes', 'harmonium keyboard notes', 'sa re ga ma notes', 'harmonium sargam', 'learn harmonium notes', 'sargam guide', 'harmonium note chart'],
};

const notes = [
  { sargam: 'Sa', western: 'C', key: 'e', type: 'natural', desc: 'Root note — foundation of all ragas' },
  { sargam: 'Re♭ (Komal Re)', western: 'C#', key: '2', type: 'flat', desc: 'Flat second — used in Bhairav, Bhairavi' },
  { sargam: 'Re', western: 'D', key: 'r', type: 'natural', desc: 'Natural second' },
  { sargam: 'Ga♭ (Komal Ga)', western: 'D#', key: '4', type: 'flat', desc: 'Flat third — used in Kafi, Bhairavi' },
  { sargam: 'Ga', western: 'E', key: 't', type: 'natural', desc: 'Natural third' },
  { sargam: 'Ma', western: 'F', key: 'y', type: 'natural', desc: 'Natural fourth' },
  { sargam: 'Ma# (Tivra Ma)', western: 'F#', key: '7', type: 'sharp', desc: 'Sharp fourth — used in Yaman, Kalyan' },
  { sargam: 'Pa', western: 'G', key: 'u', type: 'natural', desc: 'Fifth — fixed note, never altered' },
  { sargam: 'Dha♭ (Komal Dha)', western: 'G#', key: '8', type: 'flat', desc: 'Flat sixth — used in Bhairav, Todi' },
  { sargam: 'Dha', western: 'A', key: 'i', type: 'natural', desc: 'Natural sixth' },
  { sargam: 'Ni♭ (Komal Ni)', western: 'A#', key: '9', type: 'flat', desc: 'Flat seventh — used in Kafi, Khamaj' },
  { sargam: 'Ni', western: 'B', key: 'o', type: 'natural', desc: 'Natural seventh' },
];

const thaats = [
  { name: 'Bilawal', notes: 'Sa Re Ga Ma Pa Dha Ni', western: 'C D E F G A B', ragas: 'Bilawal, Alhaiya Bilawal' },
  { name: 'Khamaj', notes: 'Sa Re Ga Ma Pa Dha Ni♭', western: 'C D E F G A A#', ragas: 'Khamaj, Jhinjhoti' },
  { name: 'Kafi', notes: 'Sa Re Ga♭ Ma Pa Dha Ni♭', western: 'C D D# F G A A#', ragas: 'Kafi, Bhimpalasi, Bageshri' },
  { name: 'Asavari', notes: 'Sa Re Ga♭ Ma Pa Dha♭ Ni♭', western: 'C D D# F G G# A#', ragas: 'Asavari, Desi' },
  { name: 'Bhairavi', notes: 'Sa Re♭ Ga♭ Ma Pa Dha♭ Ni♭', western: 'C C# D# F G G# A#', ragas: 'Bhairavi, Sindhu Bhairavi' },
  { name: 'Bhairav', notes: 'Sa Re♭ Ga Ma Pa Dha♭ Ni', western: 'C C# E F G G# B', ragas: 'Bhairav, Ahir Bhairav' },
  { name: 'Kalyan', notes: 'Sa Re Ga Ma# Pa Dha Ni', western: 'C D E F# G A B', ragas: 'Yaman, Bhupali, Kedar' },
  { name: 'Marwa', notes: 'Sa Re♭ Ga Ma# Pa Dha Ni', western: 'C C# E F# G A B', ragas: 'Marwa, Puriya' },
  { name: 'Poorvi', notes: 'Sa Re♭ Ga Ma# Pa Dha♭ Ni', western: 'C C# E F# G G# B', ragas: 'Poorvi, Shree' },
  { name: 'Todi', notes: 'Sa Re♭ Ga♭ Ma# Pa Dha♭ Ni', western: 'C C# D# F# G G# B', ragas: 'Miyan ki Todi, Multani' },
];

const bhajans = [
  { name: 'Om Jai Jagdish Hare', notes: 'Sa Sa Re Sa | Ni Sa Re Ga | Ma Pa Ma Ga Re', key: 'C (default)' },
  { name: 'Raghupati Raghav Raja Ram', notes: 'Pa Pa Pa Ma | Ga Ma Re Sa | Re Re Re Ni | Sa Re Ni Sa', key: 'C (default)' },
  { name: 'Vaishnav Jan To', notes: 'Ga Ga Ma Pa | Dha Pa Ma Ga | Re Sa Ni Sa | Re Ga Ma Pa', key: 'C (default)' },
  { name: 'Hare Krishna Mahamantra', notes: 'Sa Re Ga Ma | Pa Dha Ni Sa | Sa Ni Dha Pa | Ma Ga Re Sa', key: 'C (default)' },
];

export default function HarmoniumNotesPage() {
  return (
    <div className="bg-zinc-900 min-h-screen">
      {/* Hero */}
      <div className="bg-zinc-900 text-white py-10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-3">Harmonium Notes &amp; Sargam Guide</h1>
          <p className="text-zinc-400 text-lg mb-6">Complete reference for all harmonium notes, sargam notation, and keyboard mapping</p>
          <Link href="/harmonium" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Practice on Web Harmonium →
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">

        {/* All 12 Notes */}
        <section className="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-2">All Harmonium Notes — Sargam &amp; Keyboard Mapping</h2>
          <p className="text-stone-500 text-sm mb-6">The harmonium has 12 notes per octave. Below is the complete sargam notation with keyboard shortcuts for Web Harmonium.</p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-stone-200">
                  <th className="text-left py-3 pr-4 font-semibold text-stone-700">Sargam Note</th>
                  <th className="text-left py-3 pr-4 font-semibold text-stone-700">Western</th>
                  <th className="text-left py-3 pr-4 font-semibold text-stone-700">Key</th>
                  <th className="text-left py-3 font-semibold text-stone-700">Description</th>
                </tr>
              </thead>
              <tbody>
                {notes.map((n, i) => (
                  <tr key={i} className={`border-b border-stone-100 ${n.type === 'natural' ? '' : 'bg-zinc-900'}`}>
                    <td className="py-3 pr-4 font-semibold text-stone-900">{n.sargam}</td>
                    <td className="py-3 pr-4 text-stone-600">{n.western}</td>
                    <td className="py-3 pr-4">
                      <code className={`px-2 py-0.5 rounded text-xs font-mono font-bold ${n.type === 'natural' ? 'bg-zinc-900 text-stone-800' : 'bg-zinc-800 text-zinc-200'}`}>
                        {n.key}
                      </code>
                    </td>
                    <td className="py-3 text-stone-500 text-xs">{n.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
            <strong className="text-amber-800">Tip:</strong>
            <span className="text-amber-700"> White keys (natural notes): <code className="bg-amber-100 px-1 rounded">e r t y u i o</code> — Black keys (flat/sharp): <code className="bg-amber-100 px-1 rounded">2 4 7 8 9</code></span>
          </div>
        </section>

        {/* Sargam Scale */}
        <section className="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-2">The Sargam Scale — Sa Re Ga Ma Pa Dha Ni</h2>
          <p className="text-stone-500 text-sm mb-6">Sargam is the Indian equivalent of Western solfege (Do Re Mi). The 7 natural notes form the foundation of all Indian classical music and bhajans.</p>

          <div className="grid grid-cols-7 gap-2 mb-6">
            {['Sa', 'Re', 'Ga', 'Ma', 'Pa', 'Dha', 'Ni'].map((s, i) => (
              <div key={i} className="bg-orange-50 border border-orange-200 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-orange-700">{s}</div>
                <div className="text-xs text-stone-500 mt-1">{['C','D','E','F','G','A','B'][i]}</div>
                <div className="text-xs font-mono text-stone-400 mt-1">{['e','r','t','y','u','i','o'][i]}</div>
              </div>
            ))}
          </div>

          <div className="bg-zinc-900 text-white rounded-lg p-5">
            <h3 className="font-semibold mb-3 text-zinc-300">Basic Sargam Practice — Aroha &amp; Avaroha</h3>
            <p className="text-sm text-zinc-400 mb-2">Ascending (Aroha): <span className="text-white font-mono">Sa → Re → Ga → Ma → Pa → Dha → Ni → Sa</span></p>
            <p className="text-sm text-zinc-400">Descending (Avaroha): <span className="text-white font-mono">Sa → Ni → Dha → Pa → Ma → Ga → Re → Sa</span></p>
          </div>
        </section>

        {/* 10 Thaats */}
        <section className="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-2">10 Thaats — Parent Scales of Indian Classical Music</h2>
          <p className="text-stone-500 text-sm mb-6">All ragas in Hindustani classical music are derived from one of these 10 parent scales (Thaats). Learning these scales is essential for advanced harmonium playing.</p>

          <div className="space-y-3">
            {thaats.map((t, i) => (
              <div key={i} className="border border-stone-100 rounded-lg p-4 hover:border-orange-200 transition-colors">
                <div className="flex flex-wrap items-start gap-3">
                  <div className="w-24 flex-shrink-0">
                    <span className="font-bold text-stone-900">{t.name}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-mono text-orange-700 mb-1">{t.notes}</p>
                    <p className="text-xs text-stone-400">{t.western}</p>
                  </div>
                  <div className="text-xs text-stone-500 text-right">
                    <span className="bg-zinc-900 px-2 py-0.5 rounded">{t.ragas}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bhajan Notes */}
        <section className="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-2">Popular Bhajan Notes for Harmonium</h2>
          <p className="text-stone-500 text-sm mb-6">Practice these well-known bhajans using sargam notation. All notes are in the default C key — use the Transpose control to match your vocal range.</p>

          <div className="space-y-4">
            {bhajans.map((b, i) => (
              <div key={i} className="bg-amber-50 border border-amber-100 rounded-lg p-5">
                <h3 className="font-bold text-stone-900 mb-2">{b.name}</h3>
                <p className="font-mono text-sm text-orange-800 mb-1">{b.notes}</p>
                <p className="text-xs text-stone-400">Key: {b.key}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-zinc-900 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Practice These Notes Now</h2>
          <p className="text-zinc-400 mb-6">Open Web Harmonium and start playing — free, no download, works in your browser.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/harmonium" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Open Harmonium →
            </Link>
            <Link href="/blog/how-to-practice-sargam" className="inline-block bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Sargam Practice Guide
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
