import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { OptimizedBackgroundImage } from '@/components/OptimizedImage';
import { BASE_URL } from '@/lib/site';

const BOOKING_URL = 'https://hotels.cloudbeds.com/en/reservation/DRaDzt?currency=usd';
const PHONE = 'tel:3407188920';
const EMAIL = 'mailto:office@palmsresortandbeach.com';
const LOCATION = '4126, Christiansted, St Croix 00820, U.S. Virgin Islands';
const MAPS_URL = 'https://maps.app.goo.gl/hyfj8NW5GkjBXpL67';
const MAP_EMBED_URL = 'https://www.google.com/maps?q=17.76191,-64.73084&z=16&output=embed';
const HERO_IMAGE = '/images/resort-img4.png';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Palms Resort & Beach, St. Croix. Address, phone 340-718-8920, email. Book your stay online.',
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    title: 'Contact | Palms Resort & Beach',
    description: 'Get in touch or book your stay at Palms Resort & Beach, St. Croix.',
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative py-16 sm:py-24 bg-teal-900 text-center min-h-[40vh] flex flex-col justify-center">
        <OptimizedBackgroundImage src={HERO_IMAGE} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-teal-900/95" />
        <div className="relative z-10 container-narrow px-4">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Contact
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/95 max-w-2xl mx-auto drop-shadow">
            Get in touch or book your stay at Palms Resort & Beach. We are
            here to help plan your St. Croix escape.
          </p>
        </div>
      </section>

      <section aria-labelledby="contact-info-heading" className="section-padding bg-stone-50">
        <div className="container-wide px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2
                id="contact-info-heading"
                className="text-xl sm:text-2xl font-bold text-gray-800"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Palms Resort & Beach
              </h2>
              <address className="mt-6 not-italic text-gray-600">
                <p className="font-medium text-gray-800">{LOCATION}</p>
                <p className="mt-4">
                  <span className="font-medium text-gray-800">Phone:</span>{' '}
                  <a
                    href={PHONE}
                    className="text-teal-700 underline decoration-teal-500 transition hover:text-teal-800 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
                  >
                    340-718-8920
                  </a>
                </p>
                <p className="mt-2">
                  <span className="font-medium text-gray-800">Email:</span>{' '}
                  <a
                    href={EMAIL}
                    className="text-teal-700 underline decoration-teal-500 transition hover:text-teal-800 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
                  >
                    office@palmsresortandbeach.com
                  </a>
                </p>
              </address>
              <p className="mt-6 text-gray-600">
                Front desk is available for questions and reservations. For
                the best availability, book directly online.
              </p>
              <h2
                className="mt-10 text-xl sm:text-2xl font-bold text-gray-800"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Send Us a Message
              </h2>
              <p className="mt-2 text-gray-600">
                Have a question or special request? Fill out the form below and we&apos;ll get back to you.
              </p>
              <div className="mt-4">
                <ContactForm />
              </div>
            </div>

            <div>
              <h2
                className="text-xl sm:text-2xl font-bold text-gray-800"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Book Your Stay
              </h2>
              <p className="mt-4 text-gray-600">
                Ready to reserve? Use our secure booking link below for
                availability and instant confirmation.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center min-h-[44px] rounded-md bg-amber-500 px-6 sm:px-8 py-3 font-medium text-gray-900 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                Reserve Your Room Today →
              </a>
              <div className="mt-8 rounded-xl border border-stone-200 bg-white p-6">
                <p className="font-medium text-gray-800">Map &amp; Directions</p>
                <p className="mt-2 text-sm text-gray-600">
                  Palms Resort & Beach is located at 4126, Christiansted, St Croix 00820,
                  U.S. Virgin Islands. Search for the address or &quot;Palms Resort & Beach St. Croix&quot; in your
                  preferred maps app for driving directions from the airport or
                  ferry.
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-[44px] items-center font-medium text-teal-700 hover:text-teal-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded"
                >
                  Open in Google Maps →
                </a>
                <div className="mt-4 rounded-lg overflow-hidden aspect-video bg-stone-100">
                  <iframe
                    title="Palms Resort & Beach location map"
                    src={MAP_EMBED_URL}
                    width="100%"
                    height="100%"
                    className="w-full h-full min-h-[200px] border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
