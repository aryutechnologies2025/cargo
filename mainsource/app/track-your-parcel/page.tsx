

// 'use client'
// import React, { useState } from 'react';
// import { Search, Package, MapPin, Truck, Calendar, Clock, CheckCircle, Circle, ChevronRight, Info } from 'lucide-react';
// import { MdFlight, MdDirectionsBoat, MdLocalShipping } from 'react-icons/md';

// const TrackingPage = () => {
//   const [trackingId, setTrackingId] = useState('');
//   const [showResults, setShowResults] = useState(true);

//   // Mock data based on your requirements
//   const mockData = {
//     trackingNumber: "TRK-987654321",
//     totalPieces: 4,
//     cargoMode: "Air Freight",
//     beneficiaryCity: "San Francisco, CA",
//     dispatchDate: "2024-05-15",
//     estimatedDelivery: "2024-05-20",
//     status: "Delivered",
//     events: [
//       { name: "Delivered", time: "2024-05-20 14:30", location: "San Francisco, CA", qty: 4, status: "completed" },
//       { name: "Out for Delivery", time: "2024-05-20 09:00", location: "San Francisco, CA", qty: 4, status: "completed" },
//       { name: "In Transit", time: "2024-05-18 11:20", location: "Chicago, IL", qty: 4, status: "completed" },
//       { name: "Picked Up", time: "2024-05-15 16:00", location: "New York, NY", qty: 4, status: "completed" },
//     ]
//   };

  

//   const getCargoIcon = (mode: string) => {
//     switch(mode) {
//       case 'Air Freight': return <MdFlight className="text-[#027cc2]" />;
//       case 'Sea Freight': return <MdDirectionsBoat className="text-[#027cc2]" />;
//       default: return <MdLocalShipping className="text-[#027cc2]" />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
       

//         {/* Header */}
//         <div className="text-center mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
//           <div className="flex items-center justify-center gap-2 mb-3">
//             <div className="w-8 h-0.5 bg-[#027cc2] rounded-full"></div>
//             <Package className="text-[#027cc2] w-4 h-4 sm:w-5 sm:h-5" />
//             <div className="w-8 h-0.5 bg-[#027cc2] rounded-full"></div>
//           </div>
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A2A2A] mb-2">
//             Track Your <span className="text-[#027cc2]">Parcel</span>
//           </h1>
//           <p className="text-[#777777] text-xs sm:text-sm max-w-xl mx-auto">
//             Enter your tracking number to get real-time updates on your shipment
//           </p>
//         </div>

//         {/* Search Section */}
//         <div className="p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 md:mb-10 flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
//           <div className="flex flex-col sm:flex-row w-full max-w-xl gap-3">
//             <div className="relative flex-grow group">
//               <input
//                 type="text"
//                 placeholder="Enter tracking code (e.g., TRK-987654321)"
//                 className="w-full p-3 sm:p-4 pl-10 sm:pl-12 border border-gray-300 bg-white focus:outline-none focus:border-[#027cc2] focus:ring-1 focus:ring-[#027cc2] transition-all duration-300 rounded-lg text-sm h-full"
//                 value={trackingId}
//                 onChange={(e) => setTrackingId(e.target.value)}
//               />
//               <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5 group-focus-within:text-[#027cc2] transition-colors duration-300" />
//             </div>
//             <button 
//               className="bg-[#027cc2] text-white px-6 sm:px-8 py-2.5 sm:py-4 hover:bg-[#0f5a9e] transition-all duration-300 font-medium rounded-lg flex items-center justify-center gap-2 group cursor-pointer"
//             >
//               <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
//               <span>Track</span>
//             </button>
//           </div>
//         </div>

//         {/* Results Section */}
//         {showResults && (
//           <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
//               {/* Cargo Details Card */}
//               <div className="md:col-span-1 bg-white p-4 sm:p-5 md:p-6 shadow-sm border border-gray-100 rounded-xl hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1">
//                 {/* Status Badge */}
//                 <div className="flex items-center justify-between mb-4">
//                   <h2 className="text-base sm:text-lg font-bold text-[#2A2A2A]">Shipment Details</h2>
//                   <span className="bg-green-100 text-green-700 text-[10px] sm:text-xs px-2 py-1 rounded-full font-medium animate-pulse">
//                     {mockData.status}
//                   </span>
//                 </div>

//                 <div className="space-y-4">
//                   {/* Tracking Number */}
//                   <div className="bg-gray-50 p-3 rounded-lg group hover:bg-[#027cc2]/5 transition-colors duration-300">
//                     <p className="text-xs text-gray-500 uppercase mb-1">Tracking Number</p>
//                     <p className="font-mono font-semibold text-sm sm:text-base flex items-center gap-2">
//                       <Package className="w-4 h-4 text-[#027cc2]" />
//                       {mockData.trackingNumber}
//                     </p>
//                   </div>

//                   {/* Stats Grid */}
//                   <div className="flex flex-wrap gap-3">
//                     <div className="bg-gray-50 p-3 grow rounded-lg group hover:bg-[#027cc2]/5 transition-colors duration-300">
//                       <p className="text-xs text-gray-500 uppercase mb-1">Total Pieces</p>
//                       <p className="font-semibold text-sm sm:text-base">{mockData.totalPieces}</p>
//                     </div>
//                     <div className="bg-gray-50 p-3 grow rounded-lg group hover:bg-[#027cc2]/5 transition-colors duration-300">
//                       <p className="text-xs text-gray-500 uppercase mb-1">Cargo Mode</p>
//                       <p className="font-semibold text-sm sm:text-base flex items-center gap-1">
//                         {getCargoIcon(mockData.cargoMode)}
//                         {mockData.cargoMode}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Location */}
//                   <div className="bg-gray-50 p-3 rounded-lg group hover:bg-[#027cc2]/5 transition-colors duration-300">
//                     <p className="text-xs text-gray-500 uppercase mb-1">Beneficiary City</p>
//                     <p className="font-semibold text-sm sm:text-base flex items-center gap-2">
//                       <MapPin className="w-4 h-4 text-[#027cc2]" />
//                       {mockData.beneficiaryCity}
//                     </p>
//                   </div>

//                   {/* Dates */}
//                   <div className="flex flex-wrap gap-3">
//                     <div className="bg-gray-50 p-3 grow rounded-lg group hover:bg-[#027cc2]/5 transition-colors duration-300">
//                       <p className="text-xs text-gray-500 uppercase mb-1">Dispatch Date</p>
//                       <p className="font-semibold text-sm sm:text-base flex items-center gap-2">
//                         <Calendar className="w-4 h-4 text-[#027cc2]" />
//                         {mockData.dispatchDate}
//                       </p>
//                     </div>
//                     <div className="bg-gray-50 p-3 grow rounded-lg group hover:bg-[#027cc2]/5 transition-colors duration-300">
//                       <p className="text-xs text-gray-500 uppercase mb-1">Est. Delivery</p>
//                       <p className="font-semibold text-sm sm:text-base flex items-center gap-2">
//                         <Clock className="w-4 h-4 text-[#027cc2]" />
//                         {mockData.estimatedDelivery}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Event Timeline */}
//               <div className="md:col-span-2 bg-white p-4 sm:p-5 md:p-6 shadow-sm border border-gray-100 rounded-xl hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1">
//                 <h2 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-[#2A2A2A]">Event Timeline</h2>
                
//                 {/* Desktop Timeline */}
//                 <div className="max-md:hidden md:block overflow-x-auto">
//                   <table className="w-full text-left">
//                     <thead>
//                       <tr className="border-b border-gray-200 text-gray-500 text-xs sm:text-sm">
//                         <th className="pb-3 font-medium">Event Name</th>
//                         <th className="pb-3 font-medium">Date & Time</th>
//                         <th className="pb-3 font-medium">Location</th>
//                         <th className="pb-3 font-medium text-right">Quantity</th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-100">
//                       {mockData.events.map((event, index) => (
//                         <tr 
//                           key={index} 
//                           className="hover:bg-gray-50 transition-all duration-300 group cursor-default"
//                           style={{ animationDelay: `${index * 100}ms` }}
//                         >
//                           <td className="py-3 sm:py-4">
//                             <div className="flex items-center">
//                               <div className={`relative mr-3`}>
//                                 {index === 0 ? (
//                                   <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 animate-pulse" />
//                                 ) : (
//                                   <Circle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
//                                 )}
//                               </div>
//                               <span className={`text-sm ${index === 0 ? 'font-bold text-green-700' : ''}`}>
//                                 {event.name}
//                               </span>
//                             </div>
//                           </td>
//                           <td className="py-3 sm:py-4 text-xs sm:text-sm text-gray-600">{event.time}</td>
//                           <td className="py-3 sm:py-4 text-xs sm:text-sm text-gray-600">{event.location}</td>
//                           <td className="py-3 sm:py-4 text-xs sm:text-sm text-right font-medium">{event.qty}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>

//                 {/* Mobile Timeline Cards */}
//                 <div className="md:hidden space-y-3">
//                   {mockData.events.map((event, index) => (
//                     <div 
//                       key={index}
//                       className="bg-gray-50 p-3 rounded-lg border-l-4 border-[#027cc2] "
//                     >
//                       <div className="flex items-center gap-2 mb-2">
//                         {index === 0 ? (
//                           <CheckCircle className="w-4 h-4 text-green-500" />
//                         ) : (
//                           <Circle className="w-4 h-4 text-blue-400" />
//                         )}
//                         <span className={`text-sm font-medium ${index === 0 ? 'text-green-700' : ''}`}>
//                           {event.name}
//                         </span>
//                       </div>
//                       <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
//                         <div>
//                           <p className="text-gray-400">Date & Time</p>
//                           <p>{event.time}</p>
//                         </div>
//                         <div>
//                           <p className="text-gray-400">Location</p>
//                           <p>{event.location}</p>
//                         </div>
//                         <div>
//                           <p className="text-gray-400">Quantity</p>
//                           <p>{event.qty}</p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

               
//               </div>
//             </div>

//             {/* Additional Info Card */}
//             <div className="mt-4 sm:mt-6 bg-blue-50 border border-blue-100 rounded-xl p-3 sm:p-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
//               <div className="flex items-start gap-3">
//                 <Info className="w-4 h-4 sm:w-5 sm:h-5 text-[#027cc2] flex-shrink-0 mt-0.5" />
//                 <p className="text-xs sm:text-sm text-[#2A2A2A]">
//                   Need help with your shipment? Contact our support team at <span className="text-[#027cc2] font-semibold hover:underline cursor-pointer">support@cargolord.com</span> or call <span className="text-[#027cc2] font-semibold">(01) 300 330 755</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* No Results State */}
//         {!showResults && trackingId && (
//           <div className="text-center py-8 sm:py-10 animate-in fade-in duration-500">
//             <Package className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-3" />
//             <p className="text-[#777777] text-sm">No tracking information found. Please check your tracking number.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TrackingPage;


'use client'
import React, { useState } from 'react';
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
  Globe
} from 'lucide-react';
import { MdFlight, MdDirectionsBoat, MdLocalShipping } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

const TrackingPage = () => {
  const router=useRouter()
  const [trackingId, setTrackingId] = useState('');
  const [showResults, setShowResults] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Mock data based on your requirements
  const mockData = {
    trackingNumber: "TRK-987654321",
    totalPieces: 4,
    cargoMode: "Air Freight",
    beneficiaryCity: "San Francisco, CA",
    dispatchDate: "2024-05-15",
    estimatedDelivery: "2024-05-20",
    status: "Delivered",
    origin: "New York, NY",
    destination: "San Francisco, CA",
    weight: "12.5 kg",
    events: [
      { name: "Delivered", time: "2024-05-20 14:30", location: "San Francisco, CA", qty: 4, status: "completed" },
      { name: "Out for Delivery", time: "2024-05-20 09:00", location: "San Francisco, CA", qty: 4, status: "completed" },
      { name: "In Transit", time: "2024-05-18 11:20", location: "Chicago, IL", qty: 4, status: "completed" },
      { name: "Picked Up", time: "2024-05-15 16:00", location: "New York, NY", qty: 4, status: "completed" },
    ]
  };

  const getCargoIcon = (mode: string) => {
    switch(mode) {
      case 'Air Freight': return <MdFlight className="text-[#027cc3] text-base sm:text-lg" />;
      case 'Sea Freight': return <MdDirectionsBoat className="text-[#027cc3] text-base sm:text-lg" />;
      default: return <MdLocalShipping className="text-[#027cc3] text-base sm:text-lg" />;
    }
  };

 

  const handleTrack = () => {
    if (!trackingId.trim()) return;
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14">
        {/* Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5 sm:mb-6 md:mb-8 lg:mb-10"
        >
          <div className="flex items-center justify-center gap-1 sm:gap-2 mb-2 sm:mb-3 md:mb-4">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="bg-[#027cc3]/10 p-1.5 sm:p-2 rounded-full"
            >
              <Package className="text-[#027cc3] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </motion.div>
          </div>
          
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
            className="text-gray-500 text-xs sm:text-sm md:text-base max-w-2xl mx-auto "
          >
            Enter your tracking number below to get real-time updates on your shipment
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
                  onChange={(e) => setTrackingId(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleTrack()}
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
          {showResults && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 sm:space-y-5 md:space-y-6 "
            >
              {/* Progress Bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-0.5 sm:h-1 bg-gradient-to-r from-[#027cc3] to-[#fdc300] rounded-full"
              />

              {/* Status Banner */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="bg-green-100 p-1.5 sm:p-2 md:p-3 rounded-full">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs text-gray-500 mb-0.5 sm:mb-1">Current Status</p>
                      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900">{mockData.status}</h2>
                      <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1">
                        Your package has been delivered
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg w-full sm:w-auto">
                    <p className="text-[8px] sm:text-[10px] text-gray-400">Tracking #</p>
                    <p className="font-mono font-semibold text-xs sm:text-sm md:text-base">{mockData.trackingNumber}</p>
                  </div>
                </div>
              </motion.div>

              {/* Main Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                {/* Shipment Details Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="lg:col-span-1 space-y-4"
                >
                  <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-1 sm:gap-2">
                      <Box className="w-4 h-4 sm:w-5 sm:h-5 text-[#027cc3]" />
                      Shipment Details
                    </h3>

                    <div className="space-y-3 sm:space-y-4">
                      <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl">
                        <p className="text-[10px] sm:text-xs text-gray-400 uppercase mb-1 sm:mb-2">Route Information</p>
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="flex-1">
                            <p className="text-[10px] sm:text-xs text-gray-500">Origin</p>
                            <p className="font-semibold text-xs sm:text-sm">{mockData.origin}</p>
                          </div>
                          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#027cc3]" />
                          <div className="flex-1">
                            <p className="text-[10px] sm:text-xs text-gray-500">Destination</p>
                            <p className="font-semibold text-xs sm:text-sm">{mockData.destination}</p>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        <div className="bg-gray-50 p-2 sm:p-3 rounded-lg sm:rounded-xl">
                          <Package className="w-3 h-3 sm:w-4 sm:h-4 text-[#027cc3] mb-1 sm:mb-2" />
                          <p className="text-[10px] sm:text-xs text-gray-400">Pieces</p>
                          <p className="font-semibold text-xs sm:text-sm">{mockData.totalPieces}</p>
                        </div>
                        <div className="bg-gray-50 p-2 sm:p-3 rounded-lg sm:rounded-xl">
                          <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-[#027cc3] mb-1 sm:mb-2" />
                          <p className="text-[10px] sm:text-xs text-gray-400">Mode</p>
                          <p className="font-semibold text-xs sm:text-sm flex items-center gap-1">
                            {getCargoIcon(mockData.cargoMode)}
                            <span className="text-[10px] sm:text-xs">{mockData.cargoMode}</span>
                          </p>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-2 sm:p-3 rounded-lg sm:rounded-xl">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-[#027cc3] mb-1 sm:mb-2" />
                        <p className="text-[10px] sm:text-xs text-gray-400">Beneficiary City</p>
                        <p className="font-semibold text-xs sm:text-sm">{mockData.beneficiaryCity}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        <div className="bg-gray-50 p-2 sm:p-3 rounded-lg sm:rounded-xl">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-[#027cc3] mb-1 sm:mb-2" />
                          <p className="text-[10px] sm:text-xs text-gray-400">Dispatch</p>
                          <p className="font-semibold text-[10px] sm:text-xs">{mockData.dispatchDate}</p>
                        </div>
                        <div className="bg-gray-50 p-2 sm:p-3 rounded-lg sm:rounded-xl">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-[#027cc3] mb-1 sm:mb-2" />
                          <p className="text-[10px] sm:text-xs text-gray-400">Est. Delivery</p>
                          <p className="font-semibold text-[10px] sm:text-xs">{mockData.estimatedDelivery}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                 
                </motion.div>

                {/* Event Timeline */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="lg:col-span-2 bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100"
                >
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 flex items-center gap-1 sm:gap-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#027cc3]" />
                    Tracking Timeline
                  </h3>

                  {/* Timeline */}
                  <div className="">
                    {mockData.events.map((event, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + (index * 0.1) }}
                        className="relative pl-6 sm:pl-8 pb-3 sm:pb-4 last:pb-0"
                      >
                        {/* Timeline Line */}
                        {index < mockData.events.length - 1 && (
                          <div className="absolute left-[11px] sm:left-[15px] top-4 sm:top-5 bottom-0 w-0.5 bg-gray-200" />
                        )}
                        
                        {/* Timeline Dot */}
                        <div className="absolute left-2 top-1">
                          <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full border-2 ${
                            index === 0 
                              ? 'border-green-500 bg-green-100' 
                              : 'border-[#027cc3] bg-blue-100'
                          }`} />
                        </div>

                        {/* Event Card */}
                        <div className={`p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl transition-all hover:shadow-md ${
                          index === 0 
                            ? 'bg-green-50 border border-green-100' 
                            : 'bg-gray-50 hover:bg-white'
                        }`}>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mb-1 sm:mb-2">
                            <div className="flex items-center gap-1 sm:gap-2">
                              {index === 0 ? (
                                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                              ) : (
                                <Circle className="w-3 h-3 sm:w-4 sm:h-4 text-[#027cc3]" />
                              )}
                              <span className={`font-semibold text-xs sm:text-sm ${
                                index === 0 ? 'text-green-700' : 'text-gray-900'
                              }`}>
                                {event.name}
                              </span>
                            </div>
                            <span className="text-[10px] sm:text-xs text-gray-500 font-mono">
                              {event.time}
                            </span>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 sm:gap-3 mt-1 sm:mt-2">
                            <div className="flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs text-gray-600">
                              <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#027cc3]" />
                              {event.location}
                            </div>
                            <div className="flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs text-gray-600">
                              <Package className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#027cc3]" />
                              Qty: {event.qty}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Support Banner */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-gradient-to-r from-[#027cc3] to-[#0269a8] rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-white"
              >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="bg-white/20 p-2 sm:p-3 rounded-full">
                      <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base md:text-lg">Need Assistance?</h4>
                      <p className="text-white/80 text-[10px] sm:text-xs md:text-sm">
                        24/7 support available
                      </p>
                    </div>
                  </div>
                  <button onClick={()=>router.push('/contact')} className="bg-white text-[#027cc3] px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm hover:shadow-xl transition-all whitespace-nowrap cursor-pointer">
                    Contact Support
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* No Results State */}
        {!showResults && trackingId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-10 sm:py-12 md:py-16 bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 mx-2 sm:mx-0"
          >
            <AlertCircle className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-gray-300 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2">No Tracking Information Found</h3>
            <p className="text-gray-500 text-xs sm:text-sm max-w-md mx-auto mb-4 sm:mb-6 px-4">
              We couldn't find any shipment matching the tracking number you entered.
            </p>
            <button 
              onClick={() => setTrackingId('')}
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