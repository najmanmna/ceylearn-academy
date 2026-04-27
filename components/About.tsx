import Image from "next/image";

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Left Content - Text */}
          <div className="flex-1 lg:pr-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              About Ceylearn Academy
            </h2>
            
            <div className="text-slate-800 space-y-4 mb-8">
              <p className="leading-relaxed">
                                 Guided by our mission, <em>&quot;Empowering Education, Embracing Excellence,&quot;</em> <strong>Ceylearn Academy</strong> is committed to nurturing skills and fostering personal and professional growth. We offer a comprehensive selection of diploma and certificate programs — from cutting-edge <strong>Graphic Design</strong> and <strong>Information Technology</strong> to the intricate artistry of <strong>Mehandi</strong>, <strong>Bridal Makeup</strong>, and <strong>Event Planning</strong>. Our expert-led, practical training ensures that every student gains career-ready skills and the confidence to excel in their chosen field.
              </p>
            </div>

            {/* Learn More Button */}
            <a href="/about">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-md text-lg transition-colors duration-200">
                Learn More
              </button>
            </a>
          </div>

          {/* Right Content - Image */}
          <div className="flex-1 lg:pl-8">
            <div className="relative rounded-full overflow-hidden shadow-xl aspect-square">
              <Image
                src="/images/aboutimage.png"
                alt="Ceylearn Academy team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;