// import React from 'react';

// const LogisticsShowcase = () => {
//   return (
//     <div className="bg-white py-16 px-4 md:px-10 lg:px-20 font-sans text-gray-700">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Top Section: Images and Text */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          
//           {/* Left Side: Mockup Images */}
//           <div className="relative flex flex-col items-center lg:items-end">
//             {/* Main Magazine Mockup */}
//             <div className="relative z-10 transform -rotate-6 transition-transform hover:rotate-0 duration-500">
//               <img 
//                 src="/magazine-mockup-large.jpg" 
//                 alt="Logistics Fleet 2017" 
//                 className="w-full max-w-md shadow-2xl rounded-sm"
//               />
//             </div>
//             {/* Smaller Secondary Mockup */}
//             <div className="mt-[-80px] mr-[-40px] z-20 shadow-xl border-4 border-white">
//               <img 
//                 src="/magazine-mockup-small.jpg" 
//                 alt="2017 Travel Edition" 
//                 className="w-40 md:w-56"
//               />
//             </div>
//           </div>

//           {/* Right Side: Welcome Text */}
//           <div className="space-y-6">
//             <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
//               Welcome to <span className="font-semibold">Logistics International</span>
//             </h1>
            
//             <div className="space-y-4 text-sm leading-relaxed text-gray-500">
//               <p>
//                 Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. 
//                 Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
//               </p>
//               <p>
//                 Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, 
//                 pharetra a, ultricies in, diam. Sed arcu. Cras consequat.
//               </p>
//             </div>

//             <hr className="border-gray-100" />

//             <blockquote className="italic text-gray-500 text-sm border-l-2 border-blue-500 pl-4 py-2">
//               "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
//               sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
//             </blockquote>

//             <div className="pt-4">
//               <p className="text-xs tracking-[0.2em] font-bold text-gray-400">
//                 <span className="text-blue-500 font-extrabold mr-2">JOIN US</span> 
//                 WE COVER THE WHOLE WORLD
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section: Progress Bars & Summary */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center pt-10 border-t border-gray-100">
          
//           {/* Progress Chart 1 */}
//           <CircularProgress percentage={58} label="Increase In" />
          
//           {/* Progress Chart 2 */}
//           <CircularProgress percentage={40} label="Satisfied Employees" />
          
//           {/* Progress Chart 3 */}
//           <CircularProgress percentage={86} label="Shareholders ROI" />

//           {/* Summary Text */}
//           <div className="text-xs leading-relaxed text-gray-500">
//             <p className="mb-4">
//               Consectetur adipiscing elit. Praesent orci nisi, porta sed diam id, venenatis 
//               dignissim urna. Duis sit amet eros a sem viverra mollis nec eu sem.
//             </p>
//             <p>
//               Venenatis dignissim urna. Duis sit amet eros a sem viverra mollis nec eu sem.
//             </p>
//           </div>
//         </div>

//         {/* Top Section: Quote and Circular Grid */}
//       <section className="relative overflow-hidden bg-[url('/warehouse-bg.jpg')] bg-cover bg-fixed py-20">
//         <div className="absolute inset-0 bg-blue-50/90" /> {/* Overlay */}
        
//         <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Quote Side */}
//           <div className="max-w-md">
//             <h2 className="text-2xl text-gray-800 leading-snug mb-2">
//               The line between disorder and order lies in logistics....
//             </h2>
//             <p className="font-bold text-gray-900 mb-6">— SUN TZU</p>
//             <p className="text-sm text-gray-500 leading-relaxed">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
//             </p>
//           </div>

//           {/* Circular Grid Side */}
//           <div className="relative flex justify-center">
//             <div className="grid grid-cols-2 gap-1 w-80 h-80 md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-4 border-white shadow-2xl">
//               {/* Top Left: Blue Icon */}
//               <div className="bg-[#2478ba] flex flex-col items-center justify-center p-8 text-center text-white">
//                 <div className="mb-4 text-4xl">💻</div>
//                 <p className="text-xs md:text-sm font-medium">Managing everything from source to destination is Logistics...</p>
//               </div>
              
//               {/* Top Right: Worker Image */}
//               <div className="bg-gray-200">
//                 <img src="/worker.jpg" alt="Worker" className="w-full h-full object-cover" />
//               </div>

//               {/* Bottom Left: Success Image */}
//               <div className="bg-gray-200">
//                 <img src="/trophy.jpg" alt="Success" className="w-full h-full object-cover" />
//               </div>

//               {/* Bottom Right: Blue Icon */}
//               <div className="bg-[#1e66a0] flex flex-col items-center justify-center p-8 text-center text-white">
//                 <div className="mb-4 text-4xl">🏗️</div>
//                 <h3 className="text-sm font-bold uppercase mb-2">Safety & Security</h3>
//                 <p className="text-xs md:text-sm italic">— Our guiding force</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Vertical Timeline Section */}
//       <section className="py-24 max-w-5xl mx-auto px-6">
//         <div className="relative">
//           {/* Vertical Line */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800" />

//           <div className="space-y-24">
//             {/* Step 1: Tracker Device (Right Image) */}
//             <div className="relative flex items-center justify-between">
//               <div className="w-[45%] text-right pr-12">
//                 <h4 className="font-bold text-xs uppercase tracking-widest border-b-2 border-blue-500 inline-block pb-1 mb-3">Tracker Device</h4>
//                 <p className="text-xs text-gray-500 leading-relaxed">Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.</p>
//               </div>
//               <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
//                 <div className="w-4 h-4 bg-white border-4 border-gray-800 rounded-full z-10" />
//                 <div className="w-20 h-20 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg ml-8">
//                   <span className="text-3xl">📱</span>
//                 </div>
//               </div>
//               <div className="w-[45%]" />
//             </div>

//             {/* Step 2: Consignment Booking (Left Image) */}
//             <div className="relative flex items-center justify-between">
//               <div className="w-[45%]" />
//               <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center flex-row-reverse">
//                 <div className="w-4 h-4 bg-white border-4 border-gray-800 rounded-full z-10" />
//                 <div className="w-20 h-20 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg mr-8">
//                   <span className="text-3xl">📦</span>
//                 </div>
//               </div>
//               <div className="w-[45%] pl-12">
//                 <h4 className="font-bold text-xs uppercase tracking-widest border-b-2 border-blue-500 inline-block pb-1 mb-3">Consignment Booking</h4>
//                 <p className="text-xs text-gray-500 leading-relaxed">Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.</p>
//               </div>
//             </div>

//             {/* Step 3: Destination (Right Image) */}
//             <div className="relative flex items-center justify-between">
//               <div className="w-[45%] text-right pr-12">
//                 <h4 className="font-bold text-xs uppercase tracking-widest border-b-2 border-blue-500 inline-block pb-1 mb-3">Moving to Destination</h4>
//                 <p className="text-xs text-gray-500 leading-relaxed">Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.</p>
//               </div>
//               <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
//                 <div className="w-4 h-4 bg-white border-4 border-gray-800 rounded-full z-10" />
//                 <div className="w-20 h-20 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg ml-8">
//                   <span className="text-3xl">🚚</span>
//                 </div>
//               </div>
//               <div className="w-[45%]" />
//             </div>
//           </div>
//         </div>
//       </section>
//       </div>
//     </div>
//   );
// };

// // Reusable Circular Progress Component
// const CircularProgress = ({ percentage, label }: { percentage: number, label: string }) => {
//   const radius = 45;
//   const circumference = 2 * Math.PI * radius;
//   const strokeDashoffset = circumference - (percentage / 100) * circumference;

//   return (
//     <div className="flex flex-col items-center text-center">
//       <div className="relative w-32 h-32 flex items-center justify-center">
//         <svg className="w-full h-full transform -rotate-90">
//           {/* Background Circle */}
//           <circle
//             cx="64" cy="64" r={radius}
//             stroke="currentColor"
//             strokeWidth="3"
//             fill="transparent"
//             className="text-gray-100"
//           />
//           {/* Progress Circle */}
//           <circle
//             cx="64" cy="64" r={radius}
//             stroke="currentColor"
//             strokeWidth="3"
//             fill="transparent"
//             strokeDasharray={circumference}
//             strokeDashoffset={strokeDashoffset}
//             strokeLinecap="round"
//             className="text-blue-500"
//           />
//         </svg>
//         <span className="absolute text-2xl font-light text-gray-400">{percentage}%</span>
//       </div>
//       <p className="mt-4 text-xs font-bold uppercase tracking-wider text-gray-600">{label}</p>
//     </div>
//   );
// };

// export default LogisticsShowcase;






// // // ////////////////////////////////////////////////////////////////////////////////



