import React from "react";
import { UITitle } from "./UITitle";

export const UIAboutSection = () => {
  return (
    <div className="grid md:grid-cols-2 grid-rows-2 justify-center md:my-20">
      <div>
        <img style={{objectFit:'contain'}} className="w-full" src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/df213ca0-multor-about_10cs0b400000000000001o.jpg" />
      </div>
      <div className="flex flex-col justify-center container md:p-20 gap-3">
        <UITitle>ABOUT</UITitle>

        <p className="font-semibold md:text-3xl text-xl font-sans">
          Some more information about your business
        </p>
        <p>
          Share a little about yourself as a business owner, or maybe describe
          what makes your service unique. Give visitors one more reason to care
          about your offer and want to work with you.
        </p>
      </div>
    </div>
  );
};
