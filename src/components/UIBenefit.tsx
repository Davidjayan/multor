import React from "react";

interface Props {
  title: string;
  imageSrc: string;
  description: string;
}
export const UIBenefit = (props: Props) => {
  const { description, imageSrc, title } = props;
  return (
    <div className="flex flex-row md:w-[50%] justify-center">
      <div className="w-[20%]">
        <img
          style={{objectFit: "contain" }}
          src={imageSrc}
        />
      </div>
      <div className="flex flex-col gap-2 w-[90%]">
        <p className="text-lg antialiased font-semibold ">{title}</p>
        <p >{description}</p>
      </div>
    </div>
  );
};
