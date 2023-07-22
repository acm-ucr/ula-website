"use client";

import Banner from "@/components/Banner";
import Goal from "@/components/Goal";
import Header from "@/components/Header";
import { FaBook, FaInfinity } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { Col, Row } from "react-bootstrap";

const goals = [
  {
    icon: <FaBook className="text-ula-yellow text-5xl my-4" />,
    description:
      "Improve the learning experience of students in core CS courses",
  },
  {
    icon: <BsPeopleFill className="text-ula-yellow  text-5xl my-4" />,
    description: "Build a sense of community amongst undergraduate students",
  },
  {
    icon: <FaInfinity className="text-ula-yellow  text-5xl my-4" />,
    description:
      "create a supportive environment for underrepresented groups in CS",
  },
];

const page = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <title>Overview</title>
      <Header title="OVERVIEW" />
      <div className="w-10/12 mt-9 flex flex-col justify-center">
        <Banner title="The UCR CS ULA program started in Fall 2021. The goals of the program are to:" />
        <Row className="flex justify-center py-8 m-0 w-full">
          {goals.map((goal, index) => (
            <Col
              key={index}
              md={3}
              className="flex justify-center items-stretch p-3 w-1/3"
            >
              <Goal icon={goal.icon} description={goal.description} />
            </Col>
          ))}
        </Row>
        <div className="flex flex-col md:flex-row justify-center items-center mb-8">
          <img
            className="m-4 w-1/2"
            src="https://iebusinessdaily.com/wp-content/uploads/2021/09/shutterstock_1818324299-660x330.png"
          />
          <p className="text-base md:text-xl w-11/12 md:w-1/2 leading-10">
            Towards this, students will be hired and trained as undergraduate
            learning assistants (ULAs) to act as peer tutors for selected CSE
            classes. ULAs will provide open “help desk” hours at a specific
            location (TBD) in Winston Chung Hall, or online through Zoom, and
            assist students with course content, homeworks, labs, etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
