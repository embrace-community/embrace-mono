import React from "react";
import Header from "./Header";
import Feature from "./Feature";
import FadeIn from "../Motion/FadeIn";

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
      "Your content and community are the result of your dedicated work, why hand over ownership to a platform that can remove your content at any moment?  Instead, take full custody of your creative work.",
    image: `/images/creator.jpg`,
    benefits: ["Control your content", "Engage with your community"],
  },
  {
    title: "Decentralised Technologies",
    description:
      "Web3 technologies enable decentralisation, empowering creatives by ensuring no centralised gatekeeper can censure your content or de-platform you. ",
    image: `/images/decentralised.png`,
    benefits: [
      "No centralised gatekeepers",
      "Permissionless publishing",
      "Blockchain based",
      "IPFS hosted content",
    ],
    rtl: true,
  },
  {
    title: "Embrace your Community",
    description:
      "Grow your community across multiple platforms and engage with members through your own community site.",
    image: `/images/community.jpg`,
    benefits: [
      "Grow your community",
      "Engage with your members",
      "Own your platform",
    ],
  },
];

function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}

          <FadeIn>
            <Header />
          </FadeIn>

          {/* Features */}
          <div className="grid gap-12 md:gap-20">
            {features.map((feature: Feature, index: number) => {
              return (
                <FadeIn rotate={feature.rtl ? -1 : 1}>
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
