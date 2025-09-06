"use client";

import Card from "@/components/ula/Card";
import ULAs from "@/data/CurrentULAsData";
import { motion } from "motion/react";

const animateULAS = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
  },
};

const ULAMapping = () => {
  return (
    <div className="mx-4 flex flex-col place-items-center bg-ula-blue-highlight py-8 lg:mx-8 lg:flex-row lg:flex-wrap lg:items-center lg:justify-center">
      {ULAs.map((ULA, index) => (
        <motion.div
          key={index}
          {...animateULAS}
          className="relative m-4 flex w-10/12 cursor-pointer flex-col items-center justify-center lg:w-1/4"
        >
          <Card
            name={ULA.name}
            classes={ULA.classes}
            image={ULA.image}
            description={ULA.desc}
          />
        </motion.div>
      ))}
    </div>
  );
};
export default ULAMapping;
