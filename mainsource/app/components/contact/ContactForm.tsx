

// "use client";
// import React, { useEffect, useState } from "react";
// import {
//   MdSend,
//   MdCalendarToday,
//   MdPerson,
//   MdEmail,
//   MdPhone,
// } from "react-icons/md";
// import { FaShip, FaTruck, FaTrain } from "react-icons/fa";
// import { BsFillSendFill } from "react-icons/bs";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     shipmentType: "",
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     date: "",
//     gender: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
//     >,
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async(e: React.FormEvent) => {
//     e.preventDefault();
//     try{
//       const response=`https://cargocrm.aryuprojects.com/api/customers/create-message`,{
//       firstName,
//       lastName,
//       type,
//       gender,
//       appointmentDate,
//       email,
//       message,
//       }

//     }
//     catch(err){
//       console.log(err)
//     }
  
//   };

//   return (
//     <div
//       className="relative bg-cover bg-center min-h-125 sm:min-h-150 md:min-h-175 lg:min-h-150 flex items-center"
//       style={{
//         backgroundImage: `url('/images/contac-form-bg-image.jpg')`,
//       }}
//     >
//       {/* Overlay for better text contrast */}
//       <div className="absolute inset-0 bg-black/20 backdrop-blur-[5px]" />

//       <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 flex justify-center md:justify-start">
//         {/* Form Card with entrance animation */}
//         <div
//           className={`bg-white/95 backdrop-blur-sm p-5 sm:p-8 md:p-10 shadow-2xl max-w-xl w-full rounded-lg transform transition-all duration-700 `}
//         >
//           {/* Decorative top bar */}
//           <div className="w-20 h-1 bg-[#027cc2] mb-6 transition-all duration-500 hover:w-24" />

//           <h2 className="text-xl sm:text-2xl md:text-3xl text-[#2A2A2A] mb-3 uppercase tracking-tight font-bold group-hover:text-[#027cc2] transition-colors">
//             Book An Appointment
//           </h2>

//           <p className="text-[#777777] text-xs sm:text-sm mb-6 leading-relaxed">
//             Cras pretium risus ac tempor ultrices. Phasellus pretium ex odio,
//             sit amet ultricies nulla accumsan quis. Morbi pharetra orci rutrum
//             ultrices tempor.
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             {/* Shipment Type with icon */}
//             <div className="relative group">
//               <select
//                 name="shipmentType"
//                 value={formData.shipmentType}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 p-3 pl-10 text-sm text-gray-600 focus:outline-none focus:border-[#027cc2] focus:ring-1 focus:ring-[#027cc2] transition-all duration-300 appearance-none bg-white"
//               >
//                 <option value="">Select Shipment Type</option>
//                 <option value="air">Air Freight Services</option>
//                 <option value="sea">The Shipping Route</option>
//                 <option value="rail">By Rail Transport</option>
//                 <option value="road">Road Transport</option>
//               </select>
//               <FaShip className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm group-focus-within:text-[#027cc2] transition-colors duration-300" />
//               <div className="absolute inset-0 border-2 border-[#027cc2] rounded opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
//             </div>

//             {/* Name Fields */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div className="relative group">
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   placeholder="First Name"
//                   className="w-full border border-gray-300 p-3 pl-10 text-sm focus:outline-none focus:border-[#027cc2] focus:ring-1 focus:ring-[#027cc2] transition-all duration-300"
//                 />
//                 <MdPerson className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm group-focus-within:text-[#027cc2] transition-colors duration-300" />
//               </div>

//               <div className="relative group">
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   placeholder="Last Name"
//                   className="w-full border border-gray-300 p-3 pl-10 text-sm focus:outline-none focus:border-[#027cc2] focus:ring-1 focus:ring-[#027cc2] transition-all duration-300"
//                 />
//                 <MdPerson className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm group-focus-within:text-[#027cc2] transition-colors duration-300" />
//               </div>
//             </div>

//             {/* Contact Fields */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div className="relative group">
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email Address"
//                   className="w-full border border-gray-300 p-3 pl-10 text-sm focus:outline-none focus:border-[#027cc2] focus:ring-1 focus:ring-[#027cc2] transition-all duration-300"
//                 />
//                 <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm group-focus-within:text-[#027cc2] transition-colors duration-300" />
//               </div>

//               <div className="relative group">
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Phone Number"
//                   className="w-full border border-gray-300 p-3 pl-10 text-sm focus:outline-none focus:border-[#027cc2] focus:ring-1 focus:ring-[#027cc2] transition-all duration-300"
//                 />
//                 <MdPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm group-focus-within:text-[#027cc2] transition-colors duration-300" />
//               </div>
//             </div>

//             {/* Date and Gender */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div className="relative group">
//                 <input
//                   type="date"
//                   name="date"
//                   value={formData.date}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 p-3 pl-10 text-sm text-gray-600 focus:outline-none focus:border-[#027cc2] focus:ring-1 focus:ring-[#027cc2] transition-all duration-300"
//                 />
//                 <MdCalendarToday className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm group-focus-within:text-[#027cc2] transition-colors duration-300" />
//               </div>

//               <div className="relative group">
//                 <select
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 p-3 pl-10 text-sm text-gray-600 focus:outline-none focus:border-[#027cc2] focus:ring-1 focus:ring-[#027cc2] transition-all duration-300 appearance-none bg-white"
//                 >
//                   <option value="">Select Gender</option>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   <option value="other">Other</option>
//                 </select>
//                 <MdPerson className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm group-focus-within:text-[#027cc2] transition-colors duration-300" />
//               </div>
//             </div>

//             {/* Message */}
//             <div className="relative group">
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Your Message"
//                 rows={5}
//                 className="w-full border border-gray-300 p-3 text-sm focus:outline-none focus:border-[#027cc2] focus:ring-1 focus:ring-[#027cc2] transition-all duration-300 resize-none"
//               ></textarea>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="group/btn relative overflow-hidden font-raleway bg-[#027cc2] text-white py-3 px-8 uppercase transition-all duration-300 hover:bg-[#0f5a9e] hover:shadow-lg hover:scale-105 transform flex items-center gap-2 cursor-pointer"
//             >
//               <span className="relative z-10">Book Now</span>
//               <BsFillSendFill className="relative z-10 text-sm transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />

//               {/* Button shine effect */}
//               <div className="absolute inset-0 bg-white/30 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;




"use client";
import React, { useState } from "react";
import axios from "axios";
import { MdPerson, MdEmail, MdPhone, MdCheckCircle } from "react-icons/md";
import { FaShip } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  const router=useRouter()
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error for this specific field when user interacts
    if (errors[name]) {
      setErrors((prev) => {
        const newErrs = { ...prev };
        delete newErrs[name];
        return newErrs;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.shipmentType) newErrors.shipmentType = "Please select a service type.";
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!emailRegex.test(formData.email)) newErrors.email = "Enter a valid email address.";
    if (!formData.phone.trim()) newErrors.phone = "Phone num is required.";
    if (!formData.date) newErrors.date = "Please pick a date.";
    if (!formData.gender) newErrors.gender = "Please select your gender.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        type: formData.shipmentType,
        gender: formData.gender,
        appointmentDate: formData.date,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      };

      const response = await axios.post(
        "https://cargocrm.aryuprojects.com/api/customers/create-message",
        payload
      );

      if (response.status === 200 || response.status === 201) {
        setShowPopup(true);
        setFormData({
          shipmentType: "", firstName: "", lastName: "",
          email: "", phone: "", date: "", gender: "", message: "",
        });
      }
    } catch (err: any) {
      alert(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  // Helper component to show errors below inputs
  const ErrorMsg = ({ name }: { name: string }) => (
    errors[name] ? <p className="text-red-500 text-[11px] mt-1 font-medium">{errors[name]}</p> : null
  );

  return (
    <div className="relative bg-cover bg-center min-h-screen flex items-center py-10" 
         style={{ backgroundImage: `url('/images/contac-form-bg-image.jpg')` }}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[3px]" />

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl animate-in zoom-in duration-300">
            <MdCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Confirmed!</h3>
            <p className="text-gray-600 mb-6 text-sm">Your booking request has been submitted. We'll be in touch shortly.</p>
            <button 
              onClick={() => router.push('/')}
              className="w-full bg-[#027cc2] text-white py-3 rounded-xl font-bold hover:bg-[#0f5a9e] transition-all"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto w-full px-4 flex justify-center md:justify-start">
        <div className="bg-white p-6 sm:p-10 shadow-2xl max-w-xl w-full rounded-2xl border border-gray-100">
          <div className="w-16 h-1.5 bg-[#027cc2] mb-6 rounded-full" />
          <h2 className="text-3xl font-bold text-gray-800 mb-2 uppercase tracking-tight">Book Now</h2>
          <p className="text-gray-500 mb-8 text-sm">Complete all fields to schedule your appointment.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Shipment Type */}
            <div>
              <div className="relative">
                <select
                  name="shipmentType"
                  value={formData.shipmentType}
                  onChange={handleChange}
                  className={`w-full border ${errors.shipmentType ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} p-3.5 pl-10 rounded-lg text-sm bg-white focus:ring-2 focus:ring-[#027cc2] outline-none appearance-none`}
                >
                  <option value="">Select Shipment Type</option>
                  <option value="air">Air Freight</option>
                  <option value="sea">Ocean Freight</option>
                  <option value="road">Road Freight</option>
                </select>
                <FaShip className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
              <ErrorMsg name="shipmentType" />
            </div>

            {/* Names */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="relative">
                  <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange}
                    className={`w-full border ${errors.firstName ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} p-3.5 pl-10 rounded-lg text-sm focus:ring-2 focus:ring-[#027cc2] outline-none`} />
                  <MdPerson className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
                <ErrorMsg name="firstName" />
              </div>
              <div>
                <div className="relative">
                  <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange}
                    className={`w-full border ${errors.lastName ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} p-3.5 pl-10 rounded-lg text-sm focus:ring-2 focus:ring-[#027cc2] outline-none`} />
                  <MdPerson className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
                <ErrorMsg name="lastName" />
              </div>
            </div>

            {/* Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="relative">
                  <input name="email" placeholder="Email" value={formData.email} onChange={handleChange}
                    className={`w-full border ${errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} p-3.5 pl-10 rounded-lg text-sm focus:ring-2 focus:ring-[#027cc2] outline-none`} />
                  <MdEmail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
                <ErrorMsg name="email" />
              </div>
              <div>
                <div className="relative">
                  <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange}
                    className={`w-full border ${errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} p-3.5 pl-10 rounded-lg text-sm focus:ring-2 focus:ring-[#027cc2] outline-none`} />
                  <MdPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
                <ErrorMsg name="phone" />
              </div>
            </div>

            {/* Date & Gender */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input type="date" name="date" value={formData.date} onChange={handleChange}
                  className={`w-full border ${errors.date ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} p-3.5 rounded-lg text-sm focus:ring-2 focus:ring-[#027cc2] outline-none`} />
                <ErrorMsg name="date" />
              </div>
              <div>
                <select name="gender" value={formData.gender} onChange={handleChange}
                  className={`w-full border ${errors.gender ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} p-3.5 rounded-lg text-sm focus:ring-2 focus:ring-[#027cc2] outline-none bg-white`}>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <ErrorMsg name="gender" />
              </div>
            </div>

            {/* Message */}
            <div>
              <textarea name="message" placeholder="Message..." rows={3} value={formData.message} onChange={handleChange}
                className={`w-full border ${errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} p-3.5 rounded-lg text-sm focus:ring-2 focus:ring-[#027cc2] outline-none resize-none`} />
              <ErrorMsg name="message" />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center gap-3 bg-[#027cc2] text-white py-4 rounded-xl font-bold uppercase transition-all shadow-lg active:scale-95 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>Confirm Booking <BsFillSendFill /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
