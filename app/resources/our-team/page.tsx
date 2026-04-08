'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.08 } },
  viewport: { once: true, margin: '-100px' },
};

const leadership = [
  {
    image: '/images/team/founder.webp',
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
  },
];

const extendedTeam = [
  {
    image: '/images/team/dop.webp',
    name: 'Dr. Ezeben Franklin',
    role: 'Doctor of Optometry',
    email: 'donvica84@gmail.com',
  },
  {
    image: '/images/team/med-lab.webp',
    name: 'Nkwopara Blessing Oluchi',
    role: 'Medical Lab Scientist',
    email: 'luchybeloved@gmail.com',
  },
  {
    image: '/images/team/med-doc.webp',
    name: 'Dr. EZE SAMUEL',
    role: 'Medical Doctor',
    email: 'ezeobinwa97@gmail.com',
  },
  {
    image: '/images/team/doc-opt.webp',
    name: 'Dr. Obiajulu Samuel Nwobodo',
    role: 'Doctor of Optometry',
    email: 'obiajulum1994@gmail.com',
  },
  {
    image: '/images/team/mol.webp',
    name: 'Akubukwe Glory Chinaza',
    role: 'Medical Lab Scientist',
    email: 'glory.akubukwe@gmail.com',
  },
  {
    image: '/images/team/mdoc.webp',
    name: 'Dr. Uwakwe Arinze Joseph',
    role: 'Medical Doctor',
    email: 'uwakweraymond@gmail.com',
  },
  {
    image: '/images/team/mdc.webp',
    name: 'Dr. Onuba Chisom',
    role: 'Medical Doctor',
    email: 'chisomonuba8@gmail.com',
  },
  {
    image: '/images/team/vol1.webp',
    name: 'Chidimma Ekechukwu',
    role: 'Volunteer',
    email: 'info@joyfulhealthfoundation.org',
  },
  {
    image: '/images/team/vol.webp',
    name: 'Chikaodi Albert',
    role: 'Volunteer',
    email: 'info@joyfulhealthfoundation.org',
  },
];

const TeamCard = ({ member }: { member: typeof leadership[0] }) => (
  <motion.div
    variants={fadeInUp}
    className="group bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2"
  >
    <div className="relative h-72 w-full">
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
      />
    </div>
    <div className="p-4">
      <h3 className="text-base font-bold text-primary leading-tight">{member.name}</h3>
      <p className="text-accent font-medium text-sm mb-2">{member.role}</p>
      <a
        href={`mailto:${member.email}`}
        className="inline-flex items-center space-x-1.5 text-gray-500 hover:text-accent transition-colors text-xs"
      >
        <Mail className="w-3.5 h-3.5 flex-shrink-0" />
        <span className="truncate">{member.email}</span>
      </a>
    </div>
  </motion.div>
);

const OurTeamPage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-[#262e40] py-24 px-4">
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Meet Our Team</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg font-semibold text-white mb-3">Dedication. Expertise. Passion.</p>
          <p className="text-lg text-gray-300 leading-relaxed">
            The Joyful Health Foundation is powered by a team of compassionate and dedicated professionals who share our passion for improving physical and mental health. Our team comprises of individuals with diverse expertise and experience, who come together to deliver the best possible outcomes for our patients.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Leadership */}
        <motion.div {...fadeInUp} className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">Leadership</h2>
          <div className="w-16 h-1 bg-accent mb-10"></div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {leadership.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </motion.div>

        {/* Extended Team */}
        <motion.div {...fadeInUp} className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">The Team</h2>
          <div className="w-16 h-1 bg-accent mb-10"></div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {extendedTeam.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default OurTeamPage;