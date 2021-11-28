import React from "react";
import ReactPlayer from "react-player/youtube";
import "../../css/components/Previews.css";

const urls = [
  "https://youtu.be/bkpMLAM0U7U",
  "https://youtu.be/VklP7yoHTYg",
  "https://youtu.be/NsqlYonyuFE",
  "https://youtu.be/YLn-aKsFHpc",
  "https://youtu.be/TK1Ij_-mank",
  "https://youtu.be/QF2P0wJ9PA4",
];

const playerMap = urls.map((url, index) => {
  return (
    <div>
      <div className="player" key={index}>
        <ReactPlayer url={url} controls={true} />
      </div>
      <div className="player-mobile" key={index}>
        <ReactPlayer url={url} controls={true} width="95vw" height="35vh" />
      </div>
    </div>
  );
});

const Previews = () => {
  return (
    <div>
      <h1>Previews and Music</h1>
      <div className="player-container">{playerMap}</div>
    </div>
  );
};

export default Previews;
