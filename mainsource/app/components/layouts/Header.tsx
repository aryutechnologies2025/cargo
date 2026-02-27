// // components/Header.tsx
// import Image from "next/image";
// import Link from "next/link";
// import { Phone } from "lucide-react";

// const Header = () => {
//   const navItems = [
//     "Home",
//     "About",
//     "Contact",
//     "Track your parcel"
//   ];

//   return (
//     <header className="w-full bg-white font-karla">
//       {/* Top section with logo and contact */}
//       <div className="border-b border-gray-300">
//         <div className="flex justify-around py-6 items-center">
//           {/* Logo */}
//           <Link href='/'>
          
//           <Image
//             src="/icons/logo.png"
//             alt="logo"
//             width={200}
//             height={20}
//             className="object-contain h-9 w-56"
//           />
//           </Link>


//           {/* Contact */}
//           <div className="flex gap-3 items-center">
//             <div className="flex items-center gap-2">
//               <Phone className="text-blue-500 size-5" />

//               <div className="text-xs text-[#474747] font-semibold">
//                 <p>WANT A TRANSPORT</p>
//                 <p>CALL US NOW</p>
//               </div>
//             </div>

//             <p className="border-l border-gray-300 h-7 "></p>
//             <p className="text-2xl font-open-sans font-bold text-[#474747] mt-1 tracking-wide">
//               (01) 114 336 321
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Navigation - exactly as in image */}
//       <nav className="bg-[#027cc2] py-4">
//         <ul className="flex justify-center items-center  divide-gray-300">
//           {navItems.map((item, index) => (
//             <li key={item}>
//               <Link
//                 href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}

//                 className="block px-5 py-3  font-semibold text-white hover:text-gray-200 transition-colors  tracking-wide"
//               >
//                 {item}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;





// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation"; // Import usePathname
// import { Phone, Menu, X } from "lucide-react";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname(); // Get current route

//   const navItems = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about/" },
//     { name: "Contact", href: "/contact/" },
//     { name: "Track your parcel", href: "/track-your-parcel/" },
//   ];

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <header className="w-full bg-white font-karla relative overflow-x-clip">
//       {/* Top section */}
//       <div className="border-b border-gray-300">
//         <div className="flex justify-between md:justify-around px-4 py-4 md:py-6 items-center max-w-7xl mx-auto">
//           <Link href='/'>
//             <Image
//               src="/icons/logo.png"
//               alt="logo"
//               width={200}
//               height={20}
//               className="object-contain h-8 w-44 md:h-9 md:w-56"
//             />
//           </Link>

//           <div className="flex items-center gap-6">
//             <div className="max-sm:hidden sm:flex gap-3 items-center">
//               <div className="flex items-center gap-2">
//                 <Phone className="text-blue-500 size-5" />
//                 <div className="text-[10px] md:text-xs text-[#474747] font-semibold leading-tight">
//                   <p>WANT A TRANSPORT</p>
//                   <p>CALL US NOW</p>
//                 </div>
//               </div>
//               <p className="border-l border-gray-300 h-7"></p>
//               <p className="text-lg md:text-2xl font-open-sans font-bold text-[#474747] mt-1 tracking-wide">
//                 (01) 114 336 321
//               </p>
//             </div>

//             <button 
//               className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors" 
//               onClick={toggleMenu}
//             >
//               <Menu size={24} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Desktop Navigation */}
//       <nav className="bg-[#027cc2] bg-[#027cc2] max-md:hidden md:block">
//         <ul className="flex justify-center items-center">
//           {navItems.map((item) => {
//             const isActive = pathname === item.href;
//             return (
//               <li key={item.name}>
//                 <Link
//                   href={item.href}
//                   className={`block px-6 py-4 font-semibold transition-colors tracking-wide uppercase text-sm ${
//                     isActive 
//                       ? " text-[#FDC300] " 
//                       : "text-white/90 hover:bg-[#1463a5] hover:text-white"
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>

//       {/* Mobile Sidebar Section */}
//       <div 
//         className={`fixed inset-0  backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
//           isOpen ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//         onClick={toggleMenu}
//       />

//       <div 
//         className={`fixed top-0 right-0 h-full w-70 bg-[#027cc2] z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex justify-between items-center p-5 border-b border-white/20">
//           <span className="text-white font-bold tracking-widest text-sm uppercase">Menu</span>
//           <button onClick={toggleMenu} className="text-white p-1">
//             <X size={28} />
//           </button>
//         </div>

//         <ul className="flex flex-col mt-4">
//           {navItems.map((item) => {
//             const isActive = pathname === item.href;
//             return (
//               <li key={item.name}>
//                 <Link
//                   href={item.href}
//                   onClick={toggleMenu}
//                   className={`block px-6 py-4 font-medium border-b border-white/5 transition-colors ${
//                     isActive 
//                       ? "bg-white/20 text-white border-l-4 border-l-white" // Mobile Active Style
//                       : "text-white/80 hover:bg-white/10 hover:text-white"
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Header;




"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  Menu, 
  X, 
  ChevronDown,
  MapPin,
  Clock,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

 

  const navItems = [
    { name: "Home", href: "/", hasDropdown: false },
    { name: "About", href: "/about/", hasDropdown: false },
    { 
      name: "Services", 
      href: "/services/", 
      hasDropdown: true,
      dropdownItems: [
        { name: "Air Freight", href: "/services/air-freight" },
        { name: "Sea Freight", href: "/services/sea-freight" },
        { name: "Road Transport", href: "/services/road-transport" },
        { name: "Rail Transport", href: "/services/rail-transport" },
        { name: "Warehousing", href: "/services/warehousing" },
      ]
    },
    { name: "Track Parcel", href: "/track-your-parcel/", hasDropdown: false },
    { name: "Contact", href: "/contact/", hasDropdown: false },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Animation variants
  const slideIn = {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
    transition: { type: "spring", damping: 25, stiffness: 200 }
  };

  const fadeIn = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <header className={`w-full font-karla  z-50 transition-all duration-300 `}>
      

      {/* Main header */}
      <div className={`bg-white border-b border-gray-100 transition-all duration-300 `}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-1">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href='/' className="relative z-50">
              <Image
                src="/icons/logo.png"
                alt="Cargo Logistics"
                width={200}
                height={20}
                className="object-contain h-8 w-44 md:h-9 md:w-56 hover:opacity-90 transition-opacity"
                priority
              />
            </Link>

            {/* Desktop Contact Info */}
            <div className="max-lg:hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-full">
                <div className="bg-[#027cc2] p-2 rounded-full">
                  <Phone className="text-white size-4" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">24/7 SUPPORT</p>
                  <p className="text-lg font-bold text-[#027cc2]">(01) 114 336 321</p>
                </div>
              </div>
              
             
            </div>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden relative z-50 p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="bg-[#027cc2] max-lg:hidden  lg:block">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="flex items-center justify-end">
            {navItems.map((item) => (
              <li 
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-5 py-3.5 font-medium transition-all duration-300  tracking-wide ${
                    pathname === item.href
                      ? "text-[#FDC300] bg-white/10"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown size={16} className={`transition-transform duration-300 group-hover:rotate-180 ${
                      activeDropdown === item.name ? "rotate-180" : ""
                    }`} />
                  )}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.hasDropdown && activeDropdown === item.name && (
                    <motion.div
                      variants={fadeIn}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-lg overflow-hidden z-50"
                    >
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-5 py-3 text-sm text-gray-700 hover:bg-[#027cc2] hover:text-white transition-colors border-b border-gray-100 last:border-0"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMenu}
            />

            {/* Sidebar */}
            <motion.div 
              variants={slideIn}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed top-0 right-0 h-full w-[85%] max-w-md bg-gradient-to-b from-[#027cc2] to-[#0469a5] z-50 shadow-2xl lg:hidden overflow-y-auto"
            >
              {/* Sidebar Header */}
              <div className="p-6 border-b border-white/20">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-white font-bold text-xl tracking-wider">Menu</span>
                  <button onClick={closeMenu} className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors">
                    <X size={28} />
                  </button>
                </div>
                
                {/* Mobile Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white/90">
                    <Phone size={16} className="text-[#FDC300]" />
                    <span className="text-sm">(01) 114 336 321</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <Mail size={16} className="text-[#FDC300]" />
                    <span className="text-sm">info@cargologistics.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <MapPin size={16} className="text-[#FDC300]" />
                    <span className="text-sm">New York, NY 10001</span>
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="p-4">
                {navItems.map((item) => (
                  <div key={item.name} className="mb-1">
                    {item.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className="w-full flex items-center justify-between px-4 py-3.5 text-white hover:bg-white/10 rounded-lg transition-colors"
                        >
                          <span className="font-medium">{item.name}</span>
                          <ChevronDown size={18} className={`transition-transform duration-300 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`} />
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-4"
                            >
                              {item.dropdownItems?.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  onClick={closeMenu}
                                  className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg text-sm transition-colors"
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={`block px-4 py-3.5 rounded-lg transition-colors ${
                          pathname === item.href
                            ? "bg-white/20 text-white font-medium border-l-4 border-l-[#FDC300]"
                            : "text-white/80 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

               

                {/* Social Links - Mobile */}
                <div className="flex justify-center gap-4 mt-8 pt-6 border-t border-white/20">
                  <Link href="#" className="text-white/70 hover:text-white transition-colors p-2">
                    <Facebook size={20} />
                  </Link>
                  <Link href="#" className="text-white/70 hover:text-white transition-colors p-2">
                    <Twitter size={20} />
                  </Link>
                  <Link href="#" className="text-white/70 hover:text-white transition-colors p-2">
                    <Linkedin size={20} />
                  </Link>
                  <Link href="#" className="text-white/70 hover:text-white transition-colors p-2">
                    <Instagram size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;