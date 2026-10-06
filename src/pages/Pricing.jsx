import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  MessageSquare,
  HelpCircle,
  Clock,
  Tv,
  ArrowRight,
  Flame,
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import {
  SITE_CONFIG,
  PRICING_PLANS,
  MULTI_SCREEN_PLANS,
  FAQ_DATA,
} from '../data/config';

export default function Pricing() {
  const [tab, setTab] = useState('single');

  // JSON-LD Product & Offer Schema in GBP
  const pricingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Televo IPTV Subscription UK',
    description: 'High-definition Televo IPTV subscription for UK customers. Compatible with Smart TV, Fire Stick, Android, and iOS.',
    brand: {
      '@type': 'Brand',
      name: SITE_CONFIG.brandName,
    },
    url: `${SITE_CONFIG.domain}/subscription/`,
    offers: [
      {
        '@type': 'Offer',
        name: 'Televo IPTV 1 Month Plan',
        price: '11.99',
        priceCurrency: 'GBP',
        availability: 'https://schema.org/InStock',
        url: `${SITE_CONFIG.domain}/subscription/`,
      },
      {
        '@type': 'Offer',
        name: 'Televo IPTV 12 Months Plan',
        price: '59.99',
        priceCurrency: 'GBP',
        availability: 'https://schema.org/InStock',
        url: `${SITE_CONFIG.domain}/subscription/`,
      },
      {
        '@type': 'Offer',
        name: 'Televo IPTV 12 Months Family Plan (2 Screens)',
        price: '89.99',
        priceCurrency: 'GBP',
        availability: 'https://schema.org/InStock',
        url: `${SITE_CONFIG.domain}/subscription/`,
      },
    ],
  };

  const breadcrumbsList = [
    { name: 'Subscription & Pricing', path: '/subscription' },
  ];

  return (
    <div className="py-12 bg-slate-950 text-white min-h-screen">
      <SEO
        title="Televo IPTV Pricing | UK IPTV Plans &amp; Subscriptions in GBP"
        description="Explore Televo IPTV subscription plans in GBP (£). 1, 3, 6, and 12-month plans, multi-screen family packages, instant activation, and 7-day money-back guarantee."
        canonicalUrl="/subscription/"
        schema={pricingSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbsList} />

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/40 text-blue-300 text-xs font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            All Plans in British Pounds (£) • No Automatic Contracts
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Televo IPTV Subscription Plans
          </h1>
          <p className="text-slate-300 mt-4 text-base sm:text-lg leading-relaxed">
            Choose the subscription that matches your viewing habits. All plans include full 4K Ultra HD streams, regular content updates, Electronic Programme Guide (EPG), and dedicated UK customer assistance.
          </p>

          {/* Toggle Switch */}
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 mt-8 shadow-inner">
            <button
              onClick={() => setTab('single')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                tab === 'single'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Single Device (1 Screen)
            </button>
            <button
              onClick={() => setTab('multi')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                tab === 'multi'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Multi-Screen Family Packages
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {(tab === 'single' ? PRICING_PLANS : MULTI_SCREEN_PLANS).map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl flex flex-col p-6 sm:p-7 transition-all ${
                plan.isPopular
                  ? 'bg-gradient-to-b from-blue-900/40 via-slate-900 to-slate-950 border-2 border-blue-500 shadow-2xl shadow-blue-900/40 scale-[1.02]'
                  : 'bg-slate-900/80 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {plan.badge && (
                <div
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                    plan.isPopular
                      ? 'bg-red-600 text-white shadow-md'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              <div className="mb-4">
                <h2 className="text-xl font-extrabold text-white">{plan.name}</h2>
                <p className="text-xs text-slate-400 mt-1 min-h-[36px]">{plan.description}</p>
              </div>

              {/* Price Row */}
              <div className="py-4 border-y border-slate-800/80 my-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-white">
                    £{plan.price.toFixed(2)}
                  </span>
                  {plan.originalPrice && (
                    <span className="text-sm text-slate-500 line-through">
                      £{plan.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                <div className="text-xs font-semibold text-blue-400 mt-1">
                  {plan.monthlyEquivalent}
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 my-6 text-xs text-slate-300 flex-1">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-tight">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="space-y-2.5 mt-auto">
                <a
                  href={`https://wa.me/447882781998?text=Hello%20Televo%20IPTV%2C%20I%20want%20to%20order%20the%20${encodeURIComponent(plan.name)}%20(%C2%A3${plan.price.toFixed(2)})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 rounded-xl font-bold text-sm text-center transition-all flex items-center justify-center gap-2 ${
                    plan.isPopular
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30'
                      : 'bg-slate-800 hover:bg-slate-700 text-white'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  Order on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency & Guarantee Banner */}
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3.5">
              <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
              <div>
                <h3 className="font-bold text-white text-base">7-Day Refund Policy</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  If you face technical incompatibility during your first 7 days, our UK support will either resolve it or provide a full refund.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-3.5">
              <Clock className="w-8 h-8 text-blue-400 shrink-0" />
              <div>
                <h3 className="font-bold text-white text-base">Fast 5-15 Min Delivery</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Credentials and personalized setup links are generated promptly and delivered via WhatsApp and email.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-3.5">
              <Tv className="w-8 h-8 text-red-400 shrink-0" />
              <div>
                <h3 className="font-bold text-white text-base">No Equipment To Rent</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Use your existing Smart TV, Amazon Fire Stick, Apple TV, tablet, or phone without renting hardware.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-6">
            Subscription Questions &amp; Answers
          </h2>
          <div className="space-y-3">
            {FAQ_DATA[1].items.map((item, idx) => (
              <details
                key={idx}
                className="group rounded-xl border border-slate-800 bg-slate-900/80 p-5 open:bg-slate-900 transition-colors"
              >
                <summary className="font-bold text-sm sm:text-base text-slate-200 cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{item.question}</span>
                  <span className="text-blue-400 font-bold group-open:rotate-45 transition-transform text-lg">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed border-t border-slate-800 pt-3">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:underline font-semibold"
            >
              Have a custom request or need multi-room consultation? Contact us →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
