import React from 'react'
import '../css/home.css'
import PDFile from '../Components/PDF/PDFile'

function Home() {
  return (
    <div>
      <PDFile />
      <img className='welcome' src={require('../img/welcome.png')} alt='Welcome to Hogwarts' />
      <img className='home' src={require('../img/hogwarts.png')} alt='Hogwarts' />
      <img className='griffindor' src={require('../img/hhr.png')} alt='hhr' />
    </div>
  )
}

export default Home