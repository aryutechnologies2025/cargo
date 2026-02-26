import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { ImCheckmark } from "react-icons/im";
import { GiCargoShip } from "react-icons/gi";

const OurServices = () => {
  const services = [
    {
      title: "Door to Door Air Cargo",
      icon: <FaTelegramPlane />,
      color: "border-[#0DA3E2] text-[#0DA3E2]",
      description:
        "We offer door to door Air cargo to any destination worldwide. Finding a delivery company that can offer door-to-door services for your parcels, packages or documents can save you considerable amounts of time and, in some cases, money. When filling out a Cargo Lord request form, make sure that you have read terms & conditions.",
    },
    {
      title: "Excess Baggage",
      icon: <ImCheckmark />,
      color: "border-[#DB3A1B] text-[#DB3A1B]",
      description:
        "Cargo Lord achieved a staggering 10,000 kgs booking a unaccompanied baggage consignments in the year of 2012. The average size of a consignment is 2-3 large suitcases with a weight of 80kg. This service is popular because most of our customers are immigrants who commute to their families.",
    },
    {
      title: "Cargo To Pakistan",
      icon: <GiCargoShip />,
      color: "border-[#35AA47] text-[#35AA47]",
      description:
        "Cargo Lord Ltd is please to offer cargo to Pakistan for only £1.50, door to door, no extra custom to pay at destination. We are probably the only cargo company in UK who offers claim against your loses through our freight liability insurance, so send cargo to pakistan through us.",
    },
  ];

  return (
    <section className="w-full bg-white px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14 ">
      {/* Responsive Grid System */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 md:gap-10 lg:gap-14">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col group h-fit transition-all duration-700 hover:-translate-y-4">
            {/* Header with Icon and Title */}
            <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-4 lg:mb-5">
              <div
                className={`border rounded-full p-2.5 w-fit shrink-0 transition-transform duration-300 group-hover:scale-110 ${service.color}`}
              >
                {/* Clone icon to apply specific size */}
                {service.icon}
              </div>
              <h3 className="text-[#444444] text-lg md:text-xl  font-semibold md:font-bold md:tracking-tight">
                {service.title}
              </h3>
            </div>

            {/* Description Text */}
            <p className="text-[#656565] text-sm leading-6 md:leading-7 font-karla">
              {service.description}
            </p>

            {/* Bottom Accent line that appears on hover */}
            <div className="max-md:hidden mt-6 h-0.5 w-0 bg-[#0DA3E2] group-hover:w-16 transition-all duration-500 opacity-0 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
