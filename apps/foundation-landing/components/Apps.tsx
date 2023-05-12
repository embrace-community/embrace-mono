import { Manrope } from "next/font/google";
import classNames from "classnames";
import Image from "next/image";
import { App, IApp } from "./App";

const manrope = Manrope({ subsets: ["latin"], weight: "300" });

const apps: IApp[] = [
	{
		icon: (
			<Image
				src="/images/creator-2.png"
				width={120}
				height={120}
				alt="Embrace Creator"
			/>
		),
		lgIcon: (
			<Image
				src="/images/creator-2.png"
				width={160}
				height={160}
				alt="Embrace Creator"
			/>
		),
		title: "Embrace Community",
		description: `Our first application empowers Creators by enabling them to take full ownership of their content and connect directly with their community.\nUsing blockchain technology, Creators can now connect with and grow their community without the need for a middleman.`,
	},
	// {
	// 	icon: (
	// 		<Image
	// 			src="/images/tribe.png"
	// 			width={120}
	// 			height={120}
	// 			alt="Embrace Tribe"
	// 		/>
	// 	),
	// 	lgIcon: (
	// 		<Image
	// 			src="/images/tribe.png"
	// 			width={160}
	// 			height={160}
	// 			alt="Embrace Creator"
	// 		/>
	// 	),
	// 	title: "Tribe",
	// 	description:
	// 		"As technology continues to proliferate society we need to prioritise the health of our communities above all.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non risus eget ex luctus pulvinar. Phasellus nulla dui, ornare ac nulla id, aliquet pharetra sem. ",
	// },
];

export default function Building() {
	return (
		<article id="apps" className="flex flex-col gap-4 p-3">
			<h2
				className={classNames({
					"text-2xl tracking-tight md:text-3xl": true,
					[manrope.className]: true,
				})}
			>
				Apps
			</h2>
			<section className="mx-auto flex flex-col gap-3">
				{apps.map((app, index) => (
					<App app={app} key={index} />
				))}
			</section>
		</article>
	);
}
