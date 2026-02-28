// "use client";
// import React, { useState } from "react";
// import axios from "axios";
// import { MdPerson, MdEmail, MdPhone, MdCheckCircle } from "react-icons/md";
// import { FaShip } from "react-icons/fa";
// import { BsFillSendFill } from "react-icons/bs";
// import { useRouter } from "next/navigation";

// const ContactForm = () => {
//   const router=useRouter()
//   const [loading, setLoading] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [errors, setErrors] = useState<Record<string, string>>({});

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

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     // Clear error for this specific field when user interacts
//     if (errors[name]) {
//       setErrors((prev) => {
//         const newErrs = { ...prev };
//         delete newErrs[name];
//         return newErrs;
//       });
//     }
//   };

//   const validate = () => {
//     const newErrors: Record<string, string> = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!formData.shipmentType) newErrors.shipmentType = "Please select a service type.";
//     if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
//     if (!emailRegex.test(formData.email)) newErrors.email = "Enter a valid email address.";
//     if (!formData.phone.trim()) newErrors.phone = "Phone num is required.";
//     if (!formData.date) newErrors.date = "Please pick a date.";
//     if (!formData.gender) newErrors.gender = "Please select your gender.";
//     if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validate()) return;

//     setLoading(true);
//     try {
//       const payload = {
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         type: formData.shipmentType,
//         gender: formData.gender,
//         appointmentDate: formData.date,
//         email: formData.email,
//         phone: formData.phone,
//         message: formData.message,
//       };

//       const response = await axios.post(
//         "https://cargocrm.aryuprojects.com/api/contacts/create-message",
//         payload
//       );

//       if (response.status === 200 || response.status === 201) {
//         setShowPopup(true);
//         setFormData({
//           shipmentType: "", firstName: "", lastName: "",
//           email: "", phone: "", date: "", gender: "", message: "",
//         });
//       }
//     } catch (err: any) {
//       alert(err.response?.data?.message || "Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Helper component to show errors below inputs
//   const ErrorMsg = ({ name }: { name: string }) => (
//     errors[name] ? <p className="text-red-500 text-[11px] mt-1 font-medium">{errors[name]}</p> : null
//   );

//   return (
//     <div className="relative bg-cover bg-center min-h-screen flex items-center py-10"
//          style={{ backgroundImage: `url('/images/contac-form-bg-image.jpg')` }}>
//       <div className="absolute inset-0 bg-black/40 backdrop-blur-[3px]" />

//       {/* SUCCESS POPUP */}
//       {showPopup && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
//           <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl animate-in zoom-in duration-300">
//             <MdCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
//             <h3 className="text-2xl font-bold text-gray-800 mb-2">Confirmed!</h3>
//             <p className="text-gray-600 mb-6 text-sm">Your booking request has been submitted. We'll be in touch shortly.</p>
//             <button
//               onClick={() => router.push('/')}
//               className="w-full bg-[#027cc2] text-white py-3 rounded-xl font-bold hover:bg-[#0f5a9e] transition-all"
//             >
//               Back to Home
//             </button>
//           </div>
//         </div>
//       )}

//       <div className="relative max-w-7xl mx-auto w-full px-4 flex justify-center md:justify-start">
//         <div className="bg-white p-6 sm:p-10 shadow-2xl max-w-xl w-full rounded-2xl border border-gray-100">
//           <div className="w-16 h-1.5 bg-[#027cc2] mb-6 rounded-full" />
//           <h2 className="text-3xl font-bold text-gray-800 mb-2 uppercase tracking-tight">Book Now</h2>
//           <p className="text-gray-500 mb-8 text-sm">Complete all fields to schedule your appointment.</p>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             {/* Shipment Type */}
//             <div>
//               <div className="relative">
//                 <select
//                   name="shipmentType"
//                   value={formData.shipmentType}
//                   onChange={handleChange}
//                   className={`w-full border ${errors.shipmentType ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} p-3.5 pl-10 rounded-lg text-sm bg-white focus:ring-2 focus:ring-[#027cc2] outline-none appearance-none`}
//                 >
//                   <option value="">Select Shipment Type</option>
//                   <option value="air">Air Freight</option>
//                   <option value="sea">Ocean Freight</option>
//                   <option value="road">Road Freight</option>
//                 </select>
//                 <FaShip className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
//               </div>
//               <ErrorMsg name="shipmentType" />
//             </div>

//             {/* Names */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <div className="relative">
//                   <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange}
//                     className={`w-full border ${errors.firstName ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} p-3.5 pl-10 rounded-lg text-sm focus:ring-2 focus:ring-[#027cc2] outline-none`} />
//                   <MdPerson className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
//                 </div>
//                 <ErrorMsg name="firstName" />
//               </div>
//               <div>
//                 <div className="relative">
//                   <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange}
//                     className={`w-full border ${errors.lastName ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} p-3.5 pl-10 rounded-lg text-sm focus:ring-2 focus:ring-[#027cc2] outline-none`} />
//                   <MdPerson className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
//                 </div>
//                 <ErrorMsg name="lastName" />
//               </div>
//             </div>

//             {/* Contact */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <div className="relative">
//                   <input name="email" placeholder="Email" value={formData.email} onChange={handleChange}
//                     className={`w-full border ${errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} p-3.5 pl-10 rounded-lg text-sm focus:ring-2 focus:ring-[#027cc2] outline-none`} />
//                   <MdEmail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
//                 </div>
//                 <ErrorMsg name="email" />
//               </div>
//               <div>
//                 <div className="relative">
//                   <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange}
//                     className={`w-full border ${errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} p-3.5 pl-10 rounded-lg text-sm focus:ring-2 focus:ring-[#027cc2] outline-none`} />
//                   <MdPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
//                 </div>
//                 <ErrorMsg name="phone" />
//               </div>
//             </div>

//             {/* Date & Gender */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <input type="date" name="date" value={formData.date} onChange={handleChange}
//                   className={`w-full border ${errors.date ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} p-3.5 rounded-lg text-sm focus:ring-2 focus:ring-[#027cc2] outline-none`} />
//                 <ErrorMsg name="date" />
//               </div>
//               <div>
//                 <select name="gender" value={formData.gender} onChange={handleChange}
//                   className={`w-full border ${errors.gender ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} p-3.5 rounded-lg text-sm focus:ring-2 focus:ring-[#027cc2] outline-none bg-white`}>
//                   <option value="">Select Gender</option>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   <option value="other">Other</option>
//                 </select>
//                 <ErrorMsg name="gender" />
//               </div>
//             </div>

//             {/* Message */}
//             <div>
//               <textarea name="message" placeholder="Message..." rows={3} value={formData.message} onChange={handleChange}
//                 className={`w-full border ${errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} p-3.5 rounded-lg text-sm focus:ring-2 focus:ring-[#027cc2] outline-none resize-none`} />
//               <ErrorMsg name="message" />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full flex items-center justify-center gap-3 bg-[#027cc2] text-white py-4 rounded-xl font-bold uppercase transition-all shadow-lg active:scale-95 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
//             >
//               {loading ? (
//                 <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
//               ) : (
//                 <>Confirm Booking <BsFillSendFill /></>
//               )}
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
import { motion } from "framer-motion";
import {
  MdPerson,
  MdEmail,
  MdPhone,
  MdCheckCircle,
  MdError,
  MdCalendarToday,
  MdInfo,
  MdLocationOn,
  MdAccessTime,
  MdOutlineBusinessCenter,
  MdLanguage,
  MdArrowDropDown,
} from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

import {
  FaShip,
  FaPlane,
  FaTruck,
  FaTrain,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import {
  BsFillSendFill,
  BsBoxSeam,
  BsBuilding,
  BsTelephone,
} from "react-icons/bs";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);

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

    if (!formData.shipmentType)
      newErrors.shipmentType = "Please select a service type.";
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required.";
    if (!emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email address.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";

    if (!formData.date) newErrors.date = "Please pick a date.";
    if (!formData.gender) newErrors.gender = "Please select your gender.";
    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty.";

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
        "https://cargocrm.aryuprojects.com/api/contacts/create-message",
        payload,
      );

      if (response.status === 200 || response.status === 201) {
        setShowPopup(true);
        setFormData({
          shipmentType: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          date: "",
          gender: "",
          message: "",
        });
      }
    } catch (err: any) {
      alert(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const shipmentTypes = [
    { value: "air", label: "Air Freight", icon: FaPlane },
    { value: "sea", label: "Ocean Freight", icon: FaShip },
    { value: "road", label: "Road Freight", icon: FaTruck },
    { value: "rail", label: "Rail Freight", icon: FaTrain },
  ];

  const ErrorMsg = ({ name }: { name: string }) =>
    errors[name] && (
      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
        <MdError className="text-red-500 text-sm flex-shrink-0" />
        <span>{errors[name]}</span>
      </p>
    );

  return (
    <>
      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl relative"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <MdCheckCircle className="text-green-500 text-7xl mx-auto mb-4" />
            </motion.div>

            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Booking Confirmed!
            </h3>
            <p className="text-gray-600 mb-6 text-sm">
              Thank you for choosing our services. We've received your booking
              request.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="w-full bg-[#057dc3] text-white py-3 rounded-xl font-bold hover:bg-[#0469a5] transition-all cursor-pointer"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}

      {/* Main Contact Section */}
      <section className="w-full bg-gradient-to-b from-white to-gray-50 px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14">
        <div className=" mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#057dc3] font-bold text-xs sm:text-sm uppercase tracking-[0.3em]">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Contact <span className="text-[#057dc3]">Us</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-12 h-0.5 bg-gray-300"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-[#fdc300] to-[#057dc3] rounded-full"></div>
              <div className="w-12 h-0.5 bg-gray-300"></div>
            </div>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Map and Office Locations */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Map Container - Single Map Showing All Locations */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 h-[250px] md:h-[400px] lg:h-[450px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21708177.26635401!2d-25.873048418154543!3d49.519284297396906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited%20Kingdom!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">Follow us:</span>
                {[
                  {
                    icon: FaFacebookF,
                    href: "https://www.facebook.com/people/CARGO-LORD-LTD/100068334092103/#",
                  },
                  { icon: FaXTwitter, href: "https://x.com/cargolordltd" },
                  {
                    icon: FaLinkedinIn,
                    href: "https://www.linkedin.com/company/cargo-lord-ltd",
                  },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target='_blank'
                    whileHover={{ y: -3 }}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#057dc3] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300"
                  >
                    <item.icon className="text-sm" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Form (Same as before) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200"
            >
              {/* Form Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-[#057dc3] to-[#0469a5] rounded-xl flex items-center justify-center flex-shrink-0">
                  <BsBoxSeam className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Book an Appointment
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Fill in your details below
                  </p>
                </div>
              </div>

              <div className="w-20 h-1 bg-gradient-to-r from-[#fdc300] to-[#057dc3] rounded-full mb-8" />

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Service <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="shipmentType"
                      value={formData.shipmentType}
                      onChange={handleChange}
                      className={`w-full border ${errors.shipmentType ? "border-red-500" : "border-gray-200"} px-3 py-3 rounded-lg text-sm bg-white focus:ring-2 focus:ring-[#057dc3]/20 outline-none appearance-none`}
                    >
                      <option value="">Select a service</option>
                      {shipmentTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    <MdArrowDropDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                  </div>
                  <ErrorMsg name="shipmentType" />
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MdPerson className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full border ${errors.firstName ? "border-red-500" : "border-gray-200"} pl-10 pr-3 py-3 rounded-xl text-sm bg-white focus:ring-2 focus:ring-[#057dc3]/20 outline-none transition-all`}
                        placeholder="John"
                      />
                    </div>
                    <ErrorMsg name="firstName" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MdPerson className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full border ${errors.lastName ? "border-red-500" : "border-gray-200"} pl-10 pr-3 py-3 rounded-xl text-sm bg-white focus:ring-2 focus:ring-[#057dc3]/20 outline-none transition-all`}
                        placeholder="Doe"
                      />
                    </div>
                    <ErrorMsg name="lastName" />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full border ${errors.email ? "border-red-500" : "border-gray-200"} pl-10 pr-3 py-3 rounded-xl text-sm bg-white focus:ring-2 focus:ring-[#057dc3]/20 outline-none transition-all`}
                        placeholder="john@example.com"
                      />
                    </div>
                    <ErrorMsg name="email" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MdPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full border ${errors.phone ? "border-red-500" : "border-gray-200"} pl-10 pr-3 py-3 rounded-xl text-sm bg-white focus:ring-2 focus:ring-[#057dc3]/20 outline-none transition-all`}
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                    <ErrorMsg name="phone" />
                  </div>
                </div>

                {/* Date & Gender */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MdCalendarToday className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className={`w-full border ${errors.date ? "border-red-500" : "border-gray-200"} pl-10 pr-3 py-3 rounded-xl text-sm bg-white focus:ring-2 focus:ring-[#057dc3]/20 outline-none transition-all`}
                      />
                    </div>
                    <ErrorMsg name="date" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className={`w-full border ${errors.gender ? "border-red-500" : "border-gray-200"} px-3 py-3 rounded-xl text-sm bg-white focus:ring-2 focus:ring-[#057dc3]/20 outline-none transition-all appearance-none`}
                      >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                      <MdArrowDropDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                    </div>

                    <ErrorMsg name="gender" />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full border ${errors.message ? "border-red-500" : "border-gray-200"} px-3 py-3 rounded-xl text-sm bg-white focus:ring-2 focus:ring-[#057dc3]/20 outline-none transition-all resize-none`}
                    placeholder="Tell us about your requirements..."
                  />
                  <ErrorMsg name="message" />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-gradient-to-r from-[#057dc3] to-[#0469a5] text-white py-4 rounded-xl font-bold text-sm hover:shadow-xl transition-all flex items-center justify-center gap-3 disabled:opacity-70 relative overflow-hidden group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <BsFillSendFill className="text-sm group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
