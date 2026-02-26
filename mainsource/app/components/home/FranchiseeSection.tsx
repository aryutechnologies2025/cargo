// import Image from "next/image";

// const FranchiseeSection = () => {
//   const benefits = [
//     {
//       icon: "/icons/franchisee-icon1.webp",
//       title: "Understanding the brand and aligning with its values",
//       description:
//         "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut.",
//     },
//     {
//       icon: "/icons/franchisee-icon2.webp",

//       title: "Franchisee model and its relevance",
//       description:
//         "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut.",
//     },
//     {
//       icon: "/icons/franchisee-icon3.webp",

//       title: "Form a win-win relationship with the customers & franchisor",
//       description:
//         "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut.",
//     },
//     {
//       icon: "/icons/franchisee-icon4.webp",

//       title: "The duration of the franchisee term. Download the form",
//       description:
//         "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut.",
//     },
//   ];

//   return (
//     <section className="w-full py-16 bg-white">
//       <div className="max-w-5xl mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-12 space-y-3">
//           <p className="text-lg font-thin text-[#2A2A2A] ">
//             Franchisee Terms and Benefits
//           </p>
//           <div className="flex items-center justify-center  ">
//             <div className="w-32 h-px bg-gray-200 "></div>
//             <div className="w-12 h-0.5 bg-yellow-400 "></div>
//             <div className="w-32 h-px bg-gray-200 "></div>
//           </div>
//           <p className="text-xs text-[#777777]">
//             Together, we can forge ahead...!
//           </p>
//         </div>

//         {/* Benefits List */}
//         <div className="grid grid-cols-2 gap-6">
//           {benefits.map((benefit, index) => (
//             <div key={index} className="flex gap-3">
//               <Image
//                 src={benefit.icon}
//                 width={50}
//                 height={50}
//                 alt={benefit.title}
//                 className="w-22 h-22 rounded-full"
//               />

//               <div>
//                 <h3 className="text-[#232222] ">
//                   {benefit.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-[#777777] text-xs mt-2 leading-5">{benefit.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FranchiseeSection;



import Image from "next/image";

const FranchiseeSection = () => {


  const benefits = [
    {
      icon: "/icons/franchisee-icon1.webp",
      title: "Understanding the brand and aligning with its values",
      description:
        "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut.",
    },
    {
      icon: "/icons/franchisee-icon2.webp",
      title: "Franchisee model and its relevance",
      description:
        "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut.",
    },
    {
      icon: "/icons/franchisee-icon3.webp",
      title: "Form a win-win relationship with the customers & franchisor",
      description:
        "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut.",
    },
    {
      icon: "/icons/franchisee-icon4.webp",
      title: "The duration of the franchisee term. Download the form",
      description:
        "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut.",
    },
  ];

  return (
    <section className="w-full px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14 bg-white overflow-hidden">
        {/* Header with animations */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 space-y-2 sm:space-y-3">
          
          <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-[#2A2A2A] transition-all duration-700 hover:scale-105">
            Franchisee Terms and Benefits
          </p>
          
          <div className="flex items-center justify-center mt-4">
          <div className="w-32 h-0.5 bg-gray-200 "></div>
          <div className="w-12 h-1 bg-yellow-400 rounded-2xl animate-pulse"></div>
          <div className="w-32 h-0.5 bg-gray-200 "></div>
        </div>

          
          <p className=" text-[#777777]">
            Together, we can forge ahead...!
          </p>
        </div>

        {/* Benefits List - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 lg:gap-16 mt-10 md:mt-14 lg:mt-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 group cursor-pointer transform transition-all duration-500 hover:-translate-y-1 `}
             
            >
              {/* Icon with animations */}
              {/* <div className="relative flex "> */}
                <div className="relative inline-block">
                  <Image
                    src={benefit.icon}
                    width={60}
                    height={60}
                    alt={benefit.title}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 lg:w-30 lg:h-30 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg"
                  />
                  
                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-md scale-0 group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100 -z-10" />
                </div>
              {/* </div> */}

              <div className="flex-1 ">
                {/* Title with responsive font sizes */}
                <h3 className="text-base lg:text-xl font-medium text-[#232222] transition-all duration-300 group-hover:text-[#1874C1] group-hover:translate-x-1">
                  {benefit.title}
                </h3>

                {/* Description with responsive font sizes */}
                <p className="text-sm  text-[#777777] mt-1 sm:mt-2 leading-4 sm:leading-5 transition-all duration-300 group-hover:text-[#4A4A4A]">
                  {benefit.description}
                </p>

                {/* Subtle bottom border animation - hidden on mobile */}
                <div className="max-sm:hidden sm:block w-0 group-hover:w-12 h-0.5 bg-yellow-400 mt-2 transition-all duration-500 mx-auto xs:mx-0" />
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default FranchiseeSection;