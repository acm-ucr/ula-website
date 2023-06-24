import React from "react";

const ULA = ({ name, description, image }) => {
  return (
    <div className="w-11/12 flex justify-between mt-4">
      <img className="w-2/12 rounded" src={image} />
      <div className="w-10/12 px-4">
        <div className="bg-ula-yellow w-fit">
          <div className="px-3 py-2 bg-ula-blue w-fit text-white font-bold absolute">
            {name}
          </div>
        </div>
        <p className="text-xl">{description}</p>
      </div>
    </div>
  );
};

export default ULA;
