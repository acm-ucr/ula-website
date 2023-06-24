import React from "react";
import Header from "../../components/Header";
import ULA from "./ULA";
import { ulas } from "../data/ulas";

const Page = () => {
  return (
    <div>
      <Header title="ULAS" />
      <div className="w-full flex justify-center items-center flex-col">
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
