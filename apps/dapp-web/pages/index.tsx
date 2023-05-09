import Image from "next/image";
import { Layout } from "../components/Layout";
import Head from "next/head";

export default function Web() {
	return (
		<>
			<Head>
				<title>Embrace: Creator</title>
			</Head>
			<Layout topNavigation={false}>
				<div className="flex-row items-center justify-center my-4 hidden">
					<Image
						src="/images/embrace-green.png"
						width={120}
						height={120}
						alt="Embrace"
						unoptimized
					/>

					<Image
						src="/images/embrace-community.png"
						width={360}
						height={100}
						alt="Embrace"
						className="mx-4 "
						unoptimized
					/>
				</div>
			</Layout>
		</>
	);
}
