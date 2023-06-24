import React from "react";

const Goal = ({ icon, description }) => {
  return (
    <div className="w-full h-full border-y-8 border-ula-yellow bg-ula-blue text-center flex justify-center items-center flex-col">
      {icon}
      <p className="text-base lg:text-lg text-white mx-4">{description}</p>
    </div>
  );
};

export default Goal;
