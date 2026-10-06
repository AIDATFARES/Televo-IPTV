'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  HelpCircle,
  Search,
  MessageSquare,
  ChevronDown,
} from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';
import { FAQ_DATA, SITE_CONFIG } from '../../data/config';

export default function FAQPage() {
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

  const breadcrumbsList = [{ name: 'Frequently Asked Questions', path: '/faq' }];

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
    <div className="pt-4 pb-12 sm:pt-6 bg-white text-[#2b3340] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbsList} />

        {/* Hero Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0A2E66] text-xs font-semibold mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            UK Help &amp; Support Resources
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0A2E66] tracking-tight">
            Frequently Asked Questions
          </h1>
          <div className="uk-underline"></div>
          <p className="text-slate-600 mt-3 text-base">
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
            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
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
                  ? 'bg-[#0A2E66] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="space-y-8 mb-16">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-slate-600 text-sm">
                No matching questions found for "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="mt-3 text-xs font-bold text-blue-600 hover:underline"
              >
                Reset search filters
              </button>
            </div>
          ) : (
            filteredCategories.map((group, groupIndex) => (
              <div key={group.category} className="space-y-3">
                <h2 className="font-bold text-blue-600 tracking-wide uppercase text-xs mb-2">
                  {group.category}
                </h2>
                {group.items.map((item, itemIndex) => {
                  const itemKey = `${groupIndex}-${itemIndex}`;
                  const isOpen = !!openItems[itemKey];

                  return (
                    <div
                      key={itemIndex}
                      className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => toggleItem(itemKey)}
                        className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0A2E66] hover:text-blue-600"
                        aria-expanded={isOpen}
                      >
                        <span>{item.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#0A2E66] transition-transform duration-200 shrink-0 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
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
        <div className="p-8 rounded-2xl bg-[#0A2E66] text-white text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Could Not Find the Answer You Were Looking For?
          </h2>
          <p className="text-sm text-blue-100 max-w-md mx-auto mb-6">
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
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-[#0A2E66] bg-white hover:bg-slate-100 transition-all"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
