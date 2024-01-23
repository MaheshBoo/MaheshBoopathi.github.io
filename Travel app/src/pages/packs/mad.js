import React from 'react'
import '../sk.css'
import '../../components/populer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot ,faUsers ,faClock} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function Mad() {
  return (
    <div>
      <h1 className='mah-header'>All Maldivs Packages</h1>
    <h2 className='mah-cho'>Choose Your Destination</h2>
    <p className='mah-line2'style={{width:"1000px"}}/>
    <p className='mah-line2' style={{width:"700px" , marginLeft:"400px"}}/>
    <div class="mah-pill-nav">
    <Link to="/">Home</Link>
    <Link to="/tours">All</Link>
    <Link to="/Indonesia">Indonesia</Link>
    <Link to="/mad" className='active'>Maldivs</Link>
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
    <Link to="/neth">NetherLand</Link>
    <Link to="/fra" >France</Link>
    <Link to="/ire">Ireland</Link>
    </div>
    <section className="pop" id="destination">
      <div className="container">
        <ul className="pop-list">
        <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('../tour/ma1.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>63,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">down town</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 5D/4N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 30</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} /> Maldivs,Berumuda</p>
                <button className='det'><Link to="/n7">Details</Link></button>
              </div>
            </div>
          </li>

          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('../tour/ma2.jpg')} alt=''/>
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
                <button className='det'><Link to="/n8">Details</Link></button>
              </div>
            </div>
          </li>


          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('../tour/ma3.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>45,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Snake Land</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 30</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} /> Maldivs,Berumuda</p>
                <button className='det'><Link to="/n9">Details</Link></button>
              </div>
            </div>
          </li>
</ul>
</div>
</section>
    </div>
  )
}

export default Mad