import React from 'react';
import { Link} from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <header className="header" data-header>
      <div className="header-bottom">
        <div className='Navbar'>
          <div className="nav-container">
            <nav className="navbar" data-navbar>
              <div className="container">
                <ul className="navbar-list">       
                  <li className="navbar-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="navbar-item">
                    <a href="/about">About</a>
                  </li>
                  <li className="navbar-item">
                    <Link to="/Destination">Destinations</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/tours">Tours</Link>
                  </li>
                </ul>
              </div>
              <div className='sign'><Link to='/log'><button className='sign-txt'>Login</button></Link></div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
