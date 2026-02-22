import Link from 'next/link';
import Image from 'next/image';

const BOOKING_URL = 'https://hotels.cloudbeds.com/en/reservation/DRaDzt?currency=usd';
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=85';
const CTA_IMAGE =
  'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=85';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <section
        aria-label="Hero"
        className="relative min-h-[100vh] flex flex-col justify-center items-center text-center bg-gray-900"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="relative z-10 px-4 py-24 max-w-4xl">
          <p className="text-amber-300 uppercase tracking-widest text-sm font-medium mb-4">
            Welcome to Paradise
          </p>
          <h1
            className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold drop-shadow-lg"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Palms Resort
            <br />
            & Beach
          </h1>
          <p className="mt-6 text-lg text-white/95 max-w-2xl mx-auto drop-shadow">
            No man is an island — but every man and every woman belongs on one.
            Escape to the shores of St. Croix, U.S. Virgin Islands.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-amber-500 px-6 py-3 text-base font-medium text-gray-900 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Book Your Stay
            </a>
            <Link
              href="/rooms"
              className="rounded-md border-2 border-white bg-transparent px-6 py-3 text-base font-medium text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              View Rooms
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 animate-bounce" aria-hidden>
          <span className="text-3xl">〰️</span>
        </div>
      </section>

      {/* 2. Strip */}
      <section
        aria-label="Resort highlights"
        className="bg-teal-700 text-white py-6"
      >
        <div className="container-wide px-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:justify-between">
          <span className="flex items-center gap-2 text-amber-300">
            <span aria-hidden>⭐</span>
            40 Beachfront Rooms
          </span>
          <span className="flex items-center gap-2 text-amber-300">
            <span aria-hidden>🌊</span>
            Mile-Long Palm-Lined Beach
          </span>
          <span className="flex items-center gap-2 text-amber-300">
            <span aria-hidden>📍</span>
            St. Croix, U.S. Virgin Islands
          </span>
          <a
            href="tel:3407188920"
            className="flex items-center gap-2 text-amber-300 transition hover:text-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
          >
            <span aria-hidden>📞</span>
            340-718-8920
          </a>
        </div>
      </section>

      {/* 3. About */}
      <section aria-labelledby="about-heading" className="section-padding bg-white">
        <div className="container-narrow text-center px-4">
          <p className="text-teal-600 uppercase tracking-wider text-sm font-medium">
            St. Croix, U.S. Virgin Islands
          </p>
          <h2
            id="about-heading"
            className="mt-2 text-3xl sm:text-4xl font-bold text-gray-800"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Your Island Escape Awaits
          </h2>
          <p className="mt-6 text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Our property is an island of relaxation and luxury where you can
            escape from the hassles and hardships of everyday life. Chill out on
            our unspoiled mile-long, palm-lined beach, in crystal blue Caribbean
            waters, or in our fresh-water pool — one of the largest on St. Croix.
            Here you are always surrounded by unmatched style, an unhurried
            atmosphere, and unforgettable views.
          </p>
        </div>
      </section>

      {/* 4. Feature cards (3) */}
      <section aria-labelledby="features-heading" className="section-padding bg-stone-50">
        <div className="container-wide px-4">
          <h2 id="features-heading" className="sr-only">
            Resort features
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <article className="group rounded-2xl shadow-2xl overflow-hidden bg-white">
              <Link href="/rooms" className="block">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800&q=80"
                    alt="Beachfront room with ocean view"
                    fill
                    className="object-cover transition group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <span className="text-2xl" aria-hidden>🛏️</span>
                    <h3
                      className="font-bold text-lg mt-1"
                      style={{ fontFamily: 'var(--font-playfair), serif' }}
                    >
                      Beachfront Rooms
                    </h3>
                    <p className="text-sm text-white/90 mt-1">
                      40 spacious rooms with private patios or balconies, ocean
                      breezes, and stunning Caribbean views.
                    </p>
                    <span className="inline-block mt-2 text-amber-300 font-medium text-sm">
                      Explore Rooms →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
            <article className="group rounded-2xl shadow-2xl overflow-hidden bg-white">
              <Link href="/BeachActivities" className="block">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80"
                    alt="Beach and water activities"
                    fill
                    className="object-cover transition group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <span className="text-2xl" aria-hidden>🌊</span>
                    <h3
                      className="font-bold text-lg mt-1"
                      style={{ fontFamily: 'var(--font-playfair), serif' }}
                    >
                      Beach & Activities
                    </h3>
                    <p className="text-sm text-white/90 mt-1">
                      Snorkeling, kayaking, turtle watch, a sparkling freshwater
                      pool, and a mile of pristine Caribbean beach.
                    </p>
                    <span className="inline-block mt-2 text-amber-300 font-medium text-sm">
                      Discover More →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
            <article className="group rounded-2xl shadow-2xl overflow-hidden bg-white">
              <Link href="/Dining" className="block">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                    alt="Dining and nightlife"
                    fill
                    className="object-cover transition group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <span className="text-2xl" aria-hidden>🍽️</span>
                    <h3
                      className="font-bold text-lg mt-1"
                      style={{ fontFamily: 'var(--font-playfair), serif' }}
                    >
                      Dining & Nightlife
                    </h3>
                    <p className="text-sm text-white/90 mt-1">
                      From Sunday brunch to live fire dancers on Saturday nights
                      — there&apos;s always something happening at Palms Resort & Beach.
                    </p>
                    <span className="inline-block mt-2 text-amber-300 font-medium text-sm">
                      See the Menu →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* 5. The Palms Difference */}
      <section
        aria-labelledby="difference-heading"
        className="section-padding bg-stone-50"
      >
        <div className="container-wide px-4 text-center">
          <p className="text-teal-600 uppercase tracking-wider text-sm font-medium">
            The Palms Difference
          </p>
          <h2
            id="difference-heading"
            className="mt-2 text-3xl sm:text-4xl font-bold text-gray-800"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Everything You Need. Nothing You Don&apos;t.
          </h2>
          <ul
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            role="list"
          >
            {[
              {
                emoji: '🏖️',
                title: 'Mile-Long Beach',
                desc: 'Unspoiled, palm-lined Caribbean beach steps from your door.',
              },
              {
                emoji: '🏊',
                title: 'Freshwater Pool',
                desc: 'One of the largest freshwater pools on all of St. Croix.',
              },
              {
                emoji: '🤿',
                title: 'Water Sports',
                desc: 'Complimentary snorkeling gear, kayaks, and Long Reef access.',
              },
              {
                emoji: '🍽️',
                title: 'On-Site Dining',
                desc: 'Restaurant, beach bar, Sunday brunch, and nightly entertainment.',
              },
              {
                emoji: '🌊',
                title: 'Ocean Views',
                desc: 'Every room overlooks the Caribbean Sea from a private patio or balcony.',
              },
              {
                emoji: '🐢',
                title: 'Turtle Watching',
                desc: 'Seasonal guided turtle watch on our very own beach.',
              },
              {
                emoji: '🎶',
                title: 'Live Entertainment',
                desc: 'Live music, fire dancers, bingo, trivia — every night of the week.',
              },
              {
                emoji: '👨‍👩‍👧‍👦',
                title: 'Family Friendly',
                desc: 'Designed for comfort and privacy for families of all sizes.',
              },
            ].map(({ emoji, title, desc }) => (
              <li
                key={title}
                className="rounded-xl bg-white p-6 shadow-md text-left"
              >
                <span className="text-3xl" aria-hidden>
                  {emoji}
                </span>
                <h3 className="mt-2 font-semibold text-gray-800">{title}</h3>
                <p className="mt-1 text-sm text-gray-600">{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. CTA banner */}
      <section
        aria-labelledby="cta-heading"
        className="relative min-h-[60vh] flex flex-col justify-center items-center text-center bg-teal-900"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${CTA_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-teal-900/70" />
        <div className="relative z-10 px-4 py-20 max-w-2xl">
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Ready to Escape?
          </h2>
          <p className="mt-4 text-lg text-white/95">
            Book your stay at Palms Resort & Beach and discover what island life
            is truly all about.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-md bg-amber-500 px-8 py-3 text-base font-medium text-gray-900 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-teal-900"
          >
            Reserve Your Room Today
          </a>
        </div>
      </section>
    </>
  );
}
