import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import './play.css';

function Play(posterShow, videoShow) {
  return (
    <div className="containerVideo">
        <Video autoPlay loop poster={posterShow}>
            <source src={videoShow} type="video/webm" />
        </Video>
    </div>
  );
}

export default Play;
