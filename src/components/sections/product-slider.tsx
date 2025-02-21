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
        {products.map(product => (
          <SwiperSlide key={product.id} className="relative bg-white">
            <div className="absolute inset-0 flex items-center justify-center p-8">
              {product.mainImage && (
                <div className="relative w-[500px] h-[300px] md:w-[500px] md:h-[300px] flex items-center justify-center">
                  <CloudinaryImage
                    src={product.mainImage}
                    alt={product.name}
                    width={837}
                    height={527}
                    format="webp"
                    // removeBackground={true}
                    quality={100}
                    crop="pad"
                    effects={[{ background: 'transparent' }]}
                    className="w-auto h-auto max-w-full max-h-full object-contain  transition-all duration-500 hover:scale-110"
                  />
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
