'use client';

import { CloudinaryImage } from '@/components/ui/cloudinary-image';

interface ProductImage {
  src: string;
  alt: string;
}

interface ProductGalleryProps {
  images: ProductImage[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Product Title */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-miller-navy md:text-3xl">
          {productName}
        </h1>
        <div className="mt-2 h-1 w-20 bg-miller-red/80 rounded-full" />
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
        {images.map((image, index) => (
          <div
            key={image.src}
            className="group flex items-center justify-center bg-white border border-accent/20 hover:border-miller-red/20 transition-all duration-300 rounded-lg p-2 min-h-[150px]"
          >
            <CloudinaryImage
              src={image.src}
              alt={image.alt}
              width={150}
              height={150}
              className="w-auto h-auto max-w-full max-h-[140px] object-contain transition-all duration-500 group-hover:scale-110"
              priority={index === 0}
              crop="pad"
              quality={85}
              effects={[{ background: 'transparent' }]}
              // removeBackground={true}
            />
            {/* Subtle Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}
