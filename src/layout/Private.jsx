import React from "react";
import { useSelector } from "react-redux";
import { notify } from "../config/toast/toast";

const Private = ({ children }) => {
  let { user } = useSelector((state) => state.userSlice);

  if (user) {
    return children;
  }
  notify.error("Vui lòng đăng nhập để sử dụng dịch vụ");
};

export default Private;
