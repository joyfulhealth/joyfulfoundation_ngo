'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Heart, Users, MapPin, Calendar, CheckCircle, ArrowRight, Target, } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const MedicalOutreachPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const stats = [
    { icon: Users, number: "5,000+", label: "Patients Treated" },
    { icon: MapPin, number: "50+", label: "Communities Reached" },
    { icon: Calendar, number: "24", label: "Outreach Events" },
    { icon: Heart, number: "100%", label: "Free Healthcare" }
  ];

  const services = [
    {
      title: "Medical Screening",
      description: "Comprehensive health checks including blood pressure, blood sugar, malaria tests, and general physical examinations.",
      icon: Stethoscope
    },
    {
      title: "Free Medications",
      description: "Distribution of essential medicines for common ailments including antimalarials, antibiotics, and pain relievers.",
      icon: Heart
    },
    {
      title: "Health Education",
      description: "Teaching communities about disease prevention, hygiene practices, nutrition, and healthy living habits.",
      icon: Users
    },
    {
      title: "Referral Services",
      description: "Connecting patients with serious conditions to hospitals and specialists for advanced treatment.",
      icon: Target
    }
  ];

//   const upcomingEvents = [
//     {
//       location: "Ogoni Land, Rivers State",
//       date: "March 15, 2025",
//       participants: "Expected 200+ beneficiaries",
//       services: ["Medical Screening", "Free Drugs", "Health Talks"]
//     },
//     {
//       location: "Okrika Community, Rivers State",
//       date: "April 22, 2025",
//       participants: "Expected 150+ beneficiaries",
//       services: ["Eye Screening", "Dental Care", "Immunization"]
//     }
//   ];

  const gallery = [
    { image: "/images/projects/medical/gallery1.jpg", caption: "Community health screening" },
    { image: "/images/projects/medical/gallery2.jpg", caption: "Distributing medications" },
    { image: "/images/projects/medical/gallery3.jpg", caption: "Health education session" },
    { image: "/images/projects/medical/gallery4.jpg", caption: "Patient consultation" },
    { image: "/images/projects/medical/gallery5.jpg", caption: "Team with beneficiaries" },
    { image: "/images/projects/medical/gallery6.jpg", caption: "Medical supplies distribution" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/images/projects/medical/hero.jpg" 
            alt="Medical Outreach" 
            className="w-full h-full object-cover opacity-30"
            width={150}
            height={64}
          />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Stethoscope className="w-5 h-5 text-white" />
                <span className="text-white font-medium">Healthcare Initiative</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Medical Outreach Program
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mb-8">
                Bringing quality healthcare to underserved communities across Nigeria, one outreach at a time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://donorbox.org/joyful-health-foundation"
                  target="_blank"
                  className="inline-flex items-center justify-center space-x-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  <Heart className="w-5 h-5" />
                  <span>Support This Program</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-all border-2 border-white/30"
                >
                  <span>Get Involved</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <stat.icon className="w-10 h-10 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Program Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-bold text-primary mb-6">About the Program</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our Medical Outreach Program is designed to bridge the healthcare gap in underserved communities across Nigeria. We bring free medical services directly to communities that lack access to quality healthcare facilities.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Through partnerships with medical professionals, pharmaceutical companies, and local community leaders, we provide comprehensive healthcare services including medical screenings, free medications, health education, and referrals for specialized care.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-gray-700">100% free healthcare services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-gray-700">Qualified medical professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-gray-700">Follow-up care and referrals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-gray-700">Community health education</span>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/hero/medical-outreach.jpg" 
                  alt="Medical team at work"
                  className="w-full h-full object-cover"
                  width={600}
                  height={384}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Services We Provide</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare services tailored to community needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Upcoming Outreach Events</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us at our next community health outreach
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{event.location}</h3>
                    <p className="text-gray-600 flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </p>
                  </div>
                </div>
                <div className="bg-white/60 p-4 rounded-lg mb-4">
                  <p className="text-sm font-semibold text-primary mb-2">{event.participants}</p>
                  <div className="flex flex-wrap gap-2">
                    {event.services.map((service, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-accent-light text-primary text-xs font-medium rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                <Link 
                  href="/contact"
                  className="inline-flex items-center space-x-2 text-accent hover:text-accent-dark font-semibold group"
                >
                  <span>Volunteer at this event</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Program Gallery</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Moments from our medical outreach programs
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <Image 
                  src={item.image} 
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    width={400}
                    height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <p className="text-white p-4 font-medium">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      {/* <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Real stories of lives transformed through accessible healthcare
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div {...fadeInUp} className="text-center">
              <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">85%</h3>
              <p className="text-white/90">Early disease detection rate</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="text-center">
              <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">3,200+</h3>
              <p className="text-white/90">Free medications distributed</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="text-center">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">100+</h3>
              <p className="text-white/90">Healthcare volunteers mobilized</p>
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="text-center">
            <Link
              href="/donate"
              className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              <Heart className="w-5 h-5" />
              <span>Support Medical Outreach</span>
            </Link>
          </motion.div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Help Us Reach More Communities
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Your support enables us to provide free healthcare to those who need it most. Together, we can save lives and build healthier communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://donorbox.org/joyful-health-foundation"
                target="_blank"
                className="inline-flex items-center justify-center space-x-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                <Heart className="w-5 h-5" />
                <span>Donate Now</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all"
              >
                <Users className="w-5 h-5" />
                <span>Volunteer</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MedicalOutreachPage;