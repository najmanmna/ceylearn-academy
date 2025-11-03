import React from 'react';

const CtaSection = () => {
  return (
    // Main section with relative positioning and overflow hidden
    <section className="relative bg-dark_blue text-white overflow-hidden">
      
      {/* Top-left orange corner */}
      <div 
        className="absolute top-0 left-0 w-0 h-0 z-0
                   border-t-100 border-t-brand_orange
                   border-r-100 border-r-transparent
                   md:border-t-200 md:border-r-200"
      />

      {/* Bottom-right orange corner */}
      <div 
        className="absolute bottom-0 right-0 w-0 h-0 z-0
                   border-b-100 border-b-brand_orange
                   border-l-100 border-l-transparent
                   md:border-b-200 md:border-l-200"
      />

      {/* Content Container */}
      {/* Needs relative z-10 to sit on top of the corner elements */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to Start Your Creative Journey?
          </h2>
          
          {/* Subheading */}
          <p className="text-lg text-gray-300 mb-8">
            Get in touch with our advisors today to find the perfect program for you.
          </p>
          
          {/* Button */}
          <button 
            className="bg-brand_orange text-white font-bold px-8 py-3 rounded-md 
                       text-lg transition-colors duration-300
                       hover:bg-orange-600"
          >
            INQUIRE NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;