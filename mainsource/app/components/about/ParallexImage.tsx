import Image from "next/image";
import React from "react";

const ParallexImage = () => {
  return (
<div className="relative h-[500px] w-full">        
      <Image
        src="/images/about-parallex-image.jpg"
        alt="about-parallex-image"
        fill
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ParallexImage;
