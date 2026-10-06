import '../index.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { SITE_CONFIG } from '../data/config';

export const metadata = {
  metadataBase: new URL('https://www.televoiptv.co.uk'),
  title: {
    default: 'Televo IPTV UK | Premium IPTV Subscription & Streaming Service',
    template: '%s | Televo IPTV UK',
  },
  description:
    'Discover Televo IPTV in the UK. Explore reliable 4K IPTV subscriptions in GBP, compatible devices, step-by-step setup guides, and dedicated UK customer support.',
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-video-preview': -1,
    'max-image-preview': 'large',
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.brandName,
    title: 'Televo IPTV UK | Premium IPTV Subscription & Streaming Service',
    description:
      'Discover Televo IPTV in the UK. Explore reliable IPTV subscriptions in GBP, compatible devices, and dedicated UK customer support on WhatsApp.',
    images: [
      {
        url: `${SITE_CONFIG.domain}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: 'Televo IPTV UK Streaming Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Televo IPTV UK | Premium IPTV Subscription & Streaming Service',
    description:
      'Discover Televo IPTV in the UK. Explore reliable IPTV subscriptions in GBP, compatible devices, and dedicated UK customer support.',
    images: [`${SITE_CONFIG.domain}/og-image.svg`],
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_CONFIG.domain}/#organization`,
        name: SITE_CONFIG.brandName,
        alternateName: SITE_CONFIG.shortBrand,
        url: SITE_CONFIG.domain,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_CONFIG.domain}/favicon.svg`,
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: SITE_CONFIG.whatsappNumber,
            contactType: 'customer support',
            availableLanguage: 'English',
            areaServed: 'GB',
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_CONFIG.domain}/#website`,
        url: SITE_CONFIG.domain,
        name: SITE_CONFIG.brandName,
        description:
          'Televo IPTV UK - Premium IPTV subscription and streaming service in the United Kingdom.',
        publisher: {
          '@id': `${SITE_CONFIG.domain}/#organization`,
        },
      },
    ],
  };

  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="bg-white text-[#2b3340] antialiased selection:bg-[#0A2E66] selection:text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
