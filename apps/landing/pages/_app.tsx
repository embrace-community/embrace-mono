import "@/styles/globals.css";
import "@/styles/theme.css";
import "@/styles/utility-patterns.css";
import type { AppProps } from "next/app";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="font-inter antialiased bg-gradient-background bg-fixed text-gray-800 tracking-tight">
      <Component {...pageProps} />
    </div>
  );
}
