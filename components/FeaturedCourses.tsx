import React from 'react';
import CourseCard from './CourseCard'; 
// Import your new single source of truth
import { allCourses } from '@/data/courseData'; // Adjust path

const FeaturedCourses = () => {
  // You can .slice(0, 4) to only show the first 4 "featured" courses
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
              slug={course.slug}           // Pass the slug for the link
              title={course.title}         // Pass the title
              image={course.cardImage}     // Pass the cardImage
              description={course.summary} // Pass the summary
            />
          ))}
        </div>
        
        {/* ... View All button ... */}
      </div>
    </section>
  );
};

export default FeaturedCourses;