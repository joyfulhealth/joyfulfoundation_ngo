'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
};

type MediaItem = { src: string; type: 'image' | 'video' };

const galleryData: Record<number, MediaItem[]> = {

  2026: [
    { src: '/images/gallery/2026june/2.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/3.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/1.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/4.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/5.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/7.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/8.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/9.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/10.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/11.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/12.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/13.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/14.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/15.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/16.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/17.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/18.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/19.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/20.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/21.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/22.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/23.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/24.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/25.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/26.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/27.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/28.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/29.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/30.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/31.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/32.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/33.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/34.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/35.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/36.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/37.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/38.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/39.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/40.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/41.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/42.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/43.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/44.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/45.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/46.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/47.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/48.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/49.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/50.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/51.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/52.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/53.jpeg', type: 'image' },
    { src: '/images/gallery/2026june/54.jpeg', type: 'image' },
    // example video entry:
    // { src: '/images/gallery/2025/video1.mp4', type: 'video' },
  ],

  2025: [
    { src: '/images/gallery/2025/1.jpg', type: 'image' },
    { src: '/images/gallery/2025/2.jpg', type: 'image' },
    { src: '/images/gallery/2025/3.jpg', type: 'image' },
    { src: '/images/gallery/2025/4.jpg', type: 'image' },
    { src: '/images/gallery/2025/5.jpg', type: 'image' },
    { src: '/images/gallery/2025/7.jpg', type: 'image' },
    { src: '/images/gallery/2025/8.jpg', type: 'image' },
    { src: '/images/gallery/2025/9.jpg', type: 'image' },
    { src: '/images/gallery/2025/10.jpg', type: 'image' },
    { src: '/images/gallery/2025/11.jpg', type: 'image' },
    { src: '/images/gallery/2025/12.jpg', type: 'image' },
    { src: '/images/gallery/2025/13.jpg', type: 'image' },
    { src: '/images/gallery/2025/14.jpg', type: 'image' },
    { src: '/images/gallery/2025/15.jpg', type: 'image' },
    { src: '/images/gallery/2025/16.jpg', type: 'image' },
    { src: '/images/gallery/2025/17.jpg', type: 'image' },
    { src: '/images/gallery/2025/18.jpg', type: 'image' },
    { src: '/images/gallery/2025/19.jpg', type: 'image' },
    { src: '/images/gallery/2025/20.jpg', type: 'image' },
    { src: '/images/gallery/2025/21.jpg', type: 'image' },
    { src: '/images/gallery/2025/22.jpg', type: 'image' },
    { src: '/images/gallery/2025/23.jpg', type: 'image' },
    { src: '/images/gallery/2025/24.jpg', type: 'image' },
    { src: '/images/gallery/2025/25.jpg', type: 'image' },
    { src: '/images/gallery/2025/26.jpg', type: 'image' },
    { src: '/images/gallery/2025/27.jpg', type: 'image' },
    // example video entry:
    // { src: '/images/gallery/2025/video1.mp4', type: 'video' },
  ],
  2024: [
    // { src: '/images/gallery/2024/1.jpg', type: 'image' },
    { src: '/images/gallery/2024/2.jpg', type: 'image' },
    { src: '/images/gallery/2024/3.jpg', type: 'image' },
    { src: '/images/gallery/2024/4.jpg', type: 'image' },
    { src: '/images/gallery/2024/5.jpg', type: 'image' },
    { src: '/images/gallery/2024/6.jpeg', type: 'image' },
    { src: '/images/gallery/2024/7.jpeg', type: 'image' },
    { src: '/images/gallery/2024/8.jpeg', type: 'image' },
    { src: '/images/gallery/2024/9.jpeg', type: 'image' },
    { src: '/images/gallery/2024/10.jpeg', type: 'image' },
    { src: '/images/gallery/2024/11.jpeg', type: 'image' },
    { src: '/images/gallery/2024/12.jpeg', type: 'image' },
    { src: '/images/gallery/2024/13.jpeg', type: 'image' },
    { src: '/images/gallery/2024/14.jpeg', type: 'image' },
    { src: '/images/gallery/2024/15.jpeg', type: 'image' },
    { src: '/images/gallery/2024/16.jpeg', type: 'image' },
    { src: '/images/gallery/2024/17.jpeg', type: 'image' },
    { src: '/images/gallery/2024/18.jpeg', type: 'image' },
    { src: '/images/gallery/2024/19.jpeg', type: 'image' },
    { src: '/images/gallery/2024/20.jpeg', type: 'image' },
    { src: '/images/gallery/2024/21.jpeg', type: 'image' },
    { src: '/images/gallery/2024/22.jpeg', type: 'image' },
    { src: '/images/gallery/2024/23.jpeg', type: 'image' },
    { src: '/images/gallery/2024/24.jpeg', type: 'image' },
    { src: '/images/gallery/2024/25.jpeg', type: 'image' },
    { src: '/images/gallery/2024/26.jpeg', type: 'image' },
    { src: '/images/gallery/2024/27.jpeg', type: 'image' },
    { src: '/images/gallery/2024/28.jpeg', type: 'image' },
    { src: '/images/gallery/2024/29.jpeg', type: 'image' },
    { src: '/images/gallery/2024/30.jpeg', type: 'image' },
    { src: '/images/gallery/2024/31.jpeg', type: 'image' },
    { src: '/images/gallery/2024/32.jpeg', type: 'image' },
    { src: '/images/gallery/2024/33.jpeg', type: 'image' },
    { src: '/images/gallery/2024/34.jpeg', type: 'image' },
    { src: '/images/gallery/2024/35.jpeg', type: 'image' },
    { src: '/images/gallery/2024/36.jpeg', type: 'image' },
    { src: '/images/gallery/2024/37.jpeg', type: 'image' },
    { src: '/images/gallery/2024/vid1.mp4', type: 'video' },
    { src: '/images/gallery/2024/vid2.mp4', type: 'video' },
    { src: '/images/gallery/2024/vid3.mp4', type: 'video' },
    { src: '/images/gallery/2024/vid4.mp4', type: 'video' },
    { src: '/images/gallery/2024/vid5.mp4', type: 'video' },
  ],
  2023: [
    { src: '/images/gallery/2023/1.jpeg', type: 'image' },
    { src: '/images/gallery/2023/2.jpeg', type: 'image' },
    { src: '/images/gallery/2023/3.jpeg', type: 'image' },
    { src: '/images/gallery/2023/4.jpeg', type: 'image' },
    { src: '/images/gallery/2023/5.jpeg', type: 'image' },
    { src: '/images/gallery/2023/6.jpeg', type: 'image' },
    { src: '/images/gallery/2023/7.jpeg', type: 'image' },
    { src: '/images/gallery/2023/8.jpeg', type: 'image' },
    { src: '/images/gallery/2023/9.jpeg', type: 'image' },
    { src: '/images/gallery/2023/10.jpeg', type: 'image' },
    { src: '/images/gallery/2023/11.jpeg', type: 'image' },
    { src: '/images/gallery/2023/12.jpeg', type: 'image' },
    { src: '/images/gallery/2023/13.jpeg', type: 'image' },
    { src: '/images/gallery/2023/14.jpeg', type: 'image' },
    { src: '/images/gallery/2023/15.jpeg', type: 'image' },
    { src: '/images/gallery/2023/16.jpeg', type: 'image' },
    { src: '/images/gallery/2023/17.jpeg', type: 'image' },
    { src: '/images/gallery/2023/18.jpeg', type: 'image' },
    { src: '/images/gallery/2023/19.jpeg', type: 'image' },
    { src: '/images/gallery/2023/20.jpeg', type: 'image' },
    { src: '/images/gallery/2023/21.jpeg', type: 'image' },
    { src: '/images/gallery/2023/22.jpeg', type: 'image' },
  ],
  2022: [
    { src: '/images/gallery/2022/1.jpeg', type: 'image' },
    { src: '/images/gallery/2022/2.jpeg', type: 'image' },
    { src: '/images/gallery/2022/3.jpeg', type: 'image' },
    { src: '/images/gallery/2022/4.jpeg', type: 'image' },
    { src: '/images/gallery/2022/5.jpeg', type: 'image' },
    { src: '/images/gallery/2022/vid1.mp4', type: 'video' },
    { src: '/images/gallery/2022/vid2.mp4', type: 'video' },
  ],
};

const Carousel = ({ images }: { images: MediaItem[] }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));

  const currentItem = images[current];

  return (
    <div className="relative w-full">
      {/* Main Slide */}
      <div className="relative h-96 sm:h-[480px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-black">

        {currentItem.type === 'video' ? (
          <video
            key={currentItem.src}
            className="w-full h-full object-cover"
            controls
            playsInline
            preload="auto"
          >
            <source src={currentItem.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={currentItem.src}
            alt={`Photo ${current + 1}`}
            fill
            className="object-cover transition-all duration-500"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        )}

        {/* Video badge */}
        {currentItem.type === 'video' && (
          <div className="absolute top-4 left-4 bg-black/60 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center space-x-1.5">
            <Play className="w-3 h-3 fill-white" />
            <span>Video</span>
          </div>
        )}

        {/* Slide Counter */}
        <div className="absolute top-4 right-4 bg-black/50 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
          {current + 1} / {images.length}
        </div>

        {/* Arrows — hide on video so controls aren't blocked */}
        {currentItem.type !== 'video' && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2.5 shadow transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2.5 shadow transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Arrows below for video slides */}
      {currentItem.type === 'video' && (
        <div className="flex justify-between mt-3 px-1">
          <button
            onClick={prev}
            className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 rounded-full p-2.5 shadow transition-all"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 rounded-full p-2.5 shadow transition-all"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Dot Indicators */}
      <div className="flex justify-center flex-wrap gap-2 mt-4">
        {images.map((item, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`rounded-full transition-all ${
              current === index ? 'w-6 h-2.5 bg-accent' : 'w-2.5 h-2.5 bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const MediaGalleryPage = () => {
  const years = [2025, 2024, 2023, 2022];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-[#262e40] py-24 px-4">
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Media Gallery</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 leading-relaxed">
            A glimpse into the lives we&apos;ve touched, the communities we&apos;ve served, and the milestones we&apos;ve celebrated together.
          </p>
        </motion.div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        {years.map((year) => (
          <motion.div key={year} {...fadeInUp}>
            <div className="flex items-center space-x-4 mb-8">
              <h2 className="text-3xl font-bold text-primary">{year}</h2>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>
            <Carousel images={galleryData[year]} />
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default MediaGalleryPage;