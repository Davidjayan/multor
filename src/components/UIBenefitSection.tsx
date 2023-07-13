import React from "react";
import { UIBenefit } from "./UIBenefit";
import { benefits } from "@/Utils/constants";
import { UIForm } from "./UIForm";

export const UIBenefitSection = () => {
  return (
    <div className="container w-[90%] mx-auto py-10 md:top-0 md:w-[50%] top-[-10vh] relative">
      <div className="md:absolute md:top-[-15%] md:right-5">
        <UIForm />
      </div>
      <div className="flex flex-col gap-10 my-20">
        {benefits.map((benefit) => (
          <UIBenefit
            key={benefit.title}
            description={benefit.description}
            title={benefit.title}
            imageSrc={benefit.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};
