import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  HelpCircle,
  CheckCircle2,
  Tv,
} from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';
import { SUPPORTED_DEVICES, SITE_CONFIG } from '../../data/config';

export const metadata = {
  title: 'Televo IPTV Installation Guide | UK Device Setup Centre',
  description:
    'Complete setup guides for Televo IPTV in the UK. Step-by-step installation tutorials for Samsung Smart TV, LG TV, Amazon Fire Stick, Android TV, Apple TV, iOS, and PC.',
  alternates: {
    canonical: '/guide-installation/',
  },
};

export default function InstallationHubPage() {
  const breadcrumbsList = [
    { name: 'Installation Centre', path: '/guide-installation' },
  ];

  return (
    <div className="pt-4 pb-12 sm:pt-6 bg-white min-h-screen text-[#2b3340]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbsList} />

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0A2E66] text-xs font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Updated for 2026 • Beginner-Friendly Setup 🇬🇧
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0A2E66] tracking-tight">
            Televo IPTV Device Setup &amp; Installation Guides
          </h1>
          <div className="uk-underline"></div>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Set up your Televo IPTV subscription in under 5 minutes. Browse our step-by-step UK installation tutorials for Amazon Fire Stick, Smart TVs, Android TV, Apple TV, iOS, and PC with instant M3U and Xtream Codes API integration.
          </p>
        </div>

        {/* Device Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SUPPORTED_DEVICES.map((device) => (
            <Link
              key={device.slug}
              href={`/guide-installation/${device.slug}`}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#1D7AF2] hover:shadow-md transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#0A2E66] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                    {device.category}
                  </span>
                  <span className="text-xs text-slate-500">Avg setup: {device.setupTime}</span>
                </div>
                <h2 className="text-xl font-black text-[#0A2E66] group-hover:text-[#1D7AF2] transition-colors">
                  {device.name}
                </h2>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {device.description}
                </p>

                {/* Recommended Apps */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="text-[11px] text-slate-500 font-bold block mb-1">
                    Recommended apps:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {device.apps.map((app, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0A2E66] group-hover:text-[#1D7AF2]">
                <span>Open {device.name} Guide</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Universal Xtream Codes vs M3U Section */}
        <div className="p-8 lg:p-10 rounded-2xl bg-[#0A2E66] text-white mb-16">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Understanding Your Televo IPTV Connection Details
            </h2>
            <p className="text-blue-100 text-sm mt-2">
              Once your Televo IPTV subscription is activated, you will receive two flexible connection options. Both grant full, unrestricted access to 50,000+ live TV channels and 200,000+ VOD movies and series.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white/10 border border-white/20">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500 text-white font-black flex items-center justify-center text-sm">
                  1
                </div>
                <h3 className="font-bold text-white text-base">Xtream Codes API (Recommended)</h3>
              </div>
              <p className="text-xs text-blue-100 leading-relaxed mb-4">
                The most user-friendly format for Smart TVs and player apps like IPTV Smarters Pro and TiviMate. Simply enter three pieces of information:
              </p>
              <ul className="space-y-1.5 text-xs text-white">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span><strong>Server URL:</strong> Unique UK server endpoint</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span><strong>Username:</strong> Your personal account identifier</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span><strong>Password:</strong> Your secure credentials</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-white/10 border border-white/20">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500 text-white font-black flex items-center justify-center text-sm">
                  2
                </div>
                <h3 className="font-bold text-white text-base">M3U Playlist URL</h3>
              </div>
              <p className="text-xs text-blue-100 leading-relaxed mb-4">
                A single web link containing the complete channel catalog and electronic program guide index. Ideal for players that accept direct URL import:
              </p>
              <ul className="space-y-1.5 text-xs text-white">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span><strong>Single URL:</strong> Paste directly into VLC or SIPTV</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span><strong>Auto-Sync:</strong> Automatically updates when channels are added</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span><strong>Integrated EPG:</strong> Programme guide feeds load automatically</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
