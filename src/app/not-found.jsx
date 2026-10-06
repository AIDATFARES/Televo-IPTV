import Link from 'next/link';
import { Home, Zap, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export const metadata = {
  title: '404 - Page Not Found | Televo IPTV UK',
  description: 'The requested page could not be found on Televo IPTV UK.',
};

export default function NotFound() {
  return (
    <div className="pt-6 pb-16 sm:pt-10 bg-white text-[#2b3340] min-h-[60vh] flex items-center justify-center text-center px-4">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-7xl font-black text-[#0A2E66]">404</div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0A2E66]">
          Page Not Found
        </h1>
        <div className="uk-underline"></div>
        <p className="text-slate-600 text-sm leading-relaxed">
          The television page or guide you are looking for may have been moved or updated.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-[#0A2E66] hover:bg-[#113E86] shadow-md transition-all"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/subscription"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-[#0A2E66] bg-slate-100 hover:bg-slate-200 transition-all"
          >
            <Zap className="w-4 h-4 text-blue-600" />
            View IPTV Plans
          </Link>
        </div>
      </div>
    </div>
  );
}
