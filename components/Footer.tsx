'use client';

// import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  // const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  // const handleSubscribe = () => {
  //   if (email) {
  //     // Handle newsletter subscription here
  //     console.log('Subscribing:', email);
  //     alert('Thank you for subscribing!');
  //     setEmail('');
  //   }
  // };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/#about' },
    { name: 'Our Mission', href: '/#mission' },
    { name: 'Contact', href: '/contact' },
  ];

  const programs = [
    { name: 'Medical Outreach', href: '/projects/medical-outreach' },
    { name: 'Academic Outreach', href: '/projects/academic-outreach' },
    { name: 'IT Scholarship', href: '/projects/it-scholarship' },
  ];

//   const legal = [
//     { name: 'Privacy Policy', href: '/privacy' },
//     { name: 'Terms of Service', href: '/terms' },
//     { name: 'Annual Reports', href: '/reports' },
//   ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* About Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/logo.png" 
                alt="Joyful Health Foundation" 
                height={48}
                width={150}
                className="brightness-0 invert"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Programs</h3>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.href}>
                  <Link 
                    href={program.href}
                    className="text-white/80 hover:text-accent transition-colors inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {program.name}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="https://donorbox.org/joyful-health-foundation"
                  target="_blank"
                  className="inline-flex items-center space-x-2 text-accent hover:text-accent-light transition-colors font-semibold group"
                >
                  <Heart className="w-4 h-4" />
                  <span className="group-hover:translate-x-1 transition-transform">
                    Support Our Work
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a 
                  href="mailto:info@joyfulhealthfoundation.org"
                  className="text-white/80 hover:text-accent transition-colors flex items-start space-x-3 group"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>info@joyfulhealthfoundation.org</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+2348012345678"
                  className="text-white/80 hover:text-accent transition-colors flex items-start space-x-3 group"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>+234816 494 7828</span>
                </a>

              {/* Second phone number */ }
              <a 
                  href="tel:+2348012345678"
                  className="text-white/80 hover:text-accent transition-colors flex items-start space-x-3 group"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>+234703 445 9611</span>
                </a>

              </li>
              <li>
                <div className="text-white/80 flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>2 Umuikanwa Umuehie Street, Ikperejere Ihitte Uboma Town,Imo State, Nigeria</span>
                </div>
              </li>
            </ul>

            {/* Newsletter Signup */}
            {/* <div>
              <h4 className="font-semibold mb-3">Subscribe to Newsletter</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button 
                  onClick={handleSubscribe}
                  className="px-4 py-2 bg-accent hover:bg-accent-dark rounded-lg transition-colors flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="flex space-x-4 justify-center items-center mb-4">
        <a 
          href="https://facebook.com/joyfulhealth" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-all hover:scale-110"
          aria-label="Facebook"
        >
          <Facebook className="w-5 h-5" />
        </a>
        <a 
          href="https://twitter.com/joyfulhealth" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-all hover:scale-110"
          aria-label="Twitter"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a 
          href="https://instagram.com/joyfulhealth" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-all hover:scale-110"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a 
          href="https://linkedin.com/company/joyfulhealth" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-all hover:scale-110"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} Joyful Health Foundation. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;