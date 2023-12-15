import React, { useEffect, useState } from "react";
import { photoSer } from "../../api/api";
import SavedPhoto from "./SavedPhoto";

const SavedPage = () => {
  const [photos, setPhotos] = useState(null);

  const [reload, setReload] = useState(null);
  useEffect(() => {
    photoSer
      .getSavedPhotos()
      .then(({ data }) => {
        console.log(data.content);
        setPhotos(data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [reload]);

  return (
    <div className={`w-full `}>
      <div className="m-auto gallery">
        {photos?.map((photo, index) => {
          return (
            <SavedPhoto photo={photo.photo} key={index} setReload={setReload} />
          );
        })}
      </div>
    </div>
  );
};

export default SavedPage;
