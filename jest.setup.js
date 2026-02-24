import '@testing-library/jest-dom';

// Provide fetch for Jest (jsdom does not include it)
if (typeof globalThis.fetch === 'undefined') {
  globalThis.fetch = jest.fn();
}
