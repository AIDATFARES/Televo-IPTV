import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import { SITE_CONFIG } from '../../data/config';

export const metadata = {
  title: 'Privacy Policy | Televo IPTV UK',
  description: 'Televo IPTV UK privacy policy. Learn how we handle digital credentials, communications, and customer data with 256-bit SSL encryption.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbsList = [{ name: 'Privacy Policy', path: '/privacy-policy' }];

  return (
    <div className="pt-4 pb-12 sm:pt-6 bg-white text-[#2b3340] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbsList} />

        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-[#0A2E66]">Privacy Policy</h1>
          <div className="uk-underline !mx-0"></div>
          <p className="text-xs text-slate-500 mt-2">Last Updated: January 2026</p>
        </div>

        <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#0A2E66] mb-2">1. Overview &amp; Data Commitment</h2>
            <p>
              At <strong>Televo IPTV</strong> (operated as Televo IPTV UK), we are committed to respecting and protecting the privacy of our website visitors and subscribers. This policy outlines what information we collect when ordering our{' '}
              <Link href="/subscription" className="text-blue-600 font-semibold underline">
                IPTV subscriptions
              </Link>
              , how it is processed, and our strict privacy safeguards.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A2E66] mb-2">2. Information We Collect</h2>
            <p>
              We only collect data strictly necessary to fulfill your digital subscription order and provide customer support via our{' '}
              <Link href="/contact" className="text-blue-600 font-semibold underline">
                support team
              </Link>
              :
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Contact details such as email address and WhatsApp telephone number for credential delivery.</li>
              <li>
                Streaming hardware device preference (e.g.{' '}
                <Link href="/guide-installation/firestick" className="text-blue-600 font-semibold hover:underline">
                  Firestick
                </Link>
                ,{' '}
                <Link href="/guide-installation/samsung-smart-tv" className="text-blue-600 font-semibold hover:underline">
                  Smart TV
                </Link>
                , Android) to send targeted{' '}
                <Link href="/guide-installation" className="text-blue-600 font-semibold hover:underline">
                  setup guides
                </Link>
                .
              </li>
              <li>Encrypted transaction confirmation receipts (we never store raw debit or credit card details).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A2E66] mb-2">3. No Traffic Logs Policy</h2>
            <p>
              Televo IPTV operates a strict zero-activity logging policy regarding your viewing habits. We do not monitor, store, or log the specific television channels, video streams, or content titles you watch across our{' '}
              <Link href="/about" className="text-blue-600 font-semibold underline">
                streaming network
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A2E66] mb-2">4. Data Security</h2>
            <p>
              All communication between your browser and our website is protected by modern 256-bit SSL encryption. Digital connection credentials are communicated securely via encrypted messaging channels, backed by our{' '}
              <Link href="/refund-policy" className="text-blue-600 font-semibold underline">
                7-day guarantee
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A2E66] mb-2">5. Contact Us Regarding Privacy</h2>
            <p>
              If you have any questions or requests regarding your personal information, reach out through our{' '}
              <Link href="/contact" className="text-blue-600 underline font-semibold">
                contact desk
              </Link>{' '}
              or email our data coordinator at <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="text-blue-600 underline font-semibold">{SITE_CONFIG.supportEmail}</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
