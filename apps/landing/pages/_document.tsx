import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Embrace Community</title>
			</Head>

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
