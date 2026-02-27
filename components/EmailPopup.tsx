'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

const SUBSCRIBED_KEY = 'palms_popup_subscribed';
const SESSION_INITIAL_SHOWN = 'palms_popup_initial_shown';
const SESSION_5MIN_SHOWN = 'palms_popup_5min_shown';
const INITIAL_DELAY_MS = 5000;
const FIVE_MINUTES_MS = 5 * 60 * 1000;
const EXIT_INTENT_TOP_PX = 20;
const SUCCESS_AUTO_CLOSE_MS = 4000;
// Same key as footer newsletter (one Web3Forms form for both)
const WEB3FORMS_POPUP_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_NEWSLETTER_ACCESS_KEY || 'dcdd249b-3c29-4cd6-b8cb-8d1258e250cd';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

function hasSubscribed(): boolean {
  if (typeof window === 'undefined') return true;
  return window.localStorage.getItem(SUBSCRIBED_KEY) === 'true';
}

function setSubscribed(): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(SUBSCRIBED_KEY, 'true');
}

export function EmailPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const successCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const doOpenPopup = useCallback(() => {
    setIsOpen(true);
    setIsClosing(false);
    setIsSuccess(false);
  }, []);

  const closePopup = useCallback(() => {
    if (successCloseTimerRef.current) {
      clearTimeout(successCloseTimerRef.current);
      successCloseTimerRef.current = null;
    }
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      setIsSuccess(false);
    }, 300);
  }, []);

  useEffect(() => {
    if (hasSubscribed()) return;

    const initialTimer = setTimeout(() => {
      if (typeof window === 'undefined' || window.sessionStorage.getItem(SESSION_INITIAL_SHOWN)) return;
      window.sessionStorage.setItem(SESSION_INITIAL_SHOWN, 'true');
      doOpenPopup();
    }, INITIAL_DELAY_MS);

    const fiveMinTimer = setTimeout(() => {
      if (typeof window === 'undefined' || window.sessionStorage.getItem(SESSION_5MIN_SHOWN)) return;
      window.sessionStorage.setItem(SESSION_5MIN_SHOWN, 'true');
      doOpenPopup();
    }, FIVE_MINUTES_MS);

    function handleExitIntent(e: MouseEvent) {
      if (e.clientY <= EXIT_INTENT_TOP_PX && typeof window !== 'undefined' && !window.sessionStorage.getItem(SESSION_INITIAL_SHOWN)) {
        window.sessionStorage.setItem(SESSION_INITIAL_SHOWN, 'true');
        doOpenPopup();
      }
    }

    document.addEventListener('mouseout', handleExitIntent);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(fiveMinTimer);
      document.removeEventListener('mouseout', handleExitIntent);
    };
  }, [doOpenPopup]);

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

    if (!WEB3FORMS_POPUP_KEY) {
      setSubmitStatus('error');
      setErrorMessage('Form is not configured. Please use the contact form or call us at 340-718-8920.');
      return;
    }

    (async () => {
      try {
        const res = await fetch(WEB3FORMS_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: WEB3FORMS_POPUP_KEY,
            from_name: name,
            email,
            subject: 'Resort news & tips signup - Palms Resort & Beach',
            message: `Popup signup: ${name} (${email})`,
          }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || !data.success) throw new Error(data.message || 'Submission failed');
        setSubscribed();
        setIsSuccess(true);
        setSubmitStatus('idle');
        form.reset();
        successCloseTimerRef.current = setTimeout(() => {
          closePopup();
        }, SUCCESS_AUTO_CLOSE_MS);
      } catch {
        setSubmitStatus('error');
        setErrorMessage('Something went wrong. Please try again or call us at 340-718-8920.');
      }
    })();
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
