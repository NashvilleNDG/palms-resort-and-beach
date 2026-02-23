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
      <section className="relative py-16 sm:py-24 min-h-[40vh] sm:min-h-[50vh] flex flex-col justify-center text-center bg-teal-900">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/swimming-pool.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/80 via-teal-900/60 to-teal-900" />
        <div className="relative z-10 container-narrow px-4">
          <p className="text-amber-300 uppercase tracking-widest text-xs sm:text-sm font-medium">
            The Great Outdoors
          </p>
          <h1
            className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Beach & Activities
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/95 max-w-2xl mx-auto drop-shadow">
            From our mile-long beach to the pool, water sports, and weekly
            events — there&apos;s something for everyone at Palms Resort & Beach.
          </p>
        </div>
      </section>

      <section aria-labelledby="beach-heading" className="section-padding bg-stone-50">
        <div className="container-wide px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative h-64 sm:h-72 lg:h-80 rounded-xl sm:rounded-2xl overflow-hidden">
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
            <div className="relative h-64 sm:h-72 lg:h-80 rounded-xl sm:rounded-2xl overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/swimming-pool.png"
                alt="Freshwater pool at Palms Resort & Beach with lounge chairs and palm trees, St. Croix"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="sports-heading" className="section-padding bg-stone-50">
        <div className="container-wide px-4">
          <article className="rounded-xl sm:rounded-2xl overflow-hidden bg-white shadow-xl border border-stone-100 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 sm:h-72 md:h-80">
                <Image
                  src="/images/water-activity.png"
                  alt="Beach and water activities at Palms Resort & Beach, St. Croix"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-center text-center md:text-left">
                <h2
                  id="sports-heading"
                  className="text-2xl font-bold text-gray-800"
                  style={{ fontFamily: 'var(--font-playfair), serif' }}
                >
                  Water Sports & Activities
                </h2>
                <p className="mt-3 sm:mt-4 text-gray-600">
                  Enjoy snorkeling gear and kayaks, access to Long Reef for
                  diving and snorkeling, and seasonal guided turtle watch on our beach.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Sample weekly lineup — clearly framed as typical, not guaranteed */}
      <section aria-labelledby="schedule-heading" className="section-padding bg-stone-50">
        <div className="container-narrow px-4">
          <h2
            id="schedule-heading"
            className="text-2xl font-bold text-gray-800 text-center"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Sample Weekly Lineup
          </h2>
          <p className="mt-2 text-center text-gray-600 max-w-2xl mx-auto">
            Activities and entertainment vary by season. The lineup below is a typical
            example — for this week&apos;s times and events, get the current schedule when you arrive or call the front desk.
          </p>
          <ul className="mt-6 sm:mt-8 max-w-md mx-auto space-y-3 text-gray-700" role="list">
            <li className="flex flex-col sm:flex-row gap-1 rounded-lg bg-white px-4 py-3 text-sm sm:text-base border border-stone-200 shadow-sm text-center lg:text-left items-center justify-center lg:justify-between">
              <span className="font-medium">Monday</span>
              <span>Illusionist / Games</span>
            </li>
            <li className="flex flex-col sm:flex-row gap-1 rounded-lg bg-white px-4 py-3 text-sm sm:text-base border border-stone-200 shadow-sm text-center lg:text-left items-center justify-center lg:justify-between">
              <span className="font-medium">Tuesday</span>
              <span>Bingo</span>
            </li>
            <li className="flex flex-col sm:flex-row gap-1 rounded-lg bg-white px-4 py-3 text-sm sm:text-base border border-stone-200 shadow-sm text-center lg:text-left items-center justify-center lg:justify-between">
              <span className="font-medium">Wednesday</span>
              <span>Live Music</span>
            </li>
            <li className="flex flex-col sm:flex-row gap-1 rounded-lg bg-white px-4 py-3 text-sm sm:text-base border border-stone-200 shadow-sm text-center lg:text-left items-center justify-center lg:justify-between">
              <span className="font-medium">Thursday</span>
              <span>Trivia / Karaoke</span>
            </li>
            <li className="flex flex-col sm:flex-row gap-1 rounded-lg bg-white px-4 py-3 text-sm sm:text-base border border-stone-200 shadow-sm text-center lg:text-left items-center justify-center lg:justify-between">
              <span className="font-medium">Friday</span>
              <span>Live Music</span>
            </li>
            <li className="flex flex-col sm:flex-row gap-1 rounded-lg bg-white px-4 py-3 text-sm sm:text-base border border-stone-200 shadow-sm text-center lg:text-left items-center justify-center lg:justify-between">
              <span className="font-medium">Saturday</span>
              <span>Fire Dancers</span>
            </li>
            <li className="flex flex-col sm:flex-row gap-1 rounded-lg bg-white px-4 py-3 text-sm sm:text-base border border-stone-200 shadow-sm text-center lg:text-left items-center justify-center lg:justify-between">
              <span className="font-medium">Sunday</span>
              <span>Brunch</span>
            </li>
          </ul>

          {/* Get current schedule + Book stay CTA — one block */}
          <div className="mt-10 rounded-2xl bg-teal-800 px-6 py-6 sm:px-8 sm:py-8 text-center text-white">
            <h3 className="text-lg font-semibold">Get This Week&apos;s Schedule</h3>
            <p className="mt-2 text-sm text-teal-100 max-w-md mx-auto">
              For exact times and the current lineup, call the front desk or pick up a schedule when you check in.
            </p>
            <a
              href="tel:3407188920"
              className="mt-4 inline-flex items-center justify-center min-h-[44px] rounded-lg bg-amber-500 px-6 py-2.5 font-medium text-gray-900 hover:bg-amber-400 transition focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-teal-800"
            >
              340-718-8920
            </a>
            <div className="mt-8 pt-8 border-t border-teal-700">
              <p className="text-white text-lg">
                Ready to dive in? Book your stay and enjoy the best of St. Croix.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center min-h-[44px] rounded-lg bg-amber-500 px-6 sm:px-8 py-3 font-medium text-gray-900 hover:bg-amber-400 transition focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-teal-800"
              >
                Reserve Your Room
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
