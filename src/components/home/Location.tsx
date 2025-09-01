"use client";
import Image from "next/image";
import ulaMap from "@/public/home/ulaMap.svg";
import Button from "@/components/Button";
import { motion } from "motion/react";

const animateItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.9 },
};

const animateMap = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.9 },
};

const Location = () => {
  return (
    <motion.div
      className="flex w-full flex-col items-center justify-evenly bg-ula-blue-primary md:flex-row"
      id="location"
    >
      <div className="flex flex-col items-center gap-8 p-8 md:w-2/5">
        <motion.div
          variants={animateItem}
          className="flex flex-col gap-y-3 text-left text-white md:hidden md:text-2xl"
        >
          <p>Your friendly neighborhood ULAs are ready to help!</p>
          <p>
            Just drop in to one of their help desk hours listed in the Calendar
            below with any questions you have.
          </p>
          <p>It's free, and no advance registration required.</p>
          <p>
            Some sessions are held online through Zoom and others in Winston
            Chung Hall 129 and will start in Week 2 of every quarter.
          </p>
        </motion.div>

        <motion.p
          {...animateItem}
          className="hidden text-left text-lg text-white md:block"
        >
          Your friendly neighborhood ULAs are ready to help! Just drop in to one
          of their help desk hours listed in the Calendar below with any
          questions you have. It's free, and no advance registration required.
          Some sessions are held online through Zoom and others in Winston Chung
          Hall 129 and will start in Week 2 of every quarter.
        </motion.p>

        <motion.div {...animateItem} className="hidden md:block">
          <Button text="Get help here!" link="/calendar" />
        </motion.div>
      </div>

      <div className="flex flex-col items-center gap-2 px-5 pb-8 md:w-2/5 md:p-8">
        <motion.div {...animateMap}>
          <Image src={ulaMap} alt="ULA Map" />
        </motion.div>

        <motion.p
          {...animateItem}
          className="flex justify-center text-center text-xl font-medium text-white md:text-2xl"
        >
          Find us at Room 129 on WCH Floor 1!
        </motion.p>

        <motion.div className="mt-2 md:hidden">
          <Button text="Get help here!" link="/calendar" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Location;
