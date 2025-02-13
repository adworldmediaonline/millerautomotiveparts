'use client';

import { CloudinaryImage } from '@/components/ui/cloudinary-image';
import { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ProductImage {
  src: string;
  alt: string;
}

interface ProductGalleryProps {
  images: ProductImage[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevious = useCallback(() => {
    setSelectedImage(prev =>
      prev === null ? null : prev === 0 ? images.length - 1 : prev - 1
    );
  }, [images.length]);

  const handleNext = useCallback(() => {
    setSelectedImage(prev =>
      prev === null ? null : prev === images.length - 1 ? 0 : prev + 1
    );
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelectedImage(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, handlePrevious, handleNext]);

  return (
    <div>
      {/* Product Title */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
          {productName}
        </h1>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image, index) => (
          <div
            key={image.src}
            className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
            onClick={() => setSelectedImage(index)}
          >
            <CloudinaryImage
              src={image.src}
              alt={image.alt}
              width={800}
              height={800}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={e => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white shadow-lg ring-2 ring-white/40 transition-all hover:bg-black/80 hover:ring-white hover:scale-110"
            aria-label="Close fullscreen view"
          >
            <X className="h-6 w-6 stroke-[3]" />
          </button>

          {/* Image Counter */}
          <div className="absolute left-6 top-6 rounded-full bg-black/60 px-6 py-3 text-sm font-medium text-white shadow-lg ring-2 ring-white/40">
            {selectedImage + 1} / {images.length}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute inset-x-6 top-1/2 z-50 flex -translate-y-1/2 items-center justify-between">
            <button
              onClick={e => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="group flex h-16 w-16 items-center justify-center rounded-full bg-black/60 text-white shadow-lg ring-2 ring-white/40 transition-all hover:bg-black/80 hover:ring-white hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-10 w-10 stroke-[3] transition-transform group-hover:-translate-x-1" />
            </button>

            <button
              onClick={e => {
                e.stopPropagation();
                handleNext();
              }}
              className="group flex h-16 w-16 items-center justify-center rounded-full bg-black/60 text-white shadow-lg ring-2 ring-white/40 transition-all hover:bg-black/80 hover:ring-white hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="h-10 w-10 stroke-[3] transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Main Image */}
          <div className="relative h-full w-full p-8">
            <CloudinaryImage
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              width={1600}
              height={1600}
              className="h-full w-full object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
