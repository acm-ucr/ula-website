import React from "react";

const Header = ({ title }) => {
  return (
    <div className="w-full">
      <img
        className="w-screen h-[40vh] object-cover"
        src="https://admissions.ucr.edu/sites/default/files/styles/article_header_l/public/2021-10/ucr_submit-your-uc-application-to-ucr_blog.jpg?h=3f097dd9&itok=3qBGU0ZF"
      />
      <div className="bg-ula-blue border-t-8 border-ula-yellow w-full flex justify-center items-center">
        <p className="w-11/12  text-white text-2xl mb-0 p-1">{title}</p>
      </div>
    </div>
  );
};

export default Header;
