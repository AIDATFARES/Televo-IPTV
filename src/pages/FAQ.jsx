import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HelpCircle,
  Search,
  MessageSquare,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { FAQ_DATA, SITE_CONFIG } from '../data/config';

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openItems, setOpenItems] = useState({ '0-0': true });

  const categories = ['All', ...FAQ_DATA.map((c) => c.category)];

  const toggleItem = (key) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Flattened for FAQPage Schema
  const allFaqItems = FAQ_DATA.flatMap((cat) => cat.items);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const breadcrumbsList = [{ name: 'Frequently Asked Questions', path: '/faq' }];

  // Filter items based on activeCategory and searchQuery
  const filteredCategories = FAQ_DATA.map((cat) => {
    if (activeCategory !== 'All' && cat.category !== activeCategory) {
      return { ...cat, items: [] };
    }

    if (!searchQuery.trim()) {
      return cat;
    }

    const q = searchQuery.toLowerCase();
    const matched = cat.items.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q)
    );
    return { ...cat, items: matched };
  }).filter((cat) => cat.items.length > 0);

  return (
    <div className="py-12 bg-slate-950 text-white min-h-screen">
      <SEO
        title="Televo IPTV FAQ | UK IPTV Questions, Setup &amp; Support"
        description="Got questions about Televo IPTV? Read our comprehensive FAQ regarding subscriptions in GBP, compatible devices, buffering fixes, and UK WhatsApp customer support."
        canonicalUrl="/faq/"
        schema={faqSchema}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbsList} />

        {/* Hero Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/40 text-blue-300 text-xs font-semibold mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
            UK Help &amp; Support Resources
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-300 mt-3 text-base">
            Find answers to common questions about Televo IPTV subscriptions, device compatibility, setup instructions, and UK customer assistance.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. Fire Stick, refund, M3U, buffering)..."
            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
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

        {/* Accordions */}
        <div className="space-y-8 mb-16">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12 bg-slate-900/60 rounded-2xl border border-slate-800">
              <p className="text-slate-400 text-sm">
                No matching questions found for "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="mt-3 text-xs font-bold text-blue-400 hover:underline"
              >
                Reset search filters
              </button>
            </div>
          ) : (
            filteredCategories.map((group, groupIndex) => (
              <div key={group.category} className="space-y-3">
                <h2 className="text-lg font-bold text-blue-400 tracking-wide uppercase text-xs mb-2">
                  {group.category}
                </h2>
                {group.items.map((item, itemIndex) => {
                  const itemKey = `${groupIndex}-${itemIndex}`;
                  const isOpen = !!openItems[itemKey];

                  return (
                    <div
                      key={itemIndex}
                      className="rounded-xl border border-slate-800 bg-slate-900/80 overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => toggleItem(itemKey)}
                        className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-200 hover:text-white"
                        aria-expanded={isOpen}
                      >
                        <span>{item.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-blue-400 transition-transform duration-200 shrink-0 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))
          )}
        </div>

        {/* Support Callout Box */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-950/70 via-slate-900 to-blue-950/70 border border-blue-900/50 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Could Not Find the Answer You Were Looking For?
          </h2>
          <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
            Our UK support team is available 7 days a week on WhatsApp to assist with questions or customized inquiries.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/30 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp ({SITE_CONFIG.whatsappNumber})
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white transition-all"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
