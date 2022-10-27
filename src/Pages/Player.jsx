import React from "react";
import "../css/player.css";
import dataMovies from "../json/movies.json";

function Player() {
  return (
    <div>
      <div className="containerIframe">
        <iframe
          className="iframeStyle"
          src="https://mega.nz/embed/KIpATSrZ#tj2KEHtWHBu8FP_d78jWPQqvq24JQqD7DJCfdIwBknY"
          width="1920"
          height="1080"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div className="iframeComments"></div>
      <div className="info">
        {dataMovies.map(() => {
          return (
            <div>
              <h1>{dataMovies.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Player;
