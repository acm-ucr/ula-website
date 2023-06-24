import Tag from "@/components/Tag";
import React from "react";

const ULA = ({ name, description, image }) => {
  return (
    <div className="w-11/12 flex justify-between mt-4">
      <img className="w-2/12 rounded" src={image} />
      <div className="w-10/12 px-4">
        <div className="bg-ula-yellow w-fit">
          <Tag name={name} />
        </div>
        <p className="text-xl my-2">{description}</p>
      </div>
    </div>
  );
};

export default ULA;
