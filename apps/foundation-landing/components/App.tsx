import classNames from "classnames";
import { Inter, Manrope } from "next/font/google";
import { ReactNode } from "react";

interface Props {
	app: IApp;
}

export interface IApp {
	icon: ReactNode;
	lgIcon?: ReactNode;
	title: string;
	description: string;
	tagline: string;
}

const manrope = Manrope({ subsets: ["latin"], weight: ["300"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "600"] });

export function App({ app }: Props) {
	return (
		<section className="md:justify-left flex max-w-[800px] cursor-pointer flex-col items-center gap-2 rounded-xl border-[1px] border-light p-2  md:flex-row md:gap-6 md:p-6">
			<div className="md:hidden">{app.icon}</div>
			<div className="hidden md:block">{app.lgIcon}</div>
			<div className="flex-1">
				<h2
					className={classNames({
						"mb-1 text-2xl tracking-tight antialiased md:text-left":
							true,
						[manrope.className]: true,
					})}
				>
					{app.title}
				</h2>
				<p
					className={classNames({
						"my-1 text-center md:text-start": true,
						[inter.className]: true,
					})}
				>
					{app.tagline}
				</p>
				<p
					className={classNames({
						"text-md whitespace-pre-wrap tracking-tight antialiased md:text-left":
							true,
						[inter.className]: true,
					})}
				>
					{app.description}
				</p>

				<p
					className={classNames({
						"mx-auto mt-4 w-28 rounded-lg bg-light p-2 text-center text-sm md:mx-0":
							true,
						[manrope.className]: true,
					})}
				>
					coming soon
				</p>
			</div>
		</section>
	);
}
