'use client'

import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';


const Values = () => {
  return (
     <div className="px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-5 md:space-y-6"
          >
            <div className="inline-block">
              <span className="text-[#057dc3] font-semibold text-xs sm:text-sm uppercase tracking-wider">
                Our Values
              </span>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#fdc300] to-[#057dc3] mt-2 rounded-full"></div>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Built on Trust,
              <span className="text-[#057dc3] block text-xl sm:text-2xl md:text-3xl lg:text-5xl mt-1">
                Driven by Innovation
              </span>
            </h2>

            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  title: "Reliability",
                  desc: "We deliver on our promises, every time",
                },
                {
                  title: "Innovation",
                  desc: "Constantly evolving to serve you better",
                },
                {
                  title: "Sustainability",
                  desc: "Committed to green logistics",
                },
                {
                  title: "Customer First",
                  desc: "Your success is our success",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl"
                >
                  <div className="bg-[#057dc3] w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full"></div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-gray-800">{value.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-500">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="/images/award3.jpg"
              alt="Our Values"
              width={600}
              height={600}
              className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
  )
}

export default Values