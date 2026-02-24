// components/StatsSection.tsx
import { Package, Users, Building2, Truck } from 'lucide-react';
import { IoUmbrella } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";



const StatsSection = () => {
  const stats = [
    {
      number: '25,11,12',
      label: 'Packages Delivered',
      icon: IoUmbrella,
      color: 'text-blue-600'
    },
    {
      number: '19,223',
      label: 'Repeat Customers',
      icon: RiCustomerService2Fill,
      color: 'text-green-600'
    },
    {
      number: '2,331',
      label: 'Our Clients',
      icon: Building2,
      color: 'text-purple-600'
    },
    {
      number: '1,12,26,336',
      label: 'Commercial Goods',
      icon: Truck,
      color: 'text-orange-600'
    }
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center group"
            >
              {/* Icon */}
              <div className={`${stat.color} mb-4 flex justify-center`}>
                <stat.icon className="h-12 w-12 group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Number */}
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>

              {/* Label */}
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;