import React from "react";
import Feature from "./Feature";
import FadeIn from "../Motion/FadeIn";
import Highlight from "../Highlight";
import classNames from "classnames";
import { Inter } from "next/font/google";

const inter = Inter({ weight: "300", subsets: ["latin"] });

interface Feature {
  title: string;
  description: string;
  image: string;
  benefits: string[];
  rtl?: boolean;
}

const features: Feature[] = [
  {
    title: "Own your platform",
    description:
      "Your content and community are the result of your dedicated work, why not take full custody of your creative efforts?",
    image: `/images/creator.jpg`,
    benefits: [
      "Your platform comes first",
      "Engage with your community",
      "Monetise your content",
    ],
  },
  {
    title: "Decentralisation",
    description:
      "We utilise the latest technologies to decentralise ownership in order to empower creatives. This ensures no centralised gatekeeper can censure your content or de-platform you.",
    image: `/images/decentralised.png`,
    benefits: [
      "Permissionless publishing",
      "No centralised gatekeepers",
      "Blockchain based, decentralised content",
    ],
    rtl: true,
  },
  {
    title: "Embrace your Community",
    description:
      "Grow your community without boundaries and engage with members through your own community platform.",
    image: `/images/community.jpg`,
    benefits: [
      "Gather members across multiple platforms",
      "Foster connection and engagement",
      "Build a community around your content",
    ],
    // Authentic / closer
  },
];

function Features() {
  return (
    <section>
      <div className="w-full mx-auto">
        <div className="py-12 md:py-20">
          {/* Section header */}

          <FadeIn up={false}>
            <Highlight>
              <h1
                className={classNames({
                  "text-2xl font-extrabold leading-tight tracking-tighter md:text-4xl mb-4":
                    true,
                  [inter.className]: true,
                })}
              >
                Put your Community first
              </h1>
              <p className="text-xl text-gray-700">
                Engage with your community on your terms whilst sharing content
                with your members across multiple platforms.
              </p>
            </Highlight>
          </FadeIn>

          {/* Features */}
          <div className="max-w-6xl mx-auto grid gap-12 md:gap-20">
            {features.map((feature: Feature, index: number) => {
              return (
                <FadeIn>
                  <Feature
                    key={feature.title}
                    title={feature.title}
                    description={feature.description}
                    image={feature.image}
                    benefits={feature.benefits}
                    rtl={feature.rtl}
                  />
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
