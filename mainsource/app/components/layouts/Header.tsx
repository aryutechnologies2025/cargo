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
//       <nav className="bg-[#1874c1] py-4">
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





"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about/" },
    { name: "Contact", href: "/contact/" },
    { name: "Track your parcel", href: "/track-your-parcel/" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-white font-karla relative overflow-x-clip">
      {/* Top section */}
      <div className="border-b border-gray-300">
        <div className="flex justify-between md:justify-around px-4 py-4 md:py-6 items-center max-w-7xl mx-auto">
          <Link href='/'>
            <Image
              src="/icons/logo.png"
              alt="logo"
              width={200}
              height={20}
              className="object-contain h-8 w-44 md:h-9 md:w-56"
            />
          </Link>

          <div className="flex items-center gap-6">
            <div className="max-sm:hidden sm:flex gap-3 items-center">
              <div className="flex items-center gap-2">
                <Phone className="text-blue-500 size-5" />
                <div className="text-[10px] md:text-xs text-[#474747] font-semibold leading-tight">
                  <p>WANT A TRANSPORT</p>
                  <p>CALL US NOW</p>
                </div>
              </div>
              <p className="border-l border-gray-300 h-7"></p>
              <p className="text-lg md:text-2xl font-open-sans font-bold text-[#474747] mt-1 tracking-wide">
                (01) 114 336 321
              </p>
            </div>

            <button 
              className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors" 
              onClick={toggleMenu}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="bg-[#1874c1] max-md:hidden md:block">
        <ul className="flex justify-center items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`block px-6 py-4 font-semibold transition-colors tracking-wide uppercase text-sm ${
                    isActive 
                      ? " text-[#FDC300] " 
                      : "text-white/90 hover:bg-[#1463a5] hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Sidebar Section */}
      <div 
        className={`fixed inset-0  backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      />

      <div 
        className={`fixed top-0 right-0 h-full w-70 bg-[#1874c1] z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-white/20">
          <span className="text-white font-bold tracking-widest text-sm uppercase">Menu</span>
          <button onClick={toggleMenu} className="text-white p-1">
            <X size={28} />
          </button>
        </div>

        <ul className="flex flex-col mt-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={toggleMenu}
                  className={`block px-6 py-4 font-medium border-b border-white/5 transition-colors ${
                    isActive 
                      ? "bg-white/20 text-white border-l-4 border-l-white" // Mobile Active Style
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;