import { AppProps } from "next/app";
import "../styles/globals.css";
// include styles from the ui package
import "ui/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
