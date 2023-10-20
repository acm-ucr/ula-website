import React from "react";

const Tag = ({ title, onClick }) => {
  return (
    <div onClick={onClick} className="px-3 py-2 bg-ula-yellow rounded">
      {title}
    </div>
  );
};

export default Tag;
