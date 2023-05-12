import classNames from "classnames";
import { Manrope } from "next/font/google";
import { IValue, Value } from "./Value";

const manrope = Manrope({ subsets: ["latin"], weight: "300" });

const values: IValue[] = [
	{
		value: "Authenticity",
	},
	{
		value: "Decentralisation",
	},
	{
		value: "Transparency",
	},
	{
		value: "Creativity",
	},
	{
		value: "Collaboration",
	},
	{
		value: "Privacy",
	},
	{
		value: "Sovereignty",
	},
	{
		value: "Diversity",
	},
	{
		value: "Unity",
	},
];

export default function Values() {
	return (
		<article
			id="values"
			className="flex flex-col gap-4 bg-gradient-to-b from-primary/20 px-3 py-5 md:gap-6"
		>
			<h2
				className={classNames({
					"text-center text-2xl tracking-tight md:text-3xl": true,
					[manrope.className]: true,
				})}
			>
				Core Values
			</h2>
			<h3
				className={classNames({
					"my-2 text-xl tracking-tight": true,
					[manrope.className]: true,
				})}
			>
				These core values are the soul of Embrace Community and they
				inform everything we do.
			</h3>
			<section className="grid grid-flow-row-dense grid-cols-2 gap-2 text-center md:grid-cols-3">
				{values.map((value, index) => (
					<Value key={index} value={value} />
				))}
			</section>
		</article>
	);
}
