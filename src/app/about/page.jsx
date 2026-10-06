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
    canonical: '/about',
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
            About Televo IPTV — Dedicated UK Streaming
          </h1>
          <div className="uk-underline"></div>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Providing dependable, high-definition television and expansive on-demand entertainment tailored specifically for UK households, accessible through our{' '}
            <Link href="/subscription" className="text-[#0854c4] font-semibold underline underline-offset-2 hover:text-[#0A2E66]">
              flexible subscription options
            </Link>
            .
          </p>
        </div>

        {/* Brand Mission Section */}
        <div className="max-w-none text-slate-700 space-y-6 text-sm sm:text-base leading-relaxed mb-14">
          <p>
            <strong>Televo</strong> is a specialized British entertainment brand, and <strong>Televo IPTV</strong> is our premier digital IPTV service built to deliver reliable television streaming across the United Kingdom. We supply live TV channels and high-definition streams directly over your existing home broadband network, empowering British viewers to bypass expensive satellite dishes, rooftop aerials, and rigid multi-year cable contracts by exploring our{' '}
            <Link href="/pricing" className="text-[#0854c4] font-semibold underline underline-offset-2 hover:text-[#0A2E66]">
              transparent IPTV pricing
            </Link>
            .
          </p>
          <p>
            Our commitment is centered on quality and simplicity: delivering stable streaming credentials, crystal-clear 4K and Full HD feeds, comprehensive multi-device compatibility via our{' '}
            <Link href="/guide-installation" className="text-[#0854c4] font-semibold underline underline-offset-2 hover:text-[#0A2E66]">
              installation tutorials
            </Link>
            , and accessible British customer care through our{' '}
            <Link href="/contact" className="text-[#0854c4] font-semibold underline underline-offset-2 hover:text-[#0A2E66]">
              support team
            </Link>
            .
          </p>
        </div>

        {/* Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-[#0A2E66] mb-2">Technical Excellence &amp; UK Routing</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              We continually optimize our server clusters to interface seamlessly with primary UK broadband networks—including BT, Virgin Media, Sky, TalkTalk, and EE. This dedicated routing drastically reduces latency, detailed further in our{' '}
              <Link href="/blog/how-to-fix-iptv-buffering" className="text-[#0854c4] font-semibold underline underline-offset-2 hover:text-[#0A2E66]">
                anti-buffering guide
              </Link>
              .
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-[#0A2E66] mb-2">Prepaid Freedom Without Contracts</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              All Televo IPTV plans are 100% prepaid in British Pounds (£). We never enforce automatic bank debits, surprise renewals, or cancellation penalties. Explore our packages on the{' '}
              <Link href="/pricing" className="text-[#0854c4] font-semibold underline underline-offset-2 hover:text-[#0A2E66]">
                plans comparison page
              </Link>
              .
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-600 mb-4">
              <Tv className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-[#0A2E66] mb-2">Universal Multi-Device Freedom</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Whether you prefer streaming on an{' '}
              <Link href="/guide-installation/firestick" className="text-[#0854c4] font-semibold underline underline-offset-2 hover:text-[#0A2E66]">
                Amazon Fire TV Stick
              </Link>
              ,{' '}
              <Link href="/guide-installation/samsung-smart-tv" className="text-[#0854c4] font-semibold underline underline-offset-2 hover:text-[#0A2E66]">
                Samsung Smart TV
              </Link>
              , LG webOS, Apple TV, iPhone, or PC, Televo IPTV supports standard Xtream Codes API and M3U formats without restrictive hardware locks.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-red-100 border border-red-200 flex items-center justify-center text-red-600 mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-[#0A2E66] mb-2">Dedicated British Customer Care</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              When you need assistance with player app installation, EPG synchronisation, or stream optimization, you communicate directly with friendly, knowledgeable UK specialists via our{' '}
              <Link href="/contact" className="text-[#0854c4] font-semibold underline underline-offset-2 hover:text-[#0A2E66]">
                contact &amp; customer care desk
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Commitment to Transparency */}
        <div className="p-8 rounded-2xl bg-[#0A2E66] text-white text-center mb-14">
          <h2 className="text-2xl font-bold text-white mb-3">Our 7-Day Risk-Free Guarantee</h2>
          <p className="text-sm text-blue-100 max-w-xl mx-auto leading-relaxed mb-6">
            We want you to experience Televo IPTV with absolute certainty. Every new subscription is backed by our{' '}
            <Link href="/refund-policy" className="text-white font-semibold underline hover:text-cyan-200">
              7-day money-back guarantee
            </Link>{' '}
            if you experience technical issues our support team cannot resolve.
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
