// components/FranchiseeSection.tsx
import Link from 'next/link';
import { Download, CheckCircle, ArrowRight } from 'lucide-react';

const FranchiseeSection = () => {
  const benefits = [
    {
      title: 'Understanding the brand and aligning with its values',
      description: 'Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut.'
    },
    {
      title: 'Franchisee model and its relevance',
      description: 'Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut.'
    },
    {
      title: 'Form a win-win relationship with the customers & franchisor',
      description: 'Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut.'
    },
    {
      title: 'The duration of the franchisee term. Download the form',
      description: 'Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut.'
    }
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Franchisee Terms and Benefits
          </h1>
          <p className="text-xl text-gray-600 italic">
            Together, we can forge ahead...!
          </p>
        </div>

        {/* Benefits List */}
        <div className="space-y-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="border-b border-gray-200 pb-8 last:border-0">
              {/* Title with number */}
              <div className="flex items-start gap-4 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </span>
                <h3 className="text-xl font-bold text-gray-900 flex-1">
                  {benefit.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 ml-12">
                {benefit.description}
              </p>

              {/* Download link for the last item */}
              {index === 3 && (
                <div className="ml-12 mt-4">
                  <Link 
                    href="/franchisee-form.pdf"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                    download
                  >
                    <Download className="h-5 w-5" />
                    Download Franchisee Application Form
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Link 
            href="/franchisee/apply"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Apply for Franchise
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FranchiseeSection;