'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router=useRouter()
  return (
    <section className="relative w-full min-h-[75vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Logistics background"
          fill
          sizes="100vw"
          className="object-cover object-top"
          priority
          unoptimized
        />
        {/* Gradient overlay for better text contrast */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 w-fit mx-auto px-4 py-24 text-center">
        <div className="bg-[#00bef2]">
          <p className="bg-[#1874c1] text-white px-5 py-2 uppercase text-sm">
            Enter the Consignment No.
          </p>

          <div className="px-10 pt-6 pb-1">
            <div className="flex gap-2">
              <input
                placeholder="Enter Tracking Number"
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                name=""
                id=""
                className="bg-white text-xs p-1 ps-3 w-80 outline-0  [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
              <button onClick={()=>router.push('/track-your-parcel')} className="bg-[#fdc300] px-8 py-2 font-semibold text-xs text-white">
                TRACK RESULT
              </button>
            </div>

            <p className="text-center text-sm text-white mt-3">Ex: 12345</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
