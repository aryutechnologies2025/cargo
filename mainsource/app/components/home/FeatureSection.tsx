// components/FeaturesSection.tsx
import { Sparkles, Clock, Code, HeartHandshake } from 'lucide-react';
import { VscTools } from "react-icons/vsc";
import { FiUploadCloud } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";


const FeaturesSection = () => {
  const features = [
    {
      title: 'Unique Design',
   
      icon: VscTools,
      description: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum'
    },
    {
      title: 'New Daily Updates',
      icon: FiUploadCloud,
      description: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum'
    },
    {
      title: 'Clean & Hand Coded',
      icon: FiEdit,
      description: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum'
    },
    {
      title: 'Free Support',
      icon: IoSettingsOutline,
      description: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum'
    }
  ];

  return (
    <section className="w-full py-16 bg-[#f7f7f7]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex gap-5">
          {features.map((feature, index) => (
            <div 
              key={index}
              className=""
            >
              {/* Icon and Title Row */}
                <div className="flex items-center justify-end gap-3">
                  <h3 className=" font-bold text-[#2A2A2A]">
                    {feature.title}
                  </h3>
                  <feature.icon className="h-7 w-7 text-[#1874c1]" />               
              </div>

              {/* Description */}
              <p className="text-[#777777] mt-4 text-right text-xs leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;