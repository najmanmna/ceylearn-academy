"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  BookOpen,
  Target,
  Users,
  Gem,
  GraduationCap,
  Lightbulb,
  Award,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";
import TestimonialSection from "@/components/TestimonialSection";

// Placeholder data
const instructors = [
  {
    id: 1,
    name: "Aisha Khan",
    title: "Lead Graphic Designer",
    image: "/courses/image.png",
  },
  {
    id: 2,
    name: "Sameer Ali",
    title: "Digital Marketing Strategist",
    image: "/courses/image.png",
  },
  {
    id: 3,
    name: "Priya Sharma",
    title: "Bridal Makeup Artist",
    image: "/courses/image.png",
  },
  {
    id: 4,
    name: "Ramesh Fernando",
    title: "Software Development Instructor",
    image: "/courses/image.png",
  },
  // {
  //   id: 5,
  //   name: "Sajani Perera",
  //   title: "Fashion Design Expert",
  //   image: "/courses/image.png",
  // },
];

const stats = [
  { id: 1, number: "5000+", label: "Satisfied Students", icon: Users },
  { id: 2, number: "10+", label: "Years of Excellence", icon: Award },
  { id: 3, number: "15+", label: "Diverse Courses", icon: BookOpen },
  { id: 4, number: "20+", label: "Expert Instructors", icon: Briefcase },
];

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Header />

      <main className="grow">
        {/* HERO SECTION */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/hero1.png"
            alt="About Ceylearn Academy"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark_blue/90 via-dark_blue/80 to-dark_blue/60"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 tracking-tight">
              About <span className="text-brand_orange">Ceylearn Academy</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 font-medium">
              Empowering Education. Embracing Excellence.
            </p>
          </div>
        </section>

        {/* STORY SECTION */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-gray-700"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark_blue mb-4">
                Welcome to <span className="text-brand_orange">Ceylearn</span>
              </h2>
              <div className="h-1.5 w-20 bg-brand_orange rounded-full mb-6"></div>

              <p className="text-lg leading-relaxed mb-4">
                Ceylearn Academy is where creativity meets technology. We offer
                diploma and certificate programs that build confidence,
                creativity, and professional readiness.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Our diverse programs—from{" "}
                <strong>Graphic Design and Digital Marketing</strong> to{" "}
                <strong>IT, Mehandi, Bridal Makeup, and Cake Decoration</strong>
                —empower students to turn passion into profession.
              </p>
              <p className="text-lg leading-relaxed">
                Every course is crafted to be hands-on, industry-relevant, and
                led by passionate instructors dedicated to your success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/aboutimage.png"
                alt="Ceylearn Students"
                width={600}
                height={400}
                className="rounded-full shadow-xl w-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* VISION & MISSION */}
        <section className="py-20 bg-light_blue_bg">
          <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-12">
            {[
              {
                icon: Target,
                title: "Our Vision",
                text: "To be the leading educational institute fostering talent and preparing individuals for a dynamic global landscape.",
              },
              {
                icon: BookOpen,
                title: "Our Mission",
                text: "Empowering education and embracing excellence through accessible, practical, and transformative learning.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-dark_blue p-8 text-center rounded-2xl shadow-lg border-t-4 border-brand_orange hover:shadow-xl transition-all duration-300"
              >
                <item.icon
                  size={48}
                  className="text-brand_orange mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-100 text-lg">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="py-20 bg-white text-center">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-dark_blue mb-12">
              Our Core Values
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
              {[
                {
                  icon: GraduationCap,
                  title: "Empowering Education",
                  text: "We offer accessible, quality education that equips students for real-world success.",
                },
                {
                  icon: Gem,
                  title: "Embracing Excellence",
                  text: "We maintain the highest standards in teaching, innovation, and outcomes.",
                },
                {
                  icon: Lightbulb,
                  title: "Innovation & Adaptability",
                  text: "Our curriculum evolves with industry trends to keep learners future-ready.",
                },
              ].map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="p-8 bg-gray-50 rounded-xl  hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="bg-brand_orange p-4 rounded-full inline-flex mb-4 text-white">
                    <v.icon size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-dark_blue mb-2">
                    {v.title}
                  </h3>
                  <p className="text-gray-600">{v.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

    {/* INSTRUCTORS */}
<section className="py-16 sm:py-24 bg-white_gray text-center">
  <div className="container mx-auto px-6 max-w-6xl">
    <h2 className="text-3xl md:text-4xl font-bold text-dark_blue mb-6">
      Meet Our Expert Team
    </h2>
    
    {/* CHANGE #1: Improved Readability
      'text-gray-700' was very hard to read on 'bg-dark_blue'.
      Switched to 'text-gray-300' for soft, readable contrast.
      Also increased bottom margin to 'mb-16' for better section spacing.
    */}
    <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-16">
      Learn from instructors who bring real-world expertise and passion
      to every session.
    </p>

    {/* CHANGE #2: Better Responsive Grid
      'grid-cols-2 md:grid-cols-5' is an awkward jump.
      This new grid flows better: 1 col on mobile, 2 on small, 4 on large.
    */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {instructors.map((i) => (
        <motion.div
          key={i.id}
          
          /* CHANGE #3: Enhanced Hover Animation
            Added 'scale: 1.03' and a slightly stronger 'y: -8'
            to make the hover effect more satisfying.
          */
          whileHover={{ y: -8, scale: 1.03 }}
          
          /*
            CHANGE #4: Smoother Transitions & Shadow
            Added 'duration-300' and 'ease-in-out' to smooth all transitions.
            Upgraded shadow from 'shadow-md' to 'shadow-lg' (and 'shadow-2xl' on hover)
            for a more pronounced "lift" effect.
          */
          className="bg-white_gray rounded-xl overflow-hidden border-4 border-brand_orange shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
        >
          <Image
            src={i.image}
            alt={i.name}
            width={300}
            height={300}
            className="object-cover w-full h-60 md:h-64" // h-60 on smaller screens
          />
          
          {/* CHANGE #5: More Breathing Room
            Increased padding from 'p-4' to 'p-6' to give the
            text content more space.
          */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-dark_blue">
              {i.name}
            </h3>
            <p className="text-brand_orange text-sm">{i.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

        {/* STATS */}
    <section className="py-20 bg-white">
  <div className="container mx-auto px-6 max-w-6xl">
    <h2 className="text-3xl md:text-4xl font-bold text-dark_blue mb-16 text-center">
      Ceylearn at a Glance
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
      {stats.map((s, i) => (
        <motion.div
          key={s.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          
          /*
            CHANGE #1: The Card
            - 'relative' to position the icon
            - 'text-right' to align the text
            - Specific padding: 'py-8 pr-8 pl-24' to make space 
              for the icon on the left.
          */
          className="relative bg-dark_blue rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 py-8 pr-8 pl-24 text-right"
        >
          {/*
            CHANGE #2: The Overlapping Icon
            - 'absolute' positioned on the left edge
            - 'bg-brand_orange' circle with a shadow
            - 'w-24 h-24' (96px)
          */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 bg-brand_orange text-white w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
            <s.icon size={40} />
          </div>

          {/*
            CHANGE #3: The Text
            - Larger number ('text-5xl')
            - Softer label
            - All text is right-aligned by the parent.
          */}
          <p className="text-5xl font-bold text-white mb-1">
            {s.number}
          </p>
          <p className="text-lg font-semibold text-gray-300">
            {s.label}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
      </main>
<TestimonialSection />
      <Footer />
    </div>
  );
}
