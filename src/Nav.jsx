import React, { useRef } from 'react'
import './nav.css';
import Ct from './Ct';
import Cl from './Cl';
import Cart from './Cart';

const Nav = () => {

  const thickref=useRef(null);
  const colref=useRef(null);
  const cartref=useRef(null);

  const handlethick=()=>{
    thickref.current?.scrollIntoView({behavior:'smooth'});
  }
  const handlecolor=()=>{
    colref.current?.scrollIntoView({behavior:'smooth'});
  }
  const handlecart=()=>{
    cartref.current?.scrollIntoView({behavior:'smooth'});
  }
  return (
    <>
    <div className='navhandle'>
        <ul className="photolist">
           <li onClick={handlethick} className='Links'>Choose thickness</li>
           <li onClick={handlecolor} className='Links'>Choose color</li>
           <li onClick={handlecart} className='Links'>Add to cart</li>
        </ul>
      </div>
    
        <Ct ref={thickref}/>
        <Cl ref={colref} />
        <Cart ref={cartref} />
    
    
    </>
    
  )
}

export default Nav
