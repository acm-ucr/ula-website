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
      <div className="mx-auto flex flex-wrap justify-center lg:w-3/4">
        {testimonies.map(({ name, role, quote }, index) => (
          <motion.div key={index} {...oppositeSliding} className="w-1/2 p-4">
            <Card key={index} name={name} role={role} quote={quote} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default Testimony;
