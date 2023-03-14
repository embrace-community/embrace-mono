import classNames from "classnames";
import { Inter } from "next/font/google";
import React from "react";
import Feature from "./Feature";

const inter = Inter({ weight: "300", subsets: ["latin"] });

function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1
              className={classNames({
                "h2 mb-4": true,
                [inter.className]: true,
              })}
            >
              Put your Community first
            </h1>
            <p className="text-xl text-gray-700">
              Engage with your community on your terms whilst sharing content
              with your members across multiple platforms.
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {/* 1st item */}
            <Feature
              title="Own your platform"
              description="Your content and community are the result of your dedicated work, why hand over ownership to a platform that can remove your content at any moment?  Instead, take full custody of your creative work."
              image="https://place-hold.it/405/dadada"
              benefits={["Control your content", "Engage with your community"]}
            />

            {/* 2nd item */}
            <Feature
              title="Decentralised Technologies"
              description="Web3 technologies enable decentralisation, empowering creatives by ensuring no centralised gatekeeper can censure your content or de-platform you. "
              image="https://place-hold.it/405/dadada"
              benefits={[
                "Permissionless publishing",
                "No centralised gatekeepers",
                "Blockchain based",
                "IPFS hosted content",
              ]}
              rtl
            />

            {/* 3rd item */}
            <Feature
              title="Embrace your Community"
              description="Grow your community across multiple platforms and engage with members through your own community site."
              image="https://place-hold.it/405/dadada"
              benefits={[
                "You own your platform",
                "Create members only content",
                "Monetize your content",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
