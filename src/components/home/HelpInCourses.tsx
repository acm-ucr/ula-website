"use client";

import Header from "@/components/Header";
import { motion } from "motion/react";

const headerAnimation = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.5, delay: 0.2 },
};

const itemAnimation = (delay = 0) => ({
  initial: { opacity: 0, x: -16 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.3, delay },
});

export default function HelpInCourses() {
  return (
    <div className="mx-auto w-full p-8">
      <motion.div {...headerAnimation}>
        <Header text="Do you need help in your CSE courses?" />
      </motion.div>

      <div className="mt-5 grid grid-cols-1 gap-2 pl-8 text-left font-semibold md:grid-cols-2 md:justify-items-center md:gap-14 md:pl-0 md:text-left md:text-lg">
        <ul className="space-y-2">
          <motion.li {...itemAnimation(0.3)}>✓ Python: CS 9A, 9B, 9C</motion.li>
          <motion.li {...itemAnimation(0.35)}>
            ✓ Software: CS 10A, 10B, 10C
          </motion.li>
          <motion.li {...itemAnimation(0.4)}>
            ✓ Discrete Math: CS 011 / MATH 011
          </motion.li>
        </ul>

        <ul className="space-y-2">
          <motion.li {...itemAnimation(0.45)}>
            ✓ Algorithms: CS 111, 141
          </motion.li>
          <motion.li {...itemAnimation(0.5)}>
            ✓ Computer Systems: CS 61
          </motion.li>
          <motion.li {...itemAnimation(0.55)}>
            ✓ Software Construction: CS 100
          </motion.li>
        </ul>
      </div>
    </div>
  );
}
