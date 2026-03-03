// import Link from 'next/link';
// import { 
//   PiPaperPlane, 
//   PiClock, 
//   PiGlobe, 
//   PiShieldCheck, 
//   PiChartLine,
//   PiHeadset,
//   PiPackage,
//   PiArrowRight,
//   PiCheckCircle,
//   PiPhone,
//   PiEnvelope,
//   PiMapPin,
//   PiList,
//   PiXBold
// } from 'react-icons/pi';

// export default function Home() {
//   return (
//     <>
//       <Header />
//       <Hero />
//       <Features />
//       <Services />
//       <Advantages />
//       <Coverage />
//       <ContactSection />
//       <Footer />
//     </>
//   );
// }

// function Header() {
//   return (
//     <header className="bg-white shadow-sm sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2">
//             <div className="w-10 h-10 bg-[#027cc2] rounded-lg flex items-center justify-center text-white">
//               <PiPaperPlane className="text-xl" />
//             </div>
//             <span className="text-xl font-bold text-gray-900">
//               Vector<span className="text-[#027cc2]">Aero</span>
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex gap-8">
//             {['Home', 'Services', 'Tracking', 'About', 'Contact'].map((item) => (
//               <Link
//                 key={item}
//                 href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
//                 className={`text-gray-600 hover:text-[#027cc2] transition-colors ${
//                   item === 'Home' ? 'text-[#027cc2] font-medium' : ''
//                 }`}
//               >
//                 {item}
//               </Link>
//             ))}
//           </nav>

//           {/* Actions */}
//           <div className="flex items-center gap-4">
//             <Link
//               href="/quote"
//               className="hidden md:inline-flex items-center gap-2 bg-[#027cc2] text-white px-4 py-2 rounded-lg hover:bg-[#0261a1] transition-colors"
//             >
//               <span>Get Quote</span>
//               <PiArrowRight className="text-sm" />
//             </Link>
//             <button className="md:hidden text-gray-600">
//               <PiList className="text-2xl" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// function Hero() {
//   return (
//     <section className="relative bg-gradient-to-r from-[#027cc2] to-[#034a8f] overflow-hidden">
//       {/* Background pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L50 30 L30 50 L10 30 Z' stroke='white' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
//           backgroundSize: '60px 60px'
//         }}></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
//         <div className="max-w-3xl text-white">
//           <p className="text-sm uppercase tracking-widest mb-4 opacity-90">
//             <PiPaperPlane className="inline mr-2" />
//             GLOBAL AIR FREIGHT SOLUTIONS
//           </p>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
//             Fast. Reliable.<br />
//             <span className="text-white/90">Worldwide.</span>
//           </h1>
//           <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl">
//             Experience premium air freight services with real-time tracking, 
//             customs expertise, and guaranteed delivery times. Your cargo, 
//             our priority — anywhere on Earth.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-4 mb-12">
//             <Link
//               href="/services"
//               className="inline-flex items-center justify-center gap-2 bg-white text-[#027cc2] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
//             >
//               <span>Explore Services</span>
//               <PiArrowRight />
//             </Link>
//             <Link
//               href="/tracking"
//               className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#027cc2] transition-colors"
//             >
//               <span>Track Shipment</span>
//             </Link>
//           </div>

//           {/* Stats */}
//           <div className="flex flex-col sm:flex-row gap-8">
//             <div>
//               <div className="text-3xl font-bold">150+</div>
//               <div className="text-sm opacity-80">Countries</div>
//             </div>
//             <div>
//               <div className="text-3xl font-bold">2.5K+</div>
//               <div className="text-sm opacity-80">Daily Flights</div>
//             </div>
//             <div>
//               <div className="text-3xl font-bold">99.8%</div>
//               <div className="text-sm opacity-80">On-Time</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Features() {
//   const features = [
//     {
//       icon: PiClock,
//       title: "Express Delivery",
//       description: "Time-critical solutions with guaranteed departure and arrival times."
//     },
//     {
//       icon: PiGlobe,
//       title: "Global Network",
//       description: "Extensive partnerships with major airlines worldwide."
//     },
//     {
//       icon: PiShieldCheck,
//       title: "Secure Handling",
//       description: "End-to-end security protocols and insurance coverage."
//     },
//     {
//       icon: PiChartLine,
//       title: "Real-Time Tracking",
//       description: "24/7 visibility of your shipment from pickup to delivery."
//     }
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Why choose VectorAero?
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Industry-leading air freight solutions tailored to your needs
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
//               <div className="w-16 h-16 bg-[#027cc2]/10 rounded-full flex items-center justify-center mb-4">
//                 <feature.icon className="text-3xl text-[#027cc2]" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
//               <p className="text-gray-600">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function Services() {
//   const services = [
//     {
//       title: "Standard Air Freight",
//       description: "Cost-effective solution for general cargo with reliable transit times.",
//       price: "From $2.50/kg",
//       features: ["3-5 day delivery", "Full tracking", "Insurance included"]
//     },
//     {
//       title: "Express Air Freight",
//       description: "Priority handling for urgent shipments with fastest possible transit.",
//       price: "From $4.50/kg",
//       features: ["1-2 day delivery", "Priority boarding", "Dedicated support"],
//       popular: true
//     },
//     {
//       title: "Charter Services",
//       description: "Dedicated aircraft for oversized or time-critical cargo.",
//       price: "Custom quote",
//       features: ["Full aircraft charter", "Flexible scheduling", "Global coverage"]
//     }
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Our Air Freight Services
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Comprehensive solutions for every shipping need
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className={`relative bg-gray-50 rounded-xl p-8 ${
//                 service.popular 
//                   ? 'border-2 border-[#027cc2] transform scale-105 shadow-lg' 
//                   : 'border border-gray-200'
//               }`}
//             >
//               {service.popular && (
//                 <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#027cc2] text-white px-4 py-1 rounded-full text-sm font-semibold">
//                   Most Popular
//                 </div>
//               )}
              
//               <div className="w-12 h-12 bg-[#027cc2] rounded-lg flex items-center justify-center text-white mb-4">
//                 <PiPaperPlane className="text-xl" />
//               </div>
              
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
//               <p className="text-gray-600 mb-4">{service.description}</p>
              
//               <div className="text-2xl font-bold text-[#027cc2] mb-4">{service.price}</div>
              
//               <ul className="space-y-2 mb-6">
//                 {service.features.map((feature, idx) => (
//                   <li key={idx} className="flex items-center gap-2 text-gray-600">
//                     <PiCheckCircle className="text-[#027cc2] text-sm" />
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
              
//               <Link
//                 href="/quote"
//                 className="inline-flex items-center gap-2 text-[#027cc2] font-semibold hover:gap-3 transition-all"
//               >
//                 <span>Get Started</span>
//                 <PiArrowRight className="text-sm" />
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function Advantages() {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               The VectorAero Advantage
//             </h2>
//             <p className="text-lg text-gray-600 mb-8">
//               Setting the standard in air freight excellence
//             </p>

//             <div className="space-y-6">
//               {[
//                 {
//                   title: "Customs Clearance Expertise",
//                   description: "In-house customs brokers ensure smooth clearance in 190+ countries"
//                 },
//                 {
//                   title: "Dangerous Goods Handling",
//                   description: "Certified professionals for safe transport of hazardous materials"
//                 },
//                 {
//                   title: "Temperature-Controlled",
//                   description: "Pharma and perishable logistics with active monitoring"
//                 },
//                 {
//                   title: "24/7 Customer Support",
//                   description: "Dedicated account managers available around the clock"
//                 }
//               ].map((item, index) => (
//                 <div key={index} className="flex gap-3">
//                   <div className="flex-shrink-0">
//                     <PiCheckCircle className="text-[#027cc2] text-xl" />
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
//                     <p className="text-gray-600">{item.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="bg-gradient-to-r from-[#027cc2] to-[#034a8f] rounded-2xl p-12 flex items-center justify-center min-h-[400px]">
//             <PiPaperPlane className="text-white opacity-30 text-8xl" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Coverage() {
//   const regions = ['North America', 'South America', 'Europe', 'Asia', 'Africa', 'Australia'];
  
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Global Coverage Map
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Connected to every major airport worldwide
//           </p>
//         </div>

//         <div className="bg-gray-50 rounded-2xl p-8">
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//             {regions.map((region) => (
//               <div key={region} className="bg-white p-4 rounded-lg text-center shadow-sm">
//                 <PiGlobe className="text-3xl text-[#027cc2] mx-auto mb-2" />
//                 <span className="block text-sm font-medium text-gray-700">{region}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function ContactSection() {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Info */}
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Ready to ship?
//             </h2>
//             <p className="text-lg text-gray-600 mb-8">
//               Get in touch with our air freight experts
//             </p>

//             <div className="space-y-6 mb-8">
//               <div className="flex gap-4">
//                 <PiPhone className="text-[#027cc2] text-xl" />
//                 <div>
//                   <h4 className="font-semibold text-gray-900">Call us 24/7</h4>
//                   <p className="text-gray-600">+1 (800) 123-4567</p>
//                 </div>
//               </div>
//               <div className="flex gap-4">
//                 <PiEnvelope className="text-[#027cc2] text-xl" />
//                 <div>
//                   <h4 className="font-semibold text-gray-900">Email</h4>
//                   <p className="text-gray-600">freight@vectoraero.com</p>
//                 </div>
//               </div>
//               <div className="flex gap-4">
//                 <PiMapPin className="text-[#027cc2] text-xl" />
//                 <div>
//                   <h4 className="font-semibold text-gray-900">Headquarters</h4>
//                   <p className="text-gray-600">Miami International Airport, FL</p>
//                 </div>
//               </div>
//             </div>

//             <Link
//               href="/contact"
//               className="inline-flex items-center gap-2 bg-[#027cc2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0261a1] transition-colors"
//             >
//               <span>Contact Us</span>
//               <PiArrowRight />
//             </Link>
//           </div>

//           {/* Quote Form */}
//           <div className="bg-white p-8 rounded-xl shadow-sm">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h3>
//             <form className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#027cc2]"
//               />
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#027cc2]"
//               />
//               <input
//                 type="text"
//                 placeholder="Origin City"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#027cc2]"
//               />
//               <input
//                 type="text"
//                 placeholder="Destination City"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#027cc2]"
//               />
//               <input
//                 type="text"
//                 placeholder="Cargo Weight (kg)"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#027cc2]"
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-[#027cc2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0261a1] transition-colors flex items-center justify-center gap-2"
//               >
//                 <span>Get Quote</span>
//                 <PiArrowRight />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* About */}
//           <div>
//             <Link href="/" className="flex items-center gap-2 mb-4">
//               <div className="w-10 h-10 bg-[#027cc2] rounded-lg flex items-center justify-center">
//                 <PiPaperPlane className="text-white" />
//               </div>
//               <span className="text-xl font-bold">
//                 Vector<span className="text-[#027cc2]">Aero</span>
//               </span>
//             </Link>
//             <p className="text-gray-400 text-sm">
//               Premium air freight services connecting businesses worldwide with speed and reliability.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2 text-gray-400">
//               {['Services', 'Tracking', 'About Us', 'Contact'].map((item) => (
//                 <li key={item}>
//                   <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-[#027cc2] transition-colors">
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Legal */}
//           <div>
//             <h4 className="font-semibold mb-4">Legal</h4>
//             <ul className="space-y-2 text-gray-400">
//               {['Privacy Policy', 'Terms of Service', 'Conditions of Carriage'].map((item) => (
//                 <li key={item}>
//                   <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-[#027cc2] transition-colors">
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h4 className="font-semibold mb-4">Stay Updated</h4>
//             <p className="text-gray-400 text-sm mb-4">
//               Subscribe for industry insights and offers
//             </p>
//             <form className="flex">
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="flex-1 px-4 py-2 bg-gray-800 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-[#027cc2]"
//               />
//               <button
//                 type="submit"
//                 className="bg-[#027cc2] px-4 py-2 rounded-r-lg hover:bg-[#0261a1] transition-colors"
//               >
//                 <PiArrowRight />
//               </button>
//             </form>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
//           <p>&copy; 2026 VectorAero. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page