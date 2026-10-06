import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { SITE_CONFIG } from '../data/config';

export default function PrivacyPolicy() {
  const breadcrumbsList = [{ name: 'Privacy Policy', path: '/privacy-policy' }];

  return (
    <div className="py-12 bg-slate-950 text-white min-h-screen">
      <SEO
        title="Privacy Policy | Televo IPTV UK"
        description="Read the official Privacy Policy for Televo IPTV. Details on data handling, UK GDPR compliance, and privacy practices."
        canonicalUrl="/privacy-policy/"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbsList} />

        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400 mt-2">
            Last updated: October 2026 • Compliant with UK Data Protection Act 2018 &amp; UK GDPR
          </p>
        </div>

        <div className="prose prose-invert max-w-none text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Introduction</h2>
            <p>
              This Privacy Policy explains how <strong>Televo IPTV</strong> ("we", "us", or "our", accessible at {SITE_CONFIG.domain}) collects, utilizes, and protects your personal information when you use our website, communicate with our UK customer support team, or purchase a digital subscription.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
            <p>We only collect the minimal personal information necessary to deliver your digital streaming credentials and customer support:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
              <li><strong>Contact Information:</strong> Your email address and WhatsApp telephone number used to transmit account credentials.</li>
              <li><strong>Technical Setup Information:</strong> Your streaming device type (e.g. Amazon Fire Stick, Samsung Smart TV) and application preference to deliver correct setup guides.</li>
              <li><strong>Payment Data:</strong> All financial transactions are handled securely by regulated third-party processors. We do not store credit or debit card numbers on our servers.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. How We Use Your Data</h2>
            <p>Your information is used strictly to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
              <li>Generate and deliver your unique M3U and Xtream Codes API credentials.</li>
              <li>Provide direct troubleshooting assistance via WhatsApp and email.</li>
              <li>Notify you regarding scheduled maintenance or upcoming subscription renewals.</li>
            </ul>
            <p>We never sell, rent, or trade your personal data to third-party marketing companies.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Data Security</h2>
            <p>
              We implement industry-standard 256-bit SSL encryption across our web infrastructure. Access to customer credentials is strictly restricted to authorized customer support agents for setup and maintenance purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Your UK GDPR Rights</h2>
            <p>
              Under UK GDPR regulations, you have the right to request access to the data we hold regarding you, request corrections, or request deletion of your contact records. To exercise these rights, email us at <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="text-blue-400 hover:underline">{SITE_CONFIG.supportEmail}</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
