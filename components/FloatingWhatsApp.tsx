"use client";

import { SiWhatsapp } from "react-icons/si"; // Using react-icons for the WhatsApp logo

const FloatingWhatsApp = () => {
  // --- Configure your details here ---
  const whatsappNumber = "+94772969052"; // Your WhatsApp number
  const prefilledMessage =
    "Hello Ceylearn Academy! I'm interested in one of your courses.";
  // --- End of configuration ---

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    prefilledMessage
  )}`;

  return (
    <div className="relative group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-brand_orange text-dark_blue p-4 rounded-full shadow-lg 
                   transition-all duration-300 
                   hover:scale-110 hover:bg-opacity-90 
                   flex items-center justify-center"
      >
        <SiWhatsapp size={28} />
      </a>
      {/* Tooltip */}
      <span
        className="fixed bottom-[4.7rem] right-6 z-50 
                   bg-dark_blue text-white_gray text-xs 
                   px-3 py-1.5 rounded-md 
                   opacity-0 group-hover:opacity-100 
                   transition-opacity duration-300 whitespace-nowrap
                   pointer-events-none" // Prevents tooltip from blocking clicks
      >
        Chat with us!
      </span>
    </div>
  );
};

export default FloatingWhatsApp;
