"use client";

import { motion } from "motion/react";
import Image from "next/image";
import quoteIcon from "@/public/home/quote.svg";

interface componentProps {
  name: string;
  role: string;
  quote: string;
}

const hoverAnimation = {
  whileHover: { scale: 1.03 },
  transition: {
    duration: 0.6,
  },
};

const Card = ({ name, role, quote }: componentProps) => {
  return (
    <motion.div
      {...hoverAnimation}
      className="mx-auto my-4 flex h-full w-4/5 flex-col place-items-center justify-evenly rounded-xl bg-white p-3 shadow-xl lg:h-full lg:px-8 lg:pb-8"
    >
      <div className="place-items-center p-1">
        <Image src={quoteIcon} className="w-1/2 lg:w-3/4" alt="quoteIcon" />
      </div>
      <div className="p-5 text-left text-sm lg:text-base">{quote}</div>
      <div className="p-1 text-sm font-bold lg:text-base">
        {name}, {role}
      </div>
    </motion.div>
  );
};
export default Card;
