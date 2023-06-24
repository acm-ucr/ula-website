"use client";
import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { Navbar } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
const items = [
  {
    link: "/",
    page: "Home",
  },
  {
    link: "/overview",
    page: "Overview",
  },
  {
    link: "/calendars",
    page: "Calendars",
  },
  {
    link: "/ulas",
    page: "ULAs",
  },
];

const Navigation = () => {
  const [selected, setSelected] = useState("Logo");

  return (
    <>
      <Navbar
        className="flex flex-col justify-between bg-ula-blue m-0 p-0"
        collapseOnSelect
        expand="md"
        fixed="top"
      >
        <div className="flex flex-row w-full justify-between m-0">
          <Navbar.Brand className="m-0 p-0 flex">
            <Link
              href="/"
              className="font-bold no-underline text-white text-lg p-0 ml-5 align-middle py-1"
              onClick={() => setSelected("Logo")}
            >
              Undergraduate Learning Assistants
            </Link>
          </Navbar.Brand>
          <div className="flex flex-row w-full justify-end p-0 mr-5">
            <Navbar.Collapse className="w-full items-center md:justify-end justify-center p-0">
              <Nav className="flex justify-evenly items-center h-full">
                {items.map((item, index) => (
                  <Nav.Link
                    as={Link}
                    href={item.link}
                    eventKey={index}
                    className="py-0 h-full"
                    key={index}
                  >
                    <div
                      className={`flex items-center ${
                        selected == item.page ? "bg-ula-yellow" : ""
                      } text-base p-0 m-0 h-full`}
                      onClick={() => setSelected(item.page)}
                    >
                      <p
                        className={`${
                          selected == item.page
                            ? "text-ula-black"
                            : "text-white"
                        } text-base p-0 m-0 h-fit px-2`}
                      >
                        {item.page}
                      </p>
                    </div>
                  </Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
            <Navbar.Toggle
              className="list-unstyled !text-transparent"
              aria-controls="basic-navbar-nav"
            >
              <FaBars className="text-white text-xl" />
            </Navbar.Toggle>
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default Navigation;
