import React from "react";

function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-0" data-aos="fade-up">
              Own your platform
            </h1>
            <h1 className="h1" data-aos="fade-up">
              Embrace your community
            </h1>

            <div className="max-w-xs mx-auto mt-28 sm:max-w-none sm:flex sm:justify-center ">
              <div data-aos="fade-up" data-aos-delay="400">
                <a className="p-4 text-white bg-violet-600 hover:bg-violet-700 w-full mb-4 rounded-md sm:w-auto sm:mb-0">
                  Join the Movement
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <a className="p-4 text-white bg-gray-400 hover:bg-gray-500 w-full rounded-md sm:w-auto sm:ml-4">
                  Docs
                </a>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="mt-28">
            <div
              className="relative flex justify-center items-center "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                className="mx-auto rounded-md"
                src={`https://place-hold.it/1024x504/dadada`}
                width="1024"
                height="504"
                alt="Illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
