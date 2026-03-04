"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  PiAirplane,
  PiClock,
  PiGlobe,
  PiShieldCheck,
  PiChartLine,
  PiHeadset,
  PiPackage,
  PiArrowRight,
  PiCheckCircle,
  PiRocket,
  PiGauge,
  PiCube,
  PiCalendar,
  PiMapPin,
  PiUsers,
  PiWrench,
  PiThermometer,
  PiFireExtinguisher,
  PiSyringe,
  PiBatteryCharging,
  PiMicroscope,
  PiFlask,
  PiTruck,
  PiWarehouse,
  PiSuitcase,
  PiCertificate,
  PiMedal,
  PiHandshake,
  PiChartBar,
  PiBinoculars,
  PiAirplaneTilt,
  PiArrowCircleRight,
  PiClockCountdown,
  PiSpeedometer,
  PiMapTrifold,
  PiCloud,
  PiBag,
  PiClipboardText,
} from "react-icons/pi";
import {
  PlaneLanding,
  PlaneTakeoff,
  Clock,
  Shield,
  Map,
  Fingerprint,
  QrCode,
} from "lucide-react";
import Link from "next/link";
import { BiBroadcast } from "react-icons/bi";

export default function AirFreightServicePage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Hero />
      <QuickStats />
      <Overview />
      <ServiceFeatures />
      <Coverage />
      <ProcessTimeline />
      <WhyChooseUs />
      <CTASection />
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
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#027cc2]/10 text-[#027cc2] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-5 lg:mb-6 border border-[#027cc2]/20"
          >
            <PiAirplane className="text-sm sm:text-base lg:text-lg text-[#027cc2]" />
            <span className="text-xs sm:text-sm lg:text-base font-medium tracking-wide">
              AIR FREIGHT SERVICES
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight"
          >
            Global Air Freight
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-[#027cc2] to-[#034a8f] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-1 sm:mt-2"
            >
              Solutions That Deliver
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-7 lg:mb-8 max-w-2xl mx-auto px-2 sm:px-4"
          >
            Time-critical air freight services with 99.8% on-time performance.
            Direct flights to 190+ countries with real-time tracking and customs
            expertise.
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

function QuickStats() {
  const stats = [
    {
      value: "50,000+",
      label: "Shipments Annually",
      icon: PiPackage,
      suffix: "",
    },
    { value: "190", label: "Countries Served", icon: PiGlobe, suffix: "+" },
    { value: "99.8", label: "On-Time Rate", icon: PiSpeedometer, suffix: "%" },
    { value: "500", label: "Daily Flights", icon: PiAirplane, suffix: "+" },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <section ref={containerRef}>
      <div className="px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(2,124,194,0.1)",
              }}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-[#027cc2] to-[#034a8f] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-2 sm:mb-3 md:mb-4">
                <stat.icon className="text-xl sm:text-2xl md:text-3xl" />
              </div>

              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ type: "spring", delay: 0.3 + index * 0.1 }}
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-0.5 sm:mb-1"
              >
                {stat.value}
              </motion.div>

              <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Overview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: PiClockCountdown,
      title: "Time-Definite Delivery",
      description:
        "Guaranteed arrival times with our network of 500+ daily flights",
    },
    {
      icon: PiShieldCheck,
      title: "Comprehensive Insurance",
      description: "Full cargo insurance up to $50M with All-Risk coverage",
    },
    {
      icon: PiMapTrifold,
      title: "Global Network",
      description:
        "Direct access to 190+ countries through major airline partnerships",
    },
    {
      icon: PiHeadset,
      title: "24/7 Dedicated Support",
      description: "Personal account managers available around the clock",
    },
  ];

  return (
    <section ref={ref} className="bg-gray-50">
      <div className="px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className=""
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#027cc2]/10 text-[#027cc2] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4"
            >
              <PiAirplane className="text-sm sm:text-base lg:text-lg text-[#027cc2]" />
              <span className="text-xs sm:text-sm lg:text-base font-semibold tracking-wide">
                ABOUT OUR SERVICE
              </span>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
              Industry-Leading Air Freight Solutions
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-5 lg:mb-6">
              As an IATA-certified air freight forwarder, we provide
              comprehensive logistics solutions tailored to your specific cargo
              requirements. Our network spans every major airport worldwide,
              ensuring your shipments reach their destination quickly and
              securely.
            </p>

            <div className="space-y-2 sm:space-y-3 lg:space-y-4 mb-6 sm:mb-7 lg:mb-8">
              {[
                "Priority boarding and expedited customs clearance",
                "Real-time tracking with predictive ETA updates",
                "Dangerous goods handling (Class 1-9 certified)",
                "Temperature-controlled logistics for pharma & perishables",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-2 sm:gap-3"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 mt-0.5"
                  >
                    <PiCheckCircle className="text-[#027cc2] text-base sm:text-lg lg:text-xl" />
                  </motion.div>
                  <span className="text-xs sm:text-sm md:text-base text-gray-700">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-3 sm:gap-4 "
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(2,124,194,0.15)",
                }}
                className="bg-white p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl lg:rounded-xl shadow-md lg:shadow-lg"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#027cc2] rounded-lg flex items-center justify-center text-white mb-2 sm:mb-3 lg:mb-4">
                  <feature.icon className="text-base sm:text-lg lg:text-2xl" />
                </div>
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-1.5 lg:mb-2">
                  {feature.title}
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 leading-tight sm:leading-normal">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServiceFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: PiRocket,
      title: "Express Air Freight",
      description: "Next-flight-out service for urgent shipments",
      details: [
        "1-2 day transit",
        "Priority boarding",
        "Express documentation",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: PiShieldCheck,
      title: "Secure Cargo Handling",
      description: "End-to-end security with TSA-approved screening",
      details: ["CCTV monitoring", "Sealed containers", "Insurance up to $50M"],
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: PiChartLine,
      title: "Real-Time Tracking",
      description: "24/7 visibility with predictive analytics",
      details: ["Live GPS tracking", "Status alerts", "ETA predictions"],
      color: "from-green-500 to-teal-500",
    },
    {
      icon: PiGlobe,
      title: "Global Network",
      description: "Direct flights to 500+ destinations",
      details: ["190 countries", "Major hubs", "Interline connections"],
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section ref={ref} className="bg-white">
      <div className="px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <span className="text-[#027cc2] font-semibold text-xs sm:text-sm uppercase tracking-wider">
            CORE CAPABILITIES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-2 sm:mb-3 md:mb-4">
            Comprehensive Air Freight Features
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Our air freight service combines speed, security, and visibility to
            meet your logistics needs
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 40px rgba(2,124,194,0.15)",
              }}
              className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-md sm:shadow-lg border border-gray-100"
            >
              {/* Gradient overlay on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-[#027cc2]/5 to-transparent rounded-xl sm:rounded-2xl"
              />

              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r ${feature.color} rounded-lg sm:rounded-xl flex items-center justify-center text-white mb-3 sm:mb-4 shadow-md relative z-10`}
              >
                <feature.icon className="text-lg sm:text-xl md:text-2xl" />
              </motion.div>

              <div className="relative z-10">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">
                  {feature.description}
                </p>

                <ul className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                  {feature.details.map((detail, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.1 + j * 0.05 }}
                      className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600"
                    >
                      <PiCheckCircle className="text-[#027cc2] text-xs sm:text-sm flex-shrink-0" />
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const steps = [
    {
      phase: "Phase 01",
      title: "Booking & Documentation",
      description: "Submit your shipment details and required documents",
      icon: PiPackage,
    },
    {
      phase: "Phase 02",
      title: "Pickup & Screening",
      description: "Secure collection and security verification",
      icon: PiTruck,
    },
    {
      phase: "Phase 03",
      title: "Air Transport",
      description: "Priority loading and flight monitoring",
      icon: PiAirplane,
    },
    {
      phase: "Phase 04",
      title: "Customs Clearance",
      description: "Import documentation and duty processing",
      icon: PiGlobe,
    },
    {
      phase: "Phase 05",
      title: "Final Delivery",
      description: "Door-to-door delivery with proof",
      icon: PiMapPin,
    },
  ];

  return (
    <section ref={ref} className="bg-white">
      <div className="px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <span className="text-[#027cc2] font-semibold text-xs sm:text-sm uppercase tracking-wider">
            END-TO-END PROCESS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-2 sm:mb-3 md:mb-4">
            Your Shipment Journey
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            From pickup to delivery, every step is tracked and managed
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line - hidden on mobile/tablet */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-16 sm:top-20 lg:top-24 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-[#027cc2] via-[#fdc300] to-[#027cc2] hidden lg:block origin-left"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 10px 20px rgba(2,124,194,0.2)",
                      "0 20px 40px rgba(2,124,194,0.3)",
                      "0 10px 20px rgba(2,124,194,0.2)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    delay: index * 0.5,
                    repeat: Infinity,
                  }}
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#027cc2] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mx-auto mb-3 sm:mb-4 relative z-10 shadow-md sm:shadow-lg"
                >
                  <step.icon className="text-xl sm:text-2xl lg:text-2xl" />
                </motion.div>

                <div className="text-center mb-2 sm:mb-3">
                  <span className="text-[10px] sm:text-xs font-mono text-[#027cc2] bg-[#027cc2]/10 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full">
                    {step.phase}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 text-center mb-1 sm:mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 text-center px-2">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const reasons = [
    {
      icon: PiMedal,
      title: "IATA Certified",
      description: "Full certification for dangerous goods and special cargo",
      metric: "15+ years",
    },
    {
      icon: PiHandshake,
      title: "Global Partnerships",
      description: "Preferred partner with 50+ major airlines",
      metric: "500+ daily flights",
    },
    {
      icon: PiChartBar,
      title: "Proven Performance",
      description: "99.8% on-time delivery rate",
      metric: "50,000+ shipments",
    },
    {
      icon: PiHeadset,
      title: "24/7 Support",
      description: "Dedicated account managers always available",
      metric: "< 5 min response",
    },
    {
      icon: PiBinoculars,
      title: "Advanced Tracking",
      description: "Real-time visibility with predictive analytics",
      metric: "Real-time updates",
    },
    {
      icon: PiCertificate,
      title: "Compliance Guaranteed",
      description: "Full regulatory compliance worldwide",
      metric: "190+ countries",
    },
  ];

  return (
    <section ref={ref} className="bg-white">
      <div className="px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <span className="text-[#027cc2] font-semibold text-xs sm:text-sm uppercase tracking-wider">
            WHY US
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3">
            The CargoLord Advantage
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            With over 15 years of experience in air freight logistics, we've
            built a reputation for reliability, speed, and exceptional service.
          </p>
        </motion.div>

        {/* Reasons Grid - Single column on mobile, 2 columns on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px rgba(2,124,194,0.15)"
              }}
              className="bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#027cc2] to-[#034a8f] rounded-lg sm:rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-md"
                >
                  <reason.icon className="text-lg sm:text-xl" />
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2">
                    {reason.description}
                  </p>
                  <span className="inline-block text-[10px] sm:text-xs font-mono text-[#027cc2] bg-[#027cc2]/10 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full">
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

function Coverage() {
  const regions = [
    { name: "North America", flights: "500+ daily", icon: PiGlobe },
    { name: "South America", flights: "300+ daily", icon: PiGlobe },
    { name: "Europe", flights: "600+ daily", icon: PiGlobe },
    { name: "Asia", flights: "800+ daily", icon: PiGlobe },
    { name: "Africa", flights: "200+ daily", icon: PiGlobe },
    { name: "Australia", flights: "150+ daily", icon: PiGlobe },
  ];

  return (
    <section className="bg-white">
      <div className="px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <span className="text-[#027cc2] font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Global Network
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-2 sm:mb-3 md:mb-4">
            Worldwide Coverage
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            Connected to every major airport across six continents
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative z-10">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group cursor-pointer"
              >
                <div className="bg-gray-50 p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl sm:rounded-2xl text-center hover:bg-[#027cc2] hover:text-white transition-all duration-300 border border-gray-100 hover:border-transparent shadow-sm hover:shadow-md">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 2,
                      delay: index * 0.2,
                      repeat: Infinity,
                    }}
                  >
                    <region.icon className="text-2xl sm:text-3xl md:text-4xl text-[#027cc2] group-hover:text-white mx-auto mb-2 sm:mb-3" />
                  </motion.div>
                  <h4 className="text-xs sm:text-sm md:text-base font-bold mb-1">
                    {region.name}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-gray-500 group-hover:text-white/80">
                    {region.flights}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative mx-4 sm:mx-7 md:mx-16 lg:mx-32 my-5 sm:my-9 md:my-14 overflow-hidden bg-gradient-to-r from-[#027cc2] to-[#034a8f] rounded-xl sm:rounded-2xl">
      {/* Animated background elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/5 rounded-full blur-2xl sm:blur-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#fdc300]/10 rounded-full blur-2xl sm:blur-3xl"
      />

      {/* Floating icons - hidden on mobile/tablet */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-[5%] lg:left-[10%] top-1/2 transform -translate-y-1/2 text-white/5 hidden lg:block"
      >
        <PiAirplane className="text-4xl lg:text-6xl" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute right-[5%] lg:right-[10%] top-1/2 transform -translate-y-1/2 text-white/5 hidden lg:block"
      >
        <PiPackage className="text-4xl lg:text-6xl" />
      </motion.div>

      <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left w-full lg:w-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/20 backdrop-blur-sm text-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full mb-2 sm:mb-3 border border-white/30"
            >
              <PiRocket className="text-xs sm:text-sm" />
              <span className="text-[10px] sm:text-xs font-semibold">
                NEXT FLIGHT OUT
              </span>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">
              Ready for Takeoff?
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-xl">
              Get an air freight quote in under 30 minutes
            </p>
          </motion.div>

          {/* Right side - Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-white text-[#027cc2] px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl text-xs sm:text-sm md:text-base w-full sm:w-auto min-w-[120px] sm:min-w-[140px] md:min-w-[160px] h-full"
              >
                <span>Request Quote</span>
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <PiArrowRight className="text-sm sm:text-base md:text-lg" />
                </motion.div>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 border-2 border-white text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold hover:bg-white hover:text-[#027cc2] transition-all text-xs sm:text-sm md:text-base w-full sm:w-auto min-w-[120px] sm:min-w-[140px] md:min-w-[160px] h-full"
              >
                <PiHeadset className="text-sm sm:text-base md:text-lg" />
                <span>Contact</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
