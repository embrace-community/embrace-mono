import React, { useState } from "react";
import Modal from "../utils/Modal";

import HeroImage from "../images/hero-image-01.jpg";

function HeroHome() {
	const [videoModalOpen, setVideoModalOpen] = useState(false);

	return (
		<section>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
				{/* Hero content */}
				<div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
					{/* Section header */}
					<div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
						<h1 className="h1 mb-2" data-aos="fade-up">
							Own your content
						</h1>
						<h1 className="h1 mb-4" data-aos="fade-up">
							Embrace your community
						</h1>
						<p
							className="text-xl text-gray-400 mb-8"
							data-aos="fade-up"
							data-aos-delay="200"
						></p>
						<div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center ">
							<div data-aos="fade-up" data-aos-delay="400">
								<a
									className="btn text-white bg-violet-600 hover:bg-violet-700 w-full mb-4 rounded-md sm:w-auto sm:mb-0"
									href="#0"
								>
									Start free trial
								</a>
							</div>
							<div data-aos="fade-up" data-aos-delay="600">
								<a
									className="btn text-white bg-gray-400 hover:bg-gray-500 w-full rounded-md sm:w-auto sm:ml-4"
									href="#0"
								>
									Learn more
								</a>
							</div>
						</div>
					</div>

					{/* Hero image */}
					<div>
						<div
							className="relative flex justify-center items-center "
							data-aos="fade-up"
							data-aos-delay="200"
						>
							<img
								className="mx-auto rounded-md"
								src={HeroImage}
								width="1024"
								height="504"
								alt="Hero"
							/>
							<a
								className="absolute group"
								href="#0"
								onClick={(e) => {
									e.preventDefault();
									e.stopPropagation();
									setVideoModalOpen(true);
								}}
								aria-controls="modal"
							></a>
						</div>

						{/* Modal */}
						<Modal
							id="modal"
							ariaLabel="modal-headline"
							show={videoModalOpen}
							handleClose={() => setVideoModalOpen(false)}
						>
							<div className="relative pb-9/16">
								<iframe
									className="absolute w-full h-full"
									src="https://player.vimeo.com/video/174002812"
									title="Video"
									allowFullScreen
								></iframe>
							</div>
						</Modal>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroHome;
