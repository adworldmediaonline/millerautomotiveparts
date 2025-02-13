'use client';

import { CldImage, CldImageProps } from 'next-cloudinary';

interface CloudinaryImageProps extends Omit<CldImageProps, 'src'> {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
  removeBackground?: boolean;
  aspectRatio?: string;
  width?: number;
  height?: number;
}

export function CloudinaryImage({
  src,
  alt,
  sizes = '100vw',
  className = '',
  priority = false,
  removeBackground = false,
  aspectRatio,
  width = 800,
  height = 600,
  ...props
}: CloudinaryImageProps) {
  // Extract public ID from the full Cloudinary URL if provided
  const getPublicId = (url: string) => {
    if (url.includes('cloudinary')) {
      return url.split('/').pop()?.split('.')[0] || '';
    }
    return url;
  };

  const publicId = getPublicId(src);

  return (
    <div
      className={className}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      <CldImage
        src={publicId}
        width={width}
        height={height}
        alt={alt}
        sizes={sizes}
        priority={priority}
        format="webp" // Optimal format for web
        quality="auto" // Automatic quality optimization
        dpr="auto" // Automatic device pixel ratio
        loading={priority ? 'eager' : 'lazy'}
        removeBackground={removeBackground}
        {...(aspectRatio && {
          crop: 'fill',
          gravity: 'center',
        })}
        className="object-cover w-full h-full"
        {...props}
      />
    </div>
  );
}
