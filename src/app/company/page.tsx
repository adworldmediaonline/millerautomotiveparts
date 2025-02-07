import { Boxes, Cog, Shield, Target } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Miller Automotive Parts - Company',
  description: 'Miller Automotive Parts - Company',
};

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-miller-navy py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">About Our Company</h1>
          <p className="text-lg max-w-3xl">
            Miller Automotive Parts is a leading innovator in the American
            automotive components industry. Formed with a vision to drive
            excellence, we specialize in designing, manufacturing, and supplying
            high-performance automotive parts for both original equipment
            manufacturers (OEMs) and the aftermarket sector.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="bg-background rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-miller-red mb-4">
              Our History
            </h2>
            <p className="text-lg text-muted-foreground">
              The company was founded in 2008 with a vision to make quality
              products at more affordable prices.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Expertise Column */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-miller-red">
                Our Expertise
              </h2>
              <p className="text-lg text-muted-foreground">
                With a commitment to quality, precision, and sustainability, we
                provide a diverse range of components for Steering and
                Suspension for all major applications. Our core competency is to
                build parts from billet, casting, forging and sheet metal from
                various metals like Steel, Stainless Steel, Aluminum (T 6061 & T
                7075), Bronze etc.
              </p>
              <p className="text-lg text-muted-foreground">
                Our cutting-edge technology, rigorous testing standards, and
                customer-centric approach have earned us a reputation for
                reliability and trust in the global automotive market.
              </p>
            </div>

            {/* Values Column */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-miller-red">
                Our Commitment
              </h2>
              <p className="text-lg text-muted-foreground">
                At Miller&apos;s, we understand the importance of safety,
                performance, and efficiency in today&apos;s rapidly evolving
                automotive landscape. As we continue to push the boundaries of
                innovation, our goal is to empower our partners and customers
                with the best-in-class solutions that meet the demands of modern
                vehicles.
              </p>
              <p className="text-lg text-muted-foreground">
                Let us accelerate your journey towards excellence with our
                advanced automotive components, crafted for performance,
                durability, and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-lg text-center">
              <div className="inline-flex p-3 rounded-full bg-miller-red/10 text-miller-red mb-4">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                Driving excellence in automotive innovation
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-lg text-center">
              <div className="inline-flex p-3 rounded-full bg-miller-red/10 text-miller-red mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-muted-foreground">
                Rigorous testing and quality standards
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-lg text-center">
              <div className="inline-flex p-3 rounded-full bg-miller-red/10 text-miller-red mb-4">
                <Cog className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                Cutting-edge technology and solutions
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-lg text-center">
              <div className="inline-flex p-3 rounded-full bg-miller-red/10 text-miller-red mb-4">
                <Boxes className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Diversity</h3>
              <p className="text-muted-foreground">
                Wide range of automotive components
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
