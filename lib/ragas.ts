export interface RagaData {
  slug: string;
  name: string;
  altName?: string;
  time: string;
  season?: string;
  mood: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  aroha: string;       // ascending scale in sargam
  avaroha: string;     // descending scale in sargam
  arohaKeys: string;   // keyboard keys for aroha
  avarohaKeys: string; // keyboard keys for avaroha
  pakad: string;       // characteristic phrase
  pakadKeys: string;
  vadi: string;        // most important note
  samvadi: string;     // second most important note
  famousSongs: { title: string; artist: string }[];
  practiceNotes: string;
  keywords: string[];
}

export const ragas: RagaData[] = [
  {
    slug: 'bhupali',
    name: 'Raga Bhupali',
    altName: 'Mohanam (Carnatic)',
    time: 'Evening (6–9 PM)',
    season: 'All seasons',
    mood: 'Peaceful, devotional, serene',
    difficulty: 'Beginner',
    description: 'Bhupali is a pentatonic raga using only 5 notes (Sa Re Ga Pa Dha). Its simplicity makes it the ideal starting raga for beginners. The absence of Ma and Ni gives it a pure, open quality. It is widely used in bhajans, film songs, and classical compositions.',
    aroha: 'Sa Re Ga Pa Dha Sa',
    avaroha: 'Sa Dha Pa Ga Re Sa',
    arohaKeys: 'e r t u i p',
    avarohaKeys: 'p i u t r e',
    pakad: 'Ga Re Sa, Dha Pa, Ga Pa Dha',
    pakadKeys: 't r e, i u, t u i',
    vadi: 'Ga',
    samvadi: 'Dha',
    famousSongs: [
      { title: 'Raghupati Raghav Raja Ram', artist: 'Traditional Bhajan' },
      { title: 'Tum Bin Jao Kahan', artist: 'Pyaasa (1957)' },
      { title: 'Mere Dil Mein Aaj Kya Hai', artist: 'Daag (1973)' },
    ],
    practiceNotes: 'Start by playing Sa-Re-Ga-Pa-Dha ascending and descending slowly. Focus on the Ga note — it is the vadi (most important note) and should be emphasized. The jump from Re to Ga and from Pa to Dha are characteristic of this raga.',
    keywords: ['raga bhupali', 'bhupali harmonium', 'mohanam raga', 'pentatonic raga', 'beginner raga harmonium'],
  },
  {
    slug: 'yaman',
    name: 'Raga Yaman',
    altName: 'Kalyani (Carnatic)',
    time: 'Evening (6–9 PM)',
    season: 'All seasons',
    mood: 'Romantic, longing, expansive',
    difficulty: 'Beginner',
    description: 'Yaman is one of the most popular and widely performed ragas in Hindustani classical music. Its defining feature is the sharp Ma (Tivra Ma), which gives it a distinctive, slightly yearning quality. Many Bollywood songs are based on Yaman.',
    aroha: 'Sa Re Ga Ma# Pa Dha Ni Sa',
    avaroha: 'Sa Ni Dha Pa Ma# Ga Re Sa',
    arohaKeys: 'e r t 5 u i o p',
    avarohaKeys: 'p o i u 5 t r e',
    pakad: 'Ni Re Ga, Ma# Re Sa',
    pakadKeys: 'o r t, 5 r e',
    vadi: 'Ga',
    samvadi: 'Ni',
    famousSongs: [
      { title: 'Kadar Jaane Na', artist: 'Aandhi (1975)' },
      { title: 'Aaj Jaane Ki Zid Na Karo', artist: 'Farida Khanum' },
      { title: 'Jhanak Jhanak Tori Baaje Payaliya', artist: 'Classical' },
    ],
    practiceNotes: 'The sharp Ma (key "5") is what defines Yaman. Practice emphasizing it. The raga often starts from the lower Ni (key "o" in lower octave). The phrase Ni-Re-Ga is a signature movement — practice it repeatedly.',
    keywords: ['raga yaman', 'yaman harmonium', 'kalyani raga', 'tivra ma raga', 'evening raga harmonium'],
  },
  {
    slug: 'bhairav',
    name: 'Raga Bhairav',
    time: 'Early Morning (6–9 AM)',
    season: 'All seasons',
    mood: 'Serious, devotional, meditative, majestic',
    difficulty: 'Intermediate',
    description: 'Bhairav is one of the oldest and most revered ragas in Indian classical music. Named after Lord Shiva (Bhairav), it is a morning raga with a deep, serious character. It uses flat Re and flat Dha, creating a unique, introspective quality perfect for morning prayers.',
    aroha: 'Sa Re♭ Ga Ma Pa Dha♭ Ni Sa',
    avaroha: 'Sa Ni Dha♭ Pa Ma Ga Re♭ Sa',
    arohaKeys: 'e 2 t y u 8 o p',
    avarohaKeys: 'p o 8 u y t 2 e',
    pakad: 'Ga Ma Dha♭ Pa, Ma Ga Re♭ Sa',
    pakadKeys: 't y 8 u, y t 2 e',
    vadi: 'Dha♭',
    samvadi: 'Re♭',
    famousSongs: [
      { title: 'Jogiya', artist: 'Arth (1982)' },
      { title: 'Bhaj Man Ram Charan Sukhdai', artist: 'Classical Bhajan' },
      { title: 'Mere To Giridhar Gopal', artist: 'Mirabai Bhajan' },
    ],
    practiceNotes: 'The flat Re (key "2") at the very beginning sets the serious mood. Don\'t rush the opening. The flat Dha (key "8") is the vadi — give it special attention. This raga requires slow, deliberate playing.',
    keywords: ['raga bhairav', 'bhairav harmonium', 'morning raga', 'komal re raga', 'devotional raga harmonium'],
  },
  {
    slug: 'kafi',
    name: 'Raga Kafi',
    time: 'Midnight (12–3 AM)',
    season: 'Spring (Vasant)',
    mood: 'Folk, earthy, romantic, melancholic',
    difficulty: 'Intermediate',
    description: 'Kafi is a folk-influenced raga with a warm, earthy character. It uses flat Ga and flat Ni, making it equivalent to the Western natural minor scale. It is the basis of many popular bhajans, thumris, and folk songs. Holi songs are often composed in Kafi.',
    aroha: 'Sa Re Ga♭ Ma Pa Dha Ni♭ Sa',
    avaroha: 'Sa Ni♭ Dha Pa Ma Ga♭ Re Sa',
    arohaKeys: 'e r 4 y u i 9 p',
    avarohaKeys: 'p 9 i u y 4 r e',
    pakad: 'Sa Ga♭ Ma Pa, Ni♭ Dha Pa',
    pakadKeys: 'e 4 y u, 9 i u',
    vadi: 'Pa',
    samvadi: 'Sa',
    famousSongs: [
      { title: 'Hori Khele Raghuveera', artist: 'Baghban (2003)' },
      { title: 'Sajan Re Jhooth Mat Bolo', artist: 'Teesri Kasam (1966)' },
      { title: 'Piya Tose Naina Laage Re', artist: 'Guide (1965)' },
    ],
    practiceNotes: 'Kafi sounds very natural to Western ears because it resembles the natural minor scale. If you know minor scales, you\'ll pick this up quickly. Focus on the flat Ga (key "4") — it gives the raga its characteristic folk quality.',
    keywords: ['raga kafi', 'kafi harmonium', 'komal ga raga', 'folk raga harmonium', 'holi raga'],
  },
  {
    slug: 'bilawal',
    name: 'Raga Bilawal',
    time: 'Morning (6–9 AM)',
    season: 'All seasons',
    mood: 'Bright, cheerful, pure',
    difficulty: 'Beginner',
    description: 'Bilawal uses all 7 natural notes — it is the Indian equivalent of the Western C major scale. It is the parent thaat (scale) of the Bilawal family of ragas. Its bright, pure quality makes it ideal for morning practice and beginners transitioning from Western music.',
    aroha: 'Sa Re Ga Ma Pa Dha Ni Sa',
    avaroha: 'Sa Ni Dha Pa Ma Ga Re Sa',
    arohaKeys: 'e r t y u i o p',
    avarohaKeys: 'p o i u y t r e',
    pakad: 'Ga Ma Dha Pa, Ma Ga Re Sa',
    pakadKeys: 't y i u, y t r e',
    vadi: 'Dha',
    samvadi: 'Ga',
    famousSongs: [
      { title: 'Albela Sajan Aayo Re', artist: 'Classical Thumri' },
      { title: 'Rasiya Re', artist: 'Classical' },
    ],
    practiceNotes: 'Since Bilawal uses all natural notes, it is the easiest raga to learn if you have any Western music background. Focus on the Dha note (key "i") as the vadi. The descending phrase Dha-Pa-Ma-Ga is characteristic.',
    keywords: ['raga bilawal', 'bilawal harmonium', 'C major raga', 'morning raga harmonium', 'beginner Indian classical'],
  },
  {
    slug: 'durga',
    name: 'Raga Durga',
    time: 'Evening (6–9 PM)',
    season: 'All seasons',
    mood: 'Uplifting, powerful, devotional',
    difficulty: 'Beginner',
    description: 'Durga is a pentatonic evening raga named after the goddess Durga. It uses Sa, Re, Ma, Pa, and Dha — skipping Ga and Ni. This gives it a bright, energetic, and powerful character. It is widely used in devotional music and film songs.',
    aroha: 'Sa Re Ma Pa Dha Sa',
    avaroha: 'Sa Dha Pa Ma Re Sa',
    arohaKeys: 'e r y u i p',
    avarohaKeys: 'p i u y r e',
    pakad: 'Ma Pa Dha Pa, Re Ma Re Sa',
    pakadKeys: 'y u i u, r y r e',
    vadi: 'Re',
    samvadi: 'Pa',
    famousSongs: [
      { title: 'Jai Durge Durgati Parihaarini', artist: 'Devotional' },
      { title: 'Durga Stuti', artist: 'Classical' },
    ],
    practiceNotes: 'The jump from Re directly to Ma (skipping Ga) is the defining feature of Durga. Practice this interval carefully. The Re note (key "r") is the vadi — emphasize it in your playing.',
    keywords: ['raga durga', 'durga harmonium', 'pentatonic evening raga', 'devotional raga', 'goddess durga raga'],
  },
  {
    slug: 'desh',
    name: 'Raga Desh',
    time: 'Late Evening (9 PM–12 AM)',
    season: 'Monsoon (Varsha)',
    mood: 'Romantic, playful, monsoon',
    difficulty: 'Intermediate',
    description: 'Desh is a popular raga associated with the monsoon season. It has a romantic, playful character and is widely used in thumri, ghazal, and light classical music. Ga and Dha appear as passing notes (kan swar) — they are used lightly, not held.',
    aroha: 'Sa Re Ma Pa Ni Sa',
    avaroha: 'Sa Ni Dha Pa Ma Ga Re Sa',
    arohaKeys: 'e r y u o p',
    avarohaKeys: 'p o i u y t r e',
    pakad: 'Re Ma Pa Ni Sa, Ni Dha Pa',
    pakadKeys: 'r y u o p, o i u',
    vadi: 'Re',
    samvadi: 'Pa',
    famousSongs: [
      { title: 'Vande Mataram', artist: 'Bankim Chandra Chattopadhyay' },
      { title: 'Saawan Ka Mahina', artist: 'Milan (1967)' },
      { title: 'Rimjhim Gire Sawan', artist: 'Manzil (1979)' },
    ],
    practiceNotes: 'In the ascending scale, Ga and Dha are omitted. In the descending scale, they appear as passing notes. Practice the ascending scale without Ga and Dha first, then add them lightly in the descent.',
    keywords: ['raga desh', 'desh harmonium', 'monsoon raga', 'vande mataram raga', 'romantic raga harmonium'],
  },
  {
    slug: 'bageshri',
    name: 'Raga Bageshri',
    time: 'Late Night (12–3 AM)',
    season: 'All seasons',
    mood: 'Deep longing, emotional, melancholic',
    difficulty: 'Intermediate',
    description: 'Bageshri is a deeply emotional raga associated with longing and separation (viraha). It is a favorite for thumri and ghazal singers. The combination of flat Ga and flat Ni creates a haunting, melancholic quality that is deeply moving.',
    aroha: 'Sa Ga♭ Ma Dha Ni♭ Sa',
    avaroha: 'Sa Ni♭ Dha Ma Ga♭ Re Sa',
    arohaKeys: 'e 4 y i 9 p',
    avarohaKeys: 'p 9 i y 4 r e',
    pakad: 'Ma Ga♭ Re Sa, Ni♭ Dha Ma',
    pakadKeys: 'y 4 r e, 9 i y',
    vadi: 'Ma',
    samvadi: 'Sa',
    famousSongs: [
      { title: 'Kaise Kategi Zindagi', artist: 'Classical Thumri' },
      { title: 'Baaje Re Mohan Bansuri', artist: 'Classical' },
      { title: 'Piya Bina', artist: 'Classical Thumri' },
    ],
    practiceNotes: 'Bageshri requires slow, deliberate playing. Each note should feel intentional and emotional. The flat Ga (key "4") and flat Ni (key "9") together create the characteristic melancholic mood. Re appears only in the descent.',
    keywords: ['raga bageshri', 'bageshri harmonium', 'late night raga', 'emotional raga', 'thumri raga harmonium'],
  },
];

export function getRaga(slug: string): RagaData | undefined {
  return ragas.find(r => r.slug === slug);
}
