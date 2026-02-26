// import { IoUmbrella } from "react-icons/io5";
// import { RiCustomerService2Fill } from "react-icons/ri";
// import { RiShip2Line } from "react-icons/ri";
// import { PiCodesandboxLogoLight } from "react-icons/pi";

// const StatsSection = () => {
//   const stats = [
//     {
//       number: "25,11,12",
//       label: "Packages Delivered",
//       icon: IoUmbrella,
//     },
//     {
//       number: "19,223",
//       label: "Repeat Customers",
//       icon: RiCustomerService2Fill,
//     },
//     {
//       number: "2,331",
//       label: "Our Clients",
//       icon: RiShip2Line,
//     },
//     {
//       number: "1,12,26,336",
//       label: "Commercial Goods",
//       icon: PiCodesandboxLogoLight,
//     },
//   ];

//   return (
//     <section className="w-full py-16 bg-gray-50">
//       <div className="max-w-5xl mx-auto px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, index) => (
//             <div key={index} className="flex gap-3">
//               {/* Icon */}
//               <stat.icon className="h-8 w-8 mt-3 group-hover:scale-110 transition-transform duration-300" />

//               <div className="flex flex-col gap-2">
//                 {/* Number */}
//                 <div className="text-3xl  font-extrabold text-[#1874C1] ">
//                   {stat.number}
//                 </div>

//                 <hr className="w-1/3 border-amber-400 border-[1.5]" />
//                 {/* Label */}
//                 <div className="text-[#777777] text-xs font-medium">{stat.label}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StatsSection;

import { IoUmbrella } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RiShip2Line } from "react-icons/ri";
import { PiCodesandboxLogoLight } from "react-icons/pi";

const StatsSection = () => {
  const stats = [
    {
      number: "25,11,12",
      label: "Packages Delivered",
      icon: IoUmbrella,
    },
    {
      number: "19,223",
      label: "Repeat Customers",
      icon: RiCustomerService2Fill,
    },
    {
      number: "2,331",
      label: "Our Clients",
      icon: RiShip2Line,
    },
    {
      number: "1,12,26,336",
      label: "Commercial Goods",
      icon: PiCodesandboxLogoLight,
    },
  ];

  return (
    <section className="w-full  bg-gray-50 overflow-hidden px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex gap-3 group cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:animate-pulse"
              
            >
              {/* Icon with animations */}
              <div className="relative">
                <stat.icon className="h-8 w-8 mt-3 text-[#1874C1] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:animate-bounce" />

                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-[#1874C1]/20 rounded-full blur-md scale-0 group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100 -z-10" />
              </div>

              <div className="flex flex-col gap-2">
                {/* Number with animation */}
                <div className="text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold lg:font-extrabold text-[#1874C1] transition-all duration-300 group-hover:scale-105 group-hover:text-[#1874C1]/90 origin-left">
                  {stat.number}
                </div>

                {/* Animated HR line */}
                <hr className="w-1/3 border-amber-400 border-[1.5] transition-all duration-500 group-hover:w-1/2 group-hover:border-amber-500" />

                {/* Label with animation */}
                <div className="text-[#777777] text-xs font-medium transition-all duration-300 group-hover:text-[#1874C1] group-hover:translate-x-1">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default StatsSection;
