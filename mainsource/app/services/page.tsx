"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
  PiAirplane,
  PiWarehouse,
  PiArrowRight,
  PiCheckCircle,
  PiClock,
  PiGlobe,
  PiShieldCheck,
  PiHeadset,
  PiPackage,
  PiRocket,
  PiGauge,
  PiMapPin,
  PiCertificate,
  PiMedal,
  PiHandshake,
  PiChartBar,
  PiBinoculars,
  PiArrowCircleRight,
  PiSpeedometer,
  PiMapTrifold,
  PiThermometer,
  PiCube,
  PiCrane,
  PiAnchor,
} from "react-icons/pi";
import { GiShipBow } from "react-icons/gi";
import { LiaPalletSolid } from "react-icons/lia";
import { TbForklift } from "react-icons/tb";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Hero />
      <Overview />
      <ServicesGrid />
      <WhyChooseUs />
    </main>
  );
}





function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-white min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh]">
      {/* Light background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Very light blue circles for subtle depth */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 -right-40 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-[#027cc2]/10 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 -left-40 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-[#027cc2]/10 rounded-full blur-3xl"
        />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-10 sm:opacity-15 lg:opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L55 30 L30 55 L5 30 Z' stroke='%23027cc2' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "30px 30px sm:40px 40px lg:60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 lg:py-14">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl  mx-auto bg text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#027cc2]/10 text-[#027cc2] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-5 lg:mb-6 border border-[#027cc2]/20"
          >
            <PiAirplane className="text-sm sm:text-base lg:text-lg text-[#027cc2]" />
            <span className="text-xs sm:text-sm lg:text-base font-medium tracking-wide">
                           OUR SERVICES

            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight"
          >
            Comprehensive Logistics
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className=" block text-transparent bg-clip-text bg-linear-to-r from-[#027cc2] to-[#034a8f] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-1 sm:mt-2"
            >
              Solutions Tailored to You
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-7 lg:mb-8 max-w-2xl mx-auto px-2 sm:px-4"
          >
              From air freight to ocean shipping and warehousing, we provide end-to-end
            logistics solutions with real-time tracking and 24/7 support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-[#027cc2] text-white px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-lg font-bold hover:bg-[#034a8f] transition-all shadow-lg hover:shadow-xl text-sm sm:text-base lg:text-lg w-full sm:w-auto"
              >
                <span>Contact Us</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <PiArrowRight className="text-base sm:text-lg lg:text-xl" />
                </motion.div>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/track-your-parcel"
                className="group inline-flex items-center justify-center gap-2 border-2 border-[#027cc2] text-[#027cc2] px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-lg font-semibold hover:bg-[#027cc2] hover:text-white transition-all text-sm sm:text-base lg:text-lg w-full sm:w-auto"
              >
                <span>Track Shipment</span>
                <PiArrowCircleRight className="text-base sm:text-lg lg:text-xl group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Overview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const stats = [
    { value: "190+", label: "Countries", icon: PiGlobe },
    { value: "500+", label: "Daily Flights", icon: PiAirplane },
    { value: "500+", label: "Ports Served", icon: PiAnchor },
    { value: "2.5M+", label: "Sq Ft Storage", icon: PiWarehouse },
  ];

  return (
    <section ref={ref} className="bg-white relative z-20">
      <div className="px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 15px 30px rgba(2,124,194,0.1)",
              }}
              className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 text-center shadow-md sm:shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mx-auto bg-gradient-to-br from-[#027cc2] to-[#034a8f] rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-1 sm:mb-2 md:mb-3 lg:mb-4">
                <stat.icon className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" />
              </div>

              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ type: "spring", delay: 0.2 + index * 0.1 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-0.5 sm:mb-1"
              >
                {stat.value}
              </motion.div>

              <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      title: "Air Freight",
      icon: PiAirplane,
      description: "Time-critical air freight services with 99.8% on-time performance",
      features: [
        "Next-flight-out express service",
        "Real-time GPS tracking",
        "IATA certified dangerous goods handling",
        "Temperature-controlled logistics",
        "Customs clearance assistance"
      ],
      stats: [
        { label: "Transit", value: "24-48h" },
        { label: "Coverage", value: "190+" },
        { label: "Daily", value: "500+" }
      ],
      color: "from-blue-500 to-indigo-500",
      link: "/services/air-freight",
    },
    {
      title: "Sea Freight",
      icon: GiShipBow,
      description: "Cost-effective ocean freight solutions to 500+ ports worldwide",
      features: [
        "FCL & LCL container options",
        "IMDG certified hazardous cargo",
        "Reefer containers (-30°C to +30°C)",
        "Breakbulk & project logistics",
        "Door-to-door tracking"
      ],
      stats: [
        { label: "Transit", value: "25-35d" },
        { label: "Ports", value: "500+" },
        { label: "Carriers", value: "30+" }
      ],
      color: "from-green-500 to-teal-500",
      link: "/services/sea-freight",
      popular: false
    },
    {
      title: "Warehousing",
      icon: PiWarehouse,
      description: "Strategic warehousing with 99.9% inventory accuracy",
      features: [
        "2.5M+ sq ft nationwide",
        "Temperature-controlled zones",
        "Real-time WMS integration",
        "Pick & pack fulfillment",
        "Cross-docking services"
      ],
      stats: [
        { label: "Locations", value: "12" },
        { label: "Accuracy", value: "99.9%" },
        { label: "Pallet", value: "50K+" }
      ],
      color: "from-purple-500 to-pink-500",
      link: "/services/warehousing",
      popular: false
    }
  ];

  return (
    <section ref={ref} className="bg-gray-50">
      <div className="px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
        >
          <span className="text-[#027cc2] font-semibold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">
            OUR SOLUTIONS
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-1 sm:mt-2 mb-1 sm:mb-2">
            Integrated Logistics Services
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Choose the right solution for your cargo, or let us handle the entire supply chain
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg hover:shadow-xl transition-all ${
                service.popular ? 'ring-1 sm:ring-2 ring-[#027cc2]' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 bg-[#027cc2] text-white text-[8px] sm:text-[10px] md:text-xs font-bold px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 rounded-full z-10">
                  MOST POPULAR
                </div>
              )}

              <div className={`bg-gradient-to-r ${service.color} p-4 sm:p-5 md:p-6`}>
                <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center text-white">
                    <service.icon className="text-base sm:text-lg md:text-xl lg:text-2xl" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">{service.title}</h3>
                </div>
              </div>

              <div className="p-4 sm:p-5 md:p-6">
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4">
                  {service.description}
                </p>

                <div className="grid grid-cols-3 gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {service.stats.map((stat, i) => (
                    <div key={i} className="text-center bg-gray-50 p-1.5 sm:p-2 rounded-lg">
                      <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-500">{stat.label}</div>
                      <div className="text-xs sm:text-sm md:text-base font-bold text-[#027cc2]">{stat.value}</div>
                    </div>
                  ))}
                </div>

                <ul className="space-y-1 sm:space-y-1.5 md:space-y-2 mb-4 sm:mb-5">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs md:text-sm text-gray-600">
                      <PiCheckCircle className="text-[#027cc2] text-xs sm:text-sm flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.link}
                  className="inline-flex items-center gap-1 sm:gap-1.5 md:gap-2 text-[#027cc2] font-semibold hover:gap-2 sm:hover:gap-3 transition-all text-xs sm:text-sm md:text-base group"
                >
                  <span>Learn More</span>
                  <PiArrowRight className="group-hover:translate-x-1 transition-transform text-sm sm:text-base" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const reasons = [
    {
      icon: PiMedal,
      title: "IATA, FMC & FDA Certified",
      description: "Fully certified across all service modes",
      metric: "All compliance"
    },
    {
      icon: PiHandshake,
      title: "Global Network",
      description: "Partnerships with 50+ airlines & 30+ carriers",
      metric: "Worldwide reach"
    },
    {
      icon: PiChartBar,
      title: "99%+ Performance",
      description: "Industry-leading on-time and accuracy rates",
      metric: "Verified KPIs"
    },
    {
      icon: PiHeadset,
      title: "24/7 Dedicated Support",
      description: "Personal account managers always available",
      metric: "< 5 min response"
    },
    {
      icon: PiBinoculars,
      title: "Real-time Visibility",
      description: "End-to-end tracking across all services",
      metric: "Live updates"
    },
    {
      icon: PiShieldCheck,
      title: "Comprehensive Insurance",
      description: "Coverage up to $100M for all cargo types",
      metric: "Full protection"
    }
  ];

  return (
    <section ref={ref} className="bg-gray-50">
      <div className="px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
        >
          <span className="text-[#027cc2] font-semibold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">
            WHY US
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-1 sm:mt-2 mb-2 sm:mb-3">
            The CargoLord Advantage
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            One provider for all your logistics needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              className="bg-white border border-gray-100 rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#027cc2] to-[#034a8f] rounded-lg sm:rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-sm"
                >
                  <reason.icon className="text-sm sm:text-base md:text-lg lg:text-xl" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900 mb-0.5 sm:mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 mb-1 sm:mb-2">
                    {reason.description}
                  </p>
                  <span className="inline-block text-[8px] sm:text-[10px] md:text-xs font-mono text-[#027cc2] bg-[#027cc2]/10 px-1.5 sm:px-2 py-0.5 rounded-full">
                    {reason.metric}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
