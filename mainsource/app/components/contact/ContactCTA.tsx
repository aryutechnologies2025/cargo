

'use client'
import { RiCustomerServiceFill } from "react-icons/ri";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { MdPhone, MdEmail, MdMessage } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

const ContactCTA = () => {

   const scrollToTop = () => {
    window.scrollTo({
      top: 250,
      behavior: 'smooth'
    });
  };
  return (
    <div className="w-full overflow-hidden">
      {/* Main CTA Container */}
      <div className="flex flex-col lg:flex-row">
        {/* Left CTA - Customer Service */}
        <div
          className={`bg-[#1874c1] w-full lg:flex-1 text-white p-8 sm:p-12 md:p-16 lg:p-20 xl:p-26 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 transform transition-all duration-700 `}
        >
          {/* Icon with animation */}
          <div className="relative group">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-lg scale-0 group-hover:scale-150 transition-transform duration-500" />
            <RiCustomerServiceFill className="text-4xl sm:text-5xl md:text-6xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:text-white/90" />
          </div>

          {/* Divider - Hidden on mobile, shown on sm and up */}
          <div className="max-sm:hidden sm:block w-px h-12 sm:h-16 md:h-18 bg-white/30 transform transition-all duration-300 group-hover:h-20" />

          {/* Text Content */}
          <div className="text-center sm:text-left">
            <p className="text-white/70 uppercase text-xs sm:text-sm tracking-wider mb-1 sm:mb-2 transition-all duration-300 group-hover:text-white/90">
              Have any questions or want a free estimate?
            </p>
            <p className="text-xl sm:text-2xl md:text-[26px] font-bold flex items-center gap-2 justify-center sm:justify-start">
              <MdPhone className="text-white/70 text-lg sm:text-xl animate-pulse" />
              (01) 300 330 755
            </p>
          </div>

          {/* Hover effect overlay */}
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>

        {/* Right CTA - Freight Booking */}
        <div
          className={`bg-[#1566aa] w-full lg:flex-1 text-white p-8 sm:p-12 md:p-16 lg:p-20 xl:p-26 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 transform transition-all duration-700 `}
        >
          {/* Icon with animation */}
          <div className="relative group">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-lg scale-0 group-hover:scale-150 transition-transform duration-500" />
            <FaPeopleCarryBox className="text-4xl sm:text-5xl md:text-6xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:text-white/90" />
          </div>

          {/* Divider - Hidden on mobile, shown on sm and up */}
          <div className="max-sm:hidden sm:block w-px h-12 sm:h-16 md:h-18 bg-white/30 transform transition-all duration-300 group-hover:h-20" />

          {/* Text Content */}
          <div className="text-center sm:text-left">
            <p className="text-white/70 uppercase text-xs sm:text-sm tracking-wider mb-1 sm:mb-2 transition-all duration-300 group-hover:text-white/90">
              Want a freight quote?
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <p className="text-base sm:text-lg md:text-xl font-semibold flex items-center gap-2">
                <MdMessage className="text-white/70 animate-bounce" />
                Book Now
              </p>
              <span className="max-sm:hidden sm:block text-white/30">or</span>
              <button
                onClick={scrollToTop}
                className="group/btn flex items-center gap-2 text-sm md:text-base font-medium bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              >
                Ask a Question
                <BsArrowRight className="text-sm transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;
