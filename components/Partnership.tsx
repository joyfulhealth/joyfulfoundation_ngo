'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
// import Link from 'next/link';

const Partnership = () => {
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
          <h2 className="text-4xl font-bold text-primary mb-4">Partner With Us</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us as a partner or volunteer to create lasting change in communities across Nigeria and Africa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <motion.div {...fadeInUp}>
            <h3 className="text-3xl font-bold text-primary mb-6">Why Partner With Us?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We welcome partnerships with corporations, foundations, community organizations, and individuals who share our vision of transforming lives through healthcare and education.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-primary mb-1">Corporate Social Responsibility</h4>
                  <p className="text-gray-600">Align your CSR goals with meaningful community impact</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-primary mb-1">Brand Visibility</h4>
                  <p className="text-gray-600">Gain recognition through our events, publications, and social media</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-primary mb-1">Employee Engagement</h4>
                  <p className="text-gray-600">Involve your team in volunteer opportunities and skill-sharing programs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-primary mb-1">Measurable Impact</h4>
                  <p className="text-gray-600">Receive detailed reports on the impact of your partnership</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <div className="bg-gradient-to-br from-primary to-primary-dark p-8 rounded-2xl shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-6">Partnership Opportunities</h3>
              <div className="space-y-4">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Program Sponsorship</h4>
                  <p className="text-sm text-white/90">Support specific programs like medical outreach, scholarships, or IT training</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Event Partnership</h4>
                  <p className="text-sm text-white/90">Co-host community health events, educational fairs, or tech workshops</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                  <h4 className="font-bold mb-2">In-Kind Donations</h4>
                  <p className="text-sm text-white/90">Contribute medical supplies, educational materials, or technology equipment</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Skills-Based Volunteering</h4>
                  <p className="text-sm text-white/90">Share professional expertise in healthcare, education, or technology</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;