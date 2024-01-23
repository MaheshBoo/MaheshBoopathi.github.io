import React from 'react'
import '../../components/populer.css'
import '../sk.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot ,faUsers ,faClock} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
function Kor() {
  return (
    <div>
    <h1 className='mah-header'>All Korea Packages</h1>
  <h2 className='mah-cho'>Choose Your Destination</h2>
  <p className='mah-line2'style={{width:"1000px"}}/>
  <p className='mah-line2' style={{width:"700px" , marginLeft:"400px"}}/>
  <div class="mah-pill-nav">
    <Link to="/">Home</Link>
    <Link to="/tours">All</Link>
    <Link to="/Indonesia">Indonesia</Link>
    <Link to="/mad">Maldivs</Link>
    <Link to="/dub">Dubai</Link>
    <Link to="/it">Italy</Link>
    <Link to="/mal">Malaysia</Link>
    <Link to="/chi">China</Link>
    <Link to="/kor" className='active'>Korea</Link>
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
    
      <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('../tour/k1.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>38,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">buddha temple</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 35</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />lovasa,Korea</p>
                <button className='det'><Link to="/n19">Details</Link></button>
              </div>
            </div>
          </li>




          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('../tour/k2.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>50,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Sikai Scap</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 5D/4N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 46</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />licovo,Korea</p>
                <button className='det'><Link to="/n20">Details</Link></button>
              </div>
            </div>
          </li>




          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('../tour/k3.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>43,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">massy falls</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 4D/3N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 45</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />karaku,Korea</p>
                <button className='det'><Link to="/n21">Details</Link></button>
              </div>
            </div>
          </li>
</ul>
</div>
</section>
</div>
  )
}

export default Kor