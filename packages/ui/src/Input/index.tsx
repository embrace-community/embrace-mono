import classNames from "classnames";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	state?: "primary" | "secondary";
	type?: "sm" | "md" | "lg";
}

export const Input = (props: InputProps) => {
	return (
		<input
			className={classNames({
				"border-neutral-300 border-[1px] rounded-2xl p-2": true,
				"bg-primary-200 border-primary-700 border-1 text-neutral-50":
					props.state === "primary",
				"h-10": props.type === "sm",
				"h-12": props.type === "md",
				"h-14 md:w-[480px]": props.type === "lg"
			})}
			{...props}
		/>
	);
};
