import React, { useState } from 'react';
import { CCard } from '@coreui/react';
import '../App.css';
import { Audiodata } from '../data/Audiodata';
import AudioPlayer from './Player';

const Card = () => {
  const [currentAudio, setCurrentAudio] = useState({
    audioSrc: '',
    imageUrl: '',
    trackTitle: '',
    artistName: ''
  });

  const handleCardClick = (item) => {
    setCurrentAudio({
      audioSrc: item.audioSrc,
      imageUrl: item.img,
      trackTitle: item.name,
      artistName: item.artist
    });
  };

  return (
    <div className="card-container">
      {Audiodata.map((item) => (
        <CCard className="custom-card" key={item.id} onClick={() => handleCardClick(item)}>
          <img src={item.img} alt={item.name} className="card-image" />
          <div className="card-text">{item.name}</div>
        </CCard>
      ))}
      <AudioPlayer
        audioSrc={currentAudio.audioSrc}
        imageUrl={currentAudio.imageUrl}
        trackTitle={currentAudio.trackTitle}
        artistName={currentAudio.artistName}
      />
    </div>
  );
};

export default Card;
