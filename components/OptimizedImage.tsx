'use client';

type FallbackExt = 'png' | 'jpg';

function getBasePathAndExt(src: string): { base: string; ext: FallbackExt } {
  if (src.endsWith('.webp')) {
    return { base: src.slice(0, -5), ext: 'png' };
  }
  if (src.endsWith('.png')) {
    return { base: src.slice(0, -4), ext: 'png' };
  }
  if (src.endsWith('.jpg') || src.endsWith('.jpeg')) {
    return { base: src.replace(/\.jpe?g$/, ''), ext: 'jpg' };
  }
  return { base: src, ext: 'png' };
}

export type OptimizedImageProps = {
  src: string;
  alt: string;
  fallbackExt?: FallbackExt;
  className?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  objectFit?: 'cover' | 'contain';
} & Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'alt'>;

/**
 * Renders a <picture> with WebP source and PNG/JPEG fallback for smaller
 * payloads in supporting browsers. Use when both .webp and .png (or .jpg)
 * exist with the same base path (e.g. /images/resort.webp + /images/resort.png).
 */
export function OptimizedImage({
  src,
  alt,
  fallbackExt: extOverride,
  className = '',
  fill = false,
  sizes,
  priority = false,
  loading,
  objectFit = 'cover',
  ...imgProps
}: OptimizedImageProps) {
  const { base, ext } = extOverride
    ? {
        base: src.endsWith('.webp') ? src.slice(0, -5) : src.replace(/\.(png|jpe?g)$/, ''),
        ext: extOverride,
      }
    : getBasePathAndExt(src);
  const webpSrc = `${base}.webp`;
  const fallbackSrc = `${base}.${ext}`;

  const pictureClass = fill
    ? `block absolute inset-0 w-full h-full ${className}`.trim()
    : `block w-full h-full ${className}`.trim();
  const imgClass = fill
    ? objectFit === 'contain'
      ? 'w-full h-full object-contain'
      : 'w-full h-full object-cover'
    : objectFit === 'contain'
      ? `w-full h-full object-contain ${className}`.trim()
      : `w-full h-full object-cover ${className}`.trim();

  return (
    <picture className={pictureClass}>
      <source type="image/webp" srcSet={webpSrc} />
      <img
        src={fallbackSrc}
        alt={alt}
        sizes={sizes}
        loading={loading ?? (priority ? 'eager' : 'lazy')}
        fetchPriority={priority ? 'high' : undefined}
        className={imgClass}
        {...imgProps}
      />
    </picture>
  );
}

/**
 * For use in hero/CTA sections: a full-bleed background image with WebP + fallback.
 * Renders as a positioned picture so it can sit behind content.
 */
export function OptimizedBackgroundImage({
  src,
  alt = '',
  fallbackExt: extOverride,
  className = '',
}: {
  src: string;
  alt?: string;
  fallbackExt?: FallbackExt;
  className?: string;
}) {
  const { base, ext } = extOverride
    ? { base: src.replace(/\.(webp|png|jpe?g)$/, ''), ext: extOverride }
    : getBasePathAndExt(src);
  const webpSrc = `${base}.webp`;
  const fallbackSrc = `${base}.${ext}`;

  return (
    <picture
      className={`block absolute inset-0 w-full h-full ${className}`.trim()}
      aria-hidden
    >
      <source type="image/webp" srcSet={webpSrc} />
      <img src={fallbackSrc} alt={alt} className="w-full h-full object-cover" />
    </picture>
  );
}
