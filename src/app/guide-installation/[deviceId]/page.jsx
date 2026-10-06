import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  CheckCircle2,
  Tv,
  MessageSquare,
  Zap,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import Breadcrumbs from '../../../components/Breadcrumbs';
import {
  INSTALLATION_GUIDES_DATA,
  SUPPORTED_DEVICES,
  SITE_CONFIG,
} from '../../../data/config';

export async function generateStaticParams() {
  return SUPPORTED_DEVICES.map((d) => ({
    deviceId: d.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { deviceId } = await params;
  const guide = INSTALLATION_GUIDES_DATA[deviceId];
  if (!guide) return {};

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: {
      canonical: `/guide-installation/${deviceId}`,
    },
  };
}

export default async function DeviceGuidePage({ params }) {
  const { deviceId } = await params;
  const guide = INSTALLATION_GUIDES_DATA[deviceId];

  if (!guide) {
    notFound();
  }

  // Schema.org HowTo structured data
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: guide.title,
    description: guide.metaDescription,
    totalTime: 'PT5M',
    step: guide.steps.map((st) => ({
      '@type': 'HowToStep',
      position: st.step,
      name: st.title,
      text: st.instructions,
    })),
  };

  const breadcrumbsList = [
    { name: 'Installation Centre', path: '/guide-installation' },
    { name: guide.device, path: `/guide-installation/${deviceId}` },
  ];

  const relatedDevices = SUPPORTED_DEVICES.filter((d) => d.slug !== deviceId).slice(0, 4);

  return (
    <div className="pt-4 pb-12 sm:pt-6 bg-white text-[#2b3340] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbsList} />

        {/* Hero Title */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0A2E66] text-xs font-semibold mb-4">
            <Tv className="w-3.5 h-3.5 text-blue-600" />
            Verified Setup Guide • {guide.device}
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0A2E66] tracking-tight leading-tight">
            {guide.h1}
          </h1>
          <div className="uk-underline !mx-0"></div>
          <p className="text-slate-600 mt-3 text-base leading-relaxed">
            Follow this clear step-by-step tutorial to configure your{' '}
            <Link href="/subscription" className="text-[#0854c4] font-semibold hover:underline">
              Televo IPTV subscription
            </Link>{' '}
            on your {guide.device}. Our setup works with leading applications including {guide.recommendedApp}, supported by our{' '}
            <Link href="/guide-installation" className="text-[#0854c4] font-semibold hover:underline">
              universal installation hub
            </Link>
            .
          </p>
        </div>

        {/* Prerequisites Box */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 mb-10">
          <h2 className="text-base font-bold text-[#0A2E66] mb-3 flex items-center gap-2">
            <Zap className="w-4 h-4 text-blue-600" />
            What You Need to Set Up Televo IPTV
          </h2>
          <ul className="space-y-2 text-sm text-slate-700">
            {guide.prerequisites.map((req, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Step-by-Step Instructions */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-black text-[#0A2E66] mb-6">
            Step-by-Step Televo IPTV Setup Guide
          </h2>

          {guide.steps.map((item) => (
            <div
              key={item.step}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0A2E66] to-[#1D7AF2] text-white font-black text-sm flex items-center justify-center shrink-0">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-[#0A2E66]">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed pl-12">
                {item.instructions}
              </p>
            </div>
          ))}
        </div>

        {/* Troubleshooting Tip Box */}
        <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 mb-12">
          <h3 className="text-base font-bold text-amber-900 mb-2">
            💡 Pro Tip for Smooth Televo IPTV Streaming on {guide.device}
          </h3>
          <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
            For the most reliable 4K playback without buffering, connect your {guide.device} using a 5GHz Wi-Fi band or direct Ethernet cable. Double-check your server address and login credentials to avoid trailing spaces, or check our{' '}
            <Link href="/blog/how-to-fix-iptv-buffering" className="text-amber-950 font-bold underline hover:text-black">
              anti-buffering troubleshooting guide
            </Link>{' '}
            for additional performance optimizations.
          </p>
        </div>

        {/* WhatsApp Setup Assistance Callout */}
        <div className="p-8 rounded-2xl bg-[#0A2E66] text-white text-center mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Need Assistance Setting Up Televo IPTV on Your {guide.device}?
          </h3>
          <p className="text-sm text-blue-100 max-w-lg mx-auto mb-6">
            Our dedicated UK support team is available 7 days a week on WhatsApp to assist with app selection, login validation, and channel configuration under our{' '}
            <Link href="/refund-policy" className="text-white font-semibold underline hover:text-cyan-200">
              7-day guarantee
            </Link>
            .
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/213552069874?text=Hello%20Televo%20IPTV%2C%20I%20need%20help%20setting%20up%20on%20my%20${encodeURIComponent(guide.device)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/30 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Support
            </a>
            <Link
              href="/subscription"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-[#0A2E66] bg-white hover:bg-slate-100 transition-all"
            >
              View IPTV Plans
            </Link>
          </div>
        </div>

        {/* Related Guides */}
        <div>
          <h3 className="text-lg font-bold text-[#0A2E66] mb-4">
            Guides for Other Streaming Devices
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedDevices.map((d) => (
              <Link
                key={d.slug}
                href={`/guide-installation/${d.slug}`}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:bg-white transition-all flex items-center justify-between group"
              >
                <div>
                  <span className="text-xs font-semibold text-blue-600 block">{d.category}</span>
                  <span className="text-sm font-bold text-[#0A2E66] group-hover:text-blue-600">
                    {d.name}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
