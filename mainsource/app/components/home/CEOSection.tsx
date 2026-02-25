import { Globe, Headset, Map, Plane } from "lucide-react";
import Image from "next/image";

// components/CEOSection.tsx (exact match)
const CEOSection = () => {
  const features = [
    {
      icon: <Globe className="w-5 h-5 hover:text-white text-slate-500 " />,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <Headset className="w-5 h-5 hover:text-white text-slate-500" />,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <Map className="w-5 h-5 hover:text-white text-slate-500" />,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <Plane className="w-5 h-5 hover:text-white text-slate-500" />,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-6">
              {/* Diamond Icon Container */}
              <div className="relative shrink-0">
                <div
                  className={`w-12 h-12 rotate-45 rounded-xl bg-gray-100 flex items-center justify-center transition-colors duration-300 hover:bg-[#1874c1]`}
                >
                  <div className="-rotate-45 ">{feature.icon}</div>
                </div>
              </div>

              {/* Description Text */}
              <p className="text-[#888888] text-xs leading-relaxed">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        {/* Main content grid */}
        <div className="flex gap-8 mt-36">
          {/* Left content - CEO Statement */}
          <div className=" space-y-4 w-1/3">
            <h2 className="text-xl font-semibold">Our CEO's Statement</h2>
            <p className="text-[#777777] text-xs leading-relaxed">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>

            <Image
              src="/icons/sign.webp"
              height={40}
              width={40}
              alt="sign"
              unoptimized
              className="object-contain w-40 h-28"
            />
          </div>

          {/* Right sidebar */}
          <div className="flex gap-5">
            <div className="group">
              <div className="relative h-52 w-72">
                <Image
                  src="/images/our-ceo-statement1.jpg"
                  alt="our-ceo-statement1"
                  fill
                  unoptimized
                  className=""
                />

                <div className="absolute w-full h-full bg-black/70 flex flex-col justify-between p-5 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <p className="text-white/80 text-sm leading-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium eum natus debitis corrupti in possimus.
                  </p>
                  <button className="bg-blue-500 px-5 py-2 text-white w-fit cursor-pointer text-sm">
                    CONSULT NOW
                  </button>
                </div>
              </div>

              <p className="mt-2 text-[#2A2A2A]  font-bold">
                Nonummy Nibh Euimod
              </p>
            </div>

            <div className="group">
              <div className="group">
                <div className="relative h-52 w-72">
                  <Image
                    src="/images/our-ceo-statement2.jpg"
                    alt="our-ceo-statement2"
                    fill
                    unoptimized
                    className=""
                  />

                  <div className="absolute w-full h-full bg-black/70 flex flex-col justify-between p-5 opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <p className="text-white/80 text-sm leading-6">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusantium eum natus debitis corrupti in possimus.
                    </p>
                    <button className="bg-blue-500 px-5 py-2 text-white w-fit cursor-pointer text-sm">
                      CONSULT NOW
                    </button>
                  </div>
                </div>

                <p className="mt-2 text-[#2A2A2A]  font-bold">
                  Nonummy Nibh Euimod
                </p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOSection;
