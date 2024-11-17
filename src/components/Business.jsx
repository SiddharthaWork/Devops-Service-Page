import React from "react";
import Image from "next/image";

const Business = () => {
  return (
    <div className="relative min-h-[40vh] w-full overflow-hidden bg-[#c2c2c2]/20 px-4 py-16 sm:px-6 lg:px-8 text-white">
      <div className="absolute inset-0 -z-10">
        <img src="business.svg" className="w-full h-full object-cover"/>

        {/* Optional overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            DevOps Use Cases for Diverse Business Needs
          </h1>
          <p className="mx-auto mt-4 max-w-6xl text-lg text-white">
            Our DevOps solutions adapt to startups for rapid growth, streamline SMB operations for efficiency, and provide
            enterprises with scalable, secure infrastructure for large-scale projects.
          </p>
        </div>

        <div className="mt-16 h-full grid gap-8 lg:grid-cols-2">
          {/* Left side - Illustration */}
          <div className="flex items-center justify-center lg:justify-start">
            <div className="relative">
              <img
                src="/dev.svg"
                alt="DevOps Illustration"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right side - Features */}
          <div className="space-y-20">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center mr-2">
                  <img src="/startup.svg" alt="" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold ">For Startups</h3>
                <p className="mt-2 ">
                  Our flexible DevOps solutions enable startups to launch new features quickly, efficiently scale operations,
                  and avoid costly infrastructure investments as their business grows.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center mr-2">
                  <img src="/small.svg" alt="" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold ">For Small to Medium Businesses (SMBs)</h3>
                <p className="mt-2 ">
                  SMBs can reduce operational costs by leveraging cloud-based solutions with efficient development cycles.
                  This setup allows smaller teams to handle larger, more complex projects with ease.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center mr-2">
                  <img src="/enterprise.svg" alt="" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold ">For Enterprises</h3>
                <p className="mt-2 ">
                  Large organizations benefit from our enterprise-grade DevOps solutions, designed to handle high data
                  volumes, complex integrations, and stringent security standards, providing the infrastructure necessary for
                  expansive operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Business;
