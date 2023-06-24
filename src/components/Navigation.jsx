"use client";

import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      className="py-0 font-lexend w-full px-3 m-0 bg-ula-blue flex justify-between items-center"
      expand="md"
      fixed="top"
    >
      <Navbar.Brand className="p-0">
        <Link
          eventkey="1"
          className="p-0 text-white no-underline font-medium text-2xl"
          href="/"
        >
          Undergraduate Learning Assistants
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav" className="!m-0 !p-0">
        <Nav className=" no-underline ml-auto text-2xl mb-0">
          <Nav.Link
            as={Link}
            eventkey="6"
            href="/"
            className={`${
              usePathname() === "/" ? "!bg-ula-yellow text-black" : "text-white"
            } mb-0 py-1 px-3 no-underline ml-auto !text-xl whitespace-nowrap w-full text-center hover:cursor-pointer`}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            eventkey="6"
            href="/overview"
            className={`${
              usePathname() === "/overview"
                ? "!bg-ula-yellow text-black"
                : "text-white"
            } mb-0 py-1 px-3 no-underline ml-auto !text-xl whitespace-nowrap w-full text-center hover:cursor-pointer`}
          >
            Overview
          </Nav.Link>
          <Nav.Link
            as={Link}
            eventkey="6"
            href="/calendars"
            className={`${
              usePathname() === "/calendars"
                ? "!bg-ula-yellow text-black"
                : "text-white"
            } mb-0 py-1 px-3 no-underline ml-auto !text-xl whitespace-nowrap w-full text-center hover:cursor-pointer`}
          >
            Calendars
          </Nav.Link>
          <Nav.Link
            as={Link}
            eventkey="6"
            href="/ulas"
            className={`${
              usePathname() === "/ulas"
                ? "!bg-ula-yellow text-black"
                : "text-white"
            } mb-0 py-1 px-3 no-underline ml-auto !text-xl whitespace-nowrap w-full text-center hover:cursor-pointer`}
          >
            ULAs
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
