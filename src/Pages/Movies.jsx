import React from 'react'
import Card from "../Components/Cards/Card";
import dataMovies from '../json/movies.json';

function Movies() {
  return (
    <div className="bodyApp">

      {
        dataMovies && dataMovies.map( dataMovies => {
          return(
            <Card key={dataMovies.id}
              srcImg={dataMovies.image}
              name={dataMovies.name}
              description={dataMovies.description}
            />
          )
        })
      }
          
        </div>
  )
}

// const cards = document.querySelectorAll(".card");
// cards.forEach(card => {
//   card.addEventListener("click", ()=>{
//     removeActiveClass();
//     card.classList.add("active")
//   })
// });

// function removeActiveClass(){
//   cards.forEach(card=>{
//     card.classList.remove("active")
//   });
// }

export default Movies