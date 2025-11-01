"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { SiTiktok } from "react-icons/si"; // TikTok icon from react-icons

const Header = () => {
  return (
    <header className="w-full shadow-md">
      {/* Top Bar */}
      <div className="bg-dark_blue text-white_gray py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
            <a
              href="mailto:ceylearnacademy@gmail.com"
              className="flex items-center gap-2 hover:text-brand_orange transition-colors"
            >
              <Mail size={16} />
              <span>ceylearnacademy@gmail.com</span>
            </a>
            <a
              href="tel:+94718269089"
              className="flex items-center gap-2 hover:text-brand_orange transition-colors"
            >
              <Phone size={16} />
              <span>(+94) 71 826 9089</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 items-center mt-2 sm:mt-0">
            {/* Facebook */}
            <div className="relative group">
              <a
                href="https://www.facebook.com/profile.php?id=61560449742239"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand_orange text-dark_blue flex items-center justify-center p-1.5 rounded-full transition-all hover:bg-opacity-80 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[-1.8rem] bg-dark_blue text-white_gray text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all">
                Facebook
              </span>
            </div>

            {/* Instagram */}
            <div className="relative group">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand_orange text-dark_blue flex items-center justify-center p-1.5 rounded-full transition-all hover:bg-opacity-80 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[-1.8rem] bg-dark_blue text-white_gray text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all">
                Instagram
              </span>
            </div>

            {/* LinkedIn */}
            <div className="relative group">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand_orange text-dark_blue flex items-center justify-center p-1.5 rounded-full transition-all hover:bg-opacity-80 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[-1.8rem] bg-dark_blue text-white_gray text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all">
                LinkedIn
              </span>
            </div>

            {/* TikTok */}
            <div className="relative group">
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand_orange text-dark_blue p-1.5 flex items-center justify-center rounded-full transition-all hover:bg-opacity-80 hover:scale-110"
                aria-label="TikTok"
              >
                <SiTiktok size={14} />
              </a>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[-1.8rem] bg-dark_blue text-white_gray text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all">
                TikTok
              </span>
            </div>

            {/* YouTube */}
            <div className="relative group">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand_orange text-dark_blue p-1.5 flex items-center justify-center rounded-full transition-all hover:bg-opacity-80 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[-1.8rem] bg-dark_blue text-white_gray text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all">
                YouTube
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Ceylearn Academy Logo"
              width={220}
              height={180}
              priority
            />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 text-dark_blue font-medium">
              <Link
                href="/"
                className="hover:text-brand_orange transition-colors"
              >
                Home
              </Link>
              <Link
                href="/courses"
                className="hover:text-brand_orange transition-colors"
              >
                Courses
              </Link>
              <Link
                href="/about"
                className="hover:text-brand_orange transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="hover:text-brand_orange transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* CTA */}
            <a
              href="/contact"
              className="hidden md:inline-block bg-brand_orange text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all hover:scale-105"
            >
              Join Now
            </a>
          </div>
          {/* Mobile Menu Icon */}
          <button className="md:hidden text-dark_blue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
