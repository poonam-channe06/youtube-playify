import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    // console.log("data",data)
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap ml-14">
      {videos.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}

      {/* <div>VideoContainer</div> */}
    </div>
  );
};

export default VideoContainer;
