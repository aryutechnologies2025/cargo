// components/FranchiseeSection.tsx
import Link from "next/link";
import { Download, CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

const FranchiseeSection = () => {
  const benefits = [
    {
      icon: "/icons/franchisee-icon1.webp",
      title: "Understanding the brand and aligning with its values",
      description:
        "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut.",
    },
    {
      icon: "/icons/franchisee-icon2.webp",

      title: "Franchisee model and its relevance",
      description:
        "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut.",
    },
    {
      icon: "/icons/franchisee-icon3.webp",

      title: "Form a win-win relationship with the customers & franchisor",
      description:
        "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut.",
    },
    {
      icon: "/icons/franchisee-icon4.webp",

      title: "The duration of the franchisee term. Download the form",
      description:
        "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut.",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <p className="text-lg font-thin text-[#2A2A2A] ">
            Franchisee Terms and Benefits
          </p>
          <div className="flex items-center justify-center  ">
            <div className="w-32 h-px bg-gray-200 "></div>
            <div className="w-12 h-0.5 bg-yellow-400 "></div>
            <div className="w-32 h-px bg-gray-200 "></div>
          </div>
          <p className="text-xs text-[#777777]">
            Together, we can forge ahead...!
          </p>
        </div>

        {/* Benefits List */}
        <div className="grid grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-3">
              <Image
                src={benefit.icon}
                width={50}
                height={50}
                alt={benefit.title}
                className="w-22 h-22 rounded-full"
              />

              <div>
                <h3 className="text-[#232222] ">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-[#777777] text-xs mt-2 leading-5">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FranchiseeSection;
