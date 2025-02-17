'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { CloudinaryImage } from '@/components/ui/cloudinary-image';
import { products } from '@/lib/data';

import 'swiper/css';
import 'swiper/css/effect-fade';

export function ProductSlider() {
  return (
    <div className="relative h-[350px] md:h-[400px] bg-white">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r z-[5]" />

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
                {/* Grid Container */}
                <div className="relative w-full h-full grid grid-cols-5 grid-rows-5 gap-2 p-4">
                  {/* Top Image */}
                  {displayImages[1] && (
                    <div className="col-start-3 col-span-1 row-start-1 row-span-2 flex items-end justify-center">
                      <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] flex items-center justify-center">
                        <CloudinaryImage
                          src={displayImages[1].src}
                          alt={displayImages[1].alt}
                          width={300}
                          height={300}
                          format="png"
                          removeBackground={true}
                          quality={100}
                          crop="pad"
                          effects={[{ background: 'transparent' }]}
                          className="w-auto h-auto max-w-full max-h-full object-contain drop-shadow-xl transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                    </div>
                  )}

                  {/* Left Image */}
                  {displayImages[2] && (
                    <div className="col-start-1 col-span-2 row-start-2 row-span-2 flex items-center justify-end">
                      <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] flex items-center justify-center">
                        <CloudinaryImage
                          src={displayImages[2].src}
                          alt={displayImages[2].alt}
                          width={300}
                          height={300}
                          format="png"
                          removeBackground={true}
                          quality={100}
                          crop="pad"
                          effects={[{ background: 'transparent' }]}
                          className="w-auto h-auto max-w-full max-h-full object-contain drop-shadow-xl transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                    </div>
                  )}

                  {/* Center Image */}
                  {displayImages[0] && (
                    <div className="col-start-3 col-span-1 row-start-2 row-span-2 flex items-center justify-center">
                      <div className="relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] flex items-center justify-center">
                        <CloudinaryImage
                          src={displayImages[0].src}
                          alt={displayImages[0].alt}
                          width={400}
                          height={400}
                          format="png"
                          removeBackground={true}
                          quality={100}
                          crop="pad"
                          effects={[{ background: 'transparent' }]}
                          className="w-auto h-auto max-w-full max-h-full object-contain drop-shadow-xl transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                    </div>
                  )}

                  {/* Right Image */}
                  {displayImages[3] && (
                    <div className="col-start-4 col-span-2 row-start-2 row-span-2 flex items-center justify-start">
                      <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] flex items-center justify-center">
                        <CloudinaryImage
                          src={displayImages[3].src}
                          alt={displayImages[3].alt}
                          width={300}
                          height={300}
                          format="png"
                          removeBackground={true}
                          quality={100}
                          crop="pad"
                          effects={[{ background: 'transparent' }]}
                          className="w-auto h-auto max-w-full max-h-full object-contain drop-shadow-xl transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                    </div>
                  )}

                  {/* Bottom Image */}
                  {displayImages[4] && (
                    <div className="col-start-3 col-span-1 row-start-4 row-span-2 flex items-start justify-center">
                      <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] flex items-center justify-center">
                        <CloudinaryImage
                          src={displayImages[4].src}
                          alt={displayImages[4].alt}
                          width={300}
                          height={300}
                          format="png"
                          removeBackground={true}
                          quality={100}
                          crop="pad"
                          effects={[{ background: 'transparent' }]}
                          className="w-auto h-auto max-w-full max-h-full object-contain drop-shadow-xl transition-transform duration-500 hover:scale-110"
                        />
                      </div>
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
