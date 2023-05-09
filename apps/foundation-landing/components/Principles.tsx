import classNames from "classnames";
import { Manrope } from "next/font/google";
import Image from "next/image";

const manrope = Manrope({ subsets: ["latin"], weight: "300" });

export default function Principles() {
	return (
		<article
			id="principles"
			className="flex flex-col gap-4 bg-gradient-to-b from-primary/40 px-3 py-2"
		>
			<h2
				className={classNames({
					"text-center text-2xl tracking-tight md:text-3xl": true,
					[manrope.className]: true,
				})}
			>
				Our Principles
			</h2>
			<section className="mx-auto">
				<Image
					src={"/images/principles-large.png"}
					width={800}
					height={500}
					alt="Principles"
				/>
			</section>
		</article>
	);
}
