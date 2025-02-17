import { Features } from '@/components/sections/features';
import WhyMiller from '@/components/sections/why-miller';
import { ProductSlider } from '@/components/sections/product-slider';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { products } from '@/lib/data';
import { CloudinaryImage } from '@/components/ui/cloudinary-image';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section with Product Slider */}
      <section className="relative">
        <div className="absolute inset-y-0 left-4 z-10 hidden lg:flex items-center">
          <div className="space-y-4 py-4 max-h-[80vh] overflow-y-auto scrollbar-hide">
            {products.slice(0, Math.ceil(products.length / 2)).map(product => (
              <Popover key={product.id}>
                <PopoverTrigger asChild>
                  <button className="group flex items-center gap-2 hover:bg-white/5 p-2 rounded-lg transition-colors">
                    <span className="text-dark text-sm font-medium text-left group-hover:text-miller-red transition-colors">
                      {product.name}
                    </span>
                    <ChevronRight className="w-4 h-4 text-dark group-hover:text-miller-red transition-colors" />
                  </button>
                </PopoverTrigger>
                <PopoverContent
                  side="right"
                  className="w-[280px] p-3 bg-black/90 backdrop-blur-sm rounded-xl border-none"
                >
                  <div className="grid grid-cols-2 gap-3">
                    {product.images.slice(0, 4).map(image => (
                      <div
                        key={image.src}
                        className="group relative bg-white/5 rounded-lg p-2 aspect-square flex items-center justify-center"
                      >
                        <div className="relative w-full h-full flex items-center justify-center">
                          <CloudinaryImage
                            src={image.src}
                            alt={image.alt}
                            width={200}
                            height={200}
                            className="w-auto h-auto max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-110"
                            crop="pad"
                            quality={85}
                            effects={[{ background: 'transparent' }]}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            ))}
          </div>
        </div>

        <div className="absolute inset-y-0 right-4 z-10 hidden lg:flex items-center">
          <div className="space-y-4 py-4 max-h-[80vh] overflow-y-auto scrollbar-hide">
            {products.slice(Math.ceil(products.length / 2)).map(product => (
              <Popover key={product.id}>
                <PopoverTrigger asChild>
                  <button className="group flex items-center gap-2 hover:bg-white/5 p-2 rounded-lg transition-colors">
                    <ChevronRight className="w-4 h-4 text-dark group-hover:text-miller-red transition-colors rotate-180" />
                    <span className="text-dark text-sm font-medium text-left group-hover:text-miller-red transition-colors">
                      {product.name}
                    </span>
                  </button>
                </PopoverTrigger>
                <PopoverContent
                  side="left"
                  className="w-[280px] p-3 bg-black/90 backdrop-blur-sm rounded-xl border-none"
                >
                  <div className="grid grid-cols-2 gap-3">
                    {product.images.slice(0, 4).map(image => (
                      <div
                        key={image.src}
                        className="group relative bg-white/5 rounded-lg p-2 aspect-square flex items-center justify-center"
                      >
                        <div className="relative w-full h-full flex items-center justify-center">
                          <CloudinaryImage
                            src={image.src}
                            alt={image.alt}
                            width={200}
                            height={200}
                            className="w-auto h-auto max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-110"
                            crop="pad"
                            quality={85}
                            effects={[{ background: 'transparent' }]}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            ))}
          </div>
        </div>

        <ProductSlider />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      </section>

      <WhyMiller />
      <Features />
    </main>
  );
}
