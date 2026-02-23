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
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="border-b border-gray-200 bg-stone-50">
        <div className="container-wide flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-2 text-sm text-gray-800 sm:justify-start">
          <a
            href={PHONE}
            className="flex items-center gap-1.5 transition hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
          >
            <span aria-hidden>📞</span>
            340-718-8920
          </a>
          <span className="flex items-center gap-1.5">
            <span aria-hidden>📍</span>
            {LOCATION}
          </span>
        </div>
      </div>
      <div className="container-wide flex flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
        >
          <Image
            src={LOGO_SRC}
            alt="Palms Resort & Beach"
            width={160}
            height={48}
            className="h-10 w-auto sm:h-12"
            priority
          />
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-gray-800 underline decoration-gray-400 underline-offset-2 transition hover:decoration-teal-600 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
            >
              {label}
            </Link>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-amber-500 px-4 py-2 text-sm font-medium text-gray-900 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}
