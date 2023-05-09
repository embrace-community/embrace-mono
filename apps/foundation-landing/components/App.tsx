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
}

const manrope = Manrope({ subsets: ["latin"], weight: ["300"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "600"] });

export function App({ app }: Props) {
	return (
		<div className="flex flex-col gap-2 p-2 border-[1px] border-light rounded-xl items-center max-w-[800px] md:justify-left md:flex-row md:h-60 md:gap-6 md:p-6">
			<div className="md:hidden">{app.icon}</div>
			<div className="hidden md:block">{app.lgIcon}</div>
			<div className="flex-1">
				<h2
					className={classNames({
						"text-2xl tracking-tight antialiased md:text-left": true,
						[manrope.className]: true
					})}
				>
					{app.title}
				</h2>
				<p
					className={classNames({
						"text-md tracking-tight antialiased md:text-left": true,
						[inter.className]: true
					})}
				>
					{app.description}
				</p>
			</div>
		</div>
	);
}
