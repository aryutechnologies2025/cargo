
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
        "https://cargocrm.aryuprojects.com/api/contacts/create-message",
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
