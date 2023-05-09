import Document, {
	DocumentContext,
	DocumentInitialProps,
	Html,
	Head,
	Main,
	NextScript
} from "next/document";

class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);

		return initialProps;
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="icon" href="/images/creator-app.png" />
					<link rel="apple-touch-icon" href="/images/creator-app.png" />
					<meta property="og:title" content="Embrace: Creator" />
					<meta property="og:description" content="Embrace" />
					<meta property="og:image" content="/images/creator-app.png" />
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
}

export default MyDocument;
