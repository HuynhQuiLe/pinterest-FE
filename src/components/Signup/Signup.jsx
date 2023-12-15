import React, { useEffect, useState } from "react";
import U from "../SVG/U";
import Google from "../SVG/Google";
import Cross from "../SVG/Cross";
import Hide from "../SVG/Hide";
import Show from "../SVG/Show";
import Login from "../Login/Login";
import { notify } from "../../config/toast/toast";
import { authSer } from "../../api/api";
import { userLocalStorage } from "../../api/localStorage";
import { setToken } from "../../redux/userSlice";
import { useDispatch } from "react-redux";

const Signup = ({ closeModalSignUp, openModalLogin }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    full_name: "",
    email: "",
    pass_word: "",
    birthday: "",
  });
  const [showLogin, setShowLogin] = useState(false);
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    document.querySelector("body").classList.add("overflow-hidden");
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const signup = (e) => {
    e.preventDefault();
    authSer
      .signup(user)
      .then(({ data }) => {
        notify.success(data.message);
        const userLogin = {
          email: user.email,
          pass_word: user.pass_word,
        };

        authSer.login(userLogin).then(({ data }) => {
          // set local storage
          userLocalStorage.set(data.content);

          // set redux
          dispatch(setToken(data.content));

          //redireact
          setTimeout(() => {
            window.location.href = "/";
          }, 1000);

          // allow scroll
          document.querySelector("body").classList.remove("overflow-hidden");
        });
      })
      .catch((error) => {
        notify.error(error.response.data.message);
      });
  };

  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.3)] fixed left-0 z-20  overflow-scroll top-0">
        <div className="w-[488px] min-h[200px] mx-auto top-[50%] translate-y-[-50%] bg-white opacity-100 rounded-[32px] relative shadow-[rgba(0, 0, 0, 0.45) 0px 2px 10px] pt-[20px] pb-[80px] px-[10px] relative z-50">
          <div className=" min-h-[300px]">
            <div className="w-[40px] h-[40px] mx-auto mt-[8px] mb-[6px] flex items-center justify-center">
              <U width={33} height={33} />
            </div>
            <h1 className="text-center text-[32px] px-[16px] font-semibold w-[400px] mx-auto">
              Welcome to Unknown
            </h1>
            <p className="text-[16px]  text-center text-black mb-[16px]">
              Find new ideas to try
            </p>
            <form action="" className="w-[286px] m-auto">
              <div className="mb-[8px]">
                <label htmlFor="full_name" className="block ml-[8px] mb-[4px]">
                  Full name
                </label>
                <input
                  value={user.full_name}
                  autoComplete="flase"
                  type="text"
                  name="full_name"
                  className="min-h-[48px] px-[16px] py-[8px] border-input_border border-[2px] w-full rounded-[16px]"
                  placeholder="Full name"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-[8px]">
                <label htmlFor="email" className="block ml-[8px] mb-[4px]">
                  Email
                </label>
                <input
                  value={user.email}
                  autoComplete="flase"
                  type="text"
                  name="email"
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
                    autoComplete="flase"
                    type={isShow ? "text" : "password"}
                    name="pass_word"
                    className="min-h-[48px] px-[16px] py-[8px] border-input_border border-[2px] w-full rounded-[16px]"
                    placeholder="Create a password"
                    value={user.pass_word}
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

              <div className="mb-[8px]">
                <label
                  htmlFor="birthday"
                  className=" ml-[8px] mb-[4px] flex items-center relative"
                >
                  Birthdate
                  <span className="group bg-gray-500 w-[15px] h-[15px] text-white text-[10px]  rounded-full flex items-center justify-center ml-2">
                    i
                    <p className=" absolute right-0 w-[180px] font-light p-2 rounded-[5px] bg-black text-white text-[12px] hidden group-hover:block">
                      To help keep Pinterest safe, we now require your
                      birthdate. Your birthdate also helps us provide more
                      personalized recommendations and relevant ads. We don't
                      share this information and it won't be visible on your
                      profile.
                    </p>
                  </span>
                </label>
                <input
                  autoComplete="flase"
                  type="date"
                  name="birthday"
                  value={user.birthday}
                  onChange={handleChange}
                  className="min-h-[48px] px-[16px] py-[8px] border-input_border border-[2px] w-full rounded-[16px]"
                  placeholder="dd/mm/yyyy"
                />
              </div>

              <div className="mt-[16px]">
                <p></p>
              </div>
              <div>
                <button
                  className="rounded-[20px] h-[40px] w-full px-[18px] text-[15px] font-bold text-center bg-primary text-white hover:bg-primary_dark"
                  onClick={signup}
                >
                  Sign up
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

            <div className="text-center mt-[8px] mb-[4px] text-[12px]">
              <span>
                Already a member?{" "}
                <span
                  href="/"
                  className="font-bold  cursor-pointer "
                  onClick={() => {
                    closeModalSignUp();
                    openModalLogin();
                  }}
                >
                  Log in
                </span>
              </span>
            </div>
          </div>

          <div className="bg-gray-200 absolute w-[488px] bottom-0 left-0 rounded-bl-[32px] rounded-br-[32px] h-[60px] flex items-center justify-center">
            <button className=" font-semibold">
              Create a free business account
            </button>
          </div>
          <div
            className=" absolute top-3 right-5 w-[40px] h-[40px] flex items-center justify-center cursor-pointer hover:rounded-full hover:bg-gray-100"
            onClick={closeModalSignUp}
          >
            <Cross />
          </div>
        </div>
      </div>
      {showLogin && <Login />}
    </>
  );
};

export default Signup;
