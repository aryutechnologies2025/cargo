// import Image from "next/image";
// import React from "react";

// const Hero = () => {
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-8 px-4 md:px-10 lg:px-20 py-10 items-start mb-20 max-w-6xl">
//       {/* Left Side: Mockup Images */}
//       <div className="relative flex flex-col items-center lg:items-end">
//         {/* Main Magazine Mockup */}
//         <div className="relative z-10 ">
//           <Image
//             src="/images/about-book-image.jpg"
//             alt="Logistics Fleet 2017"
//             className="w-full "
//             height={50}
//             width={50}
//           />
//         </div>
//       </div>

//       {/* Right Side: Welcome Text */}
//       <div className="space-y-6">
//         <h1 className="text-4xl  text-[#2A2A2A] leading-tight">
//           Welcome to Logistics <br />
//           International
//         </h1>

//         <div className="space-y-4 text-sm leading-6 text-[#777777]">
//           <p>
//             Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
//             turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere
//             a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam
//             porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
//           </p>
//           <p>
//             Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
//             euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat
//           </p>
//         </div>

//         <hr className="border-gray-200 border-[1.4px] mt-12" />

//         <blockquote className="italic text-gray-500  font-serif text-lg ">
//           " Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
//           fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
//           sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
//           sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
//           tempora incidunt ut labore et dolore magnam aliquam. "
//         </blockquote>

//         <hr className="border-gray-200 border-[1.4px] " />

//         <p className="text-lg tracking-[0.2em]  text-[#2A2A2A] text-center">
//           <span className="text-[#1874C1]  mr-2">JOIN US</span>
//           WE COVER THE WHOLE WORLD
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Hero;

'use client'
import Image from "next/image";
import { MdArrowForward, MdLocationOn } from "react-icons/md";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Hero = () => {

  const router=useRouter()

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14  overflow-hidden">
      {/* Left Side: Mockup Images */}
      <div
        className={`relative flex flex-col items-center lg:items-end transform transition-all duration-700 `}
      >
        {/* Image Container with animations */}
        <div className="relative z-10 group">
          <div className="relative overflow-hidden  transition-all duration-500">
            <Image
              src="/images/about-book-image.jpg"
              alt="Logistics Fleet 2017"
              className="w-full h-auto "
              height={600}
              width={600}
              priority
            />

          </div>

         
        </div>
      </div>

      {/* Right Side: Welcome Text */}
      <div
        className={`space-y-4 sm:space-y-5 md:space-y-6 transform transition-all duration-700 delay-300 `}
      >
        {/* Title with animation */}
        <div className="relative">
         
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-[#2A2A2A] leading-tight">
            Welcome to{" "}
            <span className="text-[#1874C1] relative inline-block">
              Logistics
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-linear-to-r from-[#1874C1] to-transparent"></div>
            </span>
            <br />
            International
          </h1>
        </div>

        {/* Description with animated paragraphs */}
        <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm leading-5 sm:leading-6 text-[#777777]">
          <p className="transform transition-all duration-500 hover:translate-x-1 hover:text-[#4A4A4A]">
            Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
            turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere
            a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam
            porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
          </p>
          <p className="transform transition-all duration-500 hover:translate-x-1 hover:text-[#4A4A4A]">
            Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
            euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat
          </p>
        </div>

       
          <hr className="border-gray-200 border-[1.4px] transition-all duration-500 hover:border-[#1874C1]/30" />

        {/* Quote with animations */}
        <blockquote className="relative italic text-gray-500 font-serif text-sm sm:text-base md:text-lg leading-relaxed px-4 sm:px-6 group">
          <FaQuoteLeft className="absolute -left-1 top-0 text-[#1874C1]/20 text-2xl sm:text-3xl transform transition-all duration-300 group-hover:scale-110 group-hover:text-[#1874C1]/30" />
          <span className="relative z-10 block pl-4 sm:pl-6">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
            aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam.
          </span>
          <FaQuoteRight className="absolute -right-1 bottom-0 text-[#1874C1]/20 text-2xl sm:text-3xl transform transition-all duration-300 group-hover:scale-110 group-hover:text-[#1874C1]/30" />
        </blockquote>

      
          <hr className="border-gray-200 border-[1.4px] transition-all duration-500 hover:border-[#1874C1]/30" />
         

        {/* CTA Text with animations */}
        <div className="text-center group cursor-pointer">
          <button onClick={()=>router.push('/contact')} className="text-sm sm:text-lg md:text-xl tracking-[0.2em] text-[#2A2A2A] flex items-center justify-center gap-2 sm:gap-3 cursor-pointer">
            <span className="text-[#1874C1] font-semibold md:font-bold relative inline-block">
              JOIN US
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#1874C1] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </span>
            <span className="w-1 h-1 bg-[#1874C1] rounded-full animate-pulse"></span>
            <span className="relative text-xs">
              WE COVER THE WHOLE WORLD
              <MdLocationOn className="absolute -right-5 top-1/2 -translate-y-1/2 text-[#1874C1] text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
            </span>
          </button>

          {/* Animated underline */}
          <div className="flex justify-center mt-2">
            <div className="w-12 h-0.5 bg-linear-to-r from-transparent via-[#1874C1] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Hero;
