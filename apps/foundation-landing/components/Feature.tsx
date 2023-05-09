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
		<section className="m-2 flex flex-1 flex-col items-center gap-4 sm:mx-36 lg:mx-2">
			<div className="h-20 w-20 rounded-full bg-primary">{item.icon}</div>
			<h3
				className={classNames({
					"text-xl tracking-tight antialiased md:text-2xl": true,
					[manrope.className]: true,
				})}
			>
				{item.title}
			</h3>

			<p
				className={classNames({
					"text-sm font-semibold tracking-tight antialiased md:text-base":
						true,
					[inter.className]: true,
				})}
			>
				<span className="whitespace-pre">{item.caption}</span>
			</p>

			<p
				className={classNames({
					"text-sm tracking-tight antialiased md:text-base": true,
					[inter.className]: true,
				})}
			>
				{item.description}
			</p>
		</section>
	);
}
