import React, { useState } from "react";
import DownArrow from "../../SVG/DownArrow";
import OthersSub from "../../SubHeader/OthersSub";

const Others = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div
        className="group w-[24px] h-[24px] flex items-center justify-center hover:bg-gray-100 hover:rounded-full cursor-pointer relative"
        onClick={() => setIsShow(!isShow)}
      >
        <DownArrow />
        <div className="absolute bg-black text-white w-[45px] text-left  bottom-[-150px] right-[-15px] rounded-[10px] p-2 text-[12px] hidden group-hover:block z-[51]">
          Tài khoản và các tuỳ chọn khác
        </div>
      </div>
      {isShow && <OthersSub />}
    </>
  );
};

export default Others;
