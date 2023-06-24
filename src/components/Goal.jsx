import React from "react";

const Goal = ({ icon, description }) => {
  return (
    <div className="border-y-8 border-ula-yellow bg-ula-blue text-center flex justify-center items-center flex-col">
      {icon}
      <p className="text-lg text-white mx-2">{description}</p>
    </div>
  );
};

export default Goal;
