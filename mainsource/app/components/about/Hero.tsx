"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

const AboutPage = () => {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth scale effect
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <div className="bg-white">
      {/* Hero Section with Parallax */}
      <section
        ref={containerRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Parallax - Using y transform instead of scale */}
        <motion.div style={{ scale }} className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg-9.jpg"
            alt="Logistics Background"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
        </motion.div>

        {/* Hero Content - Stays fixed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-20 text-center text-white max-w-5xl mx-auto px-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-4 sm:mb-6"
          >
            <span className="bg-white/20 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-2xl">
              Since 1998
            </span>
          </motion.div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            style={{ 
  textShadow: `
    0px 2px 4px rgba(0,0,0,0.2),
    0px 4px 8px rgba(0,0,0,0.1),
    0px 8px 16px rgba(0,0,0,0.05)
  `
}}
          >
            Connecting the World,
            <span className="block text-[#fdc300] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl mt-1 sm:mt-2">
              Delivering Trust
            </span>
          </h1>

          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-8 sm:mb-10 md:mb-12 text-white/90 max-w-3xl mx-auto px-2 sm:px-0"
style={{ 
  textShadow: `
    0px 2px 4px rgba(0,0,0,0.2),
    0px 4px 8px rgba(0,0,0,0.1),
    0px 8px 16px rgba(0,0,0,0.05)
  `
}}        >
            From a single truck to a global logistics powerhouse — we've been
            moving businesses forward for over 25 years.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/contact")}
              className="group bg-[#fdc300] text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              Start Shipping Today
              <FiArrowRight className="text-sm sm:text-base group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;
