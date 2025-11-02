import React from 'react';
import Link from 'next/link'; // Import Link from Next.js
import { ArrowRight } from 'lucide-react';

// Added 'slug' to the props
const CourseCard = ({ slug, image, title, description }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg 
                   transform transition-all duration-300 
                   hover:shadow-2xl hover:-translate-y-1
                   flex flex-col"> {/* Added flex-col to align content */}
      
      {/* Course Image */}
      <div className="w-full h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Course Content - Added 'flex-grow' to push button to bottom */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-dark_blue mb-2">
          {title}
        </h3>
        <p className="text-text_gray text-base mb-5">
          {description}
        </p>
        
        {/* Button is now wrapped in a Link */}
        {/* This is the "connection" */}
        <Link 
          href={`/courses/${slug}`} 
          passHref
          className="mt-auto" // Pushes button to the bottom
        >
          <button className="bg-brand_orange hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-lg transition-colors duration-300 flex items-center group w-full justify-center">
            View Details
            <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;