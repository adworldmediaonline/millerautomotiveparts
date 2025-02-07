import { Cog, Boxes } from 'lucide-react';
import { Metadata } from 'next';

const services = [
  {
    title: 'Aftermarket Parts',
    icon: Boxes,
    description:
      'We stock most major lines of automotive parts and supplies and able to provide superior service to wholesale and retail customers nationally and globally through our warehouse in Pleasanton, California. Our extremely experienced staff of certified parts professionals and machinists are available to provide technical information or to assist you with parts selection. We source directly from manufacturers in which many of them are the original equipment manufacturers (OEM) to the car makers, thus the quality is guaranteed. Because of the direct purchase nature, we have maintained a very good price factor and logistic control.',
  },
  {
    title: 'Product Development',
    icon: Cog,
    description:
      "Whether you've a drawing ready for us to quote or an idea which you'd like to get developed, we're all for it. We've the capability of reverse engineer a product and work with you from a concept to the final product. Our expertise are in forged steel components - raw or completely machined with close tolerances, custom rubber components from natural to synthetic rubber. Our components are widely used in many construction, automotive and agriculture applications where they're being used in rigorous conditions.",
  },
];

const advantages = [
  'Top quality at a reasonable price',
  'One stop shop for steel and rubber components',
  'Shorter lead time',
  'Close tolerances',
  'Customizable Packing',
  'Known name in the industry',
  'Many in-stock components',
];

export const metadata: Metadata = {
  title: 'Miller Automotive Parts - Services',
  description: 'Miller Automotive Parts - Services',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Aftermarket Parts Section */}
        <section className="mb-16">
          <h1 className="text-3xl font-bold text-miller-red mb-6">
            Aftermarket Parts
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/90 leading-relaxed mb-8">
              {services[0].description}
            </p>
          </div>
        </section>

        {/* Product Development Section */}
        <section className="mb-16">
          <h1 className="text-3xl font-bold text-miller-red mb-6">
            Product Development
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/90 leading-relaxed mb-8">
              {services[1].description}
            </p>
          </div>
        </section>

        {/* millerautomotiveparts Advantage Section */}
        <section>
          <h1 className="text-3xl font-bold text-miller-red mb-6">
            millerautomotiveparts Advantage
          </h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {advantages.map(advantage => (
                <li key={advantage} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-miller-red flex-shrink-0" />
                  <span className="text-lg">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
