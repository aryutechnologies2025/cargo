import React from "react";
import TopInfoBar from "../components/contact/TopInfoBar";
import ContactForm from "../components/contact/ContactForm";
import GoogleMap from "../components/contact/GoogleMap";
import CTA from "../components/contact/ContactCTA";

const page = () => {
  return (
    <div className="w-full  text-gray-800">
      <TopInfoBar />
      <ContactForm />
      <GoogleMap />
      <CTA/>
    </div>
  );
};

export default page;
