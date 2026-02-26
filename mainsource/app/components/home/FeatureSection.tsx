// // // components/FeaturesSection.tsx
// // import { Sparkles, Clock, Code, HeartHandshake } from 'lucide-react';
// // import { VscTools } from "react-icons/vsc";
// // import { FiUploadCloud } from "react-icons/fi";
// // import { FiEdit } from "react-icons/fi";
// // import { IoSettingsOutline } from "react-icons/io5";

// // const FeaturesSection = () => {
// //   const features = [
// //     {
// //       title: 'Unique Design',

// //       icon: VscTools,
// //       description: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum'
// //     },
// //     {
// //       title: 'New Daily Updates',
// //       icon: FiUploadCloud,
// //       description: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum'
// //     },
// //     {
// //       title: 'Clean & Hand Coded',
// //       icon: FiEdit,
// //       description: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum'
// //     },
// //     {
// //       title: 'Free Support',
// //       icon: IoSettingsOutline,
// //       description: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum'
// //     }
// //   ];

// //   return (
// //     <section className="w-full py-16 bg-[#f7f7f7]">
// //       <div className="max-w-5xl mx-auto px-4">
// //         <div className="flex gap-5">
// //           {features.map((feature, index) => (
// //             <div
// //               key={index}
// //               className=""
// //             >
// //               {/* Icon and Title Row */}
// //                 <div className="flex items-center justify-end gap-3">
// //                   <h3 className=" font-bold text-[#2A2A2A]">
// //                     {feature.title}
// //                   </h3>
// //                   <feature.icon className="h-7 w-7 text-[#1874c1]" />
// //               </div>

// //               {/* Description */}
// //               <p className="text-[#777777] mt-4 text-right text-xs leading-relaxed">
// //                 {feature.description}
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default FeaturesSection;

// // components/FeaturesSection.tsx
// import { Sparkles, Clock, Code, HeartHandshake } from 'lucide-react';
// import { VscTools } from "react-icons/vsc";
// import { FiUploadCloud } from "react-icons/fi";
// import { FiEdit } from "react-icons/fi";
// import { IoSettingsOutline } from "react-icons/io5";

// const FeaturesSection = () => {
//   const features = [
//     {
//       title: 'Unique Design',
//       icon: VscTools,
//       description: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum'
//     },
//     {
//       title: 'New Daily Updates',
//       icon: FiUploadCloud,
//       description: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum'
//     },
//     {
//       title: 'Clean & Hand Coded',
//       icon: FiEdit,
//       description: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum'
//     },
//     {
//       title: 'Free Support',
//       icon: IoSettingsOutline,
//       description: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum'
//     }
//   ];

//   return (
//     <section className="w-full bg-[#f7f7f7]">
//       <div className="px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
//           {features.map((feature, index) => (
//             <div key={index}>
//               {/* Icon and Title Row */}
//               <div className="flex items-center -end gap-3">
//                 <h3 className="font-bold text-[#2A2A2A] text-sm sm:text-base">
//                   {feature.title}
//                 </h3>
//                 <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-[#1874c1]" />
//               </div>

//               {/* Description */}
//               <p className="text-[#777777] mt-2 md:mt-3 lg:mt-4  text-xs sm:text-sm leading-relaxed">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;

// components/FeaturesSection.tsx
import { Sparkles, Clock, Code, HeartHandshake } from "lucide-react";
import { VscTools } from "react-icons/vsc";
import { FiUploadCloud } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

const FeaturesSection = () => {
  const features = [
    {
      title: "Unique Design",
      icon: VscTools,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum",
    },
    {
      title: "New Daily Updates",
      icon: FiUploadCloud,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum",
    },
    {
      title: "Clean & Hand Coded",
      icon: FiEdit,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum",
    },
    {
      title: "Free Support",
      icon: IoSettingsOutline,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum",
    },
  ];

  return (
    <section className="w-full bg-[#f7f7f7]">
      <div className="px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group transform transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon and Title Row */}
              <div className="flex items-center  gap-3">
                <h3 className="font-bold text-[#2A2A2A] text-sm sm:text-base transition-all duration-300 group-hover:text-[#1874c1]">
                  {feature.title}
                </h3>
                <div className="transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-[#1874c1] transition-all duration-300 group-hover:animate-pulse" />
                </div>
              </div>

              {/* Description */}
              <p className="text-[#777777] mt-4  text-xs sm:text-sm leading-relaxed transition-all duration-300 group-hover:text-[#4A4A4A]">
                {feature.description}
              </p>

              {/* Subtle bottom border animation */}
              <div className="w-0 group-hover:w-full h-0.5 bg-[#1874c1] mt-3 transition-all duration-500 ease-out mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
