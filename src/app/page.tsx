import { Features } from '@/components/sections/features';

export default function Home() {
  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-8">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Miller Automotive Parts
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Your trusted source for quality automotive parts and solutions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border bg-card">
              <h2 className="text-xl font-semibold mb-4">Quality Parts</h2>
              <p className="text-muted-foreground">
                We offer a wide selection of high-quality automotive parts for
                all makes and models.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <h2 className="text-xl font-semibold mb-4">Expert Service</h2>
              <p className="text-muted-foreground">
                Our team of experts is here to help you find the right parts for
                your vehicle.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <h2 className="text-xl font-semibold mb-4">Fast Delivery</h2>
              <p className="text-muted-foreground">
                Quick and reliable shipping to get your parts when you need
                them.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Features />
    </main>
  );
}
