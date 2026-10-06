import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  MessageSquare,
  Zap,
  BookOpen,
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { BLOG_POSTS, SITE_CONFIG } from '../data/config';

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Schema.org Article Structured Data
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
    <div className="py-12 bg-slate-950 text-white min-h-screen">
      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        canonicalUrl={`/blog/${post.slug}/`}
        ogType="article"
        schema={articleSchema}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbsList} />

        {/* Article Header */}
        <header className="mb-10 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-950/70 text-blue-400 border border-blue-800/40">
              {post.category}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-xs text-slate-400 mt-4">
            <span className="flex items-center gap-1.5 font-semibold text-slate-300">
              <User className="w-3.5 h-3.5 text-blue-400" />
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
          className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-6 text-sm sm:text-base mb-14 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-white [&_h3]:mt-6 [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2 [&_li]:text-slate-300 [&_strong]:text-white [&_code]:bg-slate-900 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-blue-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Internal Commercial Link Box */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 border border-blue-900/60 mb-14 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-white mb-1">
              Ready to Stream with Televo IPTV?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md">
              Get active credentials in 5-15 minutes with our contract-free UK subscription plans.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              to="/subscription"
              className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all text-center"
            >
              View IPTV Plans
            </Link>
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl font-bold text-sm text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 hover:bg-emerald-900/40 transition-all text-center flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Help
            </a>
          </div>
        </div>

        {/* Related Articles */}
        <div className="pt-8 border-t border-slate-800">
          <h2 className="text-xl font-bold text-white mb-6">Related Guides &amp; Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedPosts.map((r) => (
              <Link
                key={r.slug}
                to={`/blog/${r.slug}`}
                className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 hover:bg-slate-850 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] font-semibold text-blue-400 block mb-1.5">
                    {r.category}
                  </span>
                  <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                    {r.title}
                  </h3>
                </div>
                <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400 pt-3 border-t border-slate-800/80">
                  <span>{r.readTime}</span>
                  <span className="text-blue-400 font-bold group-hover:translate-x-1 transition-transform">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
