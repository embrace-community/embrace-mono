import { NavigationAction } from "./NavigationAction";
import { NavigationDivider } from "./NavigationDivider";

import { UsersThree, ShootingStar, Plus } from "@phosphor-icons/react";
// import Image from "next/image";
// import Link from "next/link";

export const Navigation = () => {
	return (
		<div className="w-24 flex flex-col gap-2 items-center py-4 px-2 flex-grow-0 border-r-[1px] border-neutral-300 bg-gradient-to-r from-white from-10% to-neutral-100/20">
			{/* <Link href="/hello">
				<Image
					src="/images/embrace-logo.png"
					width={110}
					height={106}
					alt="Embrace"
				/>
			</Link> */}
			<img
				src="/images/embrace-logo.png"
				alt="Embrace"
				width={110}
				height={106}
			/>
			<NavigationDivider />
			<NavigationAction icon={<UsersThree size={38} />} />
			<NavigationAction icon={<ShootingStar size={38} />} />
			<NavigationDivider />
			<NavigationAction icon={<Plus size={38} />} active />
		</div>
	);
};

export default Navigation;
