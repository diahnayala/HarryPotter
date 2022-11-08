import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'

function Card({name, srcImg, altImg, description, reference, textA, identifier}) {
 
  return (
    <div className='card'>
        <div className='column1'>
            <img className='imageCard' src={srcImg} alt={altImg}></img>
        </div>
        
        <div className='column2'>
            <div className='nameCard'>{name}</div>
            <div className='descriptionCard'>{description}</div>
            <a className='descriptionCard' href={reference}>{textA}</a>
            <Link to={`/moreinfo/${identifier}`}>Click</Link>
        </div>
    </div>
   
  )
}

export default Card