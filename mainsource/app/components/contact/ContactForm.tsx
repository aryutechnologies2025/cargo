import React from "react";

const ContactForm = () => {
  return (
    <div
      className=" bg-cover bg-center min-h-150 flex items-center"
      style={{
        backgroundImage: `url('/images/contac-form-bg-image.jpg')`, 
      }}
    >
      <div className="max-w-7xl mx-auto w-full p-16 flex justify-start">
        {/* Form Card */}
        <div className="bg-white p-8 md:p-10 shadow-2xl max-w-xl w-full">
          <h2 className="text-[#2A2A2A] mb-4 uppercase tracking-tight">
            Book An Appointment
          </h2>
          <p className="text-[#777777] text-sm mb-6 leading-relaxed">
            Cras pretium risus ac tempor ultrices. Phasellus pretium ex odio,
            sit amet ultricies nulla accumsan quis. Morbi pharetra orci rutrum
            ultrices tempor.
          </p>

          <form className="space-y-4">
            <select className="w-full border border-gray-300 p-3 text-sm text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option>Select Shipment Type</option>
              <option>Air Freight Services</option>
              <option>The Shipping Route</option>
              <option>By Rail Transport</option>
            </select>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 p-3 text-sm focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 p-3 text-sm focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 p-3 text-sm focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border border-gray-300 p-3 text-sm focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                className="border border-gray-300 p-3 text-sm text-gray-400 focus:outline-none"
              />
              <select className="border border-gray-300 p-3 text-sm text-gray-400 focus:outline-none">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full border border-gray-300 p-3 text-sm focus:outline-none"
            ></textarea>

            <button className="font-raleway bg-[#1874c1] text-white py-3 px-8 uppercase transition-colors">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
