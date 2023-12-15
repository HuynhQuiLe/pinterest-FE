import React from "react";
import ThreeDots from "../../components/SVG/ThreeDots";
import Share from "../../components/SVG/Share";
import Link from "../../components/SVG/Link";
import SaveButton from "../../components/SaveButton/SaveButton";
import DownArrow from "../../components/SVG/DownArrow";

const Options = ({ photo_id }) => {
  return (
    <div className="pt-[32px] pr-[32px] w-full flex items-center justify-between">
      <div className=" flex justify-start items-center">
        <div className="w-[48px] h-[48px] rounded-full hover:bg-gray-100 cursor-pointer flex items-center justify-center">
          <ThreeDots />
        </div>
        <div className="w-[48px] h-[48px] rounded-full hover:bg-gray-100 cursor-pointer flex items-center justify-center">
          <Share />
        </div>
        <div className="w-[48px] h-[48px] rounded-full hover:bg-gray-100 cursor-pointer flex items-center justify-center">
          <Link />
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex items-center cursor-pointer mr-4">
          <p className="mr-2 font-semibold">Chọn</p>
          <div>
            <DownArrow />
          </div>
        </div>
        <SaveButton photo_id={photo_id} />
      </div>
    </div>
  );
};

export default Options;
