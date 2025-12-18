import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

interface CourseCardProps {
  slug: string;
  image: string;
  title: string;
  description: string;
  category?: string;
  duration?: string;
}

const CourseCard = ({ slug, image, title, description, category, duration }: CourseCardProps) => {
  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-brand_orange/30 transition-all duration-300 flex flex-col h-full">
      
      {/* 1. Image Area - Clickable */}
      <Link href={`/courses/${slug}`} className="relative block h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Badge */}
        {category && (
            <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-dark_blue text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                {category}
            </span>
        )}
      </Link>

      {/* 2. Content Area */}
      <div className="p-6 flex flex-col grow">
        
        <div className="flex items-center gap-2 text-xs text-brand_orange font-semibold mb-3">
             {duration && (
                <>
                    <Clock size={14} />
                    <span>{duration}</span>
                </>
             )}
        </div>

        <Link href={`/courses/${slug}`} className="block">
             <h3 className="text-xl font-bold text-dark_blue mb-3 group-hover:text-brand_orange transition-colors line-clamp-2">
            {title}
            </h3>
        </Link>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 grow">
          {description}
        </p>

        {/* 3. Action Button */}
        <Link
          href={`/courses/${slug}`}
          className="inline-flex items-center gap-2 text-brand_orange font-bold text-sm hover:gap-3 transition-all"
        >
          View Details
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;