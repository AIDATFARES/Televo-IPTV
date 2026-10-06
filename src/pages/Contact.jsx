import { useState } from 'react';
import {
  MessageSquare,
  Mail,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  Tv,
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { SITE_CONFIG } from '../data/config';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    device: 'Amazon Fire Stick',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate immediate successful submission
    setSubmitted(true);
  };

  const breadcrumbsList = [{ name: 'Contact Televo IPTV', path: '/contact' }];

  return (
    <div className="py-12 bg-slate-950 text-white min-h-screen">
      <SEO
        title="Contact Televo IPTV | UK Customer Support &amp; WhatsApp"
        description="Get in touch with Televo IPTV in the UK. Contact our team via WhatsApp at +447882781998, email, or send us a message for fast setup assistance."
        canonicalUrl="/contact/"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbsList} />

        {/* Hero Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/40 text-blue-300 text-xs font-semibold mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            UK Support Desk • 7 Days a Week
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Contact Televo IPTV
          </h1>
          <p className="text-slate-300 mt-3 text-base">
            Have questions about an IPTV plan, need assistance setting up your television, or want to verify your credentials? We are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Direct Contact Methods */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/60 to-slate-900 border border-emerald-800/60 relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white mb-1">WhatsApp Live Chat</h2>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                The fastest way to reach our UK team. Order subscriptions, get setup tutorials, and receive instant support directly on your mobile.
              </p>
              <div className="text-lg font-black text-emerald-400 font-mono mb-4">
                {SITE_CONFIG.whatsappNumber}
              </div>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl font-bold text-sm text-center text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Open WhatsApp Chat
              </a>
            </div>

            {/* Email & Operating Info */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white">Email Address</h3>
                  <a
                    href={`mailto:${SITE_CONFIG.supportEmail}`}
                    className="text-xs text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    {SITE_CONFIG.supportEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white">Operating Hours (UK Time)</h3>
                  <p className="text-xs text-slate-300">{SITE_CONFIG.openingHours}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Average reply within 10-20 minutes</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white">Customer Guarantee</h3>
                  <p className="text-xs text-slate-300">
                    All new subscriptions include a 7-day money-back guarantee for peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-white">Message Received</h2>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to <strong>Televo IPTV</strong>. A member of our UK support team will respond to your email address ({formData.email}) shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', device: 'Amazon Fire Stick', message: '' });
                    }}
                    className="text-xs text-blue-400 hover:underline font-semibold"
                  >
                    Send another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-xl font-bold text-white mb-2">Send Us a Direct Message</h2>
                <p className="text-xs text-slate-400 mb-6">
                  Fill in your details and we will reply as soon as possible.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Smith"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.co.uk"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Streaming Device
                  </label>
                  <select
                    value={formData.device}
                    onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="Amazon Fire Stick">Amazon Fire Stick / Fire TV</option>
                    <option value="Samsung Smart TV">Samsung Smart TV (Tizen)</option>
                    <option value="LG Smart TV">LG Smart TV (webOS)</option>
                    <option value="Android TV / Box">Android TV / Google TV</option>
                    <option value="Apple TV">Apple TV (tvOS)</option>
                    <option value="iPhone / iPad">iPhone / iPad (iOS)</option>
                    <option value="Windows PC / Mac">Windows PC / Mac</option>
                    <option value="Other / General">Other / General Question</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    How Can We Help You?
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your query, compatible application, or subscription question..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Inquiry to Televo Support
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
