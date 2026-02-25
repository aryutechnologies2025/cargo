import React from "react";
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
        <span className="absolute text-4xl  text-gray-400">{percentage}%</span>
      </div>
      <p className="mt-4 text-lg font-semibold  tracking-wider text-[#2A2A2A]">
        {label}
      </p>
    </div>
  );
};
const ProgressBar = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 items-center mt-5 border-t border-gray-100">
      {/* Progress Chart 1 */}
      <CircularProgress percentage={58} label="Increase In Customers" />

      {/* Progress Chart 2 */}
      <CircularProgress percentage={40} label="Satisfied Employees" />

      {/* Progress Chart 3 */}
      <CircularProgress percentage={86} label="Shareholders ROI" />

      {/* Summary Text */}
      <div className=" leading-relaxed text-[#777777] text-sm ">
        <p className="mb-4">
          Consectetur adipiscing elit. Praesent orci nisi, porta sed diam id,
          venenatis dignissim urna. Duis sit amet eros a sem viverra mollis nec
          eu sem. Quisque rutporta sed diam id.
        </p>
        <p>
          Venenatis dignissim urna. Duis sit amet eros a sem viver uisque rurum
          euismod fermentum.
        </p>
      </div>
    </div>
  );
};

export default ProgressBar;
