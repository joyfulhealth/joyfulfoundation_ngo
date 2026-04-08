'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ArrowRight, PlayCircle } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Replace these with your actual images
  const slides = [
    {
      image: '/images/hero/medical-outreach.jpg',
      alt: 'Medical outreach program helping communities'
    },
    {
      image: '/images/hero/academic-support.jpg',
      alt: 'Academic support and education programs'
    },
    {
      image: '/images/hero/it-training.jpg',
      alt: 'IT scholarship and training programs'
    },
    {
      image: '/images/hero/community-health.jpg',
      alt: 'Community health initiatives'
    }
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 bg-primary">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slides[currentSlide].image})`,
              }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/60" />
            
            {/* Additional Dark Overlay for Better Text Contrast */}
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 h-2 bg-white rounded-full'
                : 'w-2 h-2 bg-white/50 hover:bg-white/75 rounded-full'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-white font-medium text-sm sm:text-base">
                Making a Difference, One Life at a Time
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Transforming Lives Through{' '}
              <span className="text-accent">Health</span> &{' '}
              <span className="text-accent">Education</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl"
            >
              Join us in our mission to provide quality healthcare, education, and technology opportunities to underserved communities across Nigeria.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="https://donorbox.org/joyful-health-foundation"
                target="_blank"
                className="group inline-flex items-center justify-center space-x-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Heart className="w-5 h-5" />
                <span>Donate Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/projects/medical-outreach"
                className="group inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all border-2 border-white/30 hover:border-white/50"
              >
                <PlayCircle className="w-5 h-5" />
                <span>See Our Impact</span>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-12 grid grid-cols-3 gap-6 max-w-2xl"
            >
              <div className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">
                  5,000+
                </div>
                <div className="text-sm sm:text-base text-white/80">
                  Lives Impacted
                </div>
              </div>
              <div className="text-center sm:text-left border-l border-white/20 pl-6">
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">
                  2
                </div>
                <div className="text-sm sm:text-base text-white/80">
                  Communities Reached
                </div>
              </div>
              <div className="text-center sm:text-left border-l border-white/20 pl-6">
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">
                  4
                </div>
                <div className="text-sm sm:text-base text-white/80">
                  Programs Launched
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;