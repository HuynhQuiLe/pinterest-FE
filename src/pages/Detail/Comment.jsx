import React, { useEffect, useState } from "react";
import UpArrow from "../../components/SVG/UpArrow";
import { commentSer } from "../../api/api";
import Heard from "../../components/SVG/heard";
import ThreeDots from "../../components/SVG/ThreeDots";
import { BASE_URL } from "../../api/config";

const Comment = ({ photo_id, reloadComment }) => {
  const [comments, setComments] = useState(null);
  useEffect(() => {
    commentSer
      .getAllCommentsByPhoto(photo_id)
      .then(({ data }) => {
        setComments(data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [photo_id, reloadComment]);

  const renderAvatar = (comment) => {
    if (comment?.user.avatar) {
      return (
        <img
          src={`${BASE_URL}public/img/${comment?.user.avatar}`}
          alt="avatar"
          className="w-[32px] h-[32px] object-cover rounded-full"
        />
      );
    } else {
      return (
        <div className="w-[32px] h-[32px] rounded-full bg-gray-200 flex items-center justify-center">
          <p className="text-[16px] text-black  font-semibold">
            {comment?.user.full_name.slice(0, 1)}
          </p>
        </div>
      );
    }
  };

  const renderComment = () => {
    if (!comments?.length) {
      return (
        <div className="my-[12px]">
          <p className=" font-light text-[#5f5f5f]">
            Chưa có nhận xét nào! Thêm nhận xét để bắt đầu cuộc trò chuyện.
          </p>
        </div>
      );
    } else {
      return comments.map((comment, index) => {
        let date = Math.floor(
          (Date.parse(new Date()) - Date.parse(comment.comment_date)) / 86400000
        );
        if (date < 1) {
          date = "Vừa xong";
        } else {
          date += " ngày trước";
        }
        return (
          <div key={index} className=" flex my-[10px]">
            <div className="mr-3">{renderAvatar(comment)}</div>
            <div>
              <p className=" font-light">
                <span className=" font-semibold">{comment.user.full_name}</span>{" "}
                {comment.content}
              </p>
              <div className="flex items-center">
                <p className="text-[14px] text-[#5f5f5f] pr-[10px]">{date}</p>
                <p className="text-[14px] text-[#5f5f5f]  mx-[10px] font-semibold cursor-pointer">
                  Trả lời
                </p>
                <div className="mx-[10px] w-[25px] h-[25px] rounded-full  hover:bg-gray-200 cursor-pointer flex items-center justify-center">
                  <Heard width={16} height={16} />
                </div>
                <div className="mx-[10px] w-[25px] h-[25px] rounded-full  hover:bg-gray-200 cursor-pointer flex items-center justify-center">
                  <ThreeDots width={16} height={16} />
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  };
  return (
    <div className="pb-[16px]">
      <div className="flex items-center justify-between pr-[32px] my-[12px]">
        <p className=" font-semibold">Nhận xét</p>
        <div>{comments?.length ? <UpArrow /> : null}</div>
      </div>
      <div className="pr-[32px]">{renderComment()}</div>
    </div>
  );
};

export default Comment;
