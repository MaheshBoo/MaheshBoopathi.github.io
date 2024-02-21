import React from "react"
import '../details/detail.css'
import { Slide6 } from "./slider/slide"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faUsers ,faClock , faHotel , faWifi , faPlane , faClipboard , faCarSide} from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect } from "react";
import axios from "axios";

function Kc() {

    const [users, setUsers] = useState([])
    useEffect(() => {
      axios.get('http://localhost:3002/getUsers?catogory=china')
          .then(users => setUsers(users.data))
          .catch(err => console.log(err))
  }, [])

    return (
        <div>
            <Slide6 />
            {users.map(user=> (
                <div className='det-card'>
                    <div className='head'><h1>Dubai</h1></div>
                    <h1 className='det-head' style={{ fontSize: "50px" }}>Arcitucure</h1>
                    <button style={{ width: "200px", marginLeft: "20px", borderRadius: "20px", fontWeight: "bold" }}>Book  With Flexibility</button>
                    <p className='det-text'><FontAwesomeIcon icon={faStar} style={{ marginRight: "20px" }} />4.3(10)</p>
                    <p className='det-text'><FontAwesomeIcon icon={faClock} style={{ marginRight: "20px" }} />{user.days}</p>
                    <p className='det-text' style={{ marginTop: "-50px" }}><FontAwesomeIcon icon={faUsers} style={{ marginRight: "20px", marginLeft: "220px" }} />{user.people}</p>
                    <p className='det-text'><FontAwesomeIcon icon={faHotel} style={{ marginRight: "20px" }} /><FontAwesomeIcon icon={faWifi} style={{ marginRight: "20px" }} /><FontAwesomeIcon icon={faPlane} style={{ marginRight: "20px" }} /><FontAwesomeIcon icon={faClipboard} style={{ marginRight: "20px" }} /><FontAwesomeIcon icon={faCarSide} style={{ marginRight: "20px" }} /></p>
                    <button className='tag'>Explore</button>
                    <button className='tag' style={{ marginLeft: '100px', marginTop: '-50px' }}>Family</button>
                    <button className='tag' style={{ marginLeft: '190px', marginTop: '-50px' }}>Group</button>
                    <button className='tag' style={{ marginLeft: '280px', marginTop: '-50px' }}>Sightseeing</button>
                    <button className='tag' style={{ marginLeft: '400px', marginTop: '-50px' }}>custom</button>
                    <h2 className='det-head'>Tour Operator:</h2>
                    <p className='det-text'>Explore Agency</p>
                    <h2 className='det-head'>Age Range:</h2>
                    <p className='det-text'>1 to 70</p>
                    <p className='det-text' style={{ fontSize: "50px", color: "green", fontWeight: "bold", marginLeft: "300px" }}>{user.price}/-</p>
                    <button style={{ marginLeft: "300px", fontSize: "30px", fontWeight: "400", borderRadius: "40px", backgroundColor: "rgb(27, 122, 216)" }}>Book Now</button>
                </div>
            ))}
         
        </div>
    )
}

export default Kc;