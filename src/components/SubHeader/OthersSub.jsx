import React, { useEffect, useState } from "react";
import Tick from "../SVG/Tick";
import Logout from "./Logout";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../api/config";
import { userSer } from "../../api/api";

const OthersSub = () => {
  const [userInfo, setUserInfor] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    userSer
      .getUser()
      .then(({ data }) => {
        setUserInfor(data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderAvatar = () => {
    if (userInfo?.avatar) {
      return (
        <img
          className="w-[60px] h-[60px]  rounded-full object-cover"
          src={`${BASE_URL}public/img/${userInfo?.avatar}`}
          alt="avatar"
        />
      );
    } else {
      return (
        <div className="w-[60px] h-[60px] bg-gray-300 rounded-full flex items-center justify-center">
          <p className="text-primary font-bold text-[30px]">
            {userInfo?.full_name.slice(0, 1)}
          </p>
        </div>
      );
    }
  };

  return (
    <div
      className="fixed bg-white p-[8px] z-50 rounded-[16px] top-[75px] right-0  max-h-[85vh] overflow-y-scroll"
      style={{ boxShadow: "0 0 8px rgba(0, 0, 0, 0.2)" }}
    >
      <p className="p-[8px] text-[12px] font-light text-black">
        Đang đăng nhập
      </p>
      <div
        className="p-[8px] rounded-[10px] flex items-center justify-between hover:bg-gray-200  cursor-pointer"
        onClick={() => {
          navigate("/personal/saved");
        }}
      >
        <div className="flex items-center mr-[16px] max-h-[60px]">
          <div className="mr-[8px]">{renderAvatar()}</div>
          <div>
            <h5 className=" font-semibold">{userInfo?.full_name}</h5>
            <p className=" text-[14px] font-light leading-[15px] text-[#5f5f5f]">
              Cá nhân
            </p>
            <p className=" text-[14px] font-light leading-[15px] text-[#5f5f5f]">
              {userInfo?.email}
            </p>
          </div>
        </div>
        <div>
          <Tick />
        </div>
      </div>
      <div className="mt-[16px]">
        <p className="p-[8px] text-[12px] font-light text-black">
          Tài khoản của bạn
        </p>
        <div>
          <p className="p-[8px] font-semibold text-[16px] cursor-pointer hover:bg-gray-200 rounded-[10px]">
            Thêm tài khoản
          </p>
          <p className="p-[8px] font-semibold text-[16px] cursor-pointer hover:bg-gray-200 rounded-[10px]">
            Chuyển đổi thành tài khoản doanh nghiệp
          </p>
        </div>
      </div>
      <div className="mt-[16px]">
        <p className="p-[8px] text-[12px] font-light text-black">
          Tùy chọn khác
        </p>
        <div>
          <p className="p-[8px] font-semibold text-[16px] cursor-pointer hover:bg-gray-200 rounded-[10px]">
            Cài đặt
          </p>
          <p className="p-[8px] font-semibold text-[16px] cursor-pointer hover:bg-gray-200 rounded-[10px]">
            Điều chỉnh bảng tin nhà của bạn
          </p>
          <p className="p-[8px] font-semibold text-[16px] cursor-pointer hover:bg-gray-200 rounded-[10px]">
            Cài đặt ứng dụng Chrome
          </p>
          <p className="p-[8px] font-semibold text-[16px] cursor-pointer hover:bg-gray-200 rounded-[10px]">
            Quyền riêng tư của bạn
          </p>
          <p className="p-[8px] font-semibold text-[16px] cursor-pointer hover:bg-gray-200 rounded-[10px]">
            Nhận trợ giúp
          </p>
          <p className="p-[8px] font-semibold text-[16px] cursor-pointer hover:bg-gray-200 rounded-[10px]">
            Xem điều khoản dịch vụ
          </p>
          <p className="p-[8px] font-semibold text-[16px] cursor-pointer hover:bg-gray-200 rounded-[10px]">
            Xem chính sách quyền riêng tư
          </p>
          <p className="p-[8px] font-semibold text-[16px] cursor-pointer hover:bg-gray-200 rounded-[10px]">
            Làm người thử nghiệm beta
          </p>
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default OthersSub;
