"use client";

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
  MapPin, // Added icon
  Clock, // Added icon
} from "lucide-react";
import { SiTiktok } from "react-icons/si";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Header />

      <main className="grow">
        {/* 1. Page Hero Section */}
        <section className="relative h-[40vh] bg-dark_blue text-white flex items-center justify-center">
          <Image
            src="/hero1.png" // Placeholder. Use a real, professional image
            alt="Contact Ceylearn Academy"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-dark_blue via-dark_blue/70 to-transparent"></div>

          <div className="z-10 text-center p-4">
            <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
            <p className="text-xl md:text-2xl mt-4 text-brand_orange font-medium">
              We&apos;re here to help. Reach out to us anytime.
            </p>
          </div>
        </section>

        {/* 2. Contact Form & Details Section */}
        <section className="py-16 md:py-24 bg-white_gray">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left Column: Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-dark_blue mb-3">
                  Send Us a Message
                </h2>
                <div className="h-1.5 w-24 bg-brand_orange rounded-full mb-6"></div>
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand_orange focus:border-brand_orange"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand_orange focus:border-brand_orange"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand_orange focus:border-brand_orange"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      required
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand_orange focus:border-brand_orange"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand_orange focus:border-brand_orange"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center items-center gap-2 py-3 px-6 border border-transparent rounded-full shadow-sm text-lg font-semibold text-white bg-brand_orange hover:bg-opacity-90 transition-all hover:scale-105"
                    >
                      Send Message
                      <Send size={18} />
                    </button>
                  </div>
                </form>
              </div>

              {/* Right Column: Contact Details */}
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-dark_blue mb-6">
                    Get in Touch
                  </h3>
                  <div className="space-y-6">
                    {/* Phone */}
                    <a
                      href="tel:+94718269089"
                      className="flex items-start gap-4 text-lg text-gray-700 hover:text-brand_orange transition-colors"
                    >
                      <Phone
                        size={24}
                        className="text-brand_orange shrink-0 mt-1"
                        strokeWidth={2.5}
                      />
                      <span>(+94) 71 826 9089</span>
                    </a>
                    {/* Email */}
                    <a
                      href="mailto:ceylearnacademy@gmail.com"
                      className="flex items-start gap-4 text-lg text-gray-700 hover:text-brand_orange transition-colors"
                    >
                      <Mail
                        size={24}
                        className="text-brand_orange shrink-0 mt-1"
                        strokeWidth={2.5}
                      />
                      <span>ceylearnacademy@gmail.com</span>
                    </a>
                    {/* Address */}
                    <div className="flex items-start gap-4 text-lg text-gray-700">
                      <MapPin
                        size={24}
                        className="text-brand_orange shrink-0 mt-1"
                        strokeWidth={2.5}
                      />
                      <span>
                        CeyLearn Academy,
                        <br />
                        108, Marawa,
                        <br />
                        Mawanella, Sri Lanka
                      </span>
                    </div>
                    {/* Office Hours */}
                    <div className="flex items-start gap-4 text-lg text-gray-700">
                      <Clock
                        size={24}
                        className="text-brand_orange shrink-0 mt-1"
                        strokeWidth={2.5}
                      />
                      <span>
                        Monday – Friday:
                        <br />
                        9:00 AM – 9:00 PM
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-dark_blue mb-6">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    {/* Social Icons */}
                    <a
                      href="https://www.facebook.com/profile.php?id=61560449742239"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand_orange text-dark_blue flex items-center justify-center p-3 rounded-full transition-all hover:bg-opacity-80 hover:scale-110"
                      aria-label="Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand_orange text-dark_blue flex items-center justify-center p-3 rounded-full transition-all hover:bg-opacity-80 hover:scale-110"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand_orange text-dark_blue flex items-center justify-center p-3 rounded-full transition-all hover:bg-opacity-80 hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="https://www.tiktok.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand_orange text-dark_blue p-3 flex items-center justify-center rounded-full transition-all hover:bg-opacity-80 hover:scale-110"
                      aria-label="TikTok"
                    >
                      <SiTiktok size={18} />
                    </a>
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand_orange text-dark_blue p-3 flex items-center justify-center rounded-full transition-all hover:bg-opacity-80 hover:scale-110"
                      aria-label="YouTube"
                    >
                      <Youtube size={20} />
                    </a>
                  </div>
                </div>

                {/* Map */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.8823831176287!2d80.44988920972045!3d7.254224914212214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae315006865485d%3A0x46e2f669c8db2436!2sCeyLearn%20Academy!5e0!3m2!1sen!2slk!4v1762152021143!5m2!1sen!2slk"
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-64 md:h-80"
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

