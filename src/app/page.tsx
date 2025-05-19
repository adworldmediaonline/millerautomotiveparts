import { Features } from '@/components/sections/features';
import WhyMiller from '@/components/sections/why-miller';
import { ProductSlider } from '@/components/sections/product-slider';
import { products } from '@/lib/data';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section with Product Slider */}
      <section className="relative container">
        <div className="absolute inset-y-0 left-4 z-10 hidden lg:flex items-center">
          <div className="space-y-4 py-4 max-h-[80vh] overflow-y-auto scrollbar-hide">
            {products.slice(0, Math.ceil(products.length / 2)).map(product => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group flex items-center gap-2 hover:bg-white/5 p-2 rounded-lg transition-colors"
              >
                <span className="text-dark text-sm font-medium text-left group-hover:text-miller-red transition-colors">
                  {product.name}
                </span>
                <ChevronRight className="w-4 h-4 text-dark group-hover:text-miller-red transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        <div className="absolute inset-y-0 right-4 z-10 hidden lg:flex items-center">
          <div className="space-y-4 py-4 max-h-[80vh] overflow-y-auto scrollbar-hide">
            {products.slice(Math.ceil(products.length / 2)).map(product => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group flex items-center gap-2 hover:bg-white/5 p-2 rounded-lg transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-dark group-hover:text-miller-red transition-colors rotate-180" />
                <span className="text-dark text-sm font-medium text-left group-hover:text-miller-red transition-colors">
                  {product.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <ProductSlider />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" /> */}
      </section>

      <WhyMiller />
      <Features />
    </main>
  );
}
