import { Metadata } from 'next';
import { Building2, MapPin, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - Miller Automotive Parts',
  description: 'Contact Miller Automotive Parts for inquiries and support.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-miller-navy mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us for any inquiries about our automotive parts
            and services.
          </p>
        </div>

        {/* Contact Information */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-accent/20">
          <div className="p-8">
            {/* Company Name */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-miller-red/10 via-miller-red/5 to-transparent">
                <Building2 className="w-6 h-6 text-miller-red" />
              </div>
              <h2 className="text-2xl font-bold text-miller-navy">
                Miller Automotive Parts LLC
              </h2>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 flex items-center justify-center mt-1">
                  <MapPin className="w-5 h-5 text-miller-red" />
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    4001 134th St NE
                  </p>
                  <p className="font-medium text-foreground">
                    Marysville WA 98271
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-miller-red" />
                </div>
                <a
                  href="tel:+14255016908"
                  className="font-medium text-foreground hover:text-miller-red transition-colors"
                >
                  (425) 501 6908
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-miller-red" />
                </div>
                <a
                  href="mailto:info@millerautomotiveparts.com"
                  className="font-medium text-foreground hover:text-miller-red transition-colors"
                >
                  info@millerautomotiveparts.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
