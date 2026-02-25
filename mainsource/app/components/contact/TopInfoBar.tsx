import React from "react";

const TopInfoBar = () => {
  return (
    <div className="bg-white py-22 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="font-bold text-base mb-5 uppercase text-[#2A2A2A] tracking-wider">
            USA Office
          </h4>
          <p className="text-[#777777] leading-relaxed">
            11 Hills Ave, Loftus - New Jersey,
            <br />
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
            <br />
            USA
          </p>
        </div>
        <div>
          <h4 className="font-bold text-base mb-5 uppercase text-[#2A2A2A] tracking-wider">
            Working Hours
          </h4>
          <p className="text-[#777777] mb-2">Monday - Friday:</p>
          <p className="text-[#777777] mb-3">09:00 am to 05:00 pm</p>
          <p className="text-[#777777] mb-2">Saturday - Sunday:</p>
          <p className="text-[#777777] ">Holiday</p>
        </div>
        <div>
          <h4 className="font-bold text-base mb-5 uppercase text-[#2A2A2A] tracking-wider">
            Student Relations
          </h4>
          <p className="text-[#777777] mb-3">Mail:  <span className="text-[#1874C1]"> submissions@domain.com </span></p>
          <p className="text-[#777777] mb-3">Phone: (012) 1234 789 456</p>
          <p className="text-[#777777] mb-3">Fax: 1.245.789.654</p>
        </div>
        <div>
          <h4 className="font-bold text-base mb-5 uppercase text-[#2A2A2A] tracking-wider">
            Business Development  
          </h4>
          <p className="text-[#777777] mb-3">Mail:  <span className="text-[#1874C1]"> submissions@domain.com </span></p>
          <p className="text-[#777777] mb-3">Phone: (012) 1234 789 456</p>
          <p className="text-[#777777] mb-3">Fax: 1.245.789.654</p>
        </div>
      </div>
    </div>
  );
};

export default TopInfoBar;
