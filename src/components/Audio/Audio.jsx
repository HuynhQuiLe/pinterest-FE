import React from "react";

const AudioSound = () => {
  return (
    <div className="hidden">
      <audio autoPlay={false} id="error">
        <source src="/audio/error.mp3" type="audio/ogg" />
      </audio>
      <audio autoPlay={false} id="success">
        <source src="/audio/success.mp3" type="audio/ogg" />
      </audio>
    </div>
  );
};

export default AudioSound;
