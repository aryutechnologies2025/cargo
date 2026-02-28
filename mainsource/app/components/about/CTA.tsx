'use client'
import React from 'react'
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { useRouter } from 'next/navigation';
import { FiArrowRight } from 'react-icons/fi';


const CTA = () => {
      const router = useRouter();
    
  return (
   <section className="py-10 sm:py-12 md:py-14 bg-gradient-to-r from-[#057dc3] to-[#0469a5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-5 md:mb-6 px-2">
              Ready to Transform Your Logistics?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 md:mb-10 px-2">
              Join thousands of businesses that trust us with their global
              shipments
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/contact")}
                className="group bg-white text-[#057dc3] px-6 sm:px-7 md:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                Get Started Today
                <FiArrowRight className="text-sm sm:text-base group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-white text-white px-6 sm:px-7 md:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-white hover:text-[#057dc3] transition-all duration-300"
              >
                Explore Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
  )
}

export default CTA