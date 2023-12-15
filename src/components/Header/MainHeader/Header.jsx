import React from "react";
import U from "../../SVG/U";
import SearchIcon from "../../SVG/SearchIcon";
import Notification from "./Notification";
import Messenger from "./Messenger";
import Profile from "./Profile";
import Others from "./Others";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <header className=" h-[80px] w-[100vw] px-[16px] py-[4px] flex items-center justify-between fixed z-50  bg-white">
      <div className="h-[56px] w-full flex items-center">
        <div className="flex items-center">
          <div
            className="w-[48px] h-[48px] flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-100"
            onClick={() => {
              navigate("/");
            }}
          >
            <div className="w-[24px] h-[24px] bg-primary rounded-full flex items-center justify-center">
              <U width={15} height={15} />
            </div>
          </div>
          <div
            className={`h-[48px] min-w-[60px] ${
              pathname === "/"
                ? " bg-black rounded-[24px]  text-white"
                : "text-black"
            } py-0 px-[16px] rounded-[24px] flex items-center justify-center cursor-pointer`}
          >
            <p
              className="min-w-[75px]"
              onClick={() => {
                navigate("/");
              }}
            >
              Trang chủ
            </p>
          </div>
          <div
            className={` h-[48px] w-[60px] flex items-center justify-center cursor-pointer ${
              pathname === "/create"
                ? " bg-black rounded-[24px]  text-white"
                : "text-black"
            }`}
          >
            <p
              className=" font-bold"
              onClick={() => {
                navigate("/create");
              }}
            >
              Tạo
            </p>
          </div>
        </div>
        <div className=" h-[48px] w-[-webkit-fill-available] flex items-center justify-center px-[8px] relative">
          <input
            type="text"
            className=" rounded-[24px] w-full bg-gray-100 pl-[16px] py-0 h-full"
            placeholder="      Tìm kiếm"
          />
          <div className=" absolute left-6">
            <SearchIcon />
          </div>
        </div>
        <div className="flex items-center">
          <Notification />
          <Messenger />
          <Profile />
          <Others />
        </div>
      </div>
    </header>
  );
};

export default Header;
