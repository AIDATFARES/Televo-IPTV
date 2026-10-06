import { Link } from 'react-router-dom';
import {
  Tv,
  ArrowRight,
  ShieldCheck,
  Zap,
  HelpCircle,
  CheckCircle2,
  MonitorPlay,
  Smartphone,
  Laptop,
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { SUPPORTED_DEVICES, SITE_CONFIG } from '../data/config';

export default function InstallationHub() {
  const breadcrumbsList = [
    { name: 'Installation Centre', path: '/guide-installation' },
  ];

  return (
    <div className="py-12 bg-slate-950 text-white min-h-screen">
      <SEO
        title="Televo IPTV Installation Guide | UK Device Setup Centre"
        description="Complete setup guides for Televo IPTV in the UK. Step-by-step installation tutorials for Samsung Smart TV, LG TV, Amazon Fire Stick, Android TV, Apple TV, iOS, and PC."
        canonicalUrl="/guide-installation/"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbsList} />

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/40 text-blue-300 text-xs font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Updated for 2026 • Beginner-Friendly Walkthroughs 🇬🇧
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Televo IPTV Installation Centre
          </h1>
          <p className="text-slate-300 mt-4 text-base sm:text-lg leading-relaxed">
            Select your streaming device below for clear, step-by-step configuration instructions. Our credentials work seamlessly across all major media players and television operating systems.
          </p>
        </div>

        {/* Device Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SUPPORTED_DEVICES.map((device) => (
            <Link
              key={device.slug}
              to={`/guide-installation/${device.slug}`}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-blue-400 bg-blue-950/60 px-2.5 py-0.5 rounded-md border border-blue-800/40">
                    {device.category}
                  </span>
                  <span className="text-xs text-slate-500">Avg setup: {device.setupTime}</span>
                </div>
                <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {device.name}
                </h2>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {device.description}
                </p>

                {/* Recommended Apps */}
                <div className="mt-4 pt-3 border-t border-slate-800/80">
                  <span className="text-[11px] text-slate-400 font-semibold block mb-1">
                    Recommended apps:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {device.apps.map((app, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-blue-400 group-hover:text-blue-300">
                <span>Open {device.name} Guide</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Universal Xtream Codes vs M3U Section */}
        <div className="p-8 lg:p-10 rounded-2xl bg-slate-900 border border-slate-800 mb-16">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Understanding Your Televo IPTV Connection Details
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              When your subscription is activated, you will receive two standard formats. Here is how they differ:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-blue-400" />
                <h3 className="font-bold text-white text-base">Option 1: Xtream Codes API (Recommended)</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                Supported by IPTV Smarters Pro, TiviMate, and XCIPTV. You will enter four fields:
              </p>
              <ul className="text-xs text-slate-300 space-y-1.5 font-mono bg-slate-900 p-3 rounded-lg border border-slate-800">
                <li>• Any Name: Televo IPTV</li>
                <li>• Username: (Your unique username)</li>
                <li>• Password: (Your unique password)</li>
                <li>• Server URL: (http://server.address:port)</li>
              </ul>
              <span className="text-[11px] text-emerald-400 mt-2 block font-sans">
                ✓ Loads categories, series, and EPG schedule automatically.
              </span>
            </div>

            <div className="p-6 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="flex items-center gap-2 mb-3">
                <MonitorPlay className="w-5 h-5 text-purple-400" />
                <h3 className="font-bold text-white text-base">Option 2: M3U Plus Playlist URL</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                Used in VLC Media Player, Smart IPTV, SS IPTV, and GSE Smart IPTV. A single web address containing your authentication token:
              </p>
              <div className="text-xs text-slate-300 font-mono bg-slate-900 p-3 rounded-lg border border-slate-800 truncate">
                http://server.url/get.php?username=...&amp;password=...&amp;type=m3u_plus
              </div>
              <span className="text-[11px] text-blue-400 mt-2 block font-sans">
                ✓ Ideal for lightweight apps or direct web playlist imports.
              </span>
            </div>
          </div>
        </div>

        {/* Need Personal Help Banner */}
        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-blue-950/50 via-slate-900 to-blue-950/50 border border-blue-900/40">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Need Live Assistance Setting Up Your Television?
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-6">
            Our UK technical support specialists can guide you through every step directly on WhatsApp.
          </p>
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/30 transition-all"
          >
            Chat with Setup Specialist on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
