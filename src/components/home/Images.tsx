"use client";

import ulaPic1 from "@/public/home/ulaPic1.webp";
import ulaPic2 from "@/public/home/ulaPic2.webp";
import Image from "next/image";
import { motion } from "motion/react";

const imageAnimation = (delay = 0) => ({
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, delay },
});

const Images = () => {
  return (
    <div className="flex flex-col place-items-center gap-8 py-8">
      <div className="w-1/2 border-b-2 border-ula-blue-primary md:border-b-4" />
      <div className="flex w-5/6 max-w-5xl flex-col justify-center gap-8 md:flex-row">
        <motion.div className="md:w-1/2" {...imageAnimation(0.3)}>
          <Image src={ulaPic1} alt="Ula Picture 1" />
        </motion.div>

        <motion.div className="md:w-1/2" {...imageAnimation(0.4)}>
          <Image src={ulaPic2} alt="Ula Picture 2" />
        </motion.div>
      </div>
    </div>
  );
};
export default Images;
