import Head from "next/head";
import React from "react";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FadeIn from "@/components/Motion/FadeIn";
import Technologies from "@/components/Technologies";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>

        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        <meta name="description" content="Embrace your community" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Embrace Community</title>
      </Head>

      <div className="flex min-h-screen overflow-hidden">
        <FadeIn up={false}>
          <Header />
        </FadeIn>

        <main className="grow">
          <FadeIn>
            <Hero />
          </FadeIn>

          <Features />

          <FadeIn up={false}>
            <Technologies />
          </FadeIn>

          <FadeIn>
            <div className="w-full text-center pb-6 md:pb-14 sm:w-auto">
              <CallToAction label="Join the Movement" />
            </div>
          </FadeIn>
        </main>

        <Footer />
      </div>
    </>
  );
}
