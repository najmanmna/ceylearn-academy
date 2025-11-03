import { User } from "lucide-react";
import React from "react";

export interface TestimonialCardProps {
  name: string;
  title: string;
  quote: string;
  // New prop: isActive
  isActive?: boolean; // Optional prop to indicate if the card is the currently active/centered one
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, title, quote, isActive }) => {
  return (
    // You could use isActive here for different styling if needed
    // Example: className={`pt-14 h-full ${isActive ? 'shadow-2xl' : ''}`}
    <div className="pt-14 h-full">
      <div className="relative bg-white rounded-lg shadow-xl h-full flex flex-col">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-28 h-28 rounded-full bg-white p-3 shadow-lg">
            <div className="w-full h-full bg-dark_blue rounded-full flex items-center justify-center">
              <User size={40} className="text-white" />
            </div>
          </div>
        </div>

        <div className="h-14 bg-white rounded-t-lg"></div>
        
        <div className="bg-dark_blue text-white p-8 rounded-b-lg flex flex-col grow">
          <span className="text-brand_orange text-6xl font-bold leading-none -ml-2">
            “
          </span>
          <p className="italic my-4 grow">{quote}</p>
          <span className="text-brand_orange text-6xl font-bold leading-none ml-auto -mr-2">
            ”
          </span>
          <h4 className="font-bold text-brand_orange text-lg mt-4">{name}</h4>
          <p className="text-sm text-gray-300">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;