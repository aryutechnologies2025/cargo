import Image from "next/image";
import React from "react";

const LogisticsShowcase = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-10 lg:px-20  text-gray-700">
      <div className="max-w-6xl mx-auto">
        {/* Top Section: Images and Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-20">
          {/* Left Side: Mockup Images */}
          <div className="relative flex flex-col items-center lg:items-end">
            {/* Main Magazine Mockup */}
            <div className="relative z-10 ">
              <Image
                src="/images/about-book-image.jpg"
                alt="Logistics Fleet 2017"
                className="w-full "
                height={50}
                width={50}
              />
            </div>
          </div>

          {/* Right Side: Welcome Text */}
          <div className="space-y-6">
            <h1 className="text-4xl  text-[#2A2A2A] leading-tight">
              Welcome to Logistics <br />
              International
            </h1>

            <div className="space-y-4 text-sm leading-6 text-[#777777]">
              <p>
                Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat
                ut turpis. Suspendisse urna nibh, viverra non, semper suscipit,
                posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                Aliquam porttitor mauris sit amet orci. Aenean dignissim
                pellentesque felis.
              </p>
              <p>
                Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
                euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras
                consequat
              </p>
            </div>

            <hr className="border-gray-200 border-[1.4px] mt-12" />

            <blockquote className="italic text-gray-500  font-serif text-lg ">
              " Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam. "
            </blockquote>

            <hr className="border-gray-200 border-[1.4px] " />

            <p className="text-lg tracking-[0.2em]  text-[#2A2A2A] text-center">
              <span className="text-[#1874C1]  mr-2">JOIN US</span>
              WE COVER THE WHOLE WORLD
            </p>
          </div>
        </div>

        {/* Progress Bars & Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center pt-10 border-t border-gray-100">
          {/* Progress Chart 1 */}
          <CircularProgress percentage={58} label="Increase In" />

          {/* Progress Chart 2 */}
          <CircularProgress percentage={40} label="Satisfied Employees" />

          {/* Progress Chart 3 */}
          <CircularProgress percentage={86} label="Shareholders ROI" />

          {/* Summary Text */}
          <div className="text-xs leading-relaxed text-gray-500">
            <p className="mb-4">
              Consectetur adipiscing elit. Praesent orci nisi, porta sed diam
              id, venenatis dignissim urna. Duis sit amet eros a sem viverra
              mollis nec eu sem.
            </p>
            <p>
              Venenatis dignissim urna. Duis sit amet eros a sem viverra mollis
              nec eu sem.
            </p>
          </div>
        </div>

       
      </div>
    </div>
  );
};

const CircularProgress = ({
  percentage,
  label,
}: {
  percentage: number;
  label: string;
}) => {
  const radius = 75;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-42 h-42 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          {/* Background Circle */}
          <circle
            cx="84"
            cy="84"
            r={radius}
            stroke="currentColor"
            strokeWidth="5"
            fill="transparent"
            className="text-gray-100"
          />
          
          {/* Progress Circle */}
          <circle
            cx="84"
            cy="84"
            r={radius}
            stroke="currentColor"
            strokeWidth="5"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="text-[#1874c1]"
          />
        </svg>
        <span className="absolute text-4xl  text-gray-400">
          {percentage}%
        </span>
      </div>
      <p className="mt-4 text-xs font-bold uppercase tracking-wider text-gray-600">
        {label}
      </p>
    </div>
  );
};

export default LogisticsShowcase;

// // ////////////////////////////////////////////////////////////////////////////////
