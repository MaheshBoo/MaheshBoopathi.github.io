import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../App.css';
//import a1 from '../images/a1.jpg';
//import a2 from '../images/a2.jpg';
//import a3 from '../images/a3.jpg';


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
          <img src={"https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="Angular Slide" />
        </div>
        <div>
          <img src={"https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="Angular Slide" />
        </div>
        <div>
          <img src={"https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="Angular Slide" />
        </div>
        <div>
          <img src={"https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="Angular Slide" />
        </div>
        <div>
          <img src={"https://img.freepik.com/free-vector/gradient-colorful-music-festival-facebook-cover-template_23-2149156475.jpg?w=1380&t=st=1719590136~exp=1719590736~hmac=b080d8dbc96327acf5570b87e5ec35c51189479100c704aa70af1c44dbbc7074"} alt='hello'/>
        </div>
      </Carousel>
    </div>
  );
}

export default Carouselcom;
