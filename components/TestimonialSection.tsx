"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay"; // ✅ import autoplay plugin
import { EmblaOptionsType } from "embla-carousel";
import TestimonialCard, { TestimonialCardProps } from "./TestimonialCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

// --- Data ---
const testimonials: TestimonialCardProps[] = [
  {
    name: "Dilini Ranasinghe",
    title: "Diploma in Graphic Design Student",
    quote:
      "The 10-day graphic design course was the perfect starting point for me. I learned to design posters, social media ads, and simple flyers using Canva and Photoshop. Now, I create designs for small shops in my area and earn while studying. It was short, but full of value!",
  },
  {
    name: "Ahamed Najman",
    title: "Diploma in Web Development Student",
    quote:
      "I was completely new to coding, but the instructors were patient and the curriculum was very practical. I built three real-world projects and now feel confident applying for junior developer roles. Highly recommended!",
  },
  {
    name: "Fathima Rizvi",
    title: "Certificate in Mehandi Artistry",
    quote:
      "I always loved Mehandi, but this course took my skills to a professional level. I learned about bridal designs, cone preparation, and even how to market my business. I started taking clients before I even finished!",
  },
  {
    name: "Kamal Perera",
    title: "Advanced English Language Course",
    quote:
      "My English speaking skills have improved dramatically. The interactive lessons and supportive teachers made learning enjoyable and effective. I feel much more confident in professional settings now.",
  },
  {
    name: "Saman Kumara",
    title: "Certificate in Mobile App Development",
    quote:
      "Learning to build mobile apps was a game-changer. The course covered both Android and iOS fundamentals, and I even published my first simple app. The hands-on approach was fantastic.",
  },
];

// --- Helper Buttons ---
const PrevButton = ({ onClick, enabled }: { onClick: () => void; enabled: boolean }) => (
  <button
    onClick={onClick}
    disabled={!enabled}
    className="absolute top-1/2 -translate-y-1/2 -left-6 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand_orange text-white flex items-center justify-center shadow-md disabled:opacity-40 transition-opacity"
  >
    <ArrowLeft size={20} />
  </button>
);

const NextButton = ({ onClick, enabled }: { onClick: () => void; enabled: boolean }) => (
  <button
    onClick={onClick}
    disabled={!enabled}
    className="absolute top-1/2 -translate-y-1/2 -right-6 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand_orange text-white flex items-center justify-center shadow-md disabled:opacity-40 transition-opacity"
  >
    <ArrowRight size={20} />
  </button>
);

const DotButton = ({
  selected,
  onClick,
}: {
  selected: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`h-3 w-3 rounded-full mx-1 transition-all duration-300 ${
      selected ? "bg-brand_orange scale-110" : "bg-gray-300"
    }`}
  />
);

// --- Main Component ---
const TestimonialSection = () => {
  const options: EmblaOptionsType = { loop: true, align: "center" };

  // ✅ Add autoplay plugin
  const autoplayOptions = Autoplay({ delay: 4000, stopOnInteraction: false });
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplayOptions]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark_blue">
            What Our <span className="text-brand_orange">Students Say</span>
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />

          {/* Embla Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex items-center -ml-4 md:-ml-6">
              {testimonials.map((testimonial, index) => {
                const isActive = index === selectedIndex;
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 flex-grow-0 basis-[80%] sm:basis-[45%] md:basis-[30%] pl-4 md:pl-6"
                  >
                    <div
                      className={`transition-transform transition-shadow duration-500 ease-out transform-gpu ${
                        isActive ? "scale-105 shadow-xl z-10" : "scale-90 opacity-90"
                      }`}
                    >
                      <TestimonialCard
                        name={testimonial.name}
                        title={testimonial.title}
                        quote={testimonial.quote}
                        isActive={isActive}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                selected={index === selectedIndex}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
