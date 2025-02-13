'use client';

import { motion } from 'framer-motion';
import {
  CheckCircle2,
  PackageCheck,
  Truck,
  FileCheck,
  Clock,
  ThumbsUp,
} from 'lucide-react';

const procedures = [
  {
    icon: FileCheck,
    title: 'Drawing or Sample',
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

export default function Process() {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-background to-accent/20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="text-center mb-12 px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-miller-navy">
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
