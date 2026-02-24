import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Palms Resort & Beach, St. Croix. How we collect, use, and protect your information.',
  openGraph: {
    title: 'Privacy Policy | Palms Resort & Beach',
    description: 'How we collect, use, and protect your information at Palms Resort & Beach.',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative py-16 sm:py-24 bg-teal-900 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-800 to-teal-900" />
        <div className="relative z-10 container-narrow px-4">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-teal-200">
            Last updated: February 2025
          </p>
        </div>
      </section>

      <section className="section-padding bg-stone-50">
        <div className="container-narrow px-4 prose prose-stone max-w-none">
          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Introduction</h2>
          <p className="text-gray-600">
            Palms Resort & Beach (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information when you visit our
            website or contact us.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Information We Collect</h2>
          <p className="text-gray-600">
            We may collect information you provide directly, such as when you fill out our contact
            form, sign up for our newsletter, or make a reservation. This may include your name,
            email address, phone number, and message content. We may also collect information
            automatically when you use our site, such as your IP address, browser type, and pages
            visited.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-gray-600">
            We use the information we collect to respond to your inquiries, send you updates and
            offers (with your consent), improve our website and services, and comply with legal
            obligations.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Cookies</h2>
          <p className="text-gray-600">
            Our website may use cookies and similar technologies to enhance your experience and
            analyze site traffic. You can control cookie preferences through your browser settings.
            See our cookie banner for more information.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Third Parties</h2>
          <p className="text-gray-600">
            We may share your information with trusted third parties who assist us in operating our
            website and business (e.g., booking engines, email service providers). We do not sell
            your personal information to third parties.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Your Rights</h2>
          <p className="text-gray-600">
            Depending on your location, you may have the right to access, correct, or delete your
            personal information, or to opt out of marketing communications. Contact us at
            340-718-8920 or through our contact form to exercise these rights.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Contact</h2>
          <p className="text-gray-600">
            For questions about this Privacy Policy, contact Palms Resort & Beach at 4126,
            Christiansted, St Croix 00820, U.S. Virgin Islands, or call 340-718-8920.
          </p>
        </div>
      </section>
    </>
  );
}
