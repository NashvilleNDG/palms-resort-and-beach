import type { Metadata } from 'next';
import Image from 'next/image';

const BOOKING_URL = 'https://hotels.cloudbeds.com/en/reservation/DRaDzt?currency=usd';

export const metadata: Metadata = {
  title: 'Accommodations',
  description:
    '40 beachfront rooms at Palms Resort & Beach, St. Croix. Partial ocean, garden view, ocean front, and rooftop suite. Book direct for the best rates.',
  openGraph: {
    title: 'Accommodations | Palms Resort & Beach',
    description: '40 beachfront rooms with private patios or balconies on St. Croix.',
  },
};

const roomTypes = [
  {
    name: 'Partial Ocean / Garden View',
    description:
      'Comfortable rooms with views of our tropical gardens and partial ocean glimpses. Private patio or balcony, king or two queens.',
    image: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800&q=80',
  },
  {
    name: 'Ocean Front',
    description:
      'Direct ocean views from your private balcony. Wake up to the sound of waves and stunning Caribbean sunrises. King or two queens available.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
  },
  {
    name: 'Rooftop Suite',
    description:
      'Our premier accommodation with panoramic ocean and resort views. Spacious living area, premium amenities, and the best sunset views on property.',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80',
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
      <section className="relative py-24 bg-teal-900 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-800 to-teal-900" />
        <div className="relative z-10 container-narrow px-4">
          <p className="text-amber-300 uppercase tracking-widest text-sm font-medium">
            Accommodations
          </p>
          <h1
            className="mt-2 text-4xl sm:text-5xl font-bold text-white"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            It&apos;s Time to Forget About Time
          </h1>
          <p className="mt-6 text-lg text-teal-100 max-w-2xl mx-auto">
            40 beachfront rooms with private patios or balconies, ocean breezes,
            and stunning Caribbean views. Your island retreat awaits.
          </p>
        </div>
      </section>

      <section aria-labelledby="room-types-heading" className="section-padding bg-stone-50">
        <div className="container-wide px-4">
          <h2 id="room-types-heading" className="sr-only">
            Room types
          </h2>
          <ul className="space-y-16" role="list">
            {roomTypes.map((room) => (
              <li key={room.name} className="rounded-2xl overflow-hidden bg-white shadow-xl">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-80">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3
                      className="text-2xl font-bold text-gray-800"
                      style={{ fontFamily: 'var(--font-playfair), serif' }}
                    >
                      {room.name}
                    </h3>
                    <p className="mt-3 text-gray-600">{room.description}</p>
                  </div>
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
            className="text-2xl font-bold text-gray-800"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Room Amenities
          </h2>
          <ul className="mt-6 flex flex-wrap justify-center gap-3" role="list">
            {amenities.map((item) => (
              <li
                key={item}
                className="rounded-full bg-stone-100 px-4 py-2 text-gray-700"
              >
                {item}
              </li>
            ))}
          </ul>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-md bg-amber-500 px-8 py-3 font-medium text-gray-900 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            Book Your Room
          </a>
        </div>
      </section>
    </>
  );
}
