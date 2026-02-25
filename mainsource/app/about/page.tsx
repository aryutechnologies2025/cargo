import Image from "next/image";
import React from "react";
import Hero from "../components/about/Hero";
import ProgressBar from "../components/about/ProgressBar";
import ParallexImage from "../components/about/ParallexImage";

const LogisticsShowcase = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-10 lg:px-20  text-gray-700">
      <div className="max-w-6xl mx-auto">
        <Hero />
        <ProgressBar />
        <ParallexImage/>
      </div>
    </div>
  );
};

export default LogisticsShowcase;

