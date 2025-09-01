"use client";
import { motion } from "motion/react";
import Link from "next/link";
import Header from "@/components/Header";

const hoverEffect = {
  whileHover: { scale: 1.03, transition: { duration: 0.6 } },
};

const horizontalEffect = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
};

const growingAnimation = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.6 },
};

const Citations = () => {
  return (
    <div className="pt-8">
      <motion.div {...horizontalEffect}>
        <Header text="Citations" />
      </motion.div>

      <motion.div
        {...growingAnimation}
        className="mt-6 flex justify-center px-4 text-black"
      >
        <div className="mb-6 w-2/3 text-center text-xl font-bold md:w-1/2">
          Check out the research about the ULA program!
          <motion.div
            className="my-8 text-base font-normal tracking-wide"
            {...hoverEffect}
          >
            <Link
              href="https://dl.acm.org/doi/abs/10.1145/3626253.3635630"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Haji Amin Shirazi, S., Salloum, M., & Watkinson, N. (2024, March)
              A Study of Undergraduate Learning Assistants (ULAs) in Computer
              Science.
              <br />
              In Proceedings of the 55th ACM Technical Symposium on Computer
              Science Education V. 2 (pp. 1664-1665)
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
export default Citations;
