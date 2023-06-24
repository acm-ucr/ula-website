import React from "react";
import Header from "../../components/Header";
import ULA from "../../components/ULA";
import { ulas } from "../../data/ulas";
import Banner from "@/components/Banner";

const Page = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Header title="ULAS" />
      <div className="w-11/12 flex justify-center items-start flex-col">
        <Banner title="Our ULAs" />
        {ulas.map((ula, index) => (
          <ULA
            key={index}
            name={ula.name}
            description={ula.description}
            image={ula.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
