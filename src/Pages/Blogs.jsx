import React from 'react';
import { useState } from 'react';
import '../css/blogs.css';

function Blogs(color) {
  const [id, setId] = useState('');
  const [nickname, setNickname] = useState('');
  const [casa, setCasa] = useState('');
  const [favPersonaje, setFavPersonaje] = useState('');
  const [favHechizo, setFavHechizo] = useState('');
  const [formaPatronous, setFormaPatronous] = useState('');
  const [opinionBooksAndMovies, setOpinionBooksAndMovies] = useState('');

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch('http://localhost:3000/blogComments', {
        method: "POST",
        body: JSON.stringify({
          nickname: nickname,
          casa: casa,
          favPersonaje: favPersonaje,
          favHechizo: favHechizo,
          formaPatronous: formaPatronous,
          opinionBooksAndMovies: opinionBooksAndMovies,
        }),
      });
      let resJson = await res.json();
      if (res.status === 201) {
        setNickname(e.target.value);
        setCasa(e.target.value);
        setFavPersonaje(e.target.value);
        setFavHechizo(e.target.value);
        setFormaPatronous(e.target.value);
        setOpinionBooksAndMovies(e.target.value);
      } else {
        console.log("Problem seding the data")
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className='containerBlog'>
      <form className='containerForm' onSubmit={handleSubmit}>
      <p className='label'>Nickname</p>
        <input className='input' value={nickname || ''} placeholder="Nickname" onChange={(e) => setNickname(e.target.value)}/>
        <p className='label'>Casa</p>
        <input className='input' value={casa || ''} placeholder="Ravenclaw/Gryffindor/Hufflepuff/Slytherin" onChange={(e) => setCasa(e.target.value)}/>
        <p className='label'>¿Cuál es tu personaje favorito?</p>
        <input className='input' value={favPersonaje || ''} placeholder="Harry Potter..." onChange={(e) => setFavPersonaje(e.target.value)}/>
        <p className='label'>¿Cuál es tu hechizo favorito?</p>
        <input className='input' value={favHechizo || ''} placeholder="Alohomora..." onChange={(e) => setFavHechizo(e.target.value)}/>
        <p className='label'>¿Qué forma tiene tu patronus?</p>
        <input className='input' value={formaPatronous || ''} placeholder="Ciervo..." onChange={(e) => setFormaPatronous(e.target.value)}/>
        <p className='label'>¿Qué opinas de los libros y/o peliculas?</p>
        <input className='input' value={opinionBooksAndMovies} placeholder="Son extensos pero increíbles" onChange={(e) => setOpinionBooksAndMovies(e.target.value)}/>
        <button className='publish' type='submit'>Publish</button>
        
      </form>
    </div>

    <div className='containerBlog2'>
      <div className='containerForm2'>
        <div className='textshowing'>Showing 5 comments</div>
        <div className='comment'>
          <div className='topcomment'>
            <img className='imageuser' src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt='imageuser' />
            <p className='username'>Diana</p>
          </div>
          <div className='bottomcomment'>
              Ravenclaw. Minerva McGonagall. Expecto Patronum. Delfin. Aún no he terminado de leer los libros, pero las peliculas me encantaron y te transmiten esa magía de querer estar en un mundo de fantasía como lo es el de esta saga.
          </div>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Blogs