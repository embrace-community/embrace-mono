import { GoogleOAuthProvider } from "@react-oauth/google";
import { AppProps } from "next/app";
import "../styles/globals.css";
// include styles from the ui package
import "ui/styles.css";
import env from "../utils/env";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<GoogleOAuthProvider clientId={env.oauth_client_id}>
			<Component {...pageProps} />
		</GoogleOAuthProvider>
	);
}
