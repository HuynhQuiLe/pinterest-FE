import React from "react";
import Header from "../components/Header/MainHeader/Header";
import { Outlet } from "react-router-dom";
import Private from "./Private";
import More from "../components/More/More";

const MainLayout = () => {
  return (
    <Private>
      <div>
        <Header />
        <Outlet />
        <More />
      </div>
    </Private>
  );
};

export default MainLayout;
