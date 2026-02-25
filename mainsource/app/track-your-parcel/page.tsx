'use client'
import React, { useState } from 'react';
import { Search, Package, MapPin, Truck, Calendar } from 'lucide-react';

const TrackingPage = () => {
  const [trackingId, setTrackingId] = useState('');

  // Mock data based on your requirements
  const mockData = {
    trackingNumber: "TRK-987654321",
    totalPieces: 4,
    cargoMode: "Air Freight",
    beneficiaryCity: "San Francisco, CA",
    dispatchDate: "2024-05-15",
    events: [
      { name: "Delivered", time: "2024-05-20 14:30", qty: 4, status: "completed" },
      { name: "Out for Delivery", time: "2024-05-20 09:00", qty: 4, status: "completed" },
      { name: "In Transit", time: "2024-05-18 11:20", qty: 4, status: "completed" },
      { name: "Picked Up", time: "2024-05-15 16:00", qty: 4, status: "completed" },
    ]
  };



  return (
    <div className="min-h-screen bg-gray-50 p-8 ">
      {/* Breadcrumb */}
     

      <h1 className="text-2xl text-center font-bold text-slate-800 mb-8">Track Your Parcel</h1>

      {/* Search Section */}
      <div className="p-10 rounded-sm mb-10 flex justify-center">
        <div className="flex w-full max-w-xl">
          <input
            type="text"
            placeholder="Enter tracking Code"
            className="flex-grow p-3 border bg-white border-gray-300 focus:outline-none "
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
          />
          <button className="bg-white border border-l-0 border-gray-300 px-6 py-3 hover:bg-gray-50 transition-colors font-medium">
            Track
          </button>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Cargo Details Card */}
        <div className="md:col-span-1 bg-white p-6 shadow-sm border border-gray-100 rounded-lg">
          <h2 className="text-lg font-bold mb-4 border-b pb-2">Shipment Details</h2>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-500 uppercase">Tracking Number</p>
              <p className="font-mono font-semibold">{mockData.trackingNumber}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500 uppercase">Total Pieces</p>
                <p className="font-semibold">{mockData.totalPieces}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Cargo Mode</p>
                <p className="font-semibold">{mockData.cargoMode}</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase">Beneficiary City</p>
              <p className="font-semibold">{mockData.beneficiaryCity}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase">Dispatch Date</p>
              <p className="font-semibold">{mockData.dispatchDate}</p>
            </div>
          </div>
        </div>

        {/* Event Timeline */}
        <div className="md:col-span-2 bg-white p-6 shadow-sm border border-gray-100 rounded-lg">
          <h2 className="text-lg font-bold mb-6">Event Timeline</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b text-gray-500 text-sm">
                  <th className="pb-3 font-medium">Event Name</th>
                  <th className="pb-3 font-medium">Date & Time</th>
                  <th className="pb-3 font-medium text-right">Quantity Involved</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {mockData.events.map((event, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4">
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full mr-3 ${index === 0 ? 'bg-green-500' : 'bg-blue-400'}`} />
                        <span className={index === 0 ? 'font-bold' : ''}>{event.name}</span>
                      </div>
                    </td>
                    <td className="py-4 text-sm text-gray-600">{event.time}</td>
                    <td className="py-4 text-sm text-right font-medium">{event.qty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingPage;