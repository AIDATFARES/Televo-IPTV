import { useParams, Link, Navigate } from 'react-router-dom';
import {
  CheckCircle2,
  Tv,
  HelpCircle,
  MessageSquare,
  Zap,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import {
  INSTALLATION_GUIDES_DATA,
  SUPPORTED_DEVICES,
  SITE_CONFIG,
} from '../data/config';

export default function DeviceGuide() {
  const { deviceId } = useParams();
  const guide = INSTALLATION_GUIDES_DATA[deviceId];

  if (!guide) {
    return <Navigate to="/guide-installation" replace />;
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
    <div className="py-12 bg-slate-950 text-white min-h-screen">
      <SEO
        title={guide.metaTitle}
        description={guide.metaDescription}
        canonicalUrl={`/guide-installation/${deviceId}/`}
        schema={howToSchema}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbsList} />

        {/* Hero Title */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-800/40 text-blue-300 text-xs font-semibold mb-4">
            <Tv className="w-3.5 h-3.5 text-blue-400" />
            Verified Setup Guide • {guide.device}
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            {guide.h1}
          </h1>
          <p className="text-slate-300 mt-3 text-base leading-relaxed">
            Follow this clear step-by-step tutorial to configure your <strong>Televo IPTV</strong> subscription on your {guide.device}. Our setup works with leading applications including {guide.recommendedApp}.
          </p>
        </div>

        {/* Prerequisites Box */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 mb-10">
          <h2 className="text-base font-bold text-white mb-3 flex items-center gap-2">
            <Zap className="w-4 h-4 text-blue-400" />
            What You Need Before Starting
          </h2>
          <ul className="space-y-2 text-sm text-slate-300">
            {guide.prerequisites.map((req, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Step-by-Step Instructions */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Step-by-Step Installation Instructions
          </h2>

          {guide.steps.map((item) => (
            <div
              key={item.step}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex gap-4 sm:gap-6 items-start"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-400 font-black text-lg flex items-center justify-center shrink-0">
                {item.step}
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {item.instructions}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Troubleshooting Accordion */}
        {guide.troubleshooting && guide.troubleshooting.length > 0 && (
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 mb-12">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-400" />
              Troubleshooting &amp; Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {guide.troubleshooting.map((qa, i) => (
                <details
                  key={i}
                  className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-4 open:bg-slate-950 transition-colors"
                >
                  <summary className="font-bold text-sm text-slate-200 cursor-pointer list-none flex items-center justify-between gap-4">
                    <span>{qa.question}</span>
                    <span className="text-blue-400 font-bold">+</span>
                  </summary>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800 pt-2.5">
                    {qa.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* WhatsApp Help CTA Box */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 border border-blue-900/50 text-center mb-14">
          <h2 className="text-2xl font-bold text-white mb-2">
            Having Trouble with Your Setup?
          </h2>
          <p className="text-sm text-slate-300 max-w-lg mx-auto mb-6">
            Our UK technical support team is ready to assist you in real time via WhatsApp. We can help verify your credentials and configure your application.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/30 transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Message WhatsApp Support ({SITE_CONFIG.whatsappNumber})
            </a>
            <Link
              to="/subscription"
              className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 transition-all flex items-center gap-2"
            >
              <Zap className="w-4 h-4" />
              View Televo IPTV Plans
            </Link>
          </div>
        </div>

        {/* Related Device Guides */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Other Supported Devices</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedDevices.map((d) => (
              <Link
                key={d.slug}
                to={`/guide-installation/${d.slug}`}
                className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 text-center hover:bg-slate-800/80 transition-colors block"
              >
                <span className="text-xs font-bold text-slate-200 block truncate">{d.name}</span>
                <span className="text-[10px] text-blue-400 mt-1 block">View Guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
