export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  keywords: string[];
  readTime: number; // minutes
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'best-ragas-for-beginners',
    title: 'Best Ragas for Beginners: A Complete Guide to Starting Indian Classical Music',
    description: 'Discover the 8 best ragas for beginners on harmonium. Learn the notes, mood, and practice tips for Bhupali, Yaman, Bhairav, and more.',
    date: '2026-03-30',
    keywords: ['ragas for beginners', 'easy ragas harmonium', 'learn raga', 'Indian classical music beginners', 'harmonium raga practice'],
    readTime: 8,
    category: 'Learning',
  },
  {
    slug: 'how-to-play-bhajans-on-harmonium',
    title: 'How to Play Bhajans on Harmonium: Step-by-Step Guide for Devotional Music',
    description: 'Learn how to play popular bhajans on harmonium with keyboard notation. Includes Om Jai Jagdish, Raghupati Raghav, Vaishnav Jan To, and more.',
    date: '2026-03-30',
    keywords: ['bhajans on harmonium', 'harmonium bhajan notes', 'devotional music harmonium', 'play bhajan keyboard', 'harmonium for worship'],
    readTime: 10,
    category: 'Songs',
  },
  {
    slug: 'best-harmonium-for-beginners',
    title: 'Best Harmonium for Beginners in 2026: Complete Buying Guide',
    description: 'Looking to buy your first harmonium? Compare the top beginner harmoniums by price, quality, and features. Includes tips on what to look for.',
    date: '2026-03-30',
    keywords: ['best harmonium for beginners', 'buy harmonium', 'harmonium buying guide', 'beginner harmonium', 'harmonium price'],
    readTime: 12,
    category: 'Buying Guide',
  },
  {
    slug: 'harmonium-vs-keyboard',
    title: 'Harmonium vs Keyboard: Which Should You Learn First?',
    description: 'Comparing harmonium and keyboard for beginners. Understand the key differences in sound, technique, and use cases to choose the right instrument.',
    date: '2026-03-30',
    keywords: ['harmonium vs keyboard', 'harmonium or piano', 'difference harmonium keyboard', 'which instrument to learn', 'harmonium for Indian music'],
    readTime: 7,
    category: 'Learning',
  },
  {
    slug: 'how-to-practice-sargam',
    title: 'How to Practice Sargam on Harmonium: Complete Guide for Beginners',
    description: 'Master sargam (Sa Re Ga Ma Pa Dha Ni) on harmonium with exercises, scales, and practice routines. Perfect for Indian classical and devotional music.',
    date: '2026-03-30',
    keywords: ['sargam practice', 'sargam on harmonium', 'Sa Re Ga Ma harmonium', 'Indian solfege', 'sargam exercises', 'harmonium scales'],
    readTime: 9,
    category: 'Learning',
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}
