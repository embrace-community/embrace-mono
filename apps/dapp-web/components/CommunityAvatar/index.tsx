import classNames from "classnames";
import { Plus } from "@phosphor-icons/react";

interface CommunityAvatarProps {
	state: string;
}

export const CommunityAvatar = ({ state }: CommunityAvatarProps) => {
	return (
		<div
			className={classNames({
				"rounded-full flex items-center justify-center bg-neutral-100 absolute cursor-pointer":
					true,
				"lg:w-56 lg:h-56 mt-20": true,
				"hover:ring-8 hover:ring-primary-200/40": true,
				"bg-primary-100 text-primary-500": state === "active",
				"bg-neutral-100 text-neutral-500": state === "inactive",
				"bg-warning-100 text-warning-500": state === "pending"
			})}
		>
			<div className="text-4xl">
				<Plus size={84} type="bold" />
			</div>
		</div>
	);
};
