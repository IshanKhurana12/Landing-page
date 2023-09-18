import React from 'react'
import './cl.css';
import colors from './assets/colors.json';
import { forwardRef } from 'react';
const Cl = (props,ref) => {
  return (
    <>
    <div className='cl'>

  
     <div className='heading2' ref={ref}>
      <h1>2. Choose color:</h1>
    </div>
    <div className='container'>
    <div className='paradiv'>
        <p className='para'>If you need help with choosing a color, 
        watch this video on how to select your closest match or email us a photo of yout hair taken in natural light.
         we'll be happy to help.</p>
    </div>
    </div>
    
    <div className='colorcontainer'>
    {colors.hairColors.map((hairColor, index) => (
       <div className='content-container'>
       <div
          key={index}
          className="hair-color-div"
          style={{ backgroundColor: hairColor.code }}
        >
              </div>
         <h1>{hairColor.name}</h1> 
         </div>
      ))}
    </div>
    </div>
    </>
   
  )
}

export default forwardRef(Cl)
