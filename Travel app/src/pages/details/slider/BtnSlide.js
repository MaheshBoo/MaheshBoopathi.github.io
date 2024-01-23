import React from 'react'
import './slide.css'
import right from './icon/right.png'
import left from './icon/left.png'
function BtnSlide({direction,moveSlide}) {
  return (
    <div>
        <button onClick={moveSlide}
        className={direction === "next" ? 'btn-slide next': 'btn-slide prev'} >
            <img src={direction === 'next' ? right : left}/>
        </button>
    </div>
  )
}

export default BtnSlide