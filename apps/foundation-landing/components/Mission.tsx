import { Feature, IFeature } from "./Feature";
import { UsersThree, Heart, Globe } from "@phosphor-icons/react";
import { Manrope } from "next/font/google";
import classNames from "classnames";

const features: IFeature[] = [
	{
		icon: <UsersThree className="mx-auto my-4 h-12 w-12 text-light" />,
		title: "Community First",
		caption:
			"Community is our greatest resource.\n It's what makes us Human.",
		description:
			"As technology continues to proliferate society we need to prioritise the health of our communities above all.",
	},
	{
		icon: <Heart className="mx-auto my-4 h-12 w-12 text-light" />,
		title: "Non-Profit",
		caption:
			"We are not motivated by profit;\n we are in service to community",
		description:
			"Our sole priority is to remain in service to communities across the globe.  To stay true to this aim we are a non-profit organisation.",
	},
	{
		icon: <Globe className="mx-auto my-4 h-12 w-12 text-light" />,
		title: "Open Source",
		caption:
			"All our software is open source,\n so we can share our knowledge with all.",
		description:
			"We contribute to the wider community and encourage others to develop their own community software.",
	},
];

const manrope = Manrope({ subsets: ["latin"], weight: "300" });

export default function Mission() {
	return (
		<div id="mission" className="flex flex-col gap-4 p-3">
			<h2
				className={classNames({
					"text-2xl tracking-tight md:text-3xl": true,
					[manrope.className]: true,
				})}
			>
				Our Mission
			</h2>
			<div className="flex flex-col gap-4 lg:m-4 lg:flex-row">
				{features.map((item, index) => (
					<Feature item={item} key={index} />
				))}
			</div>
		</div>
	);
}
