import React from 'react'
import '../../components/populer.css'
import '../sk.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot ,faUsers ,faClock} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function Chi() {
  return (
    <div>
    <h1 className='mah-header'>All China Packages</h1>
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
    <Link to="/chi" className='active'>China</Link>
    <Link to="/kor" >Korea</Link>
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
              <img src={require('../tour/c1.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>32,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Masive Town</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 5D/4N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 26</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />Honk Kong</p>
                <button className='det'><Link to="/n16">Details</Link></button>
              </div>
            </div>
          </li>



          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('../tour/c2.jpg')} alt=''/>
              </figure>
              <div className="card-cont">
                <div className="card-rat">
                    <p style={{fontSize:"11px"}}>From-</p>
                    <h3>28,000</h3>
                </div>
                <h3 className="h3 card-tit">
                  <a href="#">Sholin Temple</a>
                </h3>
                <p className="card-text"><FontAwesomeIcon icon={faClock}/> 3D/2N</p>
                <p className="card-text"><FontAwesomeIcon icon={faUsers}/> 20</p>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} />Kiyoto,China</p>
                <button className='det'><Link to="/n17">Details</Link></button>
              </div>
            </div>
          </li>



          <li>
            <div className="pop-card">
              <figure className="card-img">
              <img src={require('../tour/c3.jpg')} alt=''/>
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
                <button className='det'><Link to="/n18">Details</Link></button>
              </div>
            </div>
          </li>
      

</ul>
</div>
</section>
</div>
  )
}

export default Chi