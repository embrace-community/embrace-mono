import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="icon" href="/images/embrace-foundation.png" />
				<link
					rel="apple-touch-icon"
					href="/images/embrace-foundation.png"
				/>
				<meta property="og:title" content="Embrace Community" />
				<meta
					property="og:description"
					content="Enabling communities to take back the reigns and steer their own destiny."
				/>
				<meta
					property="og:image"
					content="/images/embrace-foundation.png"
				/>
				<meta property="og:image:width" content="120" />
				<meta property="og:image:height" content="120" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
