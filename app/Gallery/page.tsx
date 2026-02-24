import type { Metadata } from 'next';
import { GalleryLightbox } from '@/components/GalleryLightbox';
import { OptimizedBackgroundImage } from '@/components/OptimizedImage';
import { BASE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Photos of Palms Resort & Beach, St. Croix: beach, rooms, pool, dining, and Caribbean views.',
  alternates: { canonical: `${BASE_URL}/Gallery` },
  openGraph: {
    title: 'Gallery | Palms Resort & Beach',
    description: 'See the resort, beach, rooms, and activities in our gallery.',
  },
};

const galleryImages = [
  { src: '/images/resort.png', alt: 'Palms Resort & Beach resort view, St. Croix' },
  { src: '/images/resort1.png', alt: 'Resort grounds and beach, Palms Resort & Beach' },
  { src: '/images/resort-about.png', alt: 'Tropical pathway with palm trees and resort buildings, St. Croix' },
  { src: '/images/resort-img.png', alt: 'Beachfront and palm-lined shore, Palms Resort & Beach' },
  { src: '/images/resort-img1.png', alt: 'Beach, palm trees and resort buildings, St. Croix' },
  { src: '/images/resort-img2.png', alt: 'Resort beach and ocean view, St. Croix' },
  { src: '/images/resort-img3.png', alt: 'Resort and Caribbean views, Palms Resort & Beach' },
  { src: '/images/resort-img4.png', alt: 'Resort lobby and common area, The Palms, St. Croix' },
  { src: '/images/resort-img5.png', alt: 'Resort scenery and beach, Palms Resort & Beach' },
  { src: '/images/resort-img6.png', alt: 'Ocean and resort view, St. Croix' },
  { src: '/images/resort-img7.png', alt: 'Beach and resort grounds, Palms Resort & Beach' },
  { src: '/images/Suite.png', alt: 'Ocean or garden view room at Palms Resort & Beach' },
  { src: '/images/Suite1.png', alt: 'Beachfront suite with ocean view, Palms Resort & Beach' },
  { src: '/images/Suite2.png', alt: 'Ocean front room with beach view, Palms Resort & Beach' },
  { src: '/images/Suite3.png', alt: 'Resort room at Palms Resort & Beach' },
  { src: '/images/Suite4.png', alt: 'Accommodation at Palms Resort & Beach' },
  { src: '/images/Suite5.png', alt: 'Room and beach view, Palms Resort & Beach' },
  { src: '/images/Suite6.png', alt: 'Resort room, St. Croix' },
  { src: '/images/Suite7.png', alt: 'Room at Palms Resort & Beach' },
  { src: '/images/room-view.png', alt: 'Room view at Palms Resort & Beach, St. Croix' },
  { src: '/images/room-view1.png', alt: 'Room with ocean or garden view, Palms Resort & Beach' },
  { src: '/images/swimming-pool1.jpg', alt: 'Pool and ocean view at Palms Resort & Beach' },
  { src: '/images/swimming-pool.png', alt: 'Freshwater pool and lounge area, St. Croix' },
  { src: '/images/water-activity.png', alt: 'Beach and water activities at Palms Resort & Beach' },
  { src: '/images/restaurant.png', alt: 'Outdoor dining and pool area at Palms Resort & Beach' },
  { src: '/images/restaurant1.png', alt: 'Dining at Palms Resort & Beach' },
  { src: '/images/restaurant-front.png', alt: 'Restaurant and bar at Palms Resort & Beach' },
  { src: '/images/beach-restaurant.png', alt: 'Beach restaurant and dining, Palms Resort & Beach' },
  { src: '/images/food.png', alt: 'Dining and cuisine at Palms Resort & Beach' },
  { src: '/images/event.jpg', alt: 'Resort event and entertainment at Palms Resort & Beach' },
  { src: '/images/event1.png', alt: 'Event at Palms Resort & Beach, St. Croix' },
  { src: '/images/event2.png', alt: 'Resort event, Palms Resort & Beach' },
  { src: '/images/event3.png', alt: 'Entertainment and events at Palms Resort & Beach' },
];

export default function GalleryPage() {
  return (
    <>
      <section className="relative py-16 sm:py-24 min-h-[40vh] sm:min-h-[50vh] flex flex-col justify-center text-center bg-teal-900">
        <OptimizedBackgroundImage src="/images/resort-img3.png" />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/80 via-teal-900/60 to-teal-900" />
        <div className="relative z-10 container-narrow px-4">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Gallery
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/95 max-w-2xl mx-auto drop-shadow">
            A glimpse of Palms Resort & Beach, our mile-long beach, rooms, pool,
            and the beauty of St. Croix.
          </p>
        </div>
      </section>

      <section aria-label="Photo gallery" className="section-padding bg-stone-50">
        <div className="container-wide px-4">
          <GalleryLightbox images={galleryImages} />
        </div>
      </section>
    </>
  );
}
