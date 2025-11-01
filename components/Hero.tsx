"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react"; // Make sure you have lucide-react installed

// Define the content for each slide
const slides = [
  {
    image: "/hero1.png", // The enhanced split image
    title: "MASTER YOUR CRAFT",
    subtitle: "EMPOWER YOUR FUTURE",
    description:
      "EXPLORE EXPERT-LED COURSES IN TECHNOLOGY, DESIGN & CREATIVE ARTS",
    buttons: [
      { text: "EXPLORE COURSES", href: "/courses", primary: true },
      { text: "INQUIRE NOW", href: "/contact", primary: false },
    ],
  },
  {
    image: "/hero2.png", // Example: A dedicated image for Design & IT courses
    title: "INNOVATE WITH DESIGN",
    subtitle: "EXCEL IN IT SOLUTIONS",
    description:
      "HANDS-ON DIPLOMAS IN GRAPHIC DESIGN, DIGITAL MARKETING & INFORMATION TECHNOLOGY.",
    buttons: [
      { text: "VIEW ALL COURSES", href: "/courses", primary: true },
      { text: "WHY CEYLEARN?", href: "/about", primary: false },
    ],
  },
  {
    image: "/hero3.png", // Example: A dedicated image for Creative Arts courses
    title: "UNLEASH YOUR CREATIVITY",
    subtitle: "MASTER ARTISAN SKILLS",
    description:
      "FROM BRIDAL MAKEUP & MEHANDI TO CAKE DECORATION & EVENT PLANNING.",
    buttons: [
      {
        text: "EXPLORE ART COURSES",
        href: "/courses#creative-arts",
        primary: true,
      }, // Link to a specific section
      { text: "CONTACT US", href: "/contact", primary: false },
    ],
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Memoize slide navigation functions
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play effect
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(slideInterval); // Clean up on component unmount
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] text-white overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            layout="fill"
            objectFit="cover"
            priority={index === 0} // Only prioritize the first image
          />
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-dark_blue opacity-50"></div>
        </div>
      ))}

      {/* Central Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10 pointer-events-none" // <-- FIX #2: Make invisible slides unclickable
            }`}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              {slide.title}
            </h1>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-brand_orange tracking-tight mt-2">
              {slide.subtitle}
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl max-w-2xl text-white_gray">
              {slide.description}
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              {" "}
              {/* <-- FIX #1: Added justify-center */}
              {slide.buttons.map((button) => (
                <Link
                  key={button.text}
                  href={button.href}
                  className={`${
                    button.primary
                      ? "bg-brand_orange text-dark_blue" // Primary button style
                      : "bg-white text-dark_blue" // Secondary button style
                  } px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-opacity-90 transition-all hover:scale-105`}
                >
                  {button.text}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-brand_orange hover:opacity-80 transition-opacity z-10"
      >
        <ArrowLeftCircle size={32} strokeWidth={1.5} />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-brand_orange hover:opacity-80 transition-opacity z-10"
      >
        <ArrowRightCircle size={32} strokeWidth={1.5} />
      </button>

      {/* Slide Indicator Dots */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-brand_orange scale-125"
                : "bg-white" // Use white for inactive dots
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;

