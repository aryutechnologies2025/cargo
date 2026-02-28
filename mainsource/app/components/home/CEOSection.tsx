
// 'use client'

// import React, { useEffect, useState, useCallback } from "react";
// import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay';
// import { Globe, Headset, Map, Plane, ChevronLeft, ChevronRight } from "lucide-react";
// import Image from "next/image";

// const CEOSection = () => {
  
//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     { loop: true, align: 'start' }, 
//     [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]
//   );

//   const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
//   const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);



//   const features = [
//     { icon: <Globe />, text: "Global Logistics Reach" },
//     { icon: <Headset />, text: "24/7 Customer Support" },
//     { icon: <Map />, text: "Real-time Track & Trace" },
//     { icon: <Plane />, text: "Fast Air Freight Services" },
//   ];

//   const slides = [
//     { id: 1, img: "/images/our-ceo-statement1.jpg", title: "Global Supply Chain" },
//     { id: 2, img: "/images/our-ceo-statement2.jpg", title: "Reliable Road Freight" },
//     { id: 3, img: "/images/our-ceo-statement1.jpg", title: "Warehouse Solutions" },
//     { id: 4, img: "/images/our-ceo-statement2.jpg", title: "Express Door Delivery" },
//   ];

//   return (
//     <section className="w-full  bg-white overflow-hidden  px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14 ">
      
//       {/* Top Features */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-8 mb-10 sm:mb-20 md:mb-32">
//           {features.map((feature, index) => (
//             <div key={index} className="flex items-center space-x-5 group">
//               <div className="w-12 h-12 rotate-45 rounded-xl bg-gray-100 flex items-center justify-center transition-all group-hover:bg-[#027cc2] shrink-0 ">
//                 <div className="-rotate-45 text-slate-500 group-hover:text-white transition-colors">
//                   {feature.icon}
//                 </div>
//               </div>
//               <p className="text-[#888888]  leading-relaxed font-karla">{feature.text}</p>
//             </div>
//           ))}
//         </div>

//       {/* Main Content Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-10 md:gap-16 items-start">
        
//         {/* CEO Statement Section */}
//         <div className="space-y-4 md:space-y-5 lg:space-y-6">
//           <div className="inline-block">
//             <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[#2A2A2A] uppercase tracking-tight">Our CEO's Statement</h2>
//             <div className="h-1 w-12 bg-[#fdc300] mt-2"></div>
//           </div>
//           <p className="text-[#777777] text-sm leading-7 font-karla">
//             Our commitment to excellence drives us to provide seamless logistics 
//             solutions that empower businesses to reach their full potential 
//             across the globe.
//           </p>
//           <Image
//             src="/icons/sign.webp"
//             height={100}
//             width={160}
//             alt="sign"
//             className="object-contain w-36 h-20 grayscale opacity-70"
//           />
//         </div>

//         {/* Carousel Section */}
//         <div className="lg:col-span-2 relative">
//           <div className="flex justify-between items-end mb-6">
//             <div className="hidden sm:block">
//                <p className="text-[#027cc2] font-bold text-xs uppercase tracking-[0.2em]">Featured Services</p>
//             </div>
//             <div className="flex gap-2">
//               <button onClick={scrollPrev} className="p-2.5 border border-gray-200 text-gray-400 hover:bg-[#027cc2] hover:text-white transition-all rounded-sm cursor-pointer bg-gray-100">
//                 <ChevronLeft className="size-3 md:size-5" />
//               </button>
//               <button onClick={scrollNext} className="p-2.5 border border-gray-200 text-gray-400 hover:bg-[#027cc2] hover:text-white transition-all rounded-sm cursor-pointer bg-gray-100">
//                 <ChevronRight className="size-3 md:size-5" />
//               </button>
//             </div>
//           </div>

//           {/* Carousel Viewport */}
//           <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
//             <div className="flex -ml-6">
//               {slides.map((slide) => (
//                 <div key={slide.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] min-w-0 pl-6 group">
//                   <div className="relative aspect-4/3 w-full overflow-hidden shadow-lg rounded-sm">
//                     <Image
//                       src={slide.img}
//                       alt={slide.title}
//                       fill
//                       className="object-cover transition-transform duration-700 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-[#027cc2]/90 flex flex-col justify-between p-7 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
//                       <p className="text-white text-sm leading-7 font-karla">
//                         Explore our specialized solutions tailored for complex logistics management.
//                       </p>
//                       <button className="bg-white px-6 py-2.5 text-[#027cc2] font-bold text-[11px] uppercase tracking-widest hover:bg-[#fdc300] hover:text-white transition-all shadow-md cursor-pointer w-fit">
//                         CONSULT NOW
//                       </button>
//                     </div>
//                   </div>
//                     <div className="mt-3 md:mt-5 border-l-4 border-transparent group-hover:border-[#fdc300] pl-0 group-hover:pl-4 transition-all duration-300">
//                       <p className="text-[#2A2A2A] font-medium md:font-semibold lg:font-bold text-lg uppercase ">
//                         {slide.title}
//                       </p>
//                     </div>
//                 </div>
//               ))}
//             </div>
//           </div>

          
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CEOSection;











'use client'

import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Globe, Headset, Map, Plane, ChevronLeft, ChevronRight, Ship, Truck, Package, Clock } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const CEOSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', breakpoints: { '(min-width: 640px)': { align: 'start' } } }, 
    [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  const features = [
    { icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />, text: "Global Logistics Reach", desc: "200+ countries" },
    { icon: <Headset className="w-5 h-5 md:w-6 md:h-6" />, text: "24/7 Customer Support", desc: "Always available" },
    { icon: <Map className="w-5 h-5 md:w-6 md:h-6" />, text: "Real-time Track & Trace", desc: "Live updates" },
    { icon: <Plane className="w-5 h-5 md:w-6 md:h-6" />, text: "Fast Air Freight", desc: "Express delivery" },
  ];

  const slides = [
    { id: 1, img: "/images/our-ceo-statement1.jpg", title: "Global Supply Chain", desc: "End-to-end logistics solutions" },
    { id: 2, img: "/images/our-ceo-statement2.jpg", title: "Reliable Road Freight", desc: "Nationwide coverage" },
    { id: 3, img: "/images/our-ceo-statement1.jpg", title: "Warehouse Solutions", desc: "Smart storage facilities" },
    { id: 4, img: "/images/our-ceo-statement2.jpg", title: "Express Door Delivery", desc: "Last mile excellence" },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 overflow-hidden px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14">
      
      {/* Top Features with improved design */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-7 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
        {features.map((feature, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start space-x-4">
              <div className="relative">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#057dc3]/10 to-[#057dc3]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-[#057dc3] group-hover:text-[#057dc3] transition-colors">
                    {feature.icon}
                  </div>
                </div>
                {/* Decorative dot */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#fdc300] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="flex-1">
                <p className="text-gray-800 font-semibold text-sm sm:text-base leading-tight">{feature.text}</p>
                <p className="text-gray-400 text-xs sm:text-sm mt-1">{feature.desc}</p>
              </div>
            </div>
            {/* Progress bar on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#057dc3] to-[#fdc300] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl"></div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
        
        {/* CEO Statement Section - Enhanced */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-5 md:space-y-6 lg:space-y-7"
        >
          <div className="inline-block">
            <span className="text-[#057dc3] font-bold text-xs uppercase tracking-[0.3em]">Leadership</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2A2A2A] mt-2 leading-tight">
              Our CEO's <br />
              <span className="text-[#057dc3]">Statement</span>
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-[#fdc300] to-[#057dc3] mt-4 rounded-full"></div>
          </div>
          
          <div className="relative">
            {/* Quote mark decoration */}
            <div className="absolute -top-4 -left-2 text-6xl text-[#057dc3]/10 font-serif">"</div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-karla relative z-10 pl-4 border-l-4 border-[#fdc300]">
              Our commitment to excellence drives us to provide seamless logistics 
              solutions that empower businesses to reach their full potential 
              across the globe. We believe in building lasting partnerships through 
              reliability and innovation.
            </p>
          </div>
          
          {/* CEO Info */}
          <div className="flex items-center space-x-4 pt-2">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#057dc3] to-[#0469a5] flex items-center justify-center text-white font-bold text-xl">
              JD
            </div>
            <div>
              <p className="font-bold text-gray-800">John Doe</p>
              <p className="text-sm text-gray-500">Chief Executive Officer</p>
            </div>
          </div>

          <Image
            src="/icons/sign.webp"
            height={100}
            width={160}
            alt="CEO Signature"
            className="object-contain w-36 h-20 opacity-70 hover:opacity-100 transition-opacity"
          />

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 pt-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-[#057dc3]">25+</p>
              <p className="text-xs text-gray-500">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#057dc3]">150+</p>
              <p className="text-xs text-gray-500">Countries</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#057dc3]">50K+</p>
              <p className="text-xs text-gray-500">Deliveries</p>
            </div>
          </div>
        </motion.div>

        {/* Carousel Section - Enhanced */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-2 relative"
        >
          {/* Header with controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <span className="text-[#057dc3] font-bold text-xs uppercase tracking-[0.2em]">Featured Services</span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mt-1">What We Offer</h3>
            </div>
            
            {/* Custom Navigation */}
            <div className="flex items-center gap-3">
              {/* Slide indicators */}
              <div className="flex gap-1.5">
                {scrollSnaps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === selectedIndex 
                        ? 'w-8 bg-[#057dc3]' 
                        : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Navigation buttons */}
              <div className="flex gap-2">
                <button 
                  onClick={scrollPrev} 
                  className="p-2.5 border border-gray-200 text-gray-400 hover:bg-[#057dc3] hover:text-white hover:border-[#057dc3] transition-all rounded-lg bg-white shadow-sm hover:shadow-md"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="size-4 md:size-5" />
                </button>
                <button 
                  onClick={scrollNext} 
                  className="p-2.5 border border-gray-200 text-gray-400 hover:bg-[#057dc3] hover:text-white hover:border-[#057dc3] transition-all rounded-lg bg-white shadow-sm hover:shadow-md"
                  aria-label="Next slide"
                >
                  <ChevronRight className="size-4 md:size-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Viewport */}
          <div className="overflow-hidden rounded-xl" ref={emblaRef}>
            <div className="flex -ml-4 sm:-ml-5 md:-ml-6">
              {slides.map((slide) => (
                <div key={slide.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] min-w-0 pl-4 sm:pl-5 md:pl-6 group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src={slide.img}
                      alt={slide.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Hover Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <p className="text-white text-xs sm:text-sm mb-3 line-clamp-2">
                        {slide.desc}
                      </p>
                      <button className="bg-[#fdc300] hover:bg-[#e5b100] text-gray-900 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-bold text-[10px] sm:text-xs uppercase tracking-wider transition-all shadow-lg w-fit hover:shadow-xl hover:scale-105">
                        Learn More
                      </button>
                    </div>
                  </div>
                  
                  {/* Slide Title */}
                  <div className="mt-3 sm:mt-4 border-l-3 border-transparent group-hover:border-[#fdc300] pl-3 sm:pl-4 group-hover:pl-5 transition-all duration-300">
                    <p className="text-gray-800 font-semibold text-sm sm:text-base md:text-lg uppercase tracking-wide">
                      {slide.title}
                    </p>
                    <p className="text-gray-400 text-xs mt-1 max-sm:hidden sm:block">{slide.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Progress Bar */}
          <div className="mt-6 flex justify-center sm:justify-start">
            <div className="flex gap-1.5">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === selectedIndex 
                      ? 'w-8 bg-[#057dc3]' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      
    </section>
  );
};

export default CEOSection;