'use client';

import { useState } from 'react';
import { Tv, Zap, Check, MessageSquare, ShieldCheck, Flame, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function PricingSection({ title, subtitle, showBreadcrumbs = false }) {
  // Device counter: 1, 2, 3, or 4 simultaneous connections
  const [deviceCount, setDeviceCount] = useState(1);

  // Pricing matrix across 4 durations (1, 3, 6, 12 months) and 4 device counts
  const pricingData = {
    1: [
      {
        duration: '1 Month',
        accessLabel: '1 Month Access',
        badge: 'TRIAL PASS',
        badgeType: 'trial',
        price: 11.99,
        originalPrice: 14.99,
        monthlyEq: '£11.99/mo eq.',
        highlight: 'Flexible Monthly Streaming',
        urgency: '⚡ Active UK Delivery — 5-15 Mins',
        isPopular: false,
        features: [
          '1 Active connection',
          'Full HD & 4K Ultra HD streams',
          'Full 7-Day UK EPG guide',
          'Comprehensive VOD movies & series',
          'Compatible with Smart TVs & Fire Stick',
          'Anti-Freeze UK-optimised routing',
          '7-day money-back guarantee',
          'UK WhatsApp customer support',
        ],
      },
      {
        duration: '3 Months',
        accessLabel: '3 Months Access',
        badge: 'SAVE 22%',
        badgeType: 'discount',
        price: 27.99,
        originalPrice: 34.99,
        monthlyEq: '£9.33/mo eq.',
        highlight: 'Flexible Quarterly Access',
        urgency: '⚡ Active UK Delivery — 5-15 Mins',
        isPopular: false,
        features: [
          '1 Active connection',
          'Full HD & 4K Ultra HD streams',
          'Full 7-Day UK EPG guide',
          'Comprehensive VOD movies & series',
          'Compatible with Smart TVs & Fire Stick',
          'Anti-Freeze UK-optimised routing',
          '7-day money-back guarantee',
          'UK WhatsApp customer support',
        ],
      },
      {
        duration: '6 Months',
        accessLabel: '6 Months Access',
        badge: 'SAVE 44%',
        badgeType: 'discount',
        price: 39.99,
        originalPrice: 54.99,
        monthlyEq: '£6.66/mo eq.',
        highlight: 'Half-Year Entertainment Pass',
        urgency: '⚡ Active UK Delivery — 5-15 Mins',
        isPopular: false,
        features: [
          '1 Active connection',
          'Full HD & 4K Ultra HD streams',
          'Full 7-Day UK EPG guide',
          'Comprehensive VOD movies & series',
          'Compatible with Smart TVs & Fire Stick',
          'Anti-Freeze UK-optimised routing',
          '7-day money-back guarantee',
          'UK WhatsApp customer support',
        ],
      },
      {
        duration: '12 Months',
        accessLabel: '1 Year Access',
        badge: 'MOST POPULAR',
        badgeType: 'popular',
        price: 49.99,
        originalPrice: 79.99,
        monthlyEq: '£4.16/mo eq.',
        highlight: 'Best Value — Just £4.16 / Month',
        urgency: '🔥 Most Chosen by UK Households',
        isPopular: true,
        features: [
          '1 Active connection',
          '4K Ultra HD & 60 FPS sports streams',
          'Complete UK & International live channels',
          'Full 7-Day UK EPG programme guide',
          'Massive VOD library updated weekly',
          'Free setup walkthrough via WhatsApp',
          '7-day money-back guarantee',
          'VIP Priority UK customer assistance',
        ],
      },
    ],
    2: [
      {
        duration: '1 Month',
        accessLabel: '1 Month Access',
        badge: 'DUO TRIAL',
        badgeType: 'trial',
        price: 18.99,
        originalPrice: 24.99,
        monthlyEq: '£9.50/mo per screen',
        highlight: 'Family Duo — 2 Rooms Streaming',
        urgency: '⚡ Watch in Living Room & Bedroom',
        isPopular: false,
        features: [
          '2 Simultaneous connections',
          'Full HD & 4K Ultra HD streams',
          'Independent playlists for each room',
          'Full 7-Day UK EPG on all devices',
          'Compatible with Smart TVs & Fire Stick',
          'Anti-Freeze UK-optimised routing',
          '7-day money-back guarantee',
          'UK WhatsApp customer support',
        ],
      },
      {
        duration: '3 Months',
        accessLabel: '3 Months Access',
        badge: 'SAVE 25%',
        badgeType: 'discount',
        price: 39.99,
        originalPrice: 49.99,
        monthlyEq: '£6.66/mo per screen',
        highlight: 'Quarterly Multi-Room Access',
        urgency: '⚡ Watch in Living Room & Bedroom',
        isPopular: false,
        features: [
          '2 Simultaneous connections',
          'Full HD & 4K Ultra HD streams',
          'Independent playlists for each room',
          'Full 7-Day UK EPG on all devices',
          'Compatible with Smart TVs & Fire Stick',
          'Anti-Freeze UK-optimised routing',
          '7-day money-back guarantee',
          'UK WhatsApp customer support',
        ],
      },
      {
        duration: '6 Months',
        accessLabel: '6 Months Access',
        badge: 'SAVE 45%',
        badgeType: 'discount',
        price: 54.99,
        originalPrice: 69.99,
        monthlyEq: '£4.58/mo per screen',
        highlight: 'Half-Year Family Duo Pass',
        urgency: '⚡ Watch in Living Room & Bedroom',
        isPopular: false,
        features: [
          '2 Simultaneous connections',
          'Full HD & 4K Ultra HD streams',
          'Independent playlists for each room',
          'Full 7-Day UK EPG on all devices',
          'Compatible with Smart TVs & Fire Stick',
          'Anti-Freeze UK-optimised routing',
          '7-day money-back guarantee',
          'UK WhatsApp customer support',
        ],
      },
      {
        duration: '12 Months',
        accessLabel: '1 Year Access',
        badge: 'MOST POPULAR',
        badgeType: 'popular',
        price: 74.99,
        originalPrice: 99.99,
        monthlyEq: '£3.12/mo per screen',
        highlight: 'Family Duo — 2 Active Streams',
        urgency: '🔥 Most Popular Family Choice',
        isPopular: true,
        features: [
          '2 Simultaneous connections',
          'Full 4K Ultra HD & 60 FPS sports streams',
          'Independent playlists for each room',
          'Complete sports & cinema catalogue',
          'Compatible with Smart TVs & Fire Stick',
          'Free setup walkthrough via WhatsApp',
          '7-day money-back guarantee',
          'VIP Priority UK customer assistance',
        ],
      },
    ],
    3: [
      {
        duration: '1 Month',
        accessLabel: '1 Month Access',
        badge: 'TRIO TRIAL',
        badgeType: 'trial',
        price: 24.99,
        originalPrice: 32.99,
        monthlyEq: '£8.33/mo per screen',
        highlight: 'Trio Screens for Household',
        urgency: '⚡ Whole-Home Streaming Solution',
        isPopular: false,
        features: [
          '3 Simultaneous connections',
          'Full HD & 4K Ultra HD streams',
          '3 Independent device configurations',
          'Full 7-Day UK EPG on all devices',
          'Compatible with Smart TVs & Fire Stick',
          'Anti-Freeze UK-optimised routing',
          '7-day money-back guarantee',
          'UK WhatsApp customer support',
        ],
      },
      {
        duration: '3 Months',
        accessLabel: '3 Months Access',
        badge: 'SAVE 28%',
        badgeType: 'discount',
        price: 49.99,
        originalPrice: 64.99,
        monthlyEq: '£5.55/mo per screen',
        highlight: 'Quarterly Whole-Home Access',
        urgency: '⚡ Whole-Home Streaming Solution',
        isPopular: false,
        features: [
          '3 Simultaneous connections',
          'Full HD & 4K Ultra HD streams',
          '3 Independent device configurations',
          'Full 7-Day UK EPG on all devices',
          'Compatible with Smart TVs & Fire Stick',
          'Anti-Freeze UK-optimised routing',
          '7-day money-back guarantee',
          'UK WhatsApp customer support',
        ],
      },
      {
        duration: '6 Months',
        accessLabel: '6 Months Access',
        badge: 'SAVE 48%',
        badgeType: 'discount',
        price: 69.99,
        originalPrice: 89.99,
        monthlyEq: '£3.88/mo per screen',
        highlight: 'Half-Year Whole Home Pass',
        urgency: '⚡ Whole-Home Streaming Solution',
        isPopular: false,
        features: [
          '3 Simultaneous connections',
          'Full HD & 4K Ultra HD streams',
          '3 Independent device configurations',
          'Full 7-Day UK EPG on all devices',
          'Compatible with Smart TVs & Fire Stick',
          'Anti-Freeze UK-optimised routing',
          '7-day money-back guarantee',
          'UK WhatsApp customer support',
        ],
      },
      {
        duration: '12 Months',
        accessLabel: '1 Year Access',
        badge: 'MOST POPULAR',
        badgeType: 'popular',
        price: 94.99,
        originalPrice: 129.99,
        monthlyEq: '£2.63/mo per screen',
        highlight: 'Family Trio — Most Popular Multi-Room',
        urgency: '🔥 Whole-Home Streaming Solution',
        isPopular: true,
        features: [
          '3 Simultaneous connections',
          '4K UHD & 60 FPS sports coverage',
          '3 Independent device configurations',
          'Full 7-Day UK EPG on all devices',
          'Works on Smart TV, Fire Stick, Tablets',
          'Free setup walkthrough via WhatsApp',
          '7-day money-back guarantee',
          'VIP Priority UK customer assistance',
        ],
      },
    ],
    4: [
      {
        duration: '1 Month',
        accessLabel: '1 Month Access',
        badge: 'MAX TRIAL',
        badgeType: 'trial',
        price: 29.99,
        originalPrice: 39.99,
        monthlyEq: '£7.50/mo per screen',
        highlight: 'Ultimate 4 Screens Everywhere',
        urgency: '⭐ Maximum Multi-Device Freedom',
        isPopular: false,
        features: [
          '4 Simultaneous active connections',
          'Full HD & 4K Ultra HD streams',
          'Independent viewing in every room',
          'Full 7-Day UK EPG on all devices',
          'Works across all compatible apps',
          'Anti-Freeze UK-optimised routing',
          '7-day money-back guarantee',
          'UK WhatsApp customer support',
        ],
      },
      {
        duration: '3 Months',
        accessLabel: '3 Months Access',
        badge: 'SAVE 30%',
        badgeType: 'discount',
        price: 59.99,
        originalPrice: 79.99,
        monthlyEq: '£5.00/mo per screen',
        highlight: 'Quarterly Ultimate Household',
        urgency: '⭐ Maximum Multi-Device Freedom',
        isPopular: false,
        features: [
          '4 Simultaneous active connections',
          'Full HD & 4K Ultra HD streams',
          'Independent viewing in every room',
          'Full 7-Day UK EPG on all devices',
          'Works across all compatible apps',
          'Anti-Freeze UK-optimised routing',
          '7-day money-back guarantee',
          'UK WhatsApp customer support',
        ],
      },
      {
        duration: '6 Months',
        accessLabel: '6 Months Access',
        badge: 'SAVE 50%',
        badgeType: 'discount',
        price: 84.99,
        originalPrice: 109.99,
        monthlyEq: '£3.54/mo per screen',
        highlight: 'Half-Year Ultimate Freedom',
        urgency: '⭐ Maximum Multi-Device Freedom',
        isPopular: false,
        features: [
          '4 Simultaneous active connections',
          'Full HD & 4K Ultra HD streams',
          'Independent viewing in every room',
          'Full 7-Day UK EPG on all devices',
          'Works across all compatible apps',
          'Anti-Freeze UK-optimised routing',
          '7-day money-back guarantee',
          'UK WhatsApp customer support',
        ],
      },
      {
        duration: '12 Months',
        accessLabel: '1 Year Access',
        badge: 'BEST VALUE',
        badgeType: 'popular',
        price: 114.99,
        originalPrice: 159.99,
        monthlyEq: '£2.39/mo per screen',
        highlight: 'Ultimate Household — 4 Active Streams',
        urgency: '⭐ Maximum Multi-Device Freedom',
        isPopular: true,
        features: [
          '4 Simultaneous active connections',
          'Full 4K UHD quality across all screens',
          'Independent viewing in every room',
          'Complete UK & International channels',
          'Dedicated VIP priority support',
          'Works on Smart TV, Fire Stick, Mobile, PC',
          '7-day money-back guarantee',
          'VIP Priority UK customer assistance',
        ],
      },
    ],
  };

  const currentPlans = pricingData[deviceCount] || pricingData[1];

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
          {subtitle ||
            'Simple, transparent pricing in British Pounds (GBP). No long-term commitments, no direct debits, and no hidden fees.'}
        </p>

        {/* Trust Badges Row */}
        <div className="trust-row">
          <span className="trust-pill">
            <span className="dot"></span> Instant Setup Delivery (5-15 mins)
          </span>
          <span className="trust-pill">
            <span className="dot"></span> 7-Day Money-Back Guarantee
          </span>
          <span className="trust-pill">
            <span className="dot"></span> Dedicated UK WhatsApp Support
          </span>
        </div>

        {/* Device Counter Selector Bar */}
        <div className="device-counter-section">
          <div className="counter-header">
            <Tv className="w-4 h-4 text-blue-600 inline-block mr-1" />
            <span className="counter-title">
              SELECT NUMBER OF SIMULTANEOUS DEVICE CONNECTIONS:
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
                Standard individual package for <strong>1 primary device</strong> (Smart TV, Fire Stick, Mobile, or PC).
              </span>
            ) : (
              <span>
                Multi-Screen household package: stream simultaneously across <strong>{deviceCount} different screens</strong> in separate rooms with independent channels.
              </span>
            )}
          </p>
        </div>

        {/* 4 Duration Cards Grid (1 Month, 3 Months, 6 Months, 12 Months) */}
        <div className="grid">
          {currentPlans.map((plan, index) => {
            const encodedPlan = encodeURIComponent(
              `${plan.duration} Plan (${deviceCount} ${deviceCount === 1 ? 'Device' : 'Devices'}) for £${plan.price.toFixed(2)}`
            );
            const whatsappUrl = `https://wa.me/447882781998?text=Hello%20Televo%20IPTV%2C%20I%20would%20like%20to%20order%20the%20${encodedPlan}`;

            return (
              <div
                key={`${deviceCount}-${plan.duration}`}
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
                    <span className="price">£{plan.price.toFixed(2)}</span>
                    <span className="price-old">£{plan.originalPrice.toFixed(2)}</span>
                  </div>
                </div>

                {/* Monthly Equivalent & Device Tag */}
                <div className="text-xs font-bold text-blue-200/90 py-1 px-2.5 rounded-lg bg-black/20 my-1 flex items-center justify-between">
                  <span>{plan.monthlyEq}</span>
                  <span>{deviceCount} {deviceCount === 1 ? 'Device Connection' : 'Devices Connection'}</span>
                </div>

                {/* Highlight */}
                <div className="highlight">{plan.highlight}</div>

                {/* Urgency */}
                <div className="urgency">{plan.urgency}</div>

                {/* Features List */}
                <ul>
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx}>{feature}</li>
                  ))}
                </ul>

                {/* Order CTA */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta"
                >
                  Order via WhatsApp
                </a>

                {/* Security Badge */}
                <div className="pay">🔒 Secure UK Checkout • Instant Delivery</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
