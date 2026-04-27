import Image from "next/image";
import { notFound } from "next/navigation";
import { allCourses } from "@/data/courseData"; 
import {
  Clock,
  BarChart,
  CheckCircle2,
  BookOpen,
  Calendar,
  Phone,
  PlayCircle // Added Icon
} from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return allCourses.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CourseDetailsPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params; 
  const course = allCourses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans pb-20">
      
      {/* --- Hero Section --- */}
      <div className="relative bg-dark_blue text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={course.headerImage || course.cardImage} 
            alt={course.title}
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark_blue via-dark_blue/80 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-16 md:py-24 max-w-7xl">
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-6 font-medium">
            <Link href="/" className="hover:text-brand_orange transition-colors">Home</Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-brand_orange transition-colors">Courses</Link>
            <span>/</span>
            <span className="text-white truncate max-w-[200px]">{course.title}</span>
          </div>

          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-brand_orange/20 text-brand_orange text-sm font-bold tracking-wide mb-4 border border-brand_orange/30">
              {course.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              {course.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              {course.summary}
            </p>
            
            {/* Mobile Stats */}
            <div className="flex flex-wrap gap-6 md:hidden text-sm font-medium text-gray-300 mb-8">
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-brand_orange" />
                {course.duration}
              </div>
              <div className="flex items-center gap-2">
                <BarChart size={18} className="text-brand_orange" />
                {course.level}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Content --- */}
      <div className="container mx-auto px-6 max-w-7xl -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* 1. About */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-dark_blue mb-6 flex items-center gap-3">
                <BookOpen className="text-brand_orange" size={24} />
                About This Course
              </h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line text-lg">
                {course.longDescription}
              </p>
            </section>

            {/* 2. What You'll Learn */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-dark_blue mb-6 flex items-center gap-3">
                <CheckCircle2 className="text-brand_orange" size={24} />
                What You&apos;ll Learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.whatYouWillLearn.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* --- Free Lesson Preview --- */}
            {(course.previewVideoId || course.previewUrl) && (
              <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <h2 className="text-2xl font-bold text-dark_blue mb-6 flex items-center gap-3">
                  <PlayCircle className="text-brand_orange" size={24} />
                  Free Lesson Preview
                </h2>

                {course.previewVideoId ? (
                  <>
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black shadow-lg">
                      <iframe
                        src={`https://www.youtube.com/embed/${course.previewVideoId}`}
                        title="Course Preview Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full border-0"
                      ></iframe>
                    </div>
                    <p className="text-sm text-gray-500 mt-4 italic">
                      * Watch a sample lesson from the course curriculum.
                    </p>
                  </>
                ) : (
                  <a
                    href={course.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block w-full aspect-video rounded-xl overflow-hidden shadow-lg"
                  >
                    {/* Thumbnail — blurred course image as background */}
                    <Image
                      src={course.cardImage}
                      alt={`${course.title} preview`}
                      fill
                      className="object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />

                    {/* YouTube-style play button */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                      <div className="flex items-center justify-center w-20 h-14 bg-red-600 group-hover:bg-red-500 rounded-2xl shadow-2xl transition-all duration-300 group-hover:scale-110">
                        {/* SVG triangle play icon matching YouTube style */}
                        <svg viewBox="0 0 68 48" className="w-10 h-7 fill-white">
                          <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" className="fill-red-600 group-hover:fill-red-500 transition-colors duration-300"/>
                          <path d="M45 24 27 14v20" className="fill-white"/>
                        </svg>
                      </div>
                      <div className="text-center">
                        <p className="text-white font-bold text-lg drop-shadow">Watch on YouTube</p>
                        <p className="text-gray-300 text-sm mt-1 drop-shadow">Visit our channel for more lessons</p>
                      </div>
                    </div>

                    {/* YouTube watermark logo bottom-right */}
                    
                  </a>
                )}
              </section>
            )}

            {/* 3. Modules */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-dark_blue mb-6 flex items-center gap-3">
                <Calendar className="text-brand_orange" size={24} />
                Course Modules
              </h2>
              <div className="space-y-4">
                {course.modules.map((module, index) => (
                  <div 
                    key={index} 
                    className="group border border-gray-200 rounded-xl p-5 hover:border-brand_orange/50 transition-all hover:bg-orange-50/30"
                  >
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-brand_orange transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {module.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* RIGHT COLUMN (Sticky Sidebar) */}
          <div className="relative">
            <div className="sticky top-24 space-y-6">
                
                {/* Main Card */}
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="relative h-48 -mx-6 -mt-6 mb-6">
                         <Image
                            src={course.cardImage}
                            alt={course.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                    
                    <div className="space-y-4 mb-8">
                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                            <span className="text-gray-500 flex items-center gap-2">
                                <Clock size={18} /> Duration
                            </span>
                            <span className="font-semibold text-dark_blue">{course.duration}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                            <span className="text-gray-500 flex items-center gap-2">
                                <BarChart size={18} /> Level
                            </span>
                            <span className="font-semibold text-dark_blue">{course.level}</span>
                        </div>
                         <div className="flex items-center justify-between py-2 border-b border-gray-100">
                            <span className="text-gray-500 flex items-center gap-2">
                                <BookOpen size={18} /> Modules
                            </span>
                            <span className="font-semibold text-dark_blue">{course.modules.length} Modules</span>
                        </div>
                    </div>

                    <Link href="/contact" className="block w-full text-center py-4 bg-brand_orange hover:bg-orange-600 text-white font-bold rounded-xl text-lg shadow-lg shadow-brand_orange/30 transition-all hover:scale-[1.02]">
                        Enroll Now
                    </Link>
                    <p className="text-center text-xs text-gray-400 mt-4">
                        Limited seats available for the next intake.
                    </p>
                </div>

                {/* Contact Box */}
                <div className="bg-dark_blue text-white p-6 rounded-2xl shadow-lg">
                    <h3 className="font-bold text-lg mb-2">Need help deciding?</h3>
                    <p className="text-gray-300 text-sm mb-4">Chat with our student counselors to find the perfect course for you.</p>
                    <a href="tel:+94772969052" className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-semibold transition-colors">
                        <Phone size={16} />
                        Call (+94) 77 296 9052
                    </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}