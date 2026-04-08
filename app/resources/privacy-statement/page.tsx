'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Database, Lock, Clock, UserCheck, Cookie, Baby, RefreshCw } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
};

const sections = [
  {
    icon: Database,
    title: 'Collection of Information',
    content:
      'Personal information is collected through a variety of methods, including our website, registration forms, and in-person encounters. This data may contain names, contact information, medical history, and demographic information. We collect this information primarily to provide healthcare services, conduct research, ensure effective communication, and improve our programs.',
  },
  {
    icon: UserCheck,
    title: 'Using Information',
    content:
      'Personal information is only used for the objectives for which it was gathered, such as healthcare provision, program administration, research efforts, and stakeholder communication. Except as required by law, we do not sell, lease, or otherwise disclose personal information to other parties without explicit consent.',
  },
  {
    icon: Lock,
    title: 'Safety Measures',
    content:
      'We use industry-standard security measures to prevent unauthorized access, disclosure, alteration, and destruction of personal information. Encryption, access controls, and regular security reviews are examples of these methods. While we make every effort to keep your information safe, no method of data transfer over the internet or computer storage is completely secure.',
  },
  {
    icon: Clock,
    title: 'Keeping Data',
    content:
      'We keep personal information for as long as is required or permitted by law to meet the objectives mentioned in this Privacy Statement.',
  },
  {
    icon: Shield,
    title: 'Your Choices & Rights',
    content:
      'Individuals have the right to access, modify, or delete their personal information. If you wish to exercise these rights or have privacy concerns, please contact our Privacy Officer at support@joyfulhealthfoundation.org.',
    highlight: 'support@joyfulhealthfoundation.org',
  },
  {
    icon: Cookie,
    title: 'Cookies & Tracking Technologies',
    content:
      'Cookies and related technologies may be used by us to improve user experience on our website. Through their browser settings, users can manage their cookie preferences at any time.',
  },
  {
    icon: Baby,
    title: "Children's Privacy",
    content:
      "Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children without obtaining prior consent from a parent or guardian.",
  },
  {
    icon: RefreshCw,
    title: 'Changes to this Privacy Statement',
    content:
      'We reserve the right to update this Privacy Statement periodically to reflect changes in our practices and operations. Important changes will be communicated through our website or other appropriate channels.',
  },
];

const PrivacyStatementPage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-[#262e40] py-24 px-4">
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Notice & Policy
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg leading-relaxed">
            The Joyful Health Foundation is committed to protecting the privacy and confidentiality
            of your personal information. Please read this policy carefully to understand how we
            collect, use, and safeguard your data.
          </p>
        </motion.div>
      </section>

      {/* Intro Banner */}
      <div className="bg-accent/10 border-y border-accent/20 py-6 px-4">
        <p className="text-center text-primary font-medium max-w-3xl mx-auto text-sm sm:text-base">
          By using our website and services, you agree to the collection and use of information in
          accordance with this policy.
        </p>
      </div>

      {/* Sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-6">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            {...fadeInUp}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          >
            <div className="flex items-start space-x-5 p-6 sm:p-8">
              {/* Number + Icon */}
              <div className="flex-shrink-0 flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-[#262e40] rounded-xl flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-bold text-gray-400">{String(index + 1).padStart(2, '0')}</span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-lg sm:text-xl font-bold text-primary mb-3">
                  {section.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {section.highlight
                    ? section.content.split(section.highlight).map((part, i, arr) =>
                        i < arr.length - 1 ? (
                          <React.Fragment key={i}>
                            {part}
                            <a
                              href={`mailto:${section.highlight}`}
                              className="text-accent font-medium hover:underline"
                            >
                              {section.highlight}
                            </a>
                          </React.Fragment>
                        ) : (
                          part
                        )
                      )
                    : section.content}
                </p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Contact Card */}
        <motion.div
          {...fadeInUp}
          className="bg-[#262e40] rounded-2xl p-8 text-center mt-12"
        >
          <Shield className="w-10 h-10 text-white mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Questions About Your Privacy?</h3>
          <p className="text-gray-300 mb-6 text-sm leading-relaxed max-w-xl mx-auto">
            If you have any questions, concerns, or requests regarding this Privacy Statement or
            how we handle your personal information, our Privacy Officer is here to help.
          </p>
          <a
            href="mailto:support@joyfulhealthfoundation.org"
            className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3 rounded-lg transition-all"
          >
            Contact Privacy Officer
          </a>
        </motion.div>
      </div>
    </main>
  );
};

export default PrivacyStatementPage;