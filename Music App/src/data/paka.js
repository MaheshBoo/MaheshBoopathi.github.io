import React, { useEffect } from 'react';
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';
import './paka.css';

const CardSlider = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className="slide-container swiper">
      <div className="slide-content">
        <div className="card-wrapper swiper-wrapper">
          {Array.from({ length: 9 }, (_, index) => (
            <div key={index} className="card swiper-slide">
              <div className="image-content">
                <span className="overlay"></span>
                <div className="card-image">
                  {/* Replace with your actual image tag */}
                  {/* <img src={`images/profile${index + 1}.jpg`} alt="" className="card-img" /> */}
                </div>
              </div>
              <div className="paka-content">
                <h2 className="name">David Dell</h2>
                <p className="description">
                  The lorem text the section that contains header with having open functionality.
                  Lorem dolor sit amet consectetur adipisicing elit.
                </p>
                <button className="button">View More</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="swiper-button-next swiper-navBtn"></div>
      <div className="swiper-button-prev swiper-navBtn"></div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default CardSlider;
