'use client';

import { useState, useCallback, useEffect } from 'react';
import { OptimizedImage } from '@/components/OptimizedImage';

export type GalleryImage = { src: string; alt: string };

const SWIPE_THRESHOLD = 50;

export function GalleryLightbox({ images }: { images: GalleryImage[] }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const openAt = useCallback((index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  }, []);

  const close = useCallback(() => setLightboxOpen(false), []);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    },
    [lightboxOpen, close, goPrev, goNext]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [lightboxOpen]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX == null) return;
    const endX = e.changedTouches[0].clientX;
    const delta = touchStartX - endX;
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      if (delta > 0) goNext();
      else goPrev();
    }
    setTouchStartX(null);
  };

  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" role="list">
        {images.map(({ src, alt }, index) => (
          <li key={src} className="rounded-2xl overflow-hidden shadow-lg">
            <button
              type="button"
              onClick={() => openAt(index)}
              className="block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 rounded-2xl"
              aria-label={`View image ${index + 1}: ${alt}`}
            >
              <div className="relative aspect-[4/3] cursor-pointer">
                <OptimizedImage
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </button>
          </li>
        ))}
      </ul>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery carousel"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close gallery"
          >
            <span className="text-2xl leading-none" aria-hidden>×</span>
          </button>

          <div
            className="relative w-full h-full flex items-center justify-center px-14 sm:px-20"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative w-full max-w-5xl aspect-video max-h-[85vh]">
              <OptimizedImage
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                objectFit="contain"
                sizes="100vw"
                priority
              />
            </div>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 active:bg-white/30 transition min-w-[48px] min-h-[48px]"
                  aria-label="Previous image"
                >
                  <span className="text-3xl sm:text-4xl leading-none" aria-hidden>‹</span>
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 active:bg-white/30 transition min-w-[48px] min-h-[48px]"
                  aria-label="Next image"
                >
                  <span className="text-3xl sm:text-4xl leading-none" aria-hidden>›</span>
                </button>
              </>
            )}
          </div>

          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto justify-center py-1"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                className={`min-w-[10px] min-h-[10px] w-2.5 h-2.5 rounded-full transition ${
                  i === currentIndex ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to image ${i + 1}`}
                aria-current={i === currentIndex ? 'true' : undefined}
              />
            ))}
          </div>

          <p
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/80 text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
