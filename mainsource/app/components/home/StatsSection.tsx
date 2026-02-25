import { IoUmbrella } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RiShip2Line } from "react-icons/ri";
import { PiCodesandboxLogoLight } from "react-icons/pi";

const StatsSection = () => {
  const stats = [
    {
      number: "25,11,12",
      label: "Packages Delivered",
      icon: IoUmbrella,
    },
    {
      number: "19,223",
      label: "Repeat Customers",
      icon: RiCustomerService2Fill,
    },
    {
      number: "2,331",
      label: "Our Clients",
      icon: RiShip2Line,
    },
    {
      number: "1,12,26,336",
      label: "Commercial Goods",
      icon: PiCodesandboxLogoLight,
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex gap-3">
              {/* Icon */}
              <stat.icon className="h-8 w-8 mt-3 group-hover:scale-110 transition-transform duration-300" />

              <div className="flex flex-col gap-2">
                {/* Number */}
                <div className="text-3xl  font-extrabold text-[#1874C1] ">
                  {stat.number}
                </div>

                <hr className="w-1/3 border-amber-400 border-[1.5]" />
                {/* Label */}
                <div className="text-[#777777] text-xs font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
