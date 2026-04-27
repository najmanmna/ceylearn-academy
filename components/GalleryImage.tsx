"use client";

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type GalleryItem = {
  id: number;
  src: string;
  alt: string;
};

interface GalleryImageProps {
  item: GalleryItem;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ item }) => {
  return (
    <div className="w-full h-full aspect-square relative">
      <AnimatePresence>
        <motion.div
          key={item.id}
          className="absolute inset-0 w-full h-full rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default GalleryImage;
