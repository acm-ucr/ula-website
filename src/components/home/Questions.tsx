"use client";
import InfoButtonHeader from "@/components/home/InfoButtonHeader";
import blueBook from "@/public/home/blueBook.svg";
import InfoButton from "@/components/home/InfoButton";
import baselinePeople from "@/public/home/baselinePeople.svg";
import { motion } from "motion/react";

const slideInAnimate = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  transition: {
    duration: 0.55,
  },
};

const slideInAnimateHover = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  transition: {
    duration: 0.65,
  },
  whileHover: { scale: 1.03 },
};

const Questions = () => {
  return (
    <div className="flex flex-col justify-evenly px-8 pt-8 lg:flex-row lg:px-2">
      <div className="lg:w-2/5">
        <motion.div {...slideInAnimate}>
          <InfoButtonHeader text="What courses can I get help with?" />
        </motion.div>
        <motion.div {...slideInAnimateHover}>
          <InfoButton
            icon={blueBook}
            text="Browse Courses"
            link="/about#courseOfferings"
          />
        </motion.div>
      </div>

      <div className="xl:w-2/5">
        <motion.div {...slideInAnimate}>
          <InfoButtonHeader text="Who are the ULAs?" />
        </motion.div>
        <motion.div {...slideInAnimateHover}>
          <InfoButton icon={baselinePeople} text="Meet the ULAs" link="/ula" />
        </motion.div>
      </div>
    </div>
  );
};
export default Questions;
