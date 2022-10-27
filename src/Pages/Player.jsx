import React from "react";
import '../css/player.css';
import dataMovies from '../json/movies.json';

function Player() {
  return (
    <div>
      <div className="containerIframe">
        <iframe
          className="iframeStyle"
          width="640"
          height="360"
          frameborder="0"
          src="https://mega.nz/embed/KIpATSrZ#tj2KEHtWHBu8FP_d78jWPQqvq24JQqD7DJCfdIwBknY"
          allowfullscreen
        ></iframe>
      </div>
      <div className="iframeComments">

      </div>
      <div className="info">
        {dataMovies.map(()=>{
          return <div>
            <h1>{dataMovies.name}</h1>
          </div>
        })}
      </div>
    </div>
  );
}

export default Player;
