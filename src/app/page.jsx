'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  Zap,
  MessageSquare,
  ShieldCheck,
  Tv,
  Film,
  Sparkles,
  MonitorPlay,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Maximize2,
  X,
} from 'lucide-react';
import {
  SITE_CONFIG,
  PRICING_PLANS,
  MULTI_SCREEN_PLANS,
} from '../data/config';
import PricingSection from '../components/PricingSection';

export default function HomePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [activePreview, setActivePreview] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const stripRef = useRef(null);
  const pauseTimeoutRef = useRef(null);

  const pauseAutoScroll = (duration = 3500) => {
    setIsPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, duration);
  };

  const scrollStrip = (direction) => {
    if (stripRef.current) {
      pauseAutoScroll(4000);
      const halfWidth = stripRef.current.scrollWidth / 2;
      if (direction === 'left' && stripRef.current.scrollLeft <= 10 && halfWidth > 0) {
        stripRef.current.scrollLeft += halfWidth;
      }
      const scrollAmount = Math.min(stripRef.current.clientWidth * 0.8, 680);
      stripRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Continuous right-to-left auto-scrolling
  useEffect(() => {
    const container = stripRef.current;
    if (!container) return;

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let animationFrameId;
    let lastTime = performance.now();
    const speed = 40; // 40 pixels per second (smooth, comfortable reading speed)

    const step = (now) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      if (!isPaused && !activePreview && container) {
        const halfWidth = container.scrollWidth / 2;
        if (halfWidth > 0) {
          if (container.scrollLeft >= halfWidth) {
            container.scrollLeft -= halfWidth;
          }
          container.scrollLeft += speed * delta;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused, activePreview]);

  // 13 Live TV & VOD WebP Previews
  const vodPreviews = [
    {
      id: 1,
      title: 'Top Series & Box Sets',
      category: 'VOD Series',
      badge: '4K Ultra HD',
      image: '/tv-strip/tv-preview-1.webp',
      alt: 'Top Rated 4K TV Series and Box Sets on Televo IPTV',
    },
    {
      id: 2,
      title: 'Cinema Blockbusters',
      category: 'Latest Movies',
      badge: 'Cinema 4K',
      image: '/tv-strip/tv-preview-2.webp',
      alt: 'Latest Hollywood and UK Cinema Movies in 4K',
    },
    {
      id: 3,
      title: 'Family & Superhero Hits',
      category: 'Disney+ & Marvel',
      badge: 'UHD 60FPS',
      image: '/tv-strip/tv-preview-3.webp',
      alt: 'Disney+ Marvel and Animation Series Library',
    },
    {
      id: 4,
      title: 'Trending Web & Drama Shows',
      category: 'Prime & HBO Max',
      badge: 'HDR Multi-Audio',
      image: '/tv-strip/tv-preview-4.webp',
      alt: 'Amazon Prime and HBO Max Drama TV Series',
    },
    {
      id: 5,
      title: 'Electronic Program Guide (EPG)',
      category: 'Live UK TV',
      badge: '7-Day Catchup',
      image: '/tv-strip/tv-preview-5.webp',
      alt: 'Interactive 7-day TV Guide and EPG interface',
    },
    {
      id: 6,
      title: 'Intuitive Smarters Dashboard',
      category: 'App Interface',
      badge: 'Xtream / M3U',
      image: '/tv-strip/tv-preview-6.webp',
      alt: 'Televo IPTV Smarters Dashboard and channel navigation',
    },
    {
      id: 7,
      title: 'UK BBC & ITV National Channels',
      category: 'UK Live TV',
      badge: '1080p FHD',
      image: '/tv-strip/tv-preview-7.webp',
      alt: 'BBC One, Two, ITV 1-4 and Channel 4 Live in Full HD',
    },
    {
      id: 8,
      title: '24/7 Rolling News & Documentaries',
      category: 'UK & World News',
      badge: 'Live FHD',
      image: '/tv-strip/tv-preview-8.webp',
      alt: 'Sky News, BBC News 24, and International News Feeds',
    },
    {
      id: 9,
      title: 'Sky Sports Premier League VIP',
      category: 'UK Live Sports',
      badge: '4K 60FPS',
      image: '/tv-strip/tv-preview-9.webp',
      alt: 'Sky Sports Premier League, Football and Main Event Live',
    },
    {
      id: 10,
      title: 'Live Matchday & DAZN PPV Feeds',
      category: 'Premier League',
      badge: 'Zero Buffering',
      image: '/tv-strip/tv-preview-10.webp',
      alt: 'Premier League Match Feeds and Live Stadium Coverage',
    },
    {
      id: 11,
      title: 'Formula 1 & Motorsport Onboard',
      category: 'Motorsport Live',
      badge: 'F1 Pitlane Feeds',
      image: '/tv-strip/tv-preview-11.webp',
      alt: 'Formula 1 Live Grand Prix and Driver Onboard Cameras',
    },
    {
      id: 12,
      title: 'UEFA Champions League Replays',
      category: 'European Football',
      badge: 'Match Replays',
      image: '/tv-strip/tv-preview-12.webp',
      alt: 'UEFA Champions League and Europa League Match Catch-Up',
    },
    {
      id: 13,
      title: 'Major International Sports & PPV',
      category: 'PPV Events',
      badge: 'Fight Nights',
      image: '/tv-strip/tv-preview-13.webp',
      alt: 'UFC, Boxing PPV and Worldwide Sports Stadium Feeds',
    },
  ];

  // Duplicated for seamless infinite right-to-left auto-scroll
  const allVodPreviews = [...vodPreviews, ...vodPreviews];

  // 8 Compatible Apps matching the 8 cards in #logosNL
  const appsList = [
    { name: 'IPTV Smarters Pro', platform: 'Fire Stick • Android • iOS' },
    { name: 'TiviMate IPTV Player', platform: 'Android TV • Fire Stick 4K' },
    { name: 'IBO Player Pro', platform: 'Samsung Tizen • LG webOS' },
    { name: 'Smart IPTV (SIPTV)', platform: 'Samsung & LG Smart TVs' },
    { name: 'XCIPTV Player', platform: 'Android • Smart Box • Fire TV' },
    { name: 'GSE Smart IPTV', platform: 'Apple iOS • Apple TV' },
    { name: 'IPTVX / Apple TV', platform: 'Apple TV 4K • iPhone • iPad' },
    { name: 'VLC Media Player', platform: 'Windows PC • Mac OS • Linux' },
  ];

  // 7 Compatible Devices for Hero section
  const heroDevices = [
    {
      name: 'Smart TV',
      icon: (
        <svg className="w-7 h-7 text-white" viewBox="0 0 28 24" fill="none">
          <rect x="2" y="2" width="24" height="15" rx="3.5" fill="#ffffff" />
          <path d="M6 17.5v3M22 17.5v3" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: 'Laptop/PC',
      icon: (
        <svg className="w-7 h-7 text-white" viewBox="0 0 28 24" fill="none">
          <rect x="5" y="3" width="18" height="12" rx="3" fill="#ffffff" />
          <rect x="2" y="16.5" width="24" height="4.5" rx="2.2" fill="#ffffff" />
        </svg>
      ),
    },
    {
      name: 'Android',
      icon: (
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.5 15.3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-11 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m11.4-6l2-3.5a.42.42 0 00-.15-.57.42.42 0 00-.57.15l-2 3.5C15.6 8.4 13.8 8 12 8s-3.6.4-5.1.9L4.8 5.4a.42.42 0 00-.57-.15.42.42 0 00-.15.57l2 3.5C2.7 11.3 0 14.9 0 19h24c0-4.1-2.7-7.7-6.1-9.7" />
        </svg>
      ),
    },
    {
      name: 'Mac',
      icon: (
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 1.01-2.85-.92.04-2.04.62-2.7 1.39-.58.67-1.09 1.74-1.04 2.78 1.03.08 2.11-.57 2.73-1.32z" />
        </svg>
      ),
    },
    {
      name: 'Phones',
      icon: (
        <svg className="w-6 h-7 text-white" viewBox="0 0 20 28" fill="none">
          <rect x="2" y="2" width="16" height="24" rx="4.5" fill="#ffffff" />
          <circle cx="10" cy="22" r="1.3" fill="#0A182F" />
          <rect x="7" y="4.5" width="6" height="1" rx="0.5" fill="#0A182F" />
        </svg>
      ),
    },
    {
      name: 'FireStick',
      icon: (
        <svg className="w-12 h-7 text-white" viewBox="0 0 52 24" fill="none">
          <text x="0" y="14" fill="#ffffff" fontSize="13" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="-0.5px">fire</text>
          <text x="26" y="14" fill="#ffffff" fontSize="13" fontWeight="400" fontFamily="system-ui, -apple-system, sans-serif">tv</text>
          <path d="M4 18c9 3.8 26 3.8 35 0" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M37.5 16.5l2 1.5-2 1.5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: 'Formuler',
      icon: (
        <svg className="w-8 h-7 text-white" viewBox="0 0 32 24" fill="currentColor">
          <path d="M9 4h20l-1.8 3.6H11L9 4z" />
          <path d="M7 8.8h16.5l-1.8 3.6H9.3l-3.8 7.6H0L7 8.8z" />
        </svg>
      ),
    },
  ];

  // UK Customer Reviews matching .rs-proof-nl grid
  const reviews = [
    {
      name: 'James H.',
      city: 'London',
      text: 'Premier League streaming is flawless in 4K on Virgin Media. No buffering during big matches, and EPG is completely accurate.',
    },
    {
      name: 'Oliver T.',
      city: 'Manchester',
      text: 'Setup on my Amazon Fire Stick 4K took under 8 minutes with TiviMate. Outstanding picture clarity and fast British support on WhatsApp.',
    },
    {
      name: 'Sophie B.',
      city: 'Birmingham',
      text: 'The 7-day EPG guide works seamlessly on our Samsung Smart TV. Easiest setup process we have ever experienced.',
    },
    {
      name: 'Callum M.',
      city: 'Glasgow',
      text: 'Switched from an unreliable provider that kept freezing during Champions League fixtures. Televo IPTV has been completely stable.',
    },
    {
      name: 'Harry W.',
      city: 'Leeds',
      text: 'Got the multi-room family subscription so the children can watch their films while I enjoy live sport in the lounge. Superb value in GBP.',
    },
    {
      name: 'George K.',
      city: 'Bristol',
      text: 'Delivered in under 10 minutes to my WhatsApp. The support agent walked me through installing IPTV Smarters step by step.',
    },
    {
      name: 'Liam D.',
      city: 'Liverpool',
      text: 'Picture quality in 60 FPS is just like traditional satellite TV. Highly recommended for live football and boxing events.',
    },
    {
      name: 'Emily R.',
      city: 'Edinburgh',
      text: 'Comprehensive collection of British box sets and on-demand movies with clear English subtitles. 10/10 streaming service.',
    },
  ];

  // Primary FAQ list for .faq-nl-iptv
  const homeFaqs = [
    {
      q: 'What is Televo IPTV and how does it operate in the UK?',
      a: (
        <>
          Televo IPTV is a dedicated British television streaming service that delivers live TV channels, Premier League football, international entertainment, and on-demand movies directly over your home broadband connection. It requires no satellite dish or engineer appointment—simply install a compatible player app on your Smart TV, Fire Stick, or mobile with our{' '}
          <Link href="/guide-installation" className="text-[#1D7AF2] font-semibold hover:underline">
            step-by-step setup guides
          </Link>
          , enter your Televo login credentials, and start streaming immediately.
        </>
      ),
    },
    {
      q: 'Which devices and apps are compatible with Televo IPTV?',
      a: (
        <>
          Televo IPTV supports all major streaming hardware used in the UK, including{' '}
          <Link href="/guide-installation/firestick" className="text-[#1D7AF2] font-semibold hover:underline">
            Amazon Fire TV Stick
          </Link>
          ,{' '}
          <Link href="/guide-installation/samsung-smart-tv" className="text-[#1D7AF2] font-semibold hover:underline">
            Samsung Smart TV
          </Link>
          ,{' '}
          <Link href="/guide-installation/lg-smart-tv" className="text-[#1D7AF2] font-semibold hover:underline">
            LG Smart TV
          </Link>
          , Android TV, Apple TV, iPhone, iPad, and PCs. Popular compatible apps include IPTV Smarters Pro, TiviMate, IBO Player, and XCIPTV.
        </>
      ),
    },
    {
      q: 'How quickly will I receive my login details after ordering?',
      a: (
        <>
          Your Televo IPTV digital connection details (including Server URL, Username, Password, and M3U playlist link) are generated and delivered via WhatsApp and email typically within 5 to 15 minutes of payment confirmation on our{' '}
          <Link href="/subscription" className="text-[#1D7AF2] font-semibold hover:underline">
            IPTV subscription page
          </Link>
          .
        </>
      ),
    },
    {
      q: 'Does Televo IPTV work well with UK broadband providers?',
      a: (
        <>
          Yes. Our high-bandwidth streaming servers are routed through European edge nodes optimized for UK ISPs such as BT, Virgin Media, Sky, TalkTalk, EE, Vodafone, and Plusnet to ensure smooth playback, as explained on our{' '}
          <Link href="/about" className="text-[#1D7AF2] font-semibold hover:underline">
            about us page
          </Link>
          .
        </>
      ),
    },
    {
      q: 'Can I watch on multiple televisions at the same time?',
      a: (
        <>
          Our standard subscription plans include 1 active connection. For households requiring simultaneous viewing on multiple screens in different rooms, we provide dedicated{' '}
          <Link href="/pricing" className="text-[#1D7AF2] font-semibold hover:underline">
            Multi-Screen Family Plans
          </Link>{' '}
          (supporting 2, 3, or 4 simultaneous devices).
        </>
      ),
    },
    {
      q: 'What is your 7-day money-back guarantee policy?',
      a: (
        <>
          We want every UK viewer to try Televo IPTV with absolute confidence. If our service does not meet your technical expectations within your first 7 days of activation, simply review our{' '}
          <Link href="/refund-policy" className="text-[#1D7AF2] font-semibold hover:underline">
            7-day refund policy
          </Link>{' '}
          and message our UK customer support team on WhatsApp for a prompt refund.
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* ─── 1. HERO SECTION (.aii-hero) ─── */}
      <section className="aii-hero">
        <div className="aii-wrap">
          <div className="aii-inner">
            <div className="aii-content">
              {/* Status Badge with UK pulse dot */}
              <div className="aii-badge">
                <i></i>
                <span>Televo IPTV UK Active Delivery — Instant 5-15 Min Setup 🇬🇧</span>
              </div>

              {/* Main Title with t1 and t2 */}
              <h1 className="aii-title">
                <span className="t1">Televo IPTV — The UK’s Premier IPTV Service</span>
                <span className="t2">Ultra HD 4K Live TV, Premier Sports &amp; Massive On-Demand Streaming</span>
              </h1>

              {/* Subtitle */}
              <p className="aii-sub">
                Discover a seamless streaming experience with <Link href="/about" className="font-bold underline decoration-blue-400 hover:text-blue-300">Televo IPTV</Link>. Unlock 50,000+ live television channels, non-stop football and motorsport action, complete 7-day UK EPG schedules, and over <Link href="#vod-rails" className="font-semibold underline decoration-blue-400 hover:text-blue-300">200,000 on-demand titles</Link> in 4K UHD. Enjoy contract-free viewing with our <Link href="/subscription" className="font-semibold underline decoration-blue-400 hover:text-blue-300">UK IPTV plans</Link> tailored for British broadband with zero hardware required.
              </p>

              {/* CTA Row (Exact spec: [Get a free trial] [Choose Your IPTV Plan >]) */}
              <div className="aii-cta-row">
                <a
                  href="https://wa.me/447882781998?text=Hello%20Televo%20IPTV%2C%20I%20would%20like%20to%20request%20a%20free%20trial."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-trial-green"
                >
                  <svg
                    className="w-5 h-5 text-slate-950 shrink-0 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>Start Free Trial</span>
                </a>
                <a href="#aii-pricing" className="btn-plan-dark">
                  <span>Explore IPTV Plans</span>
                  <ChevronRight className="w-4 h-4 text-[#00E5FF] stroke-[3] ml-1 shrink-0" />
                </a>
              </div>

              {/* Compatible Devices Strip */}
              <div className="hero-devices-strip">
                {heroDevices.map((dev, i) => (
                  <div key={i} className="hero-device-item">
                    <div className="hero-device-icon">{dev.icon}</div>
                    <span className="hero-device-name">{dev.name}</span>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="trust">
                <span>🔒 Instant Secure Activation</span>
                <span>•</span>
                <span>🇬🇧 Virgin, BT &amp; Sky High-Speed Ready</span>
                <span>•</span>
                <span>⚡ 99.9% Anti-Freeze Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. VOD & 4K CINEMA (#vod-rails) ─── */}
      <section id="vod-rails">
        <div className="wrap">
          <h2>Televo IPTV On-Demand: 200,000+ 4K Cinema Movies &amp; TV Box Sets</h2>
          <div className="uk-underline"></div>
          <p className="seo">
            Preview live app interfaces from the Televo IPTV network across our{' '}
            <Link href="/guide-installation" className="text-[#1D7AF2] font-semibold hover:underline">
              supported streaming apps
            </Link>
            . Explore over 50,000 live channels, cinema-grade 4K VOD blockbusters, complete box sets, and ultra-smooth 60 FPS sports streams with our{' '}
            <Link href="/subscription" className="text-[#1D7AF2] font-semibold hover:underline">
              high-speed IPTV packages
            </Link>{' '}
            designed for zero buffering.
          </p>

          {/* 4 Stats Cards */}
          <div className="vod-stats-grid">
            <div className="vod-stat-box">
              <span className="vod-stat-val">4K &amp; FHD</span>
              <span className="vod-stat-lbl">Ultra High Definition Streams</span>
            </div>
            <div className="vod-stat-box">
              <span className="vod-stat-val">50,000+</span>
              <span className="vod-stat-lbl">Live TV Channels</span>
            </div>
            <div className="vod-stat-box">
              <span className="vod-stat-val">200,000+</span>
              <span className="vod-stat-lbl">VOD Movies &amp; Series</span>
            </div>
            <div className="vod-stat-box">
              <span className="vod-stat-val">99.9%</span>
              <span className="vod-stat-lbl">Infrastructure Server Uptime</span>
            </div>
          </div>

          {/* Image Strip Controls Header */}
          <div className="vod-strip-header">
            <div className="vod-strip-badge">
              <span>🎬 200,000+ 4K UHD Movies &amp; Box Sets</span>
            </div>
            <div className="vod-strip-nav">
              <button
                type="button"
                onClick={() => scrollStrip('left')}
                className="vod-nav-btn"
                aria-label="Scroll left"
                title="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollStrip('right')}
                className="vod-nav-btn"
                aria-label="Scroll right"
                title="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Horizontal Image Strip with Right-to-Left Auto-Scroll */}
          <div
            className="vod-strip-container"
            ref={stripRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => pauseAutoScroll(2500)}
          >
            {allVodPreviews.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="vod-strip-card"
                onClick={() => setActivePreview(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActivePreview(item);
                  }
                }}
              >
                <div className="vod-strip-thumb">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    width={1280}
                    height={720}
                  />
                  <div className="vod-strip-overlay">
                    <span className="vod-overlay-zoom">
                      <Maximize2 className="w-4 h-4" />
                      <span>Preview</span>
                    </span>
                  </div>
                  <span className="vod-badge-top">{item.badge}</span>
                </div>
                <div className="vod-strip-info">
                  <span className="vod-card-cat">{item.category}</span>
                  <h3 className="vod-card-title">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>


        </div>

        {/* Modal / Lightbox for Preview */}
        {activePreview && (
          <div
            className="vod-modal-backdrop"
            onClick={() => setActivePreview(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="vod-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="vod-modal-close"
                onClick={() => setActivePreview(null)}
                aria-label="Close preview"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="vod-modal-media">
                <img
                  src={activePreview.image}
                  alt={activePreview.alt}
                  width={1280}
                  height={720}
                />
              </div>
              <div className="vod-modal-footer">
                <div>
                  <span className="vod-modal-cat">{activePreview.category}</span>
                  <h4 className="vod-modal-title">{activePreview.title}</h4>
                </div>
                <span className="vod-modal-badge">{activePreview.badge}</span>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ─── 3. 3-STEP ORDER PROCESS (.aii-buy) ─── */}
      <section className="aii-buy">
        <div className="wrap">
          <h2 className="h2">How to Start Streaming with Televo IPTV in 3 Simple Steps</h2>
          <div className="uk-underline"></div>
          <p className="sub">
            Set up your <Link href="/subscription" className="text-[#1D7AF2] font-semibold hover:underline">Televo IPTV subscription</Link> in minutes on any television, media streamer, or mobile device through our <Link href="/guide-installation" className="text-[#1D7AF2] font-semibold hover:underline">step-by-step setup tutorials</Link>—no engineer visits, dishes, or contracts required.
          </p>

          <div className="aii-steps">
            <div className="aii-step">
              <div className="aii-num">1</div>
              <h3 className="text-lg font-black text-[#0A2E66] mb-2">Select Your IPTV Plan</h3>
              <p>
                Choose the <Link href="/pricing" className="text-[#1D7AF2] font-semibold hover:underline">subscription length and screen package</Link> (1, 3, 6, or 12 months) that matches your household. Order securely in GBP with no recurring direct debits or contract lock-ins.
              </p>
            </div>

            <div className="aii-step">
              <div className="aii-num">2</div>
              <h3 className="text-lg font-black text-[#0A2E66] mb-2">Receive Instant Login Details</h3>
              <p>
                Our team generates your unique Televo IPTV credentials—including <Link href="/guide-installation" className="text-[#1D7AF2] font-semibold hover:underline">M3U playlists and Xtream Codes API details</Link>—delivered straight to WhatsApp or email in 5 to 15 minutes.
              </p>
            </div>

            <div className="aii-step">
              <div className="aii-num">3</div>
              <h3 className="text-lg font-black text-[#0A2E66] mb-2">Connect &amp; Stream in 4K Ultra HD</h3>
              <p>
                Launch your favourite player on your <Link href="/guide-installation/firestick" className="text-[#1D7AF2] font-semibold hover:underline">Fire Stick</Link>, <Link href="/guide-installation/samsung-smart-tv" className="text-[#1D7AF2] font-semibold hover:underline">Smart TV</Link>, smartphone, or PC, input your credentials, and start enjoying buffer-free live sports and entertainment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. COMBINED SUBSCRIPTION PRICING WITH DEVICE COUNTER (#aii-pricing) ─── */}
      <PricingSection />

      {/* ─── 5. CORE ADVANTAGES (.aii-sec3) ─── */}
      <section className="aii-sec3">
        <div className="wrap">
          <h2 className="h2">Why UK Viewers Choose Televo IPTV for Everyday Streaming</h2>
          <div className="uk-underline"></div>
          <p className="sub">
            Built specifically for UK households seeking dependable <Link href="/subscription" className="text-[#1D7AF2] font-semibold hover:underline">4K IPTV entertainment</Link> without satellite dishes, long-term contracts, or overpriced cable packages.
          </p>

          <div className="trust">
            <span className="badge">🇬🇧 Optimized for BT, Virgin Media, Sky, TalkTalk &amp; EE</span>
            <span className="flag-chip">⭐ Rated 4.9/5 by UK Customers</span>
          </div>

          <div className="grid">
            <div className="card">
              <h3>
                <span className="tick">✓</span>
                Crystal-Clear 4K UHD &amp; 60 FPS Sports Streams
              </h3>
              <p>
                Watch matchday football, championship boxing, and <Link href="#vod-rails" className="text-[#1D7AF2] font-semibold hover:underline">cinema releases</Link> in fluid 60 FPS with brilliant HDR clarity and zero screen tearing.
              </p>
            </div>

            <div className="card">
              <h3>
                <span className="tick">✓</span>
                Anti-Freeze Network &amp; 99.9% Uptime
              </h3>
              <p>
                Our multi-cluster European server network with intelligent load balancing prevents buffering, detailed further in our <Link href="/blog/how-to-fix-iptv-buffering-troubleshooting-guide" className="text-[#1D7AF2] font-semibold hover:underline">anti-buffering guide</Link>.
              </p>
            </div>

            <div className="card">
              <h3>
                <span className="tick">✓</span>
                Flexible M3U &amp; Xtream Codes API
              </h3>
              <p>
                Standardized login credentials delivered within minutes. Connect easily with any certified player application using our <Link href="/guide-installation" className="text-[#1D7AF2] font-semibold hover:underline">installation instructions</Link>.
              </p>
            </div>

            <div className="card">
              <h3>
                <span className="tick">✓</span>
                Interactive 7-Day UK TV EPG Guide
              </h3>
              <p>
                Stay ahead with real-time programme schedules across entertainment, news, and sports channels, supported by our comprehensive <Link href="/faq" className="text-[#1D7AF2] font-semibold hover:underline">EPG &amp; catch-up FAQ</Link>.
              </p>
            </div>

            <div className="card">
              <h3>
                <span className="tick">✓</span>
                Universal Multi-Device Freedom
              </h3>
              <p>
                Stream seamlessly across <Link href="/guide-installation/firestick" className="text-[#1D7AF2] font-semibold hover:underline">Fire Stick</Link>, <Link href="/guide-installation/samsung-smart-tv" className="text-[#1D7AF2] font-semibold hover:underline">Samsung TV</Link>, <Link href="/guide-installation/lg-smart-tv" className="text-[#1D7AF2] font-semibold hover:underline">LG webOS</Link>, Apple TV, Android, and PC.
              </p>
            </div>

            <div className="card">
              <h3>
                <span className="tick">✓</span>
                7-Day Money-Back Satisfaction Guarantee
              </h3>
              <p>
                Experience Televo IPTV risk-free under our transparent <Link href="/refund-policy" className="text-[#1D7AF2] font-semibold hover:underline">7-day refund policy</Link>. If technical specialists cannot resolve an issue, receive a prompt refund.
              </p>
            </div>
          </div>

          <a href="#aii-pricing" className="cta">
            ⚡ Explore Televo IPTV Subscription Plans
          </a>
        </div>
      </section>

      {/* ─── 7. HOW IT WORKS (.aii-how) ─── */}
      <section className="aii-how">
        <div className="wrap">
          <h2>How the Televo IPTV Streaming Infrastructure Works</h2>
          <div className="uk-underline"></div>
          <p className="sub">
            Modern cloud architecture and dedicated UK server routing deliver high-fidelity television streams straight to your internet-connected devices, detailed on our <Link href="/about" className="text-[#1D7AF2] font-semibold hover:underline">about us page</Link>.
          </p>

          <div className="aii-grid">
            <div className="aii-card">
              <div className="aii-num">1</div>
              <h3>High-Bandwidth Cloud Distribution</h3>
              <p>
                Streams are distributed through enterprise European edge clusters engineered specifically for British broadband networks (BT, Virgin Media, Sky, and EE) to eliminate latency and bandwidth throttling, as described in our <Link href="/about" className="text-[#1D7AF2] font-semibold hover:underline">infrastructure summary</Link>.
              </p>
              <ul>
                <li>Direct fiber backbone connectivity</li>
                <li>Adaptive bitrate auto-scaling</li>
                <li>Zero hardware contracts</li>
              </ul>
            </div>

            <div className="aii-card">
              <div className="aii-num">2</div>
              <h3>Universal Xtream Codes &amp; M3U Architecture</h3>
              <p>
                Televo IPTV supports industry-standard streaming protocols, granting you total freedom to connect your favourite player app without proprietary hardware restrictions via our <Link href="/guide-installation" className="text-[#1D7AF2] font-semibold hover:underline">universal setup guides</Link>.
              </p>
              <ul>
                <li>Compatible with IPTV Smarters &amp; TiviMate</li>
                <li>Full EPG electronic guide sync</li>
                <li>Catch-up TV integration</li>
              </ul>
            </div>

            <div className="aii-card">
              <div className="aii-num">3</div>
              <h3>Dedicated UK Customer &amp; Technical Support</h3>
              <p>
                From initial player installation to fine-tuning stream buffer settings, our friendly UK support team guides you personally via WhatsApp 7 days a week through our <Link href="/contact" className="text-[#1D7AF2] font-semibold hover:underline">contact &amp; customer care desk</Link>.
              </p>
              <ul>
                <li>Instant response times</li>
                <li>Free setup troubleshooting</li>
                <li>Friendly British English guidance</li>
              </ul>
            </div>
          </div>

          <div className="aii-cta">
            <a href="#aii-pricing" className="aii-btn price">
              View IPTV Plans (GBP)
            </a>
            <Link href="/guide-installation" className="aii-btn faq">
              Explore Setup Guides
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 8. COMPARISON TABLE (.rs-compare) ─── */}
      <section className="rs-compare">
        <div className="comparison-section">
          <div className="section-header">
            <h2>How Televo IPTV Compares to Standard Streaming Services</h2>
            <div className="uk-underline"></div>
          </div>

          <div className="comparison-container">
            <div className="comparison-scroll">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Feature &amp; Service Criteria</th>
                    <th className="rs-header">Televo IPTV UK</th>
                    <th>Standard Providers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Instant Digital Activation</td>
                    <td className="check-cell">✔ 5 – 15 Minutes</td>
                    <td className="x-cell">✖ Hours or Days</td>
                  </tr>
                  <tr>
                    <td>UK Broadband Optimisation (BT, Virgin, Sky)</td>
                    <td className="check-cell">✔ Anti-Buffering CDN</td>
                    <td className="x-cell">✖ Frequent Freezing</td>
                  </tr>
                  <tr>
                    <td>British English Customer Support</td>
                    <td className="check-cell">✔ WhatsApp Daily</td>
                    <td className="x-cell">✖ Automated / Slow Bots</td>
                  </tr>
                  <tr>
                    <td>7-Day Money-Back Guarantee</td>
                    <td className="check-cell">✔ Risk-Free Refund</td>
                    <td className="x-cell">✖ No Refunds Given</td>
                  </tr>
                  <tr>
                    <td>Complete 7-Day UK EPG Schedule</td>
                    <td className="check-cell">✔ Included Free</td>
                    <td className="x-cell">✖ Unstable / Missing</td>
                  </tr>
                  <tr>
                    <td>Multi-Screen Family Options</td>
                    <td className="check-cell">✔ 2, 3 &amp; 4 Screens</td>
                    <td className="x-cell">✖ 1 Screen Only</td>
                  </tr>
                  <tr>
                    <td>4K UHD &amp; 60 FPS Sports Feeds</td>
                    <td className="check-cell">✔ Crystal-Clear Clarity</td>
                    <td className="x-cell">✖ Compressed 720p</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="user-benefits">
            <div className="benefit-card">
              <Zap className="w-8 h-8 text-[#0A2E66] mx-auto mb-2" />
              <h3>Ultra-Low Latency &amp; High Speed</h3>
              <p>
                Optimized British data routing delivers smooth live football with zero buffering, available on all our{' '}
                <Link href="/subscription" className="text-[#1D7AF2] font-semibold hover:underline">
                  annual and monthly subscriptions
                </Link>
                .
              </p>
            </div>
            <div className="benefit-card">
              <ShieldCheck className="w-8 h-8 text-[#0A2E66] mx-auto mb-2" />
              <h3>Clear, Fixed Pricing in British Pounds</h3>
              <p>
                Prepaid subscriptions in GBP with no direct debits, hidden fees, or contract lock-ins, detailed on our{' '}
                <Link href="/pricing" className="text-[#1D7AF2] font-semibold hover:underline">
                  pricing page
                </Link>
                .
              </p>
            </div>
            <div className="benefit-card">
              <MessageSquare className="w-8 h-8 text-[#0A2E66] mx-auto mb-2" />
              <h3>Dedicated British Customer Care</h3>
              <p>
                Real human support specialists available 7 days a week on WhatsApp to assist with setup, apps, and inquiries through our{' '}
                <Link href="/contact" className="text-[#1D7AF2] font-semibold hover:underline">
                  customer care team
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. COMPATIBLE APPS SECTION (#logosNL) ─── */}
      <section id="logosNL">
        <div className="w">
          <h2>Connect Televo IPTV on Your Preferred Streaming Apps</h2>
          <div className="uk-underline"></div>
          <p>
            Televo IPTV integrates effortlessly with all top-tier IPTV player apps. Use your Xtream Codes credentials or M3U playlist URL on your television, tablet, or phone with our{' '}
            <Link href="/guide-installation" className="text-[#1D7AF2] font-semibold hover:underline">
              device installation guides
            </Link>
            .
          </p>

          <div className="g">
            {appsList.map((app, i) => (
              <div key={i} className="t">
                <MonitorPlay className="w-5 h-5 text-[#1D7AF2] shrink-0" />
                <div className="text-left">
                  <div className="text-sm font-black text-[#0A2E66]">{app.name}</div>
                  <div className="text-[11px] text-slate-500 font-semibold">{app.platform}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/guide-installation"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0A2E66] hover:text-[#1D7AF2] transition-colors"
            >
              Need step-by-step guidance for your television? Visit the Televo IPTV Setup Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 11. UK CUSTOMER REVIEWS (.rs-proof-nl) ─── */}
      <section className="rs-proof-nl">
        <div className="rs-proof-inner">
          <h2 className="rs-proof-title">What UK Subscribers Say About Televo IPTV</h2>
          <div className="uk-underline"></div>
          <p className="rs-proof-sub">
            Discover why thousands of households across London, Manchester, Birmingham, Glasgow, Leeds, and beyond rely on{' '}
            <Link href="/subscription" className="text-emerald-300 font-semibold underline hover:text-white">
              Televo IPTV subscriptions
            </Link>{' '}
            for their daily entertainment.
          </p>

          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rs-wa-cta"
          >
            💬 Order or Ask a Question on WhatsApp
          </a>

          <div className="rs-t-grid">
            {reviews.map((rev, i) => (
              <div key={i} className="rs-t-card">
                <div className="rs-t-top">
                  <span className="rs-stars">★★★★★</span>
                  <span className="rs-chip">Verified UK User</span>
                </div>
                <p className="rs-txt">"{rev.text}"</p>
                <div className="rs-author">
                  <span>{rev.name}</span>
                  <span className="rs-loc">{rev.city}, UK</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 12. FAQ ACCORDION + SIDEBAR (.faq-nl-iptv) ─── */}
      <section className="faq-nl-iptv">
        <div className="faq-wrap">
          <div className="faq-head">
            <h2>Frequently Asked Questions About Televo IPTV</h2>
            <div className="uk-underline"></div>
            <p>
              Everything you need to know about{' '}
              <Link href="/pricing" className="text-[#1D7AF2] font-semibold hover:underline">
                Televo IPTV plans
              </Link>
              ,{' '}
              <Link href="/guide-installation" className="text-[#1D7AF2] font-semibold hover:underline">
                compatible streaming apps
              </Link>
              , broadband stability, and quick activation.
            </p>
          </div>

          <div className="faq-grid">
            <div className="faq-col">
              {homeFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="faq-item">
                    <summary
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                      className="cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#0A2E66] transition-transform duration-200 shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </summary>
                    {isOpen && <div className="faq-body">{faq.a}</div>}
                  </div>
                );
              })}
            </div>

            <div className="cta-box">
              <h3>Need Personal Help Setting Up Televo IPTV?</h3>
              <p>
                Our UK technical specialists are on standby via WhatsApp from 08:00 to 23:00 daily to help you configure any television, streaming stick, or media player via our{' '}
                <Link href="/contact" className="text-blue-200 font-semibold underline hover:text-white">
                  dedicated support desk
                </Link>
                .
              </p>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn email-btn"
              >
                💬 Chat on WhatsApp
              </a>
              <Link href="/guide-installation" className="cta-btn-secondary">
                📖 View All Installation Guides
              </Link>
              <ul className="cta-points">
                <li>Average WhatsApp response time: 3 mins</li>
                <li>Free setup help for Smart TVs &amp; Fire Stick</li>
                <li>M3U playlist &amp; Xtream Codes verification</li>
                <li>7-day money-back guarantee support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 13. FINAL PARALLAX CTA BANNER (.final-cta-nl) ─── */}
      <section className="final-cta-nl">
        <div className="final-cta-inner">
          <h2 className="final-cta-title">
            Upgrade Your Entertainment with <span className="hi">Televo IPTV</span> Today
          </h2>
          <p className="final-cta-sub">
            Join thousands of happy UK viewers enjoying 50,000+ live channels, 4K sports, and{' '}
            <Link href="#vod-rails" className="text-cyan-300 font-semibold underline hover:text-white">
              200,000+ on-demand titles
            </Link>{' '}
            with instant activation and our risk-free{' '}
            <Link href="/refund-policy" className="text-cyan-300 font-semibold underline hover:text-white">
              7-day money-back guarantee
            </Link>
            .
          </p>
          <a href="#aii-pricing" className="final-cta-btn">
            ⚡ Choose Your Televo IPTV Plan
          </a>
        </div>
      </section>
    </div>
  );
}
