import { FaEnvelope } from "react-icons/fa";
import { contact } from "@/data/footer";

const Footer = () => {
  return (
    <div className="w-full bg-ula-lightGray flex items-center justify-between mt-8">
      <div className="flex items-center">
        <FaEnvelope className="text-ula-blue text-4xl m-3" />
        <div className="flex flex-col m-2">
          <p className="p-0 m-0 text-sm text-ula-darkGray">
            Questions? Contact
          </p>
          <p className="p-0 m-0 text-sm font-bold text-ula-darkGray">
            {contact.name}
          </p>
          <a
            className="p-0 m-0 text-sm no-underline text-ula-blue"
            href="mailto:neftaliw@ucr.edu"
          >
            {contact.email}
          </a>
        </div>
      </div>
      <img src="/bcoeLogo.png" className="w-1/5 mr-5" />
    </div>
  );
};

export default Footer;
