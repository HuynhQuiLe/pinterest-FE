import React, { useEffect } from "react";
import { useState } from "react";
import { photoSer } from "../../api/api";
import { notify } from "../../config/toast/toast";

const SaveButton = ({ photo_id, content, setReload }) => {
  const [saved, setSaved] = useState(null);

  useEffect(() => {
    photoSer
      .getSavedOrNot(photo_id)
      .then(({ data }) => {
        setSaved(data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [photo_id, saved]);

  const handleSave = () => {
    photoSer
      .savePhoto(photo_id)
      .then(({ data }) => {
        setSaved(data.content);
        notify.success(data.message);
        if (content && setReload) {
          setReload(new Date().getTime());
        }
      })
      .catch((error) => {
        notify.error(error.response.data.message);
      });
  };

  if (!saved) {
    return (
      <button
        className="px-4 py-3 block  bg-primary text-white font-semibold text-[16px] rounded-[30px] hover:bg-primary_dark"
        onClick={handleSave}
      >
        Lưu
      </button>
    );
  } else {
    if (content) {
      return (
        <button
          className="px-4 py-3 bg-primary text-white font-semibold text-[16px] rounded-[30px]"
          onClick={handleSave}
        >
          {content}
        </button>
      );
    } else {
      return (
        <button className="px-4 py-3 bg-black text-white font-semibold text-[16px] rounded-[30px]">
          Đã lưu
        </button>
      );
    }
  }
};

export default SaveButton;
