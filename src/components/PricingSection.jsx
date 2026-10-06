'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Tv, ChevronRight } from 'lucide-react';

export default function PricingSection({ title, subtitle }) {
  // Device counter: 1, 2, 3, or 4 simultaneous connections
  const [deviceCount, setDeviceCount] = useState(1);

  // Base plan specifications (for 1 device)
  // Multiplied dynamically: 2 devices = x2, 3 devices = x3, 4 devices = x4
  const basePlans = [
    {
      id: '1m',
      duration: '1 Month',
      months: 1,
      basePrice: 14.99,
      baseOriginalPrice: 19.99,
      ctaLabel: 'GET 1 MONTH PLAN',
      accessLabel: '1 Month Access',
      badge: 'TRIAL PASS',
      highlight: 'Flexible Monthly IPTV Pass — No Contract',
      urgency: '⚡ Active UK Delivery — 5-15 Mins',
      isPopular: false,
      features: [
        'Crystal-Clear 4K UHD & Full HD live streams',
        'Complete 7-day UK electronic programme guide (EPG)',
        'Over 200,000 VOD movies & complete box sets',
        'Compatible with Fire Stick, Smart TVs, Android & iOS',
        'Anti-Freeze streaming servers with 99.9% uptime',
        '7-day money-back satisfaction guarantee',
        'Prompt UK customer assistance via WhatsApp',
      ],
    },
    {
      id: '3m',
      duration: '3 Months',
      months: 3,
      basePrice: 24.99,
      baseOriginalPrice: 34.99,
      ctaLabel: 'GET 3 MONTHS PLAN',
      accessLabel: '3 Months Access',
      badge: 'SAVE 22%',
      highlight: 'Popular Quarterly IPTV Pass — Just £8.33 / Mo',
      urgency: '⚡ Active UK Delivery — 5-15 Mins',
      isPopular: false,
      features: [
        'Crystal-Clear 4K UHD & Full HD live streams',
        'Complete 7-day UK electronic programme guide (EPG)',
        'Over 200,000 VOD movies & complete box sets',
        'Compatible with Fire Stick, Smart TVs, Android & iOS',
        'Anti-Freeze streaming servers with 99.9% uptime',
        '7-day money-back satisfaction guarantee',
        'Prompt UK customer assistance via WhatsApp',
      ],
    },
    {
      id: '6m',
      duration: '6 Months',
      months: 6,
      basePrice: 39.99,
      baseOriginalPrice: 54.99,
      ctaLabel: 'GET 6 MONTHS PLAN',
      accessLabel: '6 Months Access',
      badge: 'SAVE 44%',
      highlight: 'Half-Year IPTV Pass — Just £6.66 / Mo',
      urgency: '⚡ Active UK Delivery — 5-15 Mins',
      isPopular: false,
      features: [
        'Crystal-Clear 4K UHD & Full HD live streams',
        'Complete 7-day UK electronic programme guide (EPG)',
        'Over 200,000 VOD movies & complete box sets',
        'Compatible with Fire Stick, Smart TVs, Android & iOS',
        'Anti-Freeze streaming servers with 99.9% uptime',
        '7-day money-back satisfaction guarantee',
        'Prompt UK customer assistance via WhatsApp',
      ],
    },
    {
      id: '12m',
      duration: '12 Months',
      months: 12,
      basePrice: 59.99,
      baseOriginalPrice: 89.99,
      ctaLabel: 'GET 1 YEAR PLAN',
      accessLabel: '1 Year Access',
      badge: 'MOST POPULAR',
      highlight: 'Ultimate Annual IPTV Pass — Just £5.00 / Mo',
      urgency: '🔥 Most Chosen by UK Households',
      isPopular: true,
      features: [
        '4K Ultra HD & 60 FPS sports streams',
        'Complete UK & International live channels',
        'Full 7-day UK EPG programme guide',
        'Over 200,000 VOD movies & series updated weekly',
        'Free setup walkthrough via WhatsApp',
        '7-day money-back satisfaction guarantee',
        'VIP Priority UK customer assistance',
      ],
    },
  ];

  const handleDeviceChange = (num) => {
    if (num >= 1 && num <= 4) {
      setDeviceCount(num);
    }
  };

  return (
    <section id="aii-pricing" className="py-12 bg-white">
      <div className="wrap">
        <h2>{title || 'Televo IPTV UK Subscription Plans'}</h2>
        <div className="uk-underline"></div>
        <p className="sub">
          {subtitle || (
            <>
              Prepaid, transparent IPTV pricing in British Pounds (GBP). Enjoy 4K Ultra HD streams, 7-day EPG guides, and contract-free streaming across all your devices, backed by our{' '}
              <Link href="/refund-policy" className="text-blue-600 font-semibold hover:underline">
                7-day money-back guarantee
              </Link>
              .
            </>
          )}
        </p>

        {/* Trust Badges Row */}
        <div className="trust-row">
          <span className="trust-pill">
            <span className="dot"></span> Instant Digital Activation (5-15 Mins)
          </span>
          <span className="trust-pill">
            <span className="dot"></span> Risk-Free 7-Day Money-Back Guarantee
          </span>
          <span className="trust-pill">
            <span className="dot"></span> Dedicated British WhatsApp Support
          </span>
        </div>

        {/* Device Counter Selector Bar */}
        <div className="device-counter-section">
          <div className="counter-header">
            <Tv className="w-4 h-4 text-blue-600 inline-block mr-1" />
            <span className="counter-title">
              SELECT SIMULTANEOUS SCREEN CONNECTIONS:
            </span>
          </div>

          <div className="counter-controls">
            <button
              type="button"
              className="counter-step-btn"
              onClick={() => handleDeviceChange(deviceCount - 1)}
              disabled={deviceCount === 1}
              aria-label="Decrease number of devices"
              title="Decrease devices"
            >
              −
            </button>

            <div className="counter-buttons-grid">
              {[1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => handleDeviceChange(num)}
                  className={`device-pill-btn ${deviceCount === num ? 'active' : ''}`}
                >
                  <span className="device-num">{num}</span>
                  <span className="device-label">{num === 1 ? 'Device' : 'Devices'}</span>
                </button>
              ))}
            </div>

            <button
              type="button"
              className="counter-step-btn"
              onClick={() => handleDeviceChange(deviceCount + 1)}
              disabled={deviceCount === 4}
              aria-label="Increase number of devices"
              title="Increase devices"
            >
              +
            </button>
          </div>

          <p className="device-counter-hint">
            {deviceCount === 1 ? (
              <span>
                Standard individual package for <strong>1 primary device</strong> (
                <Link href="/guide-installation/samsung-smart-tv" className="text-blue-600 font-semibold hover:underline">
                  Smart TV
                </Link>
                ,{' '}
                <Link href="/guide-installation/firestick" className="text-blue-600 font-semibold hover:underline">
                  Fire Stick
                </Link>
                , Mobile, or PC).
              </span>
            ) : (
              <span>
                Multi-Screen household package: stream simultaneously across <strong>{deviceCount} different screens</strong> in separate rooms with independent channels, fully supported by our{' '}
                <Link href="/guide-installation" className="text-blue-600 font-semibold hover:underline">
                  device setup guides
                </Link>
                .
              </span>
            )}
          </p>
        </div>

        {/* 4 Duration Cards Grid (1 Month, 3 Months, 6 Months, 12 Months) */}
        <div className="grid">
          {basePlans.map((plan) => {
            // Price calculation strictly according to user rules:
            // 1 device = basePrice, 2 devices = x2, 3 devices = x3, 4 devices = x4
            const finalPrice = (plan.basePrice * deviceCount).toFixed(2);
            const finalOriginalPrice = (plan.baseOriginalPrice * deviceCount).toFixed(2);

            // Monthly equivalent per screen
            const monthlyPerScreen = (plan.basePrice / plan.months).toFixed(2);
            const monthlyEqLabel = deviceCount === 1
              ? `£${monthlyPerScreen}/mo eq.`
              : `£${monthlyPerScreen}/mo per screen`;

            const encodedPlan = encodeURIComponent(
              `${plan.duration} Plan (${deviceCount} ${deviceCount === 1 ? 'Device' : 'Devices'}) for £${finalPrice}`
            );
            const whatsappOrderUrl = `https://wa.me/447882781998?text=Hello%20Televo%20IPTV%2C%20I%20would%20like%20to%20order%20the%20${encodedPlan}`;
            const askWhatsappUrl = `https://wa.me/447882781998?text=Hello%20Televo%20IPTV%2C%20I%20have%20a%20question%20about%20the%20${encodeURIComponent(plan.duration)}%20Plan%20(${deviceCount}%20${deviceCount === 1 ? 'Device' : 'Devices'})`;

            const connectionFeature = deviceCount === 1
              ? '1 Active connection'
              : `${deviceCount} Simultaneous connections`;

            return (
              <div
                key={`${deviceCount}-${plan.id}`}
                className={`card ${plan.isPopular ? 'featured' : ''}`}
              >
                {/* Badge / Ribbon */}
                {plan.badge && (
                  plan.isPopular ? (
                    <div className="ribbon">{plan.badge}</div>
                  ) : (
                    <div className="best-deal">{plan.badge}</div>
                  )
                )}

                {/* Card Head */}
                <div className="head">
                  <div className="flex flex-col">
                    <span className="term uppercase tracking-wide">{plan.duration}</span>
                    <span className="text-xs text-blue-200 font-semibold mt-0.5 opacity-90">
                      {plan.accessLabel}
                    </span>
                  </div>
                  <div>
                    <span className="price">£{finalPrice}</span>
                    <span className="price-old">£{finalOriginalPrice}</span>
                  </div>
                </div>

                {/* Monthly Equivalent & Device Tag */}
                <div className="text-xs font-bold text-blue-200/90 py-1 px-2.5 rounded-lg bg-black/20 my-1 flex items-center justify-between">
                  <span>{monthlyEqLabel}</span>
                  <span>{deviceCount} {deviceCount === 1 ? 'Device Connection' : 'Devices Connection'}</span>
                </div>

                {/* Highlight */}
                <div className="highlight">{plan.highlight}</div>

                {/* Urgency */}
                <div className="urgency">{plan.urgency}</div>

                {/* Features List */}
                <ul>
                  <li>{connectionFeature}</li>
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx}>{feature}</li>
                  ))}
                </ul>

                {/* Primary Action Button (Matching Exact Spec: GET X PLAN ›) */}
                <div className="mt-auto pt-4">
                  <a
                    href={whatsappOrderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`plan-cta-btn ${plan.isPopular ? 'featured-btn' : ''}`}
                  >
                    <span>{plan.ctaLabel}</span>
                    <ChevronRight className="w-4 h-4 shrink-0 stroke-[2.5]" />
                  </a>

                  {/* Ask on WhatsApp Link */}
                  <a
                    href={askWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="plan-ask-whatsapp"
                  >
                    <svg
                      className="w-4 h-4 text-[#25D366] shrink-0 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <span>Ask on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
