import React from "react";

const Tag = ({ title, onClick, selected }) => {
  return (
    <div
      onClick={onClick}
      className={`px-2 py-1 border-ula-yellow border-3 rounded whitespace-nowrap mx-2 hover:bg-ula-yellow hover:cursor-pointer my-2 ${
        selected && "bg-ula-yellow"
      }`}
    >
      {title}
    </div>
  );
};

export default Tag;
