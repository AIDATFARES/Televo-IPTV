'use client';

import { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function WhatsAppButton() {
  const [dismissed, setDismissed] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 select-none">
      {/* Small floating tooltip pill */}
      {!dismissed && (
        <div className="hidden sm:flex items-center gap-2 bg-slate-900 border border-slate-700/80 text-white text-xs px-3.5 py-2 rounded-xl shadow-xl shadow-black/40 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-semibold">UK Support Online</span>
          <button
            onClick={() => setDismissed(true)}
            className="text-slate-400 hover:text-white ml-1 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={SITE_CONFIG.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Televo IPTV UK on WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all duration-200 relative group"
      >
        <MessageSquare className="w-7 h-7 fill-white" />
        <span className="sr-only">WhatsApp Chat</span>
        {/* Glow ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none"></span>
      </a>
    </div>
  );
}
