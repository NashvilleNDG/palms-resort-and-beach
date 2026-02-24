'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const STORAGE_KEY = 'palms-cookie-consent';

export function CookieConsent() {
  const [accepted, setAccepted] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      setAccepted(stored === 'true');
    } catch {
      setAccepted(false);
    }
  }, []);

  function handleAccept() {
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
      setAccepted(true);
    } catch {
      setAccepted(true);
    }
  }

  if (accepted !== false) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-teal-800 bg-teal-900 text-white shadow-lg"
    >
      <div className="container-wide px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-sm text-teal-100">
          We use cookies to improve your experience and analyze site traffic. By continuing, you
          agree to our use of cookies. See our{' '}
          <Link
            href="/privacy"
            className="underline hover:text-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-teal-900 rounded"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={handleAccept}
          className="flex-shrink-0 min-h-[44px] rounded-md bg-amber-500 px-5 py-2.5 font-medium text-gray-900 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-teal-900"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
