'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Clock,
  Calendar,
  ArrowRight,
  MessageSquare,
  Search,
} from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';
import { BLOG_POSTS, SITE_CONFIG } from '../../data/config';

export default function BlogHubPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Setup Guides', 'Smart TV Guides', 'Troubleshooting', 'App Reviews'];

  const breadcrumbsList = [{ name: 'Blog & UK Guides', path: '/blog' }];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS[0];

  return (
    <div className="pt-4 pb-12 sm:pt-6 bg-white text-[#2b3340] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbsList} />

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0A2E66] text-xs font-semibold mb-4">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            UK Streaming Guides &amp; Tutorials
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0A2E66] tracking-tight">
            Televo IPTV UK Blog &amp; Streaming Guides
          </h1>
          <div className="uk-underline"></div>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Expert tutorials, player comparisons, buffering solutions, and setup tips to elevate your{' '}
            <Link href="/subscription" className="text-[#0854c4] font-semibold underline underline-offset-2 hover:text-[#0A2E66]">
              Televo IPTV streaming experience
            </Link>{' '}
            across all your screens, with step-by-step guidance in our{' '}
            <Link href="/guide-installation" className="text-[#0854c4] font-semibold underline underline-offset-2 hover:text-[#0A2E66]">
              installation centre
            </Link>
            .
          </p>
        </div>

        {/* Category & Search Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#0A2E66] text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Featured Article Banner */}
        {activeCategory === 'All' && !searchQuery.trim() && featuredPost && (
          <div className="mb-14 p-6 sm:p-10 rounded-3xl bg-[#0A2E66] text-white shadow-xl relative overflow-hidden group">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black uppercase tracking-wider text-white bg-[#C8102E] px-3 py-1 rounded-full">
                  Featured UK Guide
                </span>
                <span className="text-xs text-blue-200 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {featuredPost.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white group-hover:text-blue-200 transition-colors">
                <Link href={`/blog/${featuredPost.slug}`}>
                  {featuredPost.title}
                </Link>
              </h2>

              <p className="text-sm text-blue-100 mt-3 leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="mt-6">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-[#0A2E66] bg-white hover:bg-slate-100 shadow-md transition-all"
                >
                  Read Full Tutorial <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-500 hover:shadow-md transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-[#0A2E66] font-bold">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0A2E66] group-hover:text-blue-600 transition-colors leading-snug">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
                >
                  Read Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* WhatsApp Help CTA */}
        <div className="p-8 rounded-2xl bg-[#0A2E66] text-white text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            Have Questions About Televo IPTV Setup or Compatibility?
          </h2>
          <p className="text-sm text-blue-100 max-w-md mx-auto mb-6">
            Our UK support specialists are available 7 days a week on WhatsApp to assist with device pairing, app recommendations, and instant troubleshooting for your{' '}
            <Link href="/subscription" className="text-white font-semibold underline hover:text-cyan-200">
              IPTV subscription
            </Link>
            .
          </p>
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            Chat with Televo Support on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
