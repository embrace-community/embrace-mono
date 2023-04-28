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
}
export const NavigationAction = ({ icon, href }: Props) => {
	const router = useRouter();
	if (!router) return null;

	const active = router.pathname === href;

	return (
		<Link href={href}>
			<div
				className={classNames({
					"w-16 h-16 rounded-full border-neutral-300 border-[1px] cursor-pointer":
						true,
					"bg-primary-200 border-primary-700 ring-offset-0 ring-2 ring-primary-700 text-neutral-50 ":
						active,
					"text-neutral-800 hover:border-neutral-400 hover:ring-offset-0 hover:ring-1 hover:ring-primary-700 hover:bg-neutral-50":
						!active
				})}
			>
				<div className="p-3">{icon}</div>
			</div>
		</Link>
	);
};
