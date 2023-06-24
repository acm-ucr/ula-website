"use client";

import Banner from "@/components/Banner";
import Goal from "@/components/Goal";
import Header from "@/components/Header";
import React from "react";
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
      <Header title="OVERVIEW" />
      <div className="w-11/12">
        <Banner title="The UCR CS ULA program started in Fall 2021. The goals of the program are to:" />
        <Row className="w-full flex justify-center items-stretch py-8 m-0">
          {goals.map((goal, index) => (
            <Col
              key={index}
              xl={2}
              className="flex justify-center items-stretch p-3"
            >
              <Goal icon={goal.icon} description={goal.description} />
            </Col>
          ))}
        </Row>
        <div className="flex justify-center items-center mb-8">
          <img
            className="m-4"
            src="https://iebusinessdaily.com/wp-content/uploads/2021/09/shutterstock_1818324299-660x330.png"
          />
          <p className="text-2xl w-1/2 leading-10">
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
