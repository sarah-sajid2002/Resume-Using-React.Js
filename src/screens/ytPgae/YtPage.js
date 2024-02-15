import React from "react";
import Video from "../../components/video/Video";
import "./YtPage.css";
const YtPage = () => {
  let videoInfo = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1707345512638-997d31a10eaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      title: "Nature",
      views: "700k",
      verified: "✅",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1707653056939-5bf9eae73228?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sun",
      views: "100k",
    },
    {
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1682535209719-839f625f8770?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
      title: "cup cakes",
      views: "1M",
      verified: "✅",
    },
  ];
  return (
    <div className="videoComponents">
      {videoInfo.map((video, i) => (
        <Video
          key={i + 1}
          imgSrc={video.imgSrc}
          title={video.title}
          views={video.views}
          verified={video.verified}
        />
      ))}
    </div>
  );
};

export default YtPage;
