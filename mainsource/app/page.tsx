import Image from "next/image";
import Hero from "./components/home/Hero";
import CEOSection from "./components/home/CEOSection";
import FeaturesSection from "./components/home/FeatureSection";
import BlogSection from "./components/home/BlogSection";
import StatsSection from "./components/home/StatsSection";
import FranchiseeSection from "./components/home/FranchiseeSection";
import TestimonialSection from "./components/home/TestimonailSection";
import OurServices from "./components/home/OurServices";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <CEOSection/>
      <OurServices/>
      <FeaturesSection/>
      <BlogSection/>
      <StatsSection/>
      <FranchiseeSection/>
      <TestimonialSection/>
  
    </div>
  );
}
