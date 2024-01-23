import React from 'react';
import './populer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot ,faUsers ,faClock} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
const PopularDestination = () => {
  return (
    <section className="popular" id="destination">
      <div className="container">
      <p className='pop-line'/>
        <h2 className="h2 section-title">Popular Packages</h2>
        <p className='pop-line'/>
        <ul className="popular-list">
          

        <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('../pages/tour/d1.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>30,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">BurjKali</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 32</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />Abudabi,Dubai</p>
                <button className='det'>Details</button>
              </div>
            </div>
          </li>


          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('../pages/tour/c3.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>34,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">bampoo forest</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 5D/4N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 40</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />Shankai,China</p>
                <button className='det'>Details</button>
              </div>
            </div>
          </li>
        
          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('../pages/tour/fi3.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>65,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">fronzon town</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 5D/4N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 30</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />lasi,Finland</p>
                <button className='det'>Details</button>
              </div>
            </div>
          </li>

          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('../pages/tour/i1.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>78,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">love lake</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 6D/5N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 34</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />ranco,Italy</p>
                <button className='det'>Details</button>
              </div>
            </div>
          </li>

          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('../pages/tour/ma2.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>35,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">ocean resort</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 22</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} /> Maldivs,Berumuda</p>
                <button className='det'>Details</button>
              </div>
            </div>
          </li>

          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('../pages/tour/n2.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>62,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Silent River</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 5D/4N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 56</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />Raps,New zealand</p>
                <button className='det'>Details</button>
              </div>
            </div>
          </li>
          
          
        </ul>
        <div className='btn-group'>
          <Link to='/tours'>
          <button className="btn btn-primary">More Packages</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularDestination;
