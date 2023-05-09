import { Feature, IFeature } from "./Feature";
import { ChatCircle, Money, Users } from "@phosphor-icons/react";
import { Manrope } from "next/font/google";
import classNames from "classnames";

const features: IFeature[] = [
	{
		icon: <ChatCircle className="mx-auto my-4 h-12 w-12 text-light" />,
		title: "Spread the Word",
		caption:
			"Community is our greatest resource.\n It's what makes us Human.",
		description:
			"As technology continues to proliferate society we need to prioritise the health of our communities above all.",
	},
	{
		icon: <Users className="mx-auto my-4 h-12 w-12 text-light" />,
		title: "Get Involved",
		caption:
			"We are not motivated by profit;\n we are in service to community.",
		description:
			"Our sole priority is to remain in service to communities across the globe.  To stay true to this aim we are a non-profit organisation.",
	},
	{
		icon: <Money className="mx-auto my-4 h-12 w-12 text-light" />,
		title: "Donate",
		caption:
			"All our software is open source,\n so we can share our knowledge with all.",
		description:
			"We contribute to the wider community and encourage others to develop their own community software.",
	},
];

const manrope = Manrope({ subsets: ["latin"], weight: "300" });

export default function Contribute() {
	return (
		<article
			id="contribute"
			className="flex flex-col gap-4 bg-gradient-to-b from-primary/40 p-3"
		>
			<h2
				className={classNames({
					"text-2xl tracking-tight md:text-3xl": true,
					[manrope.className]: true,
				})}
			>
				Contribute
			</h2>
			<section className="flex flex-col gap-4 lg:m-4 lg:flex-row">
				{features.map((item, index) => (
					<Feature item={item} key={index} />
				))}
			</section>
		</article>
	);
}
