'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
        <div className="mt-8 rounded-2xl overflow-hidden shadow-2xl relative aspect-video max-w-5xl mx-auto">
          <Link href="/Gallery" className="block relative h-full">
            {images.map((img, i) => (
              <div
                key={img.src}
                className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                style={{ opacity: i === index ? 1 : 0 }}
                aria-hidden={i !== index}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1200px"
                  priority={i === 0}
                />
              </div>
            ))}
            <div className="absolute inset-0 flex flex-col items-center justify-end p-8 sm:p-12 text-center pointer-events-none">
              <span className="mt-4 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-2.5 font-semibold text-gray-900 pointer-events-auto">
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
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition pointer-events-auto"
                aria-label="Previous slide"
              >
                <span aria-hidden>‹</span>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  next();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition pointer-events-auto"
                aria-label="Next slide"
              >
                <span aria-hidden>›</span>
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 pointer-events-auto">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      goTo(i);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition ${
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
