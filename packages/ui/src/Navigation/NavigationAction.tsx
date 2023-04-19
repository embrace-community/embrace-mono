import classNames from "classnames";
import { ReactElement } from "react";

interface IconProps {
	size: number;
}

interface Props {
	icon: ReactElement<IconProps>;
	active?: boolean;
}

export const NavigationAction = ({ icon, active = false }: Props) => {
	return (
		<div
			className={classNames({
				"w-16 h-16 rounded-full border-neutral-300 border-[1px] cursor-pointer hover:border-primary-700 hover:border-1":
					true,
				"bg-primary-200 border-primary-700 border-1 text-neutral-50": active
			})}
		>
			<div className="p-3 absolute">{icon}</div>
		</div>
	);
};
