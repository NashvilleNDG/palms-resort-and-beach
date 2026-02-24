import type { Metadata } from 'next';
import Image from 'next/image';
import { OptimizedBackgroundImage } from '@/components/OptimizedImage';

const BOOKING_URL = 'https://hotels.cloudbeds.com/en/reservation/DRaDzt?currency=usd';
const MENU_PDF = '/images/Palms%20menu%20card.pdf';

export const metadata: Metadata = {
  title: 'Dining & Nightlife',
  description:
    'Restaurant, beach bar, Sunday brunch, and nightly entertainment at Palms Resort & Beach, St. Croix. Food, drinks, and live music.',
  openGraph: {
    title: 'Dining & Nightlife | Palms Resort & Beach',
    description: 'Restaurant, beach bar, brunch, and nightly entertainment on St. Croix.',
  },
};

export default function DiningPage() {
  return (
    <>
      <section className="relative py-16 sm:py-24 min-h-[40vh] sm:min-h-[50vh] flex flex-col justify-center text-center bg-teal-900">
        <OptimizedBackgroundImage src="/images/restaurant.png" />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/80 via-teal-900/60 to-teal-900" />
        <div className="relative z-10 container-narrow px-4">
          <p className="text-amber-300 uppercase tracking-widest text-xs sm:text-sm font-medium">
            Food, Drinks & Entertainment
          </p>
          <h1
            className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Dining & Nightlife
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/95 max-w-2xl mx-auto drop-shadow">
            From Sunday brunch to live fire dancers on Saturday nights — there
            is always something happening at Palms Resort & Beach.
          </p>
        </div>
      </section>

      <section aria-labelledby="restaurant-heading" className="section-padding bg-stone-50">
        <div className="container-wide px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative h-64 sm:h-72 lg:h-80 rounded-xl sm:rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                alt="Restaurant at Palms Resort & Beach"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2
                id="restaurant-heading"
                className="text-xl sm:text-2xl font-bold text-gray-800 text-center"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                A Favorite St. Croix Dining Spot
              </h2>
              <p className="mt-4 text-gray-600">
                Palms Resort & Beach Restaurant offers award-winning flavors in an
                open-air beach-side pavilion or our dining room, with ocean-view
                dining that can be dressed up or down. A favorite among locals.
              </p>
              <p className="mt-3 text-gray-600">
                Open 7 days a week, 365 days a year.
                <br />
                Monday–Thursday 7:30 am–10 pm, Friday & Saturday 7:30 am–11 pm, Sunday 8 am–10 pm.
              </p>
              <dl className="mt-6 space-y-3 text-sm text-gray-600">
                <div>
                  <dt className="font-semibold text-gray-800">Breakfast</dt>
                  <dd>
                    7:30 am–11 am Monday–Saturday.
                    <br />
                    Home-style American breakfast with griddle, continental, and egg dishes.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-800">Sunday Brunch</dt>
                  <dd>
                    8 am–2 pm.
                    <br />
                    Beach-side setting.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-800">Lunch</dt>
                  <dd>
                    11 am–5:30 pm Monday–Saturday, 2–5:30 pm Sunday.
                    <br />
                    Beach-side setting with specialty sandwiches, salads, and traditional favorites.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-800">Dinner</dt>
                  <dd>
                    5:30–10 pm Sunday–Thursday, 5–11 pm Friday & Saturday.
                    <br />
                    Caribbean-inspired gourmet dishes and American favorites. Voted Best Steak on St. Croix (char-broiled rib-eye). Daily specials, beef, fish, chicken, and pasta with locally grown produce and spices. Soups, salads, appetizers, and homemade desserts.
                  </dd>
                </div>
              </dl>
              <p className="mt-6 text-center">
                <a
                  href={MENU_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center min-h-[44px] rounded-lg bg-teal-700 px-6 py-2.5 font-medium text-white hover:bg-teal-600 transition focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  Restaurant Menu →
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="bar-heading" className="section-padding bg-white">
        <div className="container-wide px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 text-center">
              <h2
                id="bar-heading"
                className="text-xl sm:text-2xl font-bold text-gray-800"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Beach Bar
              </h2>
              <p className="mt-4 text-gray-600">
                Our Beach Bar offers outdoor and indoor seating in a casual
                setting right on the sand. Open 11 am–10 pm. Refreshing frozen
                cocktails, local Cruzan Rum drinks, and microbrews from St. Croix&apos;s
                Leatherback Brewing Company, plus an expansive wine list. A favorite
                local hotspot.
              </p>
              <p className="mt-3 text-gray-600">
                Live music every Friday and Saturday night.
              </p>
            </div>
            <div className="relative h-64 sm:h-72 lg:h-80 rounded-xl sm:rounded-2xl overflow-hidden order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80"
                alt="Beach bar at Palms Resort & Beach"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="dine-highlights-heading" className="section-padding bg-stone-50">
        <div className="container-narrow px-4">
          <h2
            id="dine-highlights-heading"
            className="text-2xl font-bold text-gray-800 text-center"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Why Dine With Us
          </h2>
          <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto" role="list">
            {[
              'Ocean-view open-air beach-side pavilion and dining room',
              'Voted Best Steak on St. Croix — char-broiled rib-eye',
              'Caribbean-inspired gourmet dishes and American favorites',
              'Locally grown produce and spices',
              'Live music Friday and Saturday nights',
              'Open 7 days a week, 365 days a year',
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl bg-white px-4 py-3 text-gray-700 border border-stone-200 shadow-sm"
              >
                <span className="text-amber-500 shrink-0 mt-0.5" aria-hidden>✓</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center">
            <a
              href={MENU_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[44px] rounded-lg bg-teal-700 px-6 py-3 font-medium text-white hover:bg-teal-600 transition focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Restaurant Menu →
            </a>
          </p>
        </div>
      </section>

      <section className="relative section-padding min-h-[40vh] flex flex-col justify-center text-center bg-teal-800">
        <OptimizedBackgroundImage src="/images/restaurant-front.png" />
        <div className="absolute inset-0 bg-teal-800/75" />
        <div className="relative z-10 container-narrow px-4">
          <p className="text-white text-lg drop-shadow">
            Join us for dinner, drinks, and a show. Book your stay and experience
            Palms Resort & Beach dining.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center min-h-[44px] rounded-md bg-amber-500 px-6 sm:px-8 py-3 font-medium text-gray-900 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-teal-800"
          >
            Reserve Your Room
          </a>
        </div>
      </section>
    </>
  );
}
