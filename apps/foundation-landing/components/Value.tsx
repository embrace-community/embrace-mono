import classNames from "classnames";
import { Inter, Manrope } from "next/font/google";
import { ReactNode } from "react";

interface Props {
	value: IValue;
}

export interface IValue {
	icon?: ReactNode;
	value: string;
	description?: string;
}

const manrope = Manrope({ subsets: ["latin"], weight: ["300"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "600"] });

export function Value({ value }: Props) {
	return (
		<section className="flex cursor-pointer flex-row gap-4 rounded-xl border-[1px] border-light bg-white/60 p-1">
			{/* <div
				className={classNames({
					"hidden md:block": value.icon,
				})}
			>
				{value.icon}
			</div> */}
			<div className="flex-1">
				<h2
					className={classNames({
						"mb-1 text-xl tracking-tight antialiased md:text-center md:text-2xl":
							true,
						[manrope.className]: true,
					})}
				>
					{value.value}
				</h2>
				<p
					className={classNames({
						"text-md whitespace-pre-wrap tracking-tight antialiased md:text-left":
							value.description,
						[inter.className]: value.description,
					})}
				>
					{value.description}
				</p>
			</div>
		</section>
	);
}
