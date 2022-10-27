import React from 'react';
import '../css/blogs.css';

function Blogs(color) {

  return (
    <div>
      <div className='containerBlog'>
      <div className='containerForm'>
      <p className='label'>Nickname</p>
        <input className='input'/>
        <p className='label'>Casa</p>
        <input className='input'/>
        <p className='label'>¿Cuál es tu personaje favorito?</p>
        <input className='input'/>
        <p className='label'>¿Cuál es tu hechizo favorito?</p>
        <input className='input'/>
        <p className='label'>¿Qué forma tiene tu patronus?</p>
        <input className='input'/>
        <p className='label'>¿Qué opinas de los libros y/o peliculas?</p>
        <input className='input'/>
        <button className='publish'>Publish</button>
      </div>
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