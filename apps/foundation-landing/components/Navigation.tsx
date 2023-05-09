import Image from "next/image";
import classNames from "classnames";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "200" });

export default function Navigation() {
	return (
		<div className="flex flex-row gap-4 p-3 justify-center items-center sm:justify-start border-b-light border-b-[1px]">
			<Image
				src="/images/embrace-foundation.png"
				className="sm:hidden"
				width={80}
				height={80}
				alt="Embrace Foundation"
			/>

			<Image
				src="/images/embrace-foundation.png"
				className="hidden sm:block"
				width={108}
				height={108}
				alt="Embrace Foundation"
			/>

			<h1
				className={classNames({
					"text-2xl md:text-3xl tracking-tight": true,
					[inter.className]: true
				})}
			>
				embrace community
			</h1>

			<div className="hidden md:flex md:flex-row md:grow md:gap-4 md:justify-end">
				<a
					href="#principles"
					className={classNames({
						"text-dark": true,
						[inter.className]: true
					})}
				>
					principles
				</a>

				<a
					href="#mission"
					className={classNames({
						"text-dark": true,
						[inter.className]: true
					})}
				>
					mission
				</a>

				<a
					href="#apps"
					className={classNames({
						"text-dark": true,
						[inter.className]: true
					})}
				>
					apps
				</a>

				<a
					href="#contribute"
					className={classNames({
						"text-dark": true,
						[inter.className]: true
					})}
				>
					contribute
				</a>
			</div>
		</div>
	);
}
