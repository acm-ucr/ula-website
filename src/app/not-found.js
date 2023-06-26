import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col my-36 items-center">
      <p className="text-center text-6xl font-bold text-professor-blue">404</p>
      <p className="text-center text-lg md:text-2xl font-bold text-black">
        Page Not Found
      </p>
      <p className="text-center text-sm md:text-lg  text-professor-gray">
        The page you are looking for does not seem to exist!
      </p>
      <a
        href="/"
        className="text-center text-base md:text-xl font-bold text-professor-yellow no-underline"
      >
        Back To Home Page
      </a>
    </div>
  );
};

export default NotFound;
