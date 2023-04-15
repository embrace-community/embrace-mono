import Image from "next/image";
import Highlight from "./Highlight";

export default function Technologies() {
  return (
    <Highlight className="mb-14 md:mb-20">
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8 md:gap-12 md:grid-cols-4">
        <div className="mx-auto text-center">
          <Image
            src={`/images/logos/livepeer-transparent.png`}
            width="400"
            height="100"
            alt="Livepeer"
          />
        </div>

        <div className="flex md:hidden mx-auto text-center">
          <Image
            src={`/images/logos/polygon.png`}
            width="500"
            height="100"
            alt="Polygon"
          />
        </div>

        <div className="mx-auto text-center">
          <Image
            src={`/images/logos/lens.svg`}
            width="100"
            height="20"
            alt="Lens"
            className="rounded-3xl"
          />
        </div>

        <div className="mx-auto text-center">
          <Image
            src={`/images/logos/ipfs.png`}
            width="100"
            height="20"
            alt="IPFS"
          />
        </div>

        <div className="hidden md:flex mx-auto text-center">
          <Image
            src={`/images/logos/polygon.png`}
            width="500"
            height="100"
            alt="Polygon"
          />
        </div>
      </div>
    </Highlight>
  );
}
