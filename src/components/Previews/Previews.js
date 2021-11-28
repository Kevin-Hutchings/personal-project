import React from "react";
import ReactPlayer from "react-player/youtube";
import "../../css/components/Previews.css";

const urls = [
  "https://youtu.be/bkpMLAM0U7U",
  "https://youtu.be/VklP7yoHTYg",
  "https://youtu.be/NsqlYonyuFE",
  "https://youtu.be/YLn-aKsFHpc",
];

const playerMap = urls.map((url, index) => {
  return (
    <div>
      <div className="player">
        <ReactPlayer url={url} controls={true} key={index} />
      </div>
      <div className="player-mobile">
        <ReactPlayer
          url={url}
          controls={true}
          width="95vw"
          height="35vh"
          key={index}
        />
      </div>
    </div>
  );
});

const Previews = () => {
  return (
    <div>
      <h1>Movie Previews</h1>
      <div className="player-container">{playerMap}</div>
    </div>
  );
};

export default Previews;