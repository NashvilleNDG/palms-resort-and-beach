import type { Metadata } from 'next';
import Image from 'next/image';

const BOOKING_URL = 'https://hotels.cloudbeds.com/en/reservation/DRaDzt?currency=usd';

export const metadata: Metadata = {
  title: 'Beach & Activities',
  description:
    'Mile-long palm-lined beach, freshwater pool, snorkeling, kayaking, turtle watch, and more at Palms Resort & Beach, St. Croix.',
  openGraph: {
    title: 'Beach & Activities | Palms Resort & Beach',
    description: 'Beach, pool, water sports, and weekly activities on St. Croix.',
  },
};

export default function BeachActivitiesPage() {
  return (
    <>
      <section className="relative py-24 bg-teal-900 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-800 to-teal-900" />
        <div className="relative z-10 container-narrow px-4">
          <p className="text-amber-300 uppercase tracking-widest text-sm font-medium">
            The Great Outdoors
          </p>
          <h1
            className="mt-2 text-4xl sm:text-5xl font-bold text-white"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Beach & Activities
          </h1>
          <p className="mt-6 text-lg text-teal-100 max-w-2xl mx-auto">
            From our mile-long beach to the pool, water sports, and weekly
            events — there&apos;s something for everyone at Palms Resort & Beach.
          </p>
        </div>
      </section>

      <section aria-labelledby="beach-heading" className="section-padding bg-stone-50">
        <div className="container-wide px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80"
                alt="Palm-lined beach on St. Croix"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2
                id="beach-heading"
                className="text-2xl font-bold text-gray-800"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Mile-Long Palm-Lined Beach
              </h2>
              <p className="mt-4 text-gray-600">
                Our unspoiled stretch of Caribbean shoreline is steps from your
                room. Lounge under the palms, swim in crystal blue waters, or
                stroll the sand at sunset. Complimentary loungers and beach
                service available.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="pool-heading" className="section-padding bg-white">
        <div className="container-wide px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2
                id="pool-heading"
                className="text-2xl font-bold text-gray-800"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Freshwater Pool
              </h2>
              <p className="mt-4 text-gray-600">
                One of the largest freshwater pools on St. Croix. Perfect for
                families and anyone who wants to cool off without the salt.
                Poolside bar and service available.
              </p>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80"
                alt="Resort freshwater pool"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="sports-heading" className="section-padding bg-stone-50">
        <div className="container-narrow px-4 text-center">
          <h2
            id="sports-heading"
            className="text-2xl font-bold text-gray-800"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Water Sports & Activities
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Complimentary snorkeling gear and kayaks. Access to Long Reef for
            diving and snorkeling. Seasonal guided turtle watch on our beach.
            Ask the front desk for the weekly activity schedule.
          </p>
        </div>
      </section>

      <section aria-labelledby="schedule-heading" className="section-padding bg-white">
        <div className="container-narrow px-4">
          <h2
            id="schedule-heading"
            className="text-2xl font-bold text-gray-800 text-center"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Weekly Schedule
          </h2>
          <p className="mt-2 text-center text-gray-600">
            Activities and entertainment change seasonally. Inquire at the front
            desk for the current schedule.
          </p>
          <ul className="mt-8 max-w-md mx-auto space-y-3 text-gray-700" role="list">
            <li className="flex justify-between rounded-lg bg-stone-50 px-4 py-3">
              <span>Monday</span>
              <span>Illusionist / Games</span>
            </li>
            <li className="flex justify-between rounded-lg bg-stone-50 px-4 py-3">
              <span>Tuesday</span>
              <span>Bingo</span>
            </li>
            <li className="flex justify-between rounded-lg bg-stone-50 px-4 py-3">
              <span>Wednesday</span>
              <span>Live Music</span>
            </li>
            <li className="flex justify-between rounded-lg bg-stone-50 px-4 py-3">
              <span>Thursday</span>
              <span>Trivia / Karaoke</span>
            </li>
            <li className="flex justify-between rounded-lg bg-stone-50 px-4 py-3">
              <span>Friday</span>
              <span>Live Music</span>
            </li>
            <li className="flex justify-between rounded-lg bg-stone-50 px-4 py-3">
              <span>Saturday</span>
              <span>Fire Dancers</span>
            </li>
            <li className="flex justify-between rounded-lg bg-stone-50 px-4 py-3">
              <span>Sunday</span>
              <span>Brunch</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section-padding bg-teal-800 text-center">
        <div className="container-narrow px-4">
          <p className="text-white text-lg">
            Ready to dive in? Book your stay and enjoy the best of St. Croix.
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
