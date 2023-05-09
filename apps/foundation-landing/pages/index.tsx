import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Principles from "@/components/Principles";
import Mission from "@/components/Mission";
import Contribute from "@/components/Contribute";
import Head from "next/head";
import Building from "@/components/Building";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<>
			<Head>
				<title>Embrace Community: Foundation</title>
			</Head>
			<div className="flex flex-col justify-center text-center max-w-5xl min-w-[390px] mx-auto sm:border-[1px] sm:border-light sm:shadow-light sm:shadow-2xl lg:my-2">
				<Navigation />
				<Hero />

				<Principles />

				<Mission />

				<Building />

				<Contribute />

				<Footer />
			</div>
		</>
	);
}
