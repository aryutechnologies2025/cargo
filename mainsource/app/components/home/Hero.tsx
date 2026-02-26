// 'use client'
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// const Hero = () => {
//   const router=useRouter()
//   return (
//     <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/images/hero-bg.jpg"
//           alt="Logistics background"
//           fill
//           sizes="100vw"
//           className="object-cover object-top"
//           priority
//           unoptimized
//         />
       
//       </div>

//       {/* Content */}
//       <div className="relative z-10 w-fit mx-auto px-4 py-24 text-center">
//         <div className="bg-[#00bef2]">
//           <p className="bg-[#1874c1] text-white px-5 py-2 uppercase text-sm">
//             Enter the Consignment No.
//           </p>

//           <div className="px-10 pt-6 pb-1">
//             <div className="flex gap-2">
//               <input
//                 placeholder="Enter Tracking Number"
//                 type="number"
//                 inputMode="numeric"
//                 pattern="[0-9]*"
//                 name=""
//                 id=""
//                 className="bg-white text-xs p-1 ps-3 w-80 outline-0  [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
//               />
//               <button onClick={()=>router.push('/track-your-parcel')} className="bg-[#fdc300] px-8 py-2 font-semibold text-xs text-white">
//                 TRACK RESULT
//               </button>
//             </div>

//             <p className="text-center text-sm text-white mt-3">Ex: 12345</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

'use client'
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleTrack = () => {
    if (trackingNumber.trim()) {
      router.push(`/track-your-parcel?id=${trackingNumber}`);
    }
  };

  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Logistics background"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
          unoptimized
        />
        {/* Darkening overlay to help text pop */}
        <div className="absolute inset-0 bg-black/20 z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-[90%] sm:max-w-xl mx-auto px-4 py-12">
        <div className="bg-[#00bef2] shadow-2xl rounded-sm overflow-hidden">
          
          {/* Header Bar */}
          <div className="bg-[#1874c1] text-white px-5 py-3 md:py-4">
            <h2 className="uppercase text-sm md:text-base font-medium md:font-semibold tracking-wider">
              Enter the Consignment No.
            </h2>
          </div>

          {/* Form Area */}
          <div className="px-6 py-8 md:px-10">
            <div className="flex flex-col sm:flex-row gap-0 sm:gap-2 group">
              <input
                placeholder="Enter Tracking Number"
                type="number"
                inputMode="numeric"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="flex-1 bg-white text-sm p-4 h-12 outline-none border-2 border-transparent focus:border-[#1874c1] transition-all text-gray-800 rounded-t-md sm:rounded-t-none sm:rounded-l-sm [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
              <button 
                onClick={handleTrack}
                className="bg-[#fdc300] hover:bg-[#e5b100] px-8 h-12 font-bold text-xs md:text-sm text-white transition-colors  whitespace-nowrap rounded-b-md sm:rounded-b-none sm:rounded-r-sm shadow-lg sm:shadow-none cursor-pointer"
              >
                TRACK RESULT
              </button>
            </div>

            <div className="flex justify-between items-center mt-4">
               <p className="text-white text-xs md:text-sm ">
                Ex: 12345
               </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;