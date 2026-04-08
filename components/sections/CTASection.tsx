'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building, Heart } from 'lucide-react';
import Link from 'next/link';

const CTASection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-20 bg-gradient-to-r bg-[#262e40] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Be Part of the Change
          </h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            Your support can transform lives. Join us in building healthier, more educated communities across Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://donorbox.org/joyful-health-foundation"
              target="_blank"
              className="inline-flex items-center justify-center space-x-2 bg-white text-accent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Heart className="w-5 h-5" />
              <span>Donate Now</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all border-2 border-white/30"
            >
              <Building className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>Explore Partnership Opportunities</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;