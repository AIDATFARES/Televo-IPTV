import { useEffect } from 'react';
import { SITE_CONFIG } from '../data/config';

export default function SEO({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = `${SITE_CONFIG.domain}/og-image.svg`,
  schema = null,
}) {
  const fullTitle = title
    ? `${title} | ${SITE_CONFIG.brandName}`
    : `${SITE_CONFIG.brandName} UK | Premium IPTV Subscription & Streaming Service`;

  const metaDesc =
    description ||
    'Discover Televo IPTV in the UK. Explore reliable IPTV subscriptions in GBP, compatible devices, step-by-step setup guides, and dedicated UK customer support.';

  const canonical = canonicalUrl ? `${SITE_CONFIG.domain}${canonicalUrl}` : SITE_CONFIG.domain;

  useEffect(() => {
    // Document title
    document.title = fullTitle;

    // Helper to update or create meta tags
    const updateMeta = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update standard meta
    updateMeta('description', metaDesc);
    updateMeta('robots', 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large');

    // Update Open Graph
    updateMeta('og:title', fullTitle, true);
    updateMeta('og:description', metaDesc, true);
    updateMeta('og:type', ogType, true);
    updateMeta('og:url', canonical, true);
    updateMeta('og:site_name', SITE_CONFIG.brandName, true);
    updateMeta('og:image', ogImage, true);
    updateMeta('og:locale', 'en_GB', true);

    // Update Twitter
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', fullTitle);
    updateMeta('twitter:description', metaDesc);
    updateMeta('twitter:image', ogImage);

    // Update Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // Inject JSON-LD Schema
    const scriptId = 'televo-json-ld';
    let scriptElement = document.getElementById(scriptId);

    if (schema) {
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = scriptId;
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(schema);
    } else if (scriptElement) {
      scriptElement.remove();
    }

    // Scroll to top on page navigation
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [fullTitle, metaDesc, canonical, ogType, ogImage, schema]);

  return null;
}
