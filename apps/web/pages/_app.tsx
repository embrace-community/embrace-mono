import { AppProps } from "next/app";
// import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <h1>Layout</h1>
      <Component {...pageProps} />
    </>
  );
}
