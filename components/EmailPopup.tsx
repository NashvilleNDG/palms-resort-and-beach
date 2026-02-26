'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

const STORAGE_KEY = 'palms_popup_shown';
const DELAY_MS = 5000;
const EXIT_INTENT_TOP_PX = 20;
const SUCCESS_AUTO_CLOSE_MS = 4000;
const WEB3FORMS_POPUP_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_POPUP_ACCESS_KEY || 'dcdd249b-3c29-4cd6-b8cb-8d1258e250cd';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

function getStored(): boolean {
  if (typeof window === 'undefined') return true;
  return window.localStorage.getItem(STORAGE_KEY) === 'true';
}

function setStored(): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, 'true');
}

export function EmailPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const hasTriggeredRef = useRef(false);
  const successCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openPopup = useCallback(() => {
    if (getStored() || hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;
    setIsOpen(true);
    setIsClosing(false);
    setIsSuccess(false);
  }, []);

  const closePopup = useCallback(() => {
    setStored();
    setIsClosing(true);
    if (successCloseTimerRef.current) {
      clearTimeout(successCloseTimerRef.current);
      successCloseTimerRef.current = null;
    }
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      setIsSuccess(false);
    }, 300);
  }, []);

  useEffect(() => {
    if (getStored()) return;

    const timer = setTimeout(openPopup, DELAY_MS);

    function handleExitIntent(e: MouseEvent) {
      if (e.clientY <= EXIT_INTENT_TOP_PX) openPopup();
    }

    document.addEventListener('mouseout', handleExitIntent);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseout', handleExitIntent);
    };
  }, [openPopup]);

  useEffect(() => {
    return () => {
      if (successCloseTimerRef.current) clearTimeout(successCloseTimerRef.current);
    };
  }, []);

  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target === e.currentTarget) closePopup();
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get('name') as string)?.trim() || '';
    const email = (formData.get('email') as string)?.trim() || '';

    setSubmitStatus('submitting');
    setErrorMessage('');

    fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_POPUP_KEY,
        from_name: name,
        email,
        subject: 'Resort news & tips signup - Palms Resort & Beach',
        message: `Popup signup: ${name} (${email})`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) throw new Error(data.message || 'Submission failed');
        setStored();
        setIsSuccess(true);
        setSubmitStatus('idle');
        form.reset();
        successCloseTimerRef.current = setTimeout(() => {
          closePopup();
        }, SUCCESS_AUTO_CLOSE_MS);
      })
      .catch(() => {
        setSubmitStatus('error');
        setErrorMessage('Something went wrong. Please try again or call us at 340-718-8920.');
      });
  }

  if (!isOpen) return null;

  return (
    <div
      className={`email-popup-overlay ${isClosing ? 'email-popup-overlay--closing' : ''}`}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="email-popup-heading"
    >
      <div
        className={`email-popup-modal ${isClosing ? 'email-popup-modal--closing' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="email-popup-close"
          onClick={closePopup}
          aria-label="Close popup"
        >
          ×
        </button>

        <div className="email-popup-inner">
          {/* Left column - image (hidden on mobile) */}
          <div className="email-popup-left" />

          {/* Right column - content */}
          <div className="email-popup-right">
            <div className="email-popup-drag-handle" aria-hidden="true" />
            {/* Mobile top image strip */}
            <div className="email-popup-mobile-image" />

            <div className="email-popup-content">
              {!isSuccess ? (
                <>
                  <p className="email-popup-label">STAY IN TOUCH</p>
                  <h2
                    id="email-popup-heading"
                    className="email-popup-headline"
                    style={{ fontFamily: 'var(--font-playfair), serif' }}
                  >
                    Get Resort News &amp; Tips
                  </h2>
                  <p className="email-popup-subtext">
                    Join our list for updates, seasonal offers, and ideas for your next St. Croix escape. No spam — just island inspiration.
                  </p>

                  <form onSubmit={handleSubmit} className="email-popup-form" noValidate>
                    <div className="email-popup-field">
                      <label htmlFor="popup-name">Full name</label>
                      <input
                        id="popup-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Full name"
                      />
                    </div>
                    <div className="email-popup-field">
                      <label htmlFor="popup-email">Email Address</label>
                      <input
                        id="popup-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="Your email"
                      />
                    </div>
                    {submitStatus === 'error' && (
                      <p className="email-popup-error" role="alert">
                        {errorMessage}
                      </p>
                    )}
                    <button
                      type="submit"
                      className="email-popup-cta"
                      disabled={submitStatus === 'submitting'}
                    >
                      {submitStatus === 'submitting' ? 'Subscribing…' : 'Subscribe'}
                    </button>
                  </form>

                  <p className="email-popup-privacy">
                    You can unsubscribe at any time.
                  </p>
                  <button
                    type="button"
                    className="email-popup-skip"
                    onClick={closePopup}
                  >
                    No thanks, I&apos;ll pay full price
                  </button>
                </>
              ) : (
                <div className="email-popup-success">
                  <p className="email-popup-success-emoji">🌴</p>
                  <h2
                    className="email-popup-success-headline"
                    style={{ fontFamily: 'var(--font-playfair), serif' }}
                  >
                    You&apos;re on the list!
                  </h2>
                  <p className="email-popup-success-subtext">
                    Welcome to paradise. Check your inbox for resort news and tips from St. Croix.
                  </p>
                  <button
                    type="button"
                    className="email-popup-cta"
                    onClick={closePopup}
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
