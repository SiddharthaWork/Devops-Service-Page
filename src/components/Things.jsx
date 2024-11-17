import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

const Things = () => {
  return (
    <div className="relative min-h-[550px] bg-[#34333f]/60 p-6 flex flex-col items-center">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/world.svg" // Replace with your image path
          alt="Background"
          layout="fill"
          objectPosition="70% center"
          quality={100}
          className="top-[64rem] "
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Content */}
      <h2 className="text-3xl md:text-4xl font-medium text-white my-12">
        Things You Might Be Wondering
      </h2>
      <div className="w-full max-w-6xl">
        <div className="space-y-4">
          <div className="border-none">
            <button
              className="bg-zinc-600/50 hover:bg-zinc-600/70 rounded-lg px-6 py-4 text-white text-left w-full focus:outline-none flex justify-between items-center"
            >
              What is DevOps, and why is it important?
              <IoIosArrowDown className="ml-2 text-white" />
            </button>
          </div>

          <div className="border-none">
            <button
              className="bg-zinc-600/50 hover:bg-zinc-600/70 rounded-lg px-6 py-4 text-white text-left w-full focus:outline-none flex justify-between items-center"
            >
              How quickly can Web Studio Nepal implement DevOps for my business?
              <IoIosArrowDown className="ml-2 text-white" />
            </button>
          </div>

          <div className="border-none">
            <button
              className="bg-zinc-600/50 hover:bg-zinc-600/70 rounded-lg px-6 py-4 text-white text-left w-full focus:outline-none flex justify-between items-center"
            >
              What kind of security measures are in place?
              <IoIosArrowDown className="ml-2 text-white" />
            </button>
          </div>

          <div className="border-none">
            <button
              className="bg-zinc-600/50 hover:bg-zinc-600/70 rounded-lg px-6 py-4 text-white text-left w-full focus:outline-none flex justify-between items-center"
            >
              Can DevOps scale with my business?
              <IoIosArrowDown className="ml-2 text-white" />
            </button>
          </div>

          <div className="border-none">
            <button
              className="bg-zinc-600/50 hover:bg-zinc-600/70 rounded-lg px-6 py-4 text-white text-left w-full focus:outline-none flex justify-between items-center"
            >
              What happens if there’s an outage?
              <IoIosArrowDown className="ml-2 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Things;
