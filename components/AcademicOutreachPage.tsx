'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Heart, Users, GraduationCap, Award, CheckCircle, ArrowRight, Book } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const AcademicOutreachPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const stats = [
    { icon: Users, number: "1,200+", label: "Students Supported" },
    { icon: Book, number: "50+", label: "Schools Reached" },
    { icon: Award, number: "300+", label: "Scholarships Awarded" },
    { icon: GraduationCap, number: "95%", label: "Success Rate" }
  ];

  const services = [
    {
      title: "Scholarship Programs",
      description: "Financial support for tuition, books, and school supplies for students from underprivileged backgrounds.",
      icon: Award
    },
    {
      title: "Learning Materials",
      description: "Distribution of textbooks, notebooks, pens, and other essential learning materials to students and schools.",
      icon: Book
    },
    {
      title: "Mentorship",
      description: "One-on-one mentoring and academic guidance from professionals and university students.",
      icon: Users
    },
    {
      title: "Study Support",
      description: "After-school tutoring, exam preparation classes, and study groups for improved academic performance.",
      icon: BookOpen
    }
  ];

  const programs = [
    {
      title: "Primary School Support",
      description: "Providing learning materials, school uniforms, and sponsorship for children in primary education.",
      beneficiaries: "500+ students",
      impact: "Improved school attendance by 80%"
    },
    {
      title: "Secondary School Scholarships",
      description: "Full and partial scholarships covering tuition, textbooks, and exam fees for secondary school students.",
      beneficiaries: "400+ students",
      impact: "85% pass rate in final exams"
    },
    {
      title: "University Sponsorship",
      description: "Supporting exceptional students from low-income families through their university education.",
      beneficiaries: "300+ students",
      impact: "90% graduation rate"
    }
  ];

  const gallery = [
    { image: "/images/projects/academic/gallery1.jpg", caption: "Book distribution event" },
    { image: "/images/projects/academic/gallery2.jpg", caption: "Mentorship session" },
    { image: "/images/projects/academic/gallery3.jpg", caption: "Scholarship recipients" },
    { image: "/images/projects/academic/gallery4.jpg", caption: "Study support class" },
    { image: "/images/projects/academic/gallery5.jpg", caption: "School supplies handover" },
    { image: "/images/projects/academic/gallery6.jpg", caption: "Graduation ceremony" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-purple-600 to-purple-800 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/projects/academic/hero.jpg" 
            alt="Academic Outreach" 
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
                <BookOpen className="w-5 h-5 text-white" />
                <span className="text-white font-medium">Education Initiative</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Academic Outreach Program
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mb-8">
                Empowering students with education, mentorship, and resources to unlock their full potential and build brighter futures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://donorbox.org/joyful-health-foundation"
                  target="_blank"
                  className="inline-flex items-center justify-center space-x-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  <Heart className="w-5 h-5" />
                  <span>Sponsor a Student</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-all border-2 border-white/30"
                >
                  <span>Become a Mentor</span>
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
                Our Academic Outreach Program is committed to breaking the cycle of poverty through education. We believe every child deserves access to quality education regardless of their socioeconomic background.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Through scholarships, learning materials, mentorship, and academic support, we are creating pathways for students to excel academically and achieve their dreams. Our holistic approach ensures students not only stay in school but thrive in their studies.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-gray-700">Full and partial scholarships available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-gray-700">Free learning materials and textbooks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-gray-700">Professional mentorship programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-gray-700">Continuous academic monitoring</span>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/projects/academic/about.jpg" 
                  alt="Students learning"
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
            <h2 className="text-4xl font-bold text-primary mb-4">What We Offer</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support for students at every level of education
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
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-dark rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Educational Programs</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored support from primary school through university
            </p>
          </motion.div>

          <div className="space-y-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-primary mb-3">{program.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                    <div className="flex flex-wrap gap-4">
                      <div className="bg-white/60 px-4 py-2 rounded-lg">
                        <p className="text-sm font-semibold text-primary">{program.beneficiaries}</p>
                      </div>
                      <div className="bg-accent-light/60 px-4 py-2 rounded-lg">
                        <p className="text-sm font-semibold text-primary">{program.impact}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <Link 
                      href="/contact"
                      className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg font-semibold transition-all group"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Program Gallery</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Moments from our educational programs and events
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
              Transforming lives through the power of education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div {...fadeInUp} className="text-center">
              <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">95%</h3>
              <p className="text-white/90">Student retention rate</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="text-center">
              <GraduationCap className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">500+</h3>
              <p className="text-white/90">Students graduated</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="text-center">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">50+</h3>
              <p className="text-white/90">Active mentors</p>
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="text-center">
            <Link
              href="/donate"
              className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              <Heart className="w-5 h-5" />
              <span>Sponsor a Student Today</span>
            </Link>
          </motion.div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Invest in a Students Future
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Your contribution can change the trajectory of a students life. Help us provide educational opportunities to deserving students who lack the financial means.
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
                <span>Become a Mentor</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AcademicOutreachPage;