import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog';
import { ragas } from '@/lib/ragas';
import { instrumentPages } from '@/lib/pseo/instruments';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://web-harmonium.net';
  const languages = ['en', 'hi'];

  // Helper function to create entries for both languages
  const createLangEntries = (path: string, priority: number, changeFrequency: 'yearly' | 'monthly' | 'weekly' = 'monthly') => {
    return languages.map(lang => ({
      url: `${baseUrl}/${lang}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    }));
  };

  // Base routes with language prefixes
  const baseRoutes: MetadataRoute.Sitemap = [
    ...createLangEntries('', 1, 'monthly'), // Homepage
    ...createLangEntries('/harmonium', 0.9, 'monthly'),
    ...createLangEntries('/tutorial', 0.8, 'weekly'),
    ...createLangEntries('/faq', 0.7, 'monthly'),
    ...createLangEntries('/blog', 0.8, 'weekly'),
    ...createLangEntries('/about', 0.5, 'monthly'),
    ...createLangEntries('/contact', 0.4, 'yearly'),
  ];

  // Blog routes with language prefixes
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.flatMap(post =>
    languages.map(lang => ({
      url: `${baseUrl}/${lang}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  // Raga routes with language prefixes
  const ragaRoutes: MetadataRoute.Sitemap = [
    ...createLangEntries('/raga', 0.7, 'monthly'),
    ...ragas.flatMap(raga =>
      languages.map(lang => ({
        url: `${baseUrl}/${lang}/raga/${raga.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }))
    ),
  ];

  // Instrument pages (no language prefix - these are English only)
  const instrumentRoutes: MetadataRoute.Sitemap = instrumentPages.map(page => ({
    url: `${baseUrl}/instrument/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Privacy page (no language prefix)
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
