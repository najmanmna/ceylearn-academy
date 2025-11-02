"use client";

import React, { useState, useEffect } from 'react';
// Import the new GalleryImage component
import GalleryImage from '@/components/GalleryImage'; // Adjust path as needed

// --- (1) DATA STRUCTURE ---
type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  title: string;
  student: string;
};

// UPDATED: New data relevant to your courses
const allItems: GalleryItem[] = [
  {
    id: 1,
    // from Diploma in Graphic Design and Advertising
    src: "/Gallery/1.jpg",
    alt: "A professional social media advertisement",
    title: "Social Media Ad",
    student: "by Dilini R.",
  },
  {
    id: 2,
    // from Certificate in Mehandi Artistry
    src: "/Gallery/1.jpg",
    alt: "Intricate bridal mehandi design on hands",
    title: "Bridal Henna",
    student: "by Fathima R.",
  },
  {
    id: 3,
    // from Certificate in Mobile Photography
    src: "/Gallery/1.jpg",
    alt: "A product shot taken with a mobile phone",
    title: "Product Photography",
    student: "by Kamal P.",
  },
  {
    id: 4,
    // from Diploma in Cake making and Decoration
    src: "/Gallery/1.jpg",
    alt: "A multi-tiered decorated wedding cake",
    title: "Wedding Cake Design",
    student: "by Nadiya S.",
  },
  {
    id: 5,
    // from Diploma in Digital Marketing
    src: "/Gallery/1.jpg",
    alt: "A digital marketing analytics dashboard",
    title: "Marketing Analytics",
    student: "by Ahamed N.",
  },
  {
    id: 6,
    // from Certificate in Bridal Makeup
    src: "/Gallery/1.jpg",
    alt: "A bride with full bridal makeup",
    title: "Bridal Makeup Artistry",
    student: "by Sarah K.",
  },
  {
    id: 7,
    // from Certificate in Craft and Event Planning
    src: "/Gallery/1.jpg",
    alt: "A beautifully decorated event table setup",
    title: "Event Decoration",
    student: "by Aisha M.",
  },
  {
    id: 8,
    // from Diploma in Graphic Design and Advertising
    src: "/Gallery/1.jpg",
    alt: "A modern logo design concept",
    title: "Corporate Branding",
    student: "by Saman K.",
  },
];


// --- (2) GALLERY COMPONENT ---
const Gallery = () => {
  // State to hold the 4 images currently in the grid
  const [gridImages, setGridImages] = useState(() => allItems.slice(0, 4));
  // State to track the index of the *next* image to add
  const [nextImageIndex, setNextImageIndex] = useState(4);

  useEffect(() => {
    // Set up an interval for the slideshow
    const interval = setInterval(() => {
      setGridImages(currentImages => {
        // Create a new array, removing the oldest image (at index 0)
        const newImages = currentImages.slice(1);
        
        // Add the next image from the list
        newImages.push(allItems[nextImageIndex % allItems.length]);
        
        return newImages;
      });

      // Update the index for the *next* image, looping back to 0 if needed
      setNextImageIndex(prevIndex => (prevIndex + 1) % allItems.length);
      
    }, 3000); // Change image every 3 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [nextImageIndex]); // Re-run effect if nextImageIndex changes

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
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

        {/* Centered 2x2 Grid Wrapper.
          'max-w-xl' centers it and controls the max size.
          'aspect-square' keeps the whole grid square.
        */}
        <div className="max-w-xl mx-auto grid grid-cols-2 gap-4 md:gap-6 aspect-square">
          
          {/* Map over the 4 images in state and render them */}
          {gridImages.map((item, index) => (
            <GalleryImage key={index} item={item} />
            // Note: We use `index` as the key for the *slot*
            // The `GalleryImage` component uses `item.id` for the *animation*
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;