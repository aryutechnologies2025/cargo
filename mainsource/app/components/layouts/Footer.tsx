// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import { BiLogoTelegram } from "react-icons/bi";

const Footer = () => {
  const quickLinks = [
    "Home",
    "About",
    "Contact",
        "Track your parcel"


  ];

  const footerLinks = [
    "Terms and conditions",
    // "Legal Disclaimer",
    // "Privacy Policy",
    // "Support",
    // "Sitemap",
  ];

  return (
    <footer className="w-full bg-[#2a2a2a] text-gray-300">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 py-18">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* CEO's Statement Section */}
          <div className="">
            <h3 className="text-white font-extrabold tracking-wide">
              OUR CEO's STATEMENT
            </h3>
            <hr className="border-[1.6] border-[#fdc300] w-8 mt-1.5" />
            <p className="text-[15px] text-[#99ABB8] leading-6 mt-12 font-karla">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <Image
              src="/icons/sign.webp"
              alt="sign"
              width={20}
              height={20}
              className="mt-5 w-40 h-32 object-contain invert-100"
            />
          </div>

          {/* Quick Links Section */}
          <div className="">
            <h3 className="text-white font-extrabold tracking-wide">
              QUICK LINKS
            </h3>
            <hr className="border-[1.6] border-[#fdc300] w-8 mt-1.5" />
            <div className="flex flex-col gap-1  mt-12">
              {quickLinks.map((link) => (
                <Link
                  key={link}
                href={link === "Home" ? "/" : `/${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className=" font-karla font-medium  pb-3 text-[#99ABB8] hover:text-[#fdc300] transition-colors uppercase duration-200 "
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className=" ">
            <h3 className="text-white font-extrabold tracking-wide">
              NEWSLETTER SIGNUP
            </h3>
            <hr className="border-[1.6] border-[#fdc300] w-8 mt-1.5" />
            <p className="font-karla text-[#99ABB8] leading-6 mt-12">
              If you want receive our all weekly updates about new offers and
              discount, signup below.
            </p>

            {/* Email Signup Form */}
            <div className="flex bg-white mt-5">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-2 text-sm bg-white border  border-none outline-none rounded focus:outline-none focus:border-gray-500 text-black placeholder-gray-500"
              />

              <div className="bg-[#429bd5] w-fit p-3 h-fit">
                <BiLogoTelegram />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer with copyright and links */}
      <div className="bg-[#1874c1] text-white">
        <div className="max-w-5xl mx-auto px-4 py-5">
          <div className=" flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className=" ">
              Copyright © 2026. All rights Reserved by DesignThemes
            </p>

            {/* Footer links */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 ">
              {footerLinks.map((link, index) => (
                <div key={link} className="flex items-center">
                  <Link
                    href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link}
                  </Link>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
