import { IoEarthSharp } from "react-icons/io5";
import { GiCargoShip } from "react-icons/gi";
import { RiComputerFill } from "react-icons/ri";
import { AiFillSafetyCertificate } from "react-icons/ai";

const ParallexImage = () => {
  const features = [
    { icon: <IoEarthSharp />, label: "GLOBAL LOCATIONS" },
    { icon: <GiCargoShip />, label: "TRANSNATIONAL CARGOS" },
    { icon: <RiComputerFill />, label: "COMPUTERIZED TRACKING" },
    { icon: <AiFillSafetyCertificate />, label: "SAFETY OF DELIVERY" },
  ];

  return (
    <section className="pt-10">
      <div
        className="relative h-[90vh] w-full   flex items-center py-16 "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/about-parallex-image.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // Simple parallax effect
          height:'60vh'
        }}
      >
        <div className=" mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4"
              >
                {/* Icon Container */}
                <div className="relative w-16 h-16 text-5xl text-white transition-transform hover:scale-110 duration-300">
                  {item.icon}
                </div>

                {/* Label */}
                <h3 className="text-white tracking-widest ">{item.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallexImage;
