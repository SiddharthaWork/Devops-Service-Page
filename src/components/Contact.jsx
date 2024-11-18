import React from 'react';

const Contact = () => {
  return (
    <section className="bg-[#0D0D17] min-h-[10vh] flex items-center py-8 md:py-16">
      <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img src="contact.svg" alt="Contact" className="w-full h-auto" />
        </div>
        {/* Image Section */}

        {/* Text Section */}
        <div className="max-w-xl md:max-w-2xl space-y-6  text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Empowering Your
          </h2>
          <h2 className="text-3xl sm:text-4xl text-white">
            Business with DevOps
          </h2>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="text-white text-xl sm:text-2xl md:text-3xl text-left">
                Call us on
              </span>
              <a
                href="tel:+9779802346665"
                className="text-white text-xl sm:text-2xl md:text-3xl hover:text-blue-400 transition-colors"
              >
                +977 9802346665
              </a>
            </div>
            <button
              className="bg-[#38BDF8] hover:bg-[#38BDF8]/90 text-white rounded-md px-8 py-4 text-lg md:text-xl"
            >
              Drop in a message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
