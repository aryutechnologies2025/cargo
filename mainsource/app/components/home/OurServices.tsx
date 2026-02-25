import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { ImCheckmark } from "react-icons/im";
import { GiCargoShip } from "react-icons/gi";

const OurServices = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-5xl mx-auto flex gap-5 ">
        <div>
          <div>
            <div className="border rounded-full p-1.5 w-fit border-[#0DA3E2]">
              <FaTelegramPlane className="text-[#0DA3E2]" />
            </div>
            <p className="text-[#444444] text-xl"> Door to Door Air Cargo</p>
          </div>

          <p className="text-[#656565] mt-4 text-sm">
            We offer door to door Air cargo to any destination worldwide ,
            Finding a delivery company that can offer door-to-door services for
            your parcels, packages or documents can save you considerable
            amounts of time and, in some cases, money. When filling out a Cargo
            Lord request form, make sure that you have read terms & conditions.
          </p>
        </div>

        <div>
          <div>
            <div className="border rounded-full p-1.5 w-fit border-[#DB3A1B]">
              <ImCheckmark className="text-[#DB3A1B]" />
            </div>
            <p className="text-[#444444] text-xl"> Excess Baggage</p>
          </div>

          <p className="text-[#656565] mt-4 text-sm">
            Cargo Lord achieved a staggering 10,000 kgs booking a unaccompanied
            baggage consignments in the year of 2012. The average size of a
            consignment is 2-3 large suitcases with a weight of 80kg. This
            service is popular the question is why? Most of our customers are
            immigrants who commute to their families.
          </p>
        </div>

        <div>
          <div>
            <div className="border rounded-full p-1.5 w-fit border-[#35AA47]">
              <GiCargoShip className="text-[#35AA47]" />
            </div>
            <p className="text-[#444444] text-xl">Cargo To Pakistan</p>
          </div>

          <p className="text-[#656565] mt-4 text-sm">
            Cargo Lord Ltd is please to offer cargo to Pakistan for only £1.50 ,
            door to door , no extra custom to pay at destination. we are
            probably only cargo company in UK who offers claim against your
            loses through our freight liability insurance ,so send cargo to
            pakistan through.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
