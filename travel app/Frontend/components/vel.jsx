import React from "react";
import './vel.css';
import AboutBackground from "../pages/images/back.png";
import women from '../pages/images/pic/women.png'


const Vel = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={women} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        We are more than just a travel agency
        </h1>
        <p className="primary-text">
        Welcome to Explore, where the world is your destination and every journey is an adventure waiting to unfold.
        your personal gateway to a world of discovery, exploration, and unforgettable experiences.we are At Explore,
        we understand that travel is not just about reaching a destination.it's about the journey, 
        </p>
        <p className="primary-text">
        The people you  meet, and the memories you create along the way.With a passion for travel and a commitment to excellence. 
        we strive to provide you with the best possible travel experiences tailored to your preferences.
        </p>
        <div className="about-buttons-container">
          <button className="abo-but">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Vel;