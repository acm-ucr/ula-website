"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

interface ulaCardProps {
  image: StaticImageData;
  name: string;
  classes: string;
  description: string;
}

const hoverAnimation = {
  whileHover: { scale: 1.03 },
  transition: {
    duration: 0.6,
  },
};

const Card = ({ image, name, classes, description }: ulaCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      {...hoverAnimation}
      animate={{ rotateY: flipped ? 180 : 0 }}
      onClick={() => setFlipped((prevState) => !prevState)}
      className="w-full"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="flex w-full flex-col overflow-hidden rounded-xl"
        style={{ backfaceVisibility: "hidden", transform: "rotateY(0deg)" }}
      >
        <div className="aspect-[1/1]">
          <Image src={image} alt={name} fill={true} className="object-cover" />
        </div>
        <div className="z-20 flex flex-col items-center justify-center bg-ula-yellow-accent py-3 text-2xl font-bold shadow-[0_-20px_40px_rgba(255,200,0,.8)]">
          <p>{name}</p>
          <p>{classes}</p>
        </div>
      </div>
      <div
        className="text-md absolute inset-0 flex h-full items-center justify-center rounded-xl border-8 border-ula-yellow-accent bg-white px-8 py-4 text-center lg:text-xl"
        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
      >
        {description}
      </div>
    </motion.div>
  );
};

export default Card;
