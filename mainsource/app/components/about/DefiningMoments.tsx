// import { FaUser, FaChartBar, FaShip } from "react-icons/fa";
// import { FaSignal } from "react-icons/fa";

// export const DefiningMoments = () => {
//   const services = [
//     {
//       title: "Warehousing Solutions",
//       desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus.",
//       icon: <FaUser />,
//     },
//     {
//       title: "Surface Transport by Road",
//       desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus.",
//       icon: <FaSignal />,
//     },
//     {
//       title: "Air Freight Movements",
//       desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus.",
//       icon: <FaChartBar />,
//     },
//     {
//       title: "Global Shipping Destinations",
//       desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus.",
//       icon: <FaShip />,
//     },
//   ];

//   return (
//     <section className="  py-22 ">
//       <div className=" mx-auto max-w-7xl  px-4">
//         <div className="flex flex-col lg:flex-row gap-12">
//           {/* Left Side: Header */}
//           <div className="w-1/3 space-y-6 ">
//             <h2 className="text-2xl text-[#2A2A2A]">
//               Defining Moments
//             </h2>
//             <p className="text-[#777777] text-sm leading-relaxed">
//               You are known by the company you keep. Take a look at our
//               satisfied corporate customers. We are honoured.
//             </p>
//             <button className="bg-[#1b75bb] text-white px-8 py-4 text-sm font-medium hover:bg-blue-700 transition-colors uppercase">
//               Read More
//             </button>
//           </div>

//           {/* Right Side: Grid */}
//           <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
//             {services.map((service, index) => (
//               <div key={index} className="space-y-3">
//                 <div className="flex items-center gap-4">
//                   <span className="text-xl text-[#1874C1]">{service.icon}</span>
//                   <h4 className=" font-semibold text-[#2A2A2A] tracking-tight">
//                     {service.title}
//                   </h4>
//                 </div>
//                 <p className="text-[#777777] text-sm leading-6">
//                   {service.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import { FaUser, FaChartBar, FaShip } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";

const services = [
  {
    title: "Warehousing Solutions",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus.",
    icon: <FaUser />,
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Surface Transport by Road",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus.",
    icon: <FaSignal />,
    color: "from-green-400 to-green-600",
  },
  {
    title: "Air Freight Movements",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus.",
    icon: <FaChartBar />,
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "Global Shipping Destinations",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus.",
    icon: <FaShip />,
    color: "from-orange-400 to-orange-600",
  },
];
export const DefiningMoments = () => {
  return (
    <section className="px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14 bg-white overflow-hidden">
      <div className="mx-auto ">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12">
          {/* Left Side: Header */}
          <div
            className={`w-full lg:w-1/3 space-y-4 sm:space-y-5 lg:space-y-6 transform transition-all duration-700 `}
          >
            

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A2A2A] leading-tight">
              Defining{" "}
              <span className="text-[#1874c1] relative inline-block">
                Moments
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-linear-to-r from-[#1874c1] to-transparent"></div>
              </span>
            </h2>

            <p className="text-[#777777] text-xs sm:text-sm leading-relaxed">
              You are known by the company you keep. Take a look at our
              satisfied corporate customers. We are honoured.
            </p>

            {/* Button with hover animation */}
            <div className="pt-2 sm:pt-3 lg:pt-4">
              <button className="group relative bg-[#1b75bb] text-white px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-medium hover:bg-[#1874c1] transition-all duration-300 uppercase rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer">
                <span className="relative z-10 flex items-center gap-2">
                  Read More
                  <MdArrowForward className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>

            
          </div>

          {/* Right Side: Grid */}
          <div
            className={`w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 md:gap-x-12 md:gap-y-10 transform transition-all duration-700 delay-300 `}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="group space-y-2 sm:space-y-3 bg-white rounded-xl p-4 sm:p-5 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Icon with animated background */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-linear-to-r ${service.color} rounded-lg blur-md scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
                    <div className="relative p-2 sm:p-3 bg-[#1874c1]/10 rounded-lg group-hover:bg-[#1874c1] transition-colors duration-300">
                      <span className="text-lg sm:text-xl text-[#1874c1] group-hover:text-white transition-colors duration-300 transform group-hover:scale-110 group-hover:rotate-3 inline-block">
                        {service.icon}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-sm sm:text-base md:text-lg font-semibold text-[#2A2A2A] group-hover:text-[#1874c1] transition-colors duration-300">
                    {service.title}
                  </h4>
                </div>

                <p className="text-[#777777] text-xs sm:text-sm leading-5 sm:leading-6 group-hover:text-[#4A4A4A] transition-colors duration-300 pl-12 sm:pl-14">
                  {service.desc}
                </p>

                {/* Animated bottom line */}
                <div className="w-0 group-hover:w-12 h-0.5 bg-[#1874c1] transition-all duration-500 ml-12 sm:ml-14"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
