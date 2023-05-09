import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Principles from "@/components/Principles";
import Mission from "@/components/Mission";
// import Contribute from "@/components/Contribute";
import Head from "next/head";
import Building from "@/components/Building";
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
				<Principles />
				<Mission />
				<Building />
				{/* <Contribute /> */}
				<Footer />
			</main>
		</>
	);
}
