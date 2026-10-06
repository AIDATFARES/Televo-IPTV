import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import { SITE_CONFIG } from '../../data/config';

export const metadata = {
  title: 'Terms of Service | Televo IPTV UK',
  description: 'Terms of service and subscription terms for Televo IPTV in the United Kingdom.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  const breadcrumbsList = [{ name: 'Terms of Service', path: '/terms' }];

  return (
    <div className="pt-4 pb-12 sm:pt-6 bg-white text-[#2b3340] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbsList} />

        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-[#0A2E66]">Terms of Service</h1>
          <div className="uk-underline !mx-0"></div>
          <p className="text-xs text-slate-500 mt-2">Last Updated: January 2026</p>
        </div>

        <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#0A2E66] mb-2">1. Agreement to Terms</h2>
            <p>
              By accessing the website <strong>televoiptv.co.uk</strong> or purchasing a digital subscription from <strong>Televo IPTV</strong> on our{' '}
              <Link href="/subscription" className="text-[#0854c4] font-semibold underline">
                subscription plans page
              </Link>
              , you agree to be bound by these Terms of Service. If you disagree with any part of these terms, please refrain from using our service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A2E66] mb-2">2. Digital Subscription Delivery</h2>
            <p>
              Televo IPTV provides digital streaming access credentials (Server URL, Xtream Codes credentials, and M3U playlists). Connection details are delivered electronically via WhatsApp or email upon successful payment, and configuration steps are detailed in our{' '}
              <Link href="/guide-installation" className="text-[#0854c4] font-semibold underline">
                installation guides
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A2E66] mb-2">3. Permitted Device Connections</h2>
            <p>
              Standard subscription packages permit 1 active concurrent connection. Multi-screen family subscriptions permit the exact number of concurrent streams specified at purchase (2, 3, or 4 screens), detailed on our{' '}
              <Link href="/pricing" className="text-[#0854c4] font-semibold underline">
                pricing comparison page
              </Link>
              . Sharing credentials beyond the permitted device allowance may result in automated stream restriction.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A2E66] mb-2">4. Technical Requirements</h2>
            <p>
              Subscribers are responsible for ensuring they possess compatible streaming hardware and an internet connection with adequate download bandwidth (minimum 15-25 Mbps recommended for 4K Ultra HD playback). Customers are protected under our{' '}
              <Link href="/refund-policy" className="text-[#0854c4] font-semibold underline">
                7-day refund policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A2E66] mb-2">5. Governing Law</h2>
            <p>
              These terms are governed by the laws applicable in the United Kingdom. Inquiries regarding these terms can be directed via our{' '}
              <Link href="/contact" className="text-[#0854c4] underline font-semibold">
                contact support page
              </Link>{' '}
              or by emailing <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="text-[#0854c4] underline font-semibold">{SITE_CONFIG.supportEmail}</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
