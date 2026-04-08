'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Twitter, Instagram, Linkedin, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+234 816 494 7828", "+234 703 445 9611"],
      link: "tel:+2348164947828"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@joyfulhealthfoundation.org"],
      link: "mailto:info@joyfulhealthfoundation.org"
    },
    {
      icon: MapPin,
      title: "Office Address",
      details: [ "2 Umuikanwa Umuehie Street", "Ikperejere Ihitte Uboma Town,", "Imo State, Nigeria" ],
      link: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: 10:00 AM - 2:00 PM", "Sunday: Closed"],
      link: null
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", link: "https://facebook.com/joyfulhealth", color: "hover:bg-blue-600" },
    { icon: Twitter, name: "Twitter", link: "https://twitter.com/joyfulhealth", color: "hover:bg-sky-500" },
    { icon: Instagram, name: "Instagram", link: "https://instagram.com/joyfulhealth", color: "hover:bg-pink-600" },
    { icon: Linkedin, name: "LinkedIn", link: "https://linkedin.com/company/joyfulhealth", color: "hover:bg-blue-700" }
  ];

  const reasons = [
    "General inquiries about our programs",
    "Partnership and collaboration opportunities",
    "Volunteer registration",
    "Donation inquiries",
    "Media and press requests",
    "Scholarship applications",
    "Medical outreach participation",
    "Feedback and suggestions"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-primary to-primary-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/contact/hero.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                We would love to hear from you. Reach out to us for inquiries, partnerships, or to get involved in our mission.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
                {info.link && (
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-accent hover:text-accent-dark font-semibold text-sm mt-3 group"
                  >
                    <span>Contact us</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Why Contact Us */}
            <motion.div {...fadeInUp}>
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold text-primary mb-6">Why Reach Out to Us?</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We are here to answer your questions, explore partnership opportunities, and help you get involved in our mission to transform lives through healthcare and education.
                </p>
                <div className="space-y-3">
                  {reasons.map((reason, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="bg-gradient-to-br from-primary to-primary-dark p-8 rounded-2xl shadow-lg text-white h-full">
                <h3 className="text-3xl font-bold mb-4">Connect With Us</h3>
                <p className="text-white/90 mb-8 text-lg leading-relaxed">
                  Follow us on social media for updates, success stories, and upcoming events. We are active on all major platforms and would love to connect with you!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-3 bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-all group ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                      <span className="font-semibold">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are located in the Imo State, Nigeria. Drop by for a visit!
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            {/* Replace with actual Google Maps embed or your preferred map solution */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.7475434398947!2d6.9944209!3d4.8155556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cd4a7e1d8e49%3A0x5e5c1d5f7a1f5e5e!2sPort%20Harcourt%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Joyful Health Foundation Location"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r bg-[#262e40] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Whether through volunteering, partnerships, or donations, there are many ways to support our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://donorbox.org/joyful-health-foundation"
                target="_blank"
                className="inline-flex items-center justify-center space-x-2 bg-white text-accent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
              >
                <span>Donate Now</span>
              </a>
              <a
                href="/projects/medical-outreach"
                className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all border-2 border-white/30"
              >
                <span>Learn About Our Programs</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;