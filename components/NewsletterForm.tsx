'use client';

import { useState } from 'react';

const WEB3FORMS_NEWSLETTER_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_NEWSLETTER_ACCESS_KEY || '15513994-dc11-40fc-b05a-24d6d7dc1bce';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const NEWSLETTER_EMAIL = 'office@palmsresortbeach.com';

export function NewsletterForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get('name') as string) || '';
    const email = (formData.get('email') as string) || '';

    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_NEWSLETTER_KEY,
          to: NEWSLETTER_EMAIL,
          from_name: name,
          email,
          subject: 'Newsletter signup - Palms Resort & Beach',
          message: `Newsletter subscription from ${name} (${email})`,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || 'Submission failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
    }
  }

  if (status === 'success') {
    return (
      <div className="mt-6 sm:mt-8 max-w-md mx-auto rounded-lg bg-teal-700/50 border border-teal-600 p-4 text-center">
        <p className="font-medium text-white">Thanks for subscribing!</p>
        <p className="mt-1 text-sm text-teal-100">
          We&apos;ll send you resort news and tips. No spam — just island inspiration.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 sm:mt-8 flex flex-col gap-3 max-w-md mx-auto"
      aria-label="Newsletter signup"
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <label htmlFor="newsletter-name" className="sr-only">
          Full name
        </label>
        <input
          id="newsletter-name"
          type="text"
          name="name"
          required
          autoComplete="name"
          placeholder="Full name"
          className="flex-1 min-w-0 min-h-[44px] rounded-lg border border-teal-600 bg-teal-900/50 px-4 py-3 text-white placeholder-teal-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-base"
        />
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="Your email"
          className="flex-1 min-w-0 min-h-[44px] rounded-lg border border-teal-600 bg-teal-900/50 px-4 py-3 text-white placeholder-teal-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-base"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="min-h-[44px] w-full sm:w-auto rounded-lg bg-amber-500 px-6 py-3 font-semibold text-gray-900 hover:bg-amber-400 transition focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-teal-800 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
      </button>
      {status === 'error' && (
        <p className="text-sm text-amber-200 text-center" role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
