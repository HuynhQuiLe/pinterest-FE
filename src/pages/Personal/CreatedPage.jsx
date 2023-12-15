import React, { useEffect, useState } from "react";
import { photoSer } from "../../api/api";
import CreatedPhoto from "./CreatedPhoto";

const CreatedPage = () => {
  const [photos, setPhotos] = useState(null);
  useEffect(() => {
    photoSer
      .getCreatedPhotos()
      .then(({ data }) => {
        console.log(data.content);
        setPhotos(data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className={`w-full `}>
      <div className="m-auto gallery">
        {photos?.map((photo, index) => {
          return <CreatedPhoto photo={photo} key={index} />;
        })}
      </div>
    </div>
  );
};

export default CreatedPage;
