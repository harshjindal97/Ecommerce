import React, { useState } from 'react'
import './imagemagnifier.css'
const Imagemagnifier = ({imageurl}) => {
  const [position , setPosition] = useState({x: 0, y: 0});
  const [showMagnifier , setShowMagnifier] = useState(false);
  const [cursorPosition , setCursorPosition] = useState({x: 0, y: 0});


  const handelMouse = (e)=>{
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition({ x, y });
    setCursorPosition({x:e.pageX - left,y: e.pageY - top});
  }

  return (
    <>
    
    <div className='imgContaier' onMouseEnter={()=>setShowMagnifier(true)}
    onMouseLeave={()=>setShowMagnifier(false)}
    onMouseMove={handelMouse}
    >
      
      <img className='imgc' src={imageurl} alt='' />
      <div  className='cont'
      style={{
        position: 'absolute',
        top: `0px`,
        left: `0px`,
        pointerEvents: 'none',
      }}
      >
        <div className="magnifierImage"
        style={{
          backgroundImage: `url(${imageurl})`,
          backgroundPosition: `${position.x}% ${position.y}%`,
        }}></div>
      </div>
    </div>
    </>
  )
}

export default Imagemagnifier
