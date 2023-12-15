import React from "react";
import { useState, useEffect } from "react";
import { userSer, photoSer } from "../../api/api";
import { notify } from "../../config/toast/toast";
import { BASE_URL } from "../../api/config";
import { reloadData } from "../../redux/userSlice";
import { useDispatch } from "react-redux";

const AccountPage = () => {
  const dispatch = useDispatch();
  const [isChanged, setIsChanged] = useState(false);
  const [isChangedAvatar, setIsChangedAvatar] = useState(false);
  const [user, setUser] = useState(null);

  const fetch = () => {
    userSer
      .getUser()
      .then(({ data }) => {
        setUser(data.content);
      })
      .catch((error) => {
        notify.error(error.response.data.message);
      });
  };

  useEffect(() => {
    fetch();
  }, []);

  const reset = () => {
    fetch();
    setIsChanged(false);
    setIsChangedAvatar(false);
  };

  const renderAvatar = () => {
    if (user?.avatar) {
      return (
        <img
          className="w-[75px] h-[75px]  rounded-full object-cover"
          src={`${BASE_URL}public/img/${user.avatar}`}
          alt="avatar"
        />
      );
    } else {
      return (
        <div className="w-[75px] h-[75px] bg-gray-300 rounded-full flex items-center justify-center">
          <p className="text-primary font-bold text-[20px]">
            {user?.full_name.slice(0, 1)}
          </p>
        </div>
      );
    }
  };

  const handleChange = (e) => {
    setIsChanged(true);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const previewAvatar = (evt) => {
    setIsChanged(true);

    let files = evt.target.files;
    let f = files[0];

    // show preview
    let reader = new FileReader();
    reader.readAsDataURL(f);
    reader.onload = function (oFREvent) {
      document.getElementById("showAvatarPreview").src = oFREvent.target.result;
    };
    setIsChangedAvatar(true);
  };

  const update = () => {
    const input = document.querySelector("#avatar");
    var dataPhoto = new FormData();
    dataPhoto.append("avatar", input.files[0]);
    dataPhoto.append("birthday", user.birthday);
    dataPhoto.append("gender", user.gender);
    dataPhoto.append("full_name", user.full_name);
    dataPhoto.append("phone", user.phone);
    userSer
      .updateUser(dataPhoto)
      .then(({ data }) => {
        notify.success(data.message);
        dispatch(reloadData(new Date().getTime()));
        reset();
      })
      .catch((error) => {
        notify.error(error.response.data.message);
      });
  };

  return (
    <div className="pt-[80px]">
      <div className="pt-[30px] w-[500px] m-auto">
        <h1 className="text-[28px] font-semibold">Chỉnh sửa hồ sơ</h1>
        <p className=" font-light">
          Hãy giữ riêng tư thông tin cá nhân của bạn. Thông tin bạn thêm vào đây
          hiển thị cho bất kỳ ai có thể xem hồ sơ của bạn.
        </p>
        <div>
          <p className="mt-[32px] mb-[4px] text-[12px] font-light">Ảnh</p>
          <div className="flex items-center ">
            {!isChangedAvatar && (
              <div className="my-[8px] mr-[8px]">{renderAvatar()}</div>
            )}
            {isChangedAvatar && (
              <div className="my-[8px] mr-[8px]">
                <img
                  className="w-[75px] h-[75px]  rounded-full object-cover"
                  id="showAvatarPreview"
                />
              </div>
            )}

            <input
              type="file"
              id="avatar"
              className="hidden"
              onChange={previewAvatar}
            />
            <div>
              <label
                htmlFor="avatar"
                className=" px-[16px] py-[12px] font-semibold bg-gray-100 hover:bg-gray-200 m-[8px] rounded-[24px] cursor-pointer"
              >
                Thay đổi
              </label>
            </div>
          </div>
        </div>

        <form className="pb-[120px]">
          <div className="mb-5">
            <label
              className="block text-[12px] font-light mb-2"
              htmlFor="full_name"
            >
              Họ tên
            </label>
            <input
              type="text"
              className="w-full border-[2px] border-[#a5a5a5] py-[10px] px-[16px] rounded-[12px] "
              name="full_name"
              value={user?.full_name}
              onChange={handleChange}
              placeholder=" Họ tên"
            />
          </div>

          <div className="mb-5">
            <label
              className="block text-[12px] font-light mb-2"
              htmlFor="birthday"
            >
              Ngày sinh
            </label>
            <input
              type="date"
              className="w-full border-[2px] border-[#a5a5a5] py-[10px] px-[16px] rounded-[12px] "
              name="birthday"
              value={user?.birthday ? user?.birthday.slice(0, 10) : ""}
              onChange={handleChange}
              placeholder="dd/mm/yyyy"
            />
          </div>

          <div className="mb-5">
            <label
              className="block text-[12px] font-light mb-2"
              htmlFor="phone"
            >
              Số điện thoại
            </label>
            <input
              type="text"
              className="w-full border-[2px] border-[#a5a5a5] py-[10px] px-[16px] rounded-[12px] "
              name="phone"
              value={user?.phone ? user?.phone : ""}
              onChange={handleChange}
              placeholder="Số điện thoại"
            />
          </div>

          <div className="mb-5">
            <label
              className="block text-[12px] font-light mb-2"
              htmlFor="gender"
            >
              Giới tính
            </label>
            <select
              name="gender"
              value={user?.gender}
              onChange={handleChange}
              className="w-full border-[2px] border-[#a5a5a5] py-[10px] px-[16px] rounded-[12px] "
            >
              <option value={true}>Nam</option>
              <option value={false}>Nữ</option>
            </select>
          </div>
        </form>
      </div>

      <div
        className="fixed px-[20px] py-[16px] bottom-0 left-0 w-full flex items-center justify-center bg-white"
        style={{ boxShadow: "0 0 8px rgba(0, 0, 0, 0.10)" }}
      >
        <button
          className={`px-[16px] py-[12px] font-semibold bg-gray-100  m-[8px] rounded-[24px] ${
            !isChanged
              ? "cursor-not-allowed opacity-60"
              : "hover:bg-gray-200 opacity-100"
          }`}
          disabled={!isChanged}
          onClick={reset}
        >
          Thiết lập lại
        </button>
        <button
          className={`px-[16px] py-[12px] font-semibold bg-gray-100  m-[8px] rounded-[24px] ${
            !isChanged
              ? "cursor-not-allowed opacity-60"
              : "hover:bg-primary_dark text-white opacity-100 bg-primary"
          }`}
          disabled={!isChanged}
          onClick={update}
        >
          Lưu
        </button>
      </div>
    </div>
  );
};

export default AccountPage;
