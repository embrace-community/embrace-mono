import { ReactNode } from "react";
import { Navigation } from "../Navigation";
import { TopNavigation } from "../TopNavigation";

interface Props {
	children: ReactNode;
}

export const Layout = ({ children }: Props) => {
	return (
		<div className="w-full h-screen flex flex-row">
			<Navigation />
			<div className="flex-1">
				<div className="flex flex-col h-full">
					<TopNavigation />
					<div className="flex-1 ">
						<div className="flex flex-col items-center h-full border-[1px] border-neutral-100">
							{children}
						</div>
					</div>
				</div>
			</div>
			<div className="hidden w-[120px] bg-gray-200">right</div>
		</div>
	);
};
