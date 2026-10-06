import { Link } from 'react-router-dom';
import { Home, Zap, HelpCircle, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="py-24 bg-slate-950 text-white min-h-[70vh] flex items-center justify-center">
      <SEO
        title="Page Not Found | Televo IPTV UK"
        description="The page you are looking for does not exist on Televo IPTV UK. Return to our homepage or explore our subscription plans."
      />

      <div className="max-w-md mx-auto px-4 text-center">
        <div className="w-20 h-20 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 font-black text-3xl flex items-center justify-center mx-auto mb-6">
          404
        </div>
        <h1 className="text-3xl font-black text-white tracking-tight mb-2">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-400 leading-relaxed mb-8">
          The link you followed may have changed or the page does not exist. Explore our primary Televo IPTV resources below:
        </p>

        <div className="space-y-3">
          <Link
            to="/"
            className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            Return to Homepage
          </Link>
          <Link
            to="/subscription"
            className="w-full py-3 px-4 rounded-xl font-bold text-sm text-slate-300 bg-slate-900 border border-slate-800 hover:text-white hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4" />
            View Televo IPTV Plans
          </Link>
          <Link
            to="/guide-installation"
            className="w-full py-3 px-4 rounded-xl font-bold text-sm text-slate-300 bg-slate-900 border border-slate-800 hover:text-white hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
          >
            <HelpCircle className="w-4 h-4" />
            Device Installation Guides
          </Link>
        </div>
      </div>
    </div>
  );
}
