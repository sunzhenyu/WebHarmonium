import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Harmonium Blog - Tutorials, Tips & Guides | Web Harmonium',
  description: 'Expert harmonium guides: raga tutorials, bhajan notes, buying advice, and practice tips. Learn Indian classical music and devotional songs step by step.',
  alternates: { canonical: '/blog' },
  keywords: ['harmonium blog', 'harmonium tutorials', 'learn harmonium', 'harmonium tips', 'raga guide'],
};

const categoryColors: Record<string, string> = {
  'Learning': 'bg-orange-500 text-white',
  'Songs': 'bg-green-500 text-white',
  'Buying Guide': 'bg-orange-500 text-white',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-zinc-900 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <PageHeader titleKey="blogPage" />

        <div className="grid gap-6">
          {blogPosts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} title={post.title.en}>
              <article className="bg-zinc-800 rounded-xl hover:shadow-lg transition-shadow p-6 border border-zinc-700">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-zinc-600 text-white'}`}>
                    {post.category}
                  </span>
                  <span className="text-sm text-zinc-400">{post.readTime} min read</span>
                  <span className="text-sm text-zinc-400">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-2 hover:text-orange-400 transition-colors">{post.title.en}</h2>
                <p className="text-zinc-300">{post.description.en}</p>
                <div className="mt-4 text-orange-400 font-medium text-sm">Read more →</div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
