import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog';
import { ragas } from '@/lib/ragas';
import { instrumentPages } from '@/lib/pseo/instruments';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://web-harmonium.net';
  const languages = ['en', 'hi'];

  const createMultiLangEntry = (path: string, priority: number, changeFrequency: 'yearly' | 'monthly' | 'weekly' = 'monthly') => {
    return languages.map(lang => ({
      url: `${baseUrl}${path}?lang=${lang}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: {
        languages: {
          en: `${baseUrl}${path}?lang=en`,
          hi: `${baseUrl}${path}?lang=hi`,
        }
      }
    }));
  };

  const baseRoutes: MetadataRoute.Sitemap = [
    ...createMultiLangEntry('', 1, 'monthly'),
    ...createMultiLangEntry('/harmonium', 0.9, 'monthly'),
    ...createMultiLangEntry('/tutorial', 0.8, 'weekly'),
    ...createMultiLangEntry('/faq', 0.7, 'monthly'),
    ...createMultiLangEntry('/blog', 0.8, 'weekly'),
    ...createMultiLangEntry('/about', 0.5, 'monthly'),
    ...createMultiLangEntry('/contact', 0.4, 'yearly'),
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.flatMap(post =>
    createMultiLangEntry(`/blog/${post.slug}`, 0.6, 'monthly')
  );

  const ragaRoutes: MetadataRoute.Sitemap = [
    ...createMultiLangEntry('/raga', 0.7, 'monthly'),
    ...ragas.flatMap(raga => createMultiLangEntry(`/raga/${raga.slug}`, 0.6, 'monthly')),
  ];

  const instrumentRoutes: MetadataRoute.Sitemap = instrumentPages.flatMap(page =>
    createMultiLangEntry(`/instrument/${page.slug}`, 0.8, 'monthly')
  );

  return [...baseRoutes, ...blogRoutes, ...ragaRoutes, ...instrumentRoutes];
}
