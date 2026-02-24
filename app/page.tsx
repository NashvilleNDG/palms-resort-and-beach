import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ResortCarousel } from '@/components/ResortCarousel';
import { NewsletterForm } from '@/components/NewsletterForm';

const MAPS_URL = 'https://maps.app.goo.gl/hyfj8NW5GkjBXpL67';
const BOOKING_URL = 'https://hotels.cloudbeds.com/en/reservation/DRaDzt?currency=usd';
const PHONE = '340-718-8920';
const PHONE_TEL = 'tel:3407188920';
const HERO_IMAGE = '/images/resort-img1.png';
const HERO_IMAGE_DESKTOP = '/images/resort-img.png';
const CTA_IMAGE = '/images/swimming-pool.jpg';
const BASE_URL = 'https://palmsresortandbeach.com';

// SEO: JSON-LD Hotel + FAQ schema
const hotelSchema = {
  '@context': 'https://schema.org',
  '@type': 'Hotel',
  name: 'Palms Resort & Beach',
  description:
    'Beachfront resort on St. Croix, U.S. Virgin Islands. 45 rooms, mile-long palm-lined beach, freshwater pool, restaurant, and water sports.',
  url: BASE_URL,
  telephone: `+1-${PHONE}`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4126',
    addressLocality: 'Christiansted',
    addressRegion: 'St Croix',
    postalCode: '00820',
    addressCountry: 'VI',
  },
  image: [BASE_URL + HERO_IMAGE],
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Beachfront' },
    { '@type': 'LocationFeatureSpecification', name: 'Pool' },
    { '@type': 'LocationFeatureSpecification', name: 'Restaurant' },
    { '@type': 'LocationFeatureSpecification', name: 'Free Wi-Fi' },
    { '@type': 'LocationFeatureSpecification', name: 'Parking' },
  ],
  numberOfRooms: 45,
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where is Palms Resort & Beach located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Palms Resort & Beach is located at 4126, Christiansted, St Croix 00820, U.S. Virgin Islands, with a mile-long private palm-lined beach and 45 beachfront rooms.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time is check-in and check-out?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in or late check-out may be available upon request.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there dining on site?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We have an on-site restaurant serving breakfast, lunch, and dinner, plus a beach bar. Sunday brunch and nightly entertainment are available.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the resort offer water activities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Complimentary snorkeling gear and kayaks are available. We also offer access to Long Reef for diving and seasonal guided turtle watch on our beach.',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: 'Palms Resort & Beach — St. Croix Beachfront Resort | USVI',
  description:
    'St. Croix\'s only resort with a mile-long private beach. 45 beachfront rooms, pool, restaurant, free snorkeling & kayaks. Book direct. 340-718-8920.',
  openGraph: {
    title: 'Palms Resort & Beach — St. Croix, U.S. Virgin Islands',
    description:
      'Beachfront resort on St. Croix: 45 rooms, mile-long beach, pool, dining, water sports. Book your Caribbean escape.',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      {/* SEO: Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(hotelSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* 1. Hero — modern, clear value */}
      <section
        aria-label="Welcome to Palms Resort & Beach"
        className="relative min-h-[75vh] sm:min-h-[85vh] flex flex-col justify-center items-center text-center bg-gray-900"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden lg:block"
          style={{ backgroundImage: `url(${HERO_IMAGE_DESKTOP})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65" />
        <div className="relative z-10 px-4 py-16 sm:py-24 max-w-4xl">
          <p className="text-amber-300 uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            St. Croix, U.S. Virgin Islands
          </p>
          <h1
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold drop-shadow-lg tracking-tight"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Palms Resort
            <br />
            & Beach
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-white/95 max-w-2xl mx-auto drop-shadow leading-relaxed">
            Your beachfront escape in the Caribbean. Forty-five rooms, a mile-long
            palm-lined beach, pool, dining, and endless sunshine on St. Croix.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] inline-flex items-center justify-center rounded-lg bg-amber-500 px-5 sm:px-7 py-3 sm:py-3.5 text-base font-semibold text-gray-900 shadow-lg transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Book Your Stay
            </a>
            <Link
              href="/rooms"
              className="min-h-[44px] inline-flex items-center justify-center rounded-lg border-2 border-white bg-white/10 px-5 sm:px-7 py-3 sm:py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              View Rooms
            </Link>
          </div>
        </div>
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 animate-bounce"
          aria-hidden
        >
          <span className="text-2xl sm:text-3xl">〰️</span>
        </div>
      </section>

      {/* 2. Stats bar — resort owner + customer: key numbers */}
      <section
        aria-label="Resort at a glance"
        className="bg-teal-800 text-white py-6 sm:py-8"
      >
        <div className="container-wide px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-amber-300">45</span>
              <span className="block mt-1 text-xs sm:text-sm text-teal-100">Beachfront Rooms</span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-amber-300">1 mi</span>
              <span className="block mt-1 text-xs sm:text-sm text-teal-100">Palm-Lined Beach</span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-amber-300">24/7</span>
              <span className="block mt-1 text-xs sm:text-sm text-teal-100">Front Desk</span>
            </div>
            <div>
              <a
                href={PHONE_TEL}
                className="block text-xl sm:text-2xl md:text-3xl font-bold text-amber-300 hover:text-amber-200 transition min-h-[44px] flex flex-col justify-center"
              >
                {PHONE}
              </a>
              <span className="block mt-1 text-xs sm:text-sm text-teal-100">Call to Book or Inquire</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About — Your Island Escape (SEO-rich, resort story) */}
      <section
        id="about"
        aria-labelledby="about-heading"
        className="section-padding bg-stone-50"
      >
        <div className="container-wide px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="text-center lg:text-left">
              <p className="text-teal-600 uppercase tracking-wider text-sm font-medium">
                Your Island Escape
              </p>
              <h2
                id="about-heading"
                className="mt-2 text-3xl sm:text-4xl font-bold text-gray-800"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                St. Croix&apos;s Premier Beachfront Resort
              </h2>
              <p className="mt-6 text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Palms Resort & Beach is the only resort on St. Croix with a
                mile-long private palm-lined beach. Whether you&apos;re here for romance,
                family time, or adventure, you&apos;ll find 45 beachfront rooms with
                private patios or balconies, a large freshwater pool, on-site
                restaurant and beach bar, and complimentary snorkeling and kayaks.
                Relax in crystal-clear Caribbean waters, join our seasonal turtle
                watch, or enjoy live music and fire dancers — all without leaving
                the property.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/resort-about.png"
                alt="Palms Resort & Beach — tropical pathway with palm trees and resort buildings, St. Croix"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. See the resort — carousel */}
      <ResortCarousel
        images={[
          { src: '/images/resort-img.png', alt: 'Palms Resort & Beach beachfront and palm-lined shore, St. Croix' },
          { src: '/images/resort-about.png', alt: 'Palms Resort & Beach tropical pathway with palm trees and resort buildings, St. Croix' },
          { src: '/images/restaurant-front.png', alt: 'Restaurant and bar at Palms Resort & Beach, St. Croix' },
          { src: '/images/resort-img2.png', alt: 'Palms Resort & Beach resort buildings and palm trees, St. Croix' },
          { src: '/images/room-view.png', alt: 'Room view at Palms Resort & Beach, St. Croix' },
        ]}
      />

      {/* 5. Getting here / Location */}
      <section
        id="getting-here"
        aria-labelledby="getting-here-heading"
        className="section-padding bg-teal-900 text-white"
      >
        <div className="container-wide px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="text-amber-300 uppercase tracking-wider text-xs sm:text-sm font-medium">
                Plan Your Trip
              </p>
              <h2
                id="getting-here-heading"
                className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Getting Here
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-teal-100 leading-relaxed">
                Palms Resort & Beach is at 4126, Christiansted, St Croix 00820,
                U.S. Virgin Islands. Fly into Henry E. Rohlsen Airport (STX) or
                arrive by ferry from Puerto Rico. We&apos;re a short drive from the
                airport and ferry terminal.
              </p>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-teal-100">
                Search &quot;Palms Resort & Beach St. Croix&quot; or the address above in
                Google Maps or your preferred app for turn-by-turn directions.
              </p>
              <div className="mt-4 sm:mt-6 flex flex-wrap gap-3 sm:gap-4">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 font-medium text-white hover:bg-white/20 transition"
                >
                  <span aria-hidden>📍</span> Open in Maps
                </a>
                <Link
                  href="/contact"
                  className="min-h-[44px] inline-flex items-center gap-2 rounded-lg border border-white/50 px-4 py-2.5 font-medium text-white hover:bg-white/10 transition"
                >
                  Directions & Contact →
                </Link>
              </div>
            </div>
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-teal-700 aspect-[4/3] min-h-[220px] sm:min-h-[240px] bg-teal-800">
              <iframe
                title="Palms Resort & Beach on Google Maps"
                src="https://www.google.com/maps?q=17.76191,-64.73084&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[240px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Feature cards (3) — modern cards */}
      <section
        aria-labelledby="features-heading"
        className="section-padding bg-white"
      >
        <div className="container-wide px-4">
          <h2 id="features-heading" className="sr-only">
            Explore the resort
          </h2>
          <p className="text-teal-600 uppercase tracking-wider text-sm font-medium text-center">
            Stay, Play &amp; Dine
          </p>
          <h3
            className="mt-2 text-3xl sm:text-4xl font-bold text-gray-800 text-center"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Stay, Play &amp; Dine
          </h3>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <article className="group rounded-2xl shadow-xl overflow-hidden bg-white border border-stone-100 hover:shadow-2xl transition-shadow">
              <Link href="/rooms" className="block">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800&q=80"
                    alt="Beachfront room with ocean view at Palms Resort St. Croix"
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <span className="text-2xl" aria-hidden>🛏️</span>
                    <h3
                      className="font-bold text-lg mt-1"
                      style={{ fontFamily: 'var(--font-playfair), serif' }}
                    >
                      Beachfront Rooms
                    </h3>
                    <p className="text-sm text-white/90 mt-1">
                      Forty-five rooms with private patios or balconies and stunning
                      Caribbean views. King or two queens; ocean front and suite.
                    </p>
                    <span className="inline-block mt-3 text-amber-300 font-semibold text-sm">
                      Explore Rooms →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
            <article className="group rounded-2xl shadow-xl overflow-hidden bg-white border border-stone-100 hover:shadow-2xl transition-shadow">
              <Link href="/BeachActivities" className="block">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80"
                    alt="Beach and water activities at Palms Resort St. Croix"
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <span className="text-2xl" aria-hidden>🌊</span>
                    <h3
                      className="font-bold text-lg mt-1"
                      style={{ fontFamily: 'var(--font-playfair), serif' }}
                    >
                      Beach & Activities
                    </h3>
                    <p className="text-sm text-white/90 mt-1">
                      Snorkeling, kayaks, turtle watch, and one of the largest
                      freshwater pools on St. Croix. A mile of pristine beach.
                    </p>
                    <span className="inline-block mt-3 text-amber-300 font-semibold text-sm">
                      Discover More →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
            <article className="group rounded-2xl shadow-xl overflow-hidden bg-white border border-stone-100 hover:shadow-2xl transition-shadow">
              <Link href="/Dining" className="block">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                    alt="Dining and nightlife at Palms Resort St. Croix"
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <span className="text-2xl" aria-hidden>🍽️</span>
                    <h3
                      className="font-bold text-lg mt-1"
                      style={{ fontFamily: 'var(--font-playfair), serif' }}
                    >
                      Dining & Nightlife
                    </h3>
                    <p className="text-sm text-white/90 mt-1">
                      Restaurant, beach bar, Sunday brunch, and live entertainment
                      — fire dancers, music, bingo, and trivia throughout the week.
                    </p>
                    <span className="inline-block mt-3 text-amber-300 font-semibold text-sm">
                      See the Menu →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* 7. Weddings & events */}
      <section
        aria-labelledby="weddings-heading"
        className="section-padding bg-stone-50"
      >
        <div className="container-wide px-4">
          <p className="text-teal-600 uppercase tracking-wider text-sm font-medium text-center">
            Celebrate With Us
          </p>
          <h2
            id="weddings-heading"
            className="mt-2 text-3xl sm:text-4xl font-bold text-gray-800 text-center"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Weddings & Events
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80"
                alt="Beach wedding ceremony at Palms Resort & Beach"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80"
                alt="Wedding reception and dining at Palms Resort & Beach"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&q=80"
                alt="Beach event and gathering at Palms Resort & Beach"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80"
                alt="Beach wedding setup and decor at Palms Resort & Beach"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/event.jpg"
                alt="Resort event and entertainment at Palms Resort & Beach"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80"
                alt="Wedding celebration and party at Palms Resort & Beach"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
          </div>
          <p className="mt-10 text-gray-700 leading-relaxed max-w-2xl mx-auto text-center">
            Say &ldquo;I do&rdquo; on our mile-long beach or host your next gathering at
            Palms Resort & Beach. From intimate weddings to group retreats, we offer
            a stunning Caribbean backdrop and on-site catering and coordination support.
          </p>
          <p className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center min-h-[44px] rounded-lg bg-teal-700 px-6 sm:px-8 py-3 sm:py-3.5 font-semibold text-white hover:bg-teal-600 transition focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Inquire About Your Event →
            </Link>
          </p>
        </div>
      </section>

      {/* 8. Testimonials — customer trust, resort social proof */}
      <section
        aria-labelledby="reviews-heading"
        className="section-padding bg-teal-900 text-white"
      >
        <div className="container-wide px-4 text-center">
          <p className="text-amber-300 uppercase tracking-wider text-sm font-medium">
            What Guests Say
          </p>
          <h2
            id="reviews-heading"
            className="mt-2 text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Unforgettable St. Croix Getaways
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <blockquote className="rounded-xl bg-teal-800/80 p-6 text-left border border-teal-700">
              <p className="text-teal-50 italic">
                &ldquo;Staff was very courteous breakfast was excellent rooms were clean and neat hotel overall was very inviting and a great experience.&rdquo;
              </p>
              <footer className="mt-4 text-amber-300 font-semibold">— Karen</footer>
            </blockquote>
            <blockquote className="rounded-xl bg-teal-800/80 p-6 text-left border border-teal-700">
              <p className="text-teal-50 italic">
                &ldquo;The place was good location and was right on the beach rooms where nice for the price will stay there again.&rdquo;
              </p>
              <footer className="mt-4 text-amber-300 font-semibold">— Richard</footer>
            </blockquote>
            <blockquote className="rounded-xl bg-teal-800/80 p-6 text-left border border-teal-700">
              <p className="text-teal-50 italic">
                &ldquo;Room was clean, staff was wonderful, balcony was good. Did stop in for breakfast.&rdquo;
              </p>
              <footer className="mt-4 text-amber-300 font-semibold">— Bevern</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* 9. Nearby attractions / Explore St. Croix */}
      <section
        aria-labelledby="explore-heading"
        className="section-padding bg-white border-t border-stone-200"
      >
        <div className="container-wide px-4">
          <p className="text-teal-600 uppercase tracking-wider text-sm font-medium text-center">
            Beyond the Resort
          </p>
          <h2
            id="explore-heading"
            className="mt-2 text-3xl sm:text-4xl font-bold text-gray-800 text-center"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Explore St. Croix
          </h2>
          <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
            While you&apos;re here, discover the best of the island — from historic towns
            to reef adventures and rum tastings.
          </p>
          <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto text-center lg:text-left" role="list">
            {[
              { name: 'Christiansted & Frederiksted', desc: 'Historic towns, shopping, and dining' },
              { name: 'Buck Island Reef', desc: 'Snorkeling and sailing trips' },
              { name: 'Cruzan Rum Distillery', desc: 'Tours and tastings' },
              { name: 'Rainforest & hiking', desc: 'Trails and scenic drives' },
              { name: 'Diving & snorkeling', desc: 'Reefs and wrecks around the island' },
              { name: 'Local markets & culture', desc: 'Art, crafts, and island life' },
            ].map(({ name, desc }) => (
              <li
                key={name}
                className="rounded-xl bg-stone-50 p-4 border border-stone-200 text-center lg:text-left"
              >
                <span className="font-semibold text-gray-800">{name}</span>
                <p className="mt-1 text-sm text-gray-600">{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 10. The Palms Difference */}
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
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center lg:text-left"
            role="list"
          >
            {[
              { emoji: '🏖️', title: 'Mile-Long Beach', desc: 'Unspoiled, palm-lined Caribbean beach steps from your door.' },
              { emoji: '🏊', title: 'Freshwater Pool', desc: 'One of the largest freshwater pools on all of St. Croix.' },
              { emoji: '🤿', title: 'Water Sports', desc: 'Complimentary snorkeling gear, kayaks, and Long Reef access.' },
              { emoji: '🍽️', title: 'On-Site Dining', desc: 'Restaurant, beach bar, Sunday brunch, and nightly entertainment.' },
              { emoji: '🌊', title: 'Ocean Views', desc: 'Every room overlooks the Caribbean from a private patio or balcony.' },
              { emoji: '🐢', title: 'Turtle Watching', desc: 'Seasonal guided turtle watch on our very own beach.' },
              { emoji: '🎶', title: 'Live Entertainment', desc: 'Live music, fire dancers, bingo, trivia — every night of the week.' },
              { emoji: '👨‍👩‍👧‍👦', title: 'Family Friendly', desc: 'Comfort and privacy for families of all sizes.' },
            ].map(({ emoji, title, desc }) => (
              <li
                key={title}
                className="rounded-xl bg-white p-6 shadow-md text-center lg:text-left border border-stone-100 hover:shadow-lg transition-shadow"
              >
                <span className="text-3xl" aria-hidden>{emoji}</span>
                <h3 className="mt-2 font-semibold text-gray-800">{title}</h3>
                <p className="mt-1 text-sm text-gray-600">{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 11. Newsletter / Stay in touch */}
      <section
        aria-labelledby="newsletter-heading"
        className="section-padding bg-teal-800 text-white"
      >
        <div className="container-narrow px-4 text-center">
          <p className="text-amber-300 uppercase tracking-wider text-sm font-medium">
            Stay in Touch
          </p>
          <h2
            id="newsletter-heading"
            className="mt-2 text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Get Resort News &amp; Tips
          </h2>
          <p className="mt-4 text-teal-100 max-w-xl mx-auto">
            Join our list for updates, seasonal offers, and ideas for your next
            St. Croix escape. No spam — just island inspiration.
          </p>
          <NewsletterForm />
          <p className="mt-4 text-sm text-teal-300">
            You can unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* 12. FAQ — customer + SEO */}
      <section
        aria-labelledby="faq-heading"
        className="section-padding bg-white border-t border-stone-200"
      >
        <div className="container-narrow px-4">
          <p className="text-teal-600 uppercase tracking-wider text-sm font-medium text-center">
            Good to Know
          </p>
          <h2
            id="faq-heading"
            className="mt-2 text-3xl sm:text-4xl font-bold text-gray-800 text-center"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Frequently Asked Questions
          </h2>
          <dl className="mt-10 space-y-6 max-w-2xl mx-auto">
            <div className="rounded-xl bg-stone-50 p-5 border border-stone-200">
              <dt className="font-semibold text-gray-800">Where is Palms Resort & Beach located?</dt>
              <dd className="mt-2 text-gray-600">
                Palms Resort & Beach is on St. Croix, U.S. Virgin Islands, at 4126, Christiansted, St Croix 00820, with a mile-long
                private palm-lined beach and 45 beachfront rooms.
              </dd>
            </div>
            <div className="rounded-xl bg-stone-50 p-5 border border-stone-200">
              <dt className="font-semibold text-gray-800">What time is check-in and check-out?</dt>
              <dd className="mt-2 text-gray-600">
                Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in or
                late check-out may be available upon request.
              </dd>
            </div>
            <div className="rounded-xl bg-stone-50 p-5 border border-stone-200">
              <dt className="font-semibold text-gray-800">Is there dining on site?</dt>
              <dd className="mt-2 text-gray-600">
                Yes. We have an on-site restaurant (breakfast, lunch, dinner) and a beach
                bar. Sunday brunch and nightly entertainment are available.
              </dd>
            </div>
            <div className="rounded-xl bg-stone-50 p-5 border border-stone-200">
              <dt className="font-semibold text-gray-800">Does the resort offer water activities?</dt>
              <dd className="mt-2 text-gray-600">
                Complimentary snorkeling gear and kayaks are available. We offer access to
                Long Reef for diving and seasonal guided turtle watch on our beach.
              </dd>
            </div>
          </dl>
          <p className="mt-8 text-center">
            <Link
              href="/contact"
              className="text-teal-600 font-semibold hover:text-teal-700 underline underline-offset-2"
            >
              More questions? Contact us →
            </Link>
          </p>
        </div>
      </section>

      {/* 13. CTA banner */}
      <section
        aria-labelledby="cta-heading"
        className="relative min-h-[50vh] sm:min-h-[60vh] flex flex-col justify-center items-center text-center bg-teal-900"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${CTA_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-teal-900/75" />
        <div className="relative z-10 px-4 py-16 sm:py-20 max-w-2xl">
          <h2
            id="cta-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Ready to Escape?
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-white/95">
            Book your stay at Palms Resort & Beach and discover what island life
            is truly all about. Book direct for availability.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 sm:mt-8 inline-flex items-center justify-center min-h-[44px] rounded-lg bg-amber-500 px-6 sm:px-8 py-3 sm:py-3.5 text-base font-semibold text-gray-900 shadow-lg transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-teal-900"
          >
            Reserve Your Room Today
          </a>
        </div>
      </section>
    </>
  );
}
