import React, { HTMLAttributes } from "react";

interface Props {
  children: any;
}
export const UITitle = (
  props: Props & HTMLAttributes<HTMLParagraphElement>
) => {
  return (
    <p className="tracking-wider font-semibold text-[#00c2c5]" {...props}>
      {props?.children}
    </p>
  );
};
