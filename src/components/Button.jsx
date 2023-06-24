import React from "react";

const Button = ({ name }) => {
  return (
    <div className="px-3 py-2 bg-ula-blue w-fit text-white shadow-[5px_-5px_0px_0px_#FFB81C] my-5 text-xl">
      {name}
    </div>
  );
};

export default Button;
