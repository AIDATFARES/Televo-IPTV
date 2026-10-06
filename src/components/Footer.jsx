import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, MessageSquare, Mail, Tv, Smartphone, Laptop, CheckCircle2 } from 'lucide-react';
import Logo from './Logo';
import { SITE_CONFIG, NAV_LINKS, SUPPORTED_DEVICES } from '../data/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm mt-auto relative z-10">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand & Mission */}
          <div className="space-y-4">
            <Logo size="default" />
            <p className="text-slate-400 text-sm leading-relaxed">
              <strong className="text-slate-200">Televo IPTV</strong> is a dedicated British streaming service delivering high-definition live television, major sports, and on-demand movies directly across the United Kingdom.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-950/60 border border-blue-800/40 text-blue-300 text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                UK Server Routing
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-800/40 text-emerald-300 text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Rapid Activation
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                7-Day Guarantee
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Explore Televo
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-blue-400 transition-colors inline-block text-slate-300 hover:translate-x-1 transition-transform duration-150"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/pricing"
                  className="hover:text-blue-400 transition-colors inline-block text-slate-300 hover:translate-x-1 transition-transform duration-150"
                >
                  Pricing Comparison
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Setup & Device Guides */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Device Setup Guides
            </h3>
            <ul className="space-y-2.5">
              {SUPPORTED_DEVICES.slice(0, 7).map((device) => (
                <li key={device.slug}>
                  <Link
                    to={`/guide-installation/${device.slug}`}
                    className="hover:text-blue-400 transition-colors inline-block text-slate-300 hover:translate-x-1 transition-transform duration-150"
                  >
                    {device.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: UK Support & Payment Security */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              Customer Support &amp; Hours
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block">WhatsApp Support:</span>
                  <a
                    href={SITE_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-emerald-400 font-semibold"
                  >
                    {SITE_CONFIG.whatsappNumber}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block">Active Hours:</span>
                  <span className="text-slate-200">{SITE_CONFIG.openingHours}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block">Email Inquiries:</span>
                  <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="text-slate-200 hover:text-blue-400">
                    {SITE_CONFIG.supportEmail}
                  </a>
                </div>
              </li>
            </ul>

            {/* Payment security box */}
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2 mt-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Secure UK Payments &amp; Checkout
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">
                All subscriptions processed with 256-bit SSL encryption. Accepts major UK debit/credit cards, PayPal, and bank transfers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle British Gradient Accent Bar */}
      <div className="h-0.5 w-full bg-gradient-to-r from-blue-700 via-white/50 to-red-600 opacity-60"></div>

      {/* Bottom Bar: Legal & Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {SITE_CONFIG.brandName}. All rights reserved. Operating in the United Kingdom.</p>
          <div className="flex flex-wrap items-center gap-4 text-slate-400 font-medium">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <Link to="/refund-policy" className="hover:text-white transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
