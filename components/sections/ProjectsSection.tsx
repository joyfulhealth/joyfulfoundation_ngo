'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const TeamSection = () => {
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

  const team = [
    {
      image: "/images/team/founder.webp",
      name: "Dr. Philip Okeke",
      role: "Founder",
      email: "info@joyfullhealthfoundation.org"
    },
    {
      image: "/images/team/cofounder.webp",
      name: "Chinonye Uzoeshi",
      role: "Co-Founder",
      email: "chinonyeuzoeshi@gmail.com"
    },
    {
      image: "/images/team/medical-director.webp",
      name: "Dr. Patrick Desmond Osita",
      role: "Medical Director",
      email: "drpod22@gmail.com"
    },
    {
      image: "/images/team/cno.webp",
      name: "Nkechinyere Ofoegbu",
      role: "Chief Nursing Officer",
      email: "okorekegracenkechinyere@gmail.com"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Team
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg font-semibold text-gray-700 mb-3">Dedication. Expertise. Passion.</p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Joyful Health Foundation is powered by a team of compassionate and dedicated professionals who share our passion for improving physical and mental health. Our team comprises of individuals with diverse expertise and experience, who come together to deliver the best possible outcomes for our patients.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="relative h-80 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-primary">{member.name}</h3>
                <p className="text-accent font-medium text-sm mb-3">{member.role}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center space-x-2 text-gray-500 hover:text-accent transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">{member.email}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div {...fadeInUp} className="text-center mt-12">
          <Link
            href="/resources/our-team"
            className="inline-flex items-center space-x-2 text-accent font-semibold hover:text-primary transition-colors group"
          >
            <span>View Full Team</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;