"use client";
import CourseOfferingCard from "@/components/about/CourseOfferingCard";
import Header from "@/components/Header";
import { courses } from "@/data/CourseOfferingsData";
import { motion } from "motion/react";

const initialMove = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 1 },
};

const textAnimate = {
  initial: { opacity: 0, y: 40, scale: 0.9 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  transition: {
    duration: 0.6,
  },
};

const largeScreen = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.8 },
  initial: { opacity: 0, y: 40, scale: 0.9 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  transition: {
    duration: 0.6,
  },
};

const smallScreen = {
  whileTap: { scale: 0.8 },
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
  },
};

const CourseOfferings = () => {
  return (
    <div className="mb-6 flex w-full flex-col items-center justify-center bg-ula-blue-highlight py-8">
      <motion.div {...initialMove} id="courseOfferings">
        <Header text="Course Offerings" />
      </motion.div>
      <div className="w-11/12 flex-col place-items-center py-10 text-center text-base md:w-2/3 lg:text-xl">
        <motion.div className="pb-4" {...textAnimate}>
          Our ULAs are here to support you through office hours, and directly in
          lab sections.
        </motion.div>
        <motion.div {...textAnimate}>
          Starting Week 2 of each quarter, each class listed below will have one
          or more ULAs there to offer you direct assistance!
        </motion.div>
      </div>
      <div className="hidden flex-wrap justify-center gap-8 sm:flex">
        {courses.map((course, index) => (
          <motion.div
            className="aspect-[11/12] sm:w-1/5"
            key={index}
            {...largeScreen}
          >
            <CourseOfferingCard
              course={course.name}
              desc={course.desc}
              color={[0, 2, 5, 7].includes(index) ? "blue" : "yellow"}
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-8 sm:hidden">
        {courses.map((course, index) => (
          <motion.div
            className="flex aspect-[11/12] w-1/3"
            key={index}
            {...smallScreen}
          >
            <CourseOfferingCard
              course={course.name}
              desc={course.desc}
              color={[0, 3, 4, 7].includes(index) ? "blue" : "yellow"}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default CourseOfferings;
