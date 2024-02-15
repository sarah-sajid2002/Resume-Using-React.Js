import React from "react";
import "./Video.css";
const Video = ({ imgSrc, title, views, verified = "" }) => {
  return (
    <div className="videoDiv">
      <img src={imgSrc} alt="" />
      <p className="title">{title}</p>
      <div className="info">
        <p className="views">{views}</p>
        <p className="verified">{verified}</p>
      </div>
    </div>
  );
};

export default Video;
