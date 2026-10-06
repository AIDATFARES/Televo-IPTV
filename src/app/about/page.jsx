import Link from 'next/link';
import {
  ShieldCheck,
  Tv,
  Zap,
  MessageSquare,
  Sparkles,
  ArrowRight,
  HeartHandshake,
} from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';
import { SITE_CONFIG } from '../../data/config';

export const metadata = {
  title: 'About Televo IPTV | UK IPTV Service & Streaming Mission',
  description:
    'Learn more about Televo IPTV. Discover our commitment to stable high-definition streaming, transparent GBP pricing, and friendly UK customer service.',
  alternates: {
    canonical: '/about/',
  },
};

export default function AboutPage() {
  const breadcrumbsList = [{ name: 'About Televo IPTV', path: '/about' }];

  return (
    <div className="pt-4 pb-12 sm:pt-6 bg-white text-[#2b3340] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbsList} />

        {/* Hero */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0A2E66] text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Our Service Philosophy
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0A2E66] tracking-tight">
            About Televo IPTV
          </h1>
          <div className="uk-underline"></div>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Delivering high-definition television and on-demand streaming to households across the United Kingdom.
          </p>
        </div>

        {/* Brand Mission Section */}
        <div className="max-w-none text-slate-700 space-y-6 text-sm sm:text-base leading-relaxed mb-14">
          <p>
            <strong>Televo IPTV</strong> (commonly referenced simply as <strong>Televo</strong>) is an independent digital streaming provider tailored specifically to the requirements of viewers in the United Kingdom. We supply modern digital television streams directly over residential broadband networks, allowing UK households to bypass cumbersome satellite dishes, aerials, and inflexible multi-year contracts.
          </p>
          <p>
            Our core mission is straightforward: to offer dependable streaming credentials, crystal-clear Full HD and 4K video feeds, broad device compatibility, and responsive British customer service in an industry that too often feels complicated or opaque.
          </p>
        </div>

        {/* Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-[#0A2E66] mb-2">Technical Excellence &amp; Routing</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              We continually optimize server paths to align with primary UK internet service providers (BT, Virgin Media, Sky, TalkTalk, EE, Vodafone). This reduces latency, prevents peak-time congestion, and ensures smooth sports playback.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-[#0A2E66] mb-2">No Contracts or Hidden Fees</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              All Televo IPTV plans are 100% prepaid in British Pounds (£). We never enforce automatic bank debits, surprise fee increases, or cancellation penalties. You choose exactly when and for how long you wish to subscribe.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-600 mb-4">
              <Tv className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-[#0A2E66] mb-2">Universal Device Freedom</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Whether you prefer streaming on an Amazon Fire TV Stick, Samsung Smart TV, LG webOS, Apple TV, iPhone, or Windows PC, Televo IPTV supports standard Xtream Codes API and M3U formats without locked hardware requirements.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-red-100 border border-red-200 flex items-center justify-center text-red-600 mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-[#0A2E66] mb-2">Real UK Customer Support</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              When you have questions regarding player configuration, playlist synchronization, or buffering fixes, you communicate directly with knowledgeable support specialists via WhatsApp 7 days a week.
            </p>
          </div>
        </div>

        {/* Commitment to Transparency */}
        <div className="p-8 rounded-2xl bg-[#0A2E66] text-white text-center mb-14">
          <h2 className="text-2xl font-bold text-white mb-3">Our 7-Day Guarantee</h2>
          <p className="text-sm text-blue-100 max-w-xl mx-auto leading-relaxed mb-6">
            We want every customer to enjoy Televo IPTV with absolute confidence. That is why all new subscriptions include our 7-day money-back guarantee if you experience technical issues our team cannot resolve.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/subscription"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-[#0A2E66] bg-white hover:bg-slate-100 shadow-md transition-all"
            >
              Explore Our IPTV Plans <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/30 transition-all"
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
