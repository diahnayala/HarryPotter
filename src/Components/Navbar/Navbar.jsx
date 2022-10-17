import React from 'react'
import './navbar.css'


function Navbar({srcLogo, altLogo, srcLogo2, altLogo2,  op1, op2, op3}) {
  return (
    <div className='navbar'>
        <img className='logo' src={srcLogo} alt={altLogo} />
        <div className='elementsNavbar'>{op1}</div>
        <div className='elementsNavbar'>{op2}</div>
        <div className='elementsNavbar'>{op3}</div>
        <img className='logo2' src={srcLogo2} alt={altLogo2}/>
    </div>
  )
}

export default Navbar