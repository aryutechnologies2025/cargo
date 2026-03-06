// 'use client'
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { BiLogoTelegram } from "react-icons/bi";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaInstagram,
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaClock
// } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

// const Footer = () => {
//   const quickLinks = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/about" },
//     { name: "Our Services", href: "/services" },
//     { name: "Contact", href: "/contact" },
//     { name: "Track Parcel", href: "/track-your-parcel" },
//   ];

//   const contactInfo = [
//     { icon: FaMapMarkerAlt, text: "Cargo Lord Ltd Unit 3, 3 Langton Road ,Birmingham B8 3DG" },
//     { icon: FaPhoneAlt, text: "+1 (234) 567-8900" },
//     { icon: FaEnvelope, text: "info@cargologistics.com" },
//     { icon: FaClock, text: "Mon - Sat: 24/7 Service" },
//   ];

//   const socialLinks = [
//     { icon: FaFacebookF, href: "https://www.facebook.com/people/CARGO-LORD-LTD/100068334092103/#", label: "Facebook" },
//     { icon: FaXTwitter, href: "https://x.com/cargolordltd", label: "Twitter" },
//     { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/cargo-lord-ltd", label: "LinkedIn" },
//   ];

//   const footerLinks = [
//     { name: "Terms and Conditions", href: "/terms-and-conditions" },

//   ];

//   return (
//     <footer className="w-full bg-white border-t border-gray-200 px-5 sm:px-7 md:px-16 lg:px-32 ">
//       {/* Main footer content */}
//       <div className="mx-auto py-12 md:py-16 lg:py-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

//           {/* CEO's Statement Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="flex flex-col"
//           >
//             <h3 className="text-gray-800 font-bold text-lg uppercase tracking-wider">
//               OUR CEO's STATEMENT
//             </h3>
//             <div className="w-12 h-1 bg-linear-to-r from-[#fdc300] to-[#057dc3] mt-2 rounded-full" />

//             <p className="text-gray-600 text-sm leading-relaxed mt-6 font-karla">
//               Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
//               commodo ligula eget dolor. Aenean massa. Cum sociis natoque
//               penatibus et magnis dis parturient montes, nascetur ridiculus mus.
//             </p>

//             {/* Social Links */}
//             <div className="flex gap-3 mt-6">
//               {socialLinks.map((social, index) => (
//                 <motion.a
//                   key={index}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ y: -3, scale: 1.1 }}
//                   className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#057dc3] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 border border-gray-200 hover:border-transparent"
//                   aria-label={social.label}
//                 >
//                   <social.icon className="text-sm" />
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>

//           {/* Quick Links Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             viewport={{ once: true }}
//             className="flex flex-col"
//           >
//             <h3 className="text-gray-800 font-bold text-lg uppercase tracking-wider">
//               QUICK LINKS
//             </h3>
//             <div className="w-12 h-1 bg-linear-to-r from-[#fdc300] to-[#057dc3] mt-2 rounded-full" />

//             <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-6">
//               {quickLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   className="text-gray-600 hover:text-[#057dc3] transition-colors duration-200 text-sm py-1.5 flex items-center group"
//                 >
//                   <span className="w-1.5 h-1.5 bg-[#057dc3] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
//                   {link.name}
//                 </Link>
//               ))}
//             </div>

//           </motion.div>

//           {/* Contact Information */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="flex flex-col"
//           >
//             <h3 className="text-gray-800 font-bold text-lg uppercase tracking-wider">
//               CONTACT US
//             </h3>
//             <div className="w-12 h-1 bg-linear-to-r from-[#fdc300] to-[#057dc3] mt-2 rounded-full" />

//             <div className="flex flex-col gap-4 mt-6">
//               {contactInfo.map((item, index) => (
//                 <div key={index} className="flex items-start gap-3 group">
//                   <div className="mt-1">
//                     <item.icon className="text-[#057dc3] text-lg group-hover:text-[#fdc300] transition-colors" />
//                   </div>
//                   <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors">
//                     {item.text}
//                   </p>
//                 </div>
//               ))}
//             </div>

//           </motion.div>

//         </div>
//       </div>

//       {/* Bottom footer with copyright and links */}
//         <div className="mx-auto  py-6">
//           <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-sm">
//             {/* Copyright */}
//             <p className="/90 text-center lg:text-left">
//               Copyright © {new Date().getFullYear()}. All rights reserved by{" "}
//               <span className="font-semibold ">Cargo Lord</span>
//             </p>

//             {/* Footer links */}
//             <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
//               {footerLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   className="/80 hover: text-xs uppercase tracking-wider transition-colors hover:underline"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>

//             {/* Powered by */}
//             <a
//               href="https://aryutechnologies.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group"
//             >
//               <div className="flex items-center gap-2 /80 hover: transition-colors">
//                 <span className="text-xs">Powered by</span>
//                 <span className="font-semibold text-sm group-hover:underline">Aryu Technologies</span>
//                 <Image
//                   src="/icons/aryu-logo.svg"
//                   height={20}
//                   width={30}
//                   alt="Aryu Technologies"
//                   className=""
//                 />
//               </div>
//             </a>
//           </div>

//         </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useRef } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaArrowRight,
  FaPaperPlane,
  FaShip,
  FaWarehouse,
  FaBoxOpen,
} from "react-icons/fa";
import { PiAirplaneTilt } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";

const Footer = () => {
  const ref = useRef(null);

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Track Parcel", href: "/track-your-parcel" },
  ];

  const serviceLinks = [
    {
      name: "Air Freight",
      href: "/services/air-freight",
      icon: PiAirplaneTilt,
    },
    { name: "Sea Freight", href: "/services/sea-freight", icon: FaShip },
    { name: "Warehousing", href: "/services/warehousing", icon: FaWarehouse },
  ];

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      text: "Cargo Lord Ltd, Unit 3, 3 Langton Road, Birmingham B8 3DG",
    },
    { icon: FaPhoneAlt, text: "+44 (0) 1234 567890" },
    { icon: FaEnvelope, text: "info@cargolord.com" },
    { icon: FaClock, text: "24/7 Support - Always Open" },
  ];

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/people/CARGO-LORD-LTD/100068334092103/#",
      label: "Facebook",
      color: "hover:bg-[#1877F2]",
    },
    {
      icon: FaXTwitter,
      href: "https://x.com/cargolordltd",
      label: "Twitter",
      color: "hover:bg-[#1DA1F2]",
    },
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/company/cargo-lord-ltd",
      label: "LinkedIn",
      color: "hover:bg-[#0A66C2]",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/cargolord",
      label: "Instagram",
      color: "hover:bg-[#E4405F]",
    },
  ];

  const footerLinks = [
    { name: "Terms and Conditions", href: "/terms-and-conditions" },
  ];

  // Animation variants with proper typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, duration: 0.5 },
    },
  };

  return (
    <footer className="w-full bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Main footer content with your specified padding */}
      <div className="px-5 sm:px-7 md:px-16 lg:px-32 py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10"
        >
          {/* Brand Section - Larger column */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-bold text-gray-800">
                Cargo<span className="text-[#027cc2]">Lord</span>
              </h2>
            </div>

            <p className="text-gray-600  leading-relaxed mb-4">
              Your trusted partner in global logistics. We deliver excellence in
              air freight, sea freight, and warehousing solutions.
            </p>

            {/* Newsletter Signup */}
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-gray-800 font-bold text-base sm:text-lg mb-3 flex items-center gap-2">
              <span className="w-1 h-4 bg-[#fdc300] rounded-full"></span>
              QUICK LINKS
            </h3>

            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#027cc2] transition-colors duration-200  flex items-center gap-2 group"
                  >
                    <FaArrowRight className="text-[8px] text-[#027cc2] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Our Services */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-gray-800 font-bold text-base sm:text-lg mb-3 flex items-center gap-2">
              <span className="w-1 h-4 bg-[#fdc300] rounded-full"></span>
              OUR SERVICES
            </h3>

            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#027cc2] transition-colors duration-200  flex items-center gap-2 group"
                  >
                    <link.icon className="text-[#027cc2] text-xs sm:text-sm" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information - Spans 2 columns on desktop */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="text-gray-800 font-bold text-base sm:text-lg mb-3 flex items-center gap-2">
              <span className="w-1 h-4 bg-[#fdc300] rounded-full"></span>
              CONTACT US
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-2 sm:gap-3 group bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100"
                >
                  <div className="mt-1 shrink-0">
                    <item.icon className="text-[#027cc2] text-base sm:text-lg group-hover:text-[#fdc300] transition-colors" />
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm group-hover:text-gray-800 transition-colors">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gray-100 ${social.color} text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 border border-gray-200 hover:border-transparent shadow-sm hover:shadow-lg`}
                  aria-label={social.label}
                >
                  <social.icon className="text-xs sm:text-sm" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom footer with linear background */}
      <div className="bg-linear-to-r from-[#027cc2]/10 to-[#034a8f]/10 border-t border-gray-200">
        <div className="px-5 sm:px-7 md:px-16 lg:px-32 py-4 sm:py-5 md:py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-3 sm:gap-4">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-gray-600 text-center lg:text-left text-xs sm:text-sm order-2 lg:order-1"
            >
              Copyright © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-[#027cc2]">Cargo Lord</span>.
              All rights reserved.
            </motion.p>

            {/* Footer links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-2 order-1 lg:order-2"
            >
              {footerLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#027cc2] text-[10px] sm:text-xs uppercase tracking-wider transition-colors hover:underline"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Powered by */}
            <motion.a
              href="https://aryutechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="order-3"
            >
              <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600 hover:text-[#027cc2] transition-colors">
                <span className="text-[10px] sm:text-xs">Powered by</span>
                <span className="font-semibold text-xs sm:text-sm">
                  Aryu Technologies
                </span>
                <Image
                  src="/icons/aryu-logo.svg"
                  height={16}
                  width={24}
                  alt="Aryu Technologies"
                  className="sm:h-5 sm:w-7"
                />
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
