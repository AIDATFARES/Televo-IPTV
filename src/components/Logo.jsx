import Link from 'next/link';

export default function Logo({ size = 'default', showLink = true, variant = 'dark' }) {
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

  const textColor = variant === 'light' ? 'text-white' : 'text-[#0A2E66]';

  const content = (
    <div className="flex items-center gap-2.5 group select-none">
      {/* Televo Custom TV & Streaming Icon (UK Flag Palette: Royal Navy, Bright Blue, British Red) */}
      <div className={`relative ${iconSizes[size]} rounded-xl bg-gradient-to-br from-[#0A2E66] via-[#113E86] to-[#1D7AF2] border border-blue-400/40 flex items-center justify-center shadow-md shadow-blue-900/30 group-hover:scale-105 transition-transform duration-200`}>
        {/* Screen inner */}
        <div className="w-5/6 h-5/6 rounded-lg bg-[#05070B] border border-white/20 flex items-center justify-center relative overflow-hidden">
          {/* Streaming Play Arrow in British Red */}
          <div className="w-0 h-0 border-y-[5px] border-y-transparent border-l-[9px] border-l-[#C8102E] ml-0.5"></div>
          {/* Signal Live Dot */}
          <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
        </div>
      </div>

      {/* Brand Text */}
      <div className="flex items-center gap-1.5">
        <span className={`font-black tracking-tight ${textColor} ${textSizes[size]}`}>
          TELEVO
        </span>
        <span className={`font-extrabold uppercase rounded-md bg-[#C8102E] text-white shadow-sm ${badgeSizes[size]} tracking-wider`}>
          IPTV
        </span>
      </div>
    </div>
  );

  if (showLink) {
    return (
      <Link href="/" className="inline-block" aria-label="Televo IPTV - Home">
        {content}
      </Link>
    );
  }

  return content;
}

