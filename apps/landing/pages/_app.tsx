import React from "react";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { Roboto } from "next/font/google";
import classNames from "classnames";

const roboto = Roboto({ weight: "300", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={classNames({
        "bg-gradient-background bg-fixed bg-cover text-gray-800 tracking-tight":
          true,
        [roboto.className]: true,
      })}
    >
      <Component {...pageProps} />
    </div>
  );
}
