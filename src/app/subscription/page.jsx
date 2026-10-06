'use client';

import Link from 'next/link';
import {
  ShieldCheck,
  Clock,
  Tv,
} from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';
import PricingSection from '../../components/PricingSection';
import { FAQ_DATA } from '../../data/config';

export default function SubscriptionPage() {
  const breadcrumbsList = [
    { name: 'Subscription & Pricing', path: '/subscription' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header banner */}
      <div className="bg-[#05070B] text-white pt-4 pb-10 sm:pt-6 sm:pb-12 border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbsList} />
          <div className="text-center max-w-3xl mx-auto mt-4">
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Televo IPTV UK Subscription Plans
            </h1>
            <div className="uk-underline"></div>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mt-2">
              Select the ideal Televo IPTV subscription duration and simultaneous screen connections for your home. Every package includes 4K Ultra HD streams, full 7-day UK EPG schedule, over 200,000 on-demand titles, and responsive UK customer support.
            </p>
          </div>
        </div>
      </div>

      {/* Unified Pricing Section with Device Counter (1, 3, 6, 12 Months) */}
      <PricingSection />

      {/* Guarantee & Features Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="p-8 rounded-2xl bg-[#0A2E66] text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3.5">
              <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
              <div>
                <h3 className="font-bold text-white text-base">Risk-Free 7-Day Guarantee</h3>
                <p className="text-xs text-blue-200 mt-1 leading-relaxed">
                  Try Televo IPTV with complete peace of mind. If our technical team cannot resolve an incompatibility issue within your first 7 days, you will receive a full refund.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-3.5">
              <Clock className="w-8 h-8 text-blue-300 shrink-0" />
              <div>
                <h3 className="font-bold text-white text-base">Rapid 5-15 Min Activation</h3>
                <p className="text-xs text-blue-200 mt-1 leading-relaxed">
                  Your Televo IPTV login credentials, M3U playlist, and Xtream Codes server details are dispatched promptly via WhatsApp and email.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-3.5">
              <Tv className="w-8 h-8 text-red-400 shrink-0" />
              <div>
                <h3 className="font-bold text-white text-base">Zero Hardware Rental Costs</h3>
                <p className="text-xs text-blue-200 mt-1 leading-relaxed">
                  Stream directly on your existing Smart TV, Amazon Fire Stick, Apple TV, or mobile device—no costly set-top box rentals or satellite dish installations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl font-black text-[#0A2E66] text-center mb-2">
            Televo IPTV Subscription &amp; Setup FAQ
          </h2>
          <div className="uk-underline"></div>
          <div className="space-y-3 mt-6">
            {FAQ_DATA[1].items.map((item, idx) => (
              <details
                key={idx}
                className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm open:shadow-md transition-shadow"
              >
                <summary className="font-bold text-sm sm:text-base text-[#0A2E66] cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{item.question}</span>
                  <span className="text-[#1D7AF2] font-black group-open:rotate-45 transition-transform text-lg">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm text-[#0A2E66] hover:text-[#1D7AF2] font-bold"
            >
              Have a custom request or need multi-room consultation? Contact us →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
