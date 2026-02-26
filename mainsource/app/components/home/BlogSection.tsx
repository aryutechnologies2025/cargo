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

// const BlogCard = ({ post }: { post: BlogPost }) => (
//   <div className="flex flex-col group cursor-pointer">
//     {/* Image Container */}
//     <div className="relative h-55 w-full overflow-hidden mb-6">
//       <Image
//         src={post.image}
//         alt={post.title}
//         fill
//         className="object-cover transition-transform duration-500 group-hover:scale-110"
//       />
//     </div>

//     <div className="flex gap-4">
//       {/* Date Box */}
//       <div className="flex flex-col items-center justify-center border border-gray-300 h-fit px-3 py-2 min-w-12.5">
//         <span className="text-xl font-bold text-[#1874C1] leading-none">
//           {post.date.day}
//         </span>
//         <span className="text-xs font-semibold text-blue-400">
//           {post.date.month}
//         </span>
//       </div>

//       {/* Content */}
//       <div className="flex flex-col gap-3">
//         <h3 className=" font-bold tracking-wide text-slate-800 leading-snug group-hover:text-[#1874C1] transition-colors">
//           {post.title}
//         </h3>
//         <p className="text-xs leading-5 text-gray-500 line-clamp-3">{post.description}</p>

        

//         <button className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-900 mt-4 hover:text-[#1874C1] transition-colors">
//           Continue Reading
//           <AiFillCaretRight/>
//         </button>
//       </div>
//     </div>
//   </div>
// );

// export default function BlogSection() {
//   return (
//     <section className="max-w-5xl mx-auto px-6 py-16 font-sans">
//       {/* Header */}
//       <div className="text-center mb-16">
//         <h2 className="text-xl tracking-wide font-thin uppercase  text-[#2A2A2A]">
//           Our <span className=" font-bold">Blog</span>
//         </h2>

//         <div className="flex items-center justify-center mt-4 ">
//           <div className="w-32 h-px bg-gray-200 "></div>
//           <div className="w-12 h-0.5 bg-yellow-400 "></div>
//           <div className="w-32 h-px bg-gray-200 "></div>
//         </div>

//         <p className="text-[#777777] text-xs mt-4">
//           Pellentesque ac lectus nec leo euismod ultrices. Lorem ipsum dolor sit
//           amet.
//         </p>
//       </div>

//       {/* Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {blogData.map((post) => (
//           <BlogCard key={post.id} post={post} />
//         ))}
//       </div>
//     </section>
//   );
// }


import React from "react";
import Image from "next/image";
import { AiFillCaretRight } from "react-icons/ai";

interface BlogPost {
  id: number;
  date: { day: string; month: string };
  title: string;
  description: string;
  image: string;
}

const blogData: BlogPost[] = [
  {
    id: 1,
    date: { day: "18", month: "JUN" },
    title: "Warehousing and Packaging of goods in transit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus...",
    image: "/images/blog1.jpg",
  },
  {
    id: 2,
    date: { day: "18", month: "JUN" },
    title: "Freight forwarding services by Logistics International",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus...",
    image: "/images/blog2.jpg",
  },
  {
    id: 3,
    date: { day: "18", month: "JUN" },
    title: "Transhipment yard for overseas cargo-rerouting routines",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus...",
    image: "/images/blog3.jpg",
  },
];

const BlogCard = ({ post, index }: { post: BlogPost; index: number }) => (
  <div 
    className="flex flex-col group cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
  >
    {/* Image Container */}
    <div className="relative h-36 md:h-44 lg:h-55 w-full overflow-hidden mb-3 md:mb-6 rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300">
      <Image
        src={post.image}
        alt={post.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
     
    </div>

    <div className="flex gap-4">
      {/* Date Box - Desktop */}
      <div className="max-md:hidden md:flex flex-col items-center justify-center border border-gray-300 h-fit px-3 py-2 min-w-12.5 transition-all duration-300 group-hover:border-[#1874C1] group-hover:bg-[#1874C1]/5 group-hover:scale-105">
        <span className="text-xl font-bold text-[#1874C1] leading-none group-hover:text-[#1874C1]/80 transition-colors">
          {post.date.day}
        </span>
        <span className="text-xs font-semibold text-blue-400 group-hover:text-[#1874C1] transition-colors">
          {post.date.month}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1  md:gap-3 flex-1">
        <h3 className="font-medium md:font-semibold lg:font-bold tracking-wide text-slate-800 leading-snug group-hover:text-[#1874C1] transition-colors duration-300 relative">
          {post.title}
          {/* Underline animation */}
          <span className="absolute  -bottom-1 left-0 w-0 h-0.5 bg-[#1874C1] group-hover:w-full transition-all duration-500" />
        </h3>
        
        <p className="text-xs leading-5 text-gray-500 line-clamp-3 group-hover:text-gray-600 transition-colors duration-300">
          {post.description}
        </p>

        <button className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-900 mt-2 md:mt-4 group overflow-hidden cursor-pointer">
          <span className=" transition-colors duration-300 group-hover:text-[#1874C1]">
            Continue Reading
          </span>
          <AiFillCaretRight className="text-xs transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#1874C1]" />
          
         
        </button>
      </div>
    </div>
  </div>
);

export default function BlogSection() {
  return (
    <section className=" mx-auto px-5 sm:px-7 md:px-16 lg:px-32 py-5 sm:py-9 md:py-14  overflow-hidden">
      {/* Header with animations */}
      <div className="text-center mb-9 md:mb:12 lg:mb-16">
        <h2 className="text-lg md:text-xl lg:text-2xl tracking-wide font-thin uppercase  text-[#2A2A2A]">
           Our <span className=" font-bold">Blog</span>
         </h2>

        <div className="flex items-center justify-center mt-4">
          <div className="w-32 h-0.5 bg-gray-200 "></div>
          <div className="w-12 h-1 bg-yellow-400 rounded-2xl animate-pulse"></div>
          <div className="w-32 h-0.5 bg-gray-200 "></div>
        </div>

        <p className="text-[#777777] mt-4 max-w-2xl text-sm md:text-base mx-auto ">
          Pellentesque ac lectus nec leo euismod ultrices. Lorem ipsum dolor sit
          amet.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogData.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} />
        ))}
      </div>
    </section>
  );
}