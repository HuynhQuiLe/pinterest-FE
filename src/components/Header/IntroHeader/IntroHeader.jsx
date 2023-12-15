import React, { useState } from "react";
import U from "../../SVG/U";
import Login from "../../Login/Login";
import Signup from "../../Signup/Signup";

const IntroHeader = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const closeModalLogin = () => {
    setShowLogin(false);
    document.querySelector("body").classList.remove("overflow-hidden");
  };

  const closeModalSignUp = () => {
    setShowSignup(false);
    document.querySelector("body").classList.remove("overflow-hidden");
  };

  const openModalLogin = () => {
    setShowLogin(true);
  };

  const openModalSignUp = () => {
    setShowSignup(true);
  };

  return (
    <>
      <header className=" h-[80px] w-[100vw] px-[16px] py-[4px] flex items-center justify-between fixed shadow-sm bg-white">
        <div className="h-[56px] w-full flex items-center justify-between">
          <div className="flex items-center">
            <div className="px-[12px] flex items-center justify-center cursor-pointer">
              <div className="w-[32px] h-[32px] flex items-center justify-center rounded-full  hover:bg-gray-100">
                <U width={32} height={32} />
              </div>
              <div>
                <p className=" text-primary text-[20px] font-semibold ml-1">
                  Unknown
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className=" mx-[8px] py-[12px] flex items-center justify-center cursor-pointer">
                <p className=" font-medium p-[8px] hover:bg-[#efefef] hover:rounded-[10px]">
                  Watch
                </p>
              </div>
              <div className=" mx-[8px] py-[12px] flex items-center justify-center cursor-pointer">
                <p className=" font-medium p-[8px] hover:bg-[#efefef] hover:rounded-[10px]">
                  Explore
                </p>
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-end">
            <div className="flex mr-[24px]">
              <div className=" mx-[8px] py-[12px] flex items-center justify-center cursor-pointer">
                <p className=" font-medium p-[8px] hover:underline">About</p>
              </div>
              <div className=" mx-[8px] py-[12px] flex items-center justify-center cursor-pointer">
                <p className=" font-medium p-[8px] hover:underline">Business</p>
              </div>
              <div className=" mx-[8px] py-[12px] flex items-center justify-center cursor-pointer">
                <p className=" font-medium p-[8px] hover:underline">Blog</p>
              </div>
            </div>
            <div className="mr-3">
              <button
                className=" min-h-[40px] px-[12px] py-[8px] bg-primary text-white font-medium rounded-[24px] hover:bg-primary_dark"
                onClick={() => setShowLogin(!showLogin)}
              >
                Log in
              </button>
            </div>
            <div>
              <button
                className=" min-h-[40px] px-[12px] py-[8px] bg-[#efefef] text-black font-medium rounded-[24px] hover:bg-[#e2e2e2]"
                onClick={() => setShowSignup(!showSignup)}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </header>
      {showLogin && (
        <Login
          closeModalLogin={closeModalLogin}
          openModalSignUp={openModalSignUp}
        />
      )}
      {showSignup && (
        <Signup
          closeModalSignUp={closeModalSignUp}
          openModalLogin={openModalLogin}
        />
      )}
    </>
  );
};

export default IntroHeader;
