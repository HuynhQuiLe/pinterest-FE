import React from "react";
import U from "../components/SVG/U";
import { useEffect, useState } from "react";
import { userSer } from "../api/api";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../api/config";

const PersonalLayout = () => {
  const [user, setUser] = useState(null);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    userSer
      .getUser()
      .then(({ data }) => {
        setUser(data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderAvatar = () => {
    if (user?.avatar) {
      return (
        <img
          className="w-[120px] h-[120px]  rounded-full object-cover"
          src={`${BASE_URL}public/img/${user?.avatar}`}
          alt="avatar"
        />
      );
    } else {
      return (
        <div className="w-[120px] h-[120px] bg-gray-200 rounded-full flex items-center justify-center">
          <p className="text-black text-[50px] font-bold">
            {user?.full_name.slice(0, 1)}
          </p>
        </div>
      );
    }
  };
  return (
    <div className="pt-[80px]">
      <div className="text-center pt-[20px]">
        <div className="flex items-center justify-center">{renderAvatar()}</div>
        <p className="text-[36px] font-semibold">{user?.full_name}</p>
        <div className="flex items-center justify-center">
          <div className="w-[15px] h-[15px] bg-gray-500 rounded-full flex items-center justify-center mr-1">
            <U width={8} height={8} />
          </div>
          <p className="text-[14px] font-light text-[#5f5f5f]">
            {user?.email.slice(0, user?.email.indexOf("@"))}
          </p>
        </div>
        <p className=" font-light">0 người đang theo dõi</p>
        <div className="pt-[8px] mt-[8px]">
          <button className=" py-[12px] px-[16px] bg-gray-100 font-semibold  hover:bg-gray-200 rounded-[24px] mx-1">
            Chia sẻ
          </button>
          <button
            className=" py-[12px] px-[16px] bg-gray-100 font-semibold  hover:bg-gray-200 rounded-[24px] mx-1"
            onClick={() => {
              navigate("/profile");
            }}
          >
            Chỉnh sửa hồ sơ
          </button>
        </div>
      </div>
      <div className=" flex justify-center mt-[30px] pb-[40px]">
        <div className=" flex">
          <div
            className=" relative font-semibold p-[8px] w-fit mx-[10px] cursor-pointer"
            onClick={() => navigate("/personal/created")}
          >
            <p>Đã tạo</p>
            {pathname.includes("created") && (
              <div className="absolute h-[3px] w-[80%] bg-black bottom-0 left-[50%] translate-x-[-50%]"></div>
            )}
          </div>
          <div
            className=" relative font-semibold p-[8px] w-fit mx-[10px] cursor-pointer"
            onClick={() => navigate("/personal/saved")}
          >
            <p>Đã lưu</p>
            {pathname.includes("saved") && (
              <div className="absolute h-[3px] w-[80%] bg-black bottom-0 left-[50%] translate-x-[-50%]"></div>
            )}
          </div>
        </div>
      </div>

      {/* show photo */}
      <Outlet />
    </div>
  );
};

export default PersonalLayout;
