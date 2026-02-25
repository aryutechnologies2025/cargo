import { FaUser, FaChartBar, FaShip } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";

export const DefiningMoments = () => {
  const services = [
    {
      title: "Warehousing Solutions",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus.",
      icon: <FaUser />,
    },
    {
      title: "Surface Transport by Road",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus.",
      icon: <FaSignal />,
    },
    {
      title: "Air Freight Movements",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus.",
      icon: <FaChartBar />,
    },
    {
      title: "Global Shipping Destinations",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus.",
      icon: <FaShip />,
    },
  ];

  return (
    <section className="  py-22 ">
      <div className=" mx-auto max-w-7xl  px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side: Header */}
          <div className="w-1/3 space-y-6 ">
            <h2 className="text-2xl text-[#2A2A2A]">
              Defining Moments
            </h2>
            <p className="text-[#777777] text-sm leading-relaxed">
              You are known by the company you keep. Take a look at our
              satisfied corporate customers. We are honoured.
            </p>
            <button className="bg-[#1b75bb] text-white px-8 py-4 text-sm font-medium hover:bg-blue-700 transition-colors uppercase">
              Read More
            </button>
          </div>

          {/* Right Side: Grid */}
          <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {services.map((service, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="text-xl text-[#1874C1]">{service.icon}</span>
                  <h4 className=" font-semibold text-[#2A2A2A] tracking-tight">
                    {service.title}
                  </h4>
                </div>
                <p className="text-[#777777] text-sm leading-6">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
