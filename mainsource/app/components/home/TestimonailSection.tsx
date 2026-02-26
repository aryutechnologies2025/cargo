// import Image from "next/image";

// const clientsList = [
//   "/icons/client1.webp",
//   "/icons/client2.webp",
//   "/icons/client3.webp",
//   "/icons/client4.webp",
//   "/icons/client5.webp",
// ];

// const TestimonialSection = () => {
//   return (
//     <section className="w-full py-16 bg-white">
//       {/* testimonail */}
//       <div className="max-w-3xl mx-auto px-4">
//         <div className="flex justify-center items-center">
//           <hr className="border-gray-200 w-full" />
//           <Image
//             src="/images/testimonial1.jpg"
//             alt="testimonial image"
//             width={40}
//             height={40}
//             className="w-18 h-18 rounded-full object-cover"
//           />
//           <hr className="border-gray-200 w-full" />
//         </div>

//         {/* Author */}
//         <h3 className="text-[#777777] text-xs text-center font-semibold mt-8">
//           <span className="text-black font-bold text-sm"> Angelina,</span>{" "}
//           Director of Ramsey & Co
//         </h3>

//         {/* Quote Text */}
//         <p className="text-[#777777]/80 text-sm text-center leading-loose mt-5">
//           “ Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml ka
//           dhdudu pochu turpis. Suspendisse urna nibh, viverra non, semper
//           suscipit, posuere a, pede. Donec nec justo eget felis facilisis
//           fermentum. Aliquam porttitor mauris sit amet orci. ”
//         </p>
//       </div>

//       {/* clients */}

//       <div className="flex items-center justify-center gap-18 mt-14 overflow-hidden overflow-x-auto max-w-5xl mx-auto">
//         {clientsList.map((item, index) => (
//           <Image
//             key={index}
//             src={item}
//             alt="clients"
//             width={40}
//             height={40}
//             className="w-52 h-20 object-contain"
//           />
//         ))}
//         {clientsList.map((item, index) => (
//           <Image
//             key={index}
//             src={item}
//             alt="clients"
//             width={40}
//             height={40}
//             className="w-52 h-20 object-contain"
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;

"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const clientsList = [
  "/icons/client1.webp",
  "/icons/client2.webp",
  "/icons/client3.webp",
  "/icons/client4.webp",
  "/icons/client5.webp",
];

const testimonials = [
  {
    id: 1,
    image: "/images/testimonial1.jpg",
    name: "Angelina",
    role: "Director of Ramsey & Co",
    quote:
      "Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml ka dhdudu pochu turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.",
  },
  {
    id: 2,
    image: "/images/testimonial2.jpg",
    name: "Michael Chen",
    role: "CEO of TechStart",
    quote:
      "Exceptional service and attention to detail. The team went above and beyond to ensure our cargo arrived safely and on time. Highly recommended for anyone needing reliable logistics solutions.",
  },
  {
    id: 3,
    image: "/images/testimonial3.jpg",
    name: "Sarah Williams",
    role: "Operations Manager at Global Trade",
    quote:
      "Working with this company has transformed our supply chain efficiency. Their professional approach and dedication to customer satisfaction is unmatched in the industry.",
  },
  
];

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play testimonials
  useEffect(() => {
    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []); // Empty dependency array - runs once on mount

  const startAutoPlay = () => {
    // Clear existing interval
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    // Set new interval
    autoPlayRef.current = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1,
      );
    }, 4000); // Change every 4 seconds
  };

  const handlePrevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );

    // Restart auto-play after manual navigation
    startAutoPlay();

    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );

    // Restart auto-play after manual navigation
    startAutoPlay();

    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentTestimonial) return;
    setIsAnimating(true);
    setCurrentTestimonial(index);

    // Restart auto-play after manual navigation
    startAutoPlay();

    setTimeout(() => setIsAnimating(false), 500);
  };

  // Infinite scroll for clients
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 1;

    const scroll = () => {
      if (!scrollContainer) return;

      scrollAmount += scrollStep;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }

      scrollContainer.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full  py-5 sm:py-9 md:py-14 bg-white overflow-hidden">
      {/* Testimonial Carousel */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="relative">
          {/* Navigation Arrows - Hidden on mobile, shown on tablet/desktop */}
          <button
            onClick={handlePrevTestimonial}
            className="max-md:hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 w-8 h-8 rounded-full bg-gray-100 hover:bg-[#1874C1] text-gray-600 hover:text-white items-center justify-center transition-all duration-300 z-10 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <MdArrowForwardIos className="text-sm rotate-180" />
          </button>

          <button
            onClick={handleNextTestimonial}
            className="max-md:hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 w-8 h-8 rounded-full bg-gray-100 hover:bg-[#1874C1] text-gray-600 hover:text-white items-center justify-center transition-all duration-300 z-10 cursor-pointer"
            aria-label="Next testimonial"
          >
            <MdArrowForwardIos className="text-sm " />
          </button>

          {/* Testimonial Content with Animation */}
          <div
            key={currentTestimonial}
            className={`transition-all duration-500 transform `}
          >
            <div className="flex justify-center items-center gap-2 sm:gap-4">
              <hr className="border-gray-200 flex-1 transition-all duration-500 group-hover:border-[#1874C1]" />

              <div className="relative group">
                <Image
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  width={60}
                  height={60}
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-transparent group-hover:border-[#1874C1] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-[#1874C1]/20 rounded-full blur-md scale-0 group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100 -z-10" />
              </div>

              <hr className="border-gray-200 flex-1 transition-all duration-500 group-hover:border-[#1874C1]" />
            </div>

            {/* Author */}
            <h3 className="text-[#777777] text-[10px] sm:text-xs text-center font-semibold mt-4 sm:mt-6 md:mt-8 transition-all duration-300 hover:scale-105">
              <span className="text-black font-bold text-xs sm:text-sm">
                {" "}
                {testimonials[currentTestimonial].name},
              </span>{" "}
              {testimonials[currentTestimonial].role}
            </h3>

            {/* Quote Text */}
            <p className="text-[#777777]/80 text-xs sm:text-sm text-center leading-5 sm:leading-6 md:leading-loose mt-3 sm:mt-4 md:mt-5 px-2 sm:px-4">
              “ {testimonials[currentTestimonial].quote} ”
            </p>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4 sm:mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all duration-300 ${
                  currentTestimonial === index
                    ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-[#1874C1]"
                    : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-300 hover:bg-[#1874C1]/50"
                } rounded-full`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-4 md:hidden">
            <button
              onClick={handlePrevTestimonial}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#1874C1] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 group"
              aria-label="Previous testimonial"
            >
              <MdArrowBackIos className="text-xs group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={handleNextTestimonial}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#1874C1] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 group"
              aria-label="Next testimonial"
            >
              <MdArrowForwardIos className="text-xs group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Clients Carousel */}
      <div className="mt-8 sm:mt-10 md:mt-14 relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex items-center gap-8 sm:gap-12  overflow-x-auto scrollbar-hide px-4"
          style={{ scrollBehavior: "auto" }}
        >
          {/* Double the clients for infinite scroll effect */}
          {[...clientsList, ...clientsList, ...clientsList].map(
            (item, index) => (
              <div
                key={index}
                className="shrink-0 "
              >
                <Image
                  src={item}
                  alt={`client ${index + 1}`}
                  width={200}
                  height={80}
                  className="w-24 sm:w-32 md:w-40 lg:w-52 h-12 sm:h-14 md:h-16 lg:h-20 object-contain "
                />
              </div>
            ),
          )}
        </div>
      </div>

      {/* Add custom scrollbar hiding style */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;
