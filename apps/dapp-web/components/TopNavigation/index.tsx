import { H2 } from "../Typography";

interface TopNavigationProps {
	title: string;
}

export const TopNavigation = ({ title }: TopNavigationProps) => {
	return (
		<div className="h-16 flex flex-row gap-6 justify-center items-center px-2 py-6 relative">
			<div className="absolute top-4 left-6">
				<H2>{title}</H2>
			</div>
		</div>
	);
};
