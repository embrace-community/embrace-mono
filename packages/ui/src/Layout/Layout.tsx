import { ReactNode } from "react";
import { Navigation } from "../Navigation/Navigation";

interface Props {
	children: ReactNode;
}

export const Layout = ({ children }: Props) => {
	return (
		<div className="w-full h-screen flex flex-row">
			<Navigation />
			<div className="flex-1">{children}</div>
			<div className="hidden w-[120px] bg-gray-200">right</div>
		</div>
	);
};
