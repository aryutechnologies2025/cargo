
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
//     <section className="w-full  bg-gray-50 overflow-hidden px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="flex gap-3 group cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:animate-pulse"
              
//             >
//               {/* Icon with animations */}
//               <div className="relative">
//                 <stat.icon className="h-8 w-8 mt-3 text-[#027cc2] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:animate-bounce" />

//                 {/* Subtle glow effect on hover */}
//                 <div className="absolute inset-0 bg-[#027cc2]/20 rounded-full blur-md scale-0 group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100 -z-10" />
//               </div>

//               <div className="flex flex-col gap-2">
//                 {/* Number with animation */}
//                 <div className="text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold lg:font-extrabold text-[#027cc2] transition-all duration-300 group-hover:scale-105 group-hover:text-[#027cc2]/90 origin-left">
//                   {stat.number}
//                 </div>

//                 {/* Animated HR line */}
//                 <hr className="w-1/3 border-amber-400 border-[1.5] transition-all duration-500 group-hover:w-1/2 group-hover:border-amber-500" />

//                 {/* Label with animation */}
//                 <div className="text-[#777777] text-xs font-medium transition-all duration-300 group-hover:text-[#027cc2] group-hover:translate-x-1">
//                   {stat.label}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//     </section>
//   );
// };

// export default StatsSection;



'use client'
import { motion, Variants } from "framer-motion";
import { IoUmbrella } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RiShip2Line } from "react-icons/ri";
import { PiCodesandboxLogoLight } from "react-icons/pi";
import { BsTruck, BsBoxSeam } from "react-icons/bs";
import { FiPackage } from "react-icons/fi";

const StatsSection = () => {
  const stats = [
    {
      number: "25,11,12",
      label: "Packages Delivered",
      icon: IoUmbrella,
      suffix: "+",
      description: "Worldwide shipments"
    },
    {
      number: "19,223",
      label: "Repeat Customers",
      icon: RiCustomerService2Fill,
      suffix: "+",
      description: "Trust our service"
    },
    {
      number: "2,331",
      label: "Our Clients",
      icon: RiShip2Line,
      suffix: "+",
      description: "Active partnerships"
    },
    {
      number: "10,160",
      label: "Commercial Goods",
      icon: PiCodesandboxLogoLight,
      suffix: "kg",
      description: "Total weight shipped"
    },
  ];

  // Fixed variants with proper typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      y: 30, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const progressVariants: Variants = {
    hidden: { width: 0 },
    visible: { 
      width: "75%",
      transition: {
        duration: 1,
        delay: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white overflow-hidden px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14">
      {/* Section Header */}
      <div className=" text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-[#057dc3] font-bold text-xs sm:text-sm uppercase tracking-[0.3em]">
            Our Achievements
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A2A2A] mt-3 mb-4">
            Company <span className="text-[#057dc3]">Statistics</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#fdc300] to-[#057dc3] mx-auto rounded-full"></div>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mt-6">
            Our proven track record speaks for itself with millions of packages delivered worldwide
          </p>
        </motion.div>
      </div>

      {/* Stats Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-8 md:mt-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Top Gradient Bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#057dc3] to-[#0469a5]" />

              {/* Decorative Background Pattern */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-[#057dc3]"></div>
                <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-[#057dc3]"></div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-7">
                <div className="flex items-start gap-4">
                  {/* Icon with animated background */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#057dc3]/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative bg-gradient-to-br from-[#057dc3]/10 to-transparent p-3 rounded-xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <stat.icon className="h-8 w-8 text-[#057dc3]" />
                    </div>
                  </div>

                  <div className="flex-1">
                    {/* Number with animation */}
                    <div className="flex items-baseline gap-1">
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#057dc3] transition-all duration-300"
                      >
                        {stat.number}
                      </motion.span>
                      <span className="text-lg font-semibold text-[#057dc3]/70">
                        {stat.suffix}
                      </span>
                    </div>

                    {/* Animated underline */}
                    <div className="relative my-2">
                      <div className="absolute left-0 w-12 h-0.5 bg-gray-200 group-hover:w-16 transition-all duration-500" />
                      <div className="absolute left-0 w-8 h-0.5 bg-[#fdc300] group-hover:w-12 transition-all duration-700" />
                    </div>

                    {/* Label */}
                    <div className="mt-3">
                      <p className="text-gray-800 font-semibold text-sm md:text-base transition-colors duration-300 group-hover:text-[#057dc3]">
                        {stat.label}
                      </p>
                      <p className="text-gray-400 text-xs mt-1">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mini Progress Bar */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">This year</span>
                    <span className="text-[#057dc3] font-semibold">+24%</span>
                  </div>
                  <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      variants={progressVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-[#057dc3] to-[#0469a5] rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Corner Accent */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#057dc3]/5 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </motion.div>

     
    </section>
  );
};

export default StatsSection;