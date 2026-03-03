// "use client";
// import React, { useState } from "react";
// import {
//   Search,
//   Package,
//   MapPin,
//   Truck,
//   Calendar,
//   Clock,
//   CheckCircle,
//   Circle,
//   Info,
//   AlertCircle,
//   ChevronRight,
//   Phone,
//   Mail,
//   Navigation,
//   Box,
//   Globe,
//   User,
// } from "lucide-react";
// import { MdFlight, MdDirectionsBoat, MdLocalShipping } from "react-icons/md";
// import { motion, AnimatePresence } from "framer-motion";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import axiosInstance from "../config/axiosInstances";
// import { formatDateTime } from "../utilis";

// const TrackingPage = () => {
//   const router = useRouter();
//   const [trackingId, setTrackingId] = useState("");
//   const [showResults, setShowResults] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [apiError, setApiError] = useState(false);

//   const [shipmentDetails, setShipmentDetails] = useState("");
//   const [trackingTimelineDetails, setTrackingTimelineDetails] = useState([]);
//   const [eventDetails, setEventDetails] = useState("");

//   const getCargoIcon = (mode: string) => {
//     switch (mode) {
//       case "Air Freight":
//         return <MdFlight className="text-[#027cc3] text-base sm:text-lg" />;
//       case "Sea Freight":
//         return (
//           <MdDirectionsBoat className="text-[#027cc3] text-base sm:text-lg" />
//         );
//       default:
//         return (
//           <MdLocalShipping className="text-[#027cc3] text-base sm:text-lg" />
//         );
//     }
//   };

//   const handleTrack = async () => {
//     if (!trackingId.trim()) return;

//     setIsLoading(true);

//     try {
//       const response = await axiosInstance.get(
//         `api/cargo-event/tracking-number-event`,
//         {
//           params: {
//             tracking_number: trackingId,
//           },
//         },
//       );
//       setShipmentDetails(response?.data?.beneficiary[0]);
//       setTrackingTimelineDetails(response?.data?.data);
//       setEventDetails(response?.data?.event[0]);
//       setShowResults(true);
//       setIsLoading(false);
//     } catch (err) {
//       console.log(err);
//       setIsLoading(false);
//       setApiError(true);
//     }
//   };

//   return (
//     <div className=" bg-linear-to-b from-gray-50 to-white px-4 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14">
//       {/* Header with Animation */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-5 sm:mb-6 md:mb-8 lg:mb-10"
//       >
       

//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-1 sm:mb-2 md:mb-3"
//         >
//           Track Your <span className="text-[#027cc3]">Parcel</span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           className="text-gray-500 text-xs sm:text-sm md:text-base max-w-2xl mx-auto "
//         >
//           Enter your tracking number below to get real-time updates on your
//           shipment
//         </motion.p>
//       </motion.div>

//       {/* Search Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.5 }}
//         className="max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12"
//       >
//         <div className="bg-white p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100">
//           <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
//             <div className="relative flex-grow">
//               <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
//               <input
//                 type="text"
//                 placeholder="Enter tracking number"
//                 className="w-full p-2.5 sm:p-3 md:p-4 pl-8 sm:pl-10 md:pl-12 border border-gray-200 bg-white focus:outline-none focus:border-[#027cc3] focus:ring-2 focus:ring-[#027cc3]/20 transition-all duration-300 rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base"
//                 value={trackingId}
//                 onChange={(e) => setTrackingId(e.target.value)}
//                 onKeyPress={(e) => e.key === "Enter" && handleTrack()}
//               />
//             </div>
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={handleTrack}
//               disabled={isLoading}
//               className="bg-[#027cc3] text-white px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl hover:bg-[#0269a8] transition-all duration-300 font-medium text-xs sm:text-sm md:text-base flex items-center justify-center gap-1 sm:gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
//             >
//               {isLoading ? (
//                 <>
//                   <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                   <span>Tracking...</span>
//                 </>
//               ) : (
//                 <>
//                   <Search className="w-3 h-3 sm:w-4 sm:h-4" />
//                   <span>Track</span>
//                 </>
//               )}
//             </motion.button>
//           </div>
//         </div>
//       </motion.div>

//       {/* Results Section */}
//    <AnimatePresence mode="wait">
//   {showResults && (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.5 }}
//       className="space-y-4 sm:space-y-5 md:space-y-6"
//     >
//       {/* Progress Bar with Status Badge */}
//       <motion.div
//         initial={{ scaleX: 0 }}
//         animate={{ scaleX: 1 }}
//         transition={{ duration: 1, delay: 0.2 }}
//         className="relative"
//       >
//         <div className="h-1 sm:h-1.5 bg-gradient-to-r from-[#027cc3] via-[#4a9fd8] to-[#fdc300] rounded-full" />
        
//       </motion.div>

//       {/* Enhanced Status Banner */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3 }}
//         className="bg-gradient-to-br from-white to-gray-50/80 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
//       >
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
//           <div className="flex items-center gap-3 sm:gap-4">
//             <div className="relative">
//               <div className="bg-green-100 p-2 sm:p-2.5 md:p-3 rounded-full">
//                 <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-green-600" />
//               </div>
//               <motion.div
//                 animate={{ scale: [1, 1.2, 1] }}
//                 transition={{ repeat: Infinity, duration: 2 }}
//                 className="absolute -inset-1 bg-green-400/20 rounded-full blur-sm"
//               />
//             </div>
//             <div>
//               <p className="text-xs sm:text-sm text-gray-500 mb-1 font-medium">
//                 Current Status
//               </p>
//               <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//                 {eventDetails?.event_name}
//               </h2>
             
//             </div>
//           </div>
//           <div className="bg-gradient-to-br from-gray-50 to-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-gray-200 shadow-sm w-full sm:w-auto">
//             <p className="text-[10px] sm:text-xs text-gray-500 font-medium">
//               Tracking Number
//             </p>
//             <p className="font-mono font-bold text-sm sm:text-base md:text-lg text-[#027cc3] tracking-wider">
//               {eventDetails?.trackingNumber || "N/A"}
//             </p>
//           </div>
//         </div>
//       </motion.div>

//       {/* Main Grid with improved cards */}
//       <div className="flex flex-wrap xl:flex-nowrap gap-4 sm:gap-5 md:gap-6">
//         {/* Shipment Details Card - Enhanced */}
//         <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 grow w-full xl:w-[70%]">
//           <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4 sm:mb-5 flex items-center gap-2">
//             <div className="p-1.5 bg-[#027cc3]/10 rounded-lg">
//               <Box className="w-4 h-4 sm:w-5 sm:h-5 text-[#027cc3]" />
//             </div>
//             Shipment Details
//           </h3>

//           <div className="space-y-4 sm:space-y-5">
//             {/* Customer & Beneficiary in Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
//               {/* Customer Information - Enhanced */}
//               <div className="bg-gradient-to-br from-gray-50 to-white p-4 sm:p-5 rounded-xl border border-gray-100 hover:border-[#027cc3]/20 transition-all group">
//                 <p className="text-xs sm:text-sm text-gray-500 mb-3 flex items-center gap-1.5 font-medium">
//                   <div className="p-1 bg-[#027cc3]/10 rounded-full">
//                     <User className="w-3 h-3 text-[#027cc3]" />
//                   </div>
//                   SHIPPER DETAILS
//                 </p>
//                 <div className="space-y-2.5">
//                   <p className="font-bold text-sm sm:text-base text-gray-900">
//                     {shipmentDetails?.customer_name}
//                   </p>
//                   <div className="space-y-2">
//                     <p className="text-xs sm:text-sm text-gray-600 flex items-center gap-2">
//                       <Mail className="w-3.5 h-3.5 text-[#027cc3] shrink-0" />
//                       <span className="truncate">{shipmentDetails?.customer_email}</span>
//                     </p>
//                     <p className="text-xs sm:text-sm text-gray-600 flex items-center gap-2">
//                       <Phone className="w-3.5 h-3.5 text-[#027cc3] shrink-0" />
//                       <span>{shipmentDetails?.customer_phone}</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Beneficiary Information - Enhanced */}
//               <div className="bg-gradient-to-br from-gray-50 to-white p-4 sm:p-5 rounded-xl border border-gray-100 hover:border-[#027cc3]/20 transition-all group">
//                 <p className="text-xs sm:text-sm text-gray-500 mb-3 flex items-center gap-1.5 font-medium">
//                   <div className="p-1 bg-[#027cc3]/10 rounded-full">
//                     <User className="w-3 h-3 text-[#027cc3]" />
//                   </div>
//                   CONSIGNEE DETAILS
//                 </p>
//                 <div className="space-y-2.5">
//                   <p className="font-bold text-sm sm:text-base text-gray-900">
//                     {shipmentDetails?.beneficiary_name}
//                   </p>
//                   <div className="space-y-2">
//                     <p className="text-xs sm:text-sm text-gray-600 flex items-center gap-2">
//                       <Mail className="w-3.5 h-3.5 text-[#027cc3] shrink-0" />
//                       <span className="truncate">{shipmentDetails?.beneficiary_email}</span>
//                     </p>
//                     <p className="text-xs sm:text-sm text-gray-600 flex items-center gap-2">
//                       <Phone className="w-3.5 h-3.5 text-[#027cc3] shrink-0" />
//                       <span>{shipmentDetails?.beneficiary_phone}</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Route Information - Enhanced with Map Style */}
//             <div className="bg-gradient-to-br from-[#027cc3]/5 to-transparent p-4 sm:p-5 rounded-xl border border-[#027cc3]/10">
//               <p className="text-xs sm:text-sm text-gray-500 mb-3 flex items-center gap-1.5 font-medium">
//                 <MapPin className="w-3.5 h-3.5 text-[#027cc3]" />
//                 ROUTE INFORMATION
//               </p>
//               <div className="flex flex-wrap items-center gap-3 sm:gap-4 justify-between">
//                 <div className="flex-1 bg-white/50 p-3 rounded-lg">
//                   <p className="text-[10px] sm:text-xs text-gray-500 mb-1">ORIGIN</p>
//                   <p className="font-semibold text-xs sm:text-sm">
//                     <span className="text-[#027cc3] font-bold">📍</span>{" "}
//                     {shipmentDetails?.customer_city}, {shipmentDetails?.customer_country}
//                   </p>
//                   <p className="text-[10px] sm:text-xs text-gray-500 mt-1 truncate">
//                     {shipmentDetails?.customer_address}
//                   </p>
//                 </div>
//                 <div className="flex-1 flex flex-col max-sm:hidden items-center">
//                   <div className="w-6 h-6 bg-[#027cc3] rounded-full flex items-center justify-center">
//                     <ChevronRight className="w-3 h-3 text-white" />
//                   </div>
//                 </div>
//                 <div className="flex-1 bg-white/50 p-3 rounded-lg">
//                   <p className="text-[10px] sm:text-xs text-gray-500 mb-1">DESTINATION</p>
//                   <p className="font-semibold text-xs sm:text-sm">
//                     <span className="text-[#fdc300] font-bold">📍</span>{" "}
//                     {shipmentDetails?.beneficiary_city}, {shipmentDetails?.beneficiary_country}
//                   </p>
//                   <p className="text-[10px] sm:text-xs text-gray-500 mt-1 truncate">
//                     {shipmentDetails?.beneficiary_address}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Stats Grid - Enhanced */}
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
//               <div className="bg-gradient-to-br from-gray-50 to-white p-3 sm:p-4 rounded-xl border border-gray-100 hover:border-[#027cc3]/20 transition-all group">
//                 <Package className="w-4 h-4 sm:w-5 sm:h-5 text-[#027cc3] mb-2 group-hover:scale-110 transition-transform" />
//                 <p className="text-[10px] sm:text-xs text-gray-500">Total Pieces</p>
//                 <p className="font-bold text-sm sm:text-base text-gray-900">
//                   {eventDetails?.quantity || "N/A"}
//                 </p>
//               </div>
//               <div className="bg-gradient-to-br from-gray-50 to-white p-3 sm:p-4 rounded-xl border border-gray-100 hover:border-[#027cc3]/20 transition-all group">
//                 <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#027cc3] mb-2 group-hover:scale-110 transition-transform" />
//                 <p className="text-[10px] sm:text-xs text-gray-500">Mode</p>
//                 <p className="font-bold text-sm sm:text-base text-gray-900">
//                   {eventDetails?.cargoMode || "N/A"}
//                 </p>
//               </div>
//               <div className="bg-gradient-to-br from-gray-50 to-white p-3 sm:p-4 rounded-xl border border-gray-100 hover:border-[#027cc3]/20 transition-all group">
//                 <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#027cc3] mb-2 group-hover:scale-110 transition-transform" />
//                 <p className="text-[10px] sm:text-xs text-gray-500">Dispatch</p>
//                 <p className="font-bold text-xs sm:text-sm text-gray-900">
//                   {formatDateTime(eventDetails?.event_date)}
//                 </p>
//               </div>
//               <div className="bg-gradient-to-br from-gray-50 to-white p-3 sm:p-4 rounded-xl border border-gray-100 hover:border-[#027cc3]/20 transition-all group">
//                 <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#027cc3] mb-2 group-hover:scale-110 transition-transform" />
//                 <p className="text-[10px] sm:text-xs text-gray-500">Est. Delivery</p>
//                 <p className="font-bold text-xs sm:text-sm text-gray-900">
//                   {eventDetails?.estimatedDelivery || "N/A"}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Event Timeline - Enhanced with better visibility */}
//         <motion.div
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.5 }}
//           className="bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 grow w-full xl:w-[30%] h-fit"
//         >
//           <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-5 sm:mb-6 flex items-center gap-2">
//             <div className="p-1.5 bg-[#027cc3]/10 rounded-lg">
//               <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#027cc3]" />
//             </div>
//             Tracking Timeline
//             <span className="ml-auto text-[10px] sm:text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
//               {trackingTimelineDetails?.length || 0} events
//             </span>
//           </h3>

//           {/* Timeline with better visual hierarchy */}
//           <div className="space-y-1">
//             {[...trackingTimelineDetails]
//               .reverse()
//               .map((event, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.5 + index * 0.1 }}
//                   className="relative pl-8 sm:pl-10 pb-4 last:pb-0"
//                 >
//                   {/* Timeline Line - Enhanced */}
//                   {index < trackingTimelineDetails.length - 1 && (
//                     <div className="absolute left-[15px] sm:left-[19px] top-6 bottom-0 w-0.5 bg-gradient-to-b from-[#027cc3] to-gray-200" />
//                   )}

//                   {/* Timeline Dot - Enhanced with pulse effect */}
//                   <div className="absolute left-3 top-2">
//                     {index === 0 ? (
//                       <div className="relative">
//                         <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-green-500 bg-green-100" />
//                         <motion.div
//                           animate={{ scale: [1, 1.5, 1] }}
//                           transition={{ repeat: Infinity, duration: 2 }}
//                           className="absolute -inset-1 bg-green-400/30 rounded-full"
//                         />
//                       </div>
//                     ) : (
//                       <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-[#027cc3] bg-blue-100" />
//                     )}
//                   </div>

//                   {/* Event Card - Enhanced */}
//                   <div
//                     className={`p-3 sm:p-4 rounded-xl transition-all hover:shadow-md ${
//                       index === 0
//                         ? "bg-gradient-to-r from-green-50 to-white border border-green-100"
//                         : "bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:border-[#027cc3]/20"
//                     }`}
//                   >
//                     <div className="flex items-start justify-between gap-2 mb-1.5">
//                       <div className="flex items-center gap-1.5 sm:gap-2">
//                         {index === 0 ? (
//                           <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600" />
//                         ) : (
//                           <div className="w-1.5 h-1.5 rounded-full bg-[#027cc3] mt-1.5" />
//                         )}
//                         <span
//                           className={`font-semibold text-xs sm:text-sm ${
//                             index === 0 ? "text-green-700" : "text-gray-800"
//                           }`}
//                         >
//                           {event.event_name}
//                         </span>
//                       </div>
//                     </div>
                    
//                     {/* Event Details */}
//                     <div className="ml-5 sm:ml-6 space-y-1">
//                       <p className="text-[10px] sm:text-xs text-gray-500 font-medium">
//                         {formatDateTime(event.createdAt)}
//                       </p>
                     
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//           </div>
//         </motion.div>
//       </div>

//       {/* Enhanced Support Banner */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.7 }}
//         className="relative overflow-hidden bg-gradient-to-r from-[#027cc3] via-[#1a8ad3] to-[#fdc300] rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 text-white group"
//       >
       
        
//         <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
//           <div className="flex items-center gap-4 sm:gap-5">
//             <div className="relative">
//               <div className="bg-white/20 p-2.5 sm:p-3 rounded-xl backdrop-blur-sm">
//                 <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
//               </div>
//               <motion.div
//                 animate={{ scale: [1, 1.2, 1] }}
//                 transition={{ repeat: Infinity, duration: 2 }}
//                 className="absolute -inset-1 bg-white/30 rounded-xl blur-md"
//               />
//             </div>
//             <div>
//               <h4 className="font-bold text-base sm:text-lg md:text-xl mb-1">
//                 Need Assistance With Your Shipment?
//               </h4>
//               <p className="text-white/80 text-xs sm:text-sm md:text-base">
//                 Our support team is available 24/7 to help you with any questions
//               </p>
//             </div>
//           </div>
//           <button
//             onClick={() => router.push("/contact")}
//             className="group relative bg-white text-[#027cc3] px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base hover:shadow-2xl transition-all cursor-pointer overflow-hidden"
//           >
//             <span className="relative z-10">Contact Support</span>
           
//           </button>
//         </div>
//       </motion.div>
//     </motion.div>
//   )}
// </AnimatePresence>
//       {/* No Results State */}
//       {apiError && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="text-center py-10 sm:py-12 md:py-16 bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 mx-2 sm:mx-0"
//         >
//           <AlertCircle className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-gray-300 mx-auto mb-3 sm:mb-4" />
//           <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
//             No Tracking Information Found
//           </h3>
//           <p className="text-gray-500 text-xs sm:text-sm max-w-md mx-auto mb-4 sm:mb-6 px-4">
//             We couldn't find any shipment matching the tracking number you
//             entered.
//           </p>
//           <button
//             onClick={() => setTrackingId("")}
//             className="text-[#027cc3] font-semibold text-xs sm:text-sm hover:underline"
//           >
//             Try Again
//           </button>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default TrackingPage;



"use client";
import React, { useState } from "react";
import {
  Search,
  Package,
  MapPin,
  Truck,
  Calendar,
  Clock,
  CheckCircle,
  Circle,
  Info,
  AlertCircle,
  ChevronRight,
  Phone,
  Mail,
  Navigation,
  Box,
  Globe,
  User,
} from "lucide-react";
import { MdFlight, MdDirectionsBoat, MdLocalShipping } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import axios from "axios";
import axiosInstance from "../config/axiosInstances";
import { formatDateTime } from "../utilis";

// Type Definitions
interface ShipmentDetails {
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  customer_city: string;
  customer_country: string;
  customer_address: string;
  beneficiary_name: string;
  beneficiary_email: string;
  beneficiary_phone: string;
  beneficiary_city: string;
  beneficiary_country: string;
  beneficiary_address: string;
}

interface TimelineEvent {
  event_name: string;
  createdAt: string;
  event_date?: string;
  location?: string;
  [key: string]: any; // For any additional fields
}

interface EventDetails {
  event_name: string;
  trackingNumber: string;
  quantity: string | number;
  cargoMode: string;
  event_date: string;
  estimatedDelivery?: string;
  [key: string]: any;
}

interface ApiResponse {
  beneficiary: ShipmentDetails[];
  data: TimelineEvent[];
  event: EventDetails[];
}

const TrackingPage = () => {
  const router = useRouter();
  const [trackingId, setTrackingId] = useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<boolean>(false);

  const [shipmentDetails, setShipmentDetails] = useState<ShipmentDetails | null>(null);
  const [trackingTimelineDetails, setTrackingTimelineDetails] = useState<TimelineEvent[]>([]);
  const [eventDetails, setEventDetails] = useState<EventDetails | null>(null);

  type CargoMode = "Air Freight" | "Sea Freight" | string;

  const getCargoIcon = (mode: CargoMode) => {
    switch (mode) {
      case "Air Freight":
        return <MdFlight className="text-[#027cc3] text-base sm:text-lg" />;
      case "Sea Freight":
        return (
          <MdDirectionsBoat className="text-[#027cc3] text-base sm:text-lg" />
        );
      default:
        return (
          <MdLocalShipping className="text-[#027cc3] text-base sm:text-lg" />
        );
    }
  };

  const handleTrack = async (): Promise<void> => {
    if (!trackingId.trim()) return;

    setIsLoading(true);
    setApiError(false);

    try {
      const response = await axiosInstance.get<ApiResponse>(
        `api/cargo-event/tracking-number-event`,
        {
          params: {
            tracking_number: trackingId,
          },
        },
      );
      
      if (response?.data?.beneficiary?.[0]) {
        setShipmentDetails(response.data.beneficiary[0]);
      }
      
      if (response?.data?.data) {
        setTrackingTimelineDetails(response.data.data);
      }
      
      if (response?.data?.event?.[0]) {
        setEventDetails(response.data.event[0]);
      }
      
      setShowResults(true);
    } catch (err) {
      console.log(err);
      setApiError(true);
      setShowResults(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleTrack();
    }
  };

  const handleTryAgain = (): void => {
    setTrackingId("");
    setApiError(false);
  };

  return (
    <div className="bg-linear-to-b from-gray-50 to-white px-4 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14">
      {/* Header with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-5 sm:mb-6 md:mb-8 lg:mb-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-1 sm:mb-2 md:mb-3"
        >
          Track Your <span className="text-[#027cc3]">Parcel</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-500 text-xs sm:text-sm md:text-base max-w-2xl mx-auto"
        >
          Enter your tracking number below to get real-time updates on your
          shipment
        </motion.p>
      </motion.div>

      {/* Search Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12"
      >
        <div className="bg-white p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <div className="relative flex-grow">
              <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              <input
                type="text"
                placeholder="Enter tracking number"
                className="w-full p-2.5 sm:p-3 md:p-4 pl-8 sm:pl-10 md:pl-12 border border-gray-200 bg-white focus:outline-none focus:border-[#027cc3] focus:ring-2 focus:ring-[#027cc3]/20 transition-all duration-300 rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base"
                value={trackingId}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTrackingId(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleTrack}
              disabled={isLoading}
              className="bg-[#027cc3] text-white px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl hover:bg-[#0269a8] transition-all duration-300 font-medium text-xs sm:text-sm md:text-base flex items-center justify-center gap-1 sm:gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? (
                <>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Tracking...</span>
                </>
              ) : (
                <>
                  <Search className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Track</span>
                </>
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Results Section */}
      <AnimatePresence mode="wait">
        {showResults && shipmentDetails && eventDetails && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 sm:space-y-5 md:space-y-6"
          >
            {/* Progress Bar with Status Badge */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="h-1 sm:h-1.5 bg-gradient-to-r from-[#027cc3] via-[#4a9fd8] to-[#fdc300] rounded-full" />
            </motion.div>

            {/* Enhanced Status Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-white to-gray-50/80 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="relative">
                    <div className="bg-green-100 p-2 sm:p-2.5 md:p-3 rounded-full">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-green-600" />
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute -inset-1 bg-green-400/20 rounded-full blur-sm"
                    />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 mb-1 font-medium">
                      Current Status
                    </p>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      {eventDetails.event_name}
                    </h2>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-gray-200 shadow-sm w-full sm:w-auto">
                  <p className="text-[10px] sm:text-xs text-gray-500 font-medium">
                    Tracking Number
                  </p>
                  <p className="font-mono font-bold text-sm sm:text-base md:text-lg text-[#027cc3] tracking-wider">
                    {eventDetails.trackingNumber || "N/A"}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Main Grid with improved cards */}
            <div className="flex flex-wrap xl:flex-nowrap gap-4 sm:gap-5 md:gap-6">
              {/* Shipment Details Card - Enhanced */}
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 grow w-full xl:w-[70%]">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4 sm:mb-5 flex items-center gap-2">
                  <div className="p-1.5 bg-[#027cc3]/10 rounded-lg">
                    <Box className="w-4 h-4 sm:w-5 sm:h-5 text-[#027cc3]" />
                  </div>
                  Shipment Details
                </h3>

                <div className="space-y-4 sm:space-y-5">
                  {/* Customer & Beneficiary in Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {/* Customer Information - Enhanced */}
                    <div className="bg-gradient-to-br from-gray-50 to-white p-4 sm:p-5 rounded-xl border border-gray-100 hover:border-[#027cc3]/20 transition-all group">
                      <p className="text-xs sm:text-sm text-gray-500 mb-3 flex items-center gap-1.5 font-medium">
                        <div className="p-1 bg-[#027cc3]/10 rounded-full">
                          <User className="w-3 h-3 text-[#027cc3]" />
                        </div>
                        SHIPPER DETAILS
                      </p>
                      <div className="space-y-2.5">
                        <p className="font-bold text-sm sm:text-base text-gray-900">
                          {shipmentDetails.customer_name}
                        </p>
                        <div className="space-y-2">
                          <p className="text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                            <Mail className="w-3.5 h-3.5 text-[#027cc3] shrink-0" />
                            <span className="truncate">{shipmentDetails.customer_email}</span>
                          </p>
                          <p className="text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                            <Phone className="w-3.5 h-3.5 text-[#027cc3] shrink-0" />
                            <span>{shipmentDetails.customer_phone}</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Beneficiary Information - Enhanced */}
                    <div className="bg-gradient-to-br from-gray-50 to-white p-4 sm:p-5 rounded-xl border border-gray-100 hover:border-[#027cc3]/20 transition-all group">
                      <p className="text-xs sm:text-sm text-gray-500 mb-3 flex items-center gap-1.5 font-medium">
                        <div className="p-1 bg-[#027cc3]/10 rounded-full">
                          <User className="w-3 h-3 text-[#027cc3]" />
                        </div>
                        CONSIGNEE DETAILS
                      </p>
                      <div className="space-y-2.5">
                        <p className="font-bold text-sm sm:text-base text-gray-900">
                          {shipmentDetails.beneficiary_name}
                        </p>
                        <div className="space-y-2">
                          <p className="text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                            <Mail className="w-3.5 h-3.5 text-[#027cc3] shrink-0" />
                            <span className="truncate">{shipmentDetails.beneficiary_email}</span>
                          </p>
                          <p className="text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                            <Phone className="w-3.5 h-3.5 text-[#027cc3] shrink-0" />
                            <span>{shipmentDetails.beneficiary_phone}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Route Information - Enhanced with Map Style */}
                  <div className="bg-gradient-to-br from-[#027cc3]/5 to-transparent p-4 sm:p-5 rounded-xl border border-[#027cc3]/10">
                    <p className="text-xs sm:text-sm text-gray-500 mb-3 flex items-center gap-1.5 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#027cc3]" />
                      ROUTE INFORMATION
                    </p>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 justify-between">
                      <div className="flex-1 bg-white/50 p-3 rounded-lg">
                        <p className="text-[10px] sm:text-xs text-gray-500 mb-1">ORIGIN</p>
                        <p className="font-semibold text-xs sm:text-sm">
                          <span className="text-[#027cc3] font-bold">📍</span>{" "}
                          {shipmentDetails.customer_city}, {shipmentDetails.customer_country}
                        </p>
                        <p className="text-[10px] sm:text-xs text-gray-500 mt-1 truncate">
                          {shipmentDetails.customer_address}
                        </p>
                      </div>
                      <div className="flex-1 flex flex-col max-sm:hidden items-center">
                        <div className="w-6 h-6 bg-[#027cc3] rounded-full flex items-center justify-center">
                          <ChevronRight className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 bg-white/50 p-3 rounded-lg">
                        <p className="text-[10px] sm:text-xs text-gray-500 mb-1">DESTINATION</p>
                        <p className="font-semibold text-xs sm:text-sm">
                          <span className="text-[#fdc300] font-bold">📍</span>{" "}
                          {shipmentDetails.beneficiary_city}, {shipmentDetails.beneficiary_country}
                        </p>
                        <p className="text-[10px] sm:text-xs text-gray-500 mt-1 truncate">
                          {shipmentDetails.beneficiary_address}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Stats Grid - Enhanced */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                    <div className="bg-gradient-to-br from-gray-50 to-white p-3 sm:p-4 rounded-xl border border-gray-100 hover:border-[#027cc3]/20 transition-all group">
                      <Package className="w-4 h-4 sm:w-5 sm:h-5 text-[#027cc3] mb-2 group-hover:scale-110 transition-transform" />
                      <p className="text-[10px] sm:text-xs text-gray-500">Total Pieces</p>
                      <p className="font-bold text-sm sm:text-base text-gray-900">
                        {eventDetails.quantity || "N/A"}
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-gray-50 to-white p-3 sm:p-4 rounded-xl border border-gray-100 hover:border-[#027cc3]/20 transition-all group">
                      <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#027cc3] mb-2 group-hover:scale-110 transition-transform" />
                      <p className="text-[10px] sm:text-xs text-gray-500">Mode</p>
                      <p className="font-bold text-sm sm:text-base text-gray-900">
                        {eventDetails.cargoMode || "N/A"}
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-gray-50 to-white p-3 sm:p-4 rounded-xl border border-gray-100 hover:border-[#027cc3]/20 transition-all group">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#027cc3] mb-2 group-hover:scale-110 transition-transform" />
                      <p className="text-[10px] sm:text-xs text-gray-500">Dispatch</p>
                      <p className="font-bold text-xs sm:text-sm text-gray-900">
                        {formatDateTime(eventDetails.event_date)}
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-gray-50 to-white p-3 sm:p-4 rounded-xl border border-gray-100 hover:border-[#027cc3]/20 transition-all group">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#027cc3] mb-2 group-hover:scale-110 transition-transform" />
                      <p className="text-[10px] sm:text-xs text-gray-500">Est. Delivery</p>
                      <p className="font-bold text-xs sm:text-sm text-gray-900">
                        {eventDetails.estimatedDelivery || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Timeline - Enhanced with better visibility */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 grow w-full xl:w-[30%] h-fit"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-5 sm:mb-6 flex items-center gap-2">
                  <div className="p-1.5 bg-[#027cc3]/10 rounded-lg">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#027cc3]" />
                  </div>
                  Tracking Timeline
                  <span className="ml-auto text-[10px] sm:text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {trackingTimelineDetails.length || 0} events
                  </span>
                </h3>

                {/* Timeline with better visual hierarchy */}
                <div className="space-y-1">
                  {[...trackingTimelineDetails]
                    .reverse()
                    .map((event: TimelineEvent, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="relative pl-8 sm:pl-10 pb-4 last:pb-0"
                      >
                        {/* Timeline Line - Enhanced */}
                        {index < trackingTimelineDetails.length - 1 && (
                          <div className="absolute left-[15px] sm:left-[19px] top-6 bottom-0 w-0.5 bg-gradient-to-b from-[#027cc3] to-gray-200" />
                        )}

                        {/* Timeline Dot - Enhanced with pulse effect */}
                        <div className="absolute left-3 top-2">
                          {index === 0 ? (
                            <div className="relative">
                              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-green-500 bg-green-100" />
                              <motion.div
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="absolute -inset-1 bg-green-400/30 rounded-full"
                              />
                            </div>
                          ) : (
                            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-[#027cc3] bg-blue-100" />
                          )}
                        </div>

                        {/* Event Card - Enhanced */}
                        <div
                          className={`p-3 sm:p-4 rounded-xl transition-all hover:shadow-md ${
                            index === 0
                              ? "bg-gradient-to-r from-green-50 to-white border border-green-100"
                              : "bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:border-[#027cc3]/20"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2 mb-1.5">
                            <div className="flex items-center gap-1.5 sm:gap-2">
                              {index === 0 ? (
                                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600" />
                              ) : (
                                <div className="w-1.5 h-1.5 rounded-full bg-[#027cc3] mt-1.5" />
                              )}
                              <span
                                className={`font-semibold text-xs sm:text-sm ${
                                  index === 0 ? "text-green-700" : "text-gray-800"
                                }`}
                              >
                                {event.event_name}
                              </span>
                            </div>
                          </div>
                          
                          {/* Event Details */}
                          <div className="ml-5 sm:ml-6 space-y-1">
                            <p className="text-[10px] sm:text-xs text-gray-500 font-medium">
                              {formatDateTime(event.createdAt)}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            </div>

            {/* Enhanced Support Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="relative overflow-hidden bg-gradient-to-r from-[#027cc3] via-[#1a8ad3] to-[#fdc300] rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 text-white group"
            >
              <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="relative">
                    <div className="bg-white/20 p-2.5 sm:p-3 rounded-xl backdrop-blur-sm">
                      <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute -inset-1 bg-white/30 rounded-xl blur-md"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg md:text-xl mb-1">
                      Need Assistance With Your Shipment?
                    </h4>
                    <p className="text-white/80 text-xs sm:text-sm md:text-base">
                      Our support team is available 24/7 to help you with any questions
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => router.push("/contact")}
                  className="group relative bg-white text-[#027cc3] px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base hover:shadow-2xl transition-all cursor-pointer overflow-hidden"
                >
                  <span className="relative z-10">Contact Support</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* No Results State */}
      {apiError && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-10 sm:py-12 md:py-16 bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 mx-2 sm:mx-0"
        >
          <AlertCircle className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-gray-300 mx-auto mb-3 sm:mb-4" />
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
            No Tracking Information Found
          </h3>
          <p className="text-gray-500 text-xs sm:text-sm max-w-md mx-auto mb-4 sm:mb-6 px-4">
            We couldn't find any shipment matching the tracking number you
            entered.
          </p>
          <button
            onClick={handleTryAgain}
            className="text-[#027cc3] font-semibold text-xs sm:text-sm hover:underline"
          >
            Try Again
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default TrackingPage;