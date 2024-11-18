import React from "react";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className="bg-[#f9f9f6] overflow-hidden relative">
      <div className="absolute top-[-28rem] left-0 bottom-0 right-0">
        <img src="header.svg" className="w-full h-screen" alt="Background Header" />
      </div>
      <div className="container mx-auto px-4 py-12 relative">
        {/* Main Content */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Key Benefits of Choosing Web Studio Nepal for DevOps
          </h1>
          <p className="text-gray-600">
            Signature is dedicated to crafting custom software solutions that enable administrators
            to efficiently manage every aspect of their business, from inventory and supply chain to
            distribution and sales.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto relative">
          {/* Left Column */}
          <div className="space-y-12">
            <div className="border rounded-lg shadow-lg p-6 bg-white">
              <div className="flex justify-center">
                <Image src="/s1.svg" alt="Scalable Solutions" width={100} height={100} />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
                <p className="text-gray-600">
                  Our DevOps solutions grow with your business needs. Whether your handling a
                  surge in traffic or launching a new feature, we provide seamless scalability
                  without requiring new hardware or complicated adjustments.
                </p>
              </div>
            </div>

            <div className="border rounded-lg shadow-lg p-6 bg-white">
              <div className="flex justify-center">
                <Image src="/s1.svg" alt="Enhanced Security" width={100} height={100} />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold mb-2">Enhanced Security</h3>
                <p className="text-gray-600">
                  Our DevOps practices include robust security features like data encryption,
                  multi-layer authentication, and compliance with regulatory standards.
                </p>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center lg:w-full lg:h-full">
            <Image
              src="/devops.svg"
              alt="DevOps Illustration"
              width={1000} // Default size
              height={1000} // Default size
              className="object-contain md:w-[400px] md:h-[400px] lg:w-full lg:h-full"
            />
          </div>

          {/* Right Column */}
          <div className="md:space-y-16 lg:space-y-12 space-y-12">
            <div className="border rounded-lg shadow-lg p-6 bg-white">
              <div className="flex justify-center">
                <Image src="/s1.svg" alt="Automated Efficiency" width={100} height={100} />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold mb-2">Automated Efficiency</h3>
                <p className="text-gray-600">
                  Automation is at the heart of our DevOps approach. By automating repetitive tasks,
                  we streamline development cycles and ensure consistently high software quality.Key Benefits of Choosing Web Studio Nepal for DevOps
                </p>
              </div>
            </div>

            <div className="border rounded-lg shadow-lg p-6 bg-white">
              <div className="flex justify-center">
                <Image src="/s1.svg" alt="Reduced Time-to-Market" width={100} height={100} />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold mb-2">Reduced Time-to-Market</h3>
                <p className="text-gray-600">
                  With faster development cycles and agile workflows,Key Benefits of Choosing Web Studio Nepal for DevOps we help you bring new features
                  and updates to market sooner.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Button Section */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-sky-500 hover:bg-blue-600 text-white font-semibold rounded-lg">
            Quick Enquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
