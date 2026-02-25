// components/Header.tsx
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

const Header = () => {
  const navItems = [
    "Home",
        "Services",
    "About",
    "Contact",
  ];

  return (
    <header className="w-full bg-white font-karla">
      {/* Top section with logo and contact */}
      <div className="border-b border-gray-300">
        <div className="flex justify-around py-6 items-center">
          {/* Logo */}
          <Image
            src="/icons/logo.webp"
            alt="logo"
            width={200}
            height={20}
            className="object-contain h-9 w-56"
          />

          {/* Contact */}
          <div className="flex gap-3 items-center">
            <div className="flex items-center gap-2">
              <Phone className="text-blue-500 size-5" />

              <div className="text-xs text-[#474747] font-semibold">
                <p>WANT A TRANSPORT</p>
                <p>CALL US NOW</p>
              </div>
            </div>

            <p className="border-l border-gray-300 h-7 "></p>
            <p className="text-2xl font-open-sans font-bold text-[#474747] mt-1 tracking-wide">
              (01) 114 336 321
            </p>
          </div>
        </div>
      </div>

      {/* Navigation - exactly as in image */}
      <nav className="bg-[#1874c1] py-4">
        <ul className="flex justify-center items-center  divide-gray-300">
          {navItems.map((item, index) => (
            <li key={item}>
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="block px-5 py-3  font-semibold text-white hover:text-gray-200 transition-colors  tracking-wide"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
