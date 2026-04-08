'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

const AboutSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/about/team.webp" 
                alt="Joyful Health Foundation Team"
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Joyful Health Foundation is a non-profit organization dedicated to promoting health and well-being in communities worldwide. Joyful Health Foundation was established in the year 2022 and is registered with the Corporate Affairs Commission of Nigeria (RC7086839). We have provided free healthcare services over 3000 patients including vision clinic in the communities. We are headquartered in Imo State, Nigeria with an office in United State of America. The Joyful Health Foundation is dedicated to promoting comprehensive well-being by providing accessible healthcare services, health education, and community support. The foundation strives to decrease barriers to healthcare access, particularly for underprivileged groups, via a commitment to diversity and compassion. 
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our multifaceted approach combines medical outreach programs, academic scholarships, and technology training to create sustainable impact. We believe that health and education are fundamental human rights, and we are committed to making these accessible to all.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-gray-700">Registered NGO with proven track record</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-gray-700">100% transparency in fund utilization</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-gray-700">Community-driven sustainable programs</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;