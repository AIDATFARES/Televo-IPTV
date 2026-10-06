/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/blog/televo-iptv-firestick-setup-guide',
        destination: '/blog/how-to-setup-iptv-on-firestick',
        permanent: true,
      },
      {
        source: '/blog/how-to-set-up-televo-iptv-samsung-smart-tv',
        destination: '/blog/how-to-setup-iptv-on-samsung-smart-tv',
        permanent: true,
      },
      {
        source: '/blog/how-to-fix-iptv-buffering-troubleshooting-guide',
        destination: '/blog/how-to-fix-iptv-buffering',
        permanent: true,
      },
      {
        source: '/blog/best-iptv-players-smart-tv-uk',
        destination: '/blog/best-iptv-players-for-smart-tv',
        permanent: true,
      },
      {
        source: '/blog/complete-uk-iptv-setup-guide-televo',
        destination: '/blog/complete-uk-iptv-setup-guide',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
