import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  MessageSquare,
  ShieldCheck,
  Tv,
  CheckCircle2,
  XCircle,
  PlayCircle,
  Film,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Layers,
  ChevronDown,
  MonitorPlay,
  Flame,
  Radio,
} from 'lucide-react';
import SEO from '../components/SEO';
import {
  SITE_CONFIG,
  PRICING_PLANS,
  MULTI_SCREEN_PLANS,
  SUPPORTED_DEVICES,
  FAQ_DATA,
} from '../data/config';

export default function Home() {
  const [pricingTab, setPricingTab] = useState('single');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Home Organization Schema
  const homeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_CONFIG.domain}/#organization`,
        name: SITE_CONFIG.brandName,
        alternateName: SITE_CONFIG.shortBrand,
        url: SITE_CONFIG.domain,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_CONFIG.domain}/favicon.svg`,
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: SITE_CONFIG.whatsappNumber,
            contactType: 'customer support',
            availableLanguage: 'English',
            areaServed: 'GB',
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_CONFIG.domain}/#website`,
        url: SITE_CONFIG.domain,
        name: SITE_CONFIG.brandName,
        description: 'Televo IPTV UK - Premium IPTV subscription and streaming service in the United Kingdom.',
        publisher: {
          '@id': `${SITE_CONFIG.domain}/#organization`,
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE_CONFIG.domain}/#webpage`,
        url: `${SITE_CONFIG.domain}/`,
        name: 'Televo IPTV UK | Premium IPTV Subscription & Streaming Service',
        isPartOf: {
          '@id': `${SITE_CONFIG.domain}/#website`,
        },
        about: {
          '@id': `${SITE_CONFIG.domain}/#organization`,
        },
      },
    ],
  };

  const appsList = [
    { name: 'IPTV Smarters Pro', platform: 'Fire Stick • Android • iOS • Smart TV' },
    { name: 'TiviMate Player', platform: 'Android TV • Fire Stick 4K' },
    { name: 'IBO Player', platform: 'Samsung Tizen • LG webOS' },
    { name: 'Smart IPTV', platform: 'Samsung & LG Smart TVs' },
    { name: 'GSE Smart IPTV', platform: 'Apple iOS • Apple TV' },
    { name: 'VLC Media Player', platform: 'Windows PC • Mac • Linux' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Televo IPTV UK | Premium IPTV Subscription & Streaming Service"
        description="Discover Televo IPTV in the UK. Explore reliable IPTV subscriptions in GBP, compatible devices, step-by-step setup guides, and dedicated UK customer support."
        canonicalUrl="/"
        schema={homeSchema}
      />

      {/* ─── 1. HERO SECTION ─── */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-slate-950 via-[#07172F] to-slate-950 text-white">
        {/* Glow ambient backgrounds */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/2 right-10 w-[350px] h-[350px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-semibold mb-6 shadow-inner">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse-dot"></span>
            <span>Televo IPTV Active Delivery — Average Setup under 10 Mins 🇬🇧</span>
          </div>

          {/* Main H1 Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-[1.15] mb-6">
            Televo IPTV — <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-white bg-clip-text text-transparent">Premium IPTV</span> in the UK
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            Experience reliable television entertainment with <strong>Televo IPTV</strong>. Fast delivery of digital connection details, crystal-clear 4K streams, full Electronic Programme Guide (EPG), and genuine UK customer support on WhatsApp.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12">
            <Link
              to="/subscription"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 shadow-xl shadow-blue-600/35 hover:shadow-blue-600/50 hover:-translate-y-0.5 transition-all"
            >
              <Zap className="w-5 h-5 fill-white" />
              View IPTV Plans in GBP
            </Link>

            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-base text-emerald-300 bg-emerald-950/60 border border-emerald-700/60 hover:bg-emerald-900/40 hover:text-emerald-200 transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              Chat on WhatsApp ({SITE_CONFIG.whatsappNumber})
            </a>
          </div>

          {/* Value Indicator Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300 pt-2 border-t border-slate-800/80 max-w-3xl mx-auto">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              7-Day Money-Back Guarantee
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Zap className="w-4 h-4 text-blue-400" />
              Instant M3U &amp; Xtream API Credentials
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Tv className="w-4 h-4 text-red-400" />
              Smart TV &amp; Fire Stick Compatible
            </span>
          </div>
        </div>
      </section>

      {/* ─── 2. COMPATIBLE APPS & PLATFORMS TICKER ─── */}
      <section className="py-10 bg-slate-900/90 border-y border-slate-800" aria-label="Compatible Applications">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Universal App &amp; Device Compatibility
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Works Seamlessly with Your Preferred Streaming Apps
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {appsList.map((app, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col items-center justify-center text-center hover:border-blue-500/40 hover:bg-slate-900 transition-colors"
              >
                <MonitorPlay className="w-6 h-6 text-blue-400 mb-2" />
                <span className="text-sm font-bold text-white">{app.name}</span>
                <span className="text-[11px] text-slate-400 mt-0.5">{app.platform}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-400 mt-6">
            Need setup guidance for your television? Explore our{' '}
            <Link to="/guide-installation" className="text-blue-400 hover:underline font-semibold">
              Televo IPTV Installation Centre →
            </Link>
          </p>
        </div>
      </section>

      {/* ─── 3. CORE BENEFITS / WHY TELEVO IPTV ─── */}
      <section className="py-16 lg:py-24 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block w-16 h-1 bg-gradient-to-r from-blue-500 via-white to-red-500 rounded-full mb-3"></div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why UK Viewers Choose <span className="text-blue-400">Televo IPTV</span>
            </h2>
            <p className="text-slate-300 mt-4 text-base sm:text-lg leading-relaxed">
              We built Televo IPTV to provide British customers with a seamless, high-definition streaming service backed by transparent pricing, contract-free terms, and responsive technical help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">High-Definition &amp; 4K Clarity</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Enjoy sports fixtures, cinema blockbusters, and popular series in crystal-clear Full HD and 4K Ultra HD resolution with high-framerate support.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Broad Device Compatibility</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Works effortlessly on Samsung Smart TVs, LG TVs, Amazon Fire Stick, Android TV, Apple TV, smartphones, tablets, and Windows/Mac PCs.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">M3U &amp; Xtream Codes API</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Receive standardized credentials immediately after ordering. Connect easily with your favourite player without complicated configurations.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 mb-4">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Anti-Buffering Optimisation</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                High-bandwidth server routing optimized for UK home broadband providers (BT, Virgin Media, Sky, TalkTalk, Vodafone, and EE).
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
                <Tv className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Integrated EPG Programme Guide</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Stay updated with a complete 7-day Electronic Programme Guide (EPG). Browse schedules, upcoming sports events, and episode information with ease.
              </p>
            </div>

            {/* Card 6 */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">7-Day Money-Back Guarantee</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Try Televo IPTV with complete peace of mind. If our service does not meet your technical expectations within your first 7 days, request a prompt refund.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. SUBSCRIPTION PRICING SECTION ─── */}
      <section id="pricing-section" className="py-16 lg:py-24 bg-[#071326] text-white border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
              Transparent GBP Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 tracking-tight">
              Choose Your <span className="text-blue-400">Televo IPTV</span> Plan
            </h2>
            <p className="text-slate-300 mt-3 text-base">
              No long-term contracts, no automatic direct debits. Select between single-device and multi-screen household subscriptions.
            </p>

            {/* Plan Switcher Toggle */}
            <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800 mt-6">
              <button
                onClick={() => setPricingTab('single')}
                className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${
                  pricingTab === 'single'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                1 Active Device
              </button>
              <button
                onClick={() => setPricingTab('multi')}
                className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${
                  pricingTab === 'multi'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Multi-Screen Family Plans
              </button>
            </div>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(pricingTab === 'single' ? PRICING_PLANS : MULTI_SCREEN_PLANS).map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col p-6 transition-all ${
                  plan.isPopular
                    ? 'bg-gradient-to-b from-blue-900/40 via-slate-900 to-slate-950 border-2 border-blue-500 shadow-xl shadow-blue-900/30'
                    : 'bg-slate-900/80 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Popular Ribbon */}
                {plan.badge && (
                  <div
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-xs font-black uppercase tracking-wider ${
                      plan.isPopular
                        ? 'bg-red-600 text-white shadow-md'
                        : 'bg-blue-600 text-white'
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}

                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                  <p className="text-xs text-slate-400 mt-1 min-h-[32px]">{plan.description}</p>
                </div>

                {/* Price Display */}
                <div className="py-4 border-y border-slate-800/80 my-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-white">
                      £{plan.price.toFixed(2)}
                    </span>
                    {plan.originalPrice && (
                      <span className="text-sm text-slate-500 line-through">
                        £{plan.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-semibold text-blue-400 mt-1 block">
                    {plan.monthlyEquivalent}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-2.5 my-5 text-xs text-slate-300 flex-1">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Card CTA */}
                <a
                  href={`https://wa.me/447882781998?text=Hello%20Televo%20IPTV%2C%20I%20would%20like%20to%20order%20the%20${encodeURIComponent(plan.name)}%20for%20%C2%A3${plan.price.toFixed(2)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-xl font-bold text-sm text-center transition-all flex items-center justify-center gap-2 ${
                    plan.isPopular
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30'
                      : 'bg-slate-800 hover:bg-slate-700 text-white'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  Order via WhatsApp
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/subscription"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              View detailed plan breakdown &amp; comparisons <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 5. HOW IT WORKS (3 STEPS) ─── */}
      <section className="py-16 lg:py-24 bg-slate-950 text-white border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
              Fast &amp; Simple Onboarding
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 tracking-tight">
              Get Started with <span className="text-blue-400">Televo IPTV</span> in 3 Steps
            </h2>
            <p className="text-slate-300 mt-3 text-base">
              No engineer appointments or technical setup needed. You can be streaming your favourite programmes within 10 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 relative text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-blue-600 text-white font-black text-xl flex items-center justify-center shadow-lg shadow-blue-600/30 mb-5">
                1
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Choose Your Plan</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Select your preferred subscription tier (1, 3, 6, or 12 months) based on your household viewing habits.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 relative text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-blue-600 text-white font-black text-xl flex items-center justify-center shadow-lg shadow-blue-600/30 mb-5">
                2
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Receive Digital Credentials</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Receive your Xtream Codes API login, dedicated Server URL, and M3U playlist via WhatsApp and email in 5-15 mins.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 relative text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-blue-600 text-white font-black text-xl flex items-center justify-center shadow-lg shadow-blue-600/30 mb-5">
                3
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Stream on Any Device</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Open your app on your Smart TV, Fire Stick, or mobile, enter your details, and start watching in Full HD &amp; 4K.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. COMPARISON TABLE (TELEVO IPTV VS OTHERS) ─── */}
      <section className="py-16 lg:py-24 bg-[#061122] text-white border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
              Transparent Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              Why <span className="text-blue-400">Televo IPTV</span> Stands Out in the UK
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/90 shadow-xl">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/60">
                  <th className="py-4 px-6 font-bold text-slate-300">Feature &amp; Service Criteria</th>
                  <th className="py-4 px-6 font-bold text-blue-400 bg-blue-950/40 border-x border-blue-900/50 text-center">
                    Televo IPTV UK
                  </th>
                  <th className="py-4 px-6 font-bold text-slate-500 text-center">Standard Providers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-200">Delivery Time</td>
                  <td className="py-4 px-6 text-center font-bold text-emerald-400 bg-blue-950/20 border-x border-blue-900/30">
                    5 – 15 Minutes
                  </td>
                  <td className="py-4 px-6 text-center text-slate-500">Hours or Days</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-200">UK Broadband Optimisation</td>
                  <td className="py-4 px-6 text-center bg-blue-950/20 border-x border-blue-900/30">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 inline" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <XCircle className="w-5 h-5 text-red-400/60 inline" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-200">British English Customer Support</td>
                  <td className="py-4 px-6 text-center bg-blue-950/20 border-x border-blue-900/30">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 inline" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <XCircle className="w-5 h-5 text-red-400/60 inline" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-200">7-Day Refund Guarantee</td>
                  <td className="py-4 px-6 text-center bg-blue-950/20 border-x border-blue-900/30">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 inline" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <XCircle className="w-5 h-5 text-red-400/60 inline" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-200">Multi-Screen Options for Families</td>
                  <td className="py-4 px-6 text-center bg-blue-950/20 border-x border-blue-900/30">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 inline" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <XCircle className="w-5 h-5 text-red-400/60 inline" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-200">EPG Schedule Guide</td>
                  <td className="py-4 px-6 text-center bg-blue-950/20 border-x border-blue-900/30">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 inline" />
                  </td>
                  <td className="py-4 px-6 text-center text-slate-500">Unstable / Incomplete</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── 7. DEVICE COMPATIBILITY SECTION ─── */}
      <section className="py-16 lg:py-24 bg-slate-950 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                Full Ecosystem Support
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                Stream Televo IPTV on Any Device
              </h2>
              <p className="text-slate-400 mt-2 text-sm max-w-xl">
                We have verified and compiled step-by-step installation guides for every primary streaming platform used in the UK.
              </p>
            </div>
            <Link
              to="/guide-installation"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-blue-400 hover:text-blue-300"
            >
              View All Installation Guides <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUPPORTED_DEVICES.map((device) => (
              <Link
                key={device.slug}
                to={`/guide-installation/${device.slug}`}
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-blue-400 bg-blue-950/60 px-2.5 py-0.5 rounded-md border border-blue-800/40">
                      {device.category}
                    </span>
                    <span className="text-xs text-slate-500">Setup: {device.setupTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {device.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {device.description}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-white">
                  <span>View Step-by-Step Guide</span>
                  <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. FAQ ACCORDION ─── */}
      <section className="py-16 lg:py-24 bg-[#071326] text-white border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              Common Questions About <span className="text-blue-400">Televo IPTV</span>
            </h2>
            <p className="text-slate-400 mt-2 text-sm">
              Everything you need to know about activation, subscriptions, devices, and UK support.
            </p>
          </div>

          <div className="space-y-3.5">
            {FAQ_DATA[0].items.concat(FAQ_DATA[1].items.slice(0, 3)).map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-slate-800 bg-slate-900/80 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
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

          <div className="text-center mt-8">
            <Link
              to="/faq"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:underline"
            >
              Browse all FAQs &amp; troubleshooting solutions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 9. FINAL ACTION CTA BANNER ─── */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white border-t border-slate-800 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Ready to Experience <span className="text-blue-400">Televo IPTV</span> in the UK?
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto mb-8">
            Join thousands of UK viewers enjoying stable, high-definition streaming on Smart TVs, Fire Sticks, and mobile devices today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              to="/subscription"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 transition-all"
            >
              Get Your Televo IPTV Plan
            </Link>
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-700/60 hover:bg-emerald-900/40 transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp ({SITE_CONFIG.whatsappNumber})
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
