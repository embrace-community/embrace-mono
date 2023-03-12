import React from "react";

import Header from "../partials/Header";
import Hero from "../partials/Hero";
import Features from "../partials/Features";

import Footer from "../partials/Footer";

function Home() {
	return (
		<div className="flex flex-col min-h-screen overflow-hidden">
			{/*  Site header */}
			<Header />

			{/*  Page content */}
			<main className="grow">
				{/*  Page sections */}
				<Hero />
				<Features />
			</main>

			{/*  Site footer */}
			<Footer />
		</div>
	);
}

export default Home;
