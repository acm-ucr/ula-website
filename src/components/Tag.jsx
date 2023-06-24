import React from "react";

const Tag = ({ name }) => {
  return (
    <div className="px-3 py-2 bg-ula-blue w-fit text-white font-bold shadow-[5px_-5px_0px_0px_#FFB81C] my-2 text-2xl">
      {name}
    </div>
  );
};

export default Tag;
