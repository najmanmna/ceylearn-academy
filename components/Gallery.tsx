"use client";

import React, { useState, useEffect } from 'react';
import GalleryImage from '@/components/GalleryImage';

type GalleryItem = {
  id: number;
  src: string;
  alt: string;
};

const allItems: GalleryItem[] = [

  { id: 2,  src: "/Gallery/2.jpeg",  alt: "Gallery image 2" },
  { id: 3,  src: "/Gallery/3.jpeg",  alt: "Gallery image 3" },
  { id: 4,  src: "/Gallery/4.jpeg",  alt: "Gallery image 4" },
  { id: 5,  src: "/Gallery/5.jpeg",  alt: "Gallery image 5" },
  // { id: 6,  src: "/Gallery/6.jpeg",  alt: "Gallery image 6" },
  { id: 7,  src: "/Gallery/7.jpeg",  alt: "Gallery image 7" },
  { id: 8,  src: "/Gallery/8.jpeg",  alt: "Gallery image 8" },
  { id: 9,  src: "/Gallery/9.jpeg",  alt: "Gallery image 9" },
  { id: 10, src: "/Gallery/10.jpeg", alt: "Gallery image 10" },
];

const Gallery = () => {
  const [gridImages, setGridImages] = useState(() => allItems.slice(0, 4));
  const [nextImageIndex, setNextImageIndex] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setGridImages(currentImages => {
        const newImages = currentImages.slice(1);
        newImages.push(allItems[nextImageIndex % allItems.length]);
        return newImages;
      });
      setNextImageIndex(prevIndex => (prevIndex + 1) % allItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [nextImageIndex]);

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">

        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark_blue mb-4">
            Student <span className="text-brand_orange">Showcase</span>
          </h2>
          <p className="text-lg text-text_gray">
            Get inspired by the amazing work created by our talented students.
            From graphic designs to stunning photographs, explore what our
            community has achieved.
          </p>
        </div>

        <div className="max-w-xl mx-auto grid grid-cols-2 gap-4 md:gap-6 aspect-square">
          {gridImages.map((item, index) => (
            <GalleryImage key={index} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
