import { useState } from "react";
import { useEffect } from "react";
import {React} from "react";
import { useNavigate, useParams } from "react-router";
import "../css/player.css";

function MoreInfoMovies() {
  let {id} = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(undefined);

  useEffect(()=> {
    fetch(`http://localhost:3000/moviesharry`)
    .then((response) => response.json())
    .then((dataMovies) => {
      if(parseInt(id) === NaN){
        return navigate('/nofound')
      }
      const foundMovie = dataMovies.find(elMovie => elMovie.id === parseInt(id))
      if(foundMovie === undefined){
        return navigate('/nofound')
      }
      setMovie(foundMovie)
  })
  }, [id]);

  if(movie === undefined){
    return(
      <div>Cargando...</div>
    )
  }
  return (
    
    <div>
      <div className="containerIframe">
        <iframe
          title="More about the movie"
          className="iframeStyle"
          src={movie.link}
          width="1920"
          height="1080"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="iframeComments"></div>
              <div className="info"
                key={movie.id}>
                <div>{movie.name}</div>
                <div>{movie.time}</div>
                <div>{movie.description}</div>
                <div>{movie.year}</div>
                <div>{movie.category}</div>
                <div>{movie.director}</div>
                
              </div>
    </div>
)}

export default MoreInfoMovies;
