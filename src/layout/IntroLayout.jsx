import React from "react";
import Header from "../components/Header/MainHeader/Header";
import { Outlet } from "react-router-dom";
import IntroHeader from "../components/Header/IntroHeader/IntroHeader";

const IntroLayout = () => {
  return (
    <div>
      <IntroHeader />
      <Outlet />
    </div>
  );
};

export default IntroLayout;
