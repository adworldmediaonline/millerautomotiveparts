'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { Ruler, Wrench, TestTube, Cog } from 'lucide-react';
import React from 'react';

const developmentSteps = [
  {
    title: 'Pre Engineering',
    icon: Ruler,
    items: [
      'Design & Engineering based on samples or drawings.',
      'Develop initial CAD models based on specifications.',
      'Perform structural and dynamic analysis using FEA (Finite Element Analysis).',
      'Optimize material selection for strength, weight, and cost efficiency.',
      'Design for manufacturability (DFM) and ease of assembly.',
    ],
  },
  {
    title: 'Prototype Development',
    icon: Wrench,
    items: [
      '15 to 45 Days depending on the component.',
      'Produce prototypes using rapid prototyping (CNC machining, or casting).',
      'Conduct initial functional and durability testing if required.',
      'Iterate design based on test feedback',
    ],
  },
  {
    title: 'Testing & Validation',
    icon: TestTube,
    items: [
      'Perform laboratory tests (fatigue, impact, corrosion, and thermal resistance).',
      'Validate compliance with industry standards (SAE, ISO, FMVSS).',
    ],
  },
  {
    title: 'Manufacturing Process Development',
    icon: Cog,
    items: [
      'Define production processes (forging, casting, machining, stamping, welding).',
      'Develop tooling, fixtures, and quality control measures.',
      'Conduct pilot runs to validate production efficiency and consistency.',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15,
      mass: 0.8,
    },
  },
};

const titleVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1.0],
    },
  },
};

export default function ProductDevelopment() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className="py-16 bg-gradient-to-b from-background via-accent/20 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-miller-red/10 text-miller-red rounded-full text-sm font-medium mb-4">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-miller-navy mb-4">
            PRODUCT DEVELOPMENT
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-miller-red to-miller-red/70 mx-auto rounded-full" />
        </motion.div>

        {/* Desktop Timeline (hidden on mobile) */}
        <div
          className="hidden lg:block relative max-w-6xl mx-auto"
          ref={containerRef}
        >
          <div className="grid grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="relative">
              <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-accent/20" />
              <motion.div
                className="absolute right-0 top-0 bottom-0 w-0.5 origin-top"
                style={{
                  background:
                    'linear-gradient(180deg, #1C2B5E 0%, rgba(28, 43, 94, 0.3) 100%)',
                  scaleY: scaleProgress,
                }}
              />
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="space-y-16 pr-12"
              >
                {developmentSteps.slice(0, 2).map(step => (
                  <motion.div
                    key={step.title}
                    variants={itemVariants}
                    className="relative"
                  >
                    {/* Icon Circle */}
                    <div className="absolute right-0 top-3 translate-x-1/2 z-10">
                      <motion.div
                        className="bg-gradient-to-br from-miller-navy to-miller-navy/90 p-2.5 rounded-full border-4 border-white shadow-lg"
                        whileHover={{
                          scale: 1.1,
                          transition: {
                            type: 'spring',
                            stiffness: 300,
                            damping: 15,
                          },
                        }}
                      >
                        <step.icon className="h-5 w-5 text-white" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <motion.div
                      className="bg-white rounded-xl p-4 shadow-lg relative
                        before:absolute before:right-0 before:top-5 before:translate-x-2
                        before:w-2.5 before:h-2.5 before:rotate-45 before:bg-white
                        hover:shadow-xl transition-all duration-300 border border-accent/10"
                      whileHover={{
                        scale: 1.02,
                        x: -4,
                        transition: {
                          type: 'spring',
                          stiffness: 300,
                          damping: 15,
                        },
                      }}
                    >
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold text-miller-navy mb-3 flex items-center justify-end gap-2">
                          <span>{step.title}</span>
                          <span className="inline-block w-6 h-0.5 bg-miller-red" />
                        </h3>
                        <ul className="space-y-2">
                          {step.items.map((item, itemIndex) => (
                            <motion.li
                              key={itemIndex}
                              className="group"
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.5,
                                delay: itemIndex * 0.1,
                              }}
                            >
                              <span className="block text-sm text-right text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                {item}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent/20" />
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-0.5 origin-top"
                style={{
                  background:
                    'linear-gradient(180deg, #1C2B5E 0%, rgba(28, 43, 94, 0.3) 100%)',
                  scaleY: scaleProgress,
                }}
              />
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="space-y-16 pl-12"
              >
                {developmentSteps.slice(2).map(step => (
                  <motion.div
                    key={step.title}
                    variants={itemVariants}
                    className="relative"
                  >
                    {/* Icon Circle */}
                    <div className="absolute left-0 top-3 -translate-x-1/2 z-10">
                      <motion.div
                        className="bg-gradient-to-br from-miller-navy to-miller-navy/90 p-2.5 rounded-full border-4 border-white shadow-lg"
                        whileHover={{
                          scale: 1.1,
                          transition: {
                            type: 'spring',
                            stiffness: 300,
                            damping: 15,
                          },
                        }}
                      >
                        <step.icon className="h-5 w-5 text-white" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <motion.div
                      className="bg-white rounded-xl p-4 shadow-lg relative
                        before:absolute before:left-0 before:top-5 before:-translate-x-2
                        before:w-2.5 before:h-2.5 before:rotate-45 before:bg-white
                        hover:shadow-xl transition-all duration-300 border border-accent/10"
                      whileHover={{
                        scale: 1.02,
                        x: 4,
                        transition: {
                          type: 'spring',
                          stiffness: 300,
                          damping: 15,
                        },
                      }}
                    >
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold text-miller-navy mb-3 flex items-center gap-2">
                          <span className="inline-block w-6 h-0.5 bg-miller-red" />
                          <span>{step.title}</span>
                        </h3>
                        <ul className="space-y-2">
                          {step.items.map((item, itemIndex) => (
                            <motion.li
                              key={itemIndex}
                              className="group"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.5,
                                delay: itemIndex * 0.1,
                              }}
                            >
                              <span className="block text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                {item}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="lg:hidden space-y-6"
        >
          {developmentSteps.map(step => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-accent/10"
            >
              <div className="bg-gradient-to-r from-miller-navy to-miller-navy/90 p-6 flex items-center gap-4">
                <motion.div
                  className="bg-white/10 p-3 rounded-xl border-2 border-white/20"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  <step.icon className="h-6 w-6 text-white" />
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {step.title}
                </h3>
              </div>

              <div className="p-6">
                <ul className="space-y-3">
                  {step.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      className="group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: itemIndex * 0.1,
                      }}
                    >
                      <span className="block text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
