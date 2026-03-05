"use client";
import { motion, Variants } from "framer-motion";
import { MdLocationOn, MdEmail, MdAccessTime } from "react-icons/md";

import { BsTelephone, BsGlobe2 } from "react-icons/bs";
import Image from "next/image";

interface Office {
  id: number;
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  flag: string;
  workingHours: string;
  mapLink: string;
}

const GlobalOffices = () => {
  // Office locations data
  const offices: Office[] = [
    {
      id: 1,
      city: "BIRMINGHAM",
      country: "United Kingdom",
      address: "123 Business Park, Birmingham, B2 4QA",
      phone: "+44 121 234 5678",
      email: "birmingham@cargologistics.com",
      flag: "/icons/uk-icon.png",
      workingHours: "Mon-Fri: 9am-6pm",
      mapLink: "https://maps.app.goo.gl/jfpANpPWcS37whgP9",
    },
    {
      id: 2,
      city: "LONDON",
      country: "United Kingdom",
      address: "45 Fleet Street, London, EC4A 2BJ",
      phone: "+44 20 7123 4567",
      email: "london@cargologistics.com",
      flag: "/icons/uk-icon.png",
      workingHours: "Mon-Fri: 9am-6pm",
      mapLink: "https://maps.google.com/?q=London+UK",
    },
    {
      id: 3,
      city: "ISLAMABAD",
      country: "Pakistan",
      address: "Blue Area, Islamabad, 44000",
      phone: "+92 51 234 5678",
      email: "islamabad@cargologistics.com",
      flag: "/icons/pakistan-icon.png",
      workingHours: "Mon-Fri: 9am-6pm",
      mapLink: "https://maps.google.com/?q=Islamabad+Pakistan",
    },
    {
      id: 4,
      city: "KARACHI",
      country: "Pakistan",
      address: "Shahrah-e-Faisal, Karachi, 74400",
      phone: "+92 21 3456 7890",
      email: "karachi@cargologistics.com",
      flag: "/icons/pakistan-icon.png",
      workingHours: "Mon-Fri: 9am-6pm",
      mapLink: "https://maps.google.com/?q=Karachi+Pakistan",
    },
    {
      id: 5,
      city: "MULTAN",
      country: "Pakistan",
      address: "Abdali Road, Multan, 60000",
      phone: "+92 61 456 7890",
      email: "multan@cargologistics.com",
      flag: "/icons/pakistan-icon.png",
      workingHours: "Mon-Fri: 9am-6pm",
      mapLink: "https://maps.google.com/?q=Multan+Pakistan",
    },
    {
      id: 6,
      city: "SIALKOT",
      country: "Pakistan",
      address: "Khayaban-e-Iqbal, Sialkot, 51310",
      phone: "+92 52 456 7890",
      email: "sialkot@cargologistics.com",
      flag: "/icons/pakistan-icon.png",
      workingHours: "Mon-Fri: 9am-6pm",
      mapLink: "https://maps.google.com/?q=Sialkot+Pakistan",
    },
  ];

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
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  return (
    <section className="w-full bg-linear-to-b from-white to-gray-50 px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14 ">
      <div className=" mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#057dc3] font-bold text-xs sm:text-sm uppercase tracking-[0.3em]">
            Our Presence
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Global <span className="text-[#057dc3]">Offices</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-0.5 bg-gray-300"></div>
            <div className="w-16 h-1 bg-linear-to-r from-[#fdc300] to-[#057dc3] rounded-full"></div>
            <div className="w-12 h-0.5 bg-gray-300"></div>
          </div>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            We have offices in 6 locations across UK and Pakistan. Visit us at
            any of our branches.
          </p>
        </motion.div>

        {/* Offices Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {offices.map((office) => (
            <motion.div
              key={office.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Top linear Bar */}
              <div className="h-1.5 w-full bg-linear-to-r from-[#057dc3] to-[#0469a5]" />

              {/* Office Header with Flag */}
              <div className="p-3 md:p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {/* <span className="text-4xl">{office.flag}</span> */}
                    <Image
                      src={office.flag}
                      width={40}
                      height={40}
                      alt={office.country}
                      className="shadow rounded-full"
                    />
                    <div>
                      <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-800">
                        {office.city}
                      </h3>
                      <p className="text-sm text-gray-500">{office.country}</p>
                    </div>
                  </div>
                </div>

                {/* Office Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-3">
                    <MdLocationOn className="text-[#057dc3] text-lg shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600">{office.address}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <BsTelephone className="text-[#057dc3] text-sm shrink-0" />
                    <a
                      href={`tel:${office.phone}`}
                      className="text-sm text-gray-600 hover:text-[#057dc3] transition-colors"
                    >
                      {office.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <MdEmail className="text-[#057dc3] text-sm shrink-0" />
                    <a
                      href={`mailto:${office.email}`}
                      className="text-sm text-gray-600 hover:text-[#057dc3] transition-colors"
                    >
                      {office.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <MdAccessTime className="text-[#057dc3] text-sm shrink-0" />
                    <p className="text-sm text-gray-600">
                      {office.workingHours}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
                  <a
                    href={office.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-50 hover:bg-[#057dc3] text-gray-600 hover:text-white px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 flex items-center justify-center gap-1"
                  >
                    <MdLocationOn className="text-sm" />
                    <span className="max-sm:hidden">View Map</span>
                  </a>
                  <a
                    href={`tel:${office.phone}`}
                    className="flex-1 bg-gray-50 hover:bg-[#057dc3] text-gray-600 hover:text-white px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 flex items-center justify-center gap-1"
                  >
                    <BsTelephone className="text-sm" />
                    <span className="max-sm:hidden">Call</span>
                  </a>
                  <a
                    href={`mailto:${office.email}`}
                    className="flex-1 bg-gray-50 hover:bg-[#057dc3] text-gray-600 hover:text-white px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 flex items-center justify-center gap-1"
                  >
                    <MdEmail className="text-sm" />
                    <span className="max-sm:hidden">Email</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalOffices;
