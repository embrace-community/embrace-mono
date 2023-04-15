import classNames from "classnames";
import { Inter, Manrope } from "next/font/google";
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

const manrope = Manrope({ weight: "300", subsets: ["latin-ext"] });

function Feature({
  title,
  description,
  image,
  benefits = [],
  rtl = false,
}: FeatureProps) {
  return (
    <div className="md:grid md:grid-cols-12 md:gap-6 items-center px-4 py-2">
      {/* MD Image */}
      <div
        className={classNames({
          "hidden md:flex max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-4 md:mb-0":
            true,
          "md:order-1": !rtl,
          rtl: rtl,
        })}
      >
        <Image
          className={classNames({
            "max-w-full mx-auto md:max-w-none h-auto rounded-lg ": true,
          })}
          src={image}
          width="540"
          height="405"
          alt="Feature"
        />
      </div>
      {/* Content */}
      <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
        <div
          className={classNames({
            "md:pr-8 lg:pr-16 xl:pr-20": !rtl,
            "md:pl-8 lg:pl-16 xl:pl-20": rtl,
          })}
        >
          <h3
            className={classNames({
              "text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl mb-4":
                true,
              [manrope.className]: true,
            })}
          >
            {title}
          </h3>
          {/* SM Image */}
          <div
            className={classNames({
              "flex md:hidden max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-4 md:mb-0":
                true,
              "md:order-1": !rtl,
              rtl: rtl,
            })}
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
          <p className="text-xl text-gray-700 mb-4 pl-1">{description}</p>

          <ul className="text-lg text-gray-700 -mb-2  pl-1">
            {benefits.map((benefit: string, index: number) => (
              <li className="flex items-center mb-2" key={index}>
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
