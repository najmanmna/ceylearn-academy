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
  {
    name: "Fathima Asrin",
    title: "Cake Making & Decorating Course",
    quote:
      "இந்த கோர்ஸ் எனக்கு மிகவும் பிரயோசனமாக இருந்தது. முதல் மாதத்திலிருந்தே எனக்கு நிறைய கேக் ஆர்டர்கள் வரத் தொடங்கின. ஆசிரியை மிகவும் தெளிவாகக் கற்றுக் கொடுத்தார். Thank you so much Ceylearn Academy!",
  },
  {
    name: "Sakthivel Saran",
    title: "Graphic Design Student",
    quote:
      "This class was incredibly useful and easy to understand. I improved my creativity and confidence, and I've already started working on freelance client projects to gain real experience.",
  },
  {
    name: "Dhanush",
    title: "Graphic Design Student",
    quote:
      "அனைவருக்கும் புரியும் வகையில் இந்த Graphic Design பாடத்தை ஆசிரியர்கள் தெளிவாகக் கற்றுக் கொடுத்தனர். இது எனது படைப்பாற்றலையும் திறனையும் மேம்படுத்தி, என் வாழ்க்கைத் தரத்தை உயர்த்த பெரிதும் உதவியது.",
  },
  {
    name: "Noorah",
    title: "Mehandi Artistry Student",
    quote:
      "Ceylearn Academy provided a wonderful platform to learn traditional henna art. The structured guidance, helpful materials, and encouragement enhanced my artistic confidence and technique tremendously.",
  },
  {
    name: "Anonymous Student",
    title: "Entrepreneurship / Business",
    quote:
      "நான் இன்று தனியாக ஒரு கடை நடத்துமளவிற்கு உங்களது வகுப்பு எனக்கு நிறையவே பயனளித்துள்ளது. அணைத்தும் மிகவும் சிறப்பானது!",
  },
  {
    name: "Salma Nadeem",
    title: "IT Fundamentals Workshop",
    quote:
      "A very useful and informative session. The instructors explained complex concepts in a simple, practical manner, giving me a clear understanding of real-world IT applications.",
  },
  {
    name: "Suriyavadhani",
    title: "Diploma in Mehandi Artistry",
    quote:
      "I completed the 2-month course and couldn't be happier. I learned many new designs and techniques step by step. The teaching was crystal clear, and I now feel entirely confident.",
  },
  {
    name: "Workshop Participant",
    title: "Free Educational Workshop",
    quote:
      "பொது நலம் கருதி முற்றிலும் இலவசமாக நடாத்தப்பட்ட இந்த workshop பலரது வாழ்வில் மிகப்பெரிய மாற்றத்தை ஏற்படுத்தியிருக்கும் என்பதில் எவ்வித சந்தேகமும் இல்லை. Jazakallahu Khaira!"
  }
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
                    className="shrink-0 grow-0 basis-[80%] sm:basis-[45%] md:basis-[30%] pl-4 md:pl-6"
                  >
                    <div
                      className={` transition-shadow duration-500 ease-out transform-gpu ${
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
