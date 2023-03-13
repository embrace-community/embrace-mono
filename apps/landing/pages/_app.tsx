import React from "react";
import type { AppProps } from "next/app";
import ClientOnlyWrapper from "@/components/ClientOnlyWrapper";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="font-inter bg-gradient-background bg-fixed text-gray-800 tracking-tight">
      <ClientOnlyWrapper>
        <Component {...pageProps} />
      </ClientOnlyWrapper>
    </div>
  );
}
