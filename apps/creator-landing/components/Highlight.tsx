import classNames from "classnames";
import { ReactNode } from "react";

interface HighlightProps {
  children: ReactNode;
  className?: string;
}

export default function Highlight({ children, className }: HighlightProps) {
  return (
    <div
      className={classNames(
        "p-12 md:p-24 text-center bg-gradient-to-tr from-transparent via-slate-400/10 to-transparent",
        className,
      )}
    >
      {children}
    </div>
  );
}
