import { Features } from '@/components/sections/features';
import ProductDevelopment from '@/components/sections/product-development';
import WhyMiller from '@/components/sections/why-miller';
// import { ProductDevelopment } from '@/components/sections/product-development';

export default function Home() {
  return (
    <main className="flex-1">
      <ProductDevelopment />
      <WhyMiller />
      <Features />
    </main>
  );
}
