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
//             className="text-[#1874c1]"
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



'use client'
import React, { useEffect, useState, useRef } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBarComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [percentages, setPercentages] = useState({ one: 0, two: 0, three: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Animate to target percentages
      const timer1 = setTimeout(() => setPercentages({ one: 58, two: 0, three: 0 }), 100);
      const timer2 = setTimeout(() => setPercentages({ one: 58, two: 40, three: 0 }), 200);
      const timer3 = setTimeout(() => setPercentages({ one: 58, two: 40, three: 86 }), 300);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    } else {
      setPercentages({ one: 0, two: 0, three: 0 });
    }
  }, [isVisible]);

  return (
    <div 
      ref={sectionRef}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8  border-t border-gray-100  mx-auto px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14"
    >
      {/* Progress Chart 1 */}
      <div className={`text-center transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
        <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-42 lg:h-42 mx-auto">
          <CircularProgressbar
            value={percentages.one}
            text={`${percentages.one}%`}
            styles={buildStyles({
              textSize: '16px',
              pathColor: '#1874c1',
              textColor: '#2A2A2A',
              trailColor: '#e5e7eb',
              pathTransition: 'stroke-dashoffset 1.5s ease-out',
            })}
          />
        </div>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-semibold tracking-wider text-[#2A2A2A] group-hover:text-[#1874c1] transition-colors duration-300">
          Increase In Customers
        </p>
      </div>

      {/* Progress Chart 2 */}
      <div className={`text-center transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
        <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-42 lg:h-42 mx-auto">
          <CircularProgressbar
            value={percentages.two}
            text={`${percentages.two}%`}
            styles={buildStyles({
              textSize: '16px',
              pathColor: '#1874c1',
              textColor: '#2A2A2A',
              trailColor: '#e5e7eb',
              pathTransition: 'stroke-dashoffset 1.5s ease-out',
            })}
          />
        </div>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-semibold tracking-wider text-[#2A2A2A] group-hover:text-[#1874c1] transition-colors duration-300">
          Satisfied Employees
        </p>
      </div>

      {/* Progress Chart 3 */}
      <div className={`text-center transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
        <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-42 lg:h-42 mx-auto">
          <CircularProgressbar
            value={percentages.three}
            text={`${percentages.three}%`}
            styles={buildStyles({
              textSize: '16px',
              pathColor: '#1874c1',
              textColor: '#2A2A2A',
              trailColor: '#e5e7eb',
              pathTransition: 'stroke-dashoffset 1.5s ease-out',
            })}
          />
        </div>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-semibold tracking-wider text-[#2A2A2A] group-hover:text-[#1874c1] transition-colors duration-300">
          Shareholders ROI
        </p>
      </div>

      {/* Summary Text */}
      <div className={`leading-relaxed text-[#777777] text-xs sm:text-sm space-y-3 sm:space-y-4 transform transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} style={{ transitionDelay: '400ms' }}>
        <div className="relative group">
          <p className="mb-3 sm:mb-4 hover:text-[#4A4A4A] transition-colors duration-300">
            Consectetur adipiscing elit. Praesent orci nisi, porta sed diam id,
            venenatis dignissim urna. Duis sit amet eros a sem viverra mollis nec
            eu sem. Quisque rutporta sed diam id.
          </p>
          <span className="absolute -left-2 -top-2 text-[#1874c1]/10 text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">"</span>
        </div>
        
          <p className="hover:text-[#4A4A4A] transition-colors duration-300">
            Venenatis dignissim urna. Duis sit amet eros a sem viver uisque rurum
            euismod fermentum.
          </p>
         
      </div>
    </div>
  );
};

export default ProgressBarComponent;