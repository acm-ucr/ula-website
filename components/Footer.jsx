import Link from "next/link";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-ula-lightGray flex items-center justify-between mt-8">
      <div className="flex items-center">
        <Link
          href="https://discord.com/invite/BUvwNdB6eH"
          target="_blank"
          className="hover:opacity-80 flex items-center no-underline text-ula-blue"
        >
          <FaDiscord className="text-ula-blue text-4xl mx-2 my-3" />
          Join Discord
        </Link>
      </div>
      <img src="/bcoeLogo.webp" className="w-1/5 mr-5" />
    </div>
  );
};

export default Footer;
