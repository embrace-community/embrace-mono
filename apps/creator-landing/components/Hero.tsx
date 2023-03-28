import classNames from "classnames";
import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";
import CallToAction from "./CallToAction";

const inter = Inter({ weight: "700", subsets: ["latin-ext"] });
const titleClasses =
  "text-2xl font-extrabold leading-tight tracking-tighter md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500";

function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Hero content */}
        <div className="relative mt-36 md:mt-48">
          {/* Section header */}
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className={classNames({
                "mb-12 md:mb-24": true,
                [inter.className]: true,
              })}
            >
              <span
                className={classNames({
                  [titleClasses]: true,
                })}
              >
                Own your platform
                {/* on decentralised infrastructure */}
              </span>
              <br />
              <span
                className={classNames({
                  [titleClasses]: true,
                })}
              >
                Embrace your community
              </span>
            </h1>

            <div className="w-full sm:w-auto">
              <CallToAction label="Join the Movement" />
            </div>
          </div>

          {/* Hero image */}
          <div className="mt-14 md:mt-20">
            <div className="relative flex justify-center items-center">
              <Image
                src={`/images/illustration.png`}
                width="800"
                height="604"
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
