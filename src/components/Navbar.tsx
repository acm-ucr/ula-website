"use client";
import Link from "next/link";
import navbarItems from "@/data/NavbarData";
import { usePathname } from "next/navigation";
import { FaDiscord, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { motion } from "motion/react";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.5, delay },
});

const hoverAnimation = {
  whileHover: { scale: 1.05 },
  transition: {
    duration: 0.6,
  },
};

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative bg-ula-blue-primary p-5 font-medium text-white">
      <div className="hidden w-full items-center justify-between md:flex">
        <div className="mx-5 flex gap-8 text-2xl">
          {navbarItems.map(({ name, link }, i) => (
            <motion.div {...fadeIn(i * 0.15)} key={name}>
              <motion.div {...hoverAnimation}>
                <Link
                  href={link}
                  className={`${
                    pathname === link
                      ? "text-ula-yellow-accent"
                      : "hover:text-gray-300"
                  }`}
                >
                  {name}
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
        <motion.div {...hoverAnimation} className="mx-5 text-5xl">
          <Link href="https://discord.com/invite/BUvwNdB6eH" target="_blank">
            <FaDiscord />
          </Link>
        </motion.div>
      </div>
      <motion.div
        {...fadeIn(0.15)}
        className="flex items-center justify-between md:hidden"
      >
        <Link href="/" className="text-2xl font-bold">
          ULA
        </Link>
        <button onClick={toggleMenu} className="text-3xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </motion.div>
      <div
        className={`absolute left-0 top-full z-50 w-full overflow-hidden bg-ula-blue-primary transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-2 flex flex-col items-center gap-6 border-t-2 py-4 text-xl">
          {navbarItems.map(({ name, link }) => (
            <Link
              key={name}
              href={link}
              onClick={() => setIsOpen(false)}
              className={`${
                pathname === link
                  ? "text-ula-yellow-accent"
                  : "hover:text-gray-300"
              }`}
            >
              {name}
            </Link>
          ))}
          <Link href="https://discord.com/invite/BUvwNdB6eH" target="_blank">
            <FaDiscord />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
