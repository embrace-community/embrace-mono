import classNames from "classnames";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ weight: "300", subsets: ["latin"] });

export default function Awards() {
  return (
    <div className="p-24 text-center mb-20 bg-slate-400 bg-opacity-10">
      <div className="grid grid-cols-4">
        <div className="mx-auto text-center">
          <Image
            src={`/images/logos/livepeer.png`}
            width="400"
            height="100"
            alt="Livepeer"
            className="rounded-3xl "
          />
        </div>
        <div className="mx-auto text-center">
          <Image
            src={`/images/logos/lens.svg`}
            width="160"
            height="100"
            alt="Livepeer"
            className="rounded-3xl"
          />
        </div>

        <div className="mx-auto text-center">
          <Image
            src={`/images/logos/ipfs.png`}
            width="160"
            height="100"
            alt="Livepeer"
            className="rounded-3xl"
          />
        </div>

        <div className="mx-auto text-center">
          <Image
            src={`/images/logos/polygon.png`}
            width="500"
            height="100"
            alt="Livepeer"
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
