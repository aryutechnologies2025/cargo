import React from "react";
import { FaComputer } from "react-icons/fa6";
import { RiSafe2Fill } from "react-icons/ri";

const QuoteCircularGrid = () => {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-fixed py-20"
      style={{
        backgroundImage: "url('/images/about-quote-circularGrid-bg-image.jpg')",
      }}
    >
      {" "}
      <div className="absolute inset-0 bg-[#e4fcff]/90" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-3 items-center">
        {/* Quote Side */}
        <div className="w-3/4">
          <h2 className="text-2xl text-[#2A2A2A] leading-snug mb-2">
            The line between disorder and order lies in logistics....
          </h2>
          <p className="font-bold text-lg text-[#2F3436] mb-6">— SUN TZU</p>
          <p className="text-sm text-[#777777] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Amet
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
            mattis.
          </p>
        </div>

        {/* Circular Grid Side */}
        <div className="relative flex justify-center">
          <div className="grid grid-cols-2 gap-1 w-80 h-80 md:w-[550px] md:h-[550px] rounded-full overflow-hidden ">
            {/* Top Left: Blue Icon */}
            <div
              className="bg-[#1874c1] flex flex-col justify-center p-2
             text-center text-white"
            >
              <div className=" flex justify-end items-end">
                <FaComputer className="text-white text-5xl" />
              </div>

              <div className="flex justify-end">
                <p className="text-lg  text-end w-[80%] ">
                  Managing everything from source to destination is Logistics...
                </p>
              </div>
            </div>

            {/* Top Right: Worker Image */}
            <div className="bg-gray-200">
              <img
                src="/images/about-circularGrid-image1.jpg"
                alt="Worker"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Left: Success Image */}
            <div className="bg-gray-200">
              <img
                src="/images/about-circularGrid-image2.jpg"
                alt="Success"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Right: Blue Icon */}
            <div className="bg-[#1874c1] flex flex-col  justify-center p-2 text-center text-white">
              {/* <div className=" flex justify-end items-end"> */}
              <RiSafe2Fill className="text-white text-5xl" />
              {/* </div> */}
              <p className="text-lg w-2/3 text-start ">
                Safety & Security of lives – Our guiding force
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCircularGrid;
