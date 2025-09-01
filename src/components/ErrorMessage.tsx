"use client";
import ErrorPage from "@/public/error.webp";
import MobileErrorPage from "@/public/mobileError.webp";
import Image from "next/image";
import Button from "@/components/Button";
import { motion } from "motion/react";

type Props = {
  message: string;
  details: string;
};

const errorAnimate = {
  initial: { opacity: 0, y: -20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75 },
};

const ErrorMessage = ({ message, details }: Props) => {
  return (
    <div className="relative h-screen w-full">
      <div className="hidden sm:flex">
        <Image
          src={ErrorPage}
          alt="Error Page"
          fill
          objectFit="cover"
          priority
        />
      </div>
      <div className="sm:hidden">
        <Image
          src={MobileErrorPage}
          alt="Mobile Error Page"
          fill
          objectFit="cover"
          priority
        />
      </div>

      <div className="absolute flex h-full w-full flex-col items-center justify-center gap-4">
        <motion.div
          {...errorAnimate}
          className="flex h-1/5 w-1/2 flex-col place-items-center justify-center gap-4 text-center text-white sm:w-1/5"
        >
          <div className="border-b-4 border-ula-yellow-primary pb-3 text-5xl font-bold xl:text-6xl">
            {message}
          </div>
          <div className="text-xl xl:text-2xl">{details}</div>
        </motion.div>

        <motion.div {...errorAnimate}>
          <Button text="Return home" link="./" />
        </motion.div>
      </div>
    </div>
  );
};
export default ErrorMessage;
