import { Features } from '@/components/sections/features';
import WhyMiller from '@/components/sections/why-miller';

export default function Home() {
  return (
    <main className="flex-1">
      <WhyMiller />
      <Features />
    </main>
  );
}
