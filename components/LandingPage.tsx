'use client';

import React from 'react';
import Hero from '@/components/Hero';
import AboutSection from '@/components/sections/AboutSection';
import MissionVisionSection from '@/components/sections/MissionVisionSection';
import CoreValuesSection from '@/components/sections/CoreValuesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ImpactStatsSection from '@/components/sections/ImpactStatsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import Partnership from '@/components/Partnership';

const LandingPage = () => {
  return (
    <div className="bg-white">
      <Hero />
      <AboutSection />
      <MissionVisionSection />
      <CoreValuesSection />
      <ProjectsSection />
      <ImpactStatsSection />
      <TestimonialsSection />
      <Partnership />
      <CTASection />
    </div>
  );
};

export default LandingPage;