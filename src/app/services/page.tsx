import { Metadata } from 'next';
import ProductDevelopment from '@/components/sections/product-development';
import Process from '@/components/sections/process';
import { Boxes } from 'lucide-react';

const availableInventoryDescription = `We stock a whole range of products in our warehouse in Washington State.
We stock these for our existing clients and we will be happy to stock parts for you. The idea of stocking parts eliminates the waiting time.`;

export const metadata: Metadata = {
  title: 'Miller Automotive Parts - Services',
  description: 'Miller Automotive Parts - Services',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Stocked Inventory Section */}
        <section className="mb-16" id="available-inventory">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-miller-red/10 via-miller-red/5 to-transparent">
              <Boxes className="w-6 h-6 text-miller-red" />
            </div>
            <h1 className="text-3xl font-bold text-miller-red">
              Available Inventory{' '}
            </h1>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/90 leading-relaxed mb-8">
              {availableInventoryDescription}
            </p>
          </div>
        </section>

        {/* Product Development Section */}
        <section id="product-development">
          <ProductDevelopment />
        </section>

        {/* Process Section */}
        <section id="process" className="mt-16">
          <Process />
        </section>
      </div>
    </div>
  );
}
