// 'use client'
// import Image from "next/image";
// import { MdArrowForward, MdLocationOn } from "react-icons/md";
// import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
// import { useRouter } from "next/navigation";

// const Hero = () => {

//   const router=useRouter()

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14  overflow-hidden">
//       {/* Left Side: Mockup Images */}
//       <div
//         className={`relative flex flex-col items-center lg:items-end transform transition-all duration-700 `}
//       >
//         {/* Image Container with animations */}
//         <div className="relative z-10 group">
//           <div className="relative overflow-hidden  transition-all duration-500">
//             <Image
//               src="/images/about-book-image.jpg"
//               alt="Logistics Fleet 2017"
//               className="w-full h-auto "
//               height={600}
//               width={600}
//               priority
//             />

//           </div>

//         </div>
//       </div>

//       {/* Right Side: Welcome Text */}
//       <div
//         className={`space-y-4 sm:space-y-5 md:space-y-6 transform transition-all duration-700 delay-300 `}
//       >
//         {/* Title with animation */}
//         <div className="relative">

//           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-[#2A2A2A] leading-tight">
//             Welcome to{" "}
//             <span className="text-[#027cc2] relative inline-block">
//               Logistics
//               <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-linear-to-r from-[#027cc2] to-transparent"></div>
//             </span>
//             <br />
//             International
//           </h1>
//         </div>

//         {/* Description with animated paragraphs */}
//         <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm leading-5 sm:leading-6 text-[#777777]">
//           <p className="transform transition-all duration-500 hover:translate-x-1 hover:text-[#4A4A4A]">
//             Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
//             turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere
//             a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam
//             porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
//           </p>
//           <p className="transform transition-all duration-500 hover:translate-x-1 hover:text-[#4A4A4A]">
//             Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
//             euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat
//           </p>
//         </div>

//           <hr className="border-gray-200 border-[1.4px] transition-all duration-500 hover:border-[#027cc2]/30" />

//         {/* Quote with animations */}
//         <blockquote className="relative italic text-gray-500 font-serif text-sm sm:text-base md:text-lg leading-relaxed px-4 sm:px-6 group">
//           <FaQuoteLeft className="absolute -left-1 top-0 text-[#027cc2]/20 text-2xl sm:text-3xl transform transition-all duration-300 group-hover:scale-110 group-hover:text-[#027cc2]/30" />
//           <span className="relative z-10 block pl-4 sm:pl-6">
//             Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
//             aut fugit, sed quia consequuntur magni dolores eos qui ratione
//             voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
//             ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
//             numquam eius modi tempora incidunt ut labore et dolore magnam
//             aliquam.
//           </span>
//           <FaQuoteRight className="absolute -right-1 bottom-0 text-[#027cc2]/20 text-2xl sm:text-3xl transform transition-all duration-300 group-hover:scale-110 group-hover:text-[#027cc2]/30" />
//         </blockquote>

//           <hr className="border-gray-200 border-[1.4px] transition-all duration-500 hover:border-[#027cc2]/30" />

//         {/* CTA Text with animations */}
//         <div className="text-center group cursor-pointer">
//           <button onClick={()=>router.push('/contact')} className="text-sm sm:text-lg md:text-xl tracking-[0.2em] text-[#2A2A2A] flex items-center justify-center gap-2 sm:gap-3 cursor-pointer">
//             <span className="text-[#027cc2] font-semibold md:font-bold relative inline-block">
//               JOIN US
//               <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#027cc2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
//             </span>
//             <span className="w-1 h-1 bg-[#027cc2] rounded-full animate-pulse"></span>
//             <span className="relative text-xs">
//               WE COVER THE WHOLE WORLD
//               <MdLocationOn className="absolute -right-5 top-1/2 -translate-y-1/2 text-[#027cc2] text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
//             </span>
//           </button>

//           {/* Animated underline */}
//           <div className="flex justify-center mt-2">
//             <div className="w-12 h-0.5 bg-linear-to-r from-transparent via-[#027cc2] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Hero;

// "use client";
// import Image from "next/image";
// import { motion, Variants, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import {
// FiGlobe,
//   FiTruck,

//   FiArrowRight,
//   FiPlayCircle,
// } from "react-icons/fi";
// import {
//   RiShipLine,
//   RiCustomerService2Fill,
//   RiFlightTakeoffLine,
// } from "react-icons/ri";
// import { BsBoxSeam, BsGraphUp, BsLightningCharge } from "react-icons/bs";
// import { useRouter } from "next/navigation";

// const AboutPage = () => {
//   const router = useRouter();
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const scale = useTransform(scrollYProgress, [0, 10], [1, 8]);

//   // Animation Variants
//   const fadeInUp: Variants = {
//     hidden: { y: 60, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
//     },
//   };

//   const staggerContainer: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const services = [
//     {
//       title: "Air Freight",
//       description: "Express air cargo solutions to 200+ destinations worldwide",
//       icon: RiFlightTakeoffLine,
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       title: "Ocean Freight",
//       description: "Full container and LCL shipments across major trade routes",
//       icon: RiShipLine,
//       color: "from-teal-500 to-emerald-500",
//     },
//     {
//       title: "Road Transport",
//       description: "Nationwide ground shipping with real-time tracking",
//       icon: FiTruck,
//       color: "from-orange-500 to-amber-500",
//     },
//     {
//       title: "Warehousing",
//       description: "Secure storage and inventory management solutions",
//       icon: BsBoxSeam,
//       color: "from-purple-500 to-pink-500",
//     },
//   ];

//   const timeline = [
//     {
//       year: "1998",
//       event: "Company Founded",
//       description: "Started with a single truck in London",
//     },
//     {
//       year: "2005",
//       event: "Global Expansion",
//       description: "Opened offices in 15 countries",
//     },
//     {
//       year: "2012",
//       event: "Digital Transformation",
//       description: "Launched real-time tracking platform",
//     },
//     {
//       year: "2018",
//       event: "Sustainability Focus",
//       description: "Introduced eco-friendly fleet",
//     },
//     {
//       year: "2024",
//       event: "Global Network",
//       description: "Serving 150+ countries worldwide",
//     },
//   ];

//   return (
//     <div className="bg-white" ref={containerRef}>
//       {/* Hero Section with Parallax */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         {/* Background Image with Parallax */}
//         <motion.div style={{ scale }} className="absolute inset-0 z-0">
//           <Image
//             src="/images/hero-bg-9.jpg"
//             alt="Logistics Background"
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
//         </motion.div>

//         {/* Hero Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           className="relative z-20 text-center text-white max-w-5xl mx-auto px-4"
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ delay: 0.2, type: "spring" }}
//             className="inline-block mb-6"
//           >
//             <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold">
//               Since 1998
//             </span>
//           </motion.div>

//           <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
//             Connecting the World,
//             <span className="block text-[#fdc300]">Delivering Trust</span>
//           </h1>

//           <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
//             From a single truck to a global logistics powerhouse — we've been
//             moving businesses forward for over 25 years.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => router.push("/contact")}
//               className="group bg-[#fdc300] text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
//             >
//               Start Shipping Today
//               <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
//             </motion.button>
//           </div>
//         </motion.div>
//       </section>

//                   {/* Our Journey */}
//         <div className="px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="relative"
//             >
//               <div className="relative z-10">
//                 <Image
//                   src="/images/award2.jpg"
//                   alt="Our Story"
//                   width={600}
//                   height={700}
//                   className="rounded-3xl shadow-2xl"
//                 />
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="space-y-6"
//             >
//               <div className="inline-block">
//                 <span className="text-[#057dc3] font-semibold text-sm uppercase tracking-wider">
//                   Our Journey
//                 </span>
//                 <div className="w-20 h-1 bg-gradient-to-r from-[#fdc300] to-[#057dc3] mt-2 rounded-full"></div>
//               </div>

//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
//                 From Humble Beginnings to
//                 <span className="text-[#057dc3] block">Global Leadership</span>
//               </h2>

//               <p className="text-lg text-gray-600 leading-relaxed">
//                 What started as a single-truck operation in 1998 has grown into
//                 one of the world's most trusted logistics providers. Our journey
//                 has been defined by innovation, reliability, and an unwavering
//                 commitment to our clients.
//               </p>

//               {/* Timeline */}
//               <div className="space-y-4 pt-4">
//                 {timeline.slice(0, 3).map((item, index) => (
//                   <motion.div
//                     key={index}
//                     whileHover={{ x: 10 }}
//                     className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all"
//                   >
//                     <div className="bg-[#057dc3] text-white font-bold px-3 py-1 rounded-lg text-sm">
//                       {item.year}
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-gray-800">{item.event}</h4>
//                       <p className="text-sm text-gray-500">
//                         {item.description}
//                       </p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>

//       {/* Services Section */}
//         <div className="px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <span className="text-[#057dc3] font-semibold text-sm uppercase tracking-wider">
//               What We Do
//             </span>
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
//               Comprehensive Logistics
//               <span className="block text-[#057dc3]">Solutions</span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               End-to-end shipping solutions tailored to your business needs
//             </p>
//           </motion.div>

//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
//           >
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInUp}
//                 whileHover={{ y: -10 }}
//                 className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
//               >
//                 <div
//                   className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
//                 >
//                   <service.icon className="text-white text-2xl" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-3">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-500 text-sm mb-4">
//                   {service.description}
//                 </p>
//                 <button className="text-[#057dc3] font-semibold text-sm flex items-center gap-1 group/btn">
//                   Learn More
//                   <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
//                 </button>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//       {/* Values Section */}
//         <div className="px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="space-y-6"
//             >
//               <div className="inline-block">
//                 <span className="text-[#057dc3] font-semibold text-sm uppercase tracking-wider">
//                   Our Values
//                 </span>
//                 <div className="w-20 h-1 bg-gradient-to-r from-[#fdc300] to-[#057dc3] mt-2 rounded-full"></div>
//               </div>

//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
//                 Built on Trust,
//                 <span className="text-[#057dc3] block">
//                   Driven by Innovation
//                 </span>
//               </h2>

//               <div className="space-y-4">
//                 {[
//                   {
//                     title: "Reliability",
//                     desc: "We deliver on our promises, every time",
//                   },
//                   {
//                     title: "Innovation",
//                     desc: "Constantly evolving to serve you better",
//                   },
//                   {
//                     title: "Sustainability",
//                     desc: "Committed to green logistics",
//                   },
//                   {
//                     title: "Customer First",
//                     desc: "Your success is our success",
//                   },
//                 ].map((value, index) => (
//                   <motion.div
//                     key={index}
//                     whileHover={{ x: 10 }}
//                     className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
//                   >
//                     <div className="bg-[#057dc3] w-2 h-2 rounded-full"></div>
//                     <div>
//                       <h4 className="font-bold text-gray-800">{value.title}</h4>
//                       <p className="text-sm text-gray-500">{value.desc}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="relative"
//             >
//               <Image
//                 src="/images/award3.jpg"
//                 alt="Our Values"
//                 width={600}
//                 height={600}
//                 className="rounded-3xl shadow-2xl"
//               />
//             </motion.div>
//           </div>
//         </div>

//       {/* CTA Section */}
//       <section className="py-14 bg-gradient-to-r from-[#057dc3] to-[#0469a5]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="max-w-3xl mx-auto"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//               Ready to Transform Your Logistics?
//             </h2>
//             <p className="text-xl text-white/90 mb-10">
//               Join thousands of businesses that trust us with their global
//               shipments
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => router.push("/contact")}
//                 className="group bg-white text-[#057dc3] px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
//               >
//                 Get Started Today
//                 <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="group border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#057dc3] transition-all duration-300"
//               >
//                 Explore Services
//               </motion.button>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutPage;

// "use client";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { FiArrowRight } from "react-icons/fi";

// import { useRouter } from "next/navigation";

// const AboutPage = () => {
//   const router = useRouter();
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const scale = useTransform(scrollYProgress, [0, 10], [1, 8]);

//   return (
//     <div className="bg-white" ref={containerRef}>
//       {/* Hero Section with Parallax */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         {/* Background Image with Parallax */}
//         <motion.div style={{ scale }} className="absolute inset-0 z-0">
//           <Image
//             src="/images/hero-bg-9.jpg"
//             alt="Logistics Background"
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
//         </motion.div>

//         {/* Hero Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           className="relative z-20 text-center text-white max-w-5xl mx-auto px-4"
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ delay: 0.2, type: "spring" }}
//             className="inline-block mb-4 sm:mb-6"
//           >
//             <span className="bg-white/20 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
//               Since 1998
//             </span>
//           </motion.div>

//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
//             Connecting the World,
//             <span className="block text-[#fdc300] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl mt-1 sm:mt-2">
//               Delivering Trust
//             </span>
//           </h1>

//           <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-8 sm:mb-10 md:mb-12 text-white/90 max-w-3xl mx-auto px-2 sm:px-0">
//             From a single truck to a global logistics powerhouse — we've been
//             moving businesses forward for over 25 years.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => router.push("/contact")}
//               className="group bg-[#fdc300] text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
//             >
//               Start Shipping Today
//               <FiArrowRight className="text-sm sm:text-base group-hover:translate-x-1 transition-transform" />
//             </motion.button>
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default AboutPage;

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
