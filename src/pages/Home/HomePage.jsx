import React, { useEffect, useState } from "react";
import { photoSer } from "../../api/api";
import PhotoItem from "./PhotoItem";

const HomePage = ({ noPaddingTop }) => {
  const [photos, setPhotos] = useState(null);
  useEffect(() => {
    photoSer
      .getAllPhotos()
      .then(({ data }) => {
        console.log(data);
        setPhotos(data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className={`w-full  ${noPaddingTop ? "" : "pt-[80px]"}`}>
      <div className="m-auto gallery">
        {photos?.map((photo, index) => {
          return <PhotoItem photo={photo} key={index} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
