import React, { useEffect, useState } from "react";
import Share from "../../components/SVG/Share";
import ThreeDots from "../../components/SVG/ThreeDots";
import DirectPageArrow from "../../components/SVG/DirectPageArrow";
import { Navigate, useNavigate } from "react-router-dom";
import { photoSer } from "../../api/api";
import SaveButton from "../../components/SaveButton/SaveButton";
import { BASE_URL } from "../../api/config";

const PhotoItem = ({ photo }) => {
  const navigate = useNavigate();

  return (
    <div className=" max-w-[252px] px-[8px] pb-[16px] pt-0 break-inside-avoid ">
      <div className="group relative cursor-zoom-in z-10">
        <img
          src={`${BASE_URL}public/img/${photo?.photo_url}`}
          alt={`Đây là hình ảnh: ${photo?.photo_name}`}
          className=" w-[236px] h-auto rounded-[20px] border-[1px] border-[#f1f1f1]"
        />

        <div
          className=" hidden group-hover:flex absolute z-[0] w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)] top-0 left-0 rounded-[20px]  flex-col  justify-between "
          onClick={() => {
            navigate(`/details/${photo?.photo_id}`);
          }}
        ></div>

        <div className="hidden group-hover:flex justify-end w-full absolute left-0 top-0 px-[10px] py-[15px]">
          <SaveButton photo_id={photo?.photo_id} />
        </div>
        <div className="hidden group-hover:flex items-center justify-between w-[100%] overflow-hidden absolute left-0 bottom-0 px-[10px] py-[15px]">
          <div className=" py-2 px-4 h-[30px] opacity-80 bg-white rounded-full flex items-center justify-center mx-1 hover:opacity-100 cursor-pointer max-w-[-webkit-fill-available]">
            <div
              className=" font-semibold w-fit text-[14px] max-w-[100px] flex items-center"
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "clip",
              }}
            >
              <div className="text-[10px] mr-1">
                <DirectPageArrow />
              </div>
              <p>google.com</p>
            </div>
          </div>
          <div className="flex justify-end w-[80px]">
            <div className="w-[30px] p-2 h-[30px] opacity-80 bg-white rounded-full flex items-center justify-center mx-1 hover:opacity-100 cursor-pointer">
              <Share />
            </div>
            <div className="w-[30px] p-2 h-[30px] opacity-80 bg-white rounded-full flex items-center justify-center ml-1 hover:opacity-100 cursor-pointer">
              <ThreeDots />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoItem;
