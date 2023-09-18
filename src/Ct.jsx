import React, { forwardRef, useState } from 'react'
import './ct.css'

import ht3 from './assets/ht3.jpeg'
import Cart from './Cart';

const Ct = (props,ref) => {
  const [ht,setht]=useState(120);

  
  const handleclick=(val)=>{
   setht(val);
   console.log(ht);

  }
  
  return (
    <div ref={ref}>
        <div>
        <h1 className='heading'>1. Choose thickness:</h1>
        </div>
     <div className='container'>
     <div className='paradiv'>
      <p className='para'>Elevate Your Hair Game"
"Unleash Your Hair's Potential"
"Radiant Hair, Naturally"
"Confidence Starts with Great Hair"
"Discover Your Hair's Beauty Secret"
"Healthy Hair, Happy You"
"Where Beauty Meets Hair Care"
"Your Hair, Your Signature"
"Transforming Tresses, One Strand at a Time"
"The Science of Beautiful Hair"
"Revitalize Your Hair, Revitalize Your Life"
"Every Strand Matters</p>
      </div>
     </div>
    
     
<div className='imagecontainer'>
<div className='images'>
<img src={ht3} alt="photo2" />
<h2>FINE: 120 GRAMS</h2>
<h3>For thin hair.</h3>
<button className='Linkk' onClick={()=>handleclick(120)} >SELECT</button>
</div>

<div className='images'>
<img src={ht3} alt="photo2" />
<h2>MEDIUM: 160 GRAMS</h2>
<h3>For regular hair.</h3>
<button className='Linkk'  onClick={()=>handleclick(160)} >SELECT</button>
</div>

<div className='images'>
<img src={ht3} alt="photo2" />
<h2>THICK: 220 GRAMS</h2>
<h3>For thick short hair.</h3>
<button className='Linkk'  onClick={()=>handleclick(220)} >SELECT</button>
</div>



</div>
   
    </div>
  )
}

export default forwardRef(Ct)
