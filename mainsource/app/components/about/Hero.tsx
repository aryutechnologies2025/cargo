import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-20">
          {/* Left Side: Mockup Images */}
          <div className="relative flex flex-col items-center lg:items-end">
            {/* Main Magazine Mockup */}
            <div className="relative z-10 ">
              <Image
                src="/images/about-book-image.jpg"
                alt="Logistics Fleet 2017"
                className="w-full "
                height={50}
                width={50}
              />
            </div>
          </div>

          {/* Right Side: Welcome Text */}
          <div className="space-y-6">
            <h1 className="text-4xl  text-[#2A2A2A] leading-tight">
              Welcome to Logistics <br />
              International
            </h1>

            <div className="space-y-4 text-sm leading-6 text-[#777777]">
              <p>
                Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat
                ut turpis. Suspendisse urna nibh, viverra non, semper suscipit,
                posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                Aliquam porttitor mauris sit amet orci. Aenean dignissim
                pellentesque felis.
              </p>
              <p>
                Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
                euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras
                consequat
              </p>
            </div>

            <hr className="border-gray-200 border-[1.4px] mt-12" />

            <blockquote className="italic text-gray-500  font-serif text-lg ">
              " Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam. "
            </blockquote>

            <hr className="border-gray-200 border-[1.4px] " />

            <p className="text-lg tracking-[0.2em]  text-[#2A2A2A] text-center">
              <span className="text-[#1874C1]  mr-2">JOIN US</span>
              WE COVER THE WHOLE WORLD
            </p>
          </div>
        </div>
  )
}

export default Hero