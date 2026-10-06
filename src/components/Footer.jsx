import Link from 'next/link';
import { ShieldCheck, MessageSquare, Mail, CheckCircle2 } from 'lucide-react';
import Logo from './Logo';
import { SITE_CONFIG, NAV_LINKS, SUPPORTED_DEVICES } from '../data/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="aii-footer">
      <div className="aii-container">
        <div className="aii-grid">
          {/* Column 1: Brand & About */}
          <div>
            <div className="mb-4">
              <Logo size="default" variant="dark" />
            </div>
            <p className="aii-about-text">
              <strong>Televo IPTV</strong> is the UK’s premier IPTV streaming provider, delivering buffer-free 4K live sports, 50,000+ international television channels, and 200,000+ on-demand movies through our{' '}
              <Link href="/subscription" className="text-[#0854c4] font-semibold underline underline-offset-2 hover:text-[#0A2E66]">
                IPTV subscription plans
              </Link>{' '}
              with instant digital activation and step-by-step{' '}
              <Link href="/guide-installation" className="text-[#0854c4] font-semibold underline underline-offset-2 hover:text-[#0A2E66]">
                device setup guides
              </Link>
              .
            </p>
            <div className="aii-trust-badges">
              <span className="aii-mini-badge">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                UK Server CDN
              </span>
              <span className="aii-mini-badge">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                5-15 Min Setup
              </span>
              <span className="aii-mini-badge">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                7-Day Guarantee
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="aii-title">Quick Navigation</h3>
            <ul className="aii-links">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))}
              <li>
                <Link href="/pricing">Pricing Comparison</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Device Installation Guides */}
          <div>
            <h3 className="aii-title">Installation Guides</h3>
            <ul className="aii-links">
              {SUPPORTED_DEVICES.slice(0, 6).map((device) => (
                <li key={device.slug}>
                  <Link href={`/guide-installation/${device.slug}`}>
                    {device.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Dedicated UK Support & Secure Payments */}
          <div>
            <h3 className="aii-title">UK Customer Care</h3>
            <ul className="aii-contact">
              <li className="flex items-start gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-slate-500 block">WhatsApp Support:</span>
                  <a
                    href={SITE_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 font-bold hover:underline"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-slate-500 block">Support Email:</span>
                  <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="text-blue-700 font-semibold">
                    {SITE_CONFIG.supportEmail}
                  </a>
                </div>
              </li>
            </ul>

            <div className="aii-paybox mt-4">
              <div className="aii-paybox-head">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Encrypted 256-bit Checkout</span>
              </div>
              <p className="text-[11px] text-slate-500 m-0 leading-tight">
                Accepts major UK Debit &amp; Credit Cards, PayPal, and Bank Transfer with instant order verification, covered by our{' '}
                <Link href="/refund-policy" className="text-[#0854c4] font-semibold underline underline-offset-2 hover:text-[#0A2E66]">
                  7-day refund guarantee
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        {/* UK Trust Badge Strip */}
        <div className="aii-social">
          <div className="aii-badges">
            <span className="aii-chip">🇬🇧 Optimized for BT &amp; Virgin Media</span>
            <span className="aii-chip">⚡ 99.9% Stream Stability</span>
            <span className="aii-chip">🔒 No Direct Debit Required</span>
            <span className="aii-chip">💬 British English Support</span>
          </div>
        </div>

        <hr className="aii-divider" />

        {/* Footer Bottom Bar */}
        <div className="aii-bottom">
          <div>
            © {currentYear} {SITE_CONFIG.brandName}. All rights reserved. Registered service in the United Kingdom.
          </div>
          <div className="aii-legal-inline">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms">Terms of Service</Link>
            <span>•</span>
            <Link href="/refund-policy">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

