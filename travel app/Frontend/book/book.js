import React, { useState, useRef } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './book.css';

const UserProfile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dropdownRef = useRef(null);



  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post('http://localhost:3002/logins', { email, password });
      if (response.data === 'success') {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };  

  return (
    <div className="user-profile-container">
      {isLoggedIn ? (
        <div className="user-profile" ref={dropdownRef}>
          <FaUser onClick={toggleDropdown} className="user-icon" />
          {isOpen && (
            <div className="dropdown-content">
             <Link to='/cart'><button onClick={() => console.log("View Bookings")}>Bookings</button></Link>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      ) : (
        <div className="log-cont , log-form">
          <div  className='log-inp'>
            <input type="email" placeholder="email" className="value" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" className='value' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSubmit} className="login-button">Login</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
