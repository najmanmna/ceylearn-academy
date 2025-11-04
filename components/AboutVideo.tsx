import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle } from 'lucide-react'; // Or your preferred icon library

export default function HeroVideoSection() {
  // --- STATE ---
  const [isPlaying, setIsPlaying] = useState(false);

  // --- CONFIGURATION ---
  // Replace with your video details
  const YOUTUBE_VIDEO_ID = 'LZRp5hXgoa0'; // Example: A heroic movie trailer
  const POSTER_IMAGE_URL = '/hero1.png'; // Poster image
  const SECTION_TITLE = 'See Our Story in Action';

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-dark_blue mb-10 text-center">
          {SECTION_TITLE}
        </h2>

        {/* --- Video Player Container --- */}
        <motion.div
          className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-dark_blue"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <AnimatePresence>
            {!isPlaying ? (
              // --- 1. POSTER VIEW ---
              <motion.div
                key="poster"
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* Background Poster Image */}
                <Image
                  src={POSTER_IMAGE_URL}
                  alt="Promo video poster"
                  layout="fill"
                  objectFit="cover"
                />

                {/* Dark Cinematic Overlay */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Play Button */}
                <div className="absolute inset-0 flex justify-center items-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="group"
                    aria-label="Play video"
                  >
                    <PlayCircle
                      size={100} // 25 (w-25 h-25)
                      className="stroke-1 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300 ease-in-out"
                    />
                  </button>
                </div>
              </motion.div>
            ) : (
              // --- 2. VIDEO PLAYER VIEW ---
              <motion.div
                key="player"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}