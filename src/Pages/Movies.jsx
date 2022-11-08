import React from "react";
import Card from "../Components/Cards/Card";
import data from "../json/movies.json";

function Movies() {
  return (
    <div className="bodyApp">
      {data.moviesharry &&
        data.moviesharry.map((movie) => {
          return (
            <Card
              identifier={movie.id}
              key={movie.id}
              srcImg={movie.image}
              name={movie.name}
              description={movie.description}
              reference={movie.link}
              textA={"Go to watch"}
            />
          );
        })}
    </div>
  );
}

export default Movies;
