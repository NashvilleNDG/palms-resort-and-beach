'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BOOKING_URL = 'https://hotels.cloudbeds.com/en/reservation/DRaDzt?currency=usd';
const PHONE = 'tel:3407188920';
const LOCATION = '4126, Christiansted, St Croix 00820, U.S. Virgin Islands';
const LOGO_SRC = '/images/palmslogo.svg';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/rooms', label: 'Rooms' },
  { href: '/BeachActivities', label: 'Beach & Activities' },
  { href: '/Dining', label: 'Dining' },
  { href: '/Gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="border-b border-gray-200 bg-stone-50">
        <div className="container-wide flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 py-2 text-sm text-gray-800 sm:justify-start">
          <a
            href={PHONE}
            className="flex min-h-[44px] items-center gap-1.5 transition hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-inset rounded"
            aria-label="Call 340-718-8920"
          >
            <span aria-hidden>📞</span>
            340-718-8920
          </a>
          <span className="hidden sm:flex items-center gap-1.5 min-h-[44px]">
            <span aria-hidden>📍</span>
            {LOCATION}
          </span>
          <span className="sm:hidden flex items-center gap-1.5 text-gray-600">
            <span aria-hidden>📍</span>
            St. Croix, USVI
          </span>
        </div>
      </div>
      <div className="container-wide flex items-center justify-between gap-4 px-4 py-3 lg:py-4">
        <Link
          href="/"
          className="flex items-center gap-2 min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-inset rounded"
        >
          <Image
            src={LOGO_SRC}
            alt="Palms Resort & Beach"
            width={160}
            height={48}
            className="h-9 w-auto sm:h-12"
            priority
          />
        </Link>

        {/* Desktop nav — visible from lg */}
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-1"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="min-h-[44px] inline-flex items-center px-3 text-gray-800 underline decoration-gray-400 underline-offset-2 transition hover:decoration-teal-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-inset rounded"
            >
              {label}
            </Link>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] inline-flex items-center rounded-md bg-amber-500 px-4 py-2.5 text-sm font-medium text-gray-900 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-md text-gray-700 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-inset"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? (
            <span className="text-2xl leading-none" aria-hidden>×</span>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav overlay — full screen, nav content padded below header */}
      <div
        id="mobile-nav"
        className={`fixed inset-0 lg:hidden z-40 bg-teal-900/95 backdrop-blur-sm transition-opacity duration-200 pt-[5.5rem] ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Close (X) button — visible inside overlay */}
        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 z-50 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-teal-900"
          aria-label="Close menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <nav
          className="flex flex-col items-stretch pt-4 pb-8 px-4 overflow-y-auto h-full"
          aria-label="Mobile navigation"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="min-h-[48px] flex items-center px-4 py-3 text-lg font-medium text-white border-b border-teal-700/50 hover:bg-teal-800/50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-inset rounded-lg"
            >
              {label}
            </Link>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-6 min-h-[48px] flex items-center justify-center rounded-lg bg-amber-500 px-6 py-3.5 text-base font-semibold text-gray-900 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-teal-900"
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}
