import { netlifyImageUrl, netlifyImageSrcSet } from '@/lib/netlifyImage';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** The imported image source */
  src: string;
  alt: string;
  /** Widths for responsive srcSet (default: [400, 800, 1200]) */
  widths?: number[];
  /** Sizes attribute for responsive images */
  sizes?: string;
  /** Netlify CDN quality 1-100 (default: 80) */
  quality?: number;
}

const OptimizedImage = ({
  src,
  alt,
  widths = [400, 800, 1200],
  sizes = '(max-width: 768px) 100vw, 50vw',
  quality = 80,
  ...props
}: OptimizedImageProps) => {
  const srcSet = netlifyImageSrcSet(src, widths, { quality });
  const fallbackSrc = netlifyImageUrl(src, {
    width: widths[widths.length - 1],
    quality,
  });

  return (
    <img
      src={fallbackSrc}
      srcSet={srcSet || undefined}
      sizes={srcSet ? sizes : undefined}
      alt={alt}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
};

export default OptimizedImage;
