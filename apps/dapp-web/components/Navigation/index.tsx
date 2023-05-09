import Link from "next/link";
import Image from "next/image";
import { NavigationAction } from "./NavigationAction";
import { NavigationDivider } from "./NavigationDivider";
import { UsersThree, ShootingStar, Plus } from "@phosphor-icons/react";

export const Navigation = () => {
	return (
		<div className="w-[104px] flex flex-col gap-3 items-center py-4 px-4 flex-grow-0 border-r-[1px] border-neutral-300 bg-gradient-to-r from-white from-10% to-neutral-100/20">
			<Link href="/">
				<Image
					src="/images/creator-app.png"
					width={120}
					height={120}
					alt="Embrace"
				/>
			</Link>
			<NavigationDivider />

			{/* <NavigationAction
				icon={<UsersThree size={28} />}
				href="/"
				text="Communities"
			/>

			<NavigationAction
				icon={<ShootingStar size={28} />}
				href="/explore-creations"
				text="Creations"
			/>

			<NavigationDivider /> */}

			<NavigationAction
				icon={<Plus size={28} />}
				href="/create"
				text="Create"
			/>
		</div>
	);
};

export default Navigation;
