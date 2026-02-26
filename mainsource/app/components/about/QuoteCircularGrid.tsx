// import React from "react";
// import { FaComputer } from "react-icons/fa6";
// import { RiSafe2Fill } from "react-icons/ri";

// const QuoteCircularGrid = () => {
//   return (
//     <section
//       className="relative overflow-hidden bg-cover bg-fixed py-20"
//       style={{
//         backgroundImage: "url('/images/about-quote-circularGrid-bg-image.jpg')",
//       }}
//     >
//       {" "}
//       <div className="absolute inset-0 bg-[#e4fcff]/90" />
//       <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-3 items-center">
//         {/* Quote Side */}
//         <div className="w-3/4">
//           <h2 className="text-2xl text-[#2A2A2A] leading-snug mb-2">
//             The line between disorder and order lies in logistics....
//           </h2>
//           <p className="font-bold text-lg text-[#2F3436] mb-6">— SUN TZU</p>
//           <p className="text-sm text-[#777777] leading-relaxed">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
//             tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Amet
//             consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
//             mattis.
//           </p>
//         </div>

//         {/* Circular Grid Side */}
//         <div className="relative flex justify-center">
//           <div className="grid grid-cols-2 gap-1 w-80 h-80 md:w-[550px] md:h-[550px] rounded-full overflow-hidden ">
//             {/* Top Left: Blue Icon */}
//             <div
//               className="bg-[#1874c1] flex flex-col justify-center p-2
//              text-center text-white"
//             >
//               <div className=" flex justify-end items-end">
//                 <FaComputer className="text-white text-5xl" />
//               </div>

//               <div className="flex justify-end">
//                 <p className="text-lg  text-end w-[80%] ">
//                   Managing everything from source to destination is Logistics...
//                 </p>
//               </div>
//             </div>

//             {/* Top Right: Worker Image */}
//             <div className="bg-gray-200">
//               <img
//                 src="/images/award3.jpg"
//                 alt="Worker"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Bottom Left: Success Image */}
//             <div className="bg-gray-200">
//               <img
//                 src="/images/award2.jpg"
//                 alt="Success"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Bottom Right: Blue Icon */}
//             <div className="bg-[#1874c1] flex flex-col  justify-center p-2 text-center text-white">
//               {/* <div className=" flex justify-end items-end"> */}
//               <RiSafe2Fill className="text-white text-5xl" />
//               {/* </div> */}
//               <p className="text-lg w-2/3 text-start ">
//                 Safety & Security of lives – Our guiding force
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default QuoteCircularGrid;

import { FaComputer } from "react-icons/fa6";
import { RiSafe2Fill } from "react-icons/ri";
import { MdFormatQuote } from "react-icons/md";

const QuoteCircularGrid = () => {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-fixed "
      style={{
        backgroundImage: "url('/images/about-quote-circularGrid-bg-image.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#e4fcff]/85" />

     

      <div className="relative z-10  mx-auto px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Quote Side */}
          <div className={`w-full transform transition-all duration-700 `}>
            {/* Decorative quote mark */}
            <div className="relative mb-4">
              <MdFormatQuote className="text-6xl text-[#1874c1]/20" />
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl text-[#2A2A2A] leading-snug mb-3 sm:mb-4 font-light">
              <span className="font-bold text-[#1874c1]">The line</span> between
              disorder and order lies in logistics....
            </h2>

            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-0.5 bg-[#1874c1] rounded-full"></div>
              <p className="font-bold text-base sm:text-lg text-[#2F3436]">
               SUN TZU
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#777777] leading-relaxed max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Amet
              consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis.
            </p>

            {/* Stats or additional info (optional) */}
            <div className="flex gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div className="text-center group">
                <div className="text-xl sm:text-2xl font-bold text-[#1874c1]">
                  15+
                </div>
                <div className="text-[10px] sm:text-xs text-[#777777]">
                  Years Experience
                </div>
                <div className="w-0 group-hover:w-full h-0.5 bg-[#1874c1] mx-auto transition-all duration-300"></div>
              </div>
              <div className="text-center group">
                <div className="text-xl sm:text-2xl font-bold text-[#1874c1]">
                  50K+
                </div>
                <div className="text-[10px] sm:text-xs text-[#777777]">
                  Happy Clients
                </div>
                <div className="w-0 group-hover:w-full h-0.5 bg-[#1874c1] mx-auto transition-all duration-300"></div>
              </div>
              <div className="text-center group">
                <div className="text-xl sm:text-2xl font-bold text-[#1874c1]">
                  100+
                </div>
                <div className="text-[10px] sm:text-xs text-[#777777]">
                  Countries
                </div>
                <div className="w-0 group-hover:w-full h-0.5 bg-[#1874c1] mx-auto transition-all duration-300"></div>
              </div>
            </div>
          </div>

          {/* Circular Grid Side */}
          <div
            className={`relative flex justify-center transform transition-all duration-700 delay-300 `}
          >
            {/* Circular grid container */}
            <div className="relative  w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[550px]">
              {/* Main circular grid */}
              <div className="grid grid-cols-2 gap-1 w-full h-full rounded-full overflow-hidden  ">
                {/* Top Left: Blue Icon */}
                <div className="bg-[#1874c1] flex flex-col justify-center p-2 sm:p-3 md:p-4 text-center text-white group hover:bg-[#1565a0] transition-all duration-500 hover:scale-105 origin-bottom-right">
                  <div className="flex justify-end items-end mb-1 sm:mb-2">
                    <FaComputer className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                  </div>
                  <div className="flex justify-end">
                    <p className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm text-end w-[90%] sm:w-[85%] md:w-[80%] font-light leading-tight group-hover:tracking-wide transition-all duration-300">
                      Managing everything from source to destination is
                      Logistics...
                    </p>
                  </div>
                </div>

                {/* Top Right: Worker Image */}
                <div className="bg-gray-200 overflow-hidden group">
                  <img
                    src="/images/award3.jpg"
                    alt="Worker"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Bottom Left: Success Image */}
                <div className="bg-gray-200 overflow-hidden group">
                  <img
                    src="/images/award2.jpg"
                    alt="Success"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Bottom Right: Blue Icon */}
                <div className="bg-[#1874c1] flex flex-col justify-center p-2 sm:p-3 md:p-4 text-center text-white group hover:bg-[#1565a0] transition-all duration-500 hover:scale-105 origin-top-left">
                  <div className="flex justify-start items-start mb-1 sm:mb-2">
                    <RiSafe2Fill className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300" />
                  </div>
                  <div className="flex justify-start">
                    <p className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm text-start w-[70%] sm:w-[85%] md:w-[80%] font-light leading-tight group-hover:tracking-wide transition-all duration-300">
                      Safety & Security of lives – Our guiding force
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCircularGrid;
