import { ReactNode } from "react";

interface HighlightProps {
  children: ReactNode;
}

export default function Highlight({ children }: HighlightProps) {
  return (
    <div className="p-24 text-center mb-20 md:mb-28 bg-gradient-to-tr from-transparent via-slate-400/10 to-transparent">
      {children}
    </div>
  );
}
