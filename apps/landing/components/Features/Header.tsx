import classNames from "classnames";
import { Inter } from "next/font/google";

const inter = Inter({ weight: "300", subsets: ["latin"] });

export default function Header() {
  return (
    <div className="max-w-3xl mx-auto text-center pb-28 md:pb-28">
      <h1
        className={classNames({
          "h2 mb-4": true,
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
