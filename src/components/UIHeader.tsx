import React from "react";

export const UIHeader = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/abbcf2d7-multor-heroshot_11hc0nw00000000000001o.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
      className="pb-[10%] md:pb-0"
    >
      <div className="container mx-auto py-10 md:w-[50%] w-[90%]">
        <div className="flex flex-col gap-10 md:py-10 md:w-[60%] md:my-10">
          <img
            className="w-[138px]"
            src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/42234823-multor-logo.svg"
          />
          <p
            className="font-sans md:text-7xl text-4xl text-left font-semibold md:leading-tight"
          >
            Describe the value of booking an appointment
          </p>
          <p className="md:w-[45%] text-lg">
            No need to get clever. Tell people exactly what you're offering,
            then use this space to communicate your key value proposition.
          </p>
        </div>
      </div>
    </div>
  );
};
