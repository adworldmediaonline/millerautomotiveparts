import { User2, Mail } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    title: 'ABOUT US',
    icon: User2,
    description:
      'millerautomotiveparts specializes in Chassis Components which includes Steering, Suspension and Driveline components.',
    link: '/company',
  },
  {
    title: 'CONTACT US',
    icon: Mail,
    description: 'Get in touch with us for any inquiries or support.',
    contactInfo: {
      address: 'P.O. Box 696',
      city: 'Pleasanton, CA - 94566',
      phone: 'U.S.A. Tel: 650-464-5636',
      email: 'info@millerautomotiveparts.com',
    },
    link: '/contact',
  },
];

export function Features() {
  return (
    <section className="w-full bg-miller-red py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map(feature => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center text-white"
            >
              <div className="mb-4 rounded-full bg-gray-700/20 p-3">
                <feature.icon className="h-8 w-8" />
              </div>
              <h2 className="mb-4 text-2xl font-bold">{feature.title}</h2>
              <p className="mb-4 text-white/90">{feature.description}</p>

              {feature.contactInfo && (
                <div className="space-y-2 text-white/90">
                  <p>{feature.contactInfo.address}</p>
                  <p>{feature.contactInfo.city}</p>
                  <p>{feature.contactInfo.phone}</p>
                  <p>
                    Email:{' '}
                    <Link
                      href={`mailto:${feature.contactInfo.email}`}
                      className="underline hover:text-white"
                    >
                      {feature.contactInfo.email}
                    </Link>
                  </p>
                </div>
              )}

              <Link
                href={feature.link}
                className="mt-4 rounded-md bg-gray-700/20 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700/30 transition-colors"
              >
                READ MORE
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
