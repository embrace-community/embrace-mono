import classNames from "classnames";
import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
  benefits?: string[];
  rtl?: boolean;
}

const tick = (
  <svg
    className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
    viewBox="0 0 12 12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
  </svg>
);

const inter = Inter({ weight: "300", subsets: ["latin"] });

function Feature({
  title,
  description,
  image,
  benefits = [],
  rtl = false,
}: FeatureProps) {
  return (
    <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
      {/* Image */}
      <div
        className={classNames({
          "max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0":
            true,
          "md:order-1": !rtl,
          rtl: rtl,
        })}
        data-aos="fade-up"
      >
        <Image
          className={classNames({
            "max-w-full mx-auto md:max-w-none h-auto rounded-md ": true,
          })}
          src={image}
          width="540"
          height="405"
          alt="Feature"
        />
      </div>
      {/* Content */}
      <div
        className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
        data-aos="fade-right"
      >
        <div
          className={classNames({
            "md:pr-8 lg:pr-16 xl:pr-20": !rtl,
            "md:pl-8 lg:pl-16 xl:pl-20": rtl,
          })}
        >
          <h3
            className={classNames({
              "h3 mb-4": true,
              [inter.className]: true,
            })}
          >
            {title}
          </h3>
          <p className="text-xl text-gray-700 mb-4 pl-1">{description}</p>
          <ul className="text-lg text-gray-700 -mb-2  pl-1">
            {benefits.map((benefit) => (
              <li className="flex items-center mb-2">
                {tick}
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Feature;
