// import { IoEarthSharp } from "react-icons/io5";
// import { GiCargoShip } from "react-icons/gi";
// import { RiComputerFill } from "react-icons/ri";
// import { AiFillSafetyCertificate } from "react-icons/ai";

// const ParallexImage = () => {
//   const features = [
//     { icon: <IoEarthSharp />, label: "GLOBAL LOCATIONS" },
//     { icon: <GiCargoShip />, label: "TRANSNATIONAL CARGOS" },
//     { icon: <RiComputerFill />, label: "COMPUTERIZED TRACKING" },
//     { icon: <AiFillSafetyCertificate />, label: "SAFETY OF DELIVERY" },
//   ];

//   return (
//     <section className="pt-10">
//       <div
//         className="relative h-[90vh] w-full   flex items-center py-16 "
//         style={{
//           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/about-parallex-image.jpg')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundAttachment: "fixed", // Simple parallax effect
//           height:'60vh'
//         }}
//       >
//         <div className=" mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {features.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center text-center space-y-4"
//               >
//                 {/* Icon Container */}
//                 <div className="relative w-16 h-16 text-5xl text-white transition-transform hover:scale-110 duration-300">
//                   {item.icon}
//                 </div>

//                 {/* Label */}
//                 <h3 className="text-white tracking-widest ">{item.label}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ParallexImage;



// import React from "react";
// import { IoEarthSharp } from "react-icons/io5";
// import { GiCargoShip } from "react-icons/gi";
// import { RiComputerFill } from "react-icons/ri";
// import { AiFillSafetyCertificate } from "react-icons/ai";

// const ParallexImage = () => {
//   const features = [
//     { icon: <IoEarthSharp />, label: "GLOBAL LOCATIONS" },
//     { icon: <GiCargoShip />, label: "TRANSNATIONAL CARGOS" },
//     { icon: <RiComputerFill />, label: "COMPUTERIZED TRACKING" },
//     { icon: <AiFillSafetyCertificate />, label: "SAFETY OF DELIVERY" },
//   ];

//   return (
//     <section className="pt-6 sm:pt-8 md:pt-10 overflow-hidden">
//       <div
//         className="relative w-full flex items-center py-10 sm:py-12 md:py-16 lg:py-20"
//         style={{
//           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/about-parallex-image.jpg')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundAttachment: "fixed",
//           minHeight: 'auto',
//           height: 'auto',
//         }}
//       >
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//           {/* Section Header - Optional but adds context */}
//           <div className="text-center mb-6 sm:mb-8 md:mb-10">
//             <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-light mb-2">
//               Our <span className="font-bold ">Global</span> Reach
//             </h2>
//           </div>

//           {/* Features Grid - Fully Responsive */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
//             {features.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center text-center space-y-2 sm:space-y-3 md:space-y-4 group"
//               >
//                 {/* Icon Container with hover animations */}
//                 <div className="relative">
//                   {/* Glow effect behind icon */}
//                   <div className="absolute inset-0 bg-[#027cc2]/20 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
                  
//                   {/* Icon */}
//                   <div className="relative text-4xl sm:text-5xl md:text-6xl text-white transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:text-[#027cc2]">
//                     {item.icon}
//                   </div>
//                 </div>

//                 {/* Label with responsive font sizes */}
//                 <h3 className="text-white text-xs sm:text-sm md:text-base font-semibold tracking-wider group-hover:tracking-widest transition-all duration-300">
//                   {item.label}
//                 </h3>

//                 {/* Animated bottom line */}
//                 <div className="w-0 group-hover:w-12 h-0.5 bg-[#027cc2] transition-all duration-500"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ParallexImage;


import React from "react";
import { IoEarthSharp } from "react-icons/io5";
import { GiCargoShip } from "react-icons/gi";
import { RiComputerFill } from "react-icons/ri";
import { AiFillSafetyCertificate } from "react-icons/ai";

const ParallexImage = () => {
  const features = [
    { icon: <IoEarthSharp />, label: "GLOBAL LOCATIONS" },
    { icon: <GiCargoShip />, label: "TRANSNATIONAL CARGOS" },
    { icon: <RiComputerFill />, label: "COMPUTERIZED TRACKING" },
    { icon: <AiFillSafetyCertificate />, label: "SAFETY OF DELIVERY" },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Parallax Background - Fixed height */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/about-parallex-image.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Content - Short height */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-7 md:px-16 lg:px-32 py-12 md:py-16">
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-3 group"
            >
              {/* Icon with hover effect */}
              <div className="text-4xl sm:text-5xl text-white/90 group-hover:text-[#027cc2] transition-all duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              {/* Label */}
              <h3 className="text-white text-xs sm:text-sm font-medium tracking-wider group-hover:tracking-widest transition-all duration-300">
                {item.label}
              </h3>

              {/* Animated bottom line */}
              <div className="w-0 group-hover:w-12 h-0.5 bg-[#027cc2] transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParallexImage;