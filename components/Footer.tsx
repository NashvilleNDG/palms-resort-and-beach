import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BOOKING_URL = 'https://hotels.cloudbeds.com/en/reservation/DRaDzt?currency=usd';
const PHONE = 'tel:3407188920';
const LOCATION = '4126, Christiansted, St Croix 00820, U.S. Virgin Islands';
const LOGO_SRC = '/images/palmslogo.svg';

const socialLinks = [
  { href: 'https://facebook.com/palmsresortandbeach', label: 'Facebook', aria: 'Facebook (opens in new window)' },
  { href: 'https://instagram.com/palmsresortandbeach', label: 'Instagram', aria: 'Instagram (opens in new window)' },
  { href: 'https://tiktok.com/@palmsresortandbeach', label: 'TikTok', aria: 'TikTok (opens in new window)' },
  { href: 'https://youtube.com/@palmsresortandbeach', label: 'YouTube', aria: 'YouTube (opens in new window)' },
];

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width={28} height={28} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width={28} height={28} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width={28} height={28} viewBox="0 0 24 24" fill="currentColor" aria-hidden shapeRendering="geometricPrecision">
      <path d="M12.525 0.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}
function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width={28} height={28} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
  YouTube: YouTubeIcon,
};

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/rooms', label: 'Rooms' },
  { href: '/BeachActivities', label: 'Beach & Activities' },
  { href: '/Dining', label: 'Dining' },
  { href: '/Gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-teal-800 bg-teal-900 text-white">
      <div className="container-wide section-padding">
        <div className="grid gap-10 sm:gap-12 sm:grid-cols-2 lg:grid-cols-5 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <Link href="/" className="inline-block">
              <Image
                src={LOGO_SRC}
                alt="Palms Resort & Beach"
                width={160}
                height={48}
                className="h-11 sm:h-12 lg:h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-3 text-sm text-teal-100">
              Your island escape on St. Croix, U.S. Virgin Islands. Beachfront
              rooms, mile-long beach, and unforgettable Caribbean views.
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>
            <ul className="mt-3 space-y-0" role="list">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block py-2.5 text-teal-100 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-inset rounded min-h-[44px] flex items-center justify-center lg:justify-start"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <address className="mt-3 not-italic text-sm text-teal-100">
              <p>{LOCATION}</p>
              <p className="mt-2">
                <a
                  href={PHONE}
                  className="inline-flex items-center min-h-[44px] transition hover:text-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-inset rounded"
                >
                  340-718-8920
                </a>
              </p>
            </address>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Book Your Stay
            </h3>
            <p className="mt-3 text-sm text-teal-100">
              Ready for paradise? Reserve your room at Palms Resort & Beach.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center min-h-[44px] font-medium text-amber-300 transition hover:text-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-inset rounded"
            >
              Book Your Stay →
            </a>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Follow Us
            </h3>
            <ul className="mt-3 flex flex-wrap justify-center lg:justify-start gap-4" role="list">
              {socialLinks.map(({ href, label, aria }) => {
                const Icon = socialIcons[label];
                return (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center text-teal-100 transition hover:text-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-inset rounded"
                      aria-label={aria}
                    >
                      {Icon ? <Icon className="w-7 h-7" /> : label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mt-10 sm:mt-12 border-t border-teal-800 pt-6 sm:pt-8 text-center text-sm text-teal-200">
          <p>&copy; {new Date().getFullYear()} Palms Resort & Beach. All rights reserved.</p>
          <p className="mt-2">
            <Link
              href="/privacy"
              className="text-teal-200 underline hover:text-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-inset rounded"
            >
              Privacy Policy
            </Link>
            {' · '}
            <Link
              href="/terms"
              className="text-teal-200 underline hover:text-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-inset rounded"
            >
              Terms of Use
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
