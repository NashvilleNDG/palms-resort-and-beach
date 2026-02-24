import type { Metadata } from 'next';
import { OptimizedImage, OptimizedBackgroundImage } from '@/components/OptimizedImage';

const BOOKING_URL = 'https://hotels.cloudbeds.com/en/reservation/DRaDzt?currency=usd';

export const metadata: Metadata = {
  title: 'Accommodations',
  description:
    '45 beachfront rooms at Palms Resort & Beach, St. Croix. Ocean/garden view, ocean front, and suite. Book direct.',
  openGraph: {
    title: 'Accommodations | Palms Resort & Beach',
    description: '45 beachfront rooms with private patios or balconies on St. Croix.',
  },
};

const roomTypes = [
  {
    name: 'Ocean / Garden View',
    description:
      'Comfortable rooms with views of our tropical gardens and partial ocean glimpses. Private patio or balcony, king or two queens.',
    image: '/images/Suite.png',
  },
  {
    name: 'Ocean Front',
    description:
      'Direct ocean views from your private balcony. Wake up to the sound of waves and stunning Caribbean sunrises. King or two queens available.',
    image: '/images/Suite2.png',
    imageOnRight: true,
  },
  {
    name: 'Suite',
    description:
      'Our premier accommodation with panoramic ocean and resort views. Spacious living area, premium amenities, and the best sunset views on property.',
    image: '/images/Suite1.png',
  },
];

const amenities = [
  'Private patio or balcony',
  'Air conditioning',
  'Free Wi-Fi',
  'Flat-screen TV',
  'Mini refrigerator',
  'Coffee maker',
  'In-room safe',
  'Ocean or garden views',
];

export default function RoomsPage() {
  return (
    <>
      <section className="relative py-16 sm:py-24 bg-teal-900 text-center min-h-[40vh] sm:min-h-[50vh] flex flex-col justify-center">
        <OptimizedBackgroundImage src="/images/resort.png" />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/80 via-teal-900/70 to-teal-900" />
        <div className="relative z-10 container-narrow px-4">
          <p className="text-amber-300 uppercase tracking-widest text-xs sm:text-sm font-medium">
            Accommodations
          </p>
          <h1
            className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            It&apos;s Time to Forget About Time
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-teal-100 max-w-2xl mx-auto px-0">
            45 beachfront rooms with private patios or balconies, ocean breezes,
            and stunning Caribbean views. Your island retreat awaits.
          </p>
        </div>
      </section>

      <section aria-labelledby="room-types-heading" className="section-padding bg-stone-50">
        <div className="container-wide px-4">
          <h2 id="room-types-heading" className="sr-only">
            Room types
          </h2>
          <ul className="space-y-8 sm:space-y-12 md:space-y-16" role="list">
            {roomTypes.map((room) => (
              <li key={room.name} className="rounded-xl sm:rounded-2xl overflow-hidden bg-white shadow-xl">
                <div className="grid md:grid-cols-2 gap-0">
                  {room.imageOnRight ? (
                    <>
                      <div className="p-5 sm:p-6 md:p-8 flex flex-col justify-center order-2 md:order-1">
                        <h3
                          className="text-xl sm:text-2xl font-bold text-gray-800"
                          style={{ fontFamily: 'var(--font-playfair), serif' }}
                        >
                          {room.name}
                        </h3>
                        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600">{room.description}</p>
                      </div>
                      <div className="relative h-56 sm:h-64 md:h-80 order-1 md:order-2">
                        <OptimizedImage
                          src={room.image}
                          alt={room.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative h-56 sm:h-64 md:h-80">
                        <OptimizedImage
                          src={room.image}
                          alt={room.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <div className="p-5 sm:p-6 md:p-8 flex flex-col justify-center">
                        <h3
                          className="text-xl sm:text-2xl font-bold text-gray-800"
                          style={{ fontFamily: 'var(--font-playfair), serif' }}
                        >
                          {room.name}
                        </h3>
                        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600">{room.description}</p>
                      </div>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="amenities-heading" className="section-padding bg-white">
        <div className="container-narrow px-4 text-center">
          <h2
            id="amenities-heading"
            className="text-xl sm:text-2xl font-bold text-gray-800"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Room Amenities
          </h2>
          <ul className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-2 sm:gap-3" role="list">
            {amenities.map((item) => (
              <li
                key={item}
                className="rounded-full bg-stone-100 px-3 py-2 sm:px-4 text-sm sm:text-base text-gray-700"
              >
                {item}
              </li>
            ))}
          </ul>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 sm:mt-10 inline-flex items-center justify-center min-h-[44px] rounded-md bg-amber-500 px-6 sm:px-8 py-3 font-medium text-gray-900 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            Book Your Room
          </a>
        </div>
      </section>
    </>
  );
}
