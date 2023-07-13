import React, { InputHTMLAttributes } from "react";

export const UIInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      type="text"
      className="p-2 rounded 
      focus:outline-none focus:border-sky-500 focus:ring-1 
    "
    />
  );
};
