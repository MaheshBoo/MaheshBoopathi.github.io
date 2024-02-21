import React from 'react'
import '../../components/populer.css'
import '../sk.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot ,faUsers ,faClock} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function Neth() {
  return (
    <div>
    <h1 className='mah-header'>All NetherLand Packages</h1>
  <h2 className='mah-cho'>Choose Your Destination</h2>
  <p className='mah-line2'style={{width:"1000px"}}/>
  <p className='mah-line2' style={{width:"700px" , marginLeft:"400px"}}/>
  <div class="mah-pill-nav">
  <Link to="/">Home</Link>
    <Link to="/tours">All</Link>
    <Link to="/Indonesia">Indonesia</Link>
    <Link to="/mad">Maldivs</Link>
    <Link to="/dub" >Dubai</Link>
    <Link to="/it">Italy</Link>
    <Link to="/mal">Malaysia</Link>
    <Link to="/chi" >China</Link>
    <Link to="/kor" >Korea</Link>
    <Link to="/cub" >Cuba</Link>
    <Link to="/swit">Switzerland</Link>
    <Link to="/fin" >Finland</Link>
    <Link to="/scot">Scotland</Link>
    <Link to="/mex">Mexico</Link>
    <Link to="/lon">London</Link>
    <Link to="/new">New Zeland</Link>
    <Link to="/neth" className='active'>NetherLand</Link>
    <Link to="/fra" >France</Link>
    <Link to="/ire">Ireland</Link>

  </div>
  <section className="pop" id="destination">
    <div className="container">
      <ul className="pop-list">

      <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('../tour/ne1.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>52,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Flower Garden</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 5D/4N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 30</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />indku,Netherlands</p>
                <button className='det'><Link to="/n43">Details</Link></button>
              </div>
            </div>
          </li>


          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('../tour/ne2.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>46,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Parfi</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 40</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />kichica,Netherlands</p>
                <button className='det'><Link to="/n44">Details</Link></button>
              </div>
            </div>
          </li>


          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('../tour/ne3.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>52,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">River City</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 20</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />kanpu,Netherland</p>
                <button className='det'><Link to="/n45">Details</Link></button>
              </div>
            </div>
          </li>


</ul>
</div>
</section>
</div>
  )
}

export default Neth