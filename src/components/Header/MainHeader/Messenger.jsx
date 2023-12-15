import React from "react";
import Chat from "../../SVG/Chat";

const Messenger = () => {
  return (
    <div className=" group w-[48px] h-[48px] flex items-center justify-center hover:bg-gray-100 hover:rounded-full cursor-pointer relative">
      <Chat />
      <div className="absolute z-[51] bg-black text-white w-[70px] text-center  bottom-[-40px] right-[40px] translate-x-[70%] rounded-[10px] p-2 text-[12px] hidden group-hover:block">
        Tin nhắn
      </div>
    </div>
  );
};

export default Messenger;
