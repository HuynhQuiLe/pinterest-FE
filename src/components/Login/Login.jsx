import React, { useEffect, useState } from "react";
import U from "../SVG/U";
import Google from "../SVG/Google";
import Cross from "../SVG/Cross";
import Hide from "../SVG/Hide";
import Show from "../SVG/Show";
import { authSer } from "../../api/api";
import { notify } from "../../config/toast/toast";
import { useDispatch } from "react-redux";
import { userLocalStorage } from "../../api/localStorage";
import { setToken } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Login = ({ closeModalLogin, openModalSignUp }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isShow, setIsShow] = useState(false);
  const [user, setUser] = useState({
    email: "",
    pass_word: "",
  });

  useEffect(() => {
    document.querySelector("body").classList.add("overflow-hidden");
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    authSer
      .login(user)
      .then(({ data }) => {
        // set local storage
        userLocalStorage.set(data.content);

        // set redux
        dispatch(setToken(data.content));

        // give notification
        notify.success(data.message);

        //redireact
        setTimeout(() => {
          window.location.href = "/";
        }, 1500);

        // allow scroll
        document.querySelector("body").classList.remove("overflow-hidden");
      })
      .catch((error) => {
        notify.error(error.response.data.message);
      });
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.3)] fixed left-0 z-20  overflow-scroll top-0">
      <div className="w-[488px] min-h[200px] mx-auto top-[50%] translate-y-[-50%] bg-white opacity-100 rounded-[32px] relative shadow-[rgba(0, 0, 0, 0.45) 0px 2px 10px] pt-[20px] pb-[24px] px-[10px] relative z-50">
        <div className=" min-h-[300px]">
          <div className="w-[40px] h-[40px] mx-auto mt-[8px] mb-[6px] flex items-center justify-center">
            <U width={33} height={33} />
          </div>
          <h1 className="text-center text-[32px] px-[16px] font-semibold w-[400px] mx-auto mb-[22px]">
            Welcome to Unknown
          </h1>
          <form className="w-[286px] m-auto">
            <div className="mb-[8px]">
              <label htmlFor="email" className="block ml-[8px] mb-[4px]">
                Email
              </label>
              <input
                autoComplete="false"
                type="text"
                name="email"
                value={user.email}
                className="min-h-[48px] px-[16px] py-[8px] border-input_border border-[2px] w-full rounded-[16px]"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-[8px]">
              <label htmlFor="pass_word" className="block ml-[8px] mb-[4px]">
                Password
              </label>
              <div className="relative">
                <input
                  autoComplete="false"
                  type={isShow ? "text" : "password"}
                  name="pass_word"
                  value={user.pass_word}
                  className="min-h-[48px] px-[16px] py-[8px] border-input_border border-[2px] w-full rounded-[16px]"
                  placeholder="Password"
                  onChange={handleChange}
                />
                <p
                  className=" absolute flex w-[20px] h-[20px] items-center justify-center right-3 top-[50%] translate-y-[-50%] hover:rounded-full hover:bg-gray-100 cursor-pointer"
                  onClick={() => setIsShow(!isShow)}
                >
                  {isShow ? <Hide /> : <Show />}
                </p>
              </div>
            </div>
            <div>
              <a href="/" className=" hover:underline font-semibold">
                Forgot your password?
              </a>
            </div>
            <div className="mt-[16px]">
              <p></p>
            </div>
            <div>
              <button
                className="rounded-[20px] h-[40px] w-full px-[18px] text-[15px] font-bold text-center bg-primary text-white hover:bg-primary_dark"
                onClick={login}
              >
                Log in
              </button>
            </div>
            <div className="my-[8px]">
              <p className=" font-bold text-center text-[14px]">OR</p>
            </div>
            <div>
              <button
                className="rounded-[20px] h-[40px] w-full px-[18px] text-[15px] font-bold text-center bg-facebook text-white flex items-center opacity-50 cursor-not-allowed"
                disabled
              >
                <img
                  className="mr-2"
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/U7MAWJlE6hZ.png"
                  alt=""
                  width="24"
                  height="24"
                />
                Countinue with Facebook
              </button>
            </div>
            <div className="w-full h-[10px]"></div>
            <div>
              <button
                className="rounded-[20px] h-[40px] w-full px-[18px] text-[15px] text-center bg-white text-black flex items-center border-[1px] border-[#dadce0] opacity-50 cursor-not-allowed"
                disabled
              >
                <Google />
                <p className="text-center w-[-webkit-fill-available] ">
                  Countinue with Google
                </p>
              </button>
            </div>
            <div className="mt-[12px] text-[11px] text-center text-[#767676]">
              <span>
                By continuing, you agree to Pinterest's <br />
                <div className="inline font-bold text-black">
                  <a href="/" className=" hover:underline">
                    {" "}
                    Terms of Service{" "}
                  </a>
                </div>
                and acknowledge you've read <br /> our
                <div className="inline font-bold text-black">
                  <a href="/" className=" hover:underline">
                    {" "}
                    Privacy Policy
                  </a>
                </div>
                .
                <div className="inline font-bold text-black">
                  <a href="/" className=" hover:underline">
                    {" "}
                    Notice at collection
                  </a>
                </div>
                .
              </span>
            </div>
          </form>

          <div className="w-[110px] mx-auto my-[10px] bg-[#d8d6d6] h-[1px]"></div>
          <div className="text-center mb-[4px]">
            <span
              href="/"
              className="font-bold text-[12px] cursor-pointer "
              onClick={() => {
                closeModalLogin();
                openModalSignUp();
              }}
            >
              Not on Unknown yet? Sign up
            </span>
          </div>
          <div className="text-center mt-[8px] mb-[4px] text-[12px]">
            <span>
              Are you a business?{" "}
              <a href="/" className="font-bold  ">
                Get started here!
              </a>
            </span>
          </div>
          <div
            className=" absolute top-3 right-5 w-[40px] h-[40px] flex items-center justify-center cursor-pointer hover:rounded-full hover:bg-gray-100"
            onClick={closeModalLogin}
          >
            <Cross />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
