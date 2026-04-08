'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Image from 'next/image';
import VideoModal from '@/components/VideoModal';

interface Testimonial {
  name: string;
  role: string;
  location: string;
  video: string;
  thumbnail: string;
}

const TestimonialsSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<Testimonial | null>(null);

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

  const testimonials: Testimonial[] = [
    {
      name: "Amaka Okonkwo",
      role: "Medical Outreach Beneficiary",
      location: "Lagos",
      video: "/videos/testimonials/t1.mp4",
      thumbnail: "/images/testimonials/thumb1.png"
    },
     {
      name: "ThankGod Emeji",
      role: "Ihitte Uboma Town President General",
      location: "Ihite Uboma",
      video: "/videos/testimonials/t4.mp4",
      thumbnail: "/images/testimonials/thumb4.webp"
    },
    {
      name: "Chukwudi Eze",
      role: "IT Scholarship Graduate",
      location: "Port Harcourt",
      video: "/videos/testimonials/t2.mp4",
      thumbnail: "/images/testimonials/thumb2.png"
    },
   
    {
      name: "Fatima Mohammed",
      role: "Academic Scholarship Student",
      location: "Abuja",
      video: "/videos/testimonials/t3.mp4",
      thumbnail: "/images/testimonials/thumb3.png"
    }
  ];

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Stories of Impact
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from the lives we have touched
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden group cursor-pointer"
                onClick={() => setSelectedVideo(testimonial)}
              >
                {/* Thumbnail with Play Button */}
                <div className="relative aspect-video bg-gray-900 overflow-hidden">
                  <Image 
                    src={testimonial.thumbnail}
                    alt={`${testimonial.name} testimonial`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/90 group-hover:bg-accent group-hover:scale-110 transition-all flex items-center justify-center shadow-2xl">
                      <Play className="w-8 h-8 text-primary group-hover:text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>

                {/* Testimonial Info */}
                {/* <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div> */}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoUrl={selectedVideo.video}
        />
      )}
    </>
  );
};

export default TestimonialsSection;