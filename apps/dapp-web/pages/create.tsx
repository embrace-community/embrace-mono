import Head from "next/head";
import { CreateCommunity } from "../components/CreateCommunity";
import { Layout } from "../components/Layout";

// import { Layout, CreateCommunity } from "ui";

export default function Create() {
	return (
		<>
			<Head>
				<title>Embrace: Creator</title>
			</Head>
			<Layout title="Create Community">
				<CreateCommunity />
			</Layout>
		</>
	);
}
