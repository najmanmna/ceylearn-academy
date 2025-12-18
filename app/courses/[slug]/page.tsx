import Image from "next/image";
import { notFound } from "next/navigation";
import { allCourses } from "@/data/courseData"; 
import { 
  Clock, 
  BarChart, 
  CheckCircle2, 
  BookOpen, 
  User, 
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
                What You'll Learn
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

            {/* --- NEW SECTION: Free Lesson Preview --- */}
            {/* Only renders if previewVideoId exists in data */}
            {course.previewVideoId && (
              <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <h2 className="text-2xl font-bold text-dark_blue mb-6 flex items-center gap-3">
                  <PlayCircle className="text-brand_orange" size={24} />
                  Free Lesson Preview
                </h2>
                
                {/* Responsive YouTube Container */}
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

            {/* 4. Instructor */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
               <h2 className="text-2xl font-bold text-dark_blue mb-6 flex items-center gap-3">
                <User className="text-brand_orange" size={24} />
                Your Instructor
              </h2>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative w-24 h-24 shrink-0">
                    <Image 
                        src={course.instructor.image}
                        alt={course.instructor.name}
                        fill
                        className="rounded-full border-4 border-brand_orange/20 object-cover"
                    />
                </div>
                <div className="text-center sm:text-left">
                    <h3 className="text-xl font-bold text-gray-900">{course.instructor.name}</h3>
                    <p className="text-brand_orange font-medium text-sm mb-3">Course Instructor</p>
                    <p className="text-gray-600 leading-relaxed italic">
                        "{course.instructor.bio}"
                    </p>
                </div>
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