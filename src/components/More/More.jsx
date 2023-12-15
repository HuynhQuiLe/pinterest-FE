import React from "react";
import QuestionMark from "../SVG/QuestionMark";

const More = () => {
  return (
    <div
      className="w-[56px] h-[56px] rounded-full fixed z-[51] bottom-6 right-6 flex items-center justify-center bg-white"
      style={{ boxShadow: "0 0 8px rgba(0, 0, 0, 0.20)" }}
    >
      <QuestionMark />
    </div>
  );
};

export default More;
