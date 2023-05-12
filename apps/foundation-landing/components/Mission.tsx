import { Feature, IFeature } from "./Feature";
import { UsersThree, Heart, Globe } from "@phosphor-icons/react";
import { Manrope } from "next/font/google";
import classNames from "classnames";

const features: IFeature[] = [
	{
		icon: <UsersThree className="mx-auto my-4 h-12 w-12 text-light" />,
		title: "Community First",
		caption:
			"Community is our greatest resource.\n It is what makes us Human.",
		description:
			"As technology continues to proliferate society we need to prioritise the health of our communities above all.",
	},
	{
		icon: <Globe className="mx-auto my-4 h-12 w-12 text-light" />,
		title: "Decentralisation",
		caption:
			"With the power of decentralisation,\n we can transform our society.",
		description:
			"By distributing ownership and decision making, communities can direct and own the apps they use.",
	},
	{
		icon: <Heart className="mx-auto my-4 h-12 w-12 text-light" />,
		title: "Open Source",
		caption:
			"We recognise that open source\n software empowers communities.",
		description:
			// "We contribute to the wider community and empower others to develop their own community software.",
			"All of our software is open source to contribute to the wider community and empower others to develop their own community software.",
	},
];

const manrope = Manrope({ subsets: ["latin"], weight: "300" });

export default function Mission() {
	return (
		<article id="mission" className="flex flex-col gap-4 p-3">
			<h2
				className={classNames({
					"text-2xl tracking-tight md:text-3xl": true,
					[manrope.className]: true,
				})}
			>
				Mission
			</h2>
			<h3
				className={classNames({
					"my-2 text-xl italic tracking-tight md:my-4": true,
					[manrope.className]: true,
				})}
			>
				To create software that cultivates healthy and thriving
				communities.
			</h3>
			<section className="flex flex-col gap-4 lg:m-4 lg:flex-row">
				{features.map((item, index) => (
					<Feature item={item} key={index} />
				))}
			</section>
		</article>
	);
}
