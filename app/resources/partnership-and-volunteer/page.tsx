'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true, margin: '-100px' },
};

const contactCards = [
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+234 801 234 5678', '+234 802 345 6789'],
    href: 'tel:+2348012345678',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['partners@joyfulhealth.org'],
    href: 'mailto:partners@joyfulhealth.org',
  },
  {
    icon: MapPin,
    title: 'Office Address',
    lines: ['123 Healthcare Avenue', 'Imo State, Nigeria'],
    href: 'https://maps.google.com',
  },
];

const PartnershipAndVolunteerPage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-[#262e40] py-24 px-4">
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Partnership & Volunteer
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 leading-relaxed">
            Together, we can build healthier and brighter futures for every community we serve.
          </p>
        </motion.div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Partnership Text */}
        <motion.div {...fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Partnerships</h2>
          <div className="w-16 h-1 bg-accent mb-8"></div>
          <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
            <p>
              At Joyful Health Foundation, we believe that partnerships are key to achieving our
              mission and making a lasting impact on our community.
            </p>
            <p>
              We work with a variety of organizations, including local hospitals, clinics, and
              community centers, to promote healthy lifestyles and provide access to healthcare
              services. Together, we are able to make a positive difference in the lives of those
              we serve.
            </p>
            <p>
              If you or your organization are interested in partnering with us, please contact us
              for more information.
            </p>
          </div>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-6"
        >
          {contactCards.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all p-6"
            >
              <div className="w-14 h-14 bg-[#262e40] rounded-full flex items-center justify-center mb-5">
                <card.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">{card.title}</h3>
              <div className="space-y-1 mb-5">
                {card.lines.map((line, i) => (
                  <p key={i} className="text-gray-600 text-sm">{line}</p>
                ))}
              </div>
              <a
                href={card.href}
                target={card.title === 'Office Address' ? '_blank' : undefined}
                rel="noreferrer"
                className="inline-flex items-center space-x-1.5 text-accent font-medium text-sm hover:underline"
              >
                <span>Contact us</span>
                <Send className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default PartnershipAndVolunteerPage;