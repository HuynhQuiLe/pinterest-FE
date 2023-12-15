import React from "react";

const PhotoInfo = ({ photo }) => {
  return (
    <div className="my-[16px] pr-[32px]">
      <h3 className="text-[28px] font-semibold">{photo?.photo_name}</h3>
      <p className="text-[16px]  ">{photo?.description}</p>
    </div>
  );
};

export default PhotoInfo;
