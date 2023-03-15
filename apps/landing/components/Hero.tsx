import classNames from "classnames";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const inter = Inter({ weight: "700", subsets: ["latin-ext"] });

function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Hero content */}
        <div className="relative mt-36 mb-10 md:mt-56 md:mb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className={classNames({
                "text-2xl font-extrabold leading-tight tracking-tighter md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 mb-0":
                  true,
                [inter.className]: true,
              })}
            >
              Own your platform
            </h1>
            <h1
              className={classNames({
                "text-2xl font-extrabold leading-tight tracking-tighter md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 mb-14 md:mb-24":
                  true,
                [inter.className]: true,
              })}
            >
              Embrace your community
            </h1>

            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center ">
              <div>
                <Link
                  href={`/`}
                  className="p-6 text-white bg-gradient-to-r from-violet-600 to-indigo-500  hover:bg-gradient-to-r hover:from-violet-700 hover:to-indigo-600 w-full mb-4 rounded-md sm:w-auto sm:mb-0"
                >
                  Join the Movement
                </Link>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="mt-20 md:mt-28">
            <div className="relative flex justify-center items-center">
              <Image
                className="mx-auto rounded-md"
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
