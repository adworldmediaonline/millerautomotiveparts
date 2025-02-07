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
        <div className="hidden lg:block relative" ref={containerRef}>
          {/* Background line (non-animated) */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-accent/20"
            style={{
              boxShadow: '0 0 10px rgba(0,0,0,0.02)',
            }}
          />

          {/* Animated progress line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 origin-top"
            style={{
              background:
                'linear-gradient(180deg, #1C2B5E 0%, rgba(28, 43, 94, 0.3) 100%)',
              scaleY: scaleProgress,
              boxShadow: '0 0 10px rgba(0,0,0,0.05)',
            }}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-32"
          >
            {developmentSteps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className={`relative flex ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } items-center gap-8`}
              >
                {/* Icon Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    className="bg-gradient-to-br from-miller-navy to-miller-navy/90 p-4 rounded-full border-4 border-white shadow-lg"
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        type: 'spring',
                        stiffness: 300,
                        damping: 15,
                      },
                    }}
                  >
                    <step.icon className="h-8 w-8 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? 'text-right pr-16' : 'pl-16'
                  }`}
                >
                  <motion.div
                    className={`bg-white rounded-2xl p-6 shadow-lg relative
                      before:absolute before:top-1/2 before:-translate-y-1/2
                      before:w-4 before:h-4 before:rotate-45 before:bg-white
                      ${
                        index % 2 === 0
                          ? 'before:right-0 before:translate-x-1/2'
                          : 'before:left-0 before:-translate-x-1/2'
                      }
                      hover:shadow-xl transition-all duration-300 border border-accent/10
                    `}
                    whileHover={{
                      scale: 1.02,
                      y: -4,
                      transition: {
                        type: 'spring',
                        stiffness: 300,
                        damping: 15,
                      },
                    }}
                  >
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-miller-navy mb-6 flex items-center gap-3">
                        <span
                          className={`inline-block w-8 h-0.5 bg-miller-red ${
                            index % 2 === 0 ? 'order-2' : 'order-1'
                          }`}
                        />
                        <span
                          className={index % 2 === 0 ? 'order-1' : 'order-2'}
                        >
                          {step.title}
                        </span>
                      </h3>
                      <ul className="space-y-4">
                        {step.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            className={`flex items-start gap-3 group ${
                              index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                            }`}
                            initial={{
                              opacity: 0,
                              x: index % 2 === 0 ? 20 : -20,
                            }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.5,
                              delay: itemIndex * 0.1,
                            }}
                          >
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-miller-red flex-shrink-0 transition-transform duration-300 group-hover:scale-150" />
                            <span
                              className={`text-muted-foreground group-hover:text-foreground transition-colors duration-300 ${
                                index % 2 === 0 ? 'text-right' : 'text-left'
                              }`}
                            >
                              {item}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for the other side */}
                <div className="w-1/2" />
              </motion.div>
            ))}
          </motion.div>
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
                <ul className="space-y-4">
                  {step.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      className="flex items-start gap-3 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: itemIndex * 0.1,
                      }}
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-miller-red flex-shrink-0 transition-transform duration-300 group-hover:scale-150" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
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
