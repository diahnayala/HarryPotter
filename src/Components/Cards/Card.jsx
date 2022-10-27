import React from 'react'
import './card.css'

function Card({name, srcImg, altImg, description, reference, textA, handleMessage}) {
  return (
    <div className='card'>
        <div className='column1'>
            <img className='imageCard' src={srcImg} alt={altImg}></img>
        </div>
        
        <div className='column2'>
            <div className='nameCard'>{name}</div>
            <div className='descriptionCard'>{description}</div>
            <a className='descriptionCard' href={reference}>{textA}</a>
            <button onClick={()=>{handleMessage()}}>Click me</button>
        </div>
    </div>
   
  )
}

export default Card