'use client';

import { motion } from 'framer-motion';
import {
  CheckCircle2,
  PackageCheck,
  Truck,
  FileCheck,
  Factory,
  Clock,
  DollarSign,
  ThumbsUp,
} from 'lucide-react';

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

const procedures = [
  {
    icon: FileCheck,
    title: 'Submit Design',
    text: 'You will supply us with a sample or a drawing',
  },
  {
    icon: CheckCircle2,
    title: 'Get Quote',
    text: 'We will get you a quote for approval',
  },
  {
    icon: Clock,
    title: 'Prototype Phase',
    text: 'Depending on the component we will get you a prototype sample in 15 to 45 days for approval.',
  },
  {
    icon: Clock,
    title: 'Schedule Setup',
    text: 'You can set a schedule or we will get you a delivery date.',
  },
  {
    icon: Truck,
    title: 'Delivery',
    text: 'We deliver parts to your door.',
  },
  {
    icon: ThumbsUp,
    title: 'Satisfaction Check',
    text: 'You can check the material and then pay us after you are satisfied with the order.',
  },
  {
    icon: PackageCheck,
    title: 'Risk-Free Guarantee',
    text: 'If you dont like what you see you do not pay for it. We will take the parts back on our cost.',
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
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-miller-red/5 text-miller-red text-sm font-medium ring-1 ring-miller-red/20">
            <span className="w-1 h-1 rounded-full bg-miller-red" />
            Why Choose Miller
          </span>
          <h2 className="mt-6 text-3xl md:text-5xl font-bold text-miller-navy mb-4">
            Experience Excellence in
            <span className="block mt-2 bg-gradient-to-r from-miller-red to-miller-navy bg-clip-text text-transparent">
              Automotive Parts
            </span>
          </h2>
        </motion.div>

        {/* Benefits Section */}
        <div className="mb-20 md:mb-32 relative px-4">
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

        {/* Process Section - Mobile First Design */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="text-center mb-12 px-4"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-miller-navy/5 text-miller-navy text-sm font-medium ring-1 ring-miller-navy/20">
            <span className="w-1 h-1 rounded-full bg-miller-navy" />
            Our Process
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-miller-navy">
            Simple & Transparent Journey
          </h2>
        </motion.div>

        <div className="relative px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10 rounded-3xl" />

          {/* Mobile Process Layout */}
          <div className="lg:hidden relative space-y-4">
            {procedures.map((procedure, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                className="group"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-500 border border-accent/20">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-miller-navy/10 via-miller-navy/5 to-transparent group-hover:from-miller-navy/20 transition-all duration-500">
                      <procedure.icon className="w-5 h-5 text-miller-navy" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-miller-navy/5 text-miller-navy font-bold text-sm">
                          {index + 1}
                        </span>
                        <h3 className="text-base font-bold text-miller-navy">
                          {procedure.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground/90 group-hover:text-foreground transition-colors duration-300">
                        {procedure.text}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop Process Layout */}
          <div className="hidden lg:grid grid-cols-3 gap-8 p-8">
            {/* Initial Steps */}
            <div className="space-y-6">
              {procedures.slice(0, 3).map((procedure, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  className="group"
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-accent/20">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-miller-navy/10 via-miller-navy/5 to-transparent group-hover:from-miller-navy/20 transition-all duration-500">
                        <procedure.icon className="w-6 h-6 text-miller-navy" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-miller-navy/5 text-miller-navy font-bold text-sm">
                            {index + 1}
                          </span>
                          <h3 className="text-lg font-bold text-miller-navy">
                            {procedure.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground/90 group-hover:text-foreground transition-colors duration-300">
                          {procedure.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Center Image/Illustration */}
            <div className="flex items-center justify-center py-8">
              <div className="w-full aspect-square max-w-sm bg-gradient-to-br from-miller-red/5 to-miller-navy/5 rounded-full flex items-center justify-center p-8">
                <div className="w-full h-full rounded-full border-2 border-dashed border-miller-navy/20 animate-[spin_20s_linear_infinite] flex items-center justify-center">
                  <div className="w-4/5 h-4/5 rounded-full bg-white/50 backdrop-blur-sm shadow-lg flex items-center justify-center text-2xl font-bold text-miller-navy">
                    Miller Process
                  </div>
                </div>
              </div>
            </div>

            {/* Final Steps */}
            <div className="space-y-6">
              {procedures.slice(3).map((procedure, index) => (
                <motion.div
                  key={index + 3}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={{
                    hidden: { opacity: 0, x: 30 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  className="group"
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-accent/20">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-miller-navy/10 via-miller-navy/5 to-transparent group-hover:from-miller-navy/20 transition-all duration-500">
                        <procedure.icon className="w-6 h-6 text-miller-navy" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-miller-navy/5 text-miller-navy font-bold text-sm">
                            {index + 4}
                          </span>
                          <h3 className="text-lg font-bold text-miller-navy">
                            {procedure.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground/90 group-hover:text-foreground transition-colors duration-300">
                          {procedure.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
