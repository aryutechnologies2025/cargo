'use client'

import React from 'react'
import { motion, Variants } from "framer-motion";
import { RiFlightTakeoffLine, RiShipLine } from 'react-icons/ri';
import { FiArrowRight, FiTruck } from 'react-icons/fi';
import { BsBoxSeam } from 'react-icons/bs';


const Services = () => {
    const services = [
        {
          title: "Air Freight",
          description: "Express air cargo solutions to 200+ destinations worldwide",
          icon: RiFlightTakeoffLine,
          color: "from-blue-500 to-cyan-500",
        },
        {
          title: "Ocean Freight",
          description: "Full container and LCL shipments across major trade routes",
          icon: RiShipLine,
          color: "from-teal-500 to-emerald-500",
        },
        {
          title: "Road Transport",
          description: "Nationwide ground shipping with real-time tracking",
          icon: FiTruck,
          color: "from-orange-500 to-amber-500",
        },
        {
          title: "Warehousing",
          description: "Secure storage and inventory management solutions",
          icon: BsBoxSeam,
          color: "from-purple-500 to-pink-500",
        },
      ];
      const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };
   const fadeInUp: Variants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };
  return (
    <div className="px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <span className="text-[#057dc3] font-semibold text-xs sm:text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 sm:mt-4 mb-4 sm:mb-6">
            Comprehensive Logistics
            <span className="block text-[#057dc3] text-xl sm:text-2xl md:text-3xl lg:text-5xl mt-1">
              Solutions
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            End-to-end shipping solutions tailored to your business needs
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div
                className={`bg-gradient-to-br ${service.color} w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform`}
              >
                <service.icon className="text-white text-xl sm:text-2xl" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                {service.description}
              </p>
              <button className="text-[#057dc3] font-semibold text-xs sm:text-sm flex items-center gap-1 group/btn">
                Learn More
                <FiArrowRight className="text-xs sm:text-sm group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
  )
}

export default Services