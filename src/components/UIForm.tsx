import React from "react";
import { UIInput } from "./UIInput";

export const UIForm = () => {
  return (
    <form className="flex flex-col gap-5 p-10 bg-[#152f2e] md:w-[380px] justify-center text-center">
      <p className="font-bold text-white text-3xl">Schedule an Appointment</p>
      <p className="text-white">
        Here, let visitors know what will happen when they complete your form.
      </p>
      <UIInput placeholder="First Name*" required />
      <UIInput placeholder="Last Name*" required />
      <UIInput placeholder="Email*" required />
      <UIInput placeholder="Phone Number*" required />
      <select className="p-3 rounded">
        {["Type of Appoinment", "Type 1", "Type 2", "Type 3"].map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
      <button className="bg-[rgba(0,194,197,1)] hover:bg-[rgba(0,184,187,1)] p-3 rounded-md font-bold font-sans text-white">
        SCHEDULE NOW
      </button>
    </form>
  );
};
