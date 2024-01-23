import React from 'react'
import '../details/detail.css'
import Slide from './slider/slide'
import { Box1,Box2,Box3,Box4,Box5,Box6,Box7,Box8,Box9,Box10,Box11,Box12,Box13,Box14,Box15,Box16,Box17,Box18,Box19,Box20 } from './info/box';
import { Box21,Box22,Box23,Box24,Box25,Box26,Box27,Box28,Box29,Box30,Box31,Box32,Box33,Box34,Box35,Box36,Box37,Box38,Box39,Box40 } from './info/box';
import { Box41,Box42,Box43,Box44,Box45,Box46,Box47,Box48,Box49,Box50,Box51 } from './info/box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faUsers ,faClock , faHotel , faWifi , faPlane , faClipboard , faCarSide} from '@fortawesome/free-solid-svg-icons';
import {Slide1,Slide2,Slide3,Slide4,Slide5,Slide6,Slide7,Slide8,Slide9,Slide10} from './slider/slide';
import {Slide11,Slide12,Slide13,Slide14,Slide15,Slide16,Slide17,Slide18,Slide19,Slide20} from './slider/slide';
import {Slide21,Slide22,Slide23,Slide24,Slide25,Slide26,Slide27,Slide28,Slide29,Slide30} from './slider/slide';
import {Slide31,Slide32,Slide33,Slide34,Slide35,Slide36,Slide37,Slide38,Slide39,Slide40} from './slider/slide';
import {Slide41,Slide42,Slide43,Slide44,Slide45,Slide46,Slide47,Slide48,Slide49,Slide50} from './slider/slide';

/*Dubai */

function N1() {
  return (
    <div>
      <div className='head'><h1>Dubai</h1></div>
     <Slide6/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Arcitucure</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
      <Box1/>
     </div>
    </div>
  )
}

export default N1

function N2(){
  return (
    <div>
      <div className='head'><h1>Dubai</h1></div>
     <Slide7/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Tradition</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>5D/4N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>40(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>32,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
      <Box2/>
     </div>
    </div>
  )
}

function N3(){
  return (
    <div>
      <div className='head'><h1>Dubai</h1></div>
     <Slide8/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Hot and Ride</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>20(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <button className='tag' style={{marginLeft:'5px' , marginTop:"20px"}}>Adventure</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>23,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
      <Box3/>
     </div>
    </div>
  )
}

/*Indonesia */

function N4(){
  return (
    <div>
      <div className='head'><h1>Indonesia</h1></div>
     <Slide/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Kiwi Temple</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>42(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>35,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box4/>
     </div>
    </div>
  )
}


function N5(){
  return (
    <div>
      <div className='head'><h1>Indonesia</h1></div>
     <Slide1/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>paradise island</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>50(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>35,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box5/>
     </div>
    </div>
  )
}


function N6(){
  return (
    <div>
      <div className='head'><h1>Indonesia</h1></div>
     <Slide2/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box6/>
     </div>
    </div>
  )
}


/*Maldivs */


function N7(){
  return (
    <div>
      <div className='head'><h1>Maldivs</h1></div>
     <Slide3/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box7/>
     </div>
    </div>
  )
}


function N8(){
  return (
    <div>
      <div className='head'><h1>Maldives</h1></div>
     <Slide4/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box8/>
     </div>
    </div>
  )
}



function N9(){
  return (
    <div>
      <div className='head'><h1>Maldives</h1></div>
     <Slide5/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box9/>
     </div>
    </div>
  )
}


/*italy */

function N10(){
  return (
    <div>
      <div className='head'><h1>Italy</h1></div>
     <Slide9/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box10/>
     </div>
    </div>
  )
}



function N11(){
  return (
    <div>
      <div className='head'><h1>Italy</h1></div>
     <Slide10/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box11/>
     </div>
    </div>
  )
}



function N12(){
  return (
    <div>
      <div className='head'><h1>Italy</h1></div>
     <Slide11/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box12/>
     </div>
    </div>
  )
}


/*Malaysia */

function N13(){
  return (
    <div>
      <div className='head'><h1>Malaysia</h1></div>
     <Slide12/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box13/>
     </div>
    </div>
  )
}


function N14(){
  return (
    <div>
      <div className='head'><h1>Malaysia</h1></div>
     <Slide13/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box14/>
     </div>
    </div>
  )
}


function N15(){
  return (
    <div>
      <div className='head'><h1>Malaysia</h1></div>
     <Slide14/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box15/>
     </div>
    </div>
  )
}


/*China */

function N16(){
  return (
    <div>
      <div className='head'><h1>China</h1></div>
     <Slide15/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box16/>
     </div>
    </div>
  )
}


function N17(){
  return (
    <div>
      <div className='head'><h1>China</h1></div>
     <Slide16/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box17/>
     </div>
    </div>
  )
}


function N18(){
  return (
    <div>
      <div className='head'><h1>China</h1></div>
     <Slide17/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box18/>
     </div>
    </div>
  )
}


/*Korea */


function N19(){
  return (
    <div>
      <div className='head'><h1>Korea</h1></div>
     <Slide18/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box19/>
     </div>
    </div>
  )
}


function N20(){
  return (
    <div>
      <div className='head'><h1>Korea</h1></div>
     <Slide19/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box20/>
     </div>
    </div>
  )
}


function N21(){
  return (
    <div>
      <div className='head'><h1>Korea</h1></div>
     <Slide20/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box21/>
     </div>
    </div>
  )
}


/*Cuba */


function N22(){
  return (
    <div>
      <div className='head'><h1>Cuba</h1></div>
     <Slide21/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box22/>
     </div>
    </div>
  )
}


function N23(){
  return (
    <div>
      <div className='head'><h1>Cuba</h1></div>
     <Slide22/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box23/>
     </div>
    </div>
  )
}


function N24(){
  return (
    <div>
      <div className='head'><h1>Cuba</h1></div>
     <Slide23/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box24/>
     </div>
    </div>
  )
}



/*Switcherland */


function N25(){
  return (
    <div>
      <div className='head'><h1>Switzerland</h1></div>
     <Slide24/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box25/>
     </div>
    </div>
  )
}


function N26(){
  return (
    <div>
      <div className='head'><h1>Switzerland</h1></div>
     <Slide25/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box26/>
     </div>
    </div>
  )
}


function N27(){
  return (
    <div>
      <div className='head'><h1>Switzerland</h1></div>
     <Slide26/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box27/>
     </div>
    </div>
  )
}


/*Finland */


function N28(){
  return (
    <div>
      <div className='head'><h1>Finland</h1></div>
     <Slide27/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box28/>
     </div>
    </div>
  )
}


function N29(){
  return (
    <div>
      <div className='head'><h1>Finalnd</h1></div>
     <Slide28/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box29/>
     </div>
    </div>
  )
}


function N30(){
  return (
    <div>
      <div className='head'><h1>Finland</h1></div>
     <Slide29/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box30/>
     </div>
    </div>
  )
}



/*Scotland */


function N31(){
  return (
    <div>
      <div className='head'><h1>Scotland</h1></div>
     <Slide30/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box31/>
     </div>
    </div>
  )
}


function N32(){
  return (
    <div>
      <div className='head'><h1>Scotland</h1></div>
     <Slide31/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box32/>
     </div>
    </div>
  )
}


function N33(){
  return (
    <div>
      <div className='head'><h1>Scotland</h1></div>
     <Slide32/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box33/>
     </div>
    </div>
  )
}


/*Mexico */


function N34(){
  return (
    <div>
      <div className='head'><h1>Mexico</h1></div>
     <Slide33/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box34/>
     </div>
    </div>
  )
}

function N35(){
  return (
    <div>
      <div className='head'><h1>Mexico</h1></div>
     <Slide34/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box35/>
     </div>
    </div>
  )
}

function N36(){
  return (
    <div>
      <div className='head'><h1>Mexico</h1></div>
     <Slide35/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box36/>
     </div>
    </div>
  )
}


/*London */


function N37(){
  return (
    <div>
      <div className='head'><h1>London</h1></div>
     <Slide36/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box37/>
     </div>
    </div>
  )
}


function N38(){
  return (
    <div>
      <div className='head'><h1>London</h1></div>
     <Slide37/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box38/>
     </div>
    </div>
  )
}



function N39(){
  return (
    <div>
      <div className='head'><h1>London</h1></div>
     <Slide38/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box39/>
     </div>
    </div>
  )
}


/*New Zeland */


function N40(){
  return (
    <div>
      <div className='head'><h1>Newzeland</h1></div>
     <Slide39/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box40/>
     </div>
    </div>
  )
}



function N41(){
  return (
    <div>
      <div className='head'><h1>Newzeland</h1></div>
     <Slide40/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box41/>
     </div>
    </div>
  )
}



function N42(){
  return (
    <div>
      <div className='head'><h1>Newzeland</h1></div>
     <Slide41/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box42/>
     </div>
    </div>
  )
}


/*Netherland */


function N43(){
  return (
    <div>
      <div className='head'><h1>NetherLand</h1></div>
     <Slide42/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box43/>
     </div>
    </div>
  )
}



function N44(){
  return (
    <div>
      <div className='head'><h1>NetherLand</h1></div>
     <Slide43/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box44/>
     </div>
    </div>
  )
}


function N45(){
  return (
    <div>
      <div className='head'><h1>NetherLand</h1></div>
     <Slide44/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box45/>
     </div>
    </div>
  )
}



/*France */


function N46(){
  return (
    <div>
      <div className='head'><h1>France</h1></div>
     <Slide45/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box46/>
     </div>
    </div>
  )
}

function N47(){
  return (
    <div>
      <div className='head'><h1>France</h1></div>
     <Slide46/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box47/>
     </div>
    </div>
  )
}

function N48(){
  return (
    <div>
      <div className='head'><h1>France</h1></div>
     <Slide47/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box48/>
     </div>
    </div>
  )
}


/*Ireland */


function N49(){
  return (
    <div>
      <div className='head'><h1>IreLand</h1></div>
     <Slide48/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box49/>
     </div>
    </div>
  )
}


function N50(){
  return (
    <div>
      <div className='head'><h1>IreLand</h1></div>
     <Slide49/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box50/>
     </div>
    </div>
  )
}

function N51(){
  return (
    <div>
      <div className='head'><h1>IreLand</h1></div>
     <Slide50/>
     <div className='det-card'>
      <h1 className='det-head' style={{fontSize:"50px"}}>Dubai</h1>
      <button style={{width:"200px" , marginLeft:"20px", borderRadius:"20px", fontWeight:"bold"}}>Book  With Flexibility</button>
      <p className='det-text'><FontAwesomeIcon icon={faStar} style={{marginRight:"20px"}}/>4.3(10)</p>
      <p className='det-text'><FontAwesomeIcon icon={faClock} style={{marginRight:"20px"}}/>4D/3N</p>
      <p className='det-text' style={{marginTop:"-50px"}}><FontAwesomeIcon icon={faUsers} style={{marginRight:"20px" , marginLeft:"220px"}}/>32(max count)</p>
      <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faWifi} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faPlane} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faClipboard} style={{marginRight:"20px"}}/><FontAwesomeIcon icon={faCarSide} style={{marginRight:"20px"}}/></p>
      <button className='tag'>Explore</button>
      <button className='tag' style={{marginLeft:'100px' , marginTop:'-50px'}}>Family</button>
      <button className='tag' style={{marginLeft:'190px' , marginTop:'-50px'}}>Group</button>
      <button className='tag' style={{marginLeft:'280px' , marginTop:'-50px'}}>Sightseeing</button>
      <button className='tag' style={{marginLeft:'400px' , marginTop:'-50px'}}>custom</button>
      <h2 className='det-head'>Tour Operator:</h2>
      <p className='det-text'>Explore Agency</p>
      <h2 className='det-head'>Age Range:</h2>
      <p className='det-text'>1 to 70</p>
      <p className='det-text' style={{fontSize:"50px", color:"green" ,fontWeight:"bold" ,marginLeft:"300px"}}>30,000/-</p>
      <button style={{marginLeft:"300px" ,fontSize:"30px" , fontWeight:"400" ,borderRadius:"40px" ,backgroundColor:"rgb(27, 122, 216)"}}>Book Now</button>
     </div>
     <div>
     <Box51/>
     </div>
    </div>
  )
}


export {N2,N3,N4,N5,N6,N7,N8,N9,N10};
export {N11,N12,N13,N14,N15,N16,N17,N18,N19,N20};
export {N21,N22,N23,N24,N25,N26,N27,N28,N29,N30};
export {N31,N32,N33,N34,N35,N36,N37,N38,N39,N40};
export {N41,N42,N43,N44,N45,N46,N47,N48,N49,N50,N51};