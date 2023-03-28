import classNames from "classnames";

type Size = "small" | "medium" | "large";
interface Props {
	primary?: boolean;
	size?: Size;
	label?: string;
	onClick?: () => void;
}

export const Button = ({
	primary = false,
	label = "Button",
	size = "medium",
	onClick = () => {}
}: Props) => {
	return (
		<button
			className={classNames({
				"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded":
					true,
				"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded":
					primary,
				"text-sm": size === "small",
				"text-md": size === "medium",
				"text-lg": size === "large"
			})}
			onClick={onClick}
		>
			{label}
		</button>
	);
};
