"use client";
import Image from "next/image";
import landingPage from "@/public/home/WCHLanding.webp";
import { motion } from "motion/react";

const landingAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const Landing = () => {
  return (
    <div className="relative h-screen w-full">
      <Image
        src={landingPage}
        alt="Landing Image"
        layout="fill"
        objectFit="cover"
      />
      <motion.div
        className="absolute flex h-full w-full items-center justify-center"
        {...landingAnimation}
      >
        <div className="flex h-1/3 w-1/3 place-items-center justify-center pb-6 text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          <div>
            UCR CSE's Undergraduate Learning Assistants
            <div className="w-full border-b-4 border-ula-yellow-primary pt-4" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default Landing;
