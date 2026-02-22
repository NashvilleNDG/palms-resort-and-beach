import type { Metadata } from 'next';
import Image from 'next/image';

const BOOKING_URL = 'https://hotels.cloudbeds.com/en/reservation/DRaDzt?currency=usd';

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
      <section className="relative py-24 bg-teal-900 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-800 to-teal-900" />
        <div className="relative z-10 container-narrow px-4">
          <p className="text-amber-300 uppercase tracking-widest text-sm font-medium">
            Food, Drinks & Entertainment
          </p>
          <h1
            className="mt-2 text-4xl sm:text-5xl font-bold text-white"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Dining & Nightlife
          </h1>
          <p className="mt-6 text-lg text-teal-100 max-w-2xl mx-auto">
            From Sunday brunch to live fire dancers on Saturday nights — there
            is always something happening at Palms Resort & Beach.
          </p>
        </div>
      </section>

      <section aria-labelledby="restaurant-heading" className="section-padding bg-stone-50">
        <div className="container-wide px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-2xl overflow-hidden">
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
                className="text-2xl font-bold text-gray-800"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                On-Site Restaurant
              </h2>
              <p className="mt-4 text-gray-600">
                Our restaurant serves breakfast, lunch, and dinner with a focus
                on fresh local ingredients and Caribbean flavors. Dine with ocean
                views or under the stars. Reservations recommended for dinner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="bar-heading" className="section-padding bg-white">
        <div className="container-wide px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2
                id="bar-heading"
                className="text-2xl font-bold text-gray-800"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Beach Bar
              </h2>
              <p className="mt-4 text-gray-600">
                Casual drinks and light bites right on the sand. Perfect for a
                sunset cocktail or a cool refreshment after a swim. Open daily.
              </p>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80"
                alt="Beach bar"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="schedule-heading" className="section-padding bg-stone-50">
        <div className="container-narrow px-4">
          <h2
            id="schedule-heading"
            className="text-2xl font-bold text-gray-800 text-center"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Weekly Schedule
          </h2>
          <p className="mt-2 text-center text-gray-600">
            Live music, entertainment, and special events. Schedules may vary by
            season.
          </p>
          <ul className="mt-8 max-w-md mx-auto space-y-3 text-gray-700" role="list">
            <li className="flex justify-between rounded-lg bg-white px-4 py-3 shadow-sm">
              <span>Monday</span>
              <span>Illusionist</span>
            </li>
            <li className="flex justify-between rounded-lg bg-white px-4 py-3 shadow-sm">
              <span>Tuesday</span>
              <span>Bingo</span>
            </li>
            <li className="flex justify-between rounded-lg bg-white px-4 py-3 shadow-sm">
              <span>Wednesday</span>
              <span>Live Music</span>
            </li>
            <li className="flex justify-between rounded-lg bg-white px-4 py-3 shadow-sm">
              <span>Thursday</span>
              <span>Trivia</span>
            </li>
            <li className="flex justify-between rounded-lg bg-white px-4 py-3 shadow-sm">
              <span>Friday</span>
              <span>Live Music</span>
            </li>
            <li className="flex justify-between rounded-lg bg-white px-4 py-3 shadow-sm">
              <span>Saturday</span>
              <span>Fire Dancers</span>
            </li>
            <li className="flex justify-between rounded-lg bg-white px-4 py-3 shadow-sm">
              <span>Sunday</span>
              <span>Brunch</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section-padding bg-teal-800 text-center">
        <div className="container-narrow px-4">
          <p className="text-white text-lg">
            Join us for dinner, drinks, and a show. Book your stay and experience
            Palms Resort & Beach dining.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-md bg-amber-500 px-8 py-3 font-medium text-gray-900 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-teal-800"
          >
            Reserve Your Room
          </a>
        </div>
      </section>
    </>
  );
}
