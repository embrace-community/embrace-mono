import classNames from "classnames";
import { Manrope } from "next/font/google";
import Image from "next/image";

const manrope = Manrope({ subsets: ["latin"], weight: "300" });

export default function Principles() {
	return (
		<div
			id="principles"
			className="flex flex-col py-2 px-3 gap-4 bg-gradient-to-b from-primary/40"
		>
			<h2
				className={classNames({
					"text-2xl md:text-3xl text-center tracking-tight": true,
					[manrope.className]: true
				})}
			>
				Our Principles
			</h2>
			<div className="mx-auto">
				<Image
					src={"/images/principles-large.png"}
					width={800}
					height={500}
					alt="Principles"
				/>
			</div>
		</div>
	);
}
