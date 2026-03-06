"use client";
import React, { useEffect, useState, useCallback } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = totalScrollable > 0 ? (scrollY / totalScrollable) * 100 : 0;
    
    setScrollPercentage(percentage);
    setIsVisible(scrollY > 250);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // SVG Configuration (Compact 40px)
  const size = 40;
  const strokeWidth = 3;
  const center = size / 2;
  const radius = center - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollPercentage / 100) * circumference;

  return (
    <div 
      className={`fixed bottom-16 right-6 z-1200 flex items-center group pointer-events-none`}
    >
      {/* Tooltip with Elastic Transition */}
      <div className={`
        absolute right-14 px-3 py-1.5 rounded-lg bg-gray-900 text-white text-[10px] font-medium tracking-wide shadow-xl
        transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)
        ${isVisible ? "opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0" : "opacity-0"}
      `}>
        BACK TO TOP
        <span className="absolute top-1/2 -translate-y-1/2 left-full border-[5px] border-transparent border-l-gray-900" />
      </div>

      {/* Button Wrapper for Entrance Animation */}
      <div className={`
        transition-all duration-700 cubic-bezier(0.19, 1, 0.22, 1) transform
        ${isVisible ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 translate-y-12 scale-50"}
      `}>
        <button
          onClick={scrollToTop}
          className="relative h-10.5 w-10.5 flex items-center justify-center bg-white rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_35px_-5px_rgba(0,0,0,0.25)] transition-all duration-300 active:scale-90 cursor-pointer"
        >
          {/* Progress Ring with Linear Smoothing */}
          <svg width={size} height={size} className="absolute inset-0 -rotate-90">
            <circle
              cx={center}
              cy={center}
              r={radius}
              stroke="currentColor"
              strokeWidth={strokeWidth}
              fill="transparent"
              className="text-gray-50"
            />
            <circle
              cx={center}
              cy={center}
              r={radius}
              stroke="currentColor"
              strokeWidth={strokeWidth}
              fill="transparent"
              strokeDasharray={circumference}
              style={{ 
                strokeDashoffset: offset,
                // The transition here ensures the "liquid" feel as you scroll
                transition: "stroke-dashoffset 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)" 
              }}
              strokeLinecap="round"
              className="text-[#027cc2]"
            />
          </svg>

          {/* Icon with Springy Hover */}
          <FaArrowUp className="relative z-10 text-gray-700 text-sm transition-transform duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) group-hover:-translate-y-1" />
        </button>
      </div>
    </div>
  );
};

export default GoToTop;