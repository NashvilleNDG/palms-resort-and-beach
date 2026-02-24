'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { OptimizedImage } from '@/components/OptimizedImage';

const ROTATE_INTERVAL_MS = 5000;

export type CarouselImage = { src: string; alt: string };

export function ResortCarousel({ images }: { images: CarouselImage[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [images.length]);

  const goTo = (i: number) => setIndex(i);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <section
      aria-labelledby="take-a-look-heading"
      className="section-padding bg-white"
    >
      <div className="container-wide px-4">
        <p className="text-teal-600 uppercase tracking-wider text-sm font-medium text-center mb-4">
          See the Resort
        </p>
        <h2
          id="take-a-look-heading"
          className="text-3xl sm:text-4xl font-bold text-gray-800 text-center"
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          Take a Look Around
        </h2>
        <div className="mt-6 sm:mt-8 rounded-2xl overflow-hidden shadow-2xl relative aspect-video max-w-5xl mx-auto">
          <Link href="/Gallery" className="block relative h-full">
            {images.map((img, i) => (
              <div
                key={img.src}
                className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                style={{ opacity: i === index ? 1 : 0 }}
                aria-hidden={i !== index}
              >
                <OptimizedImage
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1200px"
                  priority={i === 0}
                />
              </div>
            ))}
            <div className="absolute inset-0 flex flex-col items-center justify-end p-4 sm:p-8 md:p-12 text-center pointer-events-none">
              <span className="mt-4 inline-flex items-center justify-center min-h-[44px] gap-2 rounded-lg bg-amber-500 px-5 py-2.5 sm:px-6 font-semibold text-gray-900 pointer-events-auto">
                View Gallery →
              </span>
            </div>
          </Link>

          {/* Prev/Next and dots - pointer-events-auto so they work */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  prev();
                }}
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 active:bg-black/80 transition pointer-events-auto min-w-[44px] min-h-[44px]"
                aria-label="Previous slide"
              >
                <span className="text-2xl sm:text-xl leading-none" aria-hidden>‹</span>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  next();
                }}
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 active:bg-black/80 transition pointer-events-auto min-w-[44px] min-h-[44px]"
                aria-label="Next slide"
              >
                <span className="text-2xl sm:text-xl leading-none" aria-hidden>›</span>
              </button>
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 pointer-events-auto">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      goTo(i);
                    }}
                    className={`min-w-[12px] min-h-[12px] w-3 h-3 rounded-full transition touch-manipulation ${
                      i === index ? 'bg-amber-500 scale-110' : 'bg-white/70 hover:bg-white'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
