// import React from "react";
// const CircularProgress = ({
//   percentage,
//   label,
// }: {
//   percentage: number;
//   label: string;
// }) => {
//   const radius = 75;
//   const circumference = 2 * Math.PI * radius;
//   const strokeDashoffset = circumference - (percentage / 100) * circumference;

//   return (
//     <div className="flex flex-col items-center text-center">
//       <div className="relative w-42 h-42 flex items-center justify-center">
//         <svg className="w-full h-full transform -rotate-90">
//           {/* Background Circle */}
//           <circle
//             cx="84"
//             cy="84"
//             r={radius}
//             stroke="currentColor"
//             strokeWidth="5"
//             fill="transparent"
//             className="text-gray-100"
//           />

//           {/* Progress Circle */}
//           <circle
//             cx="84"
//             cy="84"
//             r={radius}
//             stroke="currentColor"
//             strokeWidth="5"
//             fill="transparent"
//             strokeDasharray={circumference}
//             strokeDashoffset={strokeDashoffset}
//             strokeLinecap="round"
//             className="text-[#027cc2]"
//           />
//         </svg>
//         <span className="absolute text-4xl  text-gray-400">{percentage}%</span>
//       </div>
//       <p className="mt-4 text-lg font-semibold  tracking-wider text-[#2A2A2A]">
//         {label}
//       </p>
//     </div>
//   );
// };
// const ProgressBar = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-6xl px-4  items-center my-5 border-t border-gray-100 mx-auto">
//       {/* Progress Chart 1 */}
//       <CircularProgress percentage={58} label="Increase In Customers" />

//       {/* Progress Chart 2 */}
//       <CircularProgress percentage={40} label="Satisfied Employees" />

//       {/* Progress Chart 3 */}
//       <CircularProgress percentage={86} label="Shareholders ROI" />

//       {/* Summary Text */}
//       <div className=" leading-relaxed text-[#777777] text-sm ">
//         <p className="mb-4">
//           Consectetur adipiscing elit. Praesent orci nisi, porta sed diam id,
//           venenatis dignissim urna. Duis sit amet eros a sem viverra mollis nec
//           eu sem. Quisque rutporta sed diam id.
//         </p>
//         <p>
//           Venenatis dignissim urna. Duis sit amet eros a sem viver uisque rurum
//           euismod fermentum.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProgressBar;

// 'use client'
// import React, { useEffect, useState, useRef } from "react";
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

// const ProgressBarComponent = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [percentages, setPercentages] = useState({ one: 0, two: 0, three: 0 });
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (isVisible) {
//       // Animate to target percentages
//       const timer1 = setTimeout(() => setPercentages({ one: 58, two: 0, three: 0 }), 100);
//       const timer2 = setTimeout(() => setPercentages({ one: 58, two: 40, three: 0 }), 200);
//       const timer3 = setTimeout(() => setPercentages({ one: 58, two: 40, three: 86 }), 300);

//       return () => {
//         clearTimeout(timer1);
//         clearTimeout(timer2);
//         clearTimeout(timer3);
//       };
//     } else {
//       setPercentages({ one: 0, two: 0, three: 0 });
//     }
//   }, [isVisible]);

//   return (
//     <div
//       ref={sectionRef}
//       className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8  border-t border-gray-100  mx-auto px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14"
//     >
//       {/* Progress Chart 1 */}
//       <div className={`text-center transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
//         <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-42 lg:h-42 mx-auto">
//           <CircularProgressbar
//             value={percentages.one}
//             text={`${percentages.one}%`}
//             styles={buildStyles({
//               textSize: '16px',
//               pathColor: '#027cc2',
//               textColor: '#2A2A2A',
//               trailColor: '#e5e7eb',
//               pathTransition: 'stroke-dashoffset 1.5s ease-out',
//             })}
//           />
//         </div>
//         <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-semibold tracking-wider text-[#2A2A2A] group-hover:text-[#027cc2] transition-colors duration-300">
//           Increase In Customers
//         </p>
//       </div>

//       {/* Progress Chart 2 */}
//       <div className={`text-center transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
//         <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-42 lg:h-42 mx-auto">
//           <CircularProgressbar
//             value={percentages.two}
//             text={`${percentages.two}%`}
//             styles={buildStyles({
//               textSize: '16px',
//               pathColor: '#027cc2',
//               textColor: '#2A2A2A',
//               trailColor: '#e5e7eb',
//               pathTransition: 'stroke-dashoffset 1.5s ease-out',
//             })}
//           />
//         </div>
//         <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-semibold tracking-wider text-[#2A2A2A] group-hover:text-[#027cc2] transition-colors duration-300">
//           Satisfied Employees
//         </p>
//       </div>

//       {/* Progress Chart 3 */}
//       <div className={`text-center transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
//         <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-42 lg:h-42 mx-auto">
//           <CircularProgressbar
//             value={percentages.three}
//             text={`${percentages.three}%`}
//             styles={buildStyles({
//               textSize: '16px',
//               pathColor: '#027cc2',
//               textColor: '#2A2A2A',
//               trailColor: '#e5e7eb',
//               pathTransition: 'stroke-dashoffset 1.5s ease-out',
//             })}
//           />
//         </div>
//         <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-semibold tracking-wider text-[#2A2A2A] group-hover:text-[#027cc2] transition-colors duration-300">
//           Shareholders ROI
//         </p>
//       </div>

//       {/* Summary Text */}
//       <div className={`leading-relaxed text-[#777777] text-xs sm:text-sm space-y-3 sm:space-y-4 transform transition-all duration-700 ${
//         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//       }`} style={{ transitionDelay: '400ms' }}>
//         <div className="relative group">
//           <p className="mb-3 sm:mb-4 hover:text-[#4A4A4A] transition-colors duration-300">
//             Consectetur adipiscing elit. Praesent orci nisi, porta sed diam id,
//             venenatis dignissim urna. Duis sit amet eros a sem viverra mollis nec
//             eu sem. Quisque rutporta sed diam id.
//           </p>
//           <span className="absolute -left-2 -top-2 text-[#027cc2]/10 text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">"</span>
//         </div>

//           <p className="hover:text-[#4A4A4A] transition-colors duration-300">
//             Venenatis dignissim urna. Duis sit amet eros a sem viver uisque rurum
//             euismod fermentum.
//           </p>

//       </div>
//     </div>
//   );
// };

// export default ProgressBarComponent;

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
              className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-200 text-center"
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
            className="bg-gradient-to-br from-[#057dc3] to-[#0469a5] rounded-2xl p-8 text-white"
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
              <button onClick={()=>router.push('/contact')} className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-bold hover:border-[#057dc3] hover:text-[#057dc3] transition-all flex-1 cursor-pointer">
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
