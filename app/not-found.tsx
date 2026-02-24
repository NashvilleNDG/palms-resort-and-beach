import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section-padding bg-teal-900 text-white min-h-[60vh] flex items-center">
      <div className="container-narrow px-4 text-center">
        <p className="text-amber-300 uppercase tracking-wider text-sm font-medium">Page not found</p>
        <h1
          className="mt-2 text-6xl sm:text-8xl font-bold text-teal-200"
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          404
        </h1>
        <p className="mt-4 text-teal-100 max-w-md mx-auto text-lg">
          This page doesn&apos;t exist or has been moved. Head back to the resort and we&apos;ll get
          you back on track.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-amber-500 px-8 py-3 font-semibold text-gray-900 hover:bg-amber-400 transition focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-teal-900"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
