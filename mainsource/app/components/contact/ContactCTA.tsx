import React from "react";
import { RiCustomerServiceFill } from "react-icons/ri";
import { FaPeopleCarryBox } from "react-icons/fa6";

const ContactCTA = () => {
  return (
    <div className="flex">
      <div className="bg-[#1874c1] grow text-white p-26 gap-5 flex items-center justify-center">
        <RiCustomerServiceFill className="text-5xl" />
        <div className="border-l h-18"></div>
        <div>
          <p className="text-white/70 uppercase text-sm tracking-wider">
            Have any questions or want a free estimate?
          </p>
          <p className="text-[26px] mt-2">(01) 300 330 755</p>
        </div>
      </div>
      <div className="bg-[#1566aa] grow text-white p-26 gap-5 flex items-center justify-center">
        <FaPeopleCarryBox className="text-5xl" />
        <div className="border-l h-18"></div>
        <div>
          <p className="text-white/70 uppercase text-sm tracking-wider">
            Want a freight
          </p>
          <p className="text-[26px] mt-2">Book Now (or) Ask a Question</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;
