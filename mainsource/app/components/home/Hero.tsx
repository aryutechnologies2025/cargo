"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  FiPackage,
  FiTruck,
  FiClock,
  FiShield,
  FiArrowRight,
  FiHelpCircle,
  FiMapPin,
  FiGlobe,
  FiTrendingUp,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  const router = useRouter();
  const [trackingNumber, setTrackingNumber] = useState("");
  const swiperRef = useRef<SwiperType | null>(null);

  const slides = [
    { image: "/images/hero-bg-1.jpg", alt: "Logistics background 1" },
    { image: "/images/hero-bg-2.jpg", alt: "Logistics background 2" },
    { image: "/images/hero-bg-3.jpg", alt: "Logistics background 3" },
    { image: "/images/hero-bg-4.jpg", alt: "Logistics background 4" },
    { image: "/images/hero-bg-5.jpg", alt: "Logistics background 4" },
    { image: "/images/hero-bg-6.jpg", alt: "Logistics background 4" },
    { image: "/images/hero-bg-7.jpg", alt: "Logistics background 4" },
    { image: "/images/hero-bg-8.jpg", alt: "Logistics background 4" },
    { image: "/images/hero-bg-9.jpg", alt: "Logistics background 4" },
  ];

  const handleTrack = () => {
    if (trackingNumber.trim()) {
      router.push(`/track-your-parcel?id=${trackingNumber}`);
    }
  };

  // Animation variants - optimized for mobile
  const slideUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  };

  const scaleIn = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Swiper Background Slider */}
      <div className="absolute inset-0 bg-[#057dc3]">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={3000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={false}
          pagination={false}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Dark overlay for better text visibility - adjusted opacity for mobile */}
        <div className="absolute inset-0 bg-black/30 md:bg-black/20 z-10"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full  mx-auto px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center"
        >
          {/* Left Content - Responsive text sizing */}
          <motion.div variants={slideUp} className="text-center lg:text-left">
            <motion.div
              variants={slideUp}
              className="text-white inline-flex items-center justify-center lg:justify-start space-x-2 bg-white/15 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 border border-white/10 mx-auto lg:mx-0"
              style={{
                textShadow: `
    0px 1px 2px rgba(0,0,0,0.3),
    0px 2px 4px rgba(0,0,0,0.2),
    0px 4px 8px rgba(0,0,0,0.1)
  `,
              }}
            >
              <FiGlobe className="w-3 h-3 sm:w-4 sm:h-4 filter drop-shadow-xl" />
              <span className="text-xs sm:text-sm font-medium tracking-wide">
                Global Logistics Partner
              </span>
            </motion.div>

            <motion.h1
              variants={slideUp}
              className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-2 sm:mb-3 md:mb-4"
              style={{
                textShadow: `
    0px 1px 2px rgba(0,0,0,0.3),
    0px 2px 4px rgba(0,0,0,0.2),
    0px 4px 8px rgba(0,0,0,0.1)
  `,
              }}
            >
              <span className="block">Seamless</span>
              <span className="block text-white/95 mt-1">Parcel Delivery</span>
            </motion.h1>

            <motion.p
              variants={slideUp}
              className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0"
              style={{
                textShadow: `
    0px 1px 2px rgba(0,0,0,0.3),
    0px 2px 4px rgba(0,0,0,0.2),
    0px 4px 8px rgba(0,0,0,0.1)
  `,
              }}
            >
              Experience hassle-free shipping with real-time tracking, secure
              handling, and global coverage.
            </motion.p>

            {/* Features - Responsive grid */}
            <motion.div
              variants={slideUp}
              className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 max-w-md mx-auto lg:mx-0"
            >
              {[
                { icon: FiTrendingUp, label: "Real-time", value: "Tracking" },
                { icon: FiShield, label: "Secure", value: "Handling" },
                { icon: FiClock, label: "Fast", value: "Delivery" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-1 sm:space-y-0 sm:space-x-2 bg-white/10 backdrop-blur-sm p-2 sm:p-3 rounded-xl border border-white/10"
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(255,255,255,0.15)",
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
                >
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white filter drop-shadow-md" />
                  <div className="text-center sm:text-left">
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {item.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-white/70 max-xs:hidden xs:block">
                      {item.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Tracking Card - Responsive sizing */}
          <motion.div
            variants={scaleIn}
            className="relative mt-6 sm:mt-8 lg:mt-0"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              {/* Card Header */}
              <div className="bg-linear-to-r from-[#057dc3] to-[#0469a5] p-4 sm:p-5 md:p-6">
                <motion.div
                  className="flex items-center space-x-2 sm:space-x-3"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <BsBoxSeam className="w-5 h-5 sm:w-6 sm:h-6 text-white filter drop-shadow-md" />
                  <h2
                    className="text-white font-semibold text-base sm:text-lg"
                    style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
                  >
                    Track Your Shipment
                  </h2>
                </motion.div>
                <motion.p
                  className="text-white/80 text-xs sm:text-sm mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}
                >
                  Enter your tracking number below
                </motion.p>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 md:p-6">
                <motion.div
                  className="space-y-3 sm:space-y-4"
                  initial="initial"
                  animate="animate"
                  variants={staggerContainer}
                >
                  <motion.div variants={slideUp} className="relative">
                    <input
                      type="text"
                      placeholder="e.g., 12345, ABC123"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleTrack()}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:border-[#057dc3] focus:ring-4 focus:ring-[#057dc3]/10 outline-none transition-all text-gray-800 bg-white text-sm sm:text-base"
                    />

                    {/* Floating label */}
                    <motion.span
                      className="absolute left-3 sm:left-4 -top-2 px-1.5 sm:px-2 text-[10px] sm:text-xs text-[#057dc3] bg-white rounded"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{
                        opacity: trackingNumber ? 1 : 0,
                        y: trackingNumber ? 0 : 5,
                      }}
                    >
                      Tracking Number
                    </motion.span>
                  </motion.div>

                  <motion.button
                    variants={slideUp}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleTrack}
                    className="w-full bg-[#057dc3] text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base flex items-center justify-center space-x-2 group hover:bg-[#0469a5] transition-all cursor-pointer"
                  >
                    <span>Track Now</span>
                    <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </motion.div>

                {/* Stats - Responsive grid */}
                <motion.div
                  variants={slideUp}
                  className="grid grid-cols-3 gap-2 sm:gap-4 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100"
                >
                  {[
                    { value: "15K+", label: "Daily Parcels", icon: FiPackage },
                    {
                      value: "99.9%",
                      label: "Success Rate",
                      icon: FiTrendingUp,
                    },
                    { value: "24/7", label: "Support", icon: FiClock },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#057dc3] mx-auto mb-1 sm:mb-2 filter drop-shadow-md" />
                      <div className="text-sm sm:text-base md:text-lg font-bold text-[#057dc3]">
                        {stat.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-500">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Additional Info */}
                <motion.div
                  variants={slideUp}
                  className="mt-3 sm:mt-4 text-center"
                >
                  <p className="text-[10px] sm:text-xs text-gray-600 flex items-center justify-center space-x-1">
                    <FiMapPin className="w-2 h-2 sm:w-3 sm:h-3 filter drop-shadow-sm" />
                    <span>Track air, ocean & road shipments</span>
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
