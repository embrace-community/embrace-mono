import classNames from "classnames";
import { Inter, Manrope } from "next/font/google";
import { ReactNode } from "react";

export interface IFeature {
	icon: ReactNode;
	title: string;
	// caption: string[];
	caption: string;
	description: string;
}

interface Props {
	item: IFeature;
}

const manrope = Manrope({ subsets: ["latin"], weight: ["300"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "600"] });

export function Feature({ item }: Props) {
	return (
		<div className="flex flex-1 flex-col gap-4 items-center m-2 sm:mx-36 lg:mx-2">
			<div className="w-20 h-20 bg-primary rounded-full">{item.icon}</div>
			<h3
				className={classNames({
					"text-xl md:text-2xl tracking-tight antialiased": true,
					[manrope.className]: true
				})}
			>
				{item.title}
			</h3>

			<p
				className={classNames({
					"text-sm md:text-base font-semibold tracking-tight antialiased": true,
					[inter.className]: true
				})}
			>
				<span className="whitespace-pre">{item.caption}</span>
			</p>

			<p
				className={classNames({
					"text-sm md:text-base tracking-tight antialiased": true,
					[inter.className]: true
				})}
			>
				{item.description}
			</p>
		</div>
	);
}
