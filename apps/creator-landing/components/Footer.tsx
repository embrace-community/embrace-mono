import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Highlight from "./Highlight";

function Footer() {
  return (
    <footer>
      <Highlight className="mt-6">
        <div className="flex justify-center items-center mx-auto max-w-xl">
          <h3 className="text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl">
            Get in touch
          </h3>

          {/* Social icons */}
          <div className="ml-10 flex flex-col text-l md:text-xl">
            <a
              className="flex items-center hover:text-violet-600 active:text-violet-700 visited:text-violet-800"
              href="https://twitter.com/we_are_embrace"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
              <span className="ml-2">Twitter</span>
            </a>

            <a
              className="flex items-center hover:text-violet-600 active:text-violet-700 visited:text-violet-800"
              href="mailto:we@embrace.community"
            >
              <MdEmail />
              <span className="ml-2">Drop an Email</span>
            </a>
          </div>
        </div>
      </Highlight>
    </footer>
  );
}

export default Footer;
