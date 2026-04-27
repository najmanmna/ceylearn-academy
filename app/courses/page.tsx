"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import WhyChoose from "@/components/WhyChoose";
import { allCourses as coursesData, categories } from "@/data/courseData";
import { Search, Filter, GraduationCap, Award } from "lucide-react";

export default function CoursesPage() {
  // --- States for Filtering ---
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All"); // "All", "Diploma", "Certificate"
  const [searchQuery, setSearchQuery] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  // --- Constants ---
  const allTabs = ["All", ...categories];
  const programTypes = ["All", "Diploma", "Certificate"];

  // --- Filtering Logic ---
  const filtered = coursesData.filter((course) => {
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    const matchesType =
      selectedType === "All" ||
      course.title.toLowerCase().includes(selectedType.toLowerCase());
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesType && matchesSearch;
  });

  const filteredAndSortedCourses = [...filtered].sort((a, b) => {
    const priorityCategory = "Technology & IT";
    const aIsPriority = a.category === priorityCategory;
    const bIsPriority = b.category === priorityCategory;
    if (aIsPriority && !bIsPriority) return -1;
    else if (!aIsPriority && bIsPriority) return 1;
    else return 0;
  });

  // --- Handlers ---
  const handleCategoryChange = (category: string) => {
    if (category === selectedCategory) return;
    triggerAnimation();
    setSelectedCategory(category);
  };

  const handleTypeChange = (type: string) => {
    if (type === selectedType) return;
    triggerAnimation();
    setSelectedType(type);
  };

  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />

      <main className="grow">
        {/* 1. Page Hero */}
        <section className="relative h-[40vh] bg-dark_blue text-white flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero1.png"
              alt="Courses Hero"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark_blue via-dark_blue/70 to-transparent"></div>
          </div>

          <div className="z-10 text-center p-6 max-w-4xl relative">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
              Explore Our Programs
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-medium">
              Find the perfect Diploma or Certificate to kickstart your career.
            </p>
          </div>
        </section>

        {/* 2. Filter & Search Section */}
        <section className="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
          <div className="container mx-auto px-6 max-w-7xl py-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              
              {/* Left: Program Type Toggle (Diploma vs Certificate) */}
              <div className="flex items-center gap-2 bg-gray-100 p-1.5 rounded-xl self-start">
                {programTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => handleTypeChange(type)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                      selectedType === type
                        ? "bg-white text-brand_orange shadow-sm"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {type === "Diploma" && <GraduationCap size={16} />}
                    {type === "Certificate" && <Award size={16} />}
                    {type}
                  </button>
                ))}
              </div>

              {/* Right: Search Bar */}
              <div className="relative w-full md:w-80">
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-100 border-transparent focus:bg-white border focus:border-brand_orange rounded-xl text-sm focus:outline-none transition-all"
                />
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Category Tabs & Grid */}
        <section className="bg-gray-50 py-12 md:py-16 min-h-[500px]">
          <div className="container mx-auto px-6 max-w-7xl">
            
            {/* Category Pills */}
            <div className="flex flex-wrap gap-3 mb-10">
               <span className="flex items-center text-sm font-bold text-gray-400 mr-2 uppercase tracking-wider">
                  <Filter size={14} className="mr-1" /> Category:
               </span>
              {allTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleCategoryChange(tab)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                    selectedCategory === tab
                      ? "bg-dark_blue text-white border-dark_blue"
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Course Grid with Animation */}
            <div
              className={`transition-opacity duration-300 ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              {/* === UPDATED: Use useMemo result array === */}
              {filteredAndSortedCourses.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* === UPDATED: Map over sorted array === */}
                  {filteredAndSortedCourses.map((course) => (
                    <CourseCard
                      key={course.slug}
                      slug={course.slug}
                      image={course.cardImage}
                      title={course.title}
                      description={course.summary}
                      category={course.category}
                      duration={course.duration}
                    />
                  ))}
                </div>
              ) : (
                // Empty State
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-300">
                    <Search size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-700">
                    No matching courses found
                  </h3>
                  <p className="text-gray-500 mt-2 max-w-md">
                    We couldn&apos;t find any {selectedType !== "All" ? selectedType : ""}{" "}
                    courses in the &quot;{selectedCategory}&quot; category matching &quot;{searchQuery}&quot;.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory("All");
                      setSelectedType("All");
                      setSearchQuery("");
                    }}
                    className="mt-6 text-brand_orange font-semibold hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        <WhyChoose />
      </main>

      <Footer />
    </div>
  );
} 