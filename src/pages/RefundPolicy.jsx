import { ShieldCheck, MessageSquare, Mail, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { SITE_CONFIG } from '../data/config';

export default function RefundPolicy() {
  const breadcrumbsList = [{ name: 'Refund Policy', path: '/refund-policy' }];

  return (
    <div className="py-12 bg-slate-950 text-white min-h-screen">
      <SEO
        title="Refund Policy | Televo IPTV UK 7-Day Guarantee"
        description="Learn about the 7-day money-back guarantee at Televo IPTV. Clear guidelines, eligibility requirements, and simple refund procedures."
        canonicalUrl="/refund-policy/"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbsList} />

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/40 text-emerald-300 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            7-Day Money-Back Guarantee
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="text-xs text-slate-400 mt-2">
            Last updated: October 2026 • Televo IPTV Customer Assurance
          </p>
        </div>

        <div className="prose prose-invert max-w-none text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Our 7-Day Money-Back Commitment</h2>
            <p>
              At <strong>Televo IPTV</strong>, we strive to deliver an exceptional streaming experience. We understand that occasionally, device hardware incompatibilities or unique home broadband configurations may hinder performance. For this reason, we provide a transparent <strong>7-day money-back guarantee</strong> on all new subscriptions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Eligibility Criteria</h2>
            <p>To qualify for a full refund under our 7-day policy:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
              <li>Your refund request must be submitted within seven (7) calendar days of your original payment.</li>
              <li>You must have contacted our UK customer support team via WhatsApp or email to attempt basic troubleshooting (such as verifying app configuration, server address, or stream format).</li>
              <li>The account must not have been suspended for violating our single/multi-screen fair use policies.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. How to Request a Refund</h2>
            <p>Requesting a refund is simple and hassle-free:</p>
            <ol className="list-decimal pl-5 space-y-2 text-slate-300">
              <li>Send a message to our WhatsApp support line at <strong>{SITE_CONFIG.whatsappNumber}</strong> or email <strong>{SITE_CONFIG.supportEmail}</strong>.</li>
              <li>Include your username or order reference along with a brief explanation of the technical issue encountered.</li>
              <li>Once verified, our billing team will process your refund to your original payment method. Most bank refunds arrive within 2 to 5 business days.</li>
            </ol>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Renewals &amp; Subsequent Periods</h2>
            <p>
              Because our subscriptions are 100% prepaid and non-recurring, refunds are not issued for terms that have already concluded or for renewal periods once past the initial 7-day onboarding period.
            </p>
          </section>
        </div>

        {/* Quick Action Box */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-white text-base">Questions regarding your account?</h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Chat directly with our UK billing and support team.
            </p>
          </div>
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            Contact WhatsApp Support
          </a>
        </div>
      </div>
    </div>
  );
}
