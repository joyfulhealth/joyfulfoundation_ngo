'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Globe, HandHeart, ShieldCheck } from 'lucide-react';

const CoreValuesSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true, margin: "-100px" }
  };

  const coreValues = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every individual with genuine care, always putting the wellbeing of others at the heart of what we do."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of working together — with communities, partners, and volunteers — to achieve greater impact."
    },
    {
      icon: Globe,
      title: "Inclusivity",
      description: "We are committed to serving everyone regardless of background, ensuring no one is left behind in accessing healthcare and education."
    },
    {
      icon: HandHeart,
      title: "Empathy",
      description: "We listen first. Understanding the lived experiences of those we serve shapes every program and decision we make."
    },
    {
      icon: ShieldCheck,
      title: "Integrity",
      description: "We operate with full transparency and accountability, honoring the trust placed in us by our donors, partners, and communities."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Core Values
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-[#262e40] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValuesSection;