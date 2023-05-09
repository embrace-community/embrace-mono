import { Manrope } from "next/font/google";
import classNames from "classnames";
import Image from "next/image";
import { App, IApp } from "./App";

const manrope = Manrope({ subsets: ["latin"], weight: "300" });

const apps: IApp[] = [
	{
		icon: (
			<Image
				src="/images/creator.png"
				width={120}
				height={120}
				alt="Embrace Creator"
			/>
		),
		lgIcon: (
			<Image
				src="/images/creator.png"
				width={160}
				height={160}
				alt="Embrace Creator"
			/>
		),
		title: "Creator",
		description:
			"As technology continues to proliferate society we need to prioritise the health of our communities above all.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non risus eget ex luctus pulvinar. Phasellus nulla dui, ornare ac nulla id, aliquet pharetra sem. "
	},
	{
		icon: (
			<Image
				src="/images/tribe.png"
				width={120}
				height={120}
				alt="Embrace Tribe"
			/>
		),
		lgIcon: (
			<Image
				src="/images/tribe.png"
				width={160}
				height={160}
				alt="Embrace Creator"
			/>
		),
		title: "Tribe",
		description:
			"As technology continues to proliferate society we need to prioritise the health of our communities above all.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non risus eget ex luctus pulvinar. Phasellus nulla dui, ornare ac nulla id, aliquet pharetra sem. "
	}
];

export default function Building() {
	return (
		<div id="apps" className="flex flex-col p-3 gap-4">
			<h2
				className={classNames({
					"text-2xl md:text-3xl tracking-tight": true,
					[manrope.className]: true
				})}
			>
				We&apos;re Building
			</h2>
			<div className="mx-auto flex flex-col gap-3">
				{apps.map((app, index) => (
					<App app={app} key={index} />
				))}
			</div>
		</div>
	);
}
