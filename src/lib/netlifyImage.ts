/**
 * Netlify Image CDN utility.
 * Wraps image URLs with /.netlify/images?url=... for on-the-fly transforms.
 * Falls back to raw URL in development (where the CDN isn't available).
 */

const IS_NETLIFY = import.meta.env.PROD;

interface NetlifyImageOptions {
  width?: number;
  quality?: number;
  format?: 'avif' | 'webp' | 'jpg' | 'png';
}

/**
 * Returns a Netlify-CDN-transformed image URL.
 * In dev mode, returns the original `src` unchanged.
 */
export function netlifyImageUrl(
  src: string,
  { width, quality = 80, format = 'avif' }: NetlifyImageOptions = {},
): string {
  if (!IS_NETLIFY) return src;

  const params = new URLSearchParams();
  params.set('url', src);
  if (width) params.set('w', String(width));
  params.set('q', String(quality));
  params.set('fm', format);

  return `/.netlify/images?${params.toString()}`;
}

/**
 * Builds a responsive `srcSet` string for use with <img srcSet>.
 * Each entry is a different width so the browser picks the best size.
 */
export function netlifyImageSrcSet(
  src: string,
  widths: number[],
  { quality = 80, format = 'avif' }: Omit<NetlifyImageOptions, 'width'> = {},
): string {
  if (!IS_NETLIFY) return '';

  return widths
    .map((w) => `${netlifyImageUrl(src, { width: w, quality, format })} ${w}w`)
    .join(', ');
}
