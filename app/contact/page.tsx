import type { Metadata } from 'next';

const BOOKING_URL = 'https://hotels.cloudbeds.com/en/reservation/DRaDzt?currency=usd';
const PHONE = 'tel:3407188920';
const LOCATION = 'St. Croix, U.S. Virgin Islands';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Palms Resort & Beach, St. Croix. Phone 340-718-8920. Address and directions. Book your stay online.',
  openGraph: {
    title: 'Contact | Palms Resort & Beach',
    description: 'Get in touch or book your stay at Palms Resort & Beach, St. Croix.',
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative py-24 bg-teal-900 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-800 to-teal-900" />
        <div className="relative z-10 container-narrow px-4">
          <h1
            className="text-4xl sm:text-5xl font-bold text-white"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Contact
          </h1>
          <p className="mt-6 text-lg text-teal-100 max-w-2xl mx-auto">
            Get in touch or book your stay at Palms Resort & Beach. We are
            here to help plan your St. Croix escape.
          </p>
        </div>
      </section>

      <section aria-labelledby="contact-info-heading" className="section-padding bg-stone-50">
        <div className="container-wide px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2
                id="contact-info-heading"
                className="text-2xl font-bold text-gray-800"
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
              </address>
              <p className="mt-6 text-gray-600">
                Front desk is available for questions and reservations. For
                the best rates and availability, book directly online.
              </p>
            </div>

            <div>
              <h2
                className="text-2xl font-bold text-gray-800"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Book Your Stay
              </h2>
              <p className="mt-4 text-gray-600">
                Ready to reserve? Use our secure booking link below for the
                best rates and instant confirmation.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-md bg-amber-500 px-8 py-3 font-medium text-gray-900 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                Reserve Your Room Today →
              </a>
              <div className="mt-8 rounded-xl border border-stone-200 bg-white p-6">
                <p className="font-medium text-gray-800">Map & Directions</p>
                <p className="mt-2 text-sm text-gray-600">
                  Palms Resort & Beach is located on the island of St. Croix,
                  U.S. Virgin Islands. Search for &quot;Palms Resort & Beach St. Croix&quot; in your
                  preferred maps app for driving directions from the airport or
                  ferry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
