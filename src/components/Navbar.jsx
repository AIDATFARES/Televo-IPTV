'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Zap, MessageSquare, ChevronRight } from 'lucide-react';
import Logo from './Logo';
import { NAV_LINKS, SITE_CONFIG } from '../data/config';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Dynamic scroll detection for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  }, [pathname]);

  const toggleMobileMenu = () => {
    const nextState = !mobileMenuOpen;
    setMobileMenuOpen(nextState);
    document.body.style.overflow = nextState ? 'hidden' : '';
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  const handleNavClick = (path, e) => {
    if (path === '/' && pathname === '/') {
      e.preventDefault();
      if (typeof window !== 'undefined') {
        if (window.location.hash) {
          window.history.pushState(null, '', '/');
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Main Header (Exact codeiptvs.fr Layout & Classes) */}
      <header className={`site-header-iptv ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="header-wrapper">
          {/* Logo */}
          <Logo size="default" variant="dark" />

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-links">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className={isActive ? 'active' : ''}
                      onClick={(e) => handleNavClick(link.path, e)}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link href="/subscription" className="btn-cta">
              <Zap className="w-4 h-4 fill-white" />
              <span>Get Televo IPTV</span>
            </Link>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            <div className="hamburger">
              <span className={mobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}></span>
              <span className={mobileMenuOpen ? 'opacity-0' : ''}></span>
              <span className={mobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
          <div className="p-5 flex items-center justify-between border-b border-slate-100">
            <Logo size="small" variant="dark" onClick={closeMobileMenu} />
            <button
              onClick={closeMobileMenu}
              className="p-2 text-slate-500 hover:text-slate-800 font-black text-xl"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <div className="p-5 flex-1 flex flex-col justify-between">
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      onClick={(e) => {
                        closeMobileMenu();
                        handleNavClick(link.path, e);
                      }}
                      className={`flex items-center justify-between p-3.5 rounded-xl font-bold text-base transition-colors ${
                        isActive
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-[#0A2E66] hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="pt-6 border-t border-slate-100 space-y-3">
              <Link
                href="/subscription"
                onClick={closeMobileMenu}
                className="btn-cta w-full justify-center"
              >
                <Zap className="w-4 h-4 fill-white" />
                <span>View IPTV Plans (GBP)</span>
              </Link>

              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
