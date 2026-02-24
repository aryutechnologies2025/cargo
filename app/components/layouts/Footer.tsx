// components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  const quickLinks = [
    'GROUND SHIPPING',
    'RAIL SHIPPING',
    'AIR FREIGHT',
    'LOGISTIC SOLUTIONS',
    'SEA FREIGHT',
    'CARGO SHIPPING',
    'STORAGE & PACKAGING'
  ];

  const footerLinks = [
    'Terms of Use',
    'Legal Disclaimer',
    'Privacy Policy',
    'Support',
    'Sitemap'
  ];

  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* CEO's Statement Section */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold tracking-wide border-b border-gray-700 pb-2">
              OUR CEO's STATEMENT
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
              Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold tracking-wide border-b border-gray-700 pb-2">
              QUICK LINKS
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4 md:col-span-2">
            <h3 className="text-white text-lg font-semibold tracking-wide border-b border-gray-700 pb-2">
              NEWSLETTER SIGNUP
            </h3>
            <p className="text-sm text-gray-400">
              If you want receive our all weekly updates about new offers and discount, signup below.
            </p>
            
            {/* Email Signup Form */}
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-gray-500 text-gray-300 placeholder-gray-500"
              />
              <button className="px-6 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-200 rounded">
                SIGNUP
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer with copyright and links */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              Copyright © 2023. All rights Reserved by DesignThemes
            </div>

            {/* Footer links */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
              {footerLinks.map((link, index) => (
                <div key={link} className="flex items-center">
                  <Link
                    href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </Link>
                  {index < footerLinks.length - 1 && (
                    <span className="ml-4 text-gray-700">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;