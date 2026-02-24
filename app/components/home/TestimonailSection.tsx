// components/TestimonialSection.tsx (exact match)
const TestimonialSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Testimonial */}
        <div className="border-l-4 border-blue-600 pl-6 py-2">
          
          {/* Author */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Angelina, Director of Ramsey & Co
          </h3>

          {/* Quote Text */}
          <p className="text-gray-700 text-lg leading-relaxed">
            “ Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml ka dhdudu pochu turpis.<br />
            Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis<br />
            facilisis fermentum. Aliquam porttitor mauris sit amet orci. ”
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;