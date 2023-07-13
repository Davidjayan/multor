import React from "react";

interface Props {
  name: string;
  imageSrc: string;
  description: string;
}

export const UIFeature = (props: Props) => {
  const { description, imageSrc, name } = props;
  return (
    <div className="flex flex-col gap-5">
      <div>
        <img alt="feature"style={{objectFit:'contain'}} src={imageSrc} />
      </div>
      <p className="font-semibold font-sans">{name.toUpperCase()}</p>
      <p>{description}</p>
    </div>
  );
};
