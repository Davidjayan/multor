import React from "react";

export const UIFooter = () => {
  return (
    <div className="bg-[#152f2e]">
      <div
        className="md:w-[50%] w-[90%] container flex md:flex-row flex-col md:justify-between md:gap-0 gap-5 justify-items-center items-center py-10"
      >
        <img
          alt="logo"
          className="w-[100px]"
          src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/77034ff2-multor-logo-footer.svg"
        />
        <p className="text-white text-sm font-extralight font-sans">
          © 2023 Insert Name Here. All rights reserved
        </p>
      </div>
    </div>
  );
};
