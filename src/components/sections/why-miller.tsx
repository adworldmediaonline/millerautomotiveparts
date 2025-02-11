'use client';

import { motion } from 'framer-motion';
import { Factory, DollarSign, PackageCheck, ThumbsUp } from 'lucide-react';

const benefits = [
  {
    icon: Factory,
    title: 'Direct Factory Access',
    text: 'We buy directly from factories',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    text: 'You get quality parts at good pricing without having to deal with the factories',
  },
  {
    icon: PackageCheck,
    title: 'Extensive Inventory',
    text: 'Thousands of parts available in our warehouse in Washington State.',
  },
  {
    icon: ThumbsUp,
    title: 'No Upfront Cost',
    text: 'No Upfront payment or advance.',
  },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhyMiller() {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-background to-accent/20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="max-w-4xl mx-auto text-center mb-12 md:mb-20 px-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-miller-navy mb-4">
            Experience Excellence in
            <span className="block mt-2 bg-gradient-to-r from-miller-red to-miller-navy bg-clip-text text-transparent">
              Automotive Parts
            </span>
          </h2>
        </motion.div>

        {/* Benefits Section */}
        <div className="relative px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-transparent to-transparent -mx-4 rounded-[2rem]" />

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      delay: index * 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                className="group"
              >
                <div className="h-full bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-accent/20">
                  <div className="flex flex-col gap-4 md:gap-6">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-miller-red/10 via-miller-red/5 to-transparent group-hover:from-miller-red/20 transition-all duration-500 group-hover:scale-110">
                        <benefit.icon className="w-6 h-6 md:w-7 md:h-7 text-miller-red" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold bg-gradient-to-br from-miller-navy to-miller-navy/80 bg-clip-text text-transparent">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground/90 group-hover:text-foreground transition-colors duration-300 text-base md:text-lg">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
