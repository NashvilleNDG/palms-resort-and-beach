import type { Metadata } from 'next';
import { BASE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'Terms of Use for Palms Resort & Beach. Rules and guidelines for using our site and services.',
  alternates: { canonical: `${BASE_URL}/terms` },
  openGraph: {
    title: 'Terms of Use | Palms Resort & Beach',
    description: 'Terms and conditions for using the Palms Resort & Beach website.',
  },
};

export default function TermsPage() {
  return (
    <>
      <section className="relative py-16 sm:py-24 bg-teal-900 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-800 to-teal-900" />
        <div className="relative z-10 container-narrow px-4">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Terms of Use
          </h1>
          <p className="mt-4 text-sm text-teal-200">
            Last updated: February 2025
          </p>
        </div>
      </section>

      <section className="section-padding bg-stone-50">
        <div className="container-narrow px-4 prose prose-stone max-w-none">
          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Acceptance of Terms</h2>
          <p className="text-gray-600">
            By accessing or using the Palms Resort & Beach website, you agree to be bound by these
            Terms of Use. If you do not agree, please do not use our site.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Use of the Site</h2>
          <p className="text-gray-600">
            You may use this website for lawful purposes only. You may not use the site to transmit
            harmful, offensive, or illegal content, or to attempt to gain unauthorized access to our
            systems or data.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Reservations &amp; Booking</h2>
          <p className="text-gray-600">
            Reservations made through this website or our booking partners are subject to the
            terms and policies of the booking provider and to Palms Resort & Beach reservation
            and cancellation policies. We recommend reviewing those policies at the time of booking.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Intellectual Property</h2>
          <p className="text-gray-600">
            All content on this site, including text, images, and logos, is the property of Palms
            Resort & Beach or its licensors and is protected by copyright and other intellectual
            property laws. You may not reproduce or use our content without prior written permission.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Disclaimer</h2>
          <p className="text-gray-600">
            This website is provided &quot;as is.&quot; We do not warrant that the site will be
            uninterrupted or error-free. We are not liable for any damages arising from your use
            of the site or from any linked third-party sites.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Governing Law</h2>
          <p className="text-gray-600">
            These Terms are governed by the laws of the U.S. Virgin Islands. Any disputes shall
            be resolved in the courts of that jurisdiction.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Contact</h2>
          <p className="text-gray-600">
            For questions about these Terms of Use, contact Palms Resort & Beach at 4126,
            Christiansted, St Croix 00820, U.S. Virgin Islands, call 340-718-8920, or email office@palmsresortandbeach.com.
          </p>
        </div>
      </section>
    </>
  );
}
