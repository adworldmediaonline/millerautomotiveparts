'use client';

import { motion } from 'framer-motion';
import { CloudinaryImage } from '@/components/ui/cloudinary-image';

export default function Process() {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-background to-accent/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className="text-center mb-12 px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-miller-navy">
            Simple & Transparent Journey
          </h2>
        </motion.div>
        <div className="flex justify-center">
          <CloudinaryImage
            src="process_snbb9e"
            alt="Process"
            width={900}
            height={600}
            className="rounded-2xl shadow-xl max-w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
