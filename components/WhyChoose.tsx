
// Feature data array
// Updated: Text now matches the image exactly, including typos
import { UserCircle, MonitorPlay, Briefcase } from "lucide-react";

// Feature data array - matches the image exactly
const features = [
  {
    iconPath: "/icons/professor (1).png", // Replace with your actual path
    title: "Expert Instructors",
    description:
      "Learn from industry professionals with real-world experience.",
  },
  {
    iconPath: "/icons/video-lesson.png", // Replace with your actual path
    title: "Flexible Online Learning",
    description:
      "Study at your own pace, from anywhere in Sri Lanka.",
  },
  {
    iconPath: "/icons/career.png", // Replace with your actual path
    title: "Career-Ready Skills",
    description:
      "Gain practical, hands-on skills that employers are looking for.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 text-dark_blue">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-brand_orange">Ceylearn Academy?</span>
          </h2>
          <p className="text-lg text-text_gray">
            We are dedicated to providing the highest quality education to help
            you succeed in your career and personal goals.
          </p>
        </div>

        {/* Feature Cards Grid */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center flex flex-col items-center"
            >
              {/* Double Circle Icon Container */}
              <div className="relative w-36 h-36 mb-6">
                {/* Outer Circle - Orange Border */}
                <div className="absolute inset-0 rounded-full border-4 border-orange-500"></div>
                
                {/* Inner Circle - White Background with slight gap */}
                <div className="absolute inset-2 rounded-full bg-white border-4 border-slate-800 flex items-center justify-center">
                  {/* Icon Image */}
                  <img 
                    src={feature.iconPath} 
                    alt={feature.title}
                    className="w-18 h-18 object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;