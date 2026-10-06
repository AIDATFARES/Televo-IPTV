import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Clock,
  Calendar,
  ArrowRight,
  MessageSquare,
  Sparkles,
  Search,
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { BLOG_POSTS, SITE_CONFIG } from '../data/config';

export default function Blog() {
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
    <div className="py-12 bg-slate-950 text-white min-h-screen">
      <SEO
        title="Televo IPTV Blog | UK IPTV Guides, Tips &amp; Tutorials"
        description="Explore expert IPTV tutorials, Fire Stick guides, Smart TV setup walkthroughs, and buffering solutions from Televo IPTV in the UK."
        canonicalUrl="/blog/"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbsList} />

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/40 text-blue-300 text-xs font-semibold mb-4">
            <BookOpen className="w-3.5 h-3.5 text-blue-400" />
            UK Streaming Guides &amp; Tutorials
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Televo IPTV Blog &amp; Resource Hub
          </h1>
          <p className="text-slate-300 mt-4 text-base sm:text-lg leading-relaxed">
            Helpful tutorials, device walkthroughs, player comparisons, and buffering fixes to help you get the most out of your Televo IPTV subscription.
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
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
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
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Featured Article Banner (Only on 'All' and no search query) */}
        {activeCategory === 'All' && !searchQuery.trim() && featuredPost && (
          <div className="mb-14 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-950/80 via-slate-900 to-slate-950 border border-blue-900/60 shadow-2xl relative overflow-hidden group">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 px-3 py-1 rounded-full">
                  Featured UK Guide
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {featuredPost.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white group-hover:text-blue-400 transition-colors">
                <Link to={`/blog/${featuredPost.slug}`}>
                  {featuredPost.title}
                </Link>
              </h2>

              <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="mt-6">
                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all"
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
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="px-2.5 py-0.5 rounded-md bg-blue-950/70 border border-blue-800/40 text-blue-400 font-semibold">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-xs font-bold text-blue-400 group-hover:text-blue-300 inline-flex items-center gap-1"
                >
                  Read Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* WhatsApp Help CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-blue-950/60 border border-blue-900/50 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            Have Questions About UK Setup or Player Configuration?
          </h2>
          <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
            Our UK support specialists are online 7 days a week on WhatsApp to assist with troubleshooting and setup.
          </p>
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/30 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            Chat with Televo Support on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
