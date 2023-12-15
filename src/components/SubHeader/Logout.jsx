import React from "react";
import { userLocalStorage } from "../../api/localStorage";
import { authSer } from "../../api/api";
import { notify } from "../../config/toast/toast";

const Logout = () => {
  const logout = () => {
    authSer
      .logout()
      .then(({ data }) => {
        userLocalStorage.remove();
        notify.success(data.message);
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      })
      .catch((error) => {
        notify.error(error.response.data.message);
      });
  };

  return (
    <p
      className="p-[8px] font-semibold text-[16px] cursor-pointer hover:bg-gray-200 rounded-[10px]"
      onClick={logout}
    >
      Đăng xuất
    </p>
  );
};

export default Logout;
