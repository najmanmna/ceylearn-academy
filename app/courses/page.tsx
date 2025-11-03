"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import WhyChoose from "@/components/WhyChoose";
import { allCourses as coursesData, categories } from "@/data/courseData";

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Include "All" tab + other categories
  const allTabs = ["All", ...categories];

  // Filter courses based on selected tab
  const filteredCourses =
    selectedCategory === "All"
      ? coursesData
      : coursesData.filter((course) => course.category === selectedCategory);

  return (
    <main>
      {/* Page Hero */}
      <Header />

      <section className="relative h-[40vh] bg-dark_blue text-white flex items-center justify-center">
        <Image
          src="/hero1.png"
          alt="Courses Hero"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-dark_blue via-dark_blue/70 to-transparent"></div>

        <div className="z-10 text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold">Our Courses</h1>
          <p className="text-lg md:text-xl text-white_gray mt-4 max-w-2xl mx-auto">
            Find the perfect program to kickstart your career and master new
            skills in technology, design, and creative arts.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white_gray py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12">
            {allTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedCategory(tab)}
                className={`px-5 py-2.5 rounded-full font-medium text-sm md:text-base transition-all duration-300 border ${
                  selectedCategory === tab
                    ? "bg-brand_orange text-white border-brand_orange shadow-md"
                    : "bg-white text-dark_blue border-gray-300 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Course Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.slug}
                  slug={course.slug}
                  image={course.cardImage}
                  title={course.title}
                  description={course.summary}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 text-lg">
              No courses available in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChoose />
      <Footer />
    </main>
  );
}
