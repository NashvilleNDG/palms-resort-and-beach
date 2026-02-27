'use client';

import { useState } from 'react';

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '3d42ea6c-68c4-4ba0-81fa-32a8fcb967a4';
const INQUIRY_EMAIL = 'office@palmsresortbeach.com';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus('error');
      setErrorMessage('Form is not configured. Please set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.');
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get('name') as string) || '';
    const email = (formData.get('email') as string) || '';
    const phone = (formData.get('phone') as string) || '';
    const message = (formData.get('message') as string) || '';

    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          to: INQUIRY_EMAIL,
          from_name: name.trim(),
          email: email.trim(),
          message: phone ? `Phone: ${phone.trim()}\n\n${message.trim()}` : message.trim(),
          subject: `Contact form inquiry from ${name.trim()}`,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) throw new Error(data.message || 'Submission failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or call us at 340-718-8920.');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-teal-200 bg-teal-50 p-6 text-center">
        <p className="font-medium text-teal-800">Thank you for your message.</p>
        <p className="mt-2 text-sm text-teal-700">
          We will get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      aria-label="Contact form"
    >
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-gray-800">
          Name <span className="text-red-600">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-1 block w-full min-h-[44px] rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-gray-800 placeholder-gray-500 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-gray-800">
          Email <span className="text-red-600">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1 block w-full min-h-[44px] rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-gray-800 placeholder-gray-500 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-800">
          Phone
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="mt-1 block w-full min-h-[44px] rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-gray-800 placeholder-gray-500 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
          placeholder="Optional"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-gray-800">
          Message <span className="text-red-600">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          className="mt-1 block w-full min-h-[44px] rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-gray-800 placeholder-gray-500 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 resize-y"
          placeholder="How can we help?"
        />
      </div>
      {status === 'error' && (
        <p className="text-sm text-red-600" role="alert">
          {errorMessage}
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full sm:w-auto min-h-[44px] rounded-md bg-teal-700 px-6 py-3 font-medium text-white transition hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
