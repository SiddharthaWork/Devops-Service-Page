import React from "react";
import { Settings2 } from "lucide-react";
import Image from "next/image";

const Choose = () => {
  const features = [
    {
      title: "Experienced Team",
      description:
        "Our DevOps specialists bring years of experience across industries, allowing us to deliver DevOps solutions that meet high standards for speed, reliability, and security.",
      alignment: "right",
    },
    {
      title: "Customized Solutions",
      description:
        "We understand that every business has unique requirements. Our approach ensures that your DevOps setup is tailored to meet the specific needs of your industry, customers, and growth goals.",
      alignment: "left",
    },
    {
      title: "24/7 Support",
      description:
        "With round-the-clock support, our team is available to assist with any questions or technical issues, providing peace of mind and continuous system uptime.",
      alignment: "right",
    },
    {
      title: "High Reliability",
      description:
        "Our 99.9% uptime guarantee reflects our commitment to keeping your operations running smoothly. This reliability helps minimize costly disruptions and keeps your applications available to customers.",
      alignment: "left",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Why Choose Web Studio Nepal for DevOps?
        </h2>
        <p className="text-muted-foreground">
          Our experienced team delivers tailored DevOps solutions designed for reliability and high performance, ensuring your systems are optimized for your unique business needs. With 24/7 support and a 99.9% uptime guarantee, we keep your operations seamless and available to customers around the clock.
        </p>
      </div>

      {/* Features */}
      <div className="max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              feature.alignment === "right" ? "md:ml-auto" : "md:mr-auto"
            } mb-16 last:mb-0 md:max-w-[590px] relative`}
          >
            <div className="border-0 bg-transparent shadow-none">
              <div className="p-6">
                <div
                  className={`flex flex-col md:flex-row gap-6 items-center ${
                    feature.alignment === "left"
                      ? "md:flex-row-reverse text-left"
                      : "text-right"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`relative flex-shrink-0 ${
                      feature.alignment === "left" ? "md:ml-6 left-16" : "md:mr-6 right-16"
                    }`}
                  >
                    <div className="  relative flex items-center justify-center">
                      <img src="choose.svg"  />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {feature.description}
                    </p>
                    <div
                      className={`h-1 w-full bg-sky-500 ${
                        feature.alignment === "right" ? "md:ml-auto" : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choose;
