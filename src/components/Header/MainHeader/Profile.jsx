import React, { useEffect, useState } from "react";
import { userSer } from "../../../api/api";
import { notify } from "../../../config/toast/toast";
import { setUserInfo } from "../../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../../api/config";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const { updateAgain } = useSelector((state) => state.userSlice);
  useEffect(() => {
    userSer
      .getUser()
      .then(({ data }) => {
        setUser(data.content);
        dispatch(setUserInfo(data.content));
      })
      .catch((error) => {
        notify.error(error.response.data.message);
      });
  }, [updateAgain]);

  const renderAvtar = () => {
    if (user?.avatar) {
      return (
        <img
          className="w-[24px] h-[24px]  rounded-full object-cover"
          src={`${BASE_URL}public/img/${user?.avatar}`}
          alt="avatar"
        />
      );
    } else {
      return (
        <div className="w-[24px] h-[24px] bg-gray-300 rounded-full flex items-center justify-center">
          <p className="text-primary font-bold">
            {user?.full_name.slice(0, 1)}
          </p>
        </div>
      );
    }
  };

  return (
    <div
      className="group w-[48px] h-[48px] flex items-center justify-center hover:bg-gray-100 hover:rounded-full cursor-pointer relative"
      onClick={() => {
        navigate("/personal/saved");
      }}
    >
      {user && renderAvtar()}
      <div className="absolute  z-[51] bg-black text-white w-[100px] text-center  bottom-[-40px] right-[40px] translate-x-[70%] rounded-[10px] p-2 text-[12px] hidden group-hover:block">
        Hồ sơ của bạn
      </div>
    </div>
  );
};

export default Profile;
