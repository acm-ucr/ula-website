"use client";
import { motion } from "motion/react";
import CountUp from "react-countup";

const xPositiveAnimation = {
  initial: { x: 60, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  transition: { duration: 0.7 },
};

const xNegativeAnimation = {
  initial: { x: -60, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  transition: { duration: 0.7 },
};

const yNegativeAnimation = {
  initial: { y: -30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.7 },
};

const Progress = () => {
  return (
    <div className="mb-8 flex w-full flex-col items-center justify-center bg-ula-blue-primary py-6">
      <motion.p
        className="flex w-full justify-center p-8 text-center font-bold text-white sm:text-4xl"
        {...yNegativeAnimation}
      >
        The UCR CS ULA program started in Fall 2021. Since then we have…
      </motion.p>
      <div className="mb-8 flex w-1/2 flex-col items-center justify-center md:flex-row">
        <div className="flex w-1/2 flex-col items-center justify-center p-2">
          <motion.div
            className="text-center text-6xl font-extrabold text-ula-yellow-primary"
            {...xNegativeAnimation}
          >
            <CountUp start={0} duration={2} end={1500} />+
          </motion.div>
          <motion.p
            className="text-nowrap p-2 text-center text-white"
            {...xPositiveAnimation}
          >
            students helped
          </motion.p>
        </div>
        <div className="flex w-1/2 flex-col items-center justify-center p-2">
          <motion.div
            className="text-center text-6xl font-extrabold text-ula-yellow-primary"
            {...xPositiveAnimation}
          >
            <CountUp start={0} end={40} duration={2.5} />+
          </motion.div>
          <motion.p
            className="text-nowrap p-2 text-center text-white"
            {...xNegativeAnimation}
          >
            tutors trained
          </motion.p>
        </div>
      </div>
    </div>
  );
};
export default Progress;
