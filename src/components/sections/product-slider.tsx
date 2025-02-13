'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { CloudinaryImage } from '@/components/ui/cloudinary-image';
import { products } from '@/lib/data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

export function ProductSlider() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [activeImages, setActiveImages] = useState<number[]>([]);

  // Reset animation state when product changes
  useEffect(() => {
    setActiveImages([]);
    const interval = setInterval(() => {
      setActiveImages(prev => {
        if (prev.length >= Math.min(5, products[activeProduct].images.length)) {
          return prev;
        }
        return [...prev, prev.length];
      });
    }, 400);

    return () => clearInterval(interval);
  }, [activeProduct]);

  // Get final position for animation with circular pattern
  const getFinalPosition = (index: number) => {
    if (index === 0) return { top: '50%', left: '50%' };

    // Calculate positions in a circle
    const radius = 30; // percentage from center
    const angle = (index - 1) * (360 / 4) + 45; // 4 positions, 45° offset for better alignment
    const radian = (angle * Math.PI) / 180;

    // Calculate x and y coordinates
    const x = 50 + radius * Math.cos(radian); // 50% is center
    const y = 50 + radius * Math.sin(radian);

    return { top: `${y}%`, left: `${x}%` };
  };

  return (
    <div className="relative h-[500px] md:h-[600px] bg-white">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSlideChange={swiper => setActiveProduct(swiper.activeIndex)}
        className="w-full h-full bg-white"
      >
        {products.map((product, productIndex) => (
          <SwiperSlide key={product.id} className="relative bg-white">
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence>
                {productIndex === activeProduct &&
                  activeImages.map(imageIndex => {
                    const image = product.images[imageIndex];
                    if (!image) return null;

                    const finalPos = getFinalPosition(imageIndex);

                    return (
                      <motion.div
                        key={image.src}
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                          top: '50%',
                          left: '50%',
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          ...finalPos,
                        }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{
                          type: 'spring',
                          damping: 20,
                          stiffness: 100,
                          duration: 0.5,
                          delay: imageIndex * 0.3,
                        }}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                      >
                        <CloudinaryImage
                          src={image.src}
                          alt={image.alt}
                          width={400}
                          height={400}
                          className={`object-contain ${
                            imageIndex === 0
                              ? 'w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52' // Center image
                              : 'w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44' // Surrounding images
                          }`}
                        />
                      </motion.div>
                    );
                  })}
              </AnimatePresence>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
