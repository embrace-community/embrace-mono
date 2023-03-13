import React from "react";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { Nunito } from "next/font/google";
import classNames from "classnames";

const nunito = Nunito({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={classNames({
        "bg-gradient-background bg-fixed text-gray-800 tracking-tight": true,
        [nunito.className]: true,
      })}
    >
      <Component {...pageProps} />
    </div>
  );
}
