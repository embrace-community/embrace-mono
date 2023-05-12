import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import Mission from "@/components/Mission";
// import Contribute from "@/components/Contribute";
import Apps from "@/components/Apps";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<>
			<Head>
				<title>Embrace Community: Foundation</title>
			</Head>
			<main className="mx-auto flex min-w-[390px] max-w-5xl flex-col justify-center text-center sm:border-[1px] sm:border-light sm:shadow-2xl sm:shadow-light lg:my-2">
				<Header />
				<Hero />
				<Mission />
				<Apps />
				<Values />
				{/* <Contribute /> */}
				<Footer />
			</main>
		</>
	);
}
