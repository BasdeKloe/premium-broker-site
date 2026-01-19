import { ImgHTMLAttributes, useState } from 'react';
import { cn } from '@/lib/utils';

interface SEOImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  priority?: boolean;
}

/**
 * SEO-optimized image component with:
 * - Lazy loading by default
 * - Alt text enforcement
 * - Error handling with fallback
 * - Proper aspect ratio preservation
 */
export const SEOImage = ({
  src,
  alt,
  fallbackSrc = '/placeholder-yacht.jpg',
  priority = false,
  className,
  ...props
}: SEOImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  // Validate alt text in development
  if (process.env.NODE_ENV === 'development' && !alt) {
    console.warn('SEOImage: Missing alt text for image:', src);
  }

  const handleError = () => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      onError={handleError}
      onLoad={handleLoad}
      className={cn(
        'transition-opacity duration-300',
        isLoading ? 'opacity-0' : 'opacity-100',
        className
      )}
      {...props}
    />
  );
};
