import React from "react";
import { BASE_URL } from "../../api/config";

const Subscribe = ({ photo }) => {
  const renderAvatarAuthor = () => {
    if (photo?.user.avatar) {
      return (
        <img
          src={`${BASE_URL}public/img/${photo?.user.avatar}`}
          alt="avatar"
          className="w-[48px] h-[48px] object-cover rounded-full"
        />
      );
    } else {
      return (
        <div className="w-[48px] h-[48px] rounded-full bg-gray-200 flex items-center justify-center">
          <p className="text-[30px] text-primary  font-semibold">
            {photo?.user.full_name.slice(0, 1)}
          </p>
        </div>
      );
    }
  };
  return (
    <div className="flex items-center justify-between pr-[32px] mt-[16px] mb-[32px]">
      <div className="flex items-center justify-start cursor-pointer">
        <div className="mr-2">{renderAvatarAuthor()}</div>
        <div className="px-[4px]">
          <p className=" leading-[16px] font-medium text-[14px]">
            {photo?.user.full_name}
          </p>
          <p className=" leading-[16px] text-[14px] font-light">
            0 người theo dõi
          </p>
        </div>
      </div>
      <div>
        <button className="py-[12px] px-[16px] bg-gray-100 rounded-[32px] font-semibold hover:bg-gray-200">
          Theo dõi
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
