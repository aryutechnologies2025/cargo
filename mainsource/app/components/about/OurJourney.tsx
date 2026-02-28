'use client'

import React from 'react'
import { motion} from "framer-motion";
import Image from 'next/image';


const timeline = [
    {
      year: "1998",
      event: "Company Founded",
      description: "Started with a single truck in London",
    },
    {
      year: "2005",
      event: "Global Expansion",
      description: "Opened offices in 15 countries",
    },
    {
      year: "2012",
      event: "Digital Transformation",
      description: "Launched real-time tracking platform",
    },
    {
      year: "2018",
      event: "Sustainability Focus",
      description: "Introduced eco-friendly fleet",
    },
    {
      year: "2024",
      event: "Global Network",
      description: "Serving 150+ countries worldwide",
    },
  ];
const OurJourney = () => {
  return (
    <div className="px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <Image
                src="/images/award2.jpg"
                alt="Our Story"
                width={600}
                height={700}
                className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-5 md:space-y-6"
          >
            <div className="inline-block">
              <span className="text-[#057dc3] font-semibold text-xs sm:text-sm uppercase tracking-wider">
                Our Journey
              </span>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#fdc300] to-[#057dc3] mt-2 rounded-full"></div>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              From Humble Beginnings to
              <span className="text-[#057dc3] block text-xl sm:text-2xl md:text-3xl lg:text-5xl mt-1">
                Global Leadership
              </span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              What started as a single-truck operation in 1998 has grown into
              one of the world's most trusted logistics providers. Our journey
              has been defined by innovation, reliability, and an unwavering
              commitment to our clients.
            </p>

            {/* Timeline */}
            <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
              {timeline.slice(0, 3).map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-white hover:shadow-md transition-all"
                >
                  <div className="bg-[#057dc3] text-white font-bold px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm">
                    {item.year}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-gray-800">{item.event}</h4>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
  )
}

export default OurJourney