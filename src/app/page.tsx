import { Features } from '@/components/sections/features';
import WhyMiller from '@/components/sections/why-miller';
import { ProductSlider } from '@/components/sections/product-slider';

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section with Product Slider */}
      <section className="relative">
        <ProductSlider />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      </section>

      <WhyMiller />
      <Features />
    </main>
  );
}
