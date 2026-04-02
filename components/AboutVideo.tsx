import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroVideoSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-dark_blue mb-10 text-center">
          See Our Story in Action
        </h2>

        <motion.a
          href="https://www.youtube.com/@ceyLearnacademy00"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block w-full aspect-video rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Poster image */}
          <Image
            src="/hero1.png"
            alt="CeyLearn Academy YouTube Channel"
            fill
            className="object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/55 group-hover:bg-black/45 transition-colors duration-300" />

          {/* Play button + text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
            <div className="flex items-center justify-center w-24 h-16 bg-red-600 group-hover:bg-red-500 rounded-2xl shadow-2xl transition-all duration-300 group-hover:scale-110">
              <svg viewBox="0 0 68 48" className="w-12 h-8">
                <path
                  d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
                  className="fill-red-600 group-hover:fill-red-500 transition-colors duration-300"
                />
                <path d="M45 24 27 14v20" className="fill-white" />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-white font-bold text-xl drop-shadow">Watch on YouTube</p>
              <p className="text-gray-300 text-sm mt-1 drop-shadow">Visit our channel for more lessons</p>
            </div>
          </div>

          {/* YouTube logo watermark */}
          {/* <div className="absolute bottom-4 right-5 opacity-80 group-hover:opacity-100 transition-opacity">
            <svg viewBox="0 0 90 20" className="h-6 w-auto fill-white drop-shadow">
              <path d="M27.97 3.95H25.4v12.1h-2.6V3.95h-2.57V1.6h7.74v2.35zm4.1 9.42l-1.8-8.1h-2.5l2.7 9.6c.08.3.12.56.12.8v.55c0 .4-.07.73-.2.98-.14.25-.45.38-.94.38H28.7v2.14h.77c1.1 0 1.93-.25 2.47-.74.54-.5.87-1.3.98-2.4l2.94-11.31h-2.42l-1.37 7.1zm9.12-7.5c-.64 0-1.18.2-1.6.62-.27.27-.5.68-.67 1.22V6.08H36.5v9.97h2.43v-5.5c0-.76.1-1.3.3-1.63.2-.32.55-.48 1.06-.48.46 0 .77.15.93.44.16.3.24.78.24 1.45v5.72h2.43v-6.2c0-1.08-.23-1.9-.7-2.45-.47-.55-1.13-.83-1.98-.83zm8.3 0c-1.2 0-2.13.42-2.77 1.25-.64.83-.96 2.04-.96 3.6v.93c0 1.5.32 2.64.95 3.42.63.78 1.54 1.18 2.72 1.18 1.22 0 2.15-.4 2.78-1.2.63-.8.95-1.97.95-3.52v-.82c0-1.57-.32-2.77-.95-3.6-.63-.83-1.53-1.24-2.72-1.24zm1.18 5.85c0 .9-.12 1.56-.37 1.97-.25.41-.63.62-1.13.62-.48 0-.84-.2-1.08-.6-.24-.4-.37-1.02-.37-1.87v-1.2c0-.88.13-1.52.38-1.92.25-.4.63-.6 1.12-.6.5 0 .87.2 1.11.6.24.4.36 1.04.36 1.93v1.07h-.02zm8.6-5.72v7.57c0 .37-.07.63-.2.77-.13.14-.35.2-.63.2-.24 0-.47-.07-.7-.22v1.97c.38.15.82.22 1.34.22.85 0 1.47-.23 1.88-.68.4-.46.6-1.17.6-2.14V6h-2.3zm-1.14-3.05c0 .37.13.68.4.92.27.24.6.36.97.36.38 0 .7-.12.96-.36.26-.24.4-.55.4-.92s-.14-.67-.4-.92c-.26-.24-.58-.36-.96-.36-.38 0-.7.12-.97.36-.27.25-.4.55-.4.92zm10.26 2.92c-.6 0-1.12.16-1.55.48-.3.22-.57.56-.8 1.02V6.08h-2.4v9.97h2.4v-5.47c0-.78.13-1.34.38-1.68.25-.34.67-.5 1.24-.5.5 0 .84.16 1 .47.16.3.24.8.24 1.48v5.7h2.43V9.9c0-1.06-.23-1.88-.7-2.44-.46-.57-1.12-.85-1.97-.85h.01-.27z" />
            </svg>
          </div> */}
        </motion.a>
      </div>
    </section>
  );
}
