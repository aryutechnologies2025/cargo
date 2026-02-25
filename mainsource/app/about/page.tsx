import Image from "next/image";
import React from "react";
import Hero from "../components/about/Hero";
import ProgressBar from "../components/about/ProgressBar";
import ParallexImage from "../components/about/ParallexImage";
import { DefiningMoments } from "../components/about/DefiningMoments";
import QuoteCircularGrid from "../components/about/QuoteCircularGrid";

const LogisticsShowcase = () => {
  return (
    <section className="bg-white    text-gray-700">
      <Hero />
      <ProgressBar />
      <ParallexImage />
      <DefiningMoments />
      <QuoteCircularGrid />

      {/* <section className="py-24 max-w-5xl mx-auto px-6">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800" />

            <div className="space-y-24">
              <div className="relative flex items-center justify-between">
                <div className="w-[45%] text-right pr-12">
                  <h4 className="font-bold text-xs uppercase tracking-widest border-b-2 border-blue-500 inline-block pb-1 mb-3">
                    Tracker Device
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Suspendisse urna nibh, viverra non, semper suscipit, posuere
                    a, pede. Donec nec justo eget felis facilisis fermentum.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
                  <div className="w-4 h-4 bg-white border-4 border-gray-800 rounded-full z-10" />
                  <div className="w-20 h-20 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg ml-8">
                    <span className="text-3xl">📱</span>
                  </div>
                </div>
                <div className="w-[45%]" />
              </div>

              <div className="relative flex items-center justify-between">
                <div className="w-[45%]" />
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center flex-row-reverse">
                  <div className="w-4 h-4 bg-white border-4 border-gray-800 rounded-full z-10" />
                  <div className="w-20 h-20 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg mr-8">
                    <span className="text-3xl">📦</span>
                  </div>
                </div>
                <div className="w-[45%] pl-12">
                  <h4 className="font-bold text-xs uppercase tracking-widest border-b-2 border-blue-500 inline-block pb-1 mb-3">
                    Consignment Booking
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Suspendisse urna nibh, viverra non, semper suscipit, posuere
                    a, pede. Donec nec justo eget felis facilisis fermentum.
                  </p>
                </div>
              </div>

              <div className="relative flex items-center justify-between">
                <div className="w-[45%] text-right pr-12">
                  <h4 className="font-bold text-xs uppercase tracking-widest border-b-2 border-blue-500 inline-block pb-1 mb-3">
                    Moving to Destination
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Suspendisse urna nibh, viverra non, semper suscipit, posuere
                    a, pede. Donec nec justo eget felis facilisis fermentum.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
                  <div className="w-4 h-4 bg-white border-4 border-gray-800 rounded-full z-10" />
                  <div className="w-20 h-20 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg ml-8">
                    <span className="text-3xl">🚚</span>
                  </div>
                </div>
                <div className="w-[45%]" />
              </div>
            </div>
          </div>
        </section> */}
    </section>
  );
};

export default LogisticsShowcase;
