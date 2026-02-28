import React from "react";
import TopInfoBar from "../components/contact/TopInfoBar";
import ContactForm from "../components/contact/ContactForm";
import GoogleMap from "../components/contact/GoogleMap";
import CTA from "../components/contact/ContactCTA";
import GlobalOffices from "../components/contact/GlobalOffices";

const page = () => {
  return (
    <div >
      {/* <TopInfoBar /> */}
      <ContactForm />
      <GlobalOffices/>

      {/* <GoogleMap /> */}
      {/* <CTA/> */}
    </div>
  );
};

export default page;
