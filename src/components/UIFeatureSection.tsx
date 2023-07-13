import { features } from "@/Utils/constants";
import React from "react";
import { UIFeature } from "./UIFeature";

export const UIFeatureSection = () => {
  return (
    <div className="flex md:flex-row flex-col gap-5 my-10">
      {features.map((feature) => (
        <UIFeature {...feature} key={feature.name} />
      ))}
    </div>
  );
};
