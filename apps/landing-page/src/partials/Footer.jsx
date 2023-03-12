import React from "react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer>
			<div
				className="py-12 md:py-16 text-center"
				data-aos="fade-up"
				data-aos-delay="400"
			>
				<a
					className="btn text-white bg-violet-600 hover:bg-violet-700 w-full mb-4 rounded-md sm:w-auto sm:mb-0"
					href="#0"
				>
					Join the Movement
				</a>
			</div>
		</footer>
	);
}

export default Footer;
