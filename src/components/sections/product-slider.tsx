'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { CloudinaryImage } from '@/components/ui/cloudinary-image';
import { products } from '@/lib/data';
import {
  Popover,
  PopoverContent,
  // PopoverTrigger,
} from '@/components/ui/popover';
// import { ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

export function ProductSlider() {
  // Create two separate arrays for left and right sides with exact product names
  const leftSideProducts = [
    'Tie Rod Ends',
    'Billet T 6061', // Fixed: Added space
    'Billet Steel',
    'Forgings',
    'Castings',
  ].map(name => products.find(p => p.name === name));

  const rightSideProducts = [
    'Joints and Bushings',
    'Ball Joints',
    'Hardware',
    'DOM and Bars',
    'Tools',
  ].map(name => products.find(p => p.name === name));

  return (
    <div className="relative h-[350px] md:h-[400px] bg-white">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80 z-[5]" />

      {/* Left Side Product Titles */}
      <div className="absolute inset-y-0 left-8 z-20 hidden lg:flex items-center">
        <div className="space-y-4 py-4 max-h-[80vh] overflow-y-auto scrollbar-hide">
          {leftSideProducts.map(
            product =>
              product && (
                <Popover key={product.id}>
                  {/* <PopoverTrigger asChild>
                    <button className="group flex items-center gap-2 hover:bg-white/10 p-2 rounded-lg transition-colors">
                      <span className="text-white text-sm font-medium text-left group-hover:text-miller-red transition-colors">
                        {product.name}
                      </span>
                      <ChevronRight className="w-4 h-4 text-white/50 group-hover:text-miller-red transition-colors" />
                    </button>
                  </PopoverTrigger> */}
                  <PopoverContent
                    side="right"
                    sideOffset={8}
                    className="w-[280px] p-2 bg-white/95 backdrop-blur-sm border-none shadow-xl"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {product.images.slice(0, 4).map(image => (
                        <div
                          key={image.src}
                          className="relative aspect-square rounded-lg overflow-hidden"
                        >
                          <CloudinaryImage
                            src={image.src}
                            alt={image.alt}
                            width={200}
                            height={200}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              )
          )}
        </div>
      </div>

      {/* Right Side Product Titles */}
      <div className="absolute inset-y-0 right-8 z-20 hidden lg:flex items-center">
        <div className="space-y-4 py-4 max-h-[80vh] overflow-y-auto scrollbar-hide">
          {rightSideProducts.map(
            product =>
              product && (
                <Popover key={product.id}>
                  {/* <PopoverTrigger asChild>
                    <button className="group flex items-center gap-2 hover:bg-white/10 p-2 rounded-lg transition-colors">
                      <ChevronRight className="w-4 h-4 text-white/50 group-hover:text-miller-red transition-colors rotate-180" />
                      <span className="text-white text-sm font-medium text-left group-hover:text-miller-red transition-colors">
                        {product.name}
                      </span>
                    </button>
                  </PopoverTrigger> */}
                  <PopoverContent
                    side="left"
                    sideOffset={8}
                    className="w-[280px] p-2 bg-white/95 backdrop-blur-sm border-none shadow-xl"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {product.images.slice(0, 4).map(image => (
                        <div
                          key={image.src}
                          className="relative aspect-square rounded-lg overflow-hidden"
                        >
                          <CloudinaryImage
                            src={image.src}
                            alt={image.alt}
                            width={200}
                            height={200}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              )
          )}
        </div>
      </div>

      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="w-full h-full bg-white"
      >
        {products.map(product => {
          const displayImages = product.images.slice(0, 5);
          return (
            <SwiperSlide key={product.id} className="relative bg-white">
              <div className="absolute inset-0">
                {/* Grid Container - Reduced gap and padding */}
                <div className="relative w-full h-full grid grid-cols-5 grid-rows-5 gap-2 p-4">
                  {/* Top Image - Moved closer */}
                  {displayImages[1] && (
                    <div className="col-start-3 col-span-1 row-start-1 row-span-2 flex items-end justify-center">
                      <CloudinaryImage
                        src={displayImages[1].src}
                        alt={displayImages[1].alt}
                        width={300}
                        height={300}
                        format="png"
                        removeBackground={true}
                        quality={100}
                        effects={[{ background: 'transparent' }]}
                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain drop-shadow-xl"
                      />
                    </div>
                  )}

                  {/* Left Image - Moved closer */}
                  {displayImages[2] && (
                    <div className="col-start-1 col-span-2 row-start-2 row-span-2 flex items-center justify-end">
                      <CloudinaryImage
                        src={displayImages[2].src}
                        alt={displayImages[2].alt}
                        width={300}
                        height={300}
                        format="png"
                        removeBackground={true}
                        quality={100}
                        effects={[{ background: 'transparent' }]}
                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain drop-shadow-xl"
                      />
                    </div>
                  )}

                  {/* Center Image */}
                  {displayImages[0] && (
                    <div className="col-start-3 col-span-1 row-start-2 row-span-2 flex items-center justify-center">
                      <CloudinaryImage
                        src={displayImages[0].src}
                        alt={displayImages[0].alt}
                        width={400}
                        height={400}
                        format="png"
                        removeBackground={true}
                        quality={100}
                        effects={[{ background: 'transparent' }]}
                        className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 object-contain drop-shadow-xl"
                      />
                    </div>
                  )}

                  {/* Right Image - Moved closer */}
                  {displayImages[3] && (
                    <div className="col-start-4 col-span-2 row-start-2 row-span-2 flex items-center justify-start">
                      <CloudinaryImage
                        src={displayImages[3].src}
                        alt={displayImages[3].alt}
                        width={300}
                        height={300}
                        format="png"
                        removeBackground={true}
                        quality={100}
                        effects={[{ background: 'transparent' }]}
                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain drop-shadow-xl"
                      />
                    </div>
                  )}

                  {/* Bottom Image - Moved closer */}
                  {displayImages[4] && (
                    <div className="col-start-3 col-span-1 row-start-4 row-span-2 flex items-start justify-center">
                      <CloudinaryImage
                        src={displayImages[4].src}
                        alt={displayImages[4].alt}
                        width={300}
                        height={300}
                        format="png"
                        removeBackground={true}
                        quality={100}
                        effects={[{ background: 'transparent' }]}
                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain drop-shadow-xl"
                      />
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
