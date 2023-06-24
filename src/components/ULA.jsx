import Tag from "@/components/Tag";
import React from "react";

const ULA = ({ name, description, image }) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between mt-4 items-center">
      <img className="w-1/2 md:w-2/12 aspect-square" src={image} />
      <div className="w-10/12 py-2 px-4 flex flex-col items-center md:items-start">
        <Tag name={name} />
        <p className="text-sm md:text-xl my-2 text-left hidden md:block">
          {description}
        </p>
        <p className="text-sm md:text-xl my-2 text-center md:hidden block">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ULA;
