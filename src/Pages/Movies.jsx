import React from 'react'
import Card from "../Components/Cards/Card";

function Movies() {
  return (
    <div className="bodyApp">
          <Card
            srcImg={
              "https://m.media-amazon.com/images/M/MV5BMzkyZGFlOWQtZjFlMi00N2YwLWE2OWQtYTgxY2NkNmM1NjMwXkEyXkFqcGdeQXVyNjY1NTM1MzA@._V1_.jpg"
            }
            altImg={"Harry Potter and the Philosophers Stone"}
            name={"Harry Potter and the Philosophers Stone"}
            description={
              "Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him."
            }
          />
          <Card
            srcImg={
              "https://m.media-amazon.com/images/M/MV5BMjE0YjUzNDUtMjc5OS00MTU3LTgxMmUtODhkOThkMzdjNWI4XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_.jpg"
            }
            altImg={"Harry Potter and the Chamber of Secrets"}
            name={"Harry Potter and the Chamber of Secrets"}
            description={
              "A house-elf warns Harry against returning to Hogwarts, but he decides to ignore it. When students and creatures at the school begin to get petrified, Harry finds himself surrounded in mystery."
            }
          />
          <Card
            srcImg={
              "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_.jpg"
            }
            altImg={"Harry Potter and the Prisoner of Azkaban"}
            name={"Harry Potter and the Prisoner of Azkaban"}
            description={
              "Harry, Ron and Hermoine return to Hogwarts just as they learn about Sirius Black and his plans to kill Harry. However, when Harry runs into him, he learns that the truth is far from reality."
            }
          />
          <Card
            srcImg={
              "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_FMjpg_UX1000_.jpg"
            }
            altImg={"Harry Potter and the Goblet of Fire"}
            name={"Harry Potter and the Goblet of Fire"}
            description={
              "When Harry gets chosen as the fourth participant in the inter-school Triwizard Tournament, he is unwittingly pulled into a dark conspiracy that slowly unveils its dangerous agenda."
            }
          />
          <Card
            srcImg={
              "https://m.media-amazon.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_FMjpg_UX1000_.jpg"
            }
            altImg={"Harry Potter and the Order of the Phoenix"}
            name={"Harry Potter and the Order of the Phoenix"}
            description={
              "Harry Potter and Dumbledore's warning about the return of Lord Voldemort is not heeded by the wizard authorities who, in turn, look to undermine Dumbledore's authority at Hogwarts and discredit Harry."
            }
          />
          <Card
            srcImg={
              "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_.jpg"
            }
            altImg={"Harry Potter and the Half-Blood Prince"}
            name={"Harry Potter and the Half-Blood Prince"}
            description={
              "Dumbledore and Harry Potter learn more about Voldemort's past and his rise to power. Meanwhile, Harry stumbles upon an old potions textbook belonging to a person calling himself the Half-Blood Prince."
            }
          />
          <Card
            srcImg={
              "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_.jpg"
            }
            altImg={"Harry Potter and the Deathly Hallows: Part 1"}
            name={"Harry Potter and the Deathly Hallows: Part 1"}
            description={
              "After Voldemort takes over the Ministry of Magic, Harry, Ron and Hermione are forced into hiding. They try to decipher the clues left to them by Dumbledore to find and destroy Voldemort's Horcruxes."
            }
          />
          <Card
            srcImg={
              "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"
            }
            altImg={"Harry Potter And The Deathly Hallows II"}
            name={"Harry Potter And The Deathly Hallows II"}
            description={
              "Harry, Ron and Hermione race against time to destroy the remaining Horcruxes. Meanwhile, the students and teachers unite to defend Hogwarts against Lord Voldemort and the Death Eaters."
            }
          />
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