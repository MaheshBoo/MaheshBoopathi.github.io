import BtnSlide from './BtnSlide'
import './slide.css'
import dataSlider from './dataSlide'
import React , {useState} from 'react'

/*Indonesia*/ 
 
function Slide() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/indonesia/indo${index + 1}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}
 
export default Slide   



function Slide1() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/indonesia/indo${index + 4}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}



function Slide2() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/indonesia/indo${index + 7}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}


/*Maldivs*/

function Slide3() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/maldivs/ma${index + 1}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}





function Slide4() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/maldivs/ma${index + 4}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}





function Slide5() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/maldivs/ma${index + 7}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}


/*Dubai */


function Slide6() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/dubai/du${index + 1}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}





function Slide7() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/dubai/du${index + 4}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}





function Slide8() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/dubai/du${index + 7}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}


/*Italy */

function Slide9() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/italy/it${index + 1}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}





function Slide10() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/italy/it${index + 4}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}





function Slide11() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/italy/it${index + 7}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}


/*Malaysia */


function Slide12() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/malaysia/mal${index + 1}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}





function Slide13() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/malaysia/mal${index + 4}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}





function Slide14() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/malaysia/mal${index + 7}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}


/* China*/


function Slide15() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/china/ch${index + 1}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}




function Slide16() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/china/ch${index + 4}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}




function Slide17() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/china/ch${index + 7}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}


/* Korea*/


function Slide18() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/korea/ko${index + 1}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}





function Slide19() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/korea/ko${index + 4}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}




function Slide20() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/korea/ko${index + 7}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}


/*Cuba*/

function Slide21() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/cuba/cu${index + 1}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}





function Slide22() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/cuba/cu${index + 4}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}





function Slide23() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/cuba/cu${index + 7}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}


/*Switcherland */


function Slide24() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/switcherland/sw${index + 1}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}





function Slide25() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/switcherland/sw${index + 4}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}




function Slide26() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/switcherland/sw${index + 7}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}


/*Finland */


function Slide27() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/finland/fin${index + 1}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}




function Slide28() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/finland/fin${index + 4}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}





function Slide29() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/finland/fin${index + 7}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}


/*Scotland */

function Slide30() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/scotland/sc${index + 1}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}



function Slide31() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/scotland/sc${index + 4}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}


function Slide32() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/scotland${index + 7}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}


/*Mexico */


function Slide33() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/mexico/mex${index + 1}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}

function Slide34() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/mexico/mex${index + 4}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}


function Slide35() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/mexico/mex${index + 7}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}


/*London */


function Slide36() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/london/lon${index + 1}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}


function Slide37() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/london/lon${index + 4}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}


function Slide38() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/london/lon${index + 7}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}


/*New Zeland */


function Slide39() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/newzeand/new${index + 1}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}


function Slide40() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/newzeand/new${index + 4}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}


function Slide41() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/newzeand/new${index + 7}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}


/*Nether Lands */


function Slide42() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/netherland/ne${index + 1}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}


function Slide43() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/netherland/ne${index + 4}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}

function Slide44() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/netherland/ne${index + 7}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}


/*France */


function Slide45() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/france/fr${index + 1}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}


function Slide46() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/france/fr${index + 4}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}


function Slide47() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/france${index + 7}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}


/*Ireland */


function Slide48() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/ireland/ire${index + 1}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}
function Slide49() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/ireland/ire${index + 4}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}


function Slide50() {
    const [slideIndex, setSlideIndex]=useState(1)
    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if(slideIndex === dataSlider.lenght){
            setSlideIndex(1)
        }
    } 
    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex-1)
        }
        else if (slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj , index) => {
            return(
                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/ireland/ire${index + 7}.jpg`}/>
                </div>
            )
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"}/>
        <BtnSlide moveSlide={prevSlide} direction={"prev"}/>
        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index)=>(
            <div className="dot"></div>
            ))}
        </div>
    </div>
    )
}



export {Slide1,Slide2,Slide3,Slide4,Slide5,Slide6,Slide7,Slide8,Slide9,Slide10}
export {Slide11,Slide12,Slide13,Slide14,Slide15,Slide16,Slide17,Slide18,Slide19,Slide20}
export {Slide21,Slide22,Slide23,Slide24,Slide25,Slide26,Slide27,Slide28,Slide29,Slide30}
export {Slide31,Slide32,Slide33,Slide34,Slide35,Slide36,Slide37,Slide38,Slide39,Slide40}
export {Slide41,Slide42,Slide43,Slide44,Slide45,Slide46,Slide47,Slide48,Slide49,Slide50}