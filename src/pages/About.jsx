import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Tv,
  CheckCircle2,
  Zap,
  MessageSquare,
  Sparkles,
  ArrowRight,
  HeartHandshake,
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { SITE_CONFIG } from '../data/config';

export default function About() {
  const breadcrumbsList = [{ name: 'About Televo IPTV', path: '/about' }];

  return (
    <div className="py-12 bg-slate-950 text-white min-h-screen">
      <SEO
        title="About Televo IPTV | UK IPTV Service &amp; Streaming Mission"
        description="Learn more about Televo IPTV. Discover our commitment to stable high-definition streaming, transparent GBP pricing, and friendly UK customer service."
        canonicalUrl="/about/"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbsList} />

        {/* Hero */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/40 text-blue-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            Our Service Philosophy
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            About Televo IPTV
          </h1>
          <p className="text-slate-300 mt-4 text-base sm:text-lg leading-relaxed">
            Delivering high-definition television and on-demand streaming to households across the United Kingdom.
          </p>
        </div>

        {/* Brand Mission Section */}
        <div className="prose prose-invert max-w-none text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed mb-14">
          <p>
            <strong>Televo IPTV</strong> (commonly referenced simply as <strong>Televo</strong>) is an independent digital streaming provider tailored specifically to the requirements of viewers in the United Kingdom. We supply modern digital television streams directly over residential broadband networks, allowing UK households to bypass cumbersome satellite dishes, aerials, and inflexible multi-year contracts.
          </p>
          <p>
            Our core mission is straightforward: to offer dependable streaming credentials, crystal-clear Full HD and 4K video feeds, broad device compatibility, and responsive British customer service in an industry that too often feels complicated or opaque.
          </p>
        </div>

        {/* Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-white mb-2">Technical Excellence &amp; Routing</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              We continually optimize server paths to align with primary UK internet service providers (BT, Virgin Media, Sky, TalkTalk, EE, Vodafone). This reduces latency, prevents peak-time congestion, and ensures smooth sports playback.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-white mb-2">No Contracts or Hidden Fees</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              All Televo IPTV plans are 100% prepaid in British Pounds (£). We never enforce automatic bank debits, surprise fee increases, or cancellation penalties. You choose exactly when and for how long you wish to subscribe.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-400 mb-4">
              <Tv className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-white mb-2">Universal Device Freedom</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Whether you prefer streaming on an Amazon Fire TV Stick, Samsung Smart TV, LG webOS, Apple TV, iPhone, or Windows PC, Televo IPTV supports standard Xtream Codes API and M3U formats without locked hardware requirements.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400 mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-white mb-2">Real UK Customer Support</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              When you have questions regarding player configuration, playlist synchronization, or buffering fixes, you communicate directly with knowledgeable support specialists via WhatsApp 7 days a week.
            </p>
          </div>
        </div>

        {/* Commitment to Transparency */}
        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 text-center mb-14">
          <h2 className="text-2xl font-bold text-white mb-3">Our 7-Day Guarantee</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed mb-6">
            We want every customer to enjoy Televo IPTV with absolute confidence. That is why all new subscriptions include our 7-day money-back guarantee if you experience technical issues our team cannot resolve.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/subscription"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-all"
            >
              Explore Our IPTV Plans <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 hover:bg-emerald-900/40 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
