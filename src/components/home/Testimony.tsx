"use client";

import { motion } from "motion/react";
import { testimonies } from "@/data/TestimoniesData";
import Header from "@/components/Header";
import Card from "@/components/home/Card";

const oppositeSliding = (index = 0) => ({
  initial: { opacity: 0, x: index === 0 ? -100 : 100 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 1, delay: 0.35 },
});

const yUpwards = {
  initial: { opacity: 0, y: -25 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, delay: 0.25 },
};

const Testimony = () => {
  return (
    <div className="flex w-full flex-col bg-ula-blue-highlight p-8">
      <motion.div {...yUpwards}>
        <Header text="Words from the ULA Community" />
        <div className="mx-auto w-1/5 justify-end border-b-4 border-ula-yellow-primary p-2" />
      </motion.div>
      <div className="mx-auto flex flex-col justify-center lg:w-3/4">
        <motion.div {...yUpwards}>
          <p className="my-8 text-center text-4xl font-semibold">Former ULAs</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {testimonies.slice(0, 2).map(({ name, quote }, index) => (
            <motion.div key={index} {...oppositeSliding}>
              <Card key={index} name={name} quote={quote} />
            </motion.div>
          ))}
        </div>
        <motion.div {...yUpwards}>
          <p className="my-8 pt-8 text-center text-4xl font-semibold">
            Current ULAs
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {testimonies.slice(2, 4).map(({ name, quote }, index) => (
            <motion.div key={index} {...oppositeSliding}>
              <Card key={index} name={name} quote={quote} />
            </motion.div>
          ))}
        </div>
        <motion.div {...yUpwards}>
          <p className="my-8 pt-8 text-center text-4xl font-semibold">
            Students on ULA
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {testimonies.slice(4, 6).map(({ name, quote }, index) => (
            <motion.div key={index} {...oppositeSliding}>
              <Card key={index} name={name} quote={quote} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Testimony;
