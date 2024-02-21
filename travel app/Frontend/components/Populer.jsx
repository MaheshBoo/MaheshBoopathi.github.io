import React,{useEffect,useState} from 'react';
import './populer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot ,faUsers ,faClock} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import axios from 'axios';
const PopularDestination = () => {
  const [packages, setPackages] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/getPackages?catogory=indonesia')
        .then(packages => setPackages(packages.data))
        .catch(err => console.log(err))
}, [])

  return (
    <section className="popular" id="destination">
      <div className="container">
      <p className='pop-line'/>
        <h2 className="h2 section-title">Popular Packages</h2>
        <p className='pop-line'/>
        <ul className="popular-list">          
        {packages.map(pck => (
              <li key={pck.catogory}>
                <div className="pop-card">
                  <figure className="card-img">
                    <img src={pck.img} alt='' />
                  </figure>
                  <div className="card-cont">
                    <div className="card-rat">
                      <p style={{ fontSize: "11px" }}>From-</p>
                      <h3>{pck.price}</h3>
                    </div>
                    <h3 className="h3 card-tit">
                      <a href="#">{pck.name}</a>
                    </h3>
                    <p className="card-text"><FontAwesomeIcon icon={faClock} />{pck.days}</p>
                    <p className="card-text"><FontAwesomeIcon icon={faUsers} /> {pck.people}</p>
                    <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />{pck.loc}</p>
                    <button className='det'><Link to={pck.page}>Details</Link></button>
                  </div>
                </div>
              </li>
            ))}
        </ul>
        <div className='btn-group'>
          <Link to='/tours'>
          <button className="pop-but">More Packages</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularDestination;
