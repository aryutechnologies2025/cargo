


// import Image from "next/image";
// import Link from "next/link";
// import { BiLogoTelegram } from "react-icons/bi";

// const Footer = () => {
//   const quickLinks = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Contact", href: "/contact" },
//     { name: "Track your parcel", href: "/track-your-parcel" }
//   ];

//   const footerLinks = ["Terms and conditions"];

//   return (
//     <footer className="w-full bg-[#2a2a2a] text-gray-300">
//       {/* Main footer content */}
//       <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 lg:gap-12">
          
//           {/* CEO's Statement Section */}
//           <div className="flex flex-col">
//             <h3 className="text-white font-extrabold tracking-wide uppercase">
//               OUR CEO's STATEMENT
//             </h3>
//             <hr className="border-t-2 border-[#fdc300] w-8 mt-1.5" />
//             <p className="text-[15px] text-[#99ABB8] leading-6 mt-8 md:mt-12 font-karla">
//               Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
//               commodo ligula eget dolor. Aenean massa. Cum sociis natoque
//               penatibus et magnis dis parturient montes, nascetur ridiculus mus.
//             </p>
//             <Image
//               src="/icons/sign.webp"
//               alt="sign"
//               width={160}
//               height={80}
//               className="mt-5 w-40 h-auto object-contain brightness-0 invert"
//             />
//           </div>

//           {/* Quick Links Section */}
//           <div className="flex flex-col">
//             <h3 className="text-white font-extrabold tracking-wide uppercase">
//               QUICK LINKS
//             </h3>
//             <hr className="border-t-2 border-[#fdc300] w-8 mt-1.5" />
//             <div className="flex flex-col gap-1 mt-8 md:mt-12">
//               {quickLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   className="font-karla font-medium pb-3 text-[#99ABB8] hover:text-[#fdc300] transition-colors uppercase duration-200 text-sm md:text-base"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Newsletter Section */}
//           <div className="flex flex-col">
//             <h3 className="text-white font-extrabold tracking-wide uppercase">
//               NEWSLETTER SIGNUP
//             </h3>
//             <hr className="border-t-2 border-[#fdc300] w-8 mt-1.5" />
//             <p className="font-karla text-[#99ABB8] leading-6 mt-8 md:mt-12">
//               If you want receive our all weekly updates about new offers and
//               discount, signup below.
//             </p>

//             {/* Email Signup Form */}
//             <form className="flex bg-white mt-6 group overflow-hidden rounded-sm">
//               <input
//                 type="email"
//                 required
//                 placeholder="Email Address"
//                 className="flex-1 px-4 py-3 text-sm bg-white outline-none text-black placeholder-gray-500"
//               />
//               <button 
//                 type="submit"
//                 className="bg-[#429bd5] hover:bg-[#027cc2] transition-colors px-4 flex items-center justify-center text-white text-xl"
//                 aria-label="Subscribe"
//               >
//                 <BiLogoTelegram />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Bottom footer with copyright and links */}
//       <div className="bg-[#027cc2] text-white">
//         <div className="max-w-6xl mx-auto px-6 py-6">
//           <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-center md:text-left text-sm font-medium">
//             {/* Copyright */}
//             <p className="opacity-90">
//               Copyright © 2026. All rights Reserved by Cargo Lord
//             </p>

//             {/* Footer links */}
//             <div className="flex flex-wrap justify-center gap-x-6">
//               {footerLinks.map((link) => (
//                 <Link 
//                   key={link} 
//                   href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
//                   className="hover:underline transition-all"
//                 >
//                   {link}
//                 </Link>
//               ))}
//             </div>

//              <a href="https://aryutechnologies.com/" target="_blank">
//             <div className="flex gap-2 hover:text-white text-[#F4E9E9] transition-all duration-500">
//               <p>Powered by Aryu Technologies</p>
//               <Image
//                 src="/icons/aryu-logo.svg"
//                 height={16}
//                 width={26}
//                 alt="aryu logo"
//               />
//             </div>
//           </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



'use client'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BiLogoTelegram } from "react-icons/bi";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Track Parcel", href: "/track-your-parcel" },
  ];

 

  const contactInfo = [
    { icon: FaMapMarkerAlt, text: "123 Logistics Avenue, New York, NY 10001" },
    { icon: FaPhoneAlt, text: "+1 (234) 567-8900" },
    { icon: FaEnvelope, text: "info@cargologistics.com" },
    { icon: FaClock, text: "Mon - Sat: 24/7 Service" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "https://www.facebook.com/people/CARGO-LORD-LTD/100068334092103/#", label: "Facebook" },
    { icon: FaTwitter, href: "https://x.com/cargolordltd", label: "Twitter" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/cargo-lord-ltd", label: "LinkedIn" },
  ];

  const footerLinks = [
    { name: "Terms and Conditions", href: "/terms-and-conditions" },
   
  ];

  return (
    <footer className="w-full bg-white border-t border-gray-200">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* CEO's Statement Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="text-gray-800 font-bold text-lg uppercase tracking-wider">
              OUR CEO's STATEMENT
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-[#fdc300] to-[#057dc3] mt-2 rounded-full" />
            
            <p className="text-gray-600 text-sm leading-relaxed mt-6 font-karla">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            
            <Image
              src="/icons/sign.webp"
              alt="CEO Signature"
              width={160}
              height={80}
              className="mt-6 w-36 h-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#057dc3] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 border border-gray-200 hover:border-transparent"
                  aria-label={social.label}
                >
                  <social.icon className="text-sm" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="text-gray-800 font-bold text-lg uppercase tracking-wider">
              QUICK LINKS
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-[#fdc300] to-[#057dc3] mt-2 rounded-full" />
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-6">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-[#057dc3] transition-colors duration-200 text-sm py-1.5 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-[#057dc3] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.name}
                </Link>
              ))}
            </div>

            
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="text-gray-800 font-bold text-lg uppercase tracking-wider">
              CONTACT US
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-[#fdc300] to-[#057dc3] mt-2 rounded-full" />
            
            <div className="flex flex-col gap-4 mt-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="mt-1">
                    <item.icon className="text-[#057dc3] text-lg group-hover:text-[#fdc300] transition-colors" />
                  </div>
                  <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

           
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="text-gray-800 font-bold text-lg uppercase tracking-wider">
              NEWSLETTER
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-[#fdc300] to-[#057dc3] mt-2 rounded-full" />
            
            <p className="text-gray-600 text-sm leading-relaxed mt-6">
              Subscribe to our newsletter for exclusive updates, offers, and logistics insights.
            </p>

            {/* Email Signup Form */}
            <form className="mt-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex items-center bg-gray-50 rounded-lg overflow-hidden border border-gray-200 focus-within:border-[#057dc3] transition-colors">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 bg-transparent text-sm text-gray-800 outline-none placeholder-gray-400"
                />
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#057dc3] to-[#0469a5] hover:from-[#0469a5] hover:to-[#057dc3] px-5 py-3 flex items-center justify-center text-white text-xl transition-all duration-300"
                  aria-label="Subscribe"
                >
                  <BiLogoTelegram />
                </motion.button>
              </div>
              
            </form>

           
          </motion.div>
        </div>
      </div>

      {/* Bottom footer with copyright and links */}
      <div className=" ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-sm">
            {/* Copyright */}
            <p className="/90 text-center lg:text-left">
              Copyright © {new Date().getFullYear()}. All rights reserved by{" "}
              <span className="font-semibold ">Cargo Lord</span>
            </p>

            {/* Footer links */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="/80 hover: text-xs uppercase tracking-wider transition-colors hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Powered by */}
            <a 
              href="https://aryutechnologies.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex items-center gap-2 /80 hover: transition-colors">
                <span className="text-xs">Powered by</span>
                <span className="font-semibold text-sm group-hover:underline">Aryu Technologies</span>
                <Image
                  src="/icons/aryu-logo.svg"
                  height={20}
                  width={30}
                  alt="Aryu Technologies"
                  className=""
                />
              </div>
            </a>
          </div>

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;