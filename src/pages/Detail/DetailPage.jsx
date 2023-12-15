import React, { useEffect, useState } from "react";
import { commentSer, photoSer, userSer } from "../../api/api";
import { useParams } from "react-router-dom";
import Heard from "../../components/SVG/heard";
import Emotion from "../../components/SVG/Emotion";
import Library from "../../components/SVG/Library";
import Send from "../../components/SVG/Send";
import Comment from "./Comment";
import PhotoInfo from "./PhotoInfo";
import Subscribe from "./Subscribe";
import Options from "./Options";
import HomePage from "../Home/HomePage";
import { notify } from "../../config/toast/toast";
import { BASE_URL } from "../../api/config";

const DetailPage = () => {
  const [photo, setPhoto] = useState(null);
  const [comment, setComment] = useState("");
  const { photo_id } = useParams();
  const [user, setUser] = useState(null);
  const [reloadComment, setReloadComment] = useState(null);

  useEffect(() => {
    setComment("");
    photoSer
      .getPhotoDetails(photo_id)
      .then(({ data }) => {
        console.log(data.content);
        setPhoto(data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [photo_id]);

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
          src={`${BASE_URL}public/img/${user?.avatar}`}
          alt="avatar"
          className="w-[48px] h-[48px] object-cover rounded-full"
        />
      );
    } else {
      return (
        <div className="w-[48px] h-[48px] rounded-full bg-gray-200 flex items-center justify-center">
          <p className="text-[30px] text-primary  font-semibold">
            {user?.full_name.slice(0, 1)}
          </p>
        </div>
      );
    }
  };

  const send = () => {
    const data = {
      content: comment,
    };

    commentSer
      .addComment(photo_id, data)
      .then(({ data }) => {
        setReloadComment(new Date().getTime());
        setComment("");
        notify.success(data.message);
      })
      .catch((error) => {
        notify.error(error.response.data.message);
      });
  };

  return (
    <div className="pt-[80px] ">
      <div className="pt-[10px] mb-[16px]">
        <div
          className="max-w-[1016px] m-auto rounded-[32px] flex justify-between"
          style={{ boxShadow: "0 1px 20px 0 rgba(0, 0, 0, 0.1)" }}
        >
          <div className="p-[20px] flex-1">
            <img
              src={photo && `${BASE_URL}public/img/${photo?.photo_url}`}
              alt={`Đây là hình ảnh: ${photo?.photo_name}`}
              className=" w-[100%] h-auto rounded-[20px]"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div className="pl-[32px] w-full">
              {/* top */}
              <Options photo_id={photo_id} />
              {/* scroll */}
              <div className=" max-h-[300px] overflow-y-scroll">
                <div className="h-[14px] w-full"></div>
                <div className="h-[16px] w-full pr-[32px]"></div>
                {/* {photo name va description} */}
                <PhotoInfo photo={photo} />
                {/* theo doi */}
                <Subscribe photo={photo} />
                {/* nhan xet */}
                <Comment photo_id={photo_id} reloadComment={reloadComment} />
              </div>
            </div>
            <div className="pt-[8px] pb-[16px] px-[32px] border-t-[1px] border-gray-100 flex flex-col">
              <div className="flex justify-between items-center mt-[4px] mb-[12px]">
                <p className="text-[20px] font-semibold">Bạn nghĩ gì?</p>
                <div className="group w-[48px] h-[48px] rounded-full bg-gray-200 flex items-center justify-center cursor-pointer relative z-10">
                  <Heard />
                  <div className="absolute bg-black text-white w-[70px] bottom-[-80%]  text-center rounded-[10px] p-2 text-[12px] hidden group-hover:block z-20">
                    Phản ứng
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="w-[48px] h-[48px] mr-2">{renderAvatar()}</div>
                <div className=" w-[400px] relative z-0">
                  <input
                    placeholder="Thêm nhận xét"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className={`border cursor-pointer hover:bg-gray-300 h-[48px] border-r-0 w-[-webkit-fill-available] text-start rounded-[24px] pr-[120px] pl-[16px] ${
                      comment ? "bg-white hover:bg-white" : "bg-gray-200"
                    }`}
                  ></input>

                  <div className="absolute top-0 right-0 flex items-center justify-center bg-transparent h-[48px]  pr-[10px]">
                    <div className="m-[2px] w-[30px] h-[30px] rounded-full hover:bg-gray-300 flex items-center justify-center cursor-pointer">
                      <Emotion />
                    </div>
                    <div className="m-[2px] w-[30px] h-[30px] rounded-full  hover:bg-gray-300 flex items-center justify-center cursor-pointer">
                      <Library />
                    </div>
                    {comment && (
                      <div
                        className="m-[2px] w-[32px] h-[32px] rounded-full bg-primary  hover:bg-primary_dark flex items-center justify-center cursor-pointer"
                        onClick={send}
                      >
                        <Send />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="">
          <p className=" py-[12px] px-[32px] text-[20px] font-semibold text-center mb-[4px]">
            Thêm nội dung để khám phá
          </p>
          <HomePage noPaddingTop={true} />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
