import { ReactNode } from "react";

interface HighlightProps {
  children: ReactNode;
}

export default function Highlight({ children }: HighlightProps) {
  return (
    <div className="p-12 md:p-24 text-center mb-14 md:mb-20 bg-gradient-to-tr from-transparent via-slate-400/10 to-transparent">
      {children}
    </div>
  );
}
