"use client";
import { motion } from "motion/react";
import { useState } from "react";

type courseOfferingCardProps = {
  course: string;
  desc: string;
  color: "blue" | "yellow";
};

const CourseOfferingCard = ({
  course,
  desc,
  color,
}: courseOfferingCardProps) => {
  const [flipped, setFlipped] = useState(false);

  const bgColor =
    color === "blue" ? "bg-ula-blue-accent" : "bg-ula-yellow-accent";

  return (
    <motion.div
      transition={{ duration: 0.5 }}
      animate={{ rotateY: flipped ? 180 : 0 }}
      onClick={() => setFlipped((prevState) => !prevState)}
      style={{ transformStyle: "preserve-3d" }}
      className={`flex h-full w-full cursor-pointer items-center justify-center rounded-xl ${bgColor} p-2`}
    >
      <div
        style={{ backfaceVisibility: "hidden", transform: "rotateY(0deg)" }}
        className="absolute text-center text-2xl font-semibold md:text-4xl"
      >
        {course}
      </div>

      <div
        className="sm:text-md text-center text-xs font-semibold lg:text-lg"
        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
      >
        {desc}
      </div>
    </motion.div>
  );
};

export default CourseOfferingCard;
