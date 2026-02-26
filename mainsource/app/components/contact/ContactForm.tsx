// import React from "react";

// const ContactForm = () => {
//   return (
//     <div
//       className=" bg-cover bg-center min-h-150 flex items-center"
//       style={{
//         backgroundImage: `url('/images/contac-form-bg-image.jpg')`,
//       }}
//     >
//       <div className="max-w-7xl mx-auto w-full p-16 flex justify-start">
//         {/* Form Card */}
//         <div className="bg-white p-8 md:p-10 shadow-2xl max-w-xl w-full">
//           <h2 className="text-[#2A2A2A] mb-4 uppercase tracking-tight">
//             Book An Appointment
//           </h2>
//           <p className="text-[#777777] text-sm mb-6 leading-relaxed">
//             Cras pretium risus ac tempor ultrices. Phasellus pretium ex odio,
//             sit amet ultricies nulla accumsan quis. Morbi pharetra orci rutrum
//             ultrices tempor.
//           </p>

//           <form className="space-y-4">
//             <select className="w-full border border-gray-300 p-3 text-sm text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500">
//               <option>Select Shipment Type</option>
//               <option>Air Freight Services</option>
//               <option>The Shipping Route</option>
//               <option>By Rail Transport</option>
//             </select>

//             <div className="grid grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 className="border border-gray-300 p-3 text-sm focus:outline-none"
//               />
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 className="border border-gray-300 p-3 text-sm focus:outline-none"
//               />
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="border border-gray-300 p-3 text-sm focus:outline-none"
//               />
//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 className="border border-gray-300 p-3 text-sm focus:outline-none"
//               />
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <input
//                 type="date"
//                 className="border border-gray-300 p-3 text-sm text-gray-400 focus:outline-none"
//               />
//               <select className="border border-gray-300 p-3 text-sm text-gray-400 focus:outline-none">
//                 <option>Male</option>
//                 <option>Female</option>
//               </select>
//             </div>

//             <textarea
//               placeholder="Your Message"
//               rows={6}
//               className="w-full border border-gray-300 p-3 text-sm focus:outline-none"
//             ></textarea>

//             <button className="font-raleway bg-[#1874c1] text-white py-3 px-8 uppercase transition-colors">
//               Book Now
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

"use client";
import React, { useEffect, useState } from "react";
import {
  MdSend,
  MdCalendarToday,
  MdPerson,
  MdEmail,
  MdPhone,
} from "react-icons/md";
import { FaShip, FaTruck, FaTrain } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    shipmentType: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    gender: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div
      className="relative bg-cover bg-center min-h-125 sm:min-h-150 md:min-h-175 lg:min-h-150 flex items-center"
      style={{
        backgroundImage: `url('/images/contac-form-bg-image.jpg')`,
      }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[5px]" />

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 flex justify-center md:justify-start">
        {/* Form Card with entrance animation */}
        <div
          className={`bg-white/95 backdrop-blur-sm p-5 sm:p-8 md:p-10 shadow-2xl max-w-xl w-full rounded-lg transform transition-all duration-700 `}
        >
          {/* Decorative top bar */}
          <div className="w-20 h-1 bg-[#1874c1] mb-6 transition-all duration-500 hover:w-24" />

          <h2 className="text-xl sm:text-2xl md:text-3xl text-[#2A2A2A] mb-3 uppercase tracking-tight font-bold group-hover:text-[#1874c1] transition-colors">
            Book An Appointment
          </h2>

          <p className="text-[#777777] text-xs sm:text-sm mb-6 leading-relaxed">
            Cras pretium risus ac tempor ultrices. Phasellus pretium ex odio,
            sit amet ultricies nulla accumsan quis. Morbi pharetra orci rutrum
            ultrices tempor.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Shipment Type with icon */}
            <div className="relative group">
              <select
                name="shipmentType"
                value={formData.shipmentType}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 pl-10 text-sm text-gray-600 focus:outline-none focus:border-[#1874c1] focus:ring-1 focus:ring-[#1874c1] transition-all duration-300 appearance-none bg-white"
              >
                <option value="">Select Shipment Type</option>
                <option value="air">Air Freight Services</option>
                <option value="sea">The Shipping Route</option>
                <option value="rail">By Rail Transport</option>
                <option value="road">Road Transport</option>
              </select>
              <FaShip className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm group-focus-within:text-[#1874c1] transition-colors duration-300" />
              <div className="absolute inset-0 border-2 border-[#1874c1] rounded opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative group">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full border border-gray-300 p-3 pl-10 text-sm focus:outline-none focus:border-[#1874c1] focus:ring-1 focus:ring-[#1874c1] transition-all duration-300"
                />
                <MdPerson className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm group-focus-within:text-[#1874c1] transition-colors duration-300" />
              </div>

              <div className="relative group">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full border border-gray-300 p-3 pl-10 text-sm focus:outline-none focus:border-[#1874c1] focus:ring-1 focus:ring-[#1874c1] transition-all duration-300"
                />
                <MdPerson className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm group-focus-within:text-[#1874c1] transition-colors duration-300" />
              </div>
            </div>

            {/* Contact Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full border border-gray-300 p-3 pl-10 text-sm focus:outline-none focus:border-[#1874c1] focus:ring-1 focus:ring-[#1874c1] transition-all duration-300"
                />
                <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm group-focus-within:text-[#1874c1] transition-colors duration-300" />
              </div>

              <div className="relative group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 p-3 pl-10 text-sm focus:outline-none focus:border-[#1874c1] focus:ring-1 focus:ring-[#1874c1] transition-all duration-300"
                />
                <MdPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm group-focus-within:text-[#1874c1] transition-colors duration-300" />
              </div>
            </div>

            {/* Date and Gender */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative group">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 pl-10 text-sm text-gray-600 focus:outline-none focus:border-[#1874c1] focus:ring-1 focus:ring-[#1874c1] transition-all duration-300"
                />
                <MdCalendarToday className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm group-focus-within:text-[#1874c1] transition-colors duration-300" />
              </div>

              <div className="relative group">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 pl-10 text-sm text-gray-600 focus:outline-none focus:border-[#1874c1] focus:ring-1 focus:ring-[#1874c1] transition-all duration-300 appearance-none bg-white"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <MdPerson className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm group-focus-within:text-[#1874c1] transition-colors duration-300" />
              </div>
            </div>

            {/* Message */}
            <div className="relative group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                className="w-full border border-gray-300 p-3 text-sm focus:outline-none focus:border-[#1874c1] focus:ring-1 focus:ring-[#1874c1] transition-all duration-300 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group/btn relative overflow-hidden font-raleway bg-[#1874c1] text-white py-3 px-8 uppercase transition-all duration-300 hover:bg-[#0f5a9e] hover:shadow-lg hover:scale-105 transform flex items-center gap-2 cursor-pointer"
            >
              <span className="relative z-10">Book Now</span>
              <BsFillSendFill className="relative z-10 text-sm transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />

              {/* Button shine effect */}
              <div className="absolute inset-0 bg-white/30 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
