import React from 'react';
import Link from 'next/link'; // Import Link for the button
import CourseCard from './CourseCard'; 
import { allCourses } from '@/data/courseData'; // Adjust path

const FeaturedCourses = () => {
  // Get the first 4 courses to feature
  const featured = allCourses.slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark_blue mb-4">
            Our Featured <span className="text-brand_orange">Courses</span>
          </h2>
          <p className="text-lg text-text_gray">
            Explore our most popular programs designed to get you job-ready.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featured.map((course) => (
            <CourseCard
              key={course.slug}
              slug={course.slug}
              title={course.title}
              image={course.cardImage}
              description={course.summary}
            />
          ))}
        </div>
        
        {/* --- View All Courses Button Added --- */}
        <div className="text-center">
          <Link
            href="/courses" // Link to your main courses page
            className="bg-brand_orange hover:bg-orange-600 text-white font-bold 
                       px-8 py-3 rounded-lg text-lg transition-colors duration-300
                       inline-block" // Use inline-block for Link styling
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;