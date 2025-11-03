import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  BookOpen,
  Target,
  Gem,
  GraduationCap,
  Lightbulb,
} from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Header />

      <main className="grow">
        {/* 1. Page Hero Section */}
        <section className="relative h-[40vh] bg-dark_blue text-white flex items-center justify-center">
          <Image
            src="/hero1.png" // Placeholder. Use a real, professional image
            alt="About Ceylearn Academy"
            layout="fill"
            objectFit="cover"
            className="opacity-30" // Slightly more visible image
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-dark_blue via-dark_blue/70 to-transparent"></div>

          <div className="z-10 text-center p-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              About Ceylearn Academy
            </h1>
            <p className="text-xl md:text-2xl mt-4 text-brand_orange font-medium">
              &quot;Empowering Education, Embracing Excellence&quot;
            </p>
          </div>
        </section>

        {/* 2. Welcome & Our Story Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Column: Text */}
              <div className="text-gray-700">
                <h2 className="text-3xl md:text-4xl font-bold text-dark_blue mb-3">
                  Welcome to Ceylearn Academy
                </h2>
                {/* Accent line */}
                <div className="h-1.5 w-24 bg-brand_orange rounded-full mb-6"></div>

                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    Guided by our mission, Ceylearn Academy is dedicated to
                    fostering talent across diverse and dynamic fields. We offer a
                    comprehensive range of diploma and certificate programs,
                    designed to ignite passion and build expertise.
                  </p>
                  <p>
                    From cutting-edge{" "}
                    <strong>
                      Graphic Design, Digital Marketing, and essential IT skills
                    </strong>{" "}
                    to the intricate artistry of{" "}
                    <strong>
                      Mehandi, Craft and Event Planning, Bridal Makeup, and Cake
                      Decoration
                    </strong>{" "}
                     our academy provides a vibrant learning environment for
                    every ambition.
                  </p>
                  <p>
                    Our focus is on delivering practical, industry-relevant
                    knowledge through expert-led instruction, empowering every
                    student to excel in their chosen profession.
                  </p>
                </div>
              </div>

              {/* Right Column: Image */}
              <div>
                <Image
                  src="/images/aboutimage.png" // Placeholder
                  alt="Ceylearn Academy Students Learning"
                  width={600}
                  height={400}
                  className="rounded-full shadow-xl object-cover w-full h-auto"
                  priority // As it's a prominent image on the page
                />
              </div>
            </div>
          </div>
        </section>
 <section className="py-16 md:py-24 bg-white_gray">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Vision */}
              <div className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-lg border-l-4 border-brand_orange transition-all duration-300 hover:shadow-xl">
                <Target size={40} className="text-brand_orange mb-4" />
                <h3 className="text-2xl font-bold text-dark_blue mb-4">
                  Our Vision
                </h3>
                <p className="text-lg text-gray-700">
                  To be the leading educational institute that fosters talent and
                  equips individuals with the essential skills for a dynamic
                  global landscape, creating a future generation of innovators
                  and leaders.
                </p>
              </div>

              {/* Mission */}
              <div className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-lg border-l-4 border-brand_orange transition-all duration-300 hover:shadow-xl">
                <BookOpen size={40} className="text-brand_orange mb-4" />
                <h3 className="text-2xl font-bold text-dark_blue mb-4">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-700">
                  &quot;Empowering Education, Embracing Excellence&quot; - We are
                  committed to delivering high-quality, practical, and
                  accessible education that transforms lives and builds
                  successful careers.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* 3. Our Core Values Section */}
        <section className="py-16 md:py-24 ">
          <div className="container mx-auto px-6 text-center max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-dark_blue mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Value 1: Empowering Education */}
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="bg-brand_orange text-white p-4 rounded-full mb-4">
                  <GraduationCap size={32} />
                </div>
                <h3 className="text-xl font-semibold text-dark_blue mb-2">
                  Empowering Education
                </h3>
                <p className="text-gray-600">
                  We provide accessible, high-quality education that equips
                  students with knowledge and skills for future success.
                </p>
              </div>

              {/* Value 2: Embracing Excellence */}
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="bg-brand_orange text-white p-4 rounded-full mb-4">
                  <Gem size={32} />
                </div>
                <h3 className="text-xl font-semibold text-dark_blue mb-2">
                  Embracing Excellence
                </h3>
                <p className="text-gray-600">
                  We strive for the highest standards in teaching, curriculum,
                  and student outcomes, fostering a culture of continuous
                  improvement.
                </p>
              </div>

              {/* Value 3: Innovation & Adaptability */}
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="bg-brand_orange text-white p-4 rounded-full mb-4">
                  <Lightbulb size={32} />
                </div>
                <h3 className="text-xl font-semibold text-dark_blue mb-2">
                  Innovation & Adaptability
                </h3>
                <p className="text-gray-600">
                  We continuously update our programs to reflect industry
                  trends, ensuring our students are always ahead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Vision & Mission Section */}
       
      </main>

      <Footer />
    </div>
  );
}
