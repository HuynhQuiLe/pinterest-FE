import React, { useEffect, useState } from "react";
import Cross from "../../components/SVG/Cross";
import Plus from "../../components/SVG/Plus";
import OpenTwoArrow from "../../components/SVG/OpenTwoArrow";
import Upload from "../../components/SVG/Upload";
import { photoSer, userSer } from "../../api/api";
import Edit from "../../components/SVG/Edit";
import { notify } from "../../config/toast/toast";
import { BASE_URL } from "../../api/config";

const CreatePage = () => {
  const [user, setUser] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [photo, setPhoto] = useState({
    photo_name: "",
    description: "",
  });

  useEffect(() => {
    userSer
      .getUser()
      .then(({ data }) => {
        setUser(data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderAvatar = () => {
    if (user?.avatar) {
      return (
        <img
          className="w-[45px] h-[45px]  rounded-full object-cover border-[1px]"
          src={`${BASE_URL}public/img/${user?.avatar}`}
          alt="avatar"
        />
      );
    } else {
      return (
        <div className="w-[45px] h-[45px] bg-gray-300 rounded-full flex items-center justify-center">
          <p className="text-black font-bold">{user?.full_name.slice(0, 1)}</p>
        </div>
      );
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setPhoto({ ...photo, [e.target.name]: e.target.value });
  };

  const handleSelectPhoto = (evt) => {
    let files = evt.target.files;
    let f = files[0];

    // show preview
    let reader = new FileReader();
    reader.readAsDataURL(f);
    reader.onload = function (oFREvent) {
      document.getElementById("showPriview").src = oFREvent.target.result;
    };
    setIsSelected(true);
  };

  const create = () => {
    const input = document.querySelector("#upload");
    var dataPhoto = new FormData();
    dataPhoto.append("photo", input.files[0]);
    dataPhoto.append("photo_name", photo.photo_name);
    dataPhoto.append("description", photo.description);
    photoSer
      .addPhoto(dataPhoto)
      .then(({ data }) => {
        notify.success(data.message);
        reset();
      })
      .catch((error) => {
        notify.error(error.response.data.message);
      });
  };

  const reset = () => {
    setPhoto({
      photo_name: "",
      description: "",
    });

    setIsSelected(false);
    document.querySelector("#upload").value = "";
  };

  return (
    <div className="pt-[80px] h-[100vh] w-full  overflow-hidden">
      <div className="w-[100%] h-[100%] border-t-[1px] border-[#cdcdcd] flex">
        <div className="h-[100%] w-[80px]  border-r-[1px] border-[#cdcdcd]">
          <div className="w-[80px] h-[80px] flex items-center justify-center p-[16px]">
            <div className="w-[48px] h-[48px] rounded-full hover:bg-gray-100 flex items-center justify-center cursor-pointer">
              <OpenTwoArrow />
            </div>
          </div>
          <div className="w-[80px] h-[80px] flex items-center justify-center p-[16px] border-b-[1px] border-[#cdcdcd]">
            <div className="w-[48px] h-[48px] rounded-full hover:bg-gray-100 flex items-center justify-center cursor-pointer">
              <Plus />
            </div>
          </div>
        </div>
        <div className="h-[100%]  w-[100%] ">
          <div className="h-[80px]  border-b-[1px] w-[100%] border-[#cdcdcd] flex items-center justify-between px-[30px]">
            <p className=" text-[20px] font-semibold">Tạo Ghim</p>
            {isSelected && (
              <button
                className=" text-[20px] font-semibold bg-primary hover:bg-primary_dark rounded-[32px] py-2 px-3 text-white "
                onClick={create}
              >
                Đăng
              </button>
            )}
          </div>
          <div className="mt-[25px]">
            <div className="w-[1000px] mx-auto flex">
              <div className="">
                <div className="w-[375px]">
                  {!isSelected && (
                    <label
                      htmlFor="upload"
                      className=" cursor-pointer relative w-full h-[453px] bg-[#efefef] rounded-[24px] border-dashed border-[2px] border-gray-300 flex items-center justify-center "
                    >
                      <div className=" max-w-[220px] ">
                        <div className=" flex items-center justify-center">
                          <Upload />
                        </div>
                        <p className="py-[8px] text-center">
                          Chọn một tệp hoặc kéo và thả tệp ở đây
                        </p>
                      </div>

                      <div className="absolute w-[100%] py-[32px] bottom-0 left-0 text-center text-[14px] font-light">
                        <p>
                          Bạn nên sử dụng tập tin .jpg chất lượng cao có kích
                          thước dưới 20MB hoặc tập tin .mp4 chất lượng cao có
                          kích thước dưới 200MB.
                        </p>
                      </div>
                    </label>
                  )}

                  {isSelected && (
                    <div className=" relative">
                      <img
                        alt="preview"
                        id="showPriview"
                        className=" rounded-[24px]"
                      />
                      <label
                        htmlFor="upload"
                        className="absolute h-[40px] w-[40px] rounded-full bg-gray-100 flex items-center justify-center top-[15px] right-[15px] hover:bg-gray-200 cursor-pointer"
                      >
                        <Edit />
                      </label>
                    </div>
                  )}
                  <input
                    type="file"
                    name="upload"
                    id="upload"
                    className="hidden"
                    onChange={handleSelectPhoto}
                  />
                  {!isSelected && (
                    <div className="border-t-[1px] border-[#cdcdcd] h-[65px] flex items-end mt-[24px]">
                      <button className="py-[8px] px-[12px] bg-[#efefef] text-[16px] font-semibold text-center w-full rounded-[24px]">
                        Lưu từ URL
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="ml-[50px] w-full">
                <form className="w-full">
                  <input
                    type="text"
                    name="photo_name"
                    value={photo.photo_name}
                    disabled={!isSelected}
                    onChange={handleChange}
                    placeholder="Tạo tiêu đề"
                    className={`text-[30px] font-bold border-b-[1px] bg-transparent border-gray-300 w-full outline-none ${
                      !isSelected && "cursor-not-allowed"
                    }`}
                  />

                  <div className="my-[30px] flex items-center">
                    <div className="mr-3">{renderAvatar()}</div>
                    <p>{user?.full_name}</p>
                  </div>

                  <input
                    type="text"
                    name="description"
                    value={photo.description}
                    disabled={!isSelected}
                    onChange={handleChange}
                    placeholder="Cho mọi người biết Ghim của bạn nói về điều gì"
                    className={`text-[16px]  border-b-[1px] bg-transparent border-gray-300 w-full outline-none ${
                      !isSelected && "cursor-not-allowed"
                    }`}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
