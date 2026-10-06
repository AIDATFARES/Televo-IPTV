'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Logo({ size = 'default', showLink = true, variant = 'dark', onClick }) {
  const pathname = usePathname();

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

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
      if (e.defaultPrevented) return;
    }
    if (pathname === '/') {
      e.preventDefault();
      if (typeof window !== 'undefined') {
        if (window.location.hash) {
          window.history.pushState(null, '', '/');
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const content = (
    <div className="flex items-center gap-2.5 group select-none">
      {/* Official United Kingdom (Union Jack) Flag Icon */}
      <div
        className={`relative ${iconSizes[size]} rounded-xl overflow-hidden border border-blue-400/40 shadow-md shadow-blue-900/25 group-hover:scale-105 transition-transform duration-200 shrink-0 flex items-center justify-center bg-[#012169]`}
        title="Televo IPTV - United Kingdom"
      >
        <svg
          viewBox="0 0 60 40"
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Blue background field */}
          <rect width="60" height="40" fill="#012169" />

          {/* White diagonal saltire (St Andrew) */}
          <path d="M0,0 L60,40 M60,0 L0,40" stroke="#FFFFFF" strokeWidth="8" />

          {/* Red diagonal saltire (St Patrick) */}
          <path
            d="M0,0 L27,18 M33,22 L60,40 M60,0 L33,18 M27,22 L0,40"
            stroke="#C8102E"
            strokeWidth="2.7"
          />

          {/* White central cross (St George wide border) */}
          <path d="M30,0 V40 M0,20 H60" stroke="#FFFFFF" strokeWidth="13" />

          {/* Red central cross (St George) */}
          <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="7.5" />

          {/* Inner subtle border for crisp contrast */}
          <rect
            width="60"
            height="40"
            fill="none"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex items-center gap-1.5">
        <span className={`font-black tracking-tight ${textColor} ${textSizes[size]}`}>
          TELEVO
        </span>
        <span
          className={`font-extrabold uppercase rounded-md bg-[#C8102E] text-white shadow-sm ${badgeSizes[size]} tracking-wider`}
        >
          IPTV
        </span>
      </div>
    </div>
  );

  if (showLink) {
    return (
      <Link
        href="/"
        scroll={true}
        onClick={handleClick}
        className="inline-block cursor-pointer"
        aria-label="Televo IPTV - Home"
      >
        {content}
      </Link>
    );
  }

  return content;
}
