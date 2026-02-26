// import React from "react";

// const TopInfoBar = () => {
//   return (
//     <div className="bg-white py-22 px-4 max-w-7xl mx-auto">
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
//         <div>
//           <h4 className="font-bold text-base mb-5 uppercase text-[#2A2A2A] tracking-wider">
//             USA Office
//           </h4>
//           <p className="text-[#777777] leading-relaxed">
//             11 Hills Ave, Loftus - New Jersey,
//             <br />
//             Lorem ipsum dolor sit amet,
//             <br />
//             consectetur adipiscing elit,
//             <br />
//             USA
//           </p>
//         </div>
//         <div>
//           <h4 className="font-bold text-base mb-5 uppercase text-[#2A2A2A] tracking-wider">
//             Working Hours
//           </h4>
//           <p className="text-[#777777] mb-2">Monday - Friday:</p>
//           <p className="text-[#777777] mb-3">09:00 am to 05:00 pm</p>
//           <p className="text-[#777777] mb-2">Saturday - Sunday:</p>
//           <p className="text-[#777777] ">Holiday</p>
//         </div>
//         <div>
//           <h4 className="font-bold text-base mb-5 uppercase text-[#2A2A2A] tracking-wider">
//             Student Relations
//           </h4>
//           <p className="text-[#777777] mb-3">Mail:  <span className="text-[#1874C1]"> submissions@domain.com </span></p>
//           <p className="text-[#777777] mb-3">Phone: (012) 1234 789 456</p>
//           <p className="text-[#777777] mb-3">Fax: 1.245.789.654</p>
//         </div>
//         <div>
//           <h4 className="font-bold text-base mb-5 uppercase text-[#2A2A2A] tracking-wider">
//             Business Development  
//           </h4>
//           <p className="text-[#777777] mb-3">Mail:  <span className="text-[#1874C1]"> submissions@domain.com </span></p>
//           <p className="text-[#777777] mb-3">Phone: (012) 1234 789 456</p>
//           <p className="text-[#777777] mb-3">Fax: 1.245.789.654</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopInfoBar;


import { MdLocationOn, MdAccessTime, MdEmail, MdPhone } from "react-icons/md";
import { FaFax } from "react-icons/fa";

const TopInfoBar = () => {
  

  const infoSections = [
    {
      title: "USA Office",
      icon: MdLocationOn,
      content: (
        <>
          11 Hills Ave, Loftus - New Jersey,
          <br />
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
          <br />
          USA
        </>
      ),
    },
    {
      title: "Working Hours",
      icon: MdAccessTime,
      content: (
        <>
          <p className="text-[#777777] mb-2">Monday - Friday:</p>
          <p className="text-[#777777] mb-3">09:00 am to 05:00 pm</p>
          <p className="text-[#777777] mb-2">Saturday - Sunday:</p>
          <p className="text-[#777777]">Holiday</p>
        </>
      ),
    },
    {
      title: "Student Relations",
      icon: MdEmail,
      content: (
        <>
          <p className="text-[#777777] mb-3 flex items-center gap-2">
            <MdEmail className="text-xs opacity-50" />
            Mail: <span className="text-[#1874C1] hover:underline transition-all duration-300 cursor-pointer"> submissions@domain.com </span>
          </p>
          <p className="text-[#777777] mb-3 flex items-center gap-2">
            <MdPhone className="text-xs opacity-50" />
            Phone: (012) 1234 789 456
          </p>
          <p className="text-[#777777] mb-3 flex items-center gap-2">
            <FaFax className="text-xs opacity-50" />
            Fax: 1.245.789.654
          </p>
        </>
      ),
    },
    {
      title: "Business Development",
      icon: MdEmail,
      content: (
        <>
          <p className="text-[#777777] mb-3 flex items-center gap-2">
            <MdEmail className="text-xs opacity-50" />
            Mail: <span className="text-[#1874C1] hover:underline transition-all duration-300 cursor-pointer"> submissions@domain.com </span>
          </p>
          <p className="text-[#777777] mb-3 flex items-center gap-2">
            <MdPhone className="text-xs opacity-50" />
            Phone: (012) 1234 789 456
          </p>
          <p className="text-[#777777] mb-3 flex items-center gap-2">
            <FaFax className="text-xs opacity-50" />
            Fax: 1.245.789.654
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="bg-white px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14 mx-auto overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-sm">
        {infoSections.map((section, index) => {
          const IconComponent = section.icon;
          
          return (
            <div
              key={index}
              className={`group transform transition-all duration-500 hover:-translate-y-2`}
              
            >
              {/* Header with Icon */}
              <div className="flex items-center gap-3 mb-3 sm:mb-4 md:mb-5">
                <div className="relative">
                  <div className="p-2 rounded-lg bg-[#1874C1]/15 group-hover:bg-[#1874C1]/10 transition-all duration-300">
                    <IconComponent className="text-[#1874C1] text-xl sm:text-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-[#1874C1]/20 rounded-lg blur-md scale-0 group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100 -z-10" />
                </div>
                <h4 className="font-bold text-sm sm:text-base text-[#2A2A2A] uppercase tracking-wider transition-all duration-300 group-hover:text-[#1874C1]">
                  {section.title}
                </h4>
              </div>

              {/* Content with animations */}
              <div className="text-[#777777] text-xs sm:text-sm leading-relaxed space-y-1 sm:space-y-2">
                {section.content}

                {/* Subtle bottom border animation */}
                <div className="w-0 group-hover:w-12 h-0.5 bg-[#1874C1] mt-3 sm:mt-4 transition-all duration-500" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopInfoBar;