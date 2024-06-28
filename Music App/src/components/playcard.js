import React, { useState } from 'react';
import '../App.css';
import { Audiodata } from '../data/Audiodata';
import AudioPlayer from './Player';
import Card from './Card';

const PlayCard = () => {
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
    <div>
      <div className="play-container">
        {Audiodata.map((item) => (
          <Card key={item.id} item={item} onCardClick={handleCardClick} />
        ))}
      </div>
      <AudioPlayer
        audioSrc={currentAudio.audioSrc}
        imageUrl={currentAudio.imageUrl}
        trackTitle={currentAudio.trackTitle}
        artistName={currentAudio.artistName}
      />
    </div>
  );
};

export default PlayCard;
