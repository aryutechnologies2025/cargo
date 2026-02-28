// "use client";
// import Image from "next/image";
// import { useEffect, useState, useRef } from "react";
// import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

// const clientsList = [
//   "/icons/client1.webp",
//   "/icons/client2.webp",
//   "/icons/client3.webp",
//   "/icons/client4.webp",
//   "/icons/client5.webp",
// ];

// const testimonials = [
//   {
//     id: 1,
//     image: "/images/testimonial1.jpg",
//     name: "Angelina",
//     role: "Director of Ramsey & Co",
//     quote:
//       "Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml ka dhdudu pochu turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.",
//   },
//   {
//     id: 2,
//     image: "/images/testimonial2.jpg",
//     name: "Michael Chen",
//     role: "CEO of TechStart",
//     quote:
//       "Exceptional service and attention to detail. The team went above and beyond to ensure our cargo arrived safely and on time. Highly recommended for anyone needing reliable logistics solutions.",
//   },
//   {
//     id: 3,
//     image: "/images/testimonial3.jpg",
//     name: "Sarah Williams",
//     role: "Operations Manager at Global Trade",
//     quote:
//       "Working with this company has transformed our supply chain efficiency. Their professional approach and dedication to customer satisfaction is unmatched in the industry.",
//   },
  
// ];

// const TestimonialSection = () => {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

//   // Auto-play testimonials
//   useEffect(() => {
//     startAutoPlay();

//     return () => {
//       if (autoPlayRef.current) {
//         clearInterval(autoPlayRef.current);
//       }
//     };
//   }, []); // Empty dependency array - runs once on mount

//   const startAutoPlay = () => {
//     // Clear existing interval
//     if (autoPlayRef.current) {
//       clearInterval(autoPlayRef.current);
//     }

//     // Set new interval
//     autoPlayRef.current = setInterval(() => {
//       setCurrentTestimonial((prev) =>
//         prev === testimonials.length - 1 ? 0 : prev + 1,
//       );
//     }, 4000); // Change every 4 seconds
//   };

//   const handlePrevTestimonial = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentTestimonial((prev) =>
//       prev === 0 ? testimonials.length - 1 : prev - 1,
//     );

//     // Restart auto-play after manual navigation
//     startAutoPlay();

//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const handleNextTestimonial = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentTestimonial((prev) =>
//       prev === testimonials.length - 1 ? 0 : prev + 1,
//     );

//     // Restart auto-play after manual navigation
//     startAutoPlay();

//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const handleDotClick = (index: number) => {
//     if (isAnimating || index === currentTestimonial) return;
//     setIsAnimating(true);
//     setCurrentTestimonial(index);

//     // Restart auto-play after manual navigation
//     startAutoPlay();

//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   // Infinite scroll for clients
//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     if (!scrollContainer) return;

//     let scrollAmount = 0;
//     const scrollStep = 1;

//     const scroll = () => {
//       if (!scrollContainer) return;

//       scrollAmount += scrollStep;
//       if (scrollAmount >= scrollContainer.scrollWidth / 2) {
//         scrollAmount = 0;
//       }

//       scrollContainer.scrollLeft = scrollAmount;
//     };

//     const interval = setInterval(scroll, 30);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="w-full  py-5 sm:py-9 md:py-14 bg-white overflow-hidden">
//       {/* Testimonial Carousel */}
//       <div className="max-w-3xl mx-auto px-4 sm:px-6">
//         <div className="relative">
//           {/* Navigation Arrows - Hidden on mobile, shown on tablet/desktop */}
//           <button
//             onClick={handlePrevTestimonial}
//             className="max-md:hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 w-8 h-8 rounded-full bg-gray-100 hover:bg-[#027cc2] text-gray-600 hover:text-white items-center justify-center transition-all duration-300 z-10 cursor-pointer"
//             aria-label="Previous testimonial"
//           >
//             <MdArrowForwardIos className="text-sm rotate-180" />
//           </button>

//           <button
//             onClick={handleNextTestimonial}
//             className="max-md:hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 w-8 h-8 rounded-full bg-gray-100 hover:bg-[#027cc2] text-gray-600 hover:text-white items-center justify-center transition-all duration-300 z-10 cursor-pointer"
//             aria-label="Next testimonial"
//           >
//             <MdArrowForwardIos className="text-sm " />
//           </button>

//           {/* Testimonial Content with Animation */}
//           <div
//             key={currentTestimonial}
//             className={`transition-all duration-500 transform `}
//           >
//             <div className="flex justify-center items-center gap-2 sm:gap-4">
//               <hr className="border-gray-200 flex-1 transition-all duration-500 group-hover:border-[#027cc2]" />

//               <div className="relative group">
//                 <Image
//                   src={testimonials[currentTestimonial].image}
//                   alt={testimonials[currentTestimonial].name}
//                   width={60}
//                   height={60}
//                   className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-transparent group-hover:border-[#027cc2] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
//                 />
//                 {/* Glow effect */}
//                 <div className="absolute inset-0 bg-[#027cc2]/20 rounded-full blur-md scale-0 group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100 -z-10" />
//               </div>

//               <hr className="border-gray-200 flex-1 transition-all duration-500 group-hover:border-[#027cc2]" />
//             </div>

//             {/* Author */}
//             <h3 className="text-[#777777] text-[10px] sm:text-xs text-center font-semibold mt-4 sm:mt-6 md:mt-8 transition-all duration-300 hover:scale-105">
//               <span className="text-black font-bold text-xs sm:text-sm">
//                 {" "}
//                 {testimonials[currentTestimonial].name},
//               </span>{" "}
//               {testimonials[currentTestimonial].role}
//             </h3>

//             {/* Quote Text */}
//             <p className="text-[#777777]/80 text-xs sm:text-sm text-center leading-5 sm:leading-6 md:leading-loose mt-3 sm:mt-4 md:mt-5 px-2 sm:px-4">
//               “ {testimonials[currentTestimonial].quote} ”
//             </p>
//           </div>

//           {/* Dots Indicator */}
//           <div className="flex justify-center gap-2 mt-4 sm:mt-6">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleDotClick(index)}
//                 className={`transition-all duration-300 ${
//                   currentTestimonial === index
//                     ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-[#027cc2]"
//                     : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-300 hover:bg-[#027cc2]/50"
//                 } rounded-full`}
//                 aria-label={`Go to testimonial ${index + 1}`}
//               />
//             ))}
//           </div>

//           {/* Mobile Navigation Buttons */}
//           <div className="flex justify-center gap-4 mt-4 md:hidden">
//             <button
//               onClick={handlePrevTestimonial}
//               className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#027cc2] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 group"
//               aria-label="Previous testimonial"
//             >
//               <MdArrowBackIos className="text-xs group-hover:scale-110 transition-transform" />
//             </button>
//             <button
//               onClick={handleNextTestimonial}
//               className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#027cc2] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 group"
//               aria-label="Next testimonial"
//             >
//               <MdArrowForwardIos className="text-xs group-hover:scale-110 transition-transform" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Clients Carousel */}
//       <div className="mt-8 sm:mt-10 md:mt-14 relative">
//         <div className="absolute left-0 top-0 bottom-0 w-12 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
//         <div className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

//         <div
//           ref={scrollRef}
//           className="flex items-center gap-8 sm:gap-12  overflow-x-auto scrollbar-hide px-4"
//           style={{ scrollBehavior: "auto" }}
//         >
//           {/* Double the clients for infinite scroll effect */}
//           {[...clientsList, ...clientsList, ...clientsList].map(
//             (item, index) => (
//               <div
//                 key={index}
//                 className="shrink-0 "
//               >
//                 <Image
//                   src={item}
//                   alt={`client ${index + 1}`}
//                   width={200}
//                   height={80}
//                   className="w-24 sm:w-32 md:w-40 lg:w-52 h-12 sm:h-14 md:h-16 lg:h-20 object-contain "
//                 />
//               </div>
//             ),
//           )}
//         </div>
//       </div>

//       {/* Add custom scrollbar hiding style */}
//       <style jsx>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default TestimonialSection;










"use client";
import Image from "next/image";
import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { MdArrowBackIos, MdArrowForwardIos, MdFormatQuote } from "react-icons/md";
import { FiStar, FiAward } from "react-icons/fi";
import { BsChatQuoteFill } from "react-icons/bs";

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
    rating: 5,
    quote:
      "Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml ka dhdudu pochu turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.",
  },
  {
    id: 2,
    image: "/images/testimonial2.jpg",
    name: "Janani",
    role: "CEO of TechStart",
    rating: 5,
    quote:
      "Exceptional service and attention to detail. The team went above and beyond to ensure our cargo arrived safely and on time. Highly recommended for anyone needing reliable logistics solutions.",
  },
  {
    id: 3,
    image: "/images/testimonial3.jpg",
    name: "Williams",
    role: "Operations Manager at Global Trade",
    rating: 5,
    quote:
      "Working with this company has transformed our supply chain efficiency. Their professional approach and dedication to customer satisfaction is unmatched in the industry.",
  },
];

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Animation variants
  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  const fadeInUp: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      setDirection(1);
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [startAutoPlay]);

  const handlePrevTestimonial = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    startAutoPlay();
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, startAutoPlay]);

  const handleNextTestimonial = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
    startAutoPlay();
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, startAutoPlay]);

  const handleDotClick = useCallback((index: number) => {
    if (isAnimating || index === currentTestimonial) return;
    setIsAnimating(true);
    setDirection(index > currentTestimonial ? 1 : -1);
    setCurrentTestimonial(index);
    startAutoPlay();
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, currentTestimonial, startAutoPlay]);

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
    <section className="w-full bg-gradient-to-b from-white to-gray-50 overflow-hidden  py-5 sm:py-9 md:py-14">
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center mb-12 sm:mb-16 px-4"
      >
        <span className="text-[#057dc3] font-bold text-xs sm:text-sm uppercase tracking-[0.3em]">
          Testimonials
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A2A2A] mt-3 mb-4">
          What Our <span className="text-[#057dc3]">Clients Say</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#fdc300] to-[#057dc3] mx-auto rounded-full"></div>
      </motion.div>

      {/* Testimonial Carousel */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="relative">
          {/* Decorative Quote Icon */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-6xl text-[#057dc3]/10">
            <BsChatQuoteFill />
          </div>

          {/* Navigation Arrows - Desktop */}
          <button
            onClick={handlePrevTestimonial}
            className="max-md:hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 w-10 h-10 rounded-full bg-white shadow-lg hover:bg-[#057dc3] text-gray-600 hover:text-white items-center justify-center transition-all duration-300 z-20 cursor-pointer group"
            aria-label="Previous testimonial"
          >
            <MdArrowBackIos className="text-sm group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={handleNextTestimonial}
            className="max-md:hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 w-10 h-10 rounded-full bg-white shadow-lg hover:bg-[#057dc3] text-gray-600 hover:text-white items-center justify-center transition-all duration-300 z-20 cursor-pointer group"
            aria-label="Next testimonial"
          >
            <MdArrowForwardIos className="text-sm group-hover:scale-110 transition-transform" />
          </button>

          {/* Testimonial Content with Animation */}
          <div className="relative overflow-hidden py-8">
            <AnimatePresence
              initial={false}
              custom={direction}
              mode="wait"
            >
              <motion.div
                key={currentTestimonial}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 }
                }}
                className="w-full"
              >
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
                  {/* Profile Image with Rating */}
                  <div className="flex flex-col items-center">
                    <div className="relative group mb-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#057dc3] to-[#0469a5] rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                      <Image
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        width={100}
                        height={100}
                        className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-white shadow-xl group-hover:border-[#057dc3] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                      />
                    </div>

                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className="w-4 h-4 fill-[#fdc300] text-[#fdc300]"
                        />
                      ))}
                    </div>

                    {/* Name & Role */}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-[#057dc3] text-sm sm:text-base font-medium mb-6">
                      {testimonials[currentTestimonial].role}
                    </p>

                    {/* Quote Text */}
                    <div className="relative">
                      <MdFormatQuote className="absolute -top-4 -left-2 text-4xl text-[#057dc3]/20 rotate-180" />
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center italic max-w-2xl mx-auto">
                        "{testimonials[currentTestimonial].quote}"
                      </p>
                      <MdFormatQuote className="absolute -bottom-4 -right-2 text-4xl text-[#057dc3]/20" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`group relative transition-all duration-300 ${
                  currentTestimonial === index
                    ? "w-8 h-2.5"
                    : "w-2.5 h-2.5 hover:w-4"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <span
                  className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    currentTestimonial === index
                      ? "bg-gradient-to-r from-[#057dc3] to-[#0469a5]"
                      : "bg-gray-300 group-hover:bg-[#057dc3]/50"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6 md:hidden">
            <button
              onClick={handlePrevTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-lg hover:bg-[#057dc3] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 group"
              aria-label="Previous testimonial"
            >
              <MdArrowBackIos className="text-sm group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={handleNextTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-lg hover:bg-[#057dc3] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 group"
              aria-label="Next testimonial"
            >
              <MdArrowForwardIos className="text-sm group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>

   

      {/* Clients Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12 sm:mt-16 relative"
      >
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex items-center gap-8 sm:gap-12 overflow-x-auto scrollbar-hide px-4"
          style={{ scrollBehavior: "auto" }}
        >
          {/* Triple the clients for smooth infinite scroll */}
          {[...clientsList, ...clientsList, ...clientsList].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="shrink-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={item}
                alt={`client ${index + 1}`}
                width={200}
                height={80}
                className="w-24 sm:w-32 md:w-40 lg:w-52 h-12 sm:h-14 md:h-16 lg:h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

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