


// import React from "react";
// import Image from "next/image";
// import { AiFillCaretRight } from "react-icons/ai";

// interface BlogPost {
//   id: number;
//   date: { day: string; month: string };
//   title: string;
//   description: string;
//   image: string;
// }

// const blogData: BlogPost[] = [
//   {
//     id: 1,
//     date: { day: "18", month: "JUN" },
//     title: "Warehousing and Packaging of goods in transit",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus...",
//     image: "/images/blog1.jpg",
//   },
//   {
//     id: 2,
//     date: { day: "18", month: "JUN" },
//     title: "Freight forwarding services by Logistics International",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus...",
//     image: "/images/blog2.jpg",
//   },
//   {
//     id: 3,
//     date: { day: "18", month: "JUN" },
//     title: "Transhipment yard for overseas cargo-rerouting routines",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus...",
//     image: "/images/blog3.jpg",
//   },
// ];

// const BlogCard = ({ post, index }: { post: BlogPost; index: number }) => (
//   <div 
//     className="flex flex-col group cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
//   >
//     {/* Image Container */}
//     <div className="relative h-36 md:h-44 lg:h-55 w-full overflow-hidden mb-3 md:mb-6 rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300">
//       <Image
//         src={post.image}
//         alt={post.title}
//         fill
//         className="object-cover transition-transform duration-700 group-hover:scale-110"
//       />
//       {/* Overlay on hover */}
//       <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
     
//     </div>

//     <div className="flex gap-4">
//       {/* Date Box - Desktop */}
//       <div className="max-md:hidden md:flex flex-col items-center justify-center border border-gray-300 h-fit px-3 py-2 min-w-12.5 transition-all duration-300 group-hover:border-[#027cc2] group-hover:bg-[#027cc2]/5 group-hover:scale-105">
//         <span className="text-xl font-bold text-[#027cc2] leading-none group-hover:text-[#027cc2]/80 transition-colors">
//           {post.date.day}
//         </span>
//         <span className="text-xs font-semibold text-blue-400 group-hover:text-[#027cc2] transition-colors">
//           {post.date.month}
//         </span>
//       </div>

//       {/* Content */}
//       <div className="flex flex-col gap-1  md:gap-3 flex-1">
//         <h3 className="font-medium md:font-semibold lg:font-bold tracking-wide text-slate-800 leading-snug group-hover:text-[#027cc2] transition-colors duration-300 relative">
//           {post.title}
//           {/* Underline animation */}
//           <span className="absolute  -bottom-1 left-0 w-0 h-0.5 bg-[#027cc2] group-hover:w-full transition-all duration-500" />
//         </h3>
        
//         <p className="text-xs leading-5 text-gray-500 line-clamp-3 group-hover:text-gray-600 transition-colors duration-300">
//           {post.description}
//         </p>

//         <button className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-900 mt-2 md:mt-4 group overflow-hidden cursor-pointer">
//           <span className=" transition-colors duration-300 group-hover:text-[#027cc2]">
//             Continue Reading
//           </span>
//           <AiFillCaretRight className="text-xs transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#027cc2]" />
          
         
//         </button>
//       </div>
//     </div>
//   </div>
// );

// export default function BlogSection() {
//   return (
//     <section className=" mx-auto px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14  overflow-hidden">
//       {/* Header with animations */}
//       <div className="text-center mb-9 md:mb:12 lg:mb-16">
//         <h2 className="text-lg md:text-xl lg:text-2xl tracking-wide font-thin uppercase  text-[#2A2A2A]">
//            Our <span className=" font-bold">Blog</span>
//          </h2>

//         <div className="flex items-center justify-center mt-4">
//           <div className="w-32 h-0.5 bg-gray-200 "></div>
//           <div className="w-12 h-1 bg-yellow-400 rounded-2xl animate-pulse"></div>
//           <div className="w-32 h-0.5 bg-gray-200 "></div>
//         </div>

//         <p className="text-[#777777] mt-4 max-w-2xl text-sm md:text-base mx-auto ">
//           Pellentesque ac lectus nec leo euismod ultrices. Lorem ipsum dolor sit
//           amet.
//         </p>
//       </div>

//       {/* Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {blogData.map((post, index) => (
//           <BlogCard key={post.id} post={post} index={index} />
//         ))}
//       </div>
//     </section>
//   );
// }



'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AiFillCaretRight } from "react-icons/ai";
import { FiClock, FiUser, FiCalendar, FiArrowRight } from "react-icons/fi";
import { BsClockHistory } from "react-icons/bs";

interface BlogPost {
  id: number;
  date: { day: string; month: string };
  title: string;
  description: string;
  image: string;
  author?: string;
  readTime?: string;
  category?: string;
}

const blogData: BlogPost[] = [
  {
    id: 1,
    date: { day: "18", month: "JUN" },
    title: "Warehousing and Packaging of goods in transit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus...",
    image: "/images/blog1.jpg",
    author: "John ",
    readTime: "5 min read",
    category: "Warehousing"
  },
  {
    id: 2,
    date: { day: "18", month: "JUN" },
    title: "Freight forwarding services by Logistics International",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus...",
    image: "/images/blog2.jpg",
    author: "Sarah ",
    readTime: "4 min read",
    category: "Freight"
  },
  {
    id: 3,
    date: { day: "18", month: "JUN" },
    title: "Transhipment yard for overseas cargo-rerouting routines",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus...",
    image: "/images/blog3.jpg",
    author: "Mike ",
    readTime: "6 min read",
    category: "Logistics"
  },
];

const BlogCard = ({ post, index }: { post: BlogPost; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer hover:-translate-y-2"
  >
    {/* Image Container */}
    <div className="relative h-48 sm:h-56 md:h-48 lg:h-56 w-full overflow-hidden">
      <Image
        src={post.image}
        alt={post.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Category Badge */}
      <span className="absolute top-4 left-4 bg-[#057dc3] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
        {post.category}
      </span>

      {/* Date Badge - Mobile/Tablet */}
      <div className="absolute top-4 right-4 md:hidden bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 text-center shadow-lg">
        <span className="block text-lg font-bold text-[#057dc3] leading-none">{post.date.day}</span>
        <span className="block text-xs font-semibold text-gray-600">{post.date.month}</span>
      </div>
    </div>

    {/* Content */}
    <div className="p-5 md:p-6">
      {/* Meta Info */}
      <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <FiCalendar className="w-3 h-3 text-[#057dc3]" />
          <span>{post.date.day} {post.date.month}</span>
        </div>
        <div className="flex items-center gap-1">
          <FiUser className="w-3 h-3 text-[#057dc3]" />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center gap-1">
          <BsClockHistory className="w-3 h-3 text-[#057dc3]" />
          <span>{post.readTime}</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="font-bold text-gray-800 text-lg md:text-xl leading-tight mb-3 group-hover:text-[#057dc3] transition-colors duration-300">
        {post.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
        {post.description}
      </p>

      {/* Read More Link */}
      <Link 
        href={`/blog/${post.id}`}
        className="inline-flex items-center gap-2 text-[#057dc3] font-semibold text-sm group/link"
      >
        <span>Read More</span>
        <FiArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
      </Link>

      {/* Hover Border Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#057dc3] to-[#fdc300] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  </motion.div>
);

export default function BlogSection() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-32 py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-16"
      >
        <span className="text-[#057dc3] font-bold text-xs sm:text-sm uppercase tracking-[0.3em]">
          Our Blog
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A2A2A] mt-3 mb-4">
          Latest News & <span className="text-[#057dc3]">Insights</span>
        </h2>
        
        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-12 h-0.5 bg-gray-300"></div>
          <div className="w-16 h-1 bg-gradient-to-r from-[#fdc300] to-[#057dc3] rounded-full animate-pulse"></div>
          <div className="w-12 h-0.5 bg-gray-300"></div>
        </div>

        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          Stay updated with the latest trends, insights, and news from the logistics industry
        </p>
      </motion.div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {blogData.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} />
        ))}
      </div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-12 sm:mt-16"
      >
        <Link
          href="/blog"
          className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#057dc3] to-[#0469a5] text-white px-8 py-4 rounded-xl font-semibold text-sm hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <span>View All Articles</span>
          <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>

    
    </section>
  );
}