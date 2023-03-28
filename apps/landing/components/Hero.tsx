import classNames from "classnames";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const inter = Inter({ weight: "700", subsets: ["latin-ext"] });
const titleClasses =
  "text-2xl font-extrabold leading-tight tracking-tighter md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500";

function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Hero content */}
        <div className="relative mt-36 mb-10 md:mt-56">
          {/* Section header */}
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className={classNames({
                "mb-14": true,
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
              <Link
                target={"_blank"}
                href={`https://airtable.com/shrI1lJQCPsAujbVc`}
              >
                <button className="p-6 text-white bg-gradient-to-r from-violet-600 to-indigo-500  hover:bg-gradient-to-r hover:from-violet-700 hover:to-indigo-600 rounded-md">
                  Join the Movement
                </button>
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="mt-14 md:mt-20">
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
