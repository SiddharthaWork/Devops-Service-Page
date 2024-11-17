import React from 'react';

const End = () => {
    return (
        <div className="relative flex items-center overflow-hidden">
            <section className="w-full md:w-[70%] mx-auto bg-white px-6 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
                    {/* Placeholder Box */}
                    <div className="bg-[#c2c2c2] h-56 sm:h-64 md:h-80 w-[90%] sm:w-[80%] md:w-full mx-auto sm:mx-0 rounded-lg">
                        {/* Add your image or decorative content here */}
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left max-w-md mx-auto sm:mx-0">
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 leading-tight">
                            Streamline Your Development
                            <br />
                            with DevOps Services
                        </h2>
                        <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                            In today’s fast-paced digital landscape, rapid, reliable development is crucial to staying competitive. Web Studio Nepal’s DevOps services provide businesses with efficient workflows, enabling faster releases, enhanced scalability, and robust security across all stages of software development. Our CI/CD Pipeline automates testing and deployment, allowing for quicker updates without sacrificing quality.
                        </p>
                        <button className="bg-[#31B1E7] hover:bg-[#31B1E7]/90 px-6 py-3 font-medium text-white rounded-lg">
                            Request a Quote
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default End;
