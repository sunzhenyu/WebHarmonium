export interface InstrumentPage {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  content: string;
  historyContent: string;
  buyingGuideContent: string;
  features: string[];
}

export const instrumentPages: InstrumentPage[] = [
  {
    slug: 'harmonium',
    title: 'Harmonium: Learn to Play The Soul of Indian Classical Music',
    description: 'Learn about the harmonium, its history, how to play it, and its role in Indian classical and devotional music. Play our free virtual harmonium online.',
    keywords: ['harmonium', 'play harmonium online', 'virtual harmonium', 'harmonium keyboard'],
    features: ['Keyboard based free-reed instrument', 'Hand-pumped bellows', 'Multiple drone notes (shruti)', 'Essential in Hindustani classical music'],
    content: 'The harmonium is a keyboard instrument in which the notes are produced by air driven through metal reeds by hand-operated bellows. Though originally invented in Europe, it has become an integral part of Indian music, used extensively in classical, semi-classical, and devotional music like Bhajans and Kirtans. On this site, you can experience a high-quality virtual harmonium right in your browser.',
    historyContent: 'The instrument was invented in Paris in the 1840s by Alexandre Debain. It was later brought to India by missionaries where it was quickly adapted to sit on the floor and pumped by hand instead of foot pedals.',
    buyingGuideContent: 'When looking to buy a harmonium, pay attention to the number of reed banks (usually two or three), the quality of the bellows, and whether it features a scale changer mechanism. For beginners, a simple two-reed, 3.25 octave instrument is usually sufficient.',
  },
  {
    slug: 'harmonium-instrument',
    title: 'Explore the Harmonium Instrument: Complete Guide & Virtual Player',
    description: 'Discover the harmonium instrument. Explore its mechanics, tuning, and why this hand-pumped reed organ is beloved worldwide. Try our online simulator.',
    keywords: ['harmonium instrument', 'harmonium musical instrument', 'reed organ', 'pump organ', 'indian harmonium instrument'],
    features: ['Portable and versatile', 'Rich, sustaining tone', 'Used in yoga and kirtan', 'Easy to learn for keyboard players'],
    content: 'A harmonium instrument is a free-reed keyboard instrument that produces sound when air flows past a vibrating piece of thin metal in a frame. The player pumps air with one hand while playing the keys with the other. This unique mechanism gives the harmonium instrument its characteristic drone and continuous sound, making it perfect for accompanying vocalists in various musical traditions.',
    historyContent: 'Initially popular in Western churches and homes as a smaller alternative to pipe organs, the harmonium instrument found its true home in South Asia, where local artisans modified its design for the seated position.',
    buyingGuideContent: 'Quality harmonium instruments are typically crafted from teak or pine wood. Check the tuning (A=440Hz is standard for Western accompaniment) and ensure the keys do not stick when depressed.',
  },
  {
    slug: 'reed-organ-harmonium',
    title: 'Discover the Reed Organ Harmonium: History and Online Simulator',
    description: 'The reed organ harmonium is a fascinating piece of musical history. Learn how this European invention transformed Indian music and play our digital version.',
    keywords: ['reed organ harmonium', 'pump organ', 'free reed instrument', 'harmonium history'],
    features: ['European origins (Paris, 1840s)', 'Adapted for Indian sitting posture', 'Replaced the sarangi as primary accompaniment', 'Rich acoustic resonance'],
    content: 'The term "reed organ harmonium" often refers to the western origins of the instrument. Invented by Alexandre Debain in Paris in 1840, the reed organ harmonium was brought to India by missionaries. It was soon adapted to be played while seated on the floor, with a hand-pumped bellows replacing the foot pedals. Today, the reed organ harmonium remains a vital bridge between Western mechanics and Eastern musicality.',
    historyContent: 'Before the advent of electronic keyboards, the reed organ harmonium was the primary keyboard instrument in many homes. Its mechanism relies entirely on acoustic resonance and air pressure rather than electricity.',
    buyingGuideContent: 'Vintage reed organ harmoniums can be valuable antiques. If purchasing one, inspect the leather bellows for cracks and the brass reeds for rust, as these are the most common points of failure.',
  },
  {
    slug: 'harmonium-pedal-organ',
    title: 'Harmonium Pedal Organ vs Hand-Pumped Harmonium: Which to Choose?',
    description: 'Explore the differences between the harmonium pedal organ and the Indian hand-pumped harmonium. Play our free virtual instrument online today.',
    keywords: ['harmonium pedal organ', 'foot-pumped harmonium', 'western harmonium', 'chapel organ'],
    features: ['Foot-operated bellows', 'Played sitting on a chair or bench', 'Popular in Western churches and homes', 'Precursor to the Indian harmonium'],
    content: 'The harmonium pedal organ (also known as a pump organ or parlor organ) is the Western ancestor of the Indian harmonium. While the Indian version is pumped by hand and played seated on the floor, the harmonium pedal organ features two foot pedals that supply the air, allowing the musician to use both hands on the keyboard. Though less common today, the harmonium pedal organ holds a special place in the history of keyboard instruments.',
    historyContent: 'The pedal organ reached the height of its popularity in the late 19th and early 20th centuries, manufactured in large numbers by companies like Estey and Mason & Hamlin in the United States.',
    buyingGuideContent: 'Restoring a harmonium pedal organ is a specialized task. Look for intact cabinetry and working pedal straps. Many musicians today prefer digital emulations or the portable hand-pumped Indian version for modern use.',
  },
  {
    slug: 'harmonium-musical-instrument',
    title: 'Harmonium Musical Instrument Guide: Sound, Structure & Playing',
    description: 'Everything you need to know about the harmonium musical instrument. Learn about reeds, bellows, stops, and play our virtual simulator for free.',
    keywords: ['harmonium musical instrument', 'learn harmonium', 'virtual harmonium instrument', 'harmonium parts'],
    features: ['Main and drone reeds', 'Stops to control air flow', 'Coupler mechanism for octave playing', 'Expressive volume control via bellows'],
    content: 'As a versatile piece of equipment, the harmonium musical instrument consists of several key parts: the bellows (for air supply), the reeds (for sound generation), the keyboard (for melody), and the stops/drones (for continuous background notes). Whether you are a beginner looking to learn or an expert wanting to practice, understanding your harmonium musical instrument is crucial. Try out the different features on our digital harmonium musical instrument above.',
    historyContent: 'The evolution of the harmonium musical instrument demonstrates the globalization of music. What started as European parlor entertainment became the backbone of South Asian classical and devotional music.',
    buyingGuideContent: 'When evaluating a harmonium musical instrument, listen to the sustain (how long a note rings after pumping stops). A good instrument will have airtight seals and offer a long sustain time.',
  },
  {
    slug: 'indian-harmonium',
    title: 'Play the Indian Harmonium: The Voice of Hindustani Classical Music',
    description: 'The Indian harmonium is essential for Classical, Ghazal, Qawwali, and Bhakti music. Play our authentic Indian harmonium simulator online with real samples.',
    keywords: ['indian harmonium', 'hindustani music', 'desi harmonium', 'kirtan harmonium', 'bhajan harmonium'],
    features: ['Designed for floor sitting', 'Scale changer mechanisms', 'Multiple reed banks (Bass/Male/Female)', 'Tuned for Indian vocal accompaniment'],
    content: 'The Indian harmonium is uniquely adapted for the subcontinent\'s musical styles. Unlike its Western counterpart, the Indian harmonium is played with one hand pumping the bellows at the back, while the other hand plays the melody. It has become the backbone of Ghazal, Qawwali, Kirtan, and Hindustani classical music. Our online simulator captures the authentic tone of a real Indian harmonium, complete with drone notes and transpose capabilities.',
    historyContent: 'Dwarkanath Ghose of Calcutta was instrumental in modifying the Western design in 1875, creating the Indian harmonium by adding drone stops, scale changers, and making it suitable for floor play.',
    buyingGuideContent: 'A traditional Indian harmonium often comes in folding (safari) or non-folding styles. Folding models are highly recommended for traveling musicians, while non-folding models often offer slightly better resonance.',
  },
  {
    slug: 'the-harmonium-in-my-memory',
    title: 'The Harmonium in My Memory: Nostalgia and Musical Heritage',
    description: 'Reflecting on the harmonium in my memory. A journey through nostalgia, childhood singing, and the emotional connection to this classic instrument.',
    keywords: ['the harmonium in my memory', 'harmonium nostalgia', 'childhood harmonium memories', 'classic harmonium stories'],
    features: ['A deep connection to family gatherings', 'Memories of old school music classes', 'The distinct smell of vintage wood and bellows', 'Songs passed down through generations'],
    content: 'When I think of the harmonium in my memory, I am transported back to simpler times. It is not just an instrument, but a vessel of nostalgia. Whether it was the dusty pump organ in a grandparent\'s parlor or the small folding Indian harmonium used in school music classes and community kirtans, the harmonium in my memory always represents coming together to sing. The distinct droning sound and the rhythmic pumping of the bellows are etched into the minds of many who grew up around it.',
    historyContent: 'For many families, the harmonium was a prized possession passed down through generations. In the era before electronic keyboards, it was the focal point of musical education and evening gatherings, holding the collective voices of the past.',
    buyingGuideContent: 'If you are looking to recreate the sound of the harmonium in your memory, consider looking into restored vintage models or high-quality modern acoustic replicas. Alternatively, our virtual harmonium simulator offers a quick way to reconnect with that nostalgic tone.',
  }
];

export function getInstrumentPage(slug: string): InstrumentPage | undefined {
  return instrumentPages.find(p => p.slug === slug);
}
