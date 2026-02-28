// 'use client'
// import { useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// const Hero = () => {
//   const router = useRouter();
//   const [trackingNumber, setTrackingNumber] = useState("");

//   const handleTrack = () => {
//     if (trackingNumber.trim()) {
//       router.push(`/track-your-parcel?id=${trackingNumber}`);
//     }
//   };

//   return (
//     <section className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/images/hero-bg.jpg"
//           alt="Logistics background"
//           fill
//           sizes="100vw"
//           className="object-cover object-center"
//           priority
//           unoptimized
//         />

//       </div>

//       {/* Content Container */}
//       <div className="relative z-20 w-full max-w-[90%] sm:max-w-xl mx-auto px-4 py-12">
//         <div className="bg-[#00bef2] shadow-2xl rounded-sm overflow-hidden">

//           {/* Header Bar */}
//           <div className="bg-[#027cc2] text-white px-5 py-3 md:py-4">
//             <h2 className="uppercase text-sm md:text-base font-medium md:font-semibold tracking-wider">
//               Enter the Consignment No.
//             </h2>
//           </div>

//           {/* Form Area */}
//           <div className="px-6 py-8 md:px-10">
//             <div className="flex flex-col sm:flex-row gap-0 sm:gap-2 group">
//               <input
//                 placeholder="Enter Tracking Number"
//                 type="number"
//                 inputMode="numeric"
//                 value={trackingNumber}
//                 onChange={(e) => setTrackingNumber(e.target.value)}
//                 className="flex-1 bg-white text-sm p-4 h-12 outline-none border-2 border-transparent focus:border-[#027cc2] transition-all text-gray-800 rounded-t-md sm:rounded-t-none sm:rounded-l-sm [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
//               />
//               <button
//                 onClick={handleTrack}
//                 className="bg-[#fdc300] hover:bg-[#e5b100] px-8 h-12 font-bold text-xs md:text-sm text-white transition-colors  whitespace-nowrap rounded-b-md sm:rounded-b-none sm:rounded-r-sm shadow-lg sm:shadow-none cursor-pointer"
//               >
//                 TRACK RESULT
//               </button>
//             </div>

//             <div className="flex justify-between items-center mt-4">
//                <p className="text-white text-xs md:text-sm ">
//                 Ex: 12345
//                </p>

//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

/////////////////////////////////////////////////////////////////////////////////////////////////

// 'use client'
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FiPackage,
//   FiTruck,
//   FiClock,
//   FiShield,
//   FiArrowRight,
//   FiHelpCircle,
//   FiMapPin,
//   FiGlobe,
//   FiTrendingUp,
//   FiChevronLeft,
//   FiChevronRight
// } from "react-icons/fi";
// import { BsBoxSeam } from "react-icons/bs";

// const Hero = () => {
//   const router = useRouter();
//   const [trackingNumber, setTrackingNumber] = useState("");
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [imagesLoaded, setImagesLoaded] = useState(false);
//   const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

//   const slides = [
//     { image: "/images/hero-bg-1.jpg", alt: "Logistics background 1" },
//     { image: "/images/hero-bg-2.jpg", alt: "Logistics background 2" },
//     { image: "/images/hero-bg-3.jpg", alt: "Logistics background 3" },
//     { image: "/images/hero-bg-4.jpg", alt: "Logistics background 4" },
//   ];

//   // Preload all images
//   useEffect(() => {
//     const preloadImages = async () => {
//       const imagePromises = slides.map((slide, index) => {
//         return new Promise((resolve) => {
//           const img = document.createElement('img');
//           img.src = slide.image;
//           img.onload = () => {
//             setLoadedImages(prev => new Set([...prev, index]));
//             resolve(true);
//           };
//           img.onerror = () => resolve(false); // Resolve even on error to not block
//         });
//       });

//       await Promise.all(imagePromises);
//       setImagesLoaded(true);
//     };

//     preloadImages();
//   }, []);

//   useEffect(() => {
//     // Only start auto-sliding after images are loaded
//     if (!imagesLoaded) return;

//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, [imagesLoaded, slides.length]);

//   const handleTrack = () => {
//     if (trackingNumber.trim()) {
//       router.push(`/track-your-parcel?id=${trackingNumber}`);
//     }
//   };

//   // Smooth animation variants - instant fade
//   const fadeInOut = {
//     initial: { opacity: 0 },
//     animate: { opacity: 1 },
//     exit: { opacity: 0 },
//     transition: { duration: 0.3, ease: "easeInOut" } // Faster transition
//   };

//   const slideUp = {
//     initial: { y: 40, opacity: 0 },
//     animate: { y: 0, opacity: 1 },
//     transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
//   };

//   const scaleIn = {
//     initial: { scale: 0.95, opacity: 0 },
//     animate: { scale: 1, opacity: 1 },
//     transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
//   };

//   const staggerContainer = {
//     animate: {
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2
//       }
//     }
//   };

//   // Show loading state or placeholder while images load
//   if (!imagesLoaded) {
//     return (
//       <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#057dc3]">
//         <div className="absolute inset-0 bg-[#057dc3]"></div>
//         <div className="relative z-20 text-white text-center">
//           <div className="animate-pulse">Loading...</div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
//       {/* Background Image Slider with Instant Fade */}
//       <div className="absolute inset-0 bg-[#057dc3]">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentSlide}
//             variants={fadeInOut}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//             className="absolute inset-0"
//           >
//             <Image
//               src={slides[currentSlide].image}
//               alt={slides[currentSlide].alt}
//               fill
//               sizes="100vw"
//               className="object-cover"
//               priority
//               // Remove unoptimized to benefit from Next.js image optimization
//               quality={90}
//               // Add loading state
//               onLoadingComplete={(img) => {
//                 console.log(`Image ${currentSlide} loaded`);
//               }}
//             />
//           </motion.div>
//         </AnimatePresence>

//         {/* Only dark overlay for better text visibility - no blue gradient */}
//         <div className="absolute inset-0 bg-black/30"></div>
//       </div>

//       {/* Smooth Progress Bar for Slide Indicator */}
//       <motion.div
//         className="absolute top-0 left-0 right-0 h-1 bg-white/20 z-30"
//         initial={{ scaleX: 0 }}
//         animate={{ scaleX: 1 }}
//         transition={{ duration: 6, ease: "linear", repeat: Infinity }}
//         style={{ originX: 0 }}
//         key={currentSlide} // Reset animation on slide change
//       >
//         <div className="h-full bg-white/40" />
//       </motion.div>

//       {/* Elegant Navigation Dots */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className="group relative"
//             aria-label={`Go to slide ${index + 1}`}
//           >
//             <motion.div
//               className={`h-2 rounded-full transition-all duration-300 ${
//                 index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/40"
//               }`}
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//             />
//           </button>
//         ))}
//       </div>

//       {/* Main Content */}
//       <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           variants={staggerContainer}
//           initial="initial"
//           animate="animate"
//           className="grid lg:grid-cols-2 gap-12 items-center"
//         >
//           {/* Left Content - Enhanced visibility */}
//           <motion.div variants={slideUp} className="text-white">
//             <motion.div
//               variants={slideUp}
//               className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/10"
//             >
//               <FiGlobe className="w-4 h-4" />
//               <span className="text-sm font-medium tracking-wide">Global Logistics Partner</span>
//             </motion.div>

//             <motion.h1
//               variants={slideUp}
//               className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
//             >
//               Seamless
//               <span className="block text-white/95">Parcel Delivery</span>
//             </motion.h1>

//             <motion.p
//               variants={slideUp}
//               className="text-lg text-white/90 mb-8 max-w-lg leading-relaxed"
//             >
//               Experience hassle-free shipping with real-time tracking, secure handling, and global coverage.
//             </motion.p>

//             {/* Features with better contrast */}
//             <motion.div
//               variants={slideUp}
//               className="grid grid-cols-3 gap-4"
//             >
//               {[
//                 { icon: FiTrendingUp, label: "Real-time", value: "Tracking" },
//                 { icon: FiShield, label: "Secure", value: "Handling" },
//                 { icon: FiClock, label: "Fast", value: "Delivery" }
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10"
//                   whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <item.icon className="w-5 h-5 text-white" />
//                   <div>
//                     <div className="text-sm font-semibold">{item.value}</div>
//                     <div className="text-xs text-white/70">{item.label}</div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Right Content - Tracking Card */}
//           <motion.div
//             variants={scaleIn}
//             className="relative"
//           >
//             {/* Decorative Elements */}
//             <motion.div
//               className="absolute -top-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-2xl"
//               animate={{ scale: [1, 1.2, 1] }}
//               transition={{ duration: 4, repeat: Infinity }}
//             />

//             <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/20">
//               {/* Card Header */}
//               <div className="bg-gradient-to-r from-[#057dc3] to-[#0469a5] p-6">
//                 <motion.div
//                   className="flex items-center space-x-3"
//                   initial={{ x: -20, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: 0.3 }}
//                 >
//                   <BsBoxSeam className="w-6 h-6 text-white" />
//                   <h2 className="text-white font-semibold text-lg">Track Your Shipment</h2>
//                 </motion.div>
//                 <motion.p
//                   className="text-white/80 text-sm mt-1"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.4 }}
//                 >
//                   Enter your tracking number below
//                 </motion.p>
//               </div>

//               {/* Card Body */}
//               <div className="p-6">
//                 <motion.div
//                   className="space-y-4"
//                   initial="initial"
//                   animate="animate"
//                   variants={staggerContainer}
//                 >
//                   <motion.div variants={slideUp} className="relative">
//                     <input
//                       type="text"
//                       placeholder="e.g., 12345, ABC123, XYZ789"
//                       value={trackingNumber}
//                       onChange={(e) => setTrackingNumber(e.target.value)}
//                       onKeyPress={(e) => e.key === 'Enter' && handleTrack()}
//                       className="w-full px-4 py-4 border-2 border-gray-100 rounded-xl focus:border-[#057dc3] focus:ring-4 focus:ring-[#057dc3]/10 outline-none transition-all text-gray-800 bg-white"
//                     />

//                     {/* Floating label effect on focus */}
//                     <motion.span
//                       className="absolute left-4 -top-2 px-2 text-xs text-[#057dc3] bg-white rounded"
//                       initial={{ opacity: 0, y: 5 }}
//                       animate={{ opacity: trackingNumber ? 1 : 0, y: trackingNumber ? 0 : 5 }}
//                     >
//                       Tracking Number
//                     </motion.span>
//                   </motion.div>

//                   <motion.button
//                     variants={slideUp}
//                     whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(5,125,195,0.3)" }}
//                     whileTap={{ scale: 0.98 }}
//                     onClick={handleTrack}
//                     className="w-full bg-[#057dc3] text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 group hover:bg-[#0469a5] transition-all"
//                   >
//                     <span>Track Now</span>
//                     <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   </motion.button>

//                   {/* Quick Links */}
//                   <motion.div
//                     variants={slideUp}
//                     className="flex items-center justify-between pt-4"
//                   >
//                     <button className="text-sm text-gray-500 hover:text-[#057dc3] transition-colors flex items-center space-x-1 group">
//                       <FiHelpCircle className="w-4 h-4 group-hover:rotate-12 transition-transform" />
//                       <span>Need help?</span>
//                     </button>

//                     <div className="flex items-center space-x-4">
//                       <span className="text-xs text-gray-400">Quick track:</span>
//                       {['12345', 'ABC123', 'XYZ789'].map((num, i) => (
//                         <motion.button
//                           key={i}
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.95 }}
//                           onClick={() => setTrackingNumber(num)}
//                           className="text-xs text-[#057dc3] hover:text-[#0469a5] transition-colors font-medium"
//                         >
//                           {num}
//                         </motion.button>
//                       ))}
//                     </div>
//                   </motion.div>
//                 </motion.div>

//                 {/* Stats */}
//                 <motion.div
//                   variants={slideUp}
//                   className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100"
//                 >
//                   {[
//                     { value: "15K+", label: "Daily Parcels", icon: FiPackage },
//                     { value: "99.9%", label: "Success Rate", icon: FiTrendingUp },
//                     { value: "24/7", label: "Support", icon: FiClock }
//                   ].map((stat, index) => (
//                     <motion.div
//                       key={index}
//                       className="text-center"
//                       whileHover={{ y: -3 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <stat.icon className="w-5 h-5 text-[#057dc3] mx-auto mb-2" />
//                       <div className="text-lg font-bold text-[#057dc3]">{stat.value}</div>
//                       <div className="text-xs text-gray-500">{stat.label}</div>
//                     </motion.div>
//                   ))}
//                 </motion.div>

//                 {/* Additional Info */}
//                 <motion.div
//                   variants={slideUp}
//                   className="mt-4 text-center"
//                 >
//                   <p className="text-xs text-gray-400 flex items-center justify-center space-x-1">
//                     <FiMapPin className="w-3 h-3" />
//                     <span>Track air, ocean, and road shipments in real-time</span>
//                   </p>
//                 </motion.div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Minimal Side Navigation with Smooth Hover */}
//       <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block">
//         <div className="flex flex-col space-y-3">
//           {[
//             { icon: FiChevronLeft, action: () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length) },
//             { icon: FiChevronRight, action: () => setCurrentSlide((prev) => (prev + 1) % slides.length) }
//           ].map((item, index) => (
//             <motion.button
//               key={index}
//               whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
//               whileTap={{ scale: 0.95 }}
//               onClick={item.action}
//               className="p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 transition-colors"
//             >
//               <item.icon className="w-5 h-5 text-white" />
//             </motion.button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

/////////////////////////////////////////////////////////////////////////////////////////////////

// 'use client'
// import { useState, useRef } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import {
//   FiPackage,
//   FiTruck,
//   FiClock,
//   FiShield,
//   FiArrowRight,
//   FiHelpCircle,
//   FiMapPin,
//   FiGlobe,
//   FiTrendingUp,
//   FiChevronLeft,
//   FiChevronRight
// } from "react-icons/fi";
// import { BsBoxSeam } from "react-icons/bs";

// // Import Swiper
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
// import type { Swiper as SwiperType } from 'swiper';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const Hero = () => {
//   const router = useRouter();
//   const [trackingNumber, setTrackingNumber] = useState("");
//   const swiperRef = useRef<SwiperType | null>(null);

//   const slides = [
//     { image: "/images/hero-bg-1.jpg", alt: "Logistics background 1" },
//     { image: "/images/hero-bg-2.jpg", alt: "Logistics background 2" },
//     { image: "/images/hero-bg-3.jpg", alt: "Logistics background 3" },
//     { image: "/images/hero-bg-4.jpg", alt: "Logistics background 4" },

//   ];

//   const handleTrack = () => {
//     if (trackingNumber.trim()) {
//       router.push(`/track-your-parcel?id=${trackingNumber}`);
//     }
//   };

//   // Animation variants
//   const slideUp = {
//     initial: { y: 40, opacity: 0 },
//     animate: { y: 0, opacity: 1 },
//     transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
//   };

//   const scaleIn = {
//     initial: { scale: 0.95, opacity: 0 },
//     animate: { scale: 1, opacity: 1 },
//     transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
//   };

//   const staggerContainer = {
//     animate: {
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2
//       }
//     }
//   };

//   return (
//     <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
//       {/* Swiper Background Slider */}
//       <div className="absolute inset-0 bg-[#057dc3]">
//         <Swiper
//           modules={[Autoplay, EffectFade, Navigation, Pagination]}
//           effect="fade"
//           fadeEffect={{ crossFade: true }}
//           speed={1000}
//           autoplay={{
//             delay: 4000,
//             disableOnInteraction: false,
//           }}
//           loop={true}
//           navigation={false}
//           pagination={false}
//           onBeforeInit={(swiper) => {
//             swiperRef.current = swiper;
//           }}
//           className="h-full w-full"
//         >
//           {slides.map((slide, index) => (
//             <SwiperSlide key={index}>
//               <div className="relative h-full w-full">
//                 <Image
//                   src={slide.image}
//                   alt={slide.alt}
//                   fill
//                   sizes="100vw"
//                   className="object-cover"
//                   priority={index === 0}
//                   quality={90}
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Dark overlay for better text visibility */}
//         <div className="absolute inset-0 bg-black/30 z-10"></div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           variants={staggerContainer}
//           initial="initial"
//           animate="animate"
//           className="grid lg:grid-cols-2 gap-12 items-center"
//         >
//           {/* Left Content - with text shadow */}
//           <motion.div variants={slideUp} className="text-white">
//             <motion.div
//               variants={slideUp}
//               className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/10"
//               style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
//             >
//               <FiGlobe className="w-4 h-4 filter drop-shadow-md" />
//               <span className="text-sm font-medium tracking-wide">Global Logistics Partner</span>
//             </motion.div>

//             <motion.h1
//               variants={slideUp}
//               className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
//               style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5), 4px 4px 8px rgba(0,0,0,0.3)' }}
//             >
//               Seamless
//               <span className="block text-white/95">Parcel Delivery</span>
//             </motion.h1>

//             <motion.p
//               variants={slideUp}
//               className="text-lg text-white/90 mb-8 max-w-lg leading-relaxed"
//               style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.4)' }}
//             >
//               Experience hassle-free shipping with real-time tracking, secure handling, and global coverage.
//             </motion.p>

//             {/* Features with text shadow */}
//             <motion.div
//               variants={slideUp}
//               className="grid grid-cols-3 gap-4"
//             >
//               {[
//                 { icon: FiTrendingUp, label: "Real-time", value: "Tracking" },
//                 { icon: FiShield, label: "Secure", value: "Handling" },
//                 { icon: FiClock, label: "Fast", value: "Delivery" }
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10"
//                   whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
//                   transition={{ duration: 0.2 }}
//                   style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}
//                 >
//                   <item.icon className="w-5 h-5 text-white filter drop-shadow-md" />
//                   <div>
//                     <div className="text-sm font-semibold">{item.value}</div>
//                     <div className="text-xs text-white/70">{item.label}</div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Right Content - Tracking Card */}
//           <motion.div
//             variants={scaleIn}
//             className="relative"
//           >
//             {/* Decorative Elements */}
//             <motion.div
//               className="absolute -top-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-2xl"
//               animate={{ scale: [1, 1.2, 1] }}
//               transition={{ duration: 4, repeat: Infinity }}
//             />

//             <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden ">
//               {/* Card Header */}
//               <div className="bg-gradient-to-r from-[#057dc3] to-[#0469a5] p-6">
//                 <motion.div
//                   className="flex items-center space-x-3"
//                   initial={{ x: -20, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: 0.3 }}
//                 >
//                   <BsBoxSeam className="w-6 h-6 text-white filter drop-shadow-md" />
//                   <h2 className="text-white font-semibold text-lg" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>Track Your Shipment</h2>
//                 </motion.div>
//                 <motion.p
//                   className="text-white/80 text-sm mt-1"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.4 }}
//                   style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}
//                 >
//                   Enter your tracking number below
//                 </motion.p>
//               </div>

//               {/* Card Body */}
//               <div className="p-6">
//                 <motion.div
//                   className="space-y-4"
//                   initial="initial"
//                   animate="animate"
//                   variants={staggerContainer}
//                 >
//                   <motion.div variants={slideUp} className="relative">
//                     <input
//                       type="text"
//                       placeholder="e.g., 12345, ABC123, XYZ789"
//                       value={trackingNumber}
//                       onChange={(e) => setTrackingNumber(e.target.value)}
//                       onKeyDown={(e) => e.key === 'Enter' && handleTrack()}
//                       className="w-full px-4 py-4 border-2 border-gray-100 rounded-xl focus:border-[#057dc3] focus:ring-4 focus:ring-[#057dc3]/10 outline-none transition-all text-gray-800 bg-white"
//                     />

//                     {/* Floating label */}
//                     <motion.span
//                       className="absolute left-4 -top-2 px-2 text-xs text-[#057dc3] bg-white rounded"
//                       initial={{ opacity: 0, y: 5 }}
//                       animate={{ opacity: trackingNumber ? 1 : 0, y: trackingNumber ? 0 : 5 }}
//                     >
//                       Tracking Number
//                     </motion.span>
//                   </motion.div>

//                   <motion.button
//                     variants={slideUp}
//                     whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(5,125,195,0.3)" }}
//                     whileTap={{ scale: 0.98 }}
//                     onClick={handleTrack}
//                     className="w-full bg-[#057dc3] text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 group hover:bg-[#0469a5] transition-all"
//                   >
//                     <span>Track Now</span>
//                     <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   </motion.button>

//                 </motion.div>

//                 {/* Stats */}
//                 <motion.div
//                   variants={slideUp}
//                   className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100"
//                 >
//                   {[
//                     { value: "15K+", label: "Daily Parcels", icon: FiPackage },
//                     { value: "99.9%", label: "Success Rate", icon: FiTrendingUp },
//                     { value: "24/7", label: "Support", icon: FiClock }
//                   ].map((stat, index) => (
//                     <motion.div
//                       key={index}
//                       className="text-center"
//                       whileHover={{ y: -3 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <stat.icon className="w-5 h-5 text-[#057dc3] mx-auto mb-2 filter drop-shadow-md" />
//                       <div className="text-lg font-bold text-[#057dc3]">{stat.value}</div>
//                       <div className="text-xs text-gray-500">{stat.label}</div>
//                     </motion.div>
//                   ))}
//                 </motion.div>

//                 {/* Additional Info */}
//                 <motion.div
//                   variants={slideUp}
//                   className="mt-4 text-center"
//                 >
//                   <p className="text-xs text-gray-400 flex items-center justify-center space-x-1">
//                     <FiMapPin className="w-3 h-3 filter drop-shadow-sm" />
//                     <span>Track air, ocean, and road shipments in real-time</span>
//                   </p>
//                 </motion.div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Add custom styles for better text shadow */}
//       <style jsx global>{`
//         .text-shadow-sm {
//           text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
//         }
//         .text-shadow-md {
//           text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
//         }
//         .text-shadow-lg {
//           text-shadow: 3px 3px 6px rgba(0,0,0,0.6);
//         }
//         .drop-shadow-custom {
//           filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.3));
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;

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
                  quality={85}
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
  `
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
  `
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
  `
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
            {/* Decorative Elements - hidden on mobile */}
            <motion.div
              className="absolute -top-4 -right-4 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-white/5 rounded-full blur-2xl max-sm:hidden sm:block"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-[#057dc3] to-[#0469a5] p-4 sm:p-5 md:p-6">
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
