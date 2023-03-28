import Image from "next/image";
import Highlight from "./Highlight";

export default function Technologies() {
  return (
    <Highlight>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
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
    </Highlight>
  );
}
