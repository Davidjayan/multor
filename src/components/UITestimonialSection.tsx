import { testimonies } from "@/Utils/constants";
import React from "react";
import { UITestimony } from "./UITestimony";
import { UITitle } from "./UITitle";

export const UITestimonialSection = () => {
  return (
    <div className="container text-center my-10 gap-10 py-10 flex flex-col">
      <UITitle>DON'T JUST TAKE OUR WORD FOR IT</UITitle>
      <div className="w-full flex md:flex-row md:gap-0 gap-10 flex-col justify-between">
        {testimonies.map((tesimony) => (
          <UITestimony {...tesimony} key={tesimony.avatar + tesimony.name} />
        ))}
      </div>
    </div>
  );
};
