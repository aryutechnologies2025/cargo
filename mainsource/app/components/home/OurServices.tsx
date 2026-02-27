// import React from "react";
// import { FaTelegramPlane } from "react-icons/fa";
// import { ImCheckmark } from "react-icons/im";
// import { GiCargoShip } from "react-icons/gi";

// const OurServices = () => {
//   const services = [
//     {
//       title: "Door to Door Air Cargo",
//       icon: <FaTelegramPlane />,
//       color: "border-[#0DA3E2] text-[#0DA3E2]",
//       description:
//         "We offer door to door Air cargo to any destination worldwide. Finding a delivery company that can offer door-to-door services for your parcels, packages or documents can save you considerable amounts of time and, in some cases, money. When filling out a Cargo Lord request form, make sure that you have read terms & conditions.",
//     },
//     {
//       title: "Excess Baggage",
//       icon: <ImCheckmark />,
//       color: "border-[#DB3A1B] text-[#DB3A1B]",
//       description:
//         "Cargo Lord achieved a staggering 10,000 kgs booking a unaccompanied baggage consignments in the year of 2012. The average size of a consignment is 2-3 large suitcases with a weight of 80kg. This service is popular because most of our customers are immigrants who commute to their families.",
//     },
//     {
//       title: "Cargo To Pakistan",
//       icon: <GiCargoShip />,
//       color: "border-[#35AA47] text-[#35AA47]",
//       description:
//         "Cargo Lord Ltd is please to offer cargo to Pakistan for only £1.50, door to door, no extra custom to pay at destination. We are probably the only cargo company in UK who offers claim against your loses through our freight liability insurance, so send cargo to pakistan through us.",
//     },
//   ];

//   return (
//     <section className="w-full bg-white px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14 ">
//       {/* Responsive Grid System */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 md:gap-10 lg:gap-14">
//         {services.map((service, index) => (
//           <div key={index} className="flex flex-col group h-fit transition-all duration-700 hover:-translate-y-4">
//             {/* Header with Icon and Title */}
//             <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-4 lg:mb-5">
//               <div
//                 className={`border rounded-full p-2.5 w-fit shrink-0 transition-transform duration-300 group-hover:scale-110 ${service.color}`}
//               >
//                 {/* Clone icon to apply specific size */}
//                 {service.icon}
//               </div>
//               <h3 className="text-[#444444] text-lg md:text-xl  font-semibold md:font-bold md:tracking-tight">
//                 {service.title}
//               </h3>
//             </div>

//             {/* Description Text */}
//             <p className="text-[#656565] text-sm leading-6 md:leading-7 font-karla">
//               {service.description}
//             </p>

//             {/* Bottom Accent line that appears on hover */}
//             <div className="max-md:hidden mt-6 h-0.5 w-0 bg-[#0DA3E2] group-hover:w-16 transition-all duration-500 opacity-0 group-hover:opacity-100" />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default OurServices;



'use client'
import React from "react";
import { motion, Variants } from "framer-motion";
import { FaTelegramPlane } from "react-icons/fa";
import { ImCheckmark } from "react-icons/im";
import { GiCargoShip } from "react-icons/gi";
import { BsBoxSeam } from "react-icons/bs";

const OurServices = () => {
  const services = [
    {
      title: "Door to Door Air Cargo",
      icon: <FaTelegramPlane />,
      color: "#057dc3",
      lightColor: "bg-blue-50",
      borderColor: "border-[#057dc3]",
      textColor: "text-[#057dc3]",
      description:
        "We offer door to door Air cargo to any destination worldwide. Finding a delivery company that can offer door-to-door services for your parcels, packages or documents can save you considerable amounts of time and, in some cases, money.",
      stats: { value: "24/7", label: "Availability" }
    },
    {
      title: "Excess Baggage",
      icon: <ImCheckmark />,
      color: "#057dc3",
      lightColor: "bg-blue-50",
      borderColor: "border-[#057dc3]",
      textColor: "text-[#057dc3]",
      description:
        "Cargo Lord achieved a staggering 10,000 kgs booking a unaccompanied baggage consignments in the year of 2012. The average size of a consignment is 2-3 large suitcases with a weight of 80kg.",
      stats: { value: "10K+", label: "Kgs Shipped" }
    },
    {
      title: "Cargo To Pakistan",
      icon: <GiCargoShip />,
      color: "#057dc3",
      lightColor: "bg-blue-50",
      borderColor: "border-[#057dc3]",
      textColor: "text-[#057dc3]",
      description:
        "Cargo Lord Ltd is please to offer cargo to Pakistan for only £1.50, door to door, no extra custom to pay at destination. We are probably the only cargo company in UK who offers claim against your loses through our freight liability insurance.",
      stats: { value: "1000+", label: "Monthly Shipments" }
    },
  ];

  // Fixed variants with proper typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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
        damping: 15,
        duration: 0.6
      }
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-32 py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-16 md:mb-20"
      >
        <span className="text-[#057dc3] font-bold text-xs sm:text-sm uppercase tracking-[0.3em]">Our Services</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A2A2A] mt-3 mb-4">
          Comprehensive Logistics <span className="text-[#057dc3]">Solutions</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#fdc300] to-[#057dc3] mx-auto rounded-full"></div>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mt-6">
          Tailored shipping solutions that meet your specific requirements with reliability and efficiency
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            {/* Top Gradient Bar - Using #057dc3 */}
            <div 
              className="h-2 w-full bg-gradient-to-r from-[#057dc3] to-[#0469a5]" 
              style={{ background: `linear-gradient(90deg, ${service.color}, #0469a5)` }}
            />

            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-[#057dc3]"></div>
              <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-[#057dc3]"></div>
            </div>

            <div className="p-6 sm:p-7 md:p-8">
              {/* Header with Icon and Title */}
              <div className="flex items-start gap-4 mb-5">
                <div className={`relative ${service.lightColor} rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-3xl text-[#057dc3] relative z-10">
                    {service.icon}
                  </div>
                  {/* Ripple Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-[#057dc3] opacity-0 group-hover:opacity-20 scale-0 group-hover:scale-150 transition-all duration-500" />
                </div>
                <h3 className="text-gray-800 text-xl sm:text-2xl font-bold leading-tight pt-2">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 font-karla">
                {service.description}
              </p>

             

              {/* Stats Card */}
              <div className="bg-blue-50 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-[#057dc3]">{service.stats.value}</p>
                    <p className="text-xs text-gray-600">{service.stats.label}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                    <span className="text-[#057dc3] text-xl">{service.icon}</span>
                  </div>
                </div>
              </div>

             
            </div>

            {/* Bottom Accent Line - Using #057dc3 */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#057dc3] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </motion.div>
        ))}
      </motion.div>

    
    </section>
  );
};

export default OurServices;