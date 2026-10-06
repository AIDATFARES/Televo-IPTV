import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  MessageSquare,
  Clock,
  Tv,
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
        name: 'Televo IPTV 3 Months Plan',
        price: '27.99',
        priceCurrency: 'GBP',
        availability: 'https://schema.org/InStock',
        url: `${SITE_CONFIG.domain}/subscription/`,
      },
      {
        '@type': 'Offer',
        name: 'Televo IPTV 12 Months Plan',
        price: '49.99',
        priceCurrency: 'GBP',
        availability: 'https://schema.org/InStock',
        url: `${SITE_CONFIG.domain}/subscription/`,
      },
      {
        '@type': 'Offer',
        name: 'Televo IPTV 12 Months Family Plan (2 Screens)',
        price: '74.99',
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
    <div className="bg-white min-h-screen">
      <SEO
        title="Televo IPTV Pricing | UK IPTV Plans &amp; Subscriptions in GBP"
        description="Explore Televo IPTV subscription plans in GBP (£). 1, 3, 6, 12, and 24-month plans, multi-screen family packages, instant activation, and 7-day money-back guarantee."
        canonicalUrl="/subscription/"
        schema={pricingSchema}
      />

      {/* Header banner */}
      <div className="bg-[#05070B] text-white py-12 border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbsList} />
          <div className="text-center max-w-3xl mx-auto mt-4">
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Televo IPTV UK Subscription Plans
            </h1>
            <div className="uk-underline"></div>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mt-2">
              Choose the subscription that matches your viewing habits. All plans include 4K Ultra HD streams, 7-day UK EPG schedule, on-demand movies, and dedicated UK support via WhatsApp.
            </p>

            {/* Switcher */}
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 mt-6 shadow-inner">
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
        </div>
      </div>

      {/* Pricing Cards Section */}
      {tab === 'single' ? (
        <section id="aii-pricing" className="py-12">
          <div className="wrap">
            <div className="trust-row">
              <span className="trust-pill">
                <span className="dot"></span> Instant Setup Delivery (5-15 mins)
              </span>
              <span className="trust-pill">
                <span className="dot"></span> 7-Day Money-Back Guarantee
              </span>
              <span className="trust-pill">
                <span className="dot"></span> Dedicated UK WhatsApp Support
              </span>
            </div>

            <div className="grid">
              {PRICING_PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className={`card ${plan.isPopular ? 'featured' : ''}`}
                >
                  {plan.badge && (
                    plan.isPopular ? (
                      <div className="ribbon">{plan.badge}</div>
                    ) : (
                      <div className="best-deal">{plan.badge}</div>
                    )
                  )}

                  <div className="head">
                    <span className="term">{plan.name}</span>
                    <div>
                      <span className="price">£{plan.price.toFixed(2)}</span>
                      {plan.originalPrice && (
                        <span className="price-old">£{plan.originalPrice.toFixed(2)}</span>
                      )}
                    </div>
                  </div>

                  <div className="highlight">{plan.description}</div>
                  <div className="urgency">⚡ Instant UK Delivery — 5-15 Mins</div>

                  <ul>
                    {plan.features.map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/447882781998?text=Hello%20Televo%20IPTV%2C%20I%20would%20like%20to%20order%20the%20${encodeURIComponent(plan.name)}%20for%20%C2%A3${plan.price.toFixed(2)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta"
                  >
                    Order via WhatsApp
                  </a>

                  <div className="pay">🔒 Secure UK Checkout • Instant Delivery</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section id="multi-scherm" className="py-12">
          <div className="wrap">
            <div className="grid">
              {MULTI_SCREEN_PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className={`card ${plan.isPopular ? 'featured' : ''}`}
                >
                  <div className="head">
                    <span className="term">{plan.name}</span>
                    <span className="price">£{plan.price.toFixed(2)}</span>
                  </div>

                  <div className="highlight">{plan.description}</div>
                  <div className="urgency">🔥 Multi-Room Simultaneous Streaming</div>

                  <ul>
                    {plan.features.map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/447882781998?text=Hello%20Televo%20IPTV%2C%20I%20would%20like%20to%20order%20the%20${encodeURIComponent(plan.name)}%20for%20%C2%A3${plan.price.toFixed(2)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta"
                  >
                    Order Multi-Screen Plan
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Guarantee & Features Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="p-8 rounded-2xl bg-[#0A2E66] text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3.5">
              <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
              <div>
                <h3 className="font-bold text-white text-base">7-Day Refund Policy</h3>
                <p className="text-xs text-blue-200 mt-1 leading-relaxed">
                  If you face technical incompatibility during your first 7 days, our UK support will either resolve it or provide a full refund.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-3.5">
              <Clock className="w-8 h-8 text-blue-300 shrink-0" />
              <div>
                <h3 className="font-bold text-white text-base">Fast 5-15 Min Delivery</h3>
                <p className="text-xs text-blue-200 mt-1 leading-relaxed">
                  Credentials and personalized setup links are generated promptly and delivered via WhatsApp and email.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-3.5">
              <Tv className="w-8 h-8 text-red-400 shrink-0" />
              <div>
                <h3 className="font-bold text-white text-base">No Equipment To Rent</h3>
                <p className="text-xs text-blue-200 mt-1 leading-relaxed">
                  Use your existing Smart TV, Amazon Fire Stick, Apple TV, tablet, or phone without renting expensive hardware.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl font-black text-[#0A2E66] text-center mb-2">
            Subscription Questions &amp; Answers
          </h2>
          <div className="uk-underline"></div>
          <div className="space-y-3 mt-6">
            {FAQ_DATA[1].items.map((item, idx) => (
              <details
                key={idx}
                className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm open:shadow-md transition-shadow"
              >
                <summary className="font-bold text-sm sm:text-base text-[#0A2E66] cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{item.question}</span>
                  <span className="text-[#1D7AF2] font-black group-open:rotate-45 transition-transform text-lg">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-sm text-[#0A2E66] hover:text-[#1D7AF2] font-bold"
            >
              Have a custom request or need multi-room consultation? Contact us →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
