// import { MdLocationOn, MdAccessTime, MdEmail, MdPhone } from "react-icons/md";
// import { FaFax } from "react-icons/fa";

// const TopInfoBar = () => {
  

//   const infoSections = [
//     {
//       title: "USA Office",
//       icon: MdLocationOn,
//       content: (
//         <>
//           11 Hills Ave, Loftus - New Jersey,
//           <br />
//           Lorem ipsum dolor sit amet,
//           <br />
//           consectetur adipiscing elit,
//           <br />
//           USA
//         </>
//       ),
//     },
//     {
//       title: "Working Hours",
//       icon: MdAccessTime,
//       content: (
//         <>
//           <p className="text-[#777777] mb-2">Monday - Friday:</p>
//           <p className="text-[#777777] mb-3">09:00 am to 05:00 pm</p>
//           <p className="text-[#777777] mb-2">Saturday - Sunday:</p>
//           <p className="text-[#777777]">Holiday</p>
//         </>
//       ),
//     },
//     {
//       title: "Student Relations",
//       icon: MdEmail,
//       content: (
//         <>
//           <p className="text-[#777777] mb-3 flex items-center gap-2">
//             <MdEmail className="text-xs opacity-50" />
//             Mail: <span className="text-[#027cc2] hover:underline transition-all duration-300 cursor-pointer"> submissions@domain.com </span>
//           </p>
//           <p className="text-[#777777] mb-3 flex items-center gap-2">
//             <MdPhone className="text-xs opacity-50" />
//             Phone: (012) 1234 789 456
//           </p>
//           <p className="text-[#777777] mb-3 flex items-center gap-2">
//             <FaFax className="text-xs opacity-50" />
//             Fax: 1.245.789.654
//           </p>
//         </>
//       ),
//     },
//     {
//       title: "Business Development",
//       icon: MdEmail,
//       content: (
//         <>
//           <p className="text-[#777777] mb-3 flex items-center gap-2">
//             <MdEmail className="text-xs opacity-50" />
//             Mail: <span className="text-[#027cc2] hover:underline transition-all duration-300 cursor-pointer"> submissions@domain.com </span>
//           </p>
//           <p className="text-[#777777] mb-3 flex items-center gap-2">
//             <MdPhone className="text-xs opacity-50" />
//             Phone: (012) 1234 789 456
//           </p>
//           <p className="text-[#777777] mb-3 flex items-center gap-2">
//             <FaFax className="text-xs opacity-50" />
//             Fax: 1.245.789.654
//           </p>
//         </>
//       ),
//     },
//   ];

//   return (
//     <div className="bg-white px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14 mx-auto overflow-hidden">
//       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-sm">
//         {infoSections.map((section, index) => {
//           const IconComponent = section.icon;
          
//           return (
//             <div
//               key={index}
//               className={`group transform transition-all duration-500 hover:-translate-y-2`}
              
//             >
//               {/* Header with Icon */}
//               <div className="flex items-center gap-3 mb-3 sm:mb-4 md:mb-5">
//                 <div className="relative">
//                   <div className="p-2 rounded-lg bg-[#027cc2]/15 group-hover:bg-[#027cc2]/10 transition-all duration-300">
//                     <IconComponent className="text-[#027cc2] text-xl sm:text-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
//                   </div>
//                   {/* Glow effect */}
//                   <div className="absolute inset-0 bg-[#027cc2]/20 rounded-lg blur-md scale-0 group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100 -z-10" />
//                 </div>
//                 <h4 className="font-bold text-sm sm:text-base text-[#2A2A2A] uppercase tracking-wider transition-all duration-300 group-hover:text-[#027cc2]">
//                   {section.title}
//                 </h4>
//               </div>

//               {/* Content with animations */}
//               <div className="text-[#777777] text-xs sm:text-sm leading-relaxed space-y-1 sm:space-y-2">
//                 {section.content}

//                 {/* Subtle bottom border animation */}
//                 <div className="w-0 group-hover:w-12 h-0.5 bg-[#027cc2] mt-3 sm:mt-4 transition-all duration-500" />
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default TopInfoBar;


'use client'
import { motion, Variants } from "framer-motion";
import { 
  MdLocationOn, 
  MdAccessTime, 
  MdEmail, 
  MdPhone,
  MdOutlineWatchLater,
  MdOutlineBusinessCenter
} from "react-icons/md";
import { FaFax, FaGlobeAmericas } from "react-icons/fa";
import { BsBuilding, BsTelephone } from "react-icons/bs";
import Image from "next/image";

const TopInfoBar = () => {
  const infoSections = [
    {
      title: "USA Office",
      icon: MdLocationOn,
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      content: (
        <>
          <div className="flex items-start gap-2 mb-2">
            <BsBuilding className="text-[#027cc2] mt-1 flex-shrink-0" />
            <span className="text-gray-700 font-medium">11 Hills Ave, Loftus</span>
          </div>
          <p className="text-gray-600 ml-6">New Jersey, NJ 07001</p>
          <p className="text-gray-600 ml-6">United States of America</p>
          <div className="mt-3 pt-3 border-t border-gray-200">
            <p className="text-gray-500 text-xs flex items-center gap-2">
              <FaGlobeAmericas className="text-[#027cc2]" />
              <span>Zone: EST (UTC-5)</span>
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Working Hours",
      icon: MdAccessTime,
      bgColor: "from-amber-50 to-amber-100",
      borderColor: "border-amber-200",
      content: (
        <>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#027cc2]/10 flex items-center justify-center">
              <MdOutlineWatchLater className="text-[#027cc2] text-xl" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">Monday - Friday</p>
              <p className="text-gray-600">09:00 AM - 05:00 PM</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              <MdOutlineWatchLater className="text-gray-400 text-xl" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">Saturday - Sunday</p>
              <p className="text-gray-600">Closed</p>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-gray-200">
            <p className="text-xs text-gray-500">*Emergency support available 24/7</p>
          </div>
        </>
      ),
    },
    {
      title: "Student Relations",
      icon: MdEmail,
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      content: (
        <>
          <div className="space-y-4">
            <motion.a 
              href="mailto:submissions@domain.com"
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 text-gray-700 hover:text-[#027cc2] transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-[#027cc2]/10 flex items-center justify-center">
                <MdEmail className="text-[#027cc2] text-sm" />
              </div>
              <span className="text-sm">submissions@domain.com</span>
            </motion.a>
            
            <motion.a 
              href="tel:+0121234789456"
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 text-gray-700 hover:text-[#027cc2] transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-[#027cc2]/10 flex items-center justify-center">
                <MdPhone className="text-[#027cc2] text-sm" />
              </div>
              <span className="text-sm">(012) 1234 789 456</span>
            </motion.a>
            
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 text-gray-700"
            >
              <div className="w-8 h-8 rounded-full bg-[#027cc2]/10 flex items-center justify-center">
                <FaFax className="text-[#027cc2] text-sm" />
              </div>
              <span className="text-sm">1.245.789.654</span>
            </motion.div>
          </div>
        </>
      ),
    },
    {
      title: "Business Development",
      icon: MdEmail,
      bgColor: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      content: (
        <>
          <div className="space-y-4">
            <motion.a 
              href="mailto:business@domain.com"
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 text-gray-700 hover:text-[#027cc2] transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-[#027cc2]/10 flex items-center justify-center">
                <MdEmail className="text-[#027cc2] text-sm" />
              </div>
              <span className="text-sm">business@domain.com</span>
            </motion.a>
            
            <motion.a 
              href="tel:+0121234789457"
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 text-gray-700 hover:text-[#027cc2] transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-[#027cc2]/10 flex items-center justify-center">
                <MdPhone className="text-[#027cc2] text-sm" />
              </div>
              <span className="text-sm">(012) 1234 789 457</span>
            </motion.a>
            
            <motion.a 
              href="tel:+0121234789458"
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 text-gray-700 hover:text-[#027cc2] transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-[#027cc2]/10 flex items-center justify-center">
                <BsTelephone className="text-[#027cc2] text-sm" />
              </div>
              <span className="text-sm">(012) 1234 789 458</span>
            </motion.a>
          </div>
        </>
      ),
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
      {/* Header */}
      <div className="px-5 sm:px-7 md:px-16 lg:px-32 pt-12 sm:pt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-[#057dc3] font-bold text-xs sm:text-sm uppercase tracking-[0.3em]">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2A2A2A] mt-3 mb-4">
            Contact <span className="text-[#057dc3]">Information</span>
          </h1>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-0.5 bg-gray-300"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-[#fdc300] to-[#057dc3] rounded-full animate-pulse"></div>
            <div className="w-12 h-0.5 bg-gray-300"></div>
          </div>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            We're here to help! Reach out to us through any of the following channels
          </p>
        </motion.div>
      </div>

      {/* Info Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="px-5 sm:px-7 md:px-16 lg:px-32 py-8 sm:py-12 md:py-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {infoSections.map((section, index) => {
            const IconComponent = section.icon;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100`}
              >
                {/* Top Gradient Bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-[#057dc3] to-[#0469a5]" />

                {/* Content */}
                <div className="p-6 md:p-7">
                  {/* Header with Icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#057dc3]/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative bg-gradient-to-br from-[#057dc3]/10 to-transparent p-3 rounded-xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <IconComponent className="text-[#057dc3] text-2xl" />
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-800 text-base uppercase tracking-wider transition-colors duration-300 group-hover:text-[#057dc3]">
                      {section.title}
                    </h4>
                  </div>

                  {/* Content with better spacing */}
                  <div className="text-gray-600 text-sm leading-relaxed">
                    {section.content}
                  </div>

                  {/* Bottom corner accent */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#057dc3]/5 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Additional Contact Info Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="px-5 sm:px-7 md:px-16 lg:px-32 pb-12 sm:pb-16"
      >
        <div className="bg-gradient-to-r from-[#057dc3] to-[#0469a5] rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Need Immediate Assistance?</h3>
              <p className="text-white/80 text-sm">Our support team is available 24/7 to help you</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+1234567890"
                className="bg-white text-[#057dc3] px-8 py-3 rounded-xl font-bold text-sm hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <MdPhone className="text-lg" />
                <span>Call Us Now</span>
              </a>
              <a 
                href="mailto:info@domain.com"
                className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-white hover:text-[#057dc3] transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <MdEmail className="text-lg" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      
    </section>
  );
};

export default TopInfoBar;