// app/contact-us/page.tsx
"use client";

import { useState, FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  MapPin,
  Clock,
  Check,
  Copy,
  Loader2,
  AlertTriangle, // Added for error state
} from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { allCourses } from "@/data/courseData";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function ContactUsPage() {
  // --- State for Form Handling ---
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false); // Added generic error state
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // --- Handlers ---
  
  // Connect Form to Resend API Endpoint
  // Find this function in page.tsx and replace it entirely
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  setIsError(false); // Reset error state on new attempt

  // *** STEP 1: Store the form element reference in a variable! ***
  const formElement = e.currentTarget; 

  // Get form data directly from the form element, using the variable
  const formData = new FormData(formElement); 
  const data = Object.fromEntries(formData.entries());

  try {
    // Send form data to the server-side API route
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Handle the server response
    if (response.ok) {
      // Success: Show the success message and clear the form
      setIsSuccess(true);
      // *** STEP 2: Use the variable to reset the form! ***
      formElement.reset(); // Now this is safe!
    } else {
      // API Error: Display a general error to the user
      setIsError(true);
      console.error("Form submission failed on server.");
    }
  } catch (error) {
    // Network/Runtime Error: Display error state
    console.error("Submission error:", error);
    setIsError(true);
  } finally {
    // Always stop the loading state
    setIsSubmitting(false);
  }
};

  // Copy to Clipboard Utility
  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 font-sans">
      <Header />

      <main className="grow">
        {/* 1. Page Hero Section */}
        <section className="relative h-[40vh] bg-dark_blue flex items-center justify-center overflow-hidden">
          {/* Background Image with Parallax-like fix */}
          <div className="absolute inset-0 z-0">
             <Image
                src="/hero2.png" 
                alt="Contact Ceylearn Academy"
                fill
                className="object-cover opacity-20"
                priority
             />
             <div className="absolute inset-0 bg-gradient-to-t from-dark_blue via-dark_blue/80 to-transparent"></div>
          </div>

          <div className="z-10 text-center p-6 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
              Contact Us
            </h1>
            <p className="text-lg md:text-2xl text-brand_orange font-medium animate-fade-in-up">
              We're here to help you start your journey.
            </p>
          </div>
        </section>

        {/* 2. Contact Form & Details Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Left Column: Contact Form */}
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 relative">
                
                {/* General API Error State (Added) */}
                {isError && (
                  <div className="absolute top-4 left-4 right-4 bg-red-50 text-red-700 p-4 rounded-lg flex items-center gap-3 border border-red-200 z-10 animate-fade-in">
                    <AlertTriangle size={20} className="shrink-0"/>
                    <p className="text-sm font-medium">Failed to send message. Please try again or call us.</p>
                  </div>
                )}

                <div className="mb-8 mt-12 lg:mt-0"> {/* Adjusted margin-top for mobile error overlap */}
                  <h2 className="text-3xl font-bold text-dark_blue">
                    Send Us a Message
                  </h2>
                  <div className="h-1.5 w-20 bg-brand_orange rounded-full mt-3"></div>
                  <p className="mt-4 text-gray-600">
                    Have a question about a course? Fill out the form and we'll get back to you within 24 hours.
                  </p>
                </div>

                {isSuccess ? (
                  // Success State
                  <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-in fade-in zoom-in duration-300">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check size={32} strokeWidth={3} />
                    </div>
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                    <p className="text-green-700 mb-6">
                      Thank you for contacting Ceylearn Academy. Our team will reach out to you shortly.
                    </p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="text-green-700 font-semibold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  // Form State
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name" // Use 'name' attribute
                        id="name"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand_orange/50 focus:border-brand_orange transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email" // Use 'name' attribute
                          id="email"
                          required
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand_orange/50 focus:border-brand_orange transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone" // Use 'name' attribute
                          id="phone"
                          placeholder="077 123 4567"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand_orange/50 focus:border-brand_orange transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1">
                        Interested Course
                      </label>
                      <div className="relative">
                        <select
                          name="subject" // Use 'name' attribute
                          id="subject"
                          required
                          defaultValue=""
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand_orange/50 focus:border-brand_orange transition-all appearance-none"
                        >
                          <option value="" disabled>Select a course...</option>
                          {allCourses.map((course) => (
                            <option key={course.slug} value={course.title}>
                              {course.title}
                            </option>
                          ))}
                          <option value="General Inquiry">General Inquiry / Other</option>
                        </select>
                        {/* Custom Arrow Icon */}
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message" // Use 'name' attribute
                        rows={4}
                        required
                        placeholder="Tell us how we can help you..."
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand_orange/50 focus:border-brand_orange transition-all resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex justify-center items-center gap-2 py-4 px-6 rounded-full shadow-lg text-lg font-bold text-white bg-brand_orange hover:bg-orange-600 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin" size={20} />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Right Column: Contact Details & Map */}
              <div className="space-y-8">
                
                {/* Contact Info Card */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-dark_blue mb-6">
                    Get in Touch
                  </h3>
                  <div className="space-y-6">
                    
                    {/* Phone */}
                    <div className="group flex items-start gap-4">
                      <div className="bg-orange-100 p-3 rounded-full text-brand_orange">
                        <Phone size={24} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 font-medium">Phone</p>
                        <div className="flex items-center gap-2">
                          <a href="tel:+94772969052" className="text-md font-semibold text-gray-800 hover:text-brand_orange transition-colors">
                            (+94) 77 296 9052
                          </a>
                          <button 
                            onClick={() => handleCopy("+94772969052", "phone")}
                            className="text-gray-400 hover:text-gray-600"
                            title="Copy number"
                          >
                            {copiedField === "phone" ? <Check size={16} className="text-green-500"/> : <Copy size={16}/>}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="group flex items-start gap-4">
                      <div className="bg-orange-100 p-3 rounded-full text-brand_orange">
                        <Mail size={24} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 font-medium">Email</p>
                        <div className="flex items-center gap-2">
                          <a href="mailto:ceylearnacademy@gmail.com" className="text-md font-semibold text-gray-800 hover:text-brand_orange transition-colors break-all">
                            ceylearnacademy@gmail.com
                          </a>
                          <button 
                             onClick={() => handleCopy("ceylearnacademy@gmail.com", "email")}
                             className="text-gray-400 hover:text-gray-600"
                             title="Copy email"
                          >
                             {copiedField === "email" ? <Check size={16} className="text-green-500"/> : <Copy size={16}/>}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-100 p-3 rounded-full text-brand_orange">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Location</p>
                        <p className="text-md text-gray-800 leading-snug">
                          CeyLearn Academy,<br />
                          108, Marawa,<br />
                          Mawanella, Sri Lanka
                        </p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-100 p-3 rounded-full text-brand_orange">
                        <Clock size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Office Hours</p>
                        <p className="text-md text-gray-800">
                          Mon – Fri: 9:00 AM – 9:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-dark_blue mb-4">Follow Us</h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { Icon: Facebook, link: "https://www.facebook.com/p/CeyLearn-Academy-61560449742239/", label: "Facebook" },
                      { Icon: Instagram, link: "https://www.instagram.com/ceylearn_academy/", label: "Instagram" },
                      { Icon: Linkedin, link: "https://www.linkedin.com/company/ceylearn-academy/", label: "LinkedIn" },
                      { Icon: SiTiktok, link: "https://www.tiktok.com/@ceylearn_academy", label: "TikTok" },
                      { Icon: Youtube, link: "https://www.youtube.com/@ceyLearnacademy00", label: "YouTube" },
                    ].map(({ Icon, link, label }, index) => (
                      <a
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 text-gray-600 p-3 rounded-full transition-all hover:bg-brand_orange hover:text-white hover:scale-110"
                        aria-label={label}
                      >
                        <Icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Map Embed - FIXED Google Maps Embed URL for Mawanella */}
               
{/* Map Embed - FIXED Google Maps Embed URL for Mawanella */}
 <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 h-80">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.8823831176287!2d80.44988920972045!3d7.254224914212214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae315006865485d%3A0x46e2f669c8db2436!2sCeyLearn%20Academy!5e0!3m2!1sen!2slk!4v1762152021143!5m2!1sen!2slk"
                    title="Ceylearn Academy Location"
                  ></iframe>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}