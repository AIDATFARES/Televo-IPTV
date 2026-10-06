'use client';

import { useState } from 'react';
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
} from 'lucide-react';
import {
  SITE_CONFIG,
  PRICING_PLANS,
  MULTI_SCREEN_PLANS,
} from '../data/config';
import PricingSection from '../components/PricingSection';

export default function HomePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

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
      a: 'Televo IPTV is a dedicated British television streaming service that delivers live TV channels, Premier League football, international entertainment, and on-demand movies directly over your home broadband connection. It requires no satellite dish or engineer appointment—simply install a compatible player app on your Smart TV, Fire Stick, or mobile, enter your Televo login credentials, and start streaming immediately.',
    },
    {
      q: 'Which devices and apps are compatible with Televo IPTV?',
      a: 'Televo IPTV supports all major streaming hardware used in the UK, including Amazon Fire TV Stick, Samsung Smart TV (Tizen), LG Smart TV (webOS), Android TV, Apple TV, iPhone, iPad, Android tablets, Windows PCs, and Mac. Popular compatible apps include IPTV Smarters Pro, TiviMate, IBO Player, XCIPTV, and Smart IPTV.',
    },
    {
      q: 'How quickly will I receive my login details after ordering?',
      a: 'Your Televo IPTV digital connection details (including Server URL, Username, Password, and M3U playlist link) are generated and delivered via WhatsApp and email typically within 5 to 15 minutes of payment confirmation.',
    },
    {
      q: 'Does Televo IPTV work well with UK broadband providers?',
      a: 'Yes. Our high-bandwidth streaming servers are routed through European edge nodes optimized for UK ISPs such as BT, Virgin Media, Sky, TalkTalk, EE, Vodafone, and Plusnet to ensure smooth playback and low latency without throttling.',
    },
    {
      q: 'Can I watch on multiple televisions at the same time?',
      a: 'Our standard subscription plans include 1 active connection. For households requiring simultaneous viewing on multiple screens in different rooms, we provide dedicated Multi-Screen Family Plans (supporting 2, 3, or 4 simultaneous devices).',
    },
    {
      q: 'What is your 7-day money-back guarantee policy?',
      a: 'We want every UK viewer to try Televo IPTV with absolute confidence. If our service does not meet your technical expectations within your first 7 days of activation, simply message our UK customer support team on WhatsApp for a prompt refund.',
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
                <span>Televo IPTV Active Delivery — Rapid Activation in 5-15 Mins 🇬🇧</span>
              </div>

              {/* Main Title with t1 and t2 */}
              <h1 className="aii-title">
                <span className="t1">Televo IPTV — UK's #1 Choice</span>
                <span className="t2">Premium 4K &amp; Full HD IPTV Streaming Service</span>
              </h1>

              {/* Subtitle */}
              <p className="aii-sub">
                Experience reliable television entertainment with <b>Televo IPTV</b>. Fast delivery of digital connection details, crystal-clear 4K streams, full Electronic Programme Guide (EPG), and genuine UK customer support on WhatsApp. Contract-free streaming tailored for the United Kingdom.
              </p>

              {/* CTA Row */}
              <div className="aii-cta-row">
                <a href="#aii-pricing" className="btn-blue">
                  ⚡ View IPTV Plans in GBP
                </a>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  💬 WhatsApp UK ({SITE_CONFIG.whatsappNumber})
                </a>
              </div>

              {/* Stats Bar */}
              <div className="aii-stats">
                <div className="stat">
                  <b>4K / UHD</b>
                  <small>High Bitrate Streams</small>
                </div>
                <div className="stat">
                  <b>99.9%</b>
                  <small>UK Server Uptime</small>
                </div>
                <div className="stat">
                  <b>5 - 15 Mins</b>
                  <small>Instant Setup Delivery</small>
                </div>
                <div className="stat">
                  <b>7 Days</b>
                  <small>Money-Back Guarantee</small>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="trust">
                <span>🔒 Secure UK Checkout</span>
                <span>•</span>
                <span>🇬🇧 BT, Sky &amp; Virgin Ready</span>
                <span>•</span>
                <span>⚡ Anti-Freeze Optimisation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. COMPATIBLE APPS SECTION (#logosNL) ─── */}
      <section id="logosNL">
        <div className="w">
          <h2>Universal App &amp; Device Compatibility</h2>
          <div className="uk-underline"></div>
          <p>
            Televo IPTV connects effortlessly to all leading media players and smart platforms. Receive your Xtream Codes API credentials and M3U playlist instantly.
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
              Need setup guidance for your television? Explore our Televo IPTV Installation Centre →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 3. CORE ADVANTAGES (.aii-sec3) ─── */}
      <section className="aii-sec3">
        <div className="wrap">
          <h2 className="h2">Why Choose Televo IPTV in the United Kingdom?</h2>
          <div className="uk-underline"></div>
          <p className="sub">
            Designed specifically for British viewers with high-capacity European CDN servers, crystal-clear 4K sports, and instant setup support.
          </p>

          <div className="trust">
            <span className="badge">🇬🇧 Optimized for BT, Virgin Media, Sky, TalkTalk &amp; EE</span>
            <span className="flag-chip">⭐ Rated 4.9/5 by UK Customers</span>
          </div>

          <div className="grid">
            <div className="card">
              <h3>
                <span className="tick">✓</span>
                4K Ultra HD &amp; Full HD Streams
              </h3>
              <p>
                Enjoy football fixtures, cinema blockbusters, and popular series in crystal-clear Full HD and 4K resolution with 60 FPS framerate support.
              </p>
            </div>

            <div className="card">
              <h3>
                <span className="tick">✓</span>
                Anti-Freeze &amp; 99.9% Uptime
              </h3>
              <p>
                Robust server infrastructure built with load balancing to prevent buffering, especially during high-demand Premier League matches.
              </p>
            </div>

            <div className="card">
              <h3>
                <span className="tick">✓</span>
                M3U &amp; Xtream Codes API
              </h3>
              <p>
                Standardized connection details delivered within minutes. Connect easily with your favourite player app without complicated setup.
              </p>
            </div>

            <div className="card">
              <h3>
                <span className="tick">✓</span>
                Complete 7-Day UK EPG Guide
              </h3>
              <p>
                Stay updated with a complete Electronic Programme Guide. Browse schedules, upcoming sports, and episode details with ease.
              </p>
            </div>

            <div className="card">
              <h3>
                <span className="tick">✓</span>
                Broad Device Compatibility
              </h3>
              <p>
                Runs smoothly on Samsung Smart TV, LG webOS, Amazon Fire Stick, Android TV, Apple TV, iPad, iPhone, and Windows/Mac PCs.
              </p>
            </div>

            <div className="card">
              <h3>
                <span className="tick">✓</span>
                7-Day Money-Back Guarantee
              </h3>
              <p>
                Try Televo IPTV with complete peace of mind. If our service does not meet your expectations within 7 days, receive a prompt refund.
              </p>
            </div>
          </div>

          <a href="#aii-pricing" className="cta">
            ⚡ Choose Your Televo IPTV Subscription Now
          </a>
        </div>
      </section>

      {/* ─── 4. COMBINED SUBSCRIPTION PRICING WITH DEVICE COUNTER (#aii-pricing) ─── */}
      <PricingSection />

      {/* ─── 5. 3-STEP ORDER PROCESS (.aii-buy) ─── */}
      <section className="aii-buy">
        <div className="wrap">
          <h2 className="h2">How to Get Started with Televo IPTV</h2>
          <div className="uk-underline"></div>
          <p className="sub">
            Get connected in 3 easy steps without engineer visits or technical complications.
          </p>

          <div className="aii-steps">
            <div className="aii-step">
              <div className="aii-num">1</div>
              <h3 className="text-lg font-black text-[#0A2E66] mb-2">Choose Your Plan</h3>
              <p>
                Select your preferred subscription duration (1, 3, 6, or 12 months) and simultaneous device connections, then order securely.
              </p>
            </div>

            <div className="aii-step">
              <div className="aii-num">2</div>
              <h3 className="text-lg font-black text-[#0A2E66] mb-2">Instant Delivery</h3>
              <p>
                Receive your Xtream Codes API login, dedicated Server URL, and M3U playlist credentials via WhatsApp and email in 5 to 15 minutes.
              </p>
            </div>

            <div className="aii-step">
              <div className="aii-num">3</div>
              <h3 className="text-lg font-black text-[#0A2E66] mb-2">Stream in 4K</h3>
              <p>
                Open your preferred app on your Smart TV, Fire Stick, tablet, or smartphone, enter your login details, and start enjoying crystal-clear streams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. HOW IT WORKS (.aii-how) ─── */}
      <section className="aii-how">
        <div className="wrap">
          <h2>How Televo IPTV Streaming Works</h2>
          <div className="uk-underline"></div>
          <p className="sub">
            Cutting-edge IPTV infrastructure delivering zero-buffering entertainment right across the UK.
          </p>

          <div className="aii-grid">
            <div className="aii-card">
              <div className="aii-num">1</div>
              <h3>Cloud Server Distribution</h3>
              <p>
                Streams are delivered through robust European edge servers optimized for British broadband providers (BT, Virgin Media, Sky, and EE) to guarantee minimal latency.
              </p>
              <ul>
                <li>Direct fiber backbone connectivity</li>
                <li>Adaptive bitrate auto-scaling</li>
                <li>Zero hardware contracts</li>
              </ul>
            </div>

            <div className="aii-card">
              <div className="aii-num">2</div>
              <h3>Xtream Codes &amp; M3U Protocol</h3>
              <p>
                Televo IPTV utilizes industry-standard streaming protocols, giving you full freedom to use any modern IPTV player application of your choice.
              </p>
              <ul>
                <li>Compatible with IPTV Smarters &amp; TiviMate</li>
                <li>Full EPG electronic guide sync</li>
                <li>Catch-up TV integration</li>
              </ul>
            </div>

            <div className="aii-card">
              <div className="aii-num">3</div>
              <h3>24/7 UK Support Assistance</h3>
              <p>
                Need help installing an application or configuring your player? Our British customer care specialists guide you step by step on WhatsApp.
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
              View IPTV Prices (GBP)
            </a>
            <Link href="/guide-installation" className="aii-btn faq">
              Read Installation Guides
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 8. COMPARISON TABLE (.rs-compare) ─── */}
      <section className="rs-compare">
        <div className="comparison-section">
          <div className="section-header">
            <h2>Why Televo IPTV Outperforms Other Providers</h2>
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
              <h3>High Speed &amp; Low Latency</h3>
              <p>Optimized data routing delivers smooth live football with zero buffering on high-speed UK broadband.</p>
            </div>
            <div className="benefit-card">
              <ShieldCheck className="w-8 h-8 text-[#0A2E66] mx-auto mb-2" />
              <h3>Transparent GBP Pricing</h3>
              <p>Fixed prices in British Pounds with no automatic direct debits, contracts, or unexpected charges.</p>
            </div>
            <div className="benefit-card">
              <MessageSquare className="w-8 h-8 text-[#0A2E66] mx-auto mb-2" />
              <h3>Dedicated UK Support</h3>
              <p>Real human assistance available 7 days a week on WhatsApp to assist with setup and inquiries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9. LIVE SPORTS & PREMIER LEAGUE (#footNL) ─── */}
      <section id="footNL">
        <div className="wrap">
          <h2 className="title">Watch Live Premier League, Champions League &amp; Global Sports</h2>
          <div className="uk-underline"></div>
          <p className="sub">
            Never miss a match. Televo IPTV delivers uninterrupted coverage of the Premier League, UEFA Champions League, Formula 1, Rugby, Tennis, Boxing, and Cricket with zero buffering and low latency across the UK.
          </p>
          <p className="note">
            ⚽ 50/60 FPS High Framerate • 4K Ultra HD &amp; Full HD Feeds • Full Match Replays &amp; Catch-Up
          </p>
        </div>
      </section>

      {/* ─── 10. VOD & 4K CINEMA (#vod-rails) ─── */}
      <section id="vod-rails">
        <div className="wrap">
          <h2>Massive VOD Library: Movies &amp; Complete TV Series</h2>
          <div className="uk-underline"></div>
          <p className="seo">
            Updated weekly with the latest UK cinema releases, full box sets, popular drama series, and multi-language subtitles.
          </p>

          <div className="cards">
            <div className="card">
              <Film className="w-7 h-7 text-[#0A2E66] mb-2" />
              <h3>Latest UK &amp; Hollywood Cinema Releases</h3>
              <p>Stream the latest blockbuster titles in stunning 4K and Full HD resolution with cinematic surround sound.</p>
            </div>
            <div className="card">
              <Tv className="w-7 h-7 text-[#0A2E66] mb-2" />
              <h3>Complete Box Sets &amp; Drama Series</h3>
              <p>Binge-watch complete seasons of top British and international drama, crime, comedy, and sci-fi series.</p>
            </div>
            <div className="card">
              <Sparkles className="w-7 h-7 text-[#0A2E66] mb-2" />
              <h3>Family, Documentaries &amp; Kids Entertainment</h3>
              <p>Extensive library of family films, animated series, nature documentaries, and educational programming.</p>
            </div>
          </div>

          <div className="strip">
            <span className="pill">🎬 4K UHD Video On Demand</span>
            <span className="pill">🌐 Multi-Language Audio &amp; Subtitles</span>
            <span className="pill">🔄 Weekly Automatic Content Updates</span>
            <span className="pill">⏱️ Catch-Up TV Features</span>
          </div>
        </div>
      </section>

      {/* ─── 11. UK CUSTOMER REVIEWS (.rs-proof-nl) ─── */}
      <section className="rs-proof-nl">
        <div className="rs-proof-inner">
          <h2 className="rs-proof-title">Trusted by Thousands of Viewers Across the UK</h2>
          <div className="uk-underline"></div>
          <p className="rs-proof-sub">
            Read genuine experiences from customers in London, Manchester, Birmingham, Glasgow, Leeds, Bristol, Liverpool, and Edinburgh.
          </p>

          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rs-wa-cta"
          >
            💬 Order or Ask a Question on WhatsApp ({SITE_CONFIG.whatsappNumber})
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
            <h2>Televo IPTV — Frequently Asked Questions</h2>
            <div className="uk-underline"></div>
            <p>
              Find straightforward answers about setup, device compatibility, playlists, and UK network performance.
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
              <h3>Need Instant Setup Assistance?</h3>
              <p>
                Our UK technical team is on standby via WhatsApp every day from 08:00 to 23:00 to guide you through installation on any television or device.
              </p>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn email-btn"
              >
                💬 Chat on WhatsApp (+447882781998)
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
            Start Streaming with <span className="hi">Televo IPTV</span> Today
          </h2>
          <p className="final-cta-sub">
            Instant activation in 5-15 minutes, flexible contract-free plans in GBP, and a 7-day money-back guarantee across the UK.
          </p>
          <a href="#aii-pricing" className="final-cta-btn">
            ⚡ Get Your Televo IPTV Access
          </a>
        </div>
      </section>
    </div>
  );
}
