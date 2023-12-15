import React from "react";
import Bell from "../../SVG/Bell";

const Notification = () => {
  return (
    <div className="group w-[48px] h-[48px] flex items-center justify-center relative hover:bg-gray-100 hover:rounded-full cursor-pointer">
      <Bell />
      <div className=" absolute w-[18px] h-[18px] bg-primary rounded-full top-1 right-1 text-center leading-[18px] text-white text-[12px]">
        1
      </div>
      <div className="absolute  z-[51] bg-black text-center text-white w-[80px]  bottom-[-40px] right-[40px] translate-x-[70%] rounded-[10px] p-2 text-[12px] hidden group-hover:block">
        Thông báo
      </div>
    </div>
  );
};

export default Notification;
