import React from 'react'
import '../components/populer.css'
import '../pages/sk.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faUsers, faClock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'


function Demo() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3002/getUsers')
            .then(users => setUsers(users.data))
            .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <h1 className='mah-header'>Tour Packages</h1>
            <h2 className='mah-cho'>Choose Your Destination</h2>
            <p className='mah-line2' style={{ width: "1000px" }} />
            <p className='mah-line2' style={{ width: "700px", marginLeft: "400px" }} />
            <div class="mah-pill-nav">
                <Link to="/">Home</Link>
                <Link class="active">All</Link>
                <Link to="/Indonesia">Indonesia</Link>
                <Link to="/mad">Maldivs</Link>
                <Link to="/dub">Dubai</Link>
                <Link to="/it">Europe</Link>
                <Link to="/mal">Malaysia</Link>
                <Link to="/chi">China</Link>
                <Link to="/kor">Korea</Link>
                <Link to="/cub">Cuba</Link>
                <Link to="/swit">Switzerland</Link>
                <Link to="/fin">Finland</Link>
                <Link to="/scot">Scotland</Link>
                <Link to="/mex">Mexico</Link>
                <Link to="/lon">London</Link>
                <Link to="/new">New Zeland</Link>
                <Link to="/neth">NetherLand</Link>
                <Link to="/fra">France</Link>
                <Link to="/ire">Ireland</Link>
            </div>
            <section className="pop" id="destination">
                <div className="container">
                    <ul className="pop-list">

                        {users.map(user => (
                            <li>
                                <div className="pop-card">
                                    <figure className="card-img">
                                        <img src={user.img} alt='' />
                                    </figure>
                                    <div className="card-cont">
                                        <div className="card-rat">
                                            <p style={{ fontSize: "11px" }}>From-</p>
                                            <h3>{user.price}</h3>
                                        </div>
                                        <h3 className="h3 card-tit">
                                            <p>{user.name}</p>
                                        </h3>
                                        <p className="card-text"><FontAwesomeIcon icon={faClock} />{user.days}</p>
                                        <p className="card-text"><FontAwesomeIcon icon={faUsers} />{user.people}</p>
                                        <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />{user.loc}</p>
                                    </div>
                                </div>
                            </li>
                        ))}


                    </ul>
                </div>
            </section>
        </div>
    );
}

export {Demo};