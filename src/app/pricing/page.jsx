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

export default function PricingPage() {
  const breadcrumbsList = [
    { name: 'Pricing & Plans', path: '/pricing' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header banner */}
      <div className="bg-[#05070B] text-white py-12 border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbsList} />
          <div className="text-center max-w-3xl mx-auto mt-4">
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Televo IPTV UK Pricing &amp; Plans
            </h1>
            <div className="uk-underline"></div>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mt-2">
              Affordable, transparent UK pricing with no contracts or direct debits. Select your subscription duration and simultaneous screen connections for instant activation.
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
                <h3 className="font-bold text-white text-base">7-Day Refund Policy</h3>
                <p className="text-xs text-blue-200 mt-1 leading-relaxed">
                  If you face technical incompatibility during your first 7 days, our UK support will either resolve it or provide a full refund.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-3.5">
              <Clock className="w-8 h-8 text-blue-300 shrink-0" />
              <div>
                <h3 className="font-bold text-white text-base">Fast 5-15 Min Delivery</h3>
                <p className="text-xs text-blue-200 mt-1 leading-relaxed">
                  Credentials and personalized setup links are generated promptly and delivered via WhatsApp and email.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-3.5">
              <Tv className="w-8 h-8 text-red-400 shrink-0" />
              <div>
                <h3 className="font-bold text-white text-base">No Equipment To Rent</h3>
                <p className="text-xs text-blue-200 mt-1 leading-relaxed">
                  Use your existing Smart TV, Amazon Fire Stick, Apple TV, tablet, or phone without renting expensive hardware.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing FAQ Accordion */}
        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl font-black text-[#0A2E66] text-center mb-2">
            Frequently Asked Pricing Questions
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
