import Image from "next/image";

const clientsList = [
  "/icons/client1.webp",
  "/icons/client2.webp",
  "/icons/client3.webp",
  "/icons/client4.webp",
  "/icons/client5.webp",
];

const TestimonialSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      {/* testimonail */}
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex justify-center items-center">
          <hr className="border-gray-200 w-full" />
          <Image
            src="/images/testimonial1.jpg"
            alt="testimonial image"
            width={40}
            height={40}
            className="w-18 h-18 rounded-full object-cover"
          />
          <hr className="border-gray-200 w-full" />
        </div>

        {/* Author */}
        <h3 className="text-[#777777] text-xs text-center font-semibold mt-8">
          <span className="text-black font-bold text-sm"> Angelina,</span>{" "}
          Director of Ramsey & Co
        </h3>

        {/* Quote Text */}
        <p className="text-[#777777]/80 text-sm text-center leading-loose mt-5">
          “ Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml ka
          dhdudu pochu turpis. Suspendisse urna nibh, viverra non, semper
          suscipit, posuere a, pede. Donec nec justo eget felis facilisis
          fermentum. Aliquam porttitor mauris sit amet orci. ”
        </p>
      </div>

      {/* clients */}

      <div className="flex items-center justify-center gap-18 mt-14 overflow-hidden overflow-x-auto max-w-5xl mx-auto">
        {clientsList.map((item, index) => (
          <Image
            key={index}
            src={item}
            alt="clients"
            width={40}
            height={40}
            className="w-52 h-20 object-contain"
          />
        ))}
        {clientsList.map((item, index) => (
          <Image
            key={index}
            src={item}
            alt="clients"
            width={40}
            height={40}
            className="w-52 h-20 object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
