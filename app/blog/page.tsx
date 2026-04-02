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
  'Learning': 'bg-blue-100 text-blue-700',
  'Songs': 'bg-green-100 text-green-700',
  'Buying Guide': 'bg-orange-100 text-orange-700',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        <PageHeader titleKey="blogPage" />

        <div className="grid gap-6">
          {blogPosts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} title={post.title.en}>
              <article className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-600'}`}>
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-400">{post.readTime} min read</span>
                  <span className="text-sm text-gray-400">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">{post.title.en}</h2>
                <p className="text-gray-600">{post.description.en}</p>
                <div className="mt-4 text-blue-600 font-medium text-sm">Read more →</div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
