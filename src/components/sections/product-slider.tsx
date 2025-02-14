'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { CloudinaryImage } from '@/components/ui/cloudinary-image';
import { products } from '@/lib/data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

export function ProductSlider() {
  return (
    <div className="relative h-[350px] md:h-[400px] bg-white">
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
