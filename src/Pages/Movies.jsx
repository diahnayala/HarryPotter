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
              identifierMovies={movie.id}
              key={movie.id}
              srcImg={movie.image}
              name={movie.name}
              description={movie.description}
              reference={movie.link}
            />
          );
        })}
    </div>
  );
}

export default Movies;
