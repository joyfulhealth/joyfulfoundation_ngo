'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb } from 'lucide-react';

const MissionVisionSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Mission & Vision
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            {...fadeInUp}
            className="bg-gradient-to-br from-primary to-primary-dark p-8 rounded-2xl shadow-xl text-white"
          >
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-white/90 leading-relaxed">
              The Joyful Health Foundation, is driven by a mission to provide accessible healthcare services to underserved communities, ensuring that every individual has the opportunity to attain optimal physical and mental well-being without financial barriers.
            </p>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-primary to-primary-dark p-8 rounded-2xl shadow-xl text-white"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
              <Lightbulb className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-white/90 leading-relaxed">
              A world where every person, regardless of background or circumstance, enjoys equal access to quality healthcare and education, empowered to live a healthy, dignified, and purposeful life.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;