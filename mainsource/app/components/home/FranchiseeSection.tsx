



// import Image from "next/image";

// const FranchiseeSection = () => {


//   const benefits = [
//     {
//       icon: "/icons/franchisee-icon1.webp",
//       title: "Understanding the brand and aligning with its values",
//       description:
//         "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut.",
//     },
//     {
//       icon: "/icons/franchisee-icon2.webp",
//       title: "Franchisee model and its relevance",
//       description:
//         "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut.",
//     },
//     {
//       icon: "/icons/franchisee-icon3.webp",
//       title: "Form a win-win relationship with the customers & franchisor",
//       description:
//         "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut.",
//     },
//     {
//       icon: "/icons/franchisee-icon4.webp",
//       title: "The duration of the franchisee term. Download the form",
//       description:
//         "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut.",
//     },
//   ];

//   return (
//     <section className="w-full px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14 bg-white overflow-hidden">
//         {/* Header with animations */}
//         <div className="text-center mb-8 sm:mb-10 md:mb-12 space-y-2 sm:space-y-3">
          
//           <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-[#2A2A2A] transition-all duration-700 hover:scale-105">
//             Franchisee Terms and Benefits
//           </p>
          
//           <div className="flex items-center justify-center mt-4">
//           <div className="w-32 h-0.5 bg-gray-200 "></div>
//           <div className="w-12 h-1 bg-yellow-400 rounded-2xl animate-pulse"></div>
//           <div className="w-32 h-0.5 bg-gray-200 "></div>
//         </div>

          
//           <p className=" text-[#777777]">
//             Together, we can forge ahead...!
//           </p>
//         </div>

//         {/* Benefits List - Responsive Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 lg:gap-16 mt-10 md:mt-14 lg:mt-20">
//           {benefits.map((benefit, index) => (
//             <div 
//               key={index} 
//               className={`flex flex-col sm:flex-row gap-3 sm:gap-4 group cursor-pointer transform transition-all duration-500 hover:-translate-y-1 `}
             
//             >
//               {/* Icon with animations */}
//               {/* <div className="relative flex "> */}
//                 <div className="relative inline-block">
//                   <Image
//                     src={benefit.icon}
//                     width={60}
//                     height={60}
//                     alt={benefit.title}
//                     className="w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 lg:w-30 lg:h-30 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg"
//                   />
                  
//                   {/* Subtle glow effect on hover */}
//                   <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-md scale-0 group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100 -z-10" />
//                 </div>
//               {/* </div> */}

//               <div className="flex-1 ">
//                 {/* Title with responsive font sizes */}
//                 <h3 className="text-base lg:text-xl font-medium text-[#232222] transition-all duration-300 group-hover:text-[#027cc2] group-hover:translate-x-1">
//                   {benefit.title}
//                 </h3>

//                 {/* Description with responsive font sizes */}
//                 <p className="text-sm  text-[#777777] mt-1 sm:mt-2 leading-4 sm:leading-5 transition-all duration-300 group-hover:text-[#4A4A4A]">
//                   {benefit.description}
//                 </p>

//                 {/* Subtle bottom border animation - hidden on mobile */}
//                 <div className="max-sm:hidden sm:block w-0 group-hover:w-12 h-0.5 bg-yellow-400 mt-2 transition-all duration-500 mx-auto xs:mx-0" />
//               </div>
//             </div>
//           ))}
//         </div>
//     </section>
//   );
// };


// export default FranchiseeSection;







'use client'
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { FiArrowRight, FiDownload, FiAward, FiTrendingUp } from "react-icons/fi";
import { BsClockHistory } from "react-icons/bs";
import { MdHandshake } from "react-icons/md"; // Using MdHandshake instead of BsHandshake

const FranchiseeSection = () => {
  const benefits = [
    {
      icon: "/icons/franchisee-icon1.webp",
      title: "Understanding the brand and aligning with its values",
      description:
        "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut.",
      stats: "95% Success Rate"
    },
    {
      icon: "/icons/franchisee-icon2.webp",
      title: "Franchisee model and its relevance",
      description:
        "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut.",
      stats: "200+ Locations"
    },
    {
      icon: "/icons/franchisee-icon3.webp",
      title: "Form a win-win relationship with the customers & franchisor",
      description:
        "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut.",
      stats: "100% Support"
    },
    {
      icon: "/icons/franchisee-icon4.webp",
      title: "The duration of the franchisee term. Download the form",
      description:
        "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut.",
      stats: "5 Year Term"
    },
  ];

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
    hidden: { y: 30, opacity: 0 },
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

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Header Section */}
      <div className="px-5 sm:px-7 md:px-16 lg:px-32 pt-12 sm:pt-16 md:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-[#057dc3] font-bold text-xs sm:text-sm uppercase tracking-[0.3em]">
            Become a Partner
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A2A2A] mt-3 mb-4">
            Franchisee <span className="text-[#057dc3]">Opportunities</span>
          </h2>
          
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-0.5 bg-gray-300"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-[#fdc300] to-[#057dc3] rounded-full animate-pulse"></div>
            <div className="w-12 h-0.5 bg-gray-300"></div>
          </div>

          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Together, we can forge ahead and build a successful partnership that benefits everyone
          </p>
        </motion.div>
      </div>

      {/* Benefits Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="px-5 sm:px-7 md:px-16 lg:px-32 py-8 sm:py-12 md:py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Top Gradient Bar */}

              <div className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row gap-5">
                  {/* Icon Container */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-[#057dc3]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <Image
                        src={benefit.icon}
                        width={80}
                        height={80}
                        alt={benefit.title}
                        className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-white shadow-lg group-hover:border-[#057dc3] transition-all duration-300"
                      />
                    </div>
                    
                    {/* Icon Badge */}
                    <div className="absolute -bottom-2 -right-2 bg-[#fdc300] rounded-full p-1.5 shadow-lg">
                      <FiAward className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 group-hover:text-[#057dc3] transition-colors duration-300">
                      {benefit.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {benefit.description}
                    </p>

                    {/* Stats Badge */}
                    <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-full">
                      <FiTrendingUp className="w-3 h-3 text-[#057dc3]" />
                      <span className="text-xs font-semibold text-[#057dc3]">{benefit.stats}</span>
                    </div>

                   
                  </div>
                </div>

                {/* Bottom Border Animation */}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      
    </section>
  );
};

export default FranchiseeSection;