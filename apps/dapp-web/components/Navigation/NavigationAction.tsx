import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement } from "react";

interface IconProps {
	size: number;
}

interface Props {
	icon: ReactElement<IconProps>;
	active?: boolean;
	href: string;
	text?: string;
}
export const NavigationAction = ({ icon, href, text }: Props) => {
	const router = useRouter();
	if (!router) return null;

	const active = router.pathname === href;

	return (
		<Link href={href}>
			<div
				className={classNames({
					"p-3 rounded-full gap-2 border-neutral-300 border-[1px] cursor-pointer flex justify-start items-center":
						true,
					"bg-neutral-100 border-primary-700 ring-offset-0 ring-1 ring-primary-700 text-primary-700 ":
						active,
					"text-neutral-800 hover:border-neutral-400 hover:ring-offset-0 hover:ring-1 hover:ring-primary-700 hover:bg-neutral-50":
						!active
				})}
			>
				<div>{icon}</div>
				<div className="hidden">{text}</div>
			</div>
		</Link>
	);
};
