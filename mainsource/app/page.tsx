import Image from "next/image";
import Hero from "./components/home/Hero";
import CEOSection from "./components/home/CEOSection";
import FeaturesSection from "./components/home/FeatureSection";
import BlogSection from "./components/home/BlogSection";
import StatsSection from "./components/home/StatsSection";
import FranchiseeSection from "./components/home/FranchiseeSection";
import TestimonialSection from "./components/home/TestimonailSection";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <CEOSection/>
      <FeaturesSection/>
      <BlogSection/>
      <StatsSection/>
      <FranchiseeSection/>
      <TestimonialSection/>
  
    </div>
  );
}
