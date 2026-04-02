import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog';
import { ragas } from '@/lib/ragas';
import { instrumentPages } from '@/lib/pseo/instruments';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://web-harmonium.net';

  // Helper function to create entries for both English (no prefix) and Hindi (/hi prefix)
  const createLangEntries = (path: string, priority: number, changeFrequency: 'yearly' | 'monthly' | 'weekly' = 'monthly') => {
    return [
      {
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
      },
      {
        url: `${baseUrl}/hi${path}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
      },
    ];
  };

  // Base routes with language versions
  const baseRoutes: MetadataRoute.Sitemap = [
    ...createLangEntries('', 1, 'monthly'), // Homepage
    ...createLangEntries('/harmonium', 0.9, 'monthly'),
    ...createLangEntries('/tutorial', 0.8, 'weekly'),
    ...createLangEntries('/faq', 0.7, 'monthly'),
    ...createLangEntries('/blog', 0.8, 'weekly'),
    ...createLangEntries('/about', 0.5, 'monthly'),
    ...createLangEntries('/contact', 0.4, 'yearly'),
  ];

  // Blog routes with language versions
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.flatMap(post => [
    {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/hi/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]);

  // Raga routes with language versions
  const ragaRoutes: MetadataRoute.Sitemap = [
    ...createLangEntries('/raga', 0.7, 'monthly'),
    ...ragas.flatMap(raga => [
      {
        url: `${baseUrl}/raga/${raga.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      },
      {
        url: `${baseUrl}/hi/raga/${raga.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      },
    ]),
  ];

  // Instrument pages (English only, no language prefix)
  const instrumentRoutes: MetadataRoute.Sitemap = instrumentPages.map(page => ({
    url: `${baseUrl}/instrument/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Privacy page (English only, no language prefix)
  const privacyRoute: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  return [...baseRoutes, ...blogRoutes, ...ragaRoutes, ...instrumentRoutes, ...privacyRoute];
}
