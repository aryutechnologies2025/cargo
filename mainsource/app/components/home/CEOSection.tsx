// import { Globe, Headset, Map, Plane } from "lucide-react";
// import Image from "next/image";

// // components/CEOSection.tsx (exact match)
// const CEOSection = () => {
//   const features = [
//     {
//       icon: <Globe className="w-5 h-5 hover:text-white text-slate-500 " />,
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//       icon: <Headset className="w-5 h-5 hover:text-white text-slate-500" />,
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//       icon: <Map className="w-5 h-5 hover:text-white text-slate-500" />,
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//       icon: <Plane className="w-5 h-5 hover:text-white text-slate-500" />,
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//   ];
//   return (
//     <section className="w-full py-16 bg-white">
//       <div className="max-w-5xl mx-auto px-4">
//         {/* stats */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <div key={index} className="flex items-center space-x-6">
//               {/* Diamond Icon Container */}
//               <div className="relative shrink-0">
//                 <div
//                   className={`w-12 h-12 rotate-45 rounded-xl bg-gray-100 flex items-center justify-center transition-colors duration-300 hover:bg-[#1874c1]`}
//                 >
//                   <div className="-rotate-45 ">{feature.icon}</div>
//                 </div>
//               </div>

//               {/* Description Text */}
//               <p className="text-[#888888] text-xs leading-relaxed">
//                 {feature.text}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Main content grid */}
//         <div className="flex gap-8 mt-36">
//           {/* Left content - CEO Statement */}
//           <div className=" space-y-4 w-1/3">
//             <h2 className="text-xl font-semibold">Our CEO's Statement</h2>
//             <p className="text-[#777777] text-xs leading-relaxed">
//               Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
//               commodo ligula eget dolor. Aenean massa. Cum sociis natoque
//               penatibus et magnis dis parturient montes, nascetur ridiculus mus.
//             </p>

//             <Image
//               src="/icons/sign.webp"
//               height={40}
//               width={40}
//               alt="sign"
//               unoptimized
//               className="object-contain w-40 h-28"
//             />
//           </div>

//           {/* Right sidebar */}
//           <div className="flex gap-5">
//             <div className="group">
//               <div className="relative h-52 w-72">
//                 <Image
//                   src="/images/our-ceo-statement1.jpg"
//                   alt="our-ceo-statement1"
//                   fill
//                   unoptimized
//                   className=""
//                 />

//                 <div className="absolute w-full h-full bg-black/70 flex flex-col justify-between p-5 opacity-0 group-hover:opacity-100 transition-all duration-700">
//                   <p className="text-white/80 text-sm leading-6">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Accusantium eum natus debitis corrupti in possimus.
//                   </p>
//                   <button className="bg-blue-500 px-5 py-2 text-white w-fit cursor-pointer text-sm">
//                     CONSULT NOW
//                   </button>
//                 </div>
//               </div>

//               <p className="mt-2 text-[#2A2A2A]  font-bold">
//                 Nonummy Nibh Euimod
//               </p>
//             </div>

//             <div className="group">
//               <div className="group">
//                 <div className="relative h-52 w-72">
//                   <Image
//                     src="/images/our-ceo-statement2.jpg"
//                     alt="our-ceo-statement2"
//                     fill
//                     unoptimized
//                     className=""
//                   />

//                   <div className="absolute w-full h-full bg-black/70 flex flex-col justify-between p-5 opacity-0 group-hover:opacity-100 transition-all duration-700">
//                     <p className="text-white/80 text-sm leading-6">
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Accusantium eum natus debitis corrupti in possimus.
//                     </p>
//                     <button className="bg-blue-500 px-5 py-2 text-white w-fit cursor-pointer text-sm">
//                       CONSULT NOW
//                     </button>
//                   </div>
//                 </div>

//                 <p className="mt-2 text-[#2A2A2A]  font-bold">
//                   Nonummy Nibh Euimod
//                 </p>
//               </div>
             
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CEOSection;


// import { Globe, Headset, Map, Plane } from "lucide-react";
// import Image from "next/image";

// const CEOSection = () => {
//   const features = [
//     {
//       icon: <Globe className="w-5 h-5 group-hover:text-white text-slate-500 transition-colors" />,
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//       icon: <Headset className="w-5 h-5 group-hover:text-white text-slate-500 transition-colors" />,
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//       icon: <Map className="w-5 h-5 group-hover:text-white text-slate-500 transition-colors" />,
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//       icon: <Plane className="w-5 h-5 group-hover:text-white text-slate-500 transition-colors" />,
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//   ];

//   return (
//     <section className="w-full py-12 md:py-20 bg-white overflow-hidden">
//       <div className="max-w-6xl mx-auto px-6">
        
//         {/* Top Features Stats */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
//           {features.map((feature, index) => (
//             <div key={index} className="flex items-center space-x-5 group">
//               {/* Diamond Icon Container */}
//               <div className="relative shrink-0">
//                 <div className="w-12 h-12 rotate-45 rounded-xl bg-gray-100 flex items-center justify-center transition-all duration-300 group-hover:bg-[#1874c1] group-hover:shadow-lg group-hover:shadow-blue-200">
//                   <div className="-rotate-45">{feature.icon}</div>
//                 </div>
//               </div>

//               {/* Description Text */}
//               <p className="text-[#888888] text-[13px] leading-relaxed">
//                 {feature.text}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Main content grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-20 md:mt-36">
          
//           {/* Left content - CEO Statement */}
//           <div className="space-y-6">
//             <div className="inline-block">
//               <h2 className="text-2xl font-bold text-[#2A2A2A]">Our CEO's Statement</h2>
//               <div className="h-1 w-12 bg-[#fdc300] mt-2"></div>
//             </div>
//             <p className="text-[#777777] text-sm leading-7">
//               Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
//               commodo ligula eget dolor. Aenean massa. Cum sociis natoque
//               penatibus et magnis dis parturient montes, nascetur ridiculus mus.
//             </p>

//             <Image
//               src="/icons/sign.webp"
//               height={100}
//               width={160}
//               alt="sign"
//               unoptimized
//               className="object-contain w-40 h-20 grayscale hover:grayscale-0 transition-all"
//             />
//           </div>

//           {/* Right Cards - Sidebar Content */}
//           <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            
//             {/* Card 1 */}
//             <div className="group cursor-default">
//               <div className="relative aspect-[4/3] w-full overflow-hidden shadow-md">
//                 <Image
//                   src="/images/our-ceo-statement1.jpg"
//                   alt="Logistics support"
//                   fill
//                   unoptimized
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 />

//                 <div className="absolute inset-0 bg-[#1874c1]/90 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
//                   <p className="text-white text-sm leading-6">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Accusantium eum natus debitis corrupti in possimus.
//                   </p>
//                   <button className="bg-white px-5 py-2 text-[#1874c1] font-bold w-fit text-xs uppercase tracking-wider hover:bg-[#fdc300] hover:text-white transition-colors">
//                     CONSULT NOW
//                   </button>
//                 </div>
//               </div>
//               <p className="mt-4 text-[#2A2A2A] font-bold text-lg group-hover:text-[#1874c1] transition-colors">
//                 Nonummy Nibh Euimod
//               </p>
//             </div>

//             {/* Card 2 */}
//             <div className="group cursor-default">
//               <div className="relative aspect-[4/3] w-full overflow-hidden shadow-md">
//                 <Image
//                   src="/images/our-ceo-statement2.jpg"
//                   alt="Delivery services"
//                   fill
//                   unoptimized
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 />

//                 <div className="absolute inset-0 bg-[#1874c1]/90 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
//                   <p className="text-white text-sm leading-6">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Accusantium eum natus debitis corrupti in possimus.
//                   </p>
//                   <button className="bg-white px-5 py-2 text-[#1874c1] font-bold w-fit text-xs uppercase tracking-wider hover:bg-[#fdc300] hover:text-white transition-colors">
//                     CONSULT NOW
//                   </button>
//                 </div>
//               </div>
//               <p className="mt-4 text-[#2A2A2A] font-bold text-lg group-hover:text-[#1874c1] transition-colors">
//                 Reliable Global Reach
//               </p>
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
import { Globe, Headset, Map, Plane, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const CEOSection = () => {
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' }, 
    [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);



  const features = [
    { icon: <Globe />, text: "Global Logistics Reach" },
    { icon: <Headset />, text: "24/7 Customer Support" },
    { icon: <Map />, text: "Real-time Track & Trace" },
    { icon: <Plane />, text: "Fast Air Freight Services" },
  ];

  const slides = [
    { id: 1, img: "/images/our-ceo-statement1.jpg", title: "Global Supply Chain" },
    { id: 2, img: "/images/our-ceo-statement2.jpg", title: "Reliable Road Freight" },
    { id: 3, img: "/images/our-ceo-statement1.jpg", title: "Warehouse Solutions" },
    { id: 4, img: "/images/our-ceo-statement2.jpg", title: "Express Door Delivery" },
  ];

  return (
    <section className="w-full  bg-white overflow-hidden  px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14 ">
      
      {/* Top Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-8 mb-10 sm:mb-20 md:mb-32">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-5 group">
              <div className="w-12 h-12 rotate-45 rounded-xl bg-gray-100 flex items-center justify-center transition-all group-hover:bg-[#1874c1] shrink-0 ">
                <div className="-rotate-45 text-slate-500 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
              </div>
              <p className="text-[#888888]  leading-relaxed font-karla">{feature.text}</p>
            </div>
          ))}
        </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-10 md:gap-16 items-start">
        
        {/* CEO Statement Section */}
        <div className="space-y-4 md:space-y-5 lg:space-y-6">
          <div className="inline-block">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[#2A2A2A] uppercase tracking-tight">Our CEO's Statement</h2>
            <div className="h-1 w-12 bg-[#fdc300] mt-2"></div>
          </div>
          <p className="text-[#777777] text-sm leading-7 font-karla">
            Our commitment to excellence drives us to provide seamless logistics 
            solutions that empower businesses to reach their full potential 
            across the globe.
          </p>
          <Image
            src="/icons/sign.webp"
            height={100}
            width={160}
            alt="sign"
            className="object-contain w-36 h-20 grayscale opacity-70"
          />
        </div>

        {/* Carousel Section */}
        <div className="lg:col-span-2 relative">
          <div className="flex justify-between items-end mb-6">
            <div className="hidden sm:block">
               <p className="text-[#1874c1] font-bold text-xs uppercase tracking-[0.2em]">Featured Services</p>
            </div>
            <div className="flex gap-2">
              <button onClick={scrollPrev} className="p-2.5 border border-gray-200 text-gray-400 hover:bg-[#1874c1] hover:text-white transition-all rounded-sm cursor-pointer bg-gray-100">
                <ChevronLeft className="size-3 md:size-5" />
              </button>
              <button onClick={scrollNext} className="p-2.5 border border-gray-200 text-gray-400 hover:bg-[#1874c1] hover:text-white transition-all rounded-sm cursor-pointer bg-gray-100">
                <ChevronRight className="size-3 md:size-5" />
              </button>
            </div>
          </div>

          {/* Carousel Viewport */}
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex -ml-6">
              {slides.map((slide) => (
                <div key={slide.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] min-w-0 pl-6 group">
                  <div className="relative aspect-4/3 w-full overflow-hidden shadow-lg rounded-sm">
                    <Image
                      src={slide.img}
                      alt={slide.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#1874c1]/90 flex flex-col justify-between p-7 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <p className="text-white text-sm leading-7 font-karla">
                        Explore our specialized solutions tailored for complex logistics management.
                      </p>
                      <button className="bg-white px-6 py-2.5 text-[#1874c1] font-bold text-[11px] uppercase tracking-widest hover:bg-[#fdc300] hover:text-white transition-all shadow-md cursor-pointer w-fit">
                        CONSULT NOW
                      </button>
                    </div>
                  </div>
                    <div className="mt-3 md:mt-5 border-l-4 border-transparent group-hover:border-[#fdc300] pl-0 group-hover:pl-4 transition-all duration-300">
                      <p className="text-[#2A2A2A] font-medium md:font-semibold lg:font-bold text-lg uppercase ">
                        {slide.title}
                      </p>
                    </div>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default CEOSection;