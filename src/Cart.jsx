import React, { forwardRef, useState } from 'react'
import model1 from './assets/model1.png';
import './cart.css';
import colors from './assets/colors.json';
import images from './assets/images.json';

const Cart = (props,ref) => {

const [name,setname]=useState('');
const [selectedDiv, setSelectedDiv] = useState(null);
const [selectedimg, setSelectedimg] = useState(null);
const [image,setimage]=useState('');
const handleclick=(val)=>{
  const sc= colors.hairColors.find((color,index)=>index===val);
  console.log(sc.name);
  setname(sc.name);
  setSelectedDiv(val);

}


const handleimg=(val)=>{
    const ic= images.image.find((image,index)=>index===val);
  console.log(ic.image);
  setimage(ic.image);
  setSelectedimg(val);
}

const handlebtn=(props,ref)=>{
        alert("item added to bag");
}
  return (
    
    <div className='cartcontainer' ref={ref}>
      <div className='sixty'>
        <div className='main-imgdiv'>
        {image ? (
        <img src={image}  className='image-main' alt="Product" />
      ) : (
        <img src={model1} className='image-main' alt="Placeholder" />
      )}
        </div>
       <div className='imgbox'>
        {images.image.map((ima,index)=>(
            <img onClick={()=>handleimg(index)} style={{ border: selectedimg === index ? '8px solid #e75480' : 'none'}} className='smallimg' src={ima.image} alt={index+1} key={index} />
        ))}
       </div>
         </div>
      <div className='forty'>
        <div>
            <h3>20 INCHES / 120 GRAMS FULL HEAD SET</h3>
            <h1>{name}</h1>
            <h1>$100.00 USD</h1>
            <h2>⭐️⭐️⭐️⭐️⚝ 182 Reviews 💬24 Questions \ 24Answers</h2>
        </div>
        <h1>Select your Color</h1>
        <div className='colors'>
            {colors.hairColors.map((color,index)=>(
                <div  key={index} onClick={()=>handleclick(index)}    style={{ backgroundColor: color.code, border: selectedDiv === index ? '8px solid #e75480' : 'none' }} className='small-color'>
                </div>
            ))}
            <p>Need help with choosing your color</p>
        </div>
        <div className='content'>
            <h1>Watch color video</h1>
            <h2>Transform your hair instantly with off black clip in Luxy hair ectension.A natural looking shade thats just shy of jet black warm brown undertones come together to create depth and complexity,Go ahead flirt flirt with your dark side without crossing over completely</h2>
        </div>
        <div className='btndiv'>
            <button className='btnbtn' onClick={handlebtn}>Add to Bag</button>
        </div>
        <div className='emojis'>
        <div className='emo'>
<h1>🌐</h1> 
<h2>free shipping</h2>     
   </div>
     <div  className='emo'>
        <h1>🚚</h1>
        <h2>Easy 10 day returns</h2>
    </div>  
    <div  className='emo'>
        <h1> 🕗</h1>
        <h2>24/7 customer support</h2>
    </div>
        </div>
       
      </div>
    </div>
  )
}

export default forwardRef(Cart);
