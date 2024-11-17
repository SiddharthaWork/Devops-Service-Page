import React from 'react';
import Image from 'next/image';
const Hero = () => {
  return (
    <div className="bg-[#0F0B1E] relative w-full h-auto pt-12 pb-16 md:h-[27rem]">
      <div className="absolute left-[30rem]  overflow-hidden overflow-x-hidden overflow-y-hidden">
        <img
          className="w-full pt-8 object-cover overflow-hidden opacity-80 mix-blend-overlay"
          src="background.svg"
          alt="background image"
        />
      </div>

      <div className='max-w-5xl mx-auto px-4'>

        <div className='text-white font-bold text-2xl md:text-4xl lg:text-5xl pb-4 text-center'>
          <h1>
            Empowering Your Business with DevOps: <br className='hidden md:block' />
            Faster, Smarter Development from Web<br className='hidden lg:block' />
            Studio Nepal
          </h1>
        </div>

        <div className='text-white text-sm md:text-base lg:text-lg text-center max-w-5xl mx-auto'>
          <p>
            Open with a clear description of what DevOps is in straightforward terms, explaining how it connects development (building software) and operations (running software) to deliver high-quality applications faster. Mention that businesses can benefit from better collaboration, efficiency, and streamlined workflows with DevOps.
          </p>
        </div>

        <div className='flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 justify-center items-center mt-8'>
          <button className='px-6 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 z-30'>
            Quick Enquiry
          </button>
          <button className='px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-[#0F0B1E] transition duration-75 ease-in-out z-40'>
            Call Us: +977 9703958747
          </button>
        </div>

      </div>
    </div>
  );
}

export default Hero;
