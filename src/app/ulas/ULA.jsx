import React from "react";

const ula = ({ name, description, image }) => {
  return (
    <div className="w-11/12 flex justify-between ">
      <img className="w-2/12 rounded" src={image} />
      <div className="w-10/12 p-2">
        <div>{name}</div>
        <p className="text-xl">{description}</p>
      </div>
    </div>
  );
};

export default ula;
