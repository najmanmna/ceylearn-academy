"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';

// Define the type
type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  title: string;
  student: string;
};

// Define the props for this component
interface GalleryImageProps {
  item: GalleryItem;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ item }) => {
  return (
    <div className="w-full h-full aspect-square relative">
      <AnimatePresence>
        <motion.div
          key={item.id} // This key is crucial! Animation triggers when it changes.
          className="absolute inset-0 w-full h-full rounded-lg shadow-lg overflow-hidden group"
          
          // --- The "Unique Transition" ---
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {/* Image */}
          <img 
            src={item.src} 
            alt={item.alt} 
            className="w-full h-full object-cover" 
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-dark_blue bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center p-4">
            <Search className="text-white h-8 w-8 mb-2" />
            <h3 className="text-white text-lg font-bold text-center">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.student}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default GalleryImage;