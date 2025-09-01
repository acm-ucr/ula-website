"use client";

import Image from "next/image";
import { motion } from "motion/react";
import riversideLogo from "@/public/riversideLogo.webp";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";

const hoverAnimation = {
  whileHover: { scale: 1.03 },
  transition: {
    duration: 0.6,
  },
};

const Footer = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-between gap-2 bg-ula-blue-primary p-8 text-white sm:flex-row">
      <div className="flex flex-col items-center gap-2 sm:gap-0">
        <div className="h-12 w-32 sm:h-5/6 sm:w-11/12">
          <Image
            className="object-contain"
            src={riversideLogo}
            alt="Logo of UCR"
          />
        </div>
        <div className="w-3/4 text-center text-lg sm:text-xl">
          Undergraduate Learning Assistants
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="order-2 border-l-2 p-4 text-2xl font-bold sm:order-1 sm:border-l-0 sm:border-r-2">
          <motion.div {...hoverAnimation}>
            <Link href="/#location">WCH Room 129</Link>
          </motion.div>
        </div>
        <Link
          href="https://discord.com/invite/BUvwNdB6eH"
          className="order-1 sm:order-2"
        >
          <motion.div {...hoverAnimation}>
            <FaDiscord size={50} />
          </motion.div>
        </Link>
      </div>
    </div>
  );
};
export default Footer;
