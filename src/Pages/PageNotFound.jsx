import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/pagenotfound.css';

function PageNotFound() {
  let navigate = useNavigate();
  return (
    <div>
      <p className='notfound'>Page not found</p>
      <img className='imgnotfound' src='https://c.tenor.com/fKVUZ_vJH5cAAAAC/muggle-harry-potter.gif' alt='gif' />
      <p className='danger'>¡Danger, PAGE FOR MUGGLES!</p>
      <button className='buttonback'
      onClick={() => {
        navigate("/");
      }}
      > 
      If you're not a muggle go back hogwarts
      </button>
    </div>
  )
}

export default PageNotFound