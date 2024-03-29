import classNames from "classnames";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "200" });

export default function Hero() {
	return (
		<article className="mb-2 flex flex-col gap-6 py-3 sm:flex-row sm:items-center sm:justify-center sm:px-6 sm:py-4 md:border-b-[1px] md:border-b-light">
			<section className="sm:w-2/5">
				<h2
					className={classNames({
						"text-2xl tracking-tight md:text-3xl": true,
						[inter.className]: true,
					})}
				>
					creating open source <br />
					software to <i>cultivate</i> <br />
					<i>healthy communities</i>
				</h2>
				{/* <button className="mt-3 cursor-pointer rounded-md bg-primary p-3 text-white">
					spread the word
				</button> */}
			</section>
			{/* Image from Medicine Festival 2022 by Mateusz Dudek - Blue Sky Pixels */}
			<section className="mx-auto min-h-[224px] w-full bg-[url('/images/community-mobile.jpg')] bg-cover bg-bottom sm:min-h-[320px] sm:w-3/5 sm:rounded-r-md sm:bg-[url('/images/community.jpg')]"></section>
		</article>
	);
}
