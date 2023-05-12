import Image from "next/image";
import classNames from "classnames";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "200" });

export default function Navigation() {
	return (
		<header className="flex flex-row items-center justify-center gap-4 border-b-[1px] border-b-light p-3 sm:justify-start">
			<Image
				src="/images/embrace-foundation.png"
				className="sm:hidden"
				width={80}
				height={80}
				alt="Embrace Foundation"
			/>

			<Image
				src="/images/embrace-foundation.png"
				className="mx-2 hidden py-2 sm:block"
				width={104}
				height={104}
				alt="Embrace Foundation"
			/>

			<h1
				className={classNames({
					"text-2xl tracking-tight md:text-3xl": true,
					[inter.className]: true,
				})}
			>
				embrace community
			</h1>

			<nav className="hidden md:flex md:grow md:flex-row md:justify-end md:gap-4">
				<a
					href="#mission"
					className={classNames({
						"text-dark": true,
						[inter.className]: true,
					})}
				>
					mission
				</a>

				<a
					href="#apps"
					className={classNames({
						"text-dark": true,
						[inter.className]: true,
					})}
				>
					projects
				</a>

				<a
					href="#values"
					className={classNames({
						"text-dark": true,
						[inter.className]: true,
					})}
				>
					core values
				</a>

				{/* <a
					href="#contribute"
					className={classNames({
						"text-dark": true,
						[inter.className]: true,
					})}
				>
					contribute
				</a> */}
			</nav>
		</header>
	);
}
