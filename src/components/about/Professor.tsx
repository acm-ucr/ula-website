"use client";
import Image from "next/image";
import professorImage from "@/public/about/watkinsonMedina.webp";
import { motion } from "motion/react";

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 1.5 },
};

const xPositiveAnimation = {
  initial: { x: 100 },
  whileInView: { x: 0 },
  transition: { duration: 1.0 },
};

const xNegativeAnimation = {
  initial: { x: -100 },
  whileInView: { x: 0 },
  transition: { duration: 1.0 },
};

const yPositiveAnimation = {
  initial: { y: 45, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 1.0 },
};

const Professor = () => {
  return (
    <div className="mx-8 mb-4 flex flex-col justify-center gap-8 md:flex-row md:items-center">
      <motion.div {...xNegativeAnimation}>
        <Image
          src={professorImage}
          alt="Professor Watkinson Medina"
          className="font-sm mx-auto mb-4 w-2/3 rounded-md md:w-3/4"
          {...fadeIn}
          priority
        />
      </motion.div>

      <div className="flex-col">
        <motion.div {...xPositiveAnimation}>
          <motion.p
            {...fadeIn}
            className="font-xl text-left text-lg text-black xl:text-2xl"
          >
            "The ULA program is a great chance to make a real difference.
            Students get more personalized learning that helps with their
            classes, and ULAs get to grow as educators. All in all, the ULA
            program is a good thing for everyone who's part of it."
          </motion.p>
        </motion.div>

        <motion.p
          {...yPositiveAnimation}
          className="font-xs mt-2 text-right font-semibold text-black xl:text-xl"
        >
          - Professor Watkinson Medina
        </motion.p>
      </div>
    </div>
  );
};

export default Professor;
