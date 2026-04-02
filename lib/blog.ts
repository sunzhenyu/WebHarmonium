export interface BlogPost {
  slug: string;
  title: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
  date: string;
  keywords: string[];
  readTime: number; // minutes
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'best-ragas-for-beginners',
    title: {
      en: 'Best Ragas for Beginners: A Complete Guide to Starting Indian Classical Music',
      hi: 'शुरुआती लोगों के लिए सर्वश्रेष्ठ राग: भारतीय शास्त्रीय संगीत शुरू करने के लिए पूर्ण गाइड',
    },
    description: {
      en: 'Discover the 8 best ragas for beginners on harmonium. Learn the notes, mood, and practice tips for Bhupali, Yaman, Bhairav, and more.',
      hi: 'हारमोनियम पर शुरुआती लोगों के लिए 8 सर्वश्रेष्ठ रागों की खोज करें। भूपाली, यमन, भैरव और अन्य के लिए स्वर, मूड और अभ्यास युक्तियाँ सीखें।',
    },
    date: '2026-03-30',
    keywords: ['ragas for beginners', 'easy ragas harmonium', 'learn raga', 'Indian classical music beginners', 'harmonium raga practice'],
    readTime: 8,
    category: 'Learning',
  },
  {
    slug: 'how-to-play-bhajans-on-harmonium',
    title: {
      en: 'How to Play Bhajans on Harmonium: Step-by-Step Guide for Devotional Music',
      hi: 'हारमोनियम पर भजन कैसे बजाएं: भक्ति संगीत के लिए चरण-दर-चरण गाइड',
    },
    description: {
      en: 'Learn how to play popular bhajans on harmonium with keyboard notation. Includes Om Jai Jagdish, Raghupati Raghav, Vaishnav Jan To, and more.',
      hi: 'कीबोर्ड नोटेशन के साथ हारमोनियम पर लोकप्रिय भजन बजाना सीखें। ओम जय जगदीश, रघुपति राघव, वैष्णव जन तो और अधिक शामिल हैं।',
    },
    date: '2026-03-30',
    keywords: ['bhajans on harmonium', 'harmonium bhajan notes', 'devotional music harmonium', 'play bhajan keyboard', 'harmonium for worship'],
    readTime: 10,
    category: 'Songs',
  },
  {
    slug: 'best-harmonium-for-beginners',
    title: {
      en: 'Best Harmonium for Beginners in 2026: Complete Buying Guide',
      hi: '2026 में शुरुआती लोगों के लिए सर्वश्रेष्ठ हारमोनियम: पूर्ण खरीदारी गाइड',
    },
    description: {
      en: 'Looking to buy your first harmonium? Compare the top beginner harmoniums by price, quality, and features. Includes tips on what to look for.',
      hi: 'अपना पहला हारमोनियम खरीदना चाहते हैं? कीमत, गुणवत्ता और सुविधाओं के आधार पर शीर्ष शुरुआती हारमोनियम की तुलना करें। क्या देखना है इस पर सुझाव शामिल हैं।',
    },
    date: '2026-03-30',
    keywords: ['best harmonium for beginners', 'buy harmonium', 'harmonium buying guide', 'beginner harmonium', 'harmonium price'],
    readTime: 12,
    category: 'Buying Guide',
  },
  {
    slug: 'harmonium-vs-keyboard',
    title: {
      en: 'Harmonium vs Keyboard: Which Should You Learn First?',
      hi: 'हारमोनियम बनाम कीबोर्ड: आपको पहले कौन सा सीखना चाहिए?',
    },
    description: {
      en: 'Comparing harmonium and keyboard for beginners. Understand the key differences in sound, technique, and use cases to choose the right instrument.',
      hi: 'शुरुआती लोगों के लिए हारमोनियम और कीबोर्ड की तुलना। सही वाद्य यंत्र चुनने के लिए ध्वनि, तकनीक और उपयोग के मामलों में मुख्य अंतर को समझें।',
    },
    date: '2026-03-30',
    keywords: ['harmonium vs keyboard', 'harmonium or piano', 'difference harmonium keyboard', 'which instrument to learn', 'harmonium for Indian music'],
    readTime: 7,
    category: 'Learning',
  },
  {
    slug: 'how-to-practice-sargam',
    title: {
      en: 'How to Practice Sargam on Harmonium: Complete Guide for Beginners',
      hi: 'हारमोनियम पर सरगम का अभ्यास कैसे करें: शुरुआती लोगों के लिए पूर्ण गाइड',
    },
    description: {
      en: 'Master sargam (Sa Re Ga Ma Pa Dha Ni) on harmonium with exercises, scales, and practice routines. Perfect for Indian classical and devotional music.',
      hi: 'व्यायाम, स्केल और अभ्यास दिनचर्या के साथ हारमोनियम पर सरगम (सा रे ग म प ध नि) में महारत हासिल करें। भारतीय शास्त्रीय और भक्ति संगीत के लिए एकदम सही।',
    },
    date: '2026-03-30',
    keywords: ['sargam practice', 'sargam on harmonium', 'Sa Re Ga Ma harmonium', 'Indian solfege', 'sargam exercises', 'harmonium scales'],
    readTime: 9,
    category: 'Learning',
  },
  {
    slug: 'harmonium-musical-instrument-guide',
    title: {
      en: 'The Ultimate Harmonium Musical Instrument Guide for 2026',
      hi: '2026 के लिए अंतिम हारमोनियम संगीत वाद्य यंत्र गाइड',
    },
    description: {
      en: 'Discover everything you need to know about the harmonium musical instrument. Explore its mechanics, tuning, reeds, and why it is beloved worldwide.',
      hi: 'हारमोनियम संगीत वाद्य यंत्र के बारे में वह सब कुछ खोजें जो आपको जानना आवश्यक है। इसके यांत्रिकी, ट्यूनिंग, रीड्स और दुनिया भर में इसे क्यों पसंद किया जाता है, इसका अन्वेषण करें।',
    },
    date: '2026-03-31',
    keywords: ['harmonium musical instrument', 'indian harmonium', 'harmonium guide 2026', 'play harmonium'],
    readTime: 6,
    category: 'Buying Guide',
  },
  {
    slug: 'reed-organ-vs-indian-harmonium',
    title: {
      en: 'Reed Organ Harmonium vs Indian Harmonium: A Musical Journey',
      hi: 'रीड ऑर्गन हारमोनियम बनाम भारतीय हारमोनियम: एक संगीत यात्रा',
    },
    description: {
      en: 'Trace the fascinating history of how the Western reed organ harmonium transformed into the hand-pumped Indian harmonium used in classical music today.',
      hi: 'पश्चिमी रीड ऑर्गन हारमोनियम आज शास्त्रीय संगीत में उपयोग किए जाने वाले हाथ से पंप किए गए भारतीय हारमोनियम में कैसे बदल गया, इसके आकर्षक इतिहास का पता लगाएं।',
    },
    date: '2026-03-31',
    keywords: ['reed organ harmonium', 'indian harmonium', 'harmonium instrument history', 'pump organ'],
    readTime: 7,
    category: 'History',
  },
  {
    slug: 'harmonium-pedal-organ-history',
    title: {
      en: 'What is a Harmonium Pedal Organ? (History & Guide)',
      hi: 'हारमोनियम पेडल ऑर्गन क्या है? (इतिहास और गाइड)',
    },
    description: {
      en: 'Learn about the harmonium pedal organ, its foot-pumped bellows mechanism, and its role as the Western ancestor to the modern Indian harmonium.',
      hi: 'हारमोनियम पेडल ऑर्गन, इसके पैर से पंप की जाने वाली धौंकनी तंत्र और आधुनिक भारतीय हारमोनियम के पश्चिमी पूर्वज के रूप में इसकी भूमिका के बारे में जानें।',
    },
    date: '2026-03-31',
    keywords: ['harmonium pedal organ', 'harmonium history', 'western harmonium', 'parlor organ'],
    readTime: 5,
    category: 'History',
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}
