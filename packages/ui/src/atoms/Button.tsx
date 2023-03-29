import classNames from "classnames";

type Size = "small" | "medium" | "large";
type Variant = "primary" | "secondary" | "default" | "disabled";

interface Props {
	variant?: Variant;
	size?: Size;
	label?: string;
	onClick?: () => void;
}

export const Button = ({
	variant = "default",
	label = "Button",
	size = "medium",
	onClick = () => {}
}: Props) => {
	return (
		<button
			className={classNames({
				"bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded":
					true,
				"bg-green-600 hover:bg-green-700 shadow-xl shadow-green-600/30":
					variant == "primary",
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
