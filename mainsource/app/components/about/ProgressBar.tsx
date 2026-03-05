"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  HiOutlineUserGroup,
  HiOutlineEmojiHappy,
  HiOutlineTrendingUp,
  HiOutlineChartBar,
  HiOutlineGlobe,
  HiOutlineTruck,
} from "react-icons/hi";
import { BsLightningCharge, BsGraphUp } from "react-icons/bs";
import { useRouter } from "next/navigation";

const ProgressBarComponent = () => {
  const router=useRouter()
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const achievements = [
    {
      icon: HiOutlineGlobe,
      text: "150+ Countries",
      subtext: "Global coverage",
    },
    {
      icon: BsLightningCharge,
      text: "24/7 Support",
      subtext: "Always available",
    },
    {
      icon: HiOutlineChartBar,
      text: "98% Accuracy",
      subtext: "Tracking precision",
    },
    { icon: BsGraphUp, text: "15+ Years", subtext: "Industry experience" },
  ];

  return (
    <section className="w-full bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #057dc3 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#057dc3]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fdc300]/10 rounded-full blur-3xl"></div>

      <div
        ref={sectionRef}
        className="relative  mx-auto px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#057dc3]/10 px-4 py-2 rounded-full mb-4">
            <BsGraphUp className="text-[#057dc3]" />
            <span className="text-[#057dc3] font-semibold text-sm">
              Key Metrics
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
            Performance <span className="text-[#057dc3]">Dashboard</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real-time metrics showing our commitment to excellence and
            continuous growth
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-linear-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-200 text-center"
            >
              <item.icon className="text-2xl text-[#057dc3] mx-auto mb-2" />
              <p className="font-bold text-gray-800 text-sm">{item.text}</p>
              <p className="text-xs text-gray-500">{item.subtext}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-linear-to-br from-[#057dc3] to-[#0469a5] rounded-2xl p-8 text-white"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-2 text-6xl text-white/20">
                "
              </div>
              <p className="relative z-10 text-lg italic mb-6">
                These numbers represent more than just statistics - they reflect
                our dedication to excellence and the trust our clients place in
                us every day.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl font-bold">
                  JD
                </div>
                <div>
                  <p className="font-bold">John Doe</p>
                  <p className="text-sm text-white/80">
                    CEO, Logistics International
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Grow With Us?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of satisfied clients who have experienced our
              exceptional service and proven results.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={()=>router.push('/contact')} className="bg-[#057dc3] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#0469a5] transition-all flex-1 cursor-pointer">
                Get Started
              </button>
              <button onClick={()=>router.push('/services')} className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-bold hover:border-[#057dc3] hover:text-[#057dc3] transition-all flex-1 cursor-pointer">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgressBarComponent;
