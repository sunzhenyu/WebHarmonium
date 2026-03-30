import Link from 'next/link';

export default function BestRagasPost() {
  const ragas = [
    {
      name: 'Raga Bhupali (Mohanam)',
      time: 'Evening',
      mood: 'Peaceful, devotional',
      notes: 'Sa Re Ga Pa Dha Sa',
      keys: 'e r t u i',
      difficulty: 'Beginner',
      description: 'Bhupali is a pentatonic raga — it uses only 5 notes, making it the perfect starting point. The absence of Ma and Ni makes it easy to stay in tune. It has a serene, devotional quality and is widely used in bhajans.',
      tip: 'Practice ascending (Sa→Dha) and descending (Dha→Sa) slowly before attempting any melody.',
    },
    {
      name: 'Raga Bilawal',
      time: 'Morning',
      mood: 'Bright, cheerful',
      notes: 'Sa Re Ga Ma Pa Dha Ni Sa',
      keys: 'e r t y u i o',
      difficulty: 'Beginner',
      description: 'Bilawal uses all 7 natural notes — it is the Indian equivalent of the Western C major scale. If you already know Western music, this raga will feel immediately familiar. It is bright and uplifting.',
      tip: 'This is the best raga to start with if you have any Western music background.',
    },
    {
      name: 'Raga Durga',
      time: 'Evening',
      mood: 'Uplifting, powerful',
      notes: 'Sa Re Ma Pa Dha Sa',
      keys: 'e r y u i',
      difficulty: 'Beginner',
      description: 'Another pentatonic raga, Durga skips Ga and Ni. It has a bright, energetic character and is associated with the goddess Durga. Many popular bhajans are composed in this raga.',
      tip: 'Focus on the jump from Re to Ma — this interval defines the raga\'s character.',
    },
    {
      name: 'Raga Yaman (Kalyani)',
      time: 'Evening (6–9 PM)',
      mood: 'Romantic, longing',
      notes: 'Sa Re Ga Ma# Pa Dha Ni Sa',
      keys: 'e r t 5 u i o',
      difficulty: 'Beginner–Intermediate',
      description: 'Yaman is one of the most popular ragas in Hindustani classical music. It uses a sharp Ma (Ma#), which gives it a distinctive, slightly yearning quality. Many Bollywood songs are based on Yaman.',
      tip: 'The sharp Ma (key "5") is what makes Yaman unique. Emphasize it in your practice.',
    },
    {
      name: 'Raga Bhairav',
      time: 'Early morning (6–9 AM)',
      mood: 'Serious, devotional, meditative',
      notes: 'Sa Re♭ Ga Ma Pa Dha♭ Ni Sa',
      keys: 'e 2 t y u 8 o',
      difficulty: 'Intermediate',
      description: 'Bhairav is a morning raga with a deep, serious character. It uses flat Re and flat Dha, giving it a unique, introspective quality. It is widely used in morning prayers and devotional music.',
      tip: 'The flat Re (key "2") at the start sets the mood immediately. Don\'t rush the opening notes.',
    },
    {
      name: 'Raga Kafi',
      time: 'Midnight',
      mood: 'Folk, earthy, romantic',
      notes: 'Sa Re Ga♭ Ma Pa Dha Ni♭ Sa',
      keys: 'e r 4 y u i 9',
      difficulty: 'Intermediate',
      description: 'Kafi is a folk-influenced raga with a warm, earthy character. It uses flat Ga and flat Ni. Many popular bhajans, thumris, and folk songs are based on Kafi. It is also the basis of the Western minor scale.',
      tip: 'Kafi sounds similar to the natural minor scale — if you know minor scales, you\'ll pick this up quickly.',
    },
    {
      name: 'Raga Desh',
      time: 'Late evening',
      mood: 'Romantic, monsoon, playful',
      notes: 'Sa Re Ma Pa Ni Sa',
      keys: 'e r y u o',
      difficulty: 'Intermediate',
      description: 'Desh is associated with the monsoon season and has a romantic, playful character. It is a popular raga for light classical and semi-classical music. Many famous thumris and ghazals are in Desh.',
      tip: 'Ga and Dha appear as passing notes (kan swar) — use them lightly, don\'t hold them.',
    },
    {
      name: 'Raga Bageshri',
      time: 'Late night',
      mood: 'Deep longing, emotional',
      notes: 'Sa Ga♭ Ma Dha Ni♭ Sa',
      keys: 'e 4 y i 9',
      difficulty: 'Intermediate',
      description: 'Bageshri is a deeply emotional raga associated with longing and separation. It is a favorite for thumri and ghazal singers. The combination of flat Ga and flat Ni creates a haunting, melancholic quality.',
      tip: 'This raga requires slow, deliberate playing. Each note should feel intentional.',
    },
  ];

  return (
    <div className="prose max-w-none">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Best Ragas for Beginners: A Complete Guide</h1>

      <p className="text-lg text-gray-700 mb-6">
        Starting Indian classical music can feel overwhelming — there are hundreds of ragas, each with its own rules, mood, and time of day. But you don't need to learn them all. These 8 ragas are the best starting points for harmonium beginners, chosen for their simplicity, popularity, and musical richness.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded">
        <p className="text-gray-700 font-medium">What is a Raga?</p>
        <p className="text-gray-600 text-sm mt-1">A raga is a melodic framework in Indian classical music — a specific set of notes with rules about how to use them. Each raga has a unique mood (rasa), time of day, and characteristic phrases. Think of it as a musical personality.</p>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-6">The 8 Best Ragas for Beginners</h2>

      <div className="space-y-8">
        {ragas.map((raga, i) => (
          <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-gray-900">{i + 1}. {raga.name}</h3>
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${raga.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                {raga.difficulty}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
              <div><span className="text-gray-500">Time:</span> <span className="font-medium text-gray-800">{raga.time}</span></div>
              <div><span className="text-gray-500">Mood:</span> <span className="font-medium text-gray-800">{raga.mood}</span></div>
              <div><span className="text-gray-500">Notes:</span> <span className="font-medium text-gray-800">{raga.notes}</span></div>
              <div><span className="text-gray-500">Keys:</span> <code className="bg-gray-200 px-1 rounded text-gray-800">{raga.keys}</code></div>
            </div>

            <p className="text-gray-700 mb-3">{raga.description}</p>

            <div className="bg-white border border-blue-100 rounded p-3">
              <span className="text-blue-600 font-semibold text-sm">Practice Tip: </span>
              <span className="text-gray-700 text-sm">{raga.tip}</span>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Practice Ragas on Harmonium</h2>
      <ol className="space-y-3 text-gray-700">
        <li><strong>1. Learn the scale first</strong> — Play the notes ascending and descending until they feel natural.</li>
        <li><strong>2. Practice slowly</strong> — Speed is not the goal. Clarity and intonation matter more.</li>
        <li><strong>3. Use a drone</strong> — Play Sa continuously in the background while practicing. This trains your ear to stay in tune.</li>
        <li><strong>4. Learn characteristic phrases</strong> — Each raga has signature melodic movements (pakad). These define the raga's identity.</li>
        <li><strong>5. Listen to recordings</strong> — Search for each raga on YouTube and listen to how masters play it before practicing.</li>
      </ol>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <p className="text-gray-700">Ready to practice? <Link href="/harmonium" className="text-blue-600 hover:underline font-medium">Open the free harmonium →</Link> and try these ragas right now. Check our <Link href="/tutorial" className="text-blue-600 hover:underline">tutorial page</Link> for more guidance.</p>
      </div>
    </div>
  );
}
