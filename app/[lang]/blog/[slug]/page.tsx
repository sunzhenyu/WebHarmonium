import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPost } from '@/lib/blog';
import BestRagasPost from '@/components/blog/BestRagasPost';
import BhajansPost from '@/components/blog/BhajansPost';
import BuyingGuidePost from '@/components/blog/BuyingGuidePost';
import HarmoniumVsKeyboardPost from '@/components/blog/HarmoniumVsKeyboardPost';
import SargamPost from '@/components/blog/SargamPost';
import HarmoniumInstrumentGuidePost from '@/components/blog/HarmoniumInstrumentGuidePost';
import ReedOrganVsIndianPost from '@/components/blog/ReedOrganVsIndianPost';
import PedalOrganPost from '@/components/blog/PedalOrganPost';

export async function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title.en} | Web Harmonium`,
    description: post.description.en,
    keywords: post.keywords,
    openGraph: {
      title: post.title.en,
      description: post.description.en,
      url: `https://web-harmonium.net/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title.en,
      description: post.description.en,
      creator: '@DanDan344479',
    },
  };
}

const postComponents: Record<string, React.ComponentType> = {
  'best-ragas-for-beginners': BestRagasPost,
  'how-to-play-bhajans-on-harmonium': BhajansPost,
  'best-harmonium-for-beginners': BuyingGuidePost,
  'harmonium-vs-keyboard': HarmoniumVsKeyboardPost,
  'how-to-practice-sargam': SargamPost,
  'harmonium-musical-instrument-guide': HarmoniumInstrumentGuidePost,
  'reed-organ-vs-indian-harmonium': ReedOrganVsIndianPost,
  'harmonium-pedal-organ-history': PedalOrganPost,
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const PostContent = postComponents[slug];
  if (!PostContent) notFound();

  const otherPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-zinc-900 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-6">
          <Link href="/blog" className="text-orange-400 hover:underline text-sm">← Back to Blog</Link>
        </div>

        <article className="bg-zinc-800 rounded-xl border border-zinc-700 p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm text-zinc-400">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span className="text-zinc-600">·</span>
            <span className="text-sm text-zinc-400">{post.readTime} min read</span>
          </div>
          <PostContent />
        </article>

        <div className="bg-zinc-900 text-white rounded-xl p-6 mb-8 text-center">
          <h3 className="text-xl font-bold mb-2">Practice What You Learn</h3>
          <p className="mb-4 text-blue-100">Open the free online harmonium and try it right now</p>
          <Link href="/harmonium" className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
            Open Harmonium →
          </Link>
        </div>

        {otherPosts.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">More Articles</h3>
            <div className="grid gap-4">
              {otherPosts.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`} title={p.title.en}>
                  <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="text-sm text-gray-400 mb-1">{p.readTime} min read</div>
                    <div className="font-semibold text-gray-900 hover:text-orange-600">{p.title.en}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
