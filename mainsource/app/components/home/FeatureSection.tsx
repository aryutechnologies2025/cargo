
// import { Sparkles, Clock, Code, HeartHandshake } from "lucide-react";
// import { VscTools } from "react-icons/vsc";
// import { FiUploadCloud } from "react-icons/fi";
// import { FiEdit } from "react-icons/fi";
// import { IoSettingsOutline } from "react-icons/io5";

// const FeaturesSection = () => {
//   const features = [
//     {
//       title: "Unique Design",
//       icon: VscTools,
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum",
//     },
//     {
//       title: "New Daily Updates",
//       icon: FiUploadCloud,
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum",
//     },
//     {
//       title: "Clean & Hand Coded",
//       icon: FiEdit,
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum",
//     },
//     {
//       title: "Free Support",
//       icon: IoSettingsOutline,
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum",
//     },
//   ];

//   return (
//     <section className="w-full bg-[#f7f7f7]">
//       <div className="px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="group transform transition-all duration-300 hover:-translate-y-1"
//             >
//               {/* Icon and Title Row */}
//               <div className="flex items-center  gap-3">
//                 <h3 className="font-bold text-[#2A2A2A] text-sm sm:text-base transition-all duration-300 group-hover:text-[#027cc2]">
//                   {feature.title}
//                 </h3>
//                 <div className="transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
//                   <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-[#027cc2] transition-all duration-300 group-hover:animate-pulse" />
//                 </div>
//               </div>

//               {/* Description */}
//               <p className="text-[#777777] mt-4  text-xs sm:text-sm leading-relaxed transition-all duration-300 group-hover:text-[#4A4A4A]">
//                 {feature.description}
//               </p>

//               {/* Subtle bottom border animation */}
//               <div className="w-0 group-hover:w-full h-0.5 bg-[#027cc2] mt-3 transition-all duration-500 ease-out mx-auto"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;



'use client'
import { motion, Variants } from "framer-motion";
import { 
  Shield, 
  Clock, 
  Globe, 
  Users, 
  Zap, 
  HeartHandshake,
  MapPin,
  Package,
  TrendingUp,
  HeadphonesIcon
} from "lucide-react";
import { VscTools } from "react-icons/vsc";
import { FiUploadCloud } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { BsRocket, BsGraphUp, BsBoxSeam } from "react-icons/bs";
import { useRouter } from "next/navigation";

const FeaturesSection = () => {
  const router=useRouter()
  const features = [
    {
      title: "Global Network",
      icon: Globe,
      description:
        "Access to 200+ countries worldwide with established partnerships and local expertise in every region.",
      gradient: "from-[#057dc3] to-[#0469a5]",
      stats: "200+ Countries"
    },
    {
      title: "Real-Time Tracking",
      icon: MapPin,
      description:
        "24/7 visibility of your shipments with precise GPS tracking and instant status updates at every stage.",
      gradient: "from-[#057dc3] to-[#0469a5]",
      stats: "Live Updates"
    },
    {
      title: "Secure Handling",
      icon: Shield,
      description:
        "Comprehensive security protocols and insurance coverage for complete peace of mind with every shipment.",
      gradient: "from-[#057dc3] to-[#0469a5]",
      stats: "100% Secure"
    },
    {
      title: "Express Delivery",
      icon: Zap,
      description:
        "Time-critical shipping solutions with guaranteed delivery windows and priority handling for urgent cargo.",
      gradient: "from-[#057dc3] to-[#0469a5]",
      stats: "24-48h Express"
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

  const statVariants: Variants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0 
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#f7f7f7] to-white overflow-hidden">
      {/* Section Header */}
      <div className="px-5 sm:px-7 md:px-16 lg:px-32 pt-12 sm:pt-16 md:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-[#057dc3] font-bold text-xs sm:text-sm uppercase tracking-[0.3em]">
            WHY CHOOSE US
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A2A2A] mt-3 mb-4">
            Logistics Solutions <span className="text-[#057dc3]">You Can Trust</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#fdc300] to-[#057dc3] mx-auto rounded-full"></div>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mt-6">
            With over 15 years of experience, we provide reliable, efficient, and secure 
            shipping solutions tailored to your business needs.
          </p>
        </motion.div>
      </div>

      {/* Features Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="px-5 sm:px-7 md:px-16 lg:px-32 py-8 sm:py-12 md:py-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500 overflow-hidden"
            >
              {/* Top Gradient Bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${feature.gradient}`} />

              {/* Content */}
              <div className="p-6 md:p-7">
                {/* Icon and Title Row */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-gray-800 text-lg md:text-xl transition-colors duration-300 group-hover:text-[#057dc3]">
                    {feature.title}
                  </h3>
                  
                  {/* Icon Container */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#057dc3]/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative bg-gradient-to-br from-[#057dc3]/10 to-transparent p-3 rounded-xl transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <feature.icon className="h-6 w-6 md:h-7 md:w-7 text-[#057dc3]" />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                  {feature.description}
                </p>

                {/* Feature Stat */}
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-xs font-semibold text-[#057dc3] bg-blue-50 px-3 py-1 rounded-full">
                    {feature.stats}
                  </span>
                </div>
              </div>

              {/* Bottom Border Animation */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#fdc300] to-[#057dc3] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2
            }
          }
        }}
        className="px-5 sm:px-7 md:px-16 lg:px-32 pb-12 sm:pb-16 md:pb-20"
      >
    
      </motion.div>

    

    
    </section>
  );
};

export default FeaturesSection;