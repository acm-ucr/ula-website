"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import buttonArrow from "@/public/buttonArrow.svg";

interface buttonProps {
  text: string;
  link: string;
}

const hoverAnimation = {
  whileHover: { scale: 1.03 },
  transition: {
    duration: 0.6,
  },
};

const Button = ({ text, link }: buttonProps) => {
  return (
    <motion.div
      className="rounded-2xl bg-ula-yellow-accent p-3 text-xl font-medium md:text-3xl"
      {...hoverAnimation}
    >
      <Link href={link} className="flex flex-row gap-8 pl-2 md:gap-12">
        {text}
        <Image src={buttonArrow} alt={"Arrow"} />
      </Link>
    </motion.div>
  );
};
export default Button;
