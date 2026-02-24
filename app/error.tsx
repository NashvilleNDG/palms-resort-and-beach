'use client';

import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="section-padding bg-teal-900 text-white min-h-[60vh] flex items-center">
      <div className="container-narrow px-4 text-center">
        <h1 className="text-2xl font-bold text-teal-100">Something went wrong</h1>
        <p className="mt-4 text-teal-200">
          We couldn&apos;t load this page. Please try again.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={reset}
            className="min-h-[44px] rounded-lg bg-amber-500 px-6 py-3 font-semibold text-gray-900 hover:bg-amber-400 transition focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-teal-900"
          >
            Try again
          </button>
          <Link
            href="/"
            className="min-h-[44px] inline-flex items-center rounded-lg border border-white/50 px-6 py-3 font-semibold text-white hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-teal-900"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
