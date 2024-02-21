import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dp1 from '../images/dp1.png'
import { faSquarePhone , faEnvelope ,faLocationDot} from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <img src={dp1} alt='profile1' style={{width:"500px" , marginBottom:'-60px' , marginLeft:"-130px" , marginTop:"-90px"}}/>
            <p className="footer-text">
              A mind that is stretched by a new experience can never go back to its old dimensions.
            </p>
          </div>
          <div className="footer-contact">
            <h4 className="contact-title">Contact Us</h4>
            <p className="contact-text">Feel free to contact and reach us !!</p>
            <ul>
              <li className="contact-item">
              <FontAwesomeIcon icon={faSquarePhone} />
                <a href="tel:+91 9988776655" className="contact-link">+91 9988776655</a>
              </li>
              <li className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:www.explore.com" className="contact-link">www.explore.com</a>
              </li>
              <li className="contact-item">
              <FontAwesomeIcon icon={faLocationDot} />
                <address>136,Elfan Street,West Mumbai</address>
              </li>
            </ul>
          </div>
          <div className="footer-form">
            <p className="form-text">Subscribe our newsletter for more update & news !!</p>
            <form action="" className="form-wrapper">
              <input type="email" name="email" className="input-field" placeholder="Enter Your Email" required />
              <button type="submit" className="btn btn-secondary">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
