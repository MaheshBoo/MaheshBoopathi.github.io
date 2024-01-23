import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faSquarePhone ,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { faFacebook ,faTwitter ,faYoutube} from '@fortawesome/free-brands-svg-icons';
import dp1 from '../images/dp1.png'
import './header.css'
const Header = () => {
  return (
    <header className="header" data-header>
      <div className="overlay" data-overlay></div>
      <div className="header-top">
        <div className="container">
          <a href="tel:+91 9988776655" className="helpline-box">
            <FontAwesomeIcon icon={faSquarePhone} size="xl" style={{color:"#2096df",}}/>
            <div className="wrapper">
              <p className="helpline-title">Contact :</p>
              <p className="helpline-number">+91 9988776655</p>
            </div>
          </a>      
            <img src={dp1} alt='profile1' style={{width:"300px", marginLeft:"60px" , height:'150px' , marginTop:"-50px" , marginBottom:"-50px"}}/>
          <div className="header-btn-group">
            <button className="search-btn" aria-label="Search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <button className="nav-open-btn" aria-label="Open Menu" data-nav-open-btn>
            <FontAwesomeIcon icon={faBars} size="xl" style={{color: "#ffffff",}} />
            </button>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <ul className="social-list">
            <li>
              <FontAwesomeIcon icon={faFacebook} size='xl' style={{color:"#ffffff",}}/>
            </li>
            <li>
            <FontAwesomeIcon icon={faTwitter} size='xl' style={{color:"#ffffff",}}/>
            </li>
            <li>
            <FontAwesomeIcon icon={faYoutube} size='xl' style={{color:"#ffffff",}}/>
            </li>
          </ul>
            </div>
      </div>
    </header>
  );
};

export default Header;
