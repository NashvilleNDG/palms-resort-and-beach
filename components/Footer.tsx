import Link from 'next/link';
import Image from 'next/image';

const BOOKING_URL = 'https://hotels.cloudbeds.com/en/reservation/DRaDzt?currency=usd';
const PHONE = 'tel:3407188920';
const LOCATION = '4126, Christiansted, St Croix 00820, U.S. Virgin Islands';
const LOGO_SRC = '/images/palmslogo.svg';

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
        <div className="grid gap-10 sm:gap-12 sm:grid-cols-2 lg:grid-cols-4 text-center lg:text-left">
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
        </div>
        <div className="mt-10 sm:mt-12 border-t border-teal-800 pt-6 sm:pt-8 text-center text-sm text-teal-200">
          <p>&copy; {new Date().getFullYear()} Palms Resort & Beach. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
