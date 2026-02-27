// 'use client'
// import React, { useState } from 'react';
// import { Search, Package, MapPin, Truck, Calendar } from 'lucide-react';

// const TrackingPage = () => {
//   const [trackingId, setTrackingId] = useState('');

//   // Mock data based on your requirements
//   const mockData = {
//     trackingNumber: "TRK-987654321",
//     totalPieces: 4,
//     cargoMode: "Air Freight",
//     beneficiaryCity: "San Francisco, CA",
//     dispatchDate: "2024-05-15",
//     events: [
//       { name: "Delivered", time: "2024-05-20 14:30", qty: 4, status: "completed" },
//       { name: "Out for Delivery", time: "2024-05-20 09:00", qty: 4, status: "completed" },
//       { name: "In Transit", time: "2024-05-18 11:20", qty: 4, status: "completed" },
//       { name: "Picked Up", time: "2024-05-15 16:00", qty: 4, status: "completed" },
//     ]
//   };



//   return (
//     <div className="min-h-screen bg-gray-50 p-8 ">
//       {/* Breadcrumb */}
     

//       <h1 className="text-2xl text-center font-bold text-slate-800 mb-8">Track Your Parcel</h1>

//       {/* Search Section */}
//       <div className="p-10 rounded-sm mb-10 flex justify-center">
//         <div className="flex w-full max-w-xl">
//           <input
//             type="text"
//             placeholder="Enter tracking Code"
//             className="flex-grow p-3 border bg-white border-gray-300 focus:outline-none "
//             value={trackingId}
//             onChange={(e) => setTrackingId(e.target.value)}
//           />
//           <button className="bg-white border border-l-0 border-gray-300 px-6 py-3 hover:bg-gray-50 transition-colors font-medium">
//             Track
//           </button>
//         </div>
//       </div>

//       {/* Results Section */}
//       <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
//         {/* Cargo Details Card */}
//         <div className="md:col-span-1 bg-white p-6 shadow-sm border border-gray-100 rounded-lg">
//           <h2 className="text-lg font-bold mb-4 border-b pb-2">Shipment Details</h2>
//           <div className="space-y-4">
//             <div>
//               <p className="text-xs text-gray-500 uppercase">Tracking Number</p>
//               <p className="font-mono font-semibold">{mockData.trackingNumber}</p>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <p className="text-xs text-gray-500 uppercase">Total Pieces</p>
//                 <p className="font-semibold">{mockData.totalPieces}</p>
//               </div>
//               <div>
//                 <p className="text-xs text-gray-500 uppercase">Cargo Mode</p>
//                 <p className="font-semibold">{mockData.cargoMode}</p>
//               </div>
//             </div>
//             <div>
//               <p className="text-xs text-gray-500 uppercase">Beneficiary City</p>
//               <p className="font-semibold">{mockData.beneficiaryCity}</p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-500 uppercase">Dispatch Date</p>
//               <p className="font-semibold">{mockData.dispatchDate}</p>
//             </div>
//           </div>
//         </div>

//         {/* Event Timeline */}
//         <div className="md:col-span-2 bg-white p-6 shadow-sm border border-gray-100 rounded-lg">
//           <h2 className="text-lg font-bold mb-6">Event Timeline</h2>
//           <div className="overflow-x-auto">
//             <table className="w-full text-left">
//               <thead>
//                 <tr className="border-b text-gray-500 text-sm">
//                   <th className="pb-3 font-medium">Event Name</th>
//                   <th className="pb-3 font-medium">Date & Time</th>
//                   <th className="pb-3 font-medium text-right">Quantity Involved</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-100">
//                 {mockData.events.map((event, index) => (
//                   <tr key={index} className="hover:bg-gray-50 transition-colors">
//                     <td className="py-4">
//                       <div className="flex items-center">
//                         <div className={`w-2 h-2 rounded-full mr-3 ${index === 0 ? 'bg-green-500' : 'bg-blue-400'}`} />
//                         <span className={index === 0 ? 'font-bold' : ''}>{event.name}</span>
//                       </div>
//                     </td>
//                     <td className="py-4 text-sm text-gray-600">{event.time}</td>
//                     <td className="py-4 text-sm text-right font-medium">{event.qty}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrackingPage;













'use client'
import React, { useState } from 'react';
import { Search, Package, MapPin, Truck, Calendar, Clock, CheckCircle, Circle, ChevronRight, Info } from 'lucide-react';
import { MdFlight, MdDirectionsBoat, MdLocalShipping } from 'react-icons/md';

const TrackingPage = () => {
  const [trackingId, setTrackingId] = useState('');
  const [showResults, setShowResults] = useState(true);

  // Mock data based on your requirements
  const mockData = {
    trackingNumber: "TRK-987654321",
    totalPieces: 4,
    cargoMode: "Air Freight",
    beneficiaryCity: "San Francisco, CA",
    dispatchDate: "2024-05-15",
    estimatedDelivery: "2024-05-20",
    status: "Delivered",
    events: [
      { name: "Delivered", time: "2024-05-20 14:30", location: "San Francisco, CA", qty: 4, status: "completed" },
      { name: "Out for Delivery", time: "2024-05-20 09:00", location: "San Francisco, CA", qty: 4, status: "completed" },
      { name: "In Transit", time: "2024-05-18 11:20", location: "Chicago, IL", qty: 4, status: "completed" },
      { name: "Picked Up", time: "2024-05-15 16:00", location: "New York, NY", qty: 4, status: "completed" },
    ]
  };

  

  const getCargoIcon = (mode: string) => {
    switch(mode) {
      case 'Air Freight': return <MdFlight className="text-[#027cc2]" />;
      case 'Sea Freight': return <MdDirectionsBoat className="text-[#027cc2]" />;
      default: return <MdLocalShipping className="text-[#027cc2]" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
       

        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-0.5 bg-[#027cc2] rounded-full"></div>
            <Package className="text-[#027cc2] w-4 h-4 sm:w-5 sm:h-5" />
            <div className="w-8 h-0.5 bg-[#027cc2] rounded-full"></div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A2A2A] mb-2">
            Track Your <span className="text-[#027cc2]">Parcel</span>
          </h1>
          <p className="text-[#777777] text-xs sm:text-sm max-w-xl mx-auto">
            Enter your tracking number to get real-time updates on your shipment
          </p>
        </div>

        {/* Search Section */}
        <div className="p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 md:mb-10 flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          <div className="flex flex-col sm:flex-row w-full max-w-xl gap-3">
            <div className="relative flex-grow group">
              <input
                type="text"
                placeholder="Enter tracking code (e.g., TRK-987654321)"
                className="w-full p-3 sm:p-4 pl-10 sm:pl-12 border border-gray-300 bg-white focus:outline-none focus:border-[#027cc2] focus:ring-1 focus:ring-[#027cc2] transition-all duration-300 rounded-lg text-sm h-full"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
              />
              <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5 group-focus-within:text-[#027cc2] transition-colors duration-300" />
            </div>
            <button 
              className="bg-[#027cc2] text-white px-6 sm:px-8 py-2.5 sm:py-4 hover:bg-[#0f5a9e] transition-all duration-300 font-medium rounded-lg flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Track</span>
            </button>
          </div>
        </div>

        {/* Results Section */}
        {showResults && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Cargo Details Card */}
              <div className="md:col-span-1 bg-white p-4 sm:p-5 md:p-6 shadow-sm border border-gray-100 rounded-xl hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1">
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-base sm:text-lg font-bold text-[#2A2A2A]">Shipment Details</h2>
                  <span className="bg-green-100 text-green-700 text-[10px] sm:text-xs px-2 py-1 rounded-full font-medium animate-pulse">
                    {mockData.status}
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Tracking Number */}
                  <div className="bg-gray-50 p-3 rounded-lg group hover:bg-[#027cc2]/5 transition-colors duration-300">
                    <p className="text-xs text-gray-500 uppercase mb-1">Tracking Number</p>
                    <p className="font-mono font-semibold text-sm sm:text-base flex items-center gap-2">
                      <Package className="w-4 h-4 text-[#027cc2]" />
                      {mockData.trackingNumber}
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-gray-50 p-3 grow rounded-lg group hover:bg-[#027cc2]/5 transition-colors duration-300">
                      <p className="text-xs text-gray-500 uppercase mb-1">Total Pieces</p>
                      <p className="font-semibold text-sm sm:text-base">{mockData.totalPieces}</p>
                    </div>
                    <div className="bg-gray-50 p-3 grow rounded-lg group hover:bg-[#027cc2]/5 transition-colors duration-300">
                      <p className="text-xs text-gray-500 uppercase mb-1">Cargo Mode</p>
                      <p className="font-semibold text-sm sm:text-base flex items-center gap-1">
                        {getCargoIcon(mockData.cargoMode)}
                        {mockData.cargoMode}
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="bg-gray-50 p-3 rounded-lg group hover:bg-[#027cc2]/5 transition-colors duration-300">
                    <p className="text-xs text-gray-500 uppercase mb-1">Beneficiary City</p>
                    <p className="font-semibold text-sm sm:text-base flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#027cc2]" />
                      {mockData.beneficiaryCity}
                    </p>
                  </div>

                  {/* Dates */}
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-gray-50 p-3 grow rounded-lg group hover:bg-[#027cc2]/5 transition-colors duration-300">
                      <p className="text-xs text-gray-500 uppercase mb-1">Dispatch Date</p>
                      <p className="font-semibold text-sm sm:text-base flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#027cc2]" />
                        {mockData.dispatchDate}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 grow rounded-lg group hover:bg-[#027cc2]/5 transition-colors duration-300">
                      <p className="text-xs text-gray-500 uppercase mb-1">Est. Delivery</p>
                      <p className="font-semibold text-sm sm:text-base flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#027cc2]" />
                        {mockData.estimatedDelivery}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Timeline */}
              <div className="md:col-span-2 bg-white p-4 sm:p-5 md:p-6 shadow-sm border border-gray-100 rounded-xl hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1">
                <h2 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-[#2A2A2A]">Event Timeline</h2>
                
                {/* Desktop Timeline */}
                <div className="max-md:hidden md:block overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-200 text-gray-500 text-xs sm:text-sm">
                        <th className="pb-3 font-medium">Event Name</th>
                        <th className="pb-3 font-medium">Date & Time</th>
                        <th className="pb-3 font-medium">Location</th>
                        <th className="pb-3 font-medium text-right">Quantity</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {mockData.events.map((event, index) => (
                        <tr 
                          key={index} 
                          className="hover:bg-gray-50 transition-all duration-300 group cursor-default"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <td className="py-3 sm:py-4">
                            <div className="flex items-center">
                              <div className={`relative mr-3`}>
                                {index === 0 ? (
                                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 animate-pulse" />
                                ) : (
                                  <Circle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                                )}
                              </div>
                              <span className={`text-sm ${index === 0 ? 'font-bold text-green-700' : ''}`}>
                                {event.name}
                              </span>
                            </div>
                          </td>
                          <td className="py-3 sm:py-4 text-xs sm:text-sm text-gray-600">{event.time}</td>
                          <td className="py-3 sm:py-4 text-xs sm:text-sm text-gray-600">{event.location}</td>
                          <td className="py-3 sm:py-4 text-xs sm:text-sm text-right font-medium">{event.qty}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Timeline Cards */}
                <div className="md:hidden space-y-3">
                  {mockData.events.map((event, index) => (
                    <div 
                      key={index}
                      className="bg-gray-50 p-3 rounded-lg border-l-4 border-[#027cc2] "
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {index === 0 ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <Circle className="w-4 h-4 text-blue-400" />
                        )}
                        <span className={`text-sm font-medium ${index === 0 ? 'text-green-700' : ''}`}>
                          {event.name}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                        <div>
                          <p className="text-gray-400">Date & Time</p>
                          <p>{event.time}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Location</p>
                          <p>{event.location}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Quantity</p>
                          <p>{event.qty}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

               
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="mt-4 sm:mt-6 bg-blue-50 border border-blue-100 rounded-xl p-3 sm:p-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <div className="flex items-start gap-3">
                <Info className="w-4 h-4 sm:w-5 sm:h-5 text-[#027cc2] flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#2A2A2A]">
                  Need help with your shipment? Contact our support team at <span className="text-[#027cc2] font-semibold hover:underline cursor-pointer">support@cargolord.com</span> or call <span className="text-[#027cc2] font-semibold">(01) 300 330 755</span>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* No Results State */}
        {!showResults && trackingId && (
          <div className="text-center py-8 sm:py-10 animate-in fade-in duration-500">
            <Package className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-3" />
            <p className="text-[#777777] text-sm">No tracking information found. Please check your tracking number.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackingPage;