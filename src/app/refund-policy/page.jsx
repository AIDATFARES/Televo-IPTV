import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import { SITE_CONFIG } from '../../data/config';

export const metadata = {
  title: 'Refund Policy | 7-Day Guarantee | Televo IPTV UK',
  description: 'Televo IPTV UK 7-day money-back guarantee policy. Clear terms and rapid refund process for British customers.',
  alternates: {
    canonical: '/refund-policy/',
  },
};

export default function RefundPolicyPage() {
  const breadcrumbsList = [{ name: 'Refund Policy', path: '/refund-policy' }];

  return (
    <div className="pt-4 pb-12 sm:pt-6 bg-white text-[#2b3340] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbsList} />

        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-[#0A2E66]">7-Day Refund Policy</h1>
          <div className="uk-underline !mx-0"></div>
          <p className="text-xs text-slate-500 mt-2">Last Updated: January 2026</p>
        </div>

        <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#0A2E66] mb-2">1. 7-Day Money-Back Guarantee</h2>
            <p>
              We want all UK customers to experience <strong>Televo IPTV</strong> with absolute confidence. If you encounter persistent technical incompatibility, unresolvable buffering, or service issues during your first 7 days following activation on our{' '}
              <Link href="/subscription" className="text-blue-600 font-semibold underline">
                subscription plans
              </Link>
              , you are entitled to request a full refund.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A2E66] mb-2">2. Troubleshooting First Step</h2>
            <p>
              Before issuing a refund, our UK technical support team will gladly offer assistance via WhatsApp to ensure your app settings (such as hardware decoder selection or cache clearance) are properly configured according to our{' '}
              <Link href="/guide-installation" className="text-blue-600 font-semibold underline">
                installation guides
              </Link>
              , as most playback hiccups can be resolved in under 3 minutes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A2E66] mb-2">3. How to Request a Refund</h2>
            <p>
              To initiate a refund, simply send a message to our <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold underline">WhatsApp Support Team</a> or reach out through our{' '}
              <Link href="/contact" className="text-blue-600 underline font-semibold">
                contact page
              </Link>{' '}
              with your account username or order confirmation.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A2E66] mb-2">4. Processing Timelines</h2>
            <p>
              Refund requests are acknowledged within 24 hours. Once authorized, refunds are processed back to your original payment method (bank card or PayPal) within 2 to 5 business days, depending on your UK banking provider, with no ongoing commitments as outlined in our{' '}
              <Link href="/terms" className="text-blue-600 underline font-semibold">
                terms of service
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
