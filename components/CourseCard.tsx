import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// --- (1) Define the type for the component's props ---
interface CourseCardProps {
  slug: string;
  image: string;
  title: string;
  description: string;
}

// --- (2) Apply the type to the component ---
const CourseCard: React.FC<CourseCardProps> = ({ slug, image, title, description }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg 
                   transform transition-all duration-300 
                   hover:shadow-2xl hover:-translate-y-1
                   flex flex-col">
      
      {/* Course Image */}
      <div className="w-full h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Course Content */}
      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-semibold text-dark_blue mb-2">
          {title}
        </h3>
        <p className="text-text_gray text-base mb-5">
          {description}
        </p>
        
        {/* Styled Link component */}
        <Link 
          href={`/courses/${slug}`} 
          className="bg-brand_orange hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-lg 
                     transition-colors duration-300 flex items-center group w-full justify-center 
                     mt-auto"
        >
          View Details
          <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;