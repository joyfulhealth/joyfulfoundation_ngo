'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Heart, Users, Code, Award, CheckCircle, ArrowRight, TrendingUp, Briefcase } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const ITScholarshipPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const stats = [
    { icon: Users, number: "500+", label: "Trained Professionals" },
    { icon: Code, number: "15+", label: "Tech Skills Taught" },
    { icon: Award, number: "200+", label: "Certifications Awarded" },
    { icon: Briefcase, number: "85%", label: "Employment Rate" }
  ];

  const services = [
    {
      title: "Full Scholarships",
      description: "Complete coverage of training costs, certification fees, and learning materials for qualified candidates.",
      icon: Award
    },
    {
      title: "Skills Training",
      description: "Hands-on training in web development, mobile app development, data science, and cybersecurity.",
      icon: Code
    },
    {
      title: "Mentorship",
      description: "One-on-one guidance from industry professionals and experienced developers throughout the program.",
      icon: Users
    },
    {
      title: "Career Support",
      description: "Job placement assistance, resume building, interview preparation, and networking opportunities.",
      icon: Briefcase
    }
  ];

  const programs = [
    {
      title: "Web Development Track",
      description: "Learn HTML, CSS, JavaScript, React, Node.js, and full-stack development. Build real-world projects and deploy live applications.",
      duration: "6 months",
      level: "Beginner to Intermediate",
      certifications: ["Frontend Developer", "Backend Developer", "Full-Stack Developer"]
    },
    {
      title: "Mobile App Development",
      description: "Master mobile app creation with React Native and Flutter. Build cross-platform applications for iOS and Android.",
      duration: "5 months",
      level: "Intermediate",
      certifications: ["Mobile Developer", "React Native Specialist"]
    },
    {
      title: "Data Science & AI",
      description: "Dive into Python, machine learning, data analysis, and artificial intelligence. Work with real datasets and build predictive models.",
      duration: "8 months",
      level: "Intermediate to Advanced",
      certifications: ["Data Analyst", "Machine Learning Engineer"]
    },
    {
      title: "Cybersecurity Fundamentals",
      description: "Learn network security, ethical hacking, risk assessment, and security best practices to protect digital assets.",
      duration: "4 months",
      level: "Beginner to Intermediate",
      certifications: ["Security Analyst", "Ethical Hacker"]
    }
  ];

  const successStories = [
    {
      name: "Chinonso Okafor",
      role: "Full-Stack Developer",
      company: "Tech Startup",
      image: "/images/success/person1.jpg",
      story: "From having no coding experience to landing my first developer job - this scholarship changed my life!"
    },
    {
      name: "Aisha Bello",
      role: "Mobile App Developer",
      company: "Fintech Company",
      image: "/images/success/person2.jpg",
      story: "The mentorship and training helped me transition from teaching to tech. Now I build apps used by thousands."
    },
    {
      name: "Emmanuel Eze",
      role: "Data Scientist",
      company: "International NGO",
      image: "/images/success/person3.jpg",
      story: "This program gave me the skills and confidence to pursue a career in data science. Forever grateful!"
    }
  ];

  const requirements = [
    "Nigerian citizen between 18-35 years",
    "Basic computer literacy",
    "Commitment to full-time training",
    "Passion for technology and innovation",
    "Demonstrated financial need",
    "Strong academic potential"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/projects/it/hero.jpg" 
            alt="IT Scholarship" 
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
                <Laptop className="w-5 h-5 text-white" />
                <span className="text-white font-medium">Technology Initiative</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                IT Scholarship Program
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mb-8">
                Empowering youth with cutting-edge technology skills, certifications, and career opportunities in the digital economy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://donorbox.org/joyful-health-foundation"
                  target="_blank"
                  className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  <Heart className="w-5 h-5" />
                  <span>Support Tech Training</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-all border-2 border-white/30"
                >
                  <span>Apply for Scholarship</span>
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
                Our IT Scholarship Program bridges the digital divide by providing free, world-class technology training to talented individuals who lack the financial means to pursue tech education.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We partner with industry leaders, tech companies, and experienced professionals to deliver comprehensive training in the most in-demand tech skills. From web development to data science, we are preparing the next generation of Nigerian tech talent.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-gray-700">100% free training and certification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-gray-700">Industry-recognized certifications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-gray-700">Expert mentorship and career guidance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-gray-700">Job placement support</span>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/projects/it/about.jpg" 
                  alt="Students coding"
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
              Comprehensive support from training to employment
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

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Training Tracks</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your path to a successful tech career
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary to-primary-dark p-8 rounded-2xl shadow-lg text-white"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Laptop className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">{program.title}</h3>
                </div>
                <p className="text-white/90 mb-6 leading-relaxed">{program.description}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center bg-white/20 px-4 py-2 rounded-lg">
                    <span className="text-sm font-medium">Duration:</span>
                    <span className="text-sm font-bold">{program.duration}</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/20 px-4 py-2 rounded-lg">
                    <span className="text-sm font-medium">Level:</span>
                    <span className="text-sm font-bold">{program.level}</span>
                  </div>
                </div>
                <div className="mb-6">
                  <p className="text-sm font-semibold mb-2">Certifications:</p>
                  <div className="flex flex-wrap gap-2">
                    {program.certifications.map((cert, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-white/30 text-white text-xs font-medium rounded-full"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
                <Link 
                  href="/contact"
                  className="inline-flex items-center space-x-2 bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all group"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Eligibility Requirements</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Who can apply for the IT scholarship?
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-4">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-gray-700">{req}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                <span>Apply for Scholarship</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Success Stories</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our scholarship graduates thriving in tech careers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-2xl shadow-lg"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  {story.name.charAt(0)}
                </div>
                <h4 className="text-xl font-bold text-primary text-center mb-1">{story.name}</h4>
                <p className="text-sm text-accent font-semibold text-center mb-1">{story.role}</p>
                <p className="text-xs text-gray-500 text-center mb-4">{story.company}</p>
                <p className="text-gray-600 text-center italic leading-relaxed">{story.story}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Creating tech opportunities that transform lives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div {...fadeInUp} className="text-center">
              <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">85%</h3>
              <p className="text-white/90">Graduates employed within 6 months</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="text-center">
              <Code className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">200+</h3>
              <p className="text-white/90">Projects built by students</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="text-center">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">30+</h3>
              <p className="text-white/90">Industry mentors</p>
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="text-center">
            <Link
              href="https://donorbox.org/joyful-health-foundation"
              target="_blank"
              className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              <Heart className="w-5 h-5" />
              <span>Fund Tech Training</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Build the Future of Tech in Nigeria
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Your support can launch a young persons tech career. Help us train the next generation of Nigerian software developers, data scientists, and tech innovators.
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
                <Laptop className="w-5 h-5" />
                <span>Apply for Scholarship</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ITScholarshipPage;