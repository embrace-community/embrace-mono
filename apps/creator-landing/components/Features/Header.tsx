import classNames from "classnames";
import { Inter } from "next/font/google";

const inter = Inter({ weight: "300", subsets: ["latin"] });

export default function Header() {
  return (
    <div className="p-24 text-center mb-20 md:mb-28 bg-slate-400 bg-opacity-10">
      <h1
        className={classNames({
          "text-2xl font-extrabold leading-tight tracking-tighter md:text-4xl mb-4":
            true,
          [inter.className]: true,
        })}
      >
        Put your Community first
      </h1>
      <p className="text-xl text-gray-700">
        Engage with your community on your terms whilst sharing content with
        your members across multiple platforms.
      </p>
    </div>
  );
}
