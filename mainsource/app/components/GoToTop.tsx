"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Logic: Show button when page is scrolled down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-16 md:bottom-5 right-3 z-[1200] flex flex-col items-center ">
      <div className="relative group">
        
        {/* Tooltip */}
        <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Scroll to top
          <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-800" />
        </div>

        {/* Button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="bg-gray-600 text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110 flex items-center justify-center cursor-pointer"
        >
          <FaArrowUp className="text-white text-xs sm:text-sm" />
        </button>
      </div>
    </div>
  );
};

export default GoToTop;