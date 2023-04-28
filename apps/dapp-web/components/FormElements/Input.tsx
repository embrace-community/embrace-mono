import classNames from "classnames";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	type?: "sm" | "md" | "lg";
}

export const Input = (props: InputProps) => {
	return (
		<input
			className={classNames({
				"border-neutral-300 border-[1px] rounded-2xl px-4 font-medium text-neutral-600	focus:ring-2 focus:ring-primary-200 focus:outline-none":
					true,
				"h-10 w-[240px]": props.type === "sm",
				"h-12 w-[360px]": props.type === "md",
				"h-14 md:w-[480px]": props.type === "lg"
			})}
			{...props}
		/>
	);
};
