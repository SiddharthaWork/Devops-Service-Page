import React from 'react';

const Comprehensive = () => {
  const services = [
    {
      title: "CI/CD Pipeline",
      description:
        "Our Continuous Integration and Continuous Deployment services automate testing and deployment, making updates faster and more reliable. This service ensures your software is always ready for release, without compromising quality.",
    },
    {
      title: "Infrastructure as Code (IaC)",
      description:
        "IaC allows your infrastructure to be managed through code, ensuring consistent configuration across all environments and eliminating manual setup errors. This scalable infrastructure management approach lets you adapt quickly to new business requirements.",
    },
    {
      title: "Monitoring & Alerts",
      description:
        "We provide real-time monitoring, tracking system health and performance continuously. With alerts for any issues, we ensure fast response and resolution to prevent disruptions in your operations.",
    },
    {
      title: "Configuration Management",
      description:
        "Our team ensures that your software works smoothly across various environments by managing configurations carefully. This includes maintaining consistency, testing setups, and integrating systems to reduce compatibility issues.",
    },
  ];

  return (
    <div className="bg-zinc-800 min-h-[40rem] px-4 py-16">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Comprehensive DevOps Services
          </h1>
          <p className="text-zinc-300 text-lg leading-relaxed">
            Our DevOps offerings include automated CI/CD pipelines for faster,
            reliable deployments, and Infrastructure as Code (IaC) to ensure
            consistent, scalable setups. With continuous monitoring,
            configuration management, and robust security compliance, we keep
            your operations seamless, secure, and compliant with standards like
            GDPR and ISO.
          </p>
        </div>
    
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
                className="bg-zinc-800 p-6 sm:p-8 rounded-lg flex flex-col sm:flex-row gap-6"
            >
              {/* Image */}
              <div className="flex-shrink-0 relative mx-auto sm:mx-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 flex items-center justify-center">
                  <img
                    src="cicd.svg"
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comprehensive;
