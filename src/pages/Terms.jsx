import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { SITE_CONFIG } from '../data/config';

export default function Terms() {
  const breadcrumbsList = [{ name: 'Terms of Service', path: '/terms' }];

  return (
    <div className="py-12 bg-slate-950 text-white min-h-screen">
      <SEO
        title="Terms of Service | Televo IPTV UK"
        description="Review the official Terms of Service for Televo IPTV. Details on prepaid subscriptions, fair usage, device limits, and service conditions."
        canonicalUrl="/terms/"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbsList} />

        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-400 mt-2">
            Effective Date: October 2026 • Governing Law: England &amp; Wales
          </p>
        </div>

        <div className="prose prose-invert max-w-none text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Agreement to Terms</h2>
            <p>
              By accessing the website at {SITE_CONFIG.domain} or purchasing a <strong>Televo IPTV</strong> subscription, you agree to be bound by these Terms of Service. If you disagree with any portion of these terms, please do not use our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Prepaid Subscriptions &amp; Billing</h2>
            <p>
              All subscription tiers (1, 3, 6, and 12 months) are prepaid digital services priced in British Pounds (£). We do not operate continuous direct debits or automated recurring renewals unless explicitly arranged. Upon conclusion of your prepaid term, access expires unless you choose to renew.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Device Connections &amp; Fair Usage</h2>
            <p>
              Standard subscriptions permit one (1) active connection at a time. Sharing credentials across multiple simultaneous displays without a Multi-Screen Family plan may cause temporary line suspension. If you need multi-room viewing, please select a 2, 3, or 4-screen plan.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Broadband Requirements</h2>
            <p>
              Smooth streaming requires adequate internet bandwidth. We recommend a minimum download rate of 10-15 Mbps for High Definition (HD) and 25-30 Mbps for 4K Ultra HD. We cannot be held liable for degradation caused by your local broadband provider or internal home Wi-Fi interference.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Service Availability</h2>
            <p>
              While we strive to maintain uninterrupted service, scheduled server maintenance or upstream network rerouting may occasionally take place. We provide active technical assistance via WhatsApp to mitigate disruptions promptly.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">6. Contact Information</h2>
            <p>
              For any questions regarding these Terms, please contact our UK support team at <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="text-blue-400 hover:underline">{SITE_CONFIG.supportEmail}</a> or on WhatsApp at {SITE_CONFIG.whatsappNumber}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
