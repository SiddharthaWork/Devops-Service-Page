import React from 'react';

const Process = () => {
  return (
    <div className=" py-14 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 ">
        <img
          src="benfitsbg.svg"
          className="w-full h-full object-cover"
          alt="Background Header"
        />
      </div>

      {/* Content Section */}
      <div className="relative  text-white min-h-screen p-4 md:p-8 z-30">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl text-center text-black mb-4">
            Our DevOps Process
          </h1>
          <p className="text-center text-black mb-12 max-w-3xl mx-auto">
            Our DevOps process covers every stage, ensuring that your software
            development and IT infrastructure run smoothly and efficiently.
          </p>

          <div className="relative">
            {/* Central Circle */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <img
                src="process.svg"
                alt="DevOps Process"
                className="w-1/3 sm:w-1/4 md:w-1/2 h-[30vh] sm:mt-4"
              />
            </div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
              {[
                {
                  title: 'Consultation & Strategy Development',
                  description:
                    'We begin with a detailed consultation to understand your unique business goals and needs. This allows us to tailor a DevOps strategy that integrates seamlessly with your existing workflows.',
                  iconPosition: 'left',
                },
                {
                  title: 'Automation & CI/CD Setup',
                  description:
                    'We establish a Continuous Integration/Continuous Deployment (CI/CD) pipeline, which automates testing, integration, and deployment of code changes.',
                  iconPosition: 'bottom-right',
                },
                {
                  title: 'Infrastructure Management',
                  description:
                    'We manage your cloud infrastructure with Infrastructure as Code (IaC) practices, keeping your systems secure, consistent, and scalable.',
                  iconPosition: 'right',
                },
                {
                  title: 'Continuous Monitoring & Support',
                  description:
                    'We monitor performance and system health 24/7 to ensure your cloud services operate smoothly. We minimize downtime by proactively identifying issues.',
                  iconPosition: 'top-right',
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-lg py-4 px-4 shadow-lg flex flex-col items-center text-center"
                >
                  <div className="bg-slate-100/30 border rounded-lg px-8 py-20 shadow-md flex flex-col justify-between items-center w-full h-full relative">
                    <h3 className="text-xl font-medium mb-2 text-black">
                      {step.title}
                    </h3>
                    <p className="text-black">{step.description}</p>

                    {/* Icon placement based on position */}
                    {step.iconPosition === 'top-right' && (
                      <img
                        src="phone.svg"
                        alt="Phone Icon"
                        className="absolute top-4 right-4 w-16 h-16 text-blue-500"
                      />
                    )}
                    {step.iconPosition === 'right' && (
                      <img
                        src="phone.svg"
                        alt="Phone Icon"
                        className="absolute top-4 left-4 w-16 h-16 text-blue-500"
                      />
                    )}
                    {step.iconPosition === 'left' && (
                      <img
                        src="phone.svg"
                        alt="Phone Icon"
                        className="absolute bottom-4 left-4 w-16 h-16 text-blue-500"
                      />
                    )}
                    {step.iconPosition === 'bottom-right' && (
                      <img
                        src="phone.svg"
                        alt="Phone Icon"
                        className="absolute bottom-6 right-4 w-16 h-16 text-blue-500"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
