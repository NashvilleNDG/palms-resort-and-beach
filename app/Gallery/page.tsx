import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Photos of Palms Resort & Beach, St. Croix: beach, rooms, pool, dining, and Caribbean views.',
  openGraph: {
    title: 'Gallery | Palms Resort & Beach',
    description: 'See the resort, beach, rooms, and activities in our gallery.',
  },
};

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80', alt: 'Beach sunset' },
  { src: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=600&q=80', alt: 'Beachfront room' },
  { src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', alt: 'Beach and palm trees' },
  { src: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&q=80', alt: 'Pool' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', alt: 'Restaurant' },
  { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80', alt: 'Ocean view room' },
  { src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80', alt: 'Resort exterior' },
  { src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&q=80', alt: 'Beach bar' },
  { src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80', alt: 'Suite interior' },
];

export default function GalleryPage() {
  return (
    <>
      <section className="relative py-16 sm:py-24 bg-teal-900 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-800 to-teal-900" />
        <div className="relative z-10 container-narrow px-4">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Gallery
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-teal-100 max-w-2xl mx-auto">
            A glimpse of Palms Resort & Beach, our mile-long beach, rooms, pool,
            and the beauty of St. Croix.
          </p>
        </div>
      </section>

      <section aria-label="Photo gallery" className="section-padding bg-stone-50">
        <div className="container-wide px-4">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" role="list">
            {galleryImages.map(({ src, alt }) => (
              <li key={src} className="rounded-2xl overflow-hidden shadow-lg">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
