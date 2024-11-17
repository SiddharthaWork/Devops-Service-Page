import React from 'react';

const Header = () => {
  return (
    <div className="w-full px-4 md:px-12 text-justify mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="w-full md:w-full mb-6 md:mb-0">
          <img src="about.svg" alt="About DevOps" className="w-full h-auto" />
        </div>

        {/* Text Section */}
        <div className="space-y-4 w-full md:w-[80%] mx-auto md:leading-7">
          <h1 className="text-center text-2xl md:text-4xl my-6 md:my-10">
            What is DevOps?
          </h1>
          <p className="text-xl">
            DevOps is an approach that unites software development (Dev) and IT operations (Ops) into a single, streamlined process. This collaboration results in faster, high-quality software releases with fewer issues, enabling businesses to meet evolving market demands quickly and efficiently. DevOps also improves communication across teams, reduces costs by minimizing rework, and helps build scalable systems adaptable to growth.
          </p>
          <p className="text-xl">
            By implementing DevOps, companies experience rapid deployment cycles and robust system reliability, achieving a consistent and enhanced customer experience. Our expertise in DevOps helps your team develop, test, and release applications more predictably and efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
