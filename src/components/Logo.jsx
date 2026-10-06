import { Link } from 'react-router-dom';

export default function Logo({ size = 'default', showLink = true }) {
  const iconSizes = {
    small: 'w-7 h-7',
    default: 'w-9 h-9',
    large: 'w-11 h-11',
  };

  const textSizes = {
    small: 'text-lg',
    default: 'text-2xl',
    large: 'text-3xl',
  };

  const badgeSizes = {
    small: 'text-[10px] px-1.5 py-0.5',
    default: 'text-xs px-2 py-0.5',
    large: 'text-sm px-2.5 py-1',
  };

  const content = (
    <div className="flex items-center gap-2.5 group select-none">
      {/* Televo Custom TV & Streaming Icon */}
      <div className={`relative ${iconSizes[size]} rounded-xl bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 border border-blue-500/40 flex items-center justify-center shadow-md shadow-blue-900/30 group-hover:scale-105 transition-transform duration-200`}>
        {/* Screen inner */}
        <div className="w-5/6 h-5/6 rounded-lg bg-slate-950/80 border border-blue-400/30 flex items-center justify-center relative overflow-hidden">
          {/* Streaming Play Arrow in British Red */}
          <div className="w-0 h-0 border-y-[5px] border-y-transparent border-l-[9px] border-l-red-600 ml-0.5"></div>
          {/* Signal Live Dot */}
          <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
        </div>
      </div>

      {/* Brand Text */}
      <div className="flex items-center gap-1.5">
        <span className={`font-black tracking-tight text-white ${textSizes[size]}`}>
          TELEVO
        </span>
        <span className={`font-extrabold uppercase rounded-md bg-blue-600 text-white shadow-sm ${badgeSizes[size]} tracking-wider`}>
          IPTV
        </span>
      </div>
    </div>
  );

  if (showLink) {
    return (
      <Link to="/" className="inline-block" aria-label="Televo IPTV - Home">
        {content}
      </Link>
    );
  }

  return content;
}
