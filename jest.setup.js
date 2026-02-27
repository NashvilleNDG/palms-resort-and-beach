import '@testing-library/jest-dom';

// Web3Forms keys for form components (so submit tests can run)
process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'test-contact-key';
process.env.NEXT_PUBLIC_WEB3FORMS_NEWSLETTER_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_NEWSLETTER_ACCESS_KEY || 'test-newsletter-key';

// Provide fetch for Jest (jsdom does not include it)
if (typeof globalThis.fetch === 'undefined') {
  globalThis.fetch = jest.fn();
}
