import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Instagram, Facebook,Youtube,  Linkedin} from 'lucide-react';
import { SiTiktok } from "react-icons/si"; // TikTok icon from react-icons

const Footer = () => {
  return (
    <footer className="bg-dark_blue text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        
        {/* Top section: Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Column 1: Logo & Tagline */}
          <div className="md:col-span-1">
            {/* Use your white/light logo variant here */}
            <Image 
              src="/white-logo.png" // Replace with your actual logo path
              alt="Ceylearn Academy Logo" 
              width={200} // Adjust as needed
              height={70} // Adjust as needed
              className="mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering Education, <br /> Embracing Excellence,
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-brand_orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-brand_orange transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-brand_orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-brand_orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className=''>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-brand_orange text-dark_blue flex items-center justify-center mr-3 shrink-0">
                   <Phone size={16} />
                </div>
                <a 
                  href="tel:+94772969053" 
                  className="text-gray-300 hover:text-brand_orange underline transition-colors"
                >
                  077 296 9053
                </a>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-brand_orange text-dark_blue flex items-center justify-center mr-3 shrink-0">
                   <Mail size={16} />
                </div>
                <a 
                  href="mailto:ceylearnacademy@gmail.com" 
                  className="text-gray-300 hover:text-brand_orange transition-colors break-all"
                >
                  ceylearnacademy@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-brand_orange text-dark_blue flex items-center justify-center mr-3 shrink-0">
                   <MapPin size={16} />
                </div>
                <span className="text-gray-300">Mawanella, Sri Lanka</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div className='sm:ml-4'>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
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
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[-1.8rem] bg-dark_blue text-white_gray text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all pointer-events-none">
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
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[-1.8rem] bg-dark_blue text-white_gray text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all pointer-events-none">
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
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[-1.8rem] bg-dark_blue text-white_gray text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all pointer-events-none">
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
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[-1.8rem] bg-dark_blue text-white_gray text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all pointer-events-none">
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
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[-1.8rem] bg-dark_blue text-white_gray text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all pointer-events-none">
                YouTube
              </span>
            </div>
          </div>
          </div>

        </div>
        
        {/* Separator Line */}
        <hr className="border-t border-gray-700 my-8" /> 

        {/* Bottom: Copyright */}
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Ceylearn Academy. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;