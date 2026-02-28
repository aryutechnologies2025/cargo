import Image from "next/image";
import React from "react";
import Hero from "../components/about/Hero";
import ProgressBar from "../components/about/ProgressBar";
import ParallexImage from "../components/about/ParallexImage";
import { DefiningMoments } from "../components/about/DefiningMoments";
import QuoteCircularGrid from "../components/about/QuoteCircularGrid";
import OurJourney from "../components/about/OurJourney";
import Services from "../components/about/Services";
import Values from "../components/about/Values";
import CTA from "../components/about/CTA";

const LogisticsShowcase = () => {
  return (
    <section className="bg-white    text-gray-700">
      <Hero />
      <OurJourney/>
      <Services/>
      <Values/>
      <CTA/>
      <ProgressBar />
      {/* <ParallexImage /> */}
      <DefiningMoments />
      {/* <QuoteCircularGrid /> */}

     
    </section>
  );
};

export default LogisticsShowcase;
