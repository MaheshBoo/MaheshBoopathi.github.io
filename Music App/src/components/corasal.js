import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../App.css';
import a1 from '../images/a1.jpg';
import a2 from '../images/a2.jpg';
import a3 from '../images/a3.jpg';


const Carouselcom = () => {
  return (
    <div className="carousel-container">
      <Carousel 
        showThumbs={false} 
        showStatus={false} 
        infiniteLoop 
        useKeyboardArrows 
        autoPlay
        className="carousel"
      >
        <div>
          <img src={a1} alt="React Slide" />
          <p className="legend">First slide label</p>
        </div>
        <div>
          <img src={a2} alt="Vue Slide" />
          <p className="legend">Second slide label</p>
        </div>
        <div>
          <img src={a3} alt="Angular Slide" />
          <p className="legend">Third slide label</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Carouselcom;
