import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  MessageSquare,
  Zap,
} from 'lucide-react';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { BLOG_POSTS, SITE_CONFIG } from '../../../data/config';

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `/blog/${post.slug}/`,
    },
    openGraph: {
      type: 'article',
      title: post.metaTitle,
      description: post.metaDescription,
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.brandName,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.domain}/favicon.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.domain}/blog/${post.slug}/`,
    },
  };

  const breadcrumbsList = [
    { name: 'Blog', path: '/blog' },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="pt-4 pb-12 sm:pt-6 bg-white text-[#2b3340] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbsList} />

        {/* Article Header */}
        <header className="mb-10 pb-8 border-b border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-blue-50 text-[#0A2E66]">
              {post.category}
            </span>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2E66] tracking-tight leading-tight">
            {post.title}
          </h1>
          <div className="uk-underline !mx-0"></div>

          <div className="flex items-center gap-4 text-xs text-slate-500 mt-4">
            <span className="flex items-center gap-1.5 font-semibold text-slate-700">
              <User className="w-3.5 h-3.5 text-blue-600" />
              Televo IPTV UK Editorial Team
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
          </div>
        </header>

        {/* Article Body Content */}
        <div
          className="prose max-w-none text-slate-700 leading-relaxed text-sm sm:text-base space-y-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Post Bottom CTA Card */}
        <div className="mt-14 p-8 rounded-2xl bg-[#0A2E66] text-white">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Ready to Try Televo IPTV in the UK?
          </h3>
          <p className="text-xs sm:text-sm text-blue-100 max-w-lg mb-6 leading-relaxed">
            Experience reliable 4K streaming with zero contracts, instant digital setup, and our 7-day money-back guarantee.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/subscription"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-[#0A2E66] bg-white hover:bg-slate-100 transition-all"
            >
              <Zap className="w-4 h-4" />
              View IPTV Plans (GBP)
            </Link>
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Help
            </a>
          </div>
        </div>

        {/* Related Guides */}
        <div className="mt-14 pt-10 border-t border-slate-200">
          <h3 className="text-xl font-bold text-[#0A2E66] mb-6">
            Related UK Streaming Tutorials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:bg-white transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold text-blue-600 block mb-1">
                    {rel.category}
                  </span>
                  <h4 className="text-sm font-bold text-[#0A2E66] group-hover:text-blue-600 line-clamp-2">
                    {rel.title}
                  </h4>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-blue-600 font-bold">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
