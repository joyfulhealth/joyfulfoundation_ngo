'use client';



import React, { useState, useEffect } from 'react';

import { Menu, X, ChevronDown, Heart } from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

import Image from 'next/image';



const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const pathname = usePathname();



  useEffect(() => {

    const handleScroll = () => {

      setIsScrolled(window.scrollY > 20);

    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);



  const projects = [

    { name: 'Medical Outreach', href: '/projects/medical-outreach' },

    { name: 'Academic Outreach', href: '/projects/academic-outreach' },

    { name: 'IT Scholarship', href: '/projects/it-scholarship' },

    { name: 'Project Reports', href: '/projects/project-reports' },

  ];



  const resources = [

    { name: 'Media Gallery', href: '/resources/media-gallery' },

    { name: 'Our Team', href: '/resources/our-team' },

    { name: 'Partnership & Volunteer', href: '/resources/partnership-and-volunteer' },

    { name: 'Privacy Statement', href: '/resources/privacy-statement' },

  ];



  const isActive = (path: string) => pathname === path;



  return (

    <nav

      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${

        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'

      }`}

    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <Link href="/" className="flex items-center group">

            <Image

              src="/logo.png"

              alt="Joyful Health Foundation"

              width={150}

              height={64}

              className="transform group-hover:scale-105 transition-transform"

            />

          </Link>



          {/* Desktop Navigation */}

          <div className="hidden lg:flex items-center space-x-1">

            <Link

              href="/"

              className={`px-4 py-2 rounded-lg font-medium transition-all ${

                isActive('/')

                  ? 'text-[#4A4570] bg-[#B8D8BA]/30'

                  : 'text-gray-700 hover:text-[#4A4570] hover:bg-gray-50'

              }`}

            >

              Home

            </Link>



            {/* Projects Dropdown */}

            <div

              className="relative"

              onMouseEnter={() => setIsProjectsOpen(true)}

              onMouseLeave={() => setIsProjectsOpen(false)}

            >

              <button

                className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-1 ${

                  pathname.startsWith('/projects')

                    ? 'text-[#4A4570] bg-[#B8D8BA]/30'

                    : 'text-gray-700 hover:text-[#4A4570] hover:bg-gray-50'

                }`}

              >

                <span>Projects</span>

                <ChevronDown

                  className={`w-4 h-4 transition-transform ${isProjectsOpen ? 'rotate-180' : ''}`}

                />

              </button>



              <AnimatePresence>

                {isProjectsOpen && (

                  <motion.div

                    initial={{ opacity: 0, y: -10 }}

                    animate={{ opacity: 1, y: 0 }}

                    exit={{ opacity: 0, y: -10 }}

                    transition={{ duration: 0.2 }}

                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"

                  >

                    {projects.map((project, index) => (

                      <Link

                        key={project.href}

                        href={project.href}

                        className={`block px-4 py-3 transition-all ${

                          isActive(project.href)

                            ? 'bg-[#B8D8BA]/30 text-[#4A4570] font-medium'

                            : 'text-gray-700 hover:bg-[#B8D8BA]/20 hover:text-[#4A4570]'

                        } ${index !== projects.length - 1 ? 'border-b border-gray-100' : ''}`}

                      >

                        {project.name}

                      </Link>

                    ))}

                  </motion.div>

                )}

              </AnimatePresence>

            </div>



            {/* Resources Dropdown */}

            <div

              className="relative"

              onMouseEnter={() => setIsResourcesOpen(true)}

              onMouseLeave={() => setIsResourcesOpen(false)}

            >

              <button

                className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-1 ${

                  pathname.startsWith('/resources')

                    ? 'text-[#4A4570] bg-[#B8D8BA]/30'

                    : 'text-gray-700 hover:text-[#4A4570] hover:bg-gray-50'

                }`}

              >

                <span>Resources</span>

                <ChevronDown

                  className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`}

                />

              </button>



              <AnimatePresence>

                {isResourcesOpen && (

                  <motion.div

                    initial={{ opacity: 0, y: -10 }}

                    animate={{ opacity: 1, y: 0 }}

                    exit={{ opacity: 0, y: -10 }}

                    transition={{ duration: 0.2 }}

                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"

                  >

                    {resources.map((resource, index) => (

                      <Link

                        key={resource.href}

                        href={resource.href}

                        className={`block px-4 py-3 transition-all ${

                          isActive(resource.href)

                            ? 'bg-[#B8D8BA]/30 text-[#4A4570] font-medium'

                            : 'text-gray-700 hover:bg-[#B8D8BA]/20 hover:text-[#4A4570]'

                        } ${index !== resources.length - 1 ? 'border-b border-gray-100' : ''}`}

                      >

                        {resource.name}

                      </Link>

                    ))}

                  </motion.div>

                )}

              </AnimatePresence>

            </div>



            <Link

              href="/contact"

              className={`px-4 py-2 rounded-lg font-medium transition-all ${

                isActive('/contact')

                  ? 'text-[#4A4570] bg-[#B8D8BA]/30'

                  : 'text-gray-700 hover:text-[#4A4570] hover:bg-gray-50'

              }`}

            >

              Contact

            </Link>



            <Link

              href="https://donorbox.org/joyful-health-foundation"

              target="_blank"

              className="ml-4 px-6 py-2.5 bg-[#262e40] hover:bg-[#35405a] text-white font-semibold rounded-lg transition-all flex items-center space-x-2 shadow-sm hover:shadow-md"

            >

              <Heart className="w-4 h-4" />

              <span>Donate</span>

            </Link>

          </div>



          {/* Mobile Menu Button */}

          <button

            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}

            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"

            aria-label="Toggle menu"

          >

            {isMobileMenuOpen ? (

              <X className="w-6 h-6 text-gray-700" />

            ) : (

              <Menu className="w-6 h-6 text-gray-700" />

            )}

          </button>

        </div>

      </div>



      {/* Mobile Menu */}

      <AnimatePresence>

        {isMobileMenuOpen && (

          <motion.div

            initial={{ opacity: 0, height: 0 }}

            animate={{ opacity: 1, height: 'auto' }}

            exit={{ opacity: 0, height: 0 }}

            transition={{ duration: 0.3 }}

            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"

          >

            <div className="px-4 py-4 space-y-2">

              <Link

                href="/"

                onClick={() => setIsMobileMenuOpen(false)}

                className={`block px-4 py-3 rounded-lg font-medium transition-all ${

                  isActive('/')

                    ? 'text-[#4A4570] bg-[#B8D8BA]/30'

                    : 'text-gray-700 hover:bg-gray-50'

                }`}

              >

                Home

              </Link>



              {/* Mobile Projects */}

              <div>

                <button

                  onClick={() => setIsProjectsOpen(!isProjectsOpen)}

                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-all ${

                    pathname.startsWith('/projects')

                      ? 'text-[#4A4570] bg-[#B8D8BA]/30'

                      : 'text-gray-700 hover:bg-gray-50'

                  }`}

                >

                  <span>Projects</span>

                  <ChevronDown

                    className={`w-4 h-4 transition-transform ${isProjectsOpen ? 'rotate-180' : ''}`}

                  />

                </button>



                <AnimatePresence>

                  {isProjectsOpen && (

                    <motion.div

                      initial={{ opacity: 0, height: 0 }}

                      animate={{ opacity: 1, height: 'auto' }}

                      exit={{ opacity: 0, height: 0 }}

                      className="ml-4 mt-2 space-y-1 overflow-hidden"

                    >

                      {projects.map((project) => (

                        <Link

                          key={project.href}

                          href={project.href}

                          onClick={() => setIsMobileMenuOpen(false)}

                          className={`block px-4 py-2.5 rounded-lg text-sm transition-all ${

                            isActive(project.href)

                              ? 'text-[#4A4570] bg-[#B8D8BA]/30 font-medium'

                              : 'text-gray-600 hover:bg-gray-50'

                          }`}

                        >

                          {project.name}

                        </Link>

                      ))}

                    </motion.div>

                  )}

                </AnimatePresence>

              </div>



              {/* Mobile Resources */}

              <div>

                <button

                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}

                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-all ${

                    pathname.startsWith('/resources')

                      ? 'text-[#4A4570] bg-[#B8D8BA]/30'

                      : 'text-gray-700 hover:bg-gray-50'

                  }`}

                >

                  <span>Resources</span>

                  <ChevronDown

                    className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`}

                  />

                </button>



                <AnimatePresence>

                  {isResourcesOpen && (

                    <motion.div

                      initial={{ opacity: 0, height: 0 }}

                      animate={{ opacity: 1, height: 'auto' }}

                      exit={{ opacity: 0, height: 0 }}

                      className="ml-4 mt-2 space-y-1 overflow-hidden"

                    >

                      {resources.map((resource) => (

                        <Link

                          key={resource.href}

                          href={resource.href}

                          onClick={() => setIsMobileMenuOpen(false)}

                          className={`block px-4 py-2.5 rounded-lg text-sm transition-all ${

                            isActive(resource.href)

                              ? 'text-[#4A4570] bg-[#B8D8BA]/30 font-medium'

                              : 'text-gray-600 hover:bg-gray-50'

                          }`}

                        >

                          {resource.name}

                        </Link>

                      ))}

                    </motion.div>

                  )}

                </AnimatePresence>

              </div>



              <Link

                href="/contact"

                onClick={() => setIsMobileMenuOpen(false)}

                className={`block px-4 py-3 rounded-lg font-medium transition-all ${

                  isActive('/contact')

                    ? 'text-[#4A4570] bg-[#B8D8BA]/30'

                    : 'text-gray-700 hover:bg-gray-50'

                }`}

              >

                Contact

              </Link>



              <Link

                href="https://donorbox.org/joyful-health-foundation"

                target="_blank"

                onClick={() => setIsMobileMenuOpen(false)}

                className="block w-full mt-4 px-6 py-3 bg-[#262e40] hover:bg-[#35405a] text-white font-semibold rounded-lg transition-all text-center"

              >

                <div className="flex items-center justify-center space-x-2">

                  <Heart className="w-4 h-4" />

                  <span>Donate Now</span>

                </div>

              </Link>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>

  );

};



export default Navbar;