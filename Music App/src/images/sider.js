import React, { useState, useEffect, useRef } from 'react';
import '../App.css'; // Assuming your CSS file is named App.css
import { Data } from '../data/Data'; // Import your data here

function PlayCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 6;
  const totalCards = Data.length;
  const intervalRef = useRef(null);

  useEffect(() => {
    startCarousel();

    return () => {
      stopCarousel();
    };
  }, []);

  const startCarousel = () => {
    intervalRef.current = setInterval(() => {
      goToNextSet();
    }, 3000); // Adjust autoplay interval (3000ms = 3 seconds)
  };

  const stopCarousel = () => {
    clearInterval(intervalRef.current);
  };

  const goToNextSet = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsToShow >= totalCards ? 0 : prevIndex + 1
    );
  };

  const goToPrevSet = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalCards - cardsToShow : prevIndex - 1
    );
  };

  const handleCardClick = (index) => {
    console.log(`Card picked: ${Data[index].name}`);
    // Add your custom logic for what happens when a card is picked
  };

  return (
    <div className="play-container">
      <div className="play-carousel">
        {Data.map((item, index) => (
          <div
            key={item.id}
            className={`play-card ${index >= currentIndex && index < currentIndex + cardsToShow ? 'visible' : 'hidden'}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="play-card-content">
              <img src={item.img} alt={item.name} className="play-card-image" />
              <div className="play-card-text">{item.name}</div>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={goToPrevSet}>
        &#10094;
      </button>
      <button className="carousel-control next" onClick={goToNextSet}>
        &#10095;
      </button>
    </div>
  );
}

export default PlayCard;
